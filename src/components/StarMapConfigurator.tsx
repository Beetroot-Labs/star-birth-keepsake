import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  buildCelestialConfig,
  clampCoordinate,
  type CelestialProjection,
} from "@/lib/starMapConfig";

type CelestialWindow = Window & {
  Celestial?: {
    display: (config: ReturnType<typeof buildCelestialConfig>) => void;
  };
};

const SCRIPT_IDS = {
  d3: "celestial-d3-script",
  celestial: "celestial-script",
  css: "celestial-style",
};

const projectionOptions: Array<{ label: string; value: CelestialProjection }> = [
  { label: "Orthographic", value: "orthographic" },
  { label: "Airy", value: "airy" },
  { label: "Aitoff", value: "aitoff" },
  { label: "Mercator", value: "mercator" },
  { label: "Mollweide", value: "mollweide" },
  { label: "Winkel Tripel", value: "winkel3" },
];

const loadExternalAsset = (
  id: string,
  tag: "script" | "link",
  attributes: Record<string, string>,
) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(id);
    if (existing) {
      resolve();
      return;
    }

    const element = document.createElement(tag);
    element.id = id;

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    element.addEventListener("load", () => resolve());
    element.addEventListener("error", () => reject(new Error(`Failed to load ${id}`)));

    document.head.appendChild(element);
  });

const StarMapConfigurator = () => {
  const [latitude, setLatitude] = useState(47.4979);
  const [longitude, setLongitude] = useState(19.0402);
  const [dateTimeIso, setDateTimeIso] = useState("2026-03-20T21:30");
  const [projection, setProjection] = useState<CelestialProjection>("orthographic");
  const [showConstellationNames, setShowConstellationNames] = useState(true);
  const [showConstellationBoundaries, setShowConstellationBoundaries] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const config = useMemo(
    () =>
      buildCelestialConfig({
        latitude,
        longitude,
        dateTimeIso,
        projection,
        showConstellationNames,
        showConstellationBoundaries,
      }),
    [dateTimeIso, latitude, longitude, projection, showConstellationBoundaries, showConstellationNames],
  );

  useEffect(() => {
    let cancelled = false;

    const loadAssets = async () => {
      try {
        await loadExternalAsset(SCRIPT_IDS.css, "link", {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/ofrohn/d3-celestial/celestial.css",
        });

        await loadExternalAsset(SCRIPT_IDS.d3, "script", {
          src: "https://cdn.jsdelivr.net/npm/d3@3.5.17/d3.min.js",
        });

        await loadExternalAsset(SCRIPT_IDS.celestial, "script", {
          src: "https://cdn.jsdelivr.net/gh/ofrohn/d3-celestial/celestial.min.js",
        });

        if (!cancelled) {
          setAssetsReady(true);
        }
      } catch (error) {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : "Failed to load celestial assets");
        }
      }
    };

    loadAssets();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleRender = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const celestialWindow = window as CelestialWindow;
    if (!assetsReady || !celestialWindow.Celestial) {
      setLoadError("The star map renderer is not ready yet. Please wait a moment and try again.");
      return;
    }

    setLoadError(null);
    celestialWindow.Celestial.display(config);
  };

  return (
    <section id="configure" className="bg-background py-24 lg:py-28">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2 lg:px-12">
        <form className="space-y-6 rounded-2xl border border-border bg-card p-6" onSubmit={handleRender}>
          <h2 className="text-3xl font-serif font-semibold">Star Map Configurator</h2>
          <p className="text-sm text-muted-foreground">
            Choose birth details and render a live star map with d3-celestial.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-1 text-sm">
              <span>Latitude</span>
              <input
                className="w-full rounded-md border border-border bg-background px-3 py-2"
                type="number"
                step="0.0001"
                value={latitude}
                onChange={(event) => setLatitude(clampCoordinate(Number(event.target.value), -90, 90))}
              />
            </label>

            <label className="space-y-1 text-sm">
              <span>Longitude</span>
              <input
                className="w-full rounded-md border border-border bg-background px-3 py-2"
                type="number"
                step="0.0001"
                value={longitude}
                onChange={(event) => setLongitude(clampCoordinate(Number(event.target.value), -180, 180))}
              />
            </label>
          </div>

          <label className="block space-y-1 text-sm">
            <span>Date and time</span>
            <input
              className="w-full rounded-md border border-border bg-background px-3 py-2"
              type="datetime-local"
              value={dateTimeIso}
              onChange={(event) => setDateTimeIso(event.target.value)}
            />
          </label>

          <label className="block space-y-1 text-sm">
            <span>Projection</span>
            <select
              className="w-full rounded-md border border-border bg-background px-3 py-2"
              value={projection}
              onChange={(event) => setProjection(event.target.value as CelestialProjection)}
            >
              {projectionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showConstellationNames}
                onChange={(event) => setShowConstellationNames(event.target.checked)}
              />
              Show constellation names
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showConstellationBoundaries}
                onChange={(event) => setShowConstellationBoundaries(event.target.checked)}
              />
              Show constellation boundaries
            </label>
          </div>

          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Render star map
          </button>

          {loadError ? <p className="text-sm text-destructive">{loadError}</p> : null}
        </form>

        <div className="rounded-2xl border border-border bg-card p-3">
          <div id="star-map-canvas" className="min-h-[480px] rounded-xl bg-slate-950" />
          <p className="mt-3 text-xs text-muted-foreground">
            Renderer: d3-celestial by ofrohn. Click “Render star map” after changing options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StarMapConfigurator;
