# GeoData

GeoData is a TypeScript library that provides utilities for working with geographical data, including retrieving country information, determining if two countries share a border, and calculating the distance between two countries.

## Features

- Retrieve country information by ISO 3166-1 alpha-2 code.
- Check if two countries share a border.
- Calculate the distance between two countries using their coordinates.

## Usage

Importing the library:

```typescript
import { GeoData } from "@ruhisfi/geodata";
```

Retrieve country information:

```typescript
const country = GeoData.getCountry("US");
console.log(country); // Output: { code: "US", name: "United States of America", region: "North America", lat: 37.0902, lon: -95.7129, borders: ["CA", "MX"] }
```

Check if two countries share a border:

```typescript
const sharesBorder = GeoData.doesBorder("US", "CA");
console.log(sharesBorder); // Output: true
```

Caculate the distance between two countries:

```typescript
const distance = GeoData.getDistance("FI", "US");
console.log(distance); // Output: Distance in kilometers
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
