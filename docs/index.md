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
  <h2>I am &nbsp;<code style="font-size: 90%;">editing this page</code> to change over from my old website.</h2>
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
// Configure hours ago input
const timeParse = d3.utcParse("%Y-%m-%dT%H");
const hourFormat = d3.timeFormat("%-I %p");

// Configure hours ago input
const MS_IN_AN_HOUR = 1000 * 60 * 60;
const hours = [...new Set(narrativeData.map(d => d.period))].map(timeParse);
// const nowHour = new Date();
const [startHour, endHour] = d3.extent(hours);
const hoursBackOfData = Math.floor((endHour - startHour) / MS_IN_AN_HOUR) - 1;
const hoursAgoInput = Inputs.range([hoursBackOfData, 0], {step: 1, value: 0, width: 150});
const hoursAgo = Generators.input(hoursAgoInput);
hoursAgoInput.querySelector("input[type=number]").remove();
```

```js
// Establish current hour and relative day
const currentHour = new Date();
const historicHour = new Date(endHour.getTime() - (hoursBackOfData - hoursAgo) * MS_IN_AN_HOUR);
// const historicHour = new Date(currentHour.getTime() - (hoursBackOfData - hoursAgo) * MS_IN_AN_HOUR);
console.log(historicHour);

const relativeDay = () => {
  if (historicHour >= new Date("1990-01-01") && historicHour < new Date("2006-01-01")) {
    return "Fine-tuning & Deployment";
  } else if (historicHour >= new Date("2006-01-01") && historicHour < new Date("2008-01-01")) {
    return "Third Culture Kid Syndrome";
  } else if (historicHour >= new Date("2008-01-01") && historicHour < new Date("2020-01-01")) {
    return "Staging";
  } else if (historicHour >= new Date("2020-01-01") && historicHour < new Date("2030-01-01")) {
    return "Pre-training";
  } else {
    return "Unknown Phase";
  }
};
```


```js
// Narrative datapoints up to the most recent hour for each location
const narrativeDataAll = d3.group(narrativeData, d => d.period);
// Narrative datapoints up to the selected hour
const narrativeDataLatest = narrativeData.filter(d => timeParse(d.period) >= historicHour);
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

<!-- ```js
// Percent change for most recent 2 hours of data by location
const narrativeDataChange = d3.rollup(narrativeData, (d) => ((d[hoursAgo]?.description.length - d[hoursAgo + 1]?.description.length) / d[hoursAgo]?.description.length) * 100, (d) => d["location"] );
``` -->

```js
// Percent change in description length by location at the selected historic hour
const narrativeDataChange = d3.rollup(
  narrativeDataLatest,
  (d) => {
    const currentIndex = d.findIndex((e) => timeParse(e.period) <= historicHour);
    const previousIndex = currentIndex - 1;
    const current = d[currentIndex];
    const previous = d[previousIndex];
    return current && previous
      ? ((current.description.length - previous.description.length) / previous.description.length) * 100
      : 0;
  },
  (d) => d.id
);
```

<div class="grid grid-cols-4">
  <div class="card grid-colspan-2 grid-rowspan-3">
    <figure style="max-width: none;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h1 style="margin-top: 0.5rem;">${-hoursAgo} h</h1>
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
        Training epoch is representative of societal norms. Dates shown in your local time. Total FLOPs used to train this model: 1.2e+18 (estimated using https://aiimpacts.org/brain-performance-in-flops/).
      </figcaption>
    </figure>
  </div>
</div>

<a rel="me" href="https://sigmoid.social/@jaan">Mastodon</a>
