import { describe, expect, it } from "vitest";
import { buildCelestialConfig } from "@/lib/starMapConfig";

describe("buildCelestialConfig", () => {
  it("builds a d3-celestial config from user options", () => {
    const config = buildCelestialConfig({
      latitude: 47.4979,
      longitude: 19.0402,
      dateTimeIso: "2026-03-20T21:30",
      showConstellationNames: true,
      showConstellationBoundaries: false,
      projection: "airy",
    });

    expect(config.location).toEqual([19.0402, 47.4979]);
    expect(config.formFields.location).toBe(false);
    expect(config.constellations.names).toBe(true);
    expect(config.constellations.bounds).toBe(false);
    expect(config.projection).toBe("airy");
    expect(config.datapath).toContain("https://ofrohn.github.io/data/");
    expect(config.date.toISOString()).toContain("2026-03-20T21:30");
  });

  it("falls back to a valid date when the input is invalid", () => {
    const config = buildCelestialConfig({
      latitude: 0,
      longitude: 0,
      dateTimeIso: "not-a-date",
      showConstellationNames: false,
      showConstellationBoundaries: false,
      projection: "orthographic",
    });

    expect(config.date).toBeInstanceOf(Date);
    expect(Number.isNaN(config.date.getTime())).toBe(false);
  });
});
