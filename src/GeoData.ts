import countries from "./countries";
import { Country } from "./types";

export class GeoData {
  /**
   * Retrieves a country object based on the provided country code.
   *
   * @param countryCode - The ISO 3166-1 alpha-2 code of the country to retrieve.
   * @returns The `Country` object if found, otherwise `null`.
   */
  public static getCountry(countryCode: string): Country | null {
    return countries.find((country) => country.code === countryCode) || null;
  }

  /**
   * Determines whether two countries border each other.
   *
   * @param countryCode1 - The ISO 3166-1 alpha-2 code of the first country.
   * @param countryCode2 - The ISO 3166-1 alpha-2 code of the second country.
   * @returns `true` if the two countries share a border, otherwise `false`.
   *          Returns `false` if either of the country codes is invalid.
   */
  public static doesBorder(
    countryCode1: string,
    countryCode2: string
  ): boolean {
    const country1 = this.getCountry(countryCode1);
    const country2 = this.getCountry(countryCode2);
    if (!country1 || !country2) {
      return false;
    }
    return (
      country1.borders.includes(countryCode2) ||
      country2.borders.includes(countryCode1)
    );
  }

  /**
   * Calculates the great-circle distance between two countries based on their latitude and longitude.
   * The calculation uses the Haversine formula to determine the distance in kilometers.
   *
   * @param countryCode1 - The ISO 3166-1 alpha-2 code of the first country.
   * @param countryCode2 - The ISO 3166-1 alpha-2 code of the second country.
   * @returns The distance between the two countries in kilometers, or `null` if either country is not found.
   */
  public static getDistance(
    countryCode1: string,
    countryCode2: string
  ): number | null {
    const country1 = this.getCountry(countryCode1);
    const country2 = this.getCountry(countryCode2);
    if (!country1 || !country2) {
      return null;
    }

    const R = 6371;
    const lat1 = country1.lat;
    const lon1 = country1.lon;
    const lat2 = country2.lat;
    const lon2 = country2.lon;

    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Converts the `countries` data into a JSON string representation.
   *
   * @returns {string} A JSON string representing the `countries` data.
   */
  public static toJSON(): string {
    return JSON.stringify(countries);
  }
}
