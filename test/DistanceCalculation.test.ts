import { GeoData } from "../src/GeoData";

describe("Test distance calculation", () => {
  it("should calculate the distance between FI and SE", () => {
    const distance = GeoData.getDistance("FI", "SE");
    expect(distance).not.toBeNull();
    expect(distance).toBeLessThan(500);
    expect(distance).toBeGreaterThan(430);
  });

  it("should fail to calculate the distance between FI and XX", () => {
    const distance = GeoData.getDistance("FI", "XX");
    expect(distance).toBeNull();
  });
});
