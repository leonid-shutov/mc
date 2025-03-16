"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const data = require("./data.js");
const main = require("./main");

const expected = [
  {
    name: "Lagos",
    country: "Nigeria",
    population: 16060303,
    area: 1171,
    density: 13712,
    relativeDensity: 100,
  },
  {
    name: "Delhi",
    country: "India",
    population: 16787941,
    area: 1484,
    density: 11313,
    relativeDensity: 83,
  },
  {
    name: "New York City",
    country: "United States",
    population: 8537673,
    area: 784,
    density: 10892,
    relativeDensity: 79,
  },
  {
    name: "Sao Paulo",
    country: "Brazil",
    population: 12038175,
    area: 1521,
    density: 7914,
    relativeDensity: 58,
  },
  {
    name: "Tokyo",
    country: "Japan",
    population: 13513734,
    area: 2191,
    density: 6168,
    relativeDensity: 45,
  },
  {
    name: "Mexico City",
    country: "Mexico",
    population: 8874724,
    area: 1486,
    density: 5974,
    relativeDensity: 44,
  },
  {
    name: "London",
    country: "United Kingdom",
    population: 8673713,
    area: 1572,
    density: 5431,
    relativeDensity: 40,
  },
  {
    name: "Bangkok",
    country: "Thailand",
    population: 8280925,
    area: 1569,
    density: 5279,
    relativeDensity: 38,
  },
  {
    name: "Shanghai",
    country: "China",
    population: 24256800,
    area: 6340,
    density: 3826,
    relativeDensity: 28,
  },
  {
    name: "Istanbul",
    country: "Turkey",
    population: 14160467,
    area: 5461,
    density: 2593,
    relativeDensity: 19,
  },
];

test(`should succeed`, () => {
  const actualLogs = [];
  const mockedLogger = {
    table: (...logs) => actualLogs.push(...logs),
  };

  main(data, { display: mockedLogger });

  assert.deepEqual(actualLogs, [expected]);
});
