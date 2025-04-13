import { GeoData } from "../src/GeoData";

describe("GeoData.doesBorder", () => {
  it("should return true if two countries share a border", () => {
    expect(GeoData.doesBorder("US", "CA")).toBe(true);
    expect(GeoData.doesBorder("CA", "US")).toBe(true);
    expect(GeoData.doesBorder("US", "MX")).toBe(true);
  });

  it("should return false if two countries do not share a border", () => {
    expect(GeoData.doesBorder("US", "FR")).toBe(false);
    expect(GeoData.doesBorder("CA", "FR")).toBe(false);
  });

  it("should return false if one or both country codes are invalid", () => {
    expect(GeoData.doesBorder("US", "ZZ")).toBe(false);
    expect(GeoData.doesBorder("ZZ", "CA")).toBe(false);
    expect(GeoData.doesBorder("ZZ", "XX")).toBe(false);
  });
});
