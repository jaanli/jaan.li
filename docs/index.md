<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

<div class="hero">
  <h1>Yo!</h1>
  <h2>What's up! I am Jaan and am &nbsp;<code style="font-size: 90%;">editing this page</code> to change over from my old website.</h2>
  <a href="https://jaan.io">The old site with all the SEO juice<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>


```js
import {balancingAuthoritiesMap} from "./components/map.js";
```

```js
const us = await FileAttachment("data/us-states.json").json();
const nation = us.features.find(({id}) => id === "nation");
const statemesh = us.features.find(({id}) => id === "statemesh");
```

```js
const biographyData = FileAttachment("data/individual-level-elicited-ethnographic-narrative-data.csv").csv({typed: true});
```

```js
// Map location abbreviations to lat/lon
const locations = new Map([
  ["LA", [-118.2437, 34.0522]],
  ["LosAltos", [-122.0841, 37.4219]],
  ["Dallas", [-96.7970, 32.7767]],
  ["NYC", [-74.0060, 40.7128]],
  ["Princeton", [-74.6702, 40.3431]]
]);
```

```js
// Configure years ago input
const yearsAgoInput = Inputs.range([0, 10], {step: 1, value: 0, width: 150});
const yearsAgo = Generators.input(yearsAgoInput);
```

```js
// Most recent year for each location
const biographyDataAll = d3.range(1950, 1961).map((year) => d3.rollup(biographyData, (d) => d.find(e => e.year === year)?.description, d => d.location));
const biographyDataCurrent = biographyDataAll[yearsAgo];
const biographyDataLatest = biographyDataAll[0];
```

```js
// Percent change for most recent 2 years of data by location
const biographyDataChange = d3.rollup(biographyData, (d) => {
  const current = d.find(e => e.year === 1960 - yearsAgo);
  const previous = d.find(e => e.year === 1960 - yearsAgo - 1);
  return current && previous ? ((current.description.length - previous.description.length) / previous.description.length) * 100 : 0;
}, (d) => d.location);
```

```js
const biographyDataSpatial = Array.from(locations, ([location, [lon, lat]]) => ({
  id: location,
  lon,
  lat
}));
```

<div style="display: flex; flex-direction: column; align-items: center;">
  <h3 style="margin-top: 0.5rem;">Training Epoch:</h3>
  <div style="display: flex; align-items: center;">
    <div>1950</div>
    ${yearsAgoInput}
    <div style="padding-left: 0.5rem;">1960</div>
  </div>
</div>

${resize((width) => balancingAuthoritiesMap({
  baHourlyChange: biographyDataChange, 
  baHourlyLatest: biographyDataLatest,
  eiaConnRefSpatial: [],
  eiaPoints: biographyDataSpatial,
  genOnlyBA: [],
  nation,
  statemesh,
  width
}))}


---

## Next steps

Here are some ideas of things you could try…

<div class="grid grid-cols-4">
  <div class="card">
    Chart your own data using <a href="https://observablehq.com/framework/lib/plot"><code>Plot</code></a> and <a href="https://observablehq.com/framework/javascript/files"><code>FileAttachment</code></a>. Make it responsive using <a href="https://observablehq.com/framework/javascript/display#responsive-display"><code>resize</code></a>.
  </div>
  <div class="card">
    Create a <a href="https://observablehq.com/framework/routing">new page</a> by adding a Markdown file (<code>whatever.md</code>) to the <code>docs</code> folder.
  </div>
  <div class="card">
    Add a drop-down menu using <a href="https://observablehq.com/framework/javascript/inputs"><code>Inputs.select</code></a> and use it to filter the data shown in a chart.
  </div>
  <div class="card">
    Write a <a href="https://observablehq.com/framework/loaders">data loader</a> that queries a local database or API, generating a data snapshot on build.
  </div>
  <div class="card">
    Import a <a href="https://observablehq.com/framework/javascript/imports">recommended library</a> from npm, such as <a href="https://observablehq.com/framework/lib/leaflet">Leaflet</a>, <a href="https://observablehq.com/framework/lib/dot">GraphViz</a>, <a href="https://observablehq.com/framework/lib/tex">TeX</a>, or <a href="https://observablehq.com/framework/lib/duckdb">DuckDB</a>.
  </div>
  <div class="card">
    Ask for help, or share your work or ideas, on the <a href="https://talk.observablehq.com/">Observable forum</a>.
  </div>
  <div class="card">
    Visit <a href="https://github.com/observablehq/framework">Framework on GitHub</a> and give us a star. Or file an issue if you’ve found a bug!
  </div>
</div>
