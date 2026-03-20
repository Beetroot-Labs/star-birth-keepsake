export type CelestialProjection = "airy" | "aitoff" | "armadillo" | "august" | "equirectangular" | "hammer" | "lambert" | "mercator" | "mollweide" | "orthographic" | "stereographic" | "winkel3";

export type StarMapOptions = {
  latitude: number;
  longitude: number;
  dateTimeIso: string;
  showConstellationNames: boolean;
  showConstellationBoundaries: boolean;
  projection: CelestialProjection;
};

export const clampCoordinate = (value: number, min: number, max: number) => {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, value));
};

const getSafeDate = (dateTimeIso: string) => {
  const parsedDate = new Date(dateTimeIso);

  if (Number.isNaN(parsedDate.getTime())) {
    return new Date();
  }

  return parsedDate;
};

export const buildCelestialConfig = (options: StarMapOptions) => {
  const latitude = clampCoordinate(options.latitude, -90, 90);
  const longitude = clampCoordinate(options.longitude, -180, 180);

  return {
    width: 860,
    projection: options.projection,
    datapath: "https://ofrohn.github.io/data/",
    container: "#star-map-canvas",
    location: [longitude, latitude],
    date: getSafeDate(options.dateTimeIso),
    form: false,
    interactive: false,
    controls: false,
    formFields: {
      location: false,
      general: false,
      stars: false,
      dsos: false,
      constellations: false,
      lines: false,
      other: false,
      download: false,
    },
    constellations: {
      names: options.showConstellationNames,
      bounds: options.showConstellationBoundaries,
      lines: true,
    },
    stars: {
      show: true,
      limit: 6,
    },
    dsos: {
      show: false,
    },
    background: {
      fill: "#0f172a",
      stroke: "#1e293b",
      opacity: 1,
    },
  };
};
