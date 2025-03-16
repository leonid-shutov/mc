"use strict";

const common = require("./common.js");
const { CSV } = require("./csv.js");
const { Dataset } = require("./dataset.js");

const parseCity = ({ city, country, population, area, density }) => ({
  name: city,
  country,
  population: parseFloat(population),
  area: parseFloat(area),
  density: parseFloat(density),
});

const processAndDisplayData = (data, { display }) => {
  const csv = CSV.parse(data);
  const cities = csv.records.map(parseCity);
  const dataset = new Dataset(cities);
  dataset.sortRecords("density");
  const maxDensity = dataset.firstRecord.density;
  dataset.addColumn("relativeDensity", ({ density }) =>
    common.calculatePercentage(density, maxDensity)
  );
  display.table(dataset.records);
};

module.exports = processAndDisplayData;
