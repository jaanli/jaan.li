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
import {narrativeMap, narrativeMapLegend} from "./components/narrativeMap.js";
```

```js
const us = await FileAttachment("data/us-states.json").json();
const nation = us.features.find(({id}) => id === "nation");
const statemesh = us.features.find(({id}) => id === "statemesh");
```

```js
// Load qualitative narrative data snapshots
const narrativeData = FileAttachment("data/individual-level-elicited-ethnographic-narrative-data.csv").csv({typed: true});
```

```js
// Map location places to lat/lon
const places = {
  "LAX": {lon: -118.2437, lat: 34.0522, "radius": 10},
  "GOOG": {lon: -122.0841, lat: 37.4219, "radius": 20},
  "DFW": {lon: -96.7970, lat: 32.7767, "radius": 40},
  "NYC": {lon: -74.0060, lat: 40.7128, "radius": 5},
  "PTON": {lon: -74.6702, lat: 40.3431, "radius": 23}
};
```

```js
// Map individual narrativeData to locations object with lat and lon
narrativeData.forEach(d => {
  d.location = places[d.id];
});
```

```js
// Date/time format/parse
const timeParse = d3.utcParse("%Y-%m-%dT%H");
const hourFormat = d3.timeFormat("%-I %p");

// Configure hours ago input
const MS_IN_AN_HOUR = 1000 * 60 * 60;
const hours = [...new Set(narrativeData.map(d => d.period))].map(timeParse);
const nowHour = new Date();
const [startHour, endHour] = d3.extent(hours);
const hoursBackOfData = Math.ceil(Math.abs(nowHour - startHour) / (MS_IN_AN_HOUR));
const hoursAgoInput = Inputs.range([hoursBackOfData, 0], {step: 1, value: 0, width: 150});
const hoursAgo = Generators.input(hoursAgoInput);
hoursAgoInput.querySelector("input[type=number]").remove();
```

```js
// Establish current hour and relative day
const currentHour = new Date();
const historicHour = new Date(currentHour - hoursAgo * MS_IN_AN_HOUR);
const relativeDay = () => historicHour.toDateString() === currentHour.toDateString() ? "Today" : "Pre-training phase";
```


```js
// Narrative datapoints up to the most recent hour for each location
const narrativeDataAll = d3.group(narrativeData, d => d.period);
const narrativeDataCurrent = narrativeDataAll.get(hours[hoursAgo].toISOString().substring(0, 13));
const narrativeDataLatest = narrativeDataAll.get(hours[0].toISOString().substring(0, 13));
```


```js
function centerResize(render) {
  const div = resize(render);
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  return div;
}
```

```js
// Percent change for most recent 2 hours of data by location
const narrativeDataChange = d3.rollup(narrativeData, (d) => ((d[hoursAgo]?.description.length - d[hoursAgo + 1]?.description.length) / d[hoursAgo]?.description.length) * 100, (d) => d["location"] );
```

<div class="grid grid-cols-4">
  <div class="card grid-colspan-2 grid-rowspan-3">
    <figure style="max-width: none;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h1 style="margin-top: 0.5rem;">${hourFormat(currentHour)}</h1>
        <div>${relativeDay()}</div>
        <div style="display: flex; align-items: center;">
          <div>-${hoursBackOfData} hrs</div>
          ${hoursAgoInput}
          <div style="padding-left: 0.5rem;">now</div>
        </div>
      </div>
      ${centerResize((width) => narrativeMap({
        narrativeDataChange,
        narrativeDataLatest,
        narrativeData,
        nation,
        statemesh,
        width
      }))}
      ${centerResize((width) => narrativeMapLegend(width))}
      <figcaption>
        Training epoch is representative of societal norms. Dates shown in your local time.
      </figcaption>
    </figure>
  </div>
</div>

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
