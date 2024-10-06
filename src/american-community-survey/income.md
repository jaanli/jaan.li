---
title: "20+ year historical income histogram of the United States"
---

```js
import {DuckDBClient} from "npm:@observablehq/duckdb";
const db = DuckDBClient.of({data: FileAttachment("data/income-histogram-historical.parquet")});
```

```js
// const uniqueYears = await db.query("SELECT DISTINCT year FROM data ORDER BY year").then(data => data.map(d => d.year));
const uniqueYears = await db.query("SELECT DISTINCT year FROM data ORDER BY year")
  .then(result => {
    console.log('Query result:', result);
    if (!result.batches || !result.batches[0] || !result.batches[0].data) {
      console.error('Unexpected result structure:', result);
      return [];
    }
    const yearColumn = result.batches[0].data.children[0].values;
    if (!(yearColumn instanceof Int32Array)) {
      console.error('Year column is not an Int32Array:', yearColumn);
      return [];
    }
    return Array.from(yearColumn); // Convert Int32Array to regular array
  })
  .catch(error => {
    console.error('Query error:', error);
    return [];
  });

console.log('Unique years:', uniqueYears);

// Rest of your code...
// const yearRange = uniqueYears.length ? [uniqueYears[0], uniqueYears[uniqueYears.length - 1]] : [0, 0];
// console.log('Year range:', yearRange);

const yearRange = [uniqueYears[0], uniqueYears[uniqueYears.length - 1]]; // Min and Max years
const yearInput = Inputs.range(yearRange, {step: 1, value: 0, width: 150});
const selectedYear = Generators.input(yearInput);
yearInput.querySelector("input[type=number]").remove();
```

```js
// Order the sectors by mean income
const mostRecentYear = uniqueYears[uniqueYears.length - 1];
// const orderSectors = await db.query(`
//   SELECT sector, SUM(income * count) / SUM(count) AS mean_income
//   FROM data
//   WHERE year = ${mostRecentYear}
//   GROUP BY sector
//   ORDER BY mean_income DESC
// `).then(data => data.map(d => d.sector));
// Order the sectors by mean income
const orderSectors = await db.query(`
SELECT sector, SUM(income * count) / SUM(count) AS mean_income
FROM data
WHERE year = ${mostRecentYear}
GROUP BY sector
ORDER BY mean_income DESC
`)
.then(result => {
console.log('Order sectors query result:', result);
if (!result.batches || !result.batches[0] || !result.batches[0].data) {
  console.error('Unexpected result structure:', result);
  return [];
}
const sectorColumn = result.batches[0].data.children[0];
if (!(sectorColumn.values instanceof Uint8Array)) {
  console.error('Sector column is not a Uint8Array:', sectorColumn.values);
  return [];
}

// Decode the Uint8Array into strings
const decoder = new TextDecoder();
const sectorStrings = [];
let start = 0;
for (let i = 0; i < sectorColumn.length; i++) {
  const end = sectorColumn.valueOffsets[i];
  const sectorBytes = sectorColumn.values.subarray(start, end);
  sectorStrings.push(decoder.decode(sectorBytes));
  start = end;
}

return sectorStrings;
})
.catch(error => {
console.error('Query error:', error);
return [];
});

console.log('Ordered sectors:', orderSectors);

// Rest of your code remains the same
```

```js
const income = db.query(`
  SELECT income, count, sector FROM data
  WHERE year = ${selectedYear}
`); 
```

```js
function incomeChart(income, width) {
  // Create a histogram with a logarithmic base.
  return Plot.plot({
    width,
    marginLeft: 60,
    x: { type: "log", domain: [2_200, 1_000_000] },
    y: { axis: null }, // Hide the y-axis
    color: { legend: "swatches", columns: 6, domain: orderSectors },
    marks: [
      Plot.rectY(
        income,
        Plot.binX(
          { y: "sum" },
          {
            x: "income",
            y: "count",
            fill: "sector",
            order: orderSectors,
            thresholds: d3
              .ticks(Math.log10(2_000), Math.log10(1_000_000), 40)
              .map((d) => 10 ** d),
            tip: { format: { x: ",.3r" } }
          }
        )
      ),
    ],
  });
}
```

<div class="card">
  <h2>The sectors in which people earn the most money have shifted over the past two decades</h2>
  <h3>How much income per year 38 million people reported earning in the 2000–2022 American Community Surveys run by the United States' Census Bureau, categorized by their sector of employment.</h3>
  <h3><code style="font-size: 90%;"><a href="https://github.com/jaanli/exploring_american_community_survey_data/blob/main/american_community_survey/models/public_use_microdata_sample/figures/income-histogram-with-sector-historical-inflation-adjusted-industry-mapped.sql">Code for data transform</a></code></h3>
  <div style="display: flex; align-items: center;">
  <h1 style="margin-top: 0.5rem;">${selectedYear}</h1>
  ${yearInput}
  </div>
  ${resize((width) => incomeChart(income, width))}
</div>
