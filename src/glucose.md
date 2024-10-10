---
title: Millions of glucose levels
header: |
  <div class="banner">
    <a target="_blank" href="https://github.com/jaanli/jaan.li/blob/main/src/glucose.md"><span>View source ↗</span></a>
  </div>
sql:
  glucose_full: data/glucose_full.parquet
---

# Millions of glucose levels across 300k hospitalizations of 150k people

```js
const $filter = vg.Selection.crossfilter();
const $highlight = vg.Selection.single();
```

```js
vg.plot(
  vg.frame({fill: "black"}),
  vg.raster(
    vg.from("glucose_full", {filterBy: $filter}),
    {
      x: "time",
      y: "glucose",
      fill: vg.argmax("route", "count"),
      fillOpacity: vg.sum("count"),
      width: 2016,
      height: 300,
      imageRendering: "pixelated"
    }
  ),
  vg.intervalXY({as: $filter}),
  vg.colorDomain(vg.Fixed),
  vg.colorScheme("observable10"),
  vg.opacityDomain([0, 10]),
  vg.opacityClamp(true),
  // vg.yScale("log"),
  vg.yLabel("↑ Glucose (mg/dL)"),
  vg.yDomain([40, 350]),
  vg.yTickFormat("s"),
  vg.xScale("utc"),
  vg.xLabel(null),
  vg.xDomain(948844800000, 993366720000),
  vg.width(1063),
  vg.height(550),
  vg.margins({left: 35, top: 20, bottom: 30, right: 20})
)
```

```js
vg.plot(
  vg.barX(
    vg.from("glucose_full", {filterBy: $filter}),
    {
      x: vg.sum("count"),
      y: "route",
      fill: "route",
      sort: {y: "-x", limit: 15}
    }
  ),
  vg.toggleY({as: $filter}),
  vg.toggleY({as: $highlight}),
  vg.highlight({by: $highlight}),
  vg.colorDomain(vg.Fixed),
  vg.xLabel("Hospitalization Major Diagnostic Category Counts"),
  vg.xTickFormat("s"),
  vg.yLabel(null),
  vg.width(1063),
  vg.height(300),
  vg.marginTop(5),
  vg.marginLeft(300),
  vg.marginBottom(35)
)
```

_Select bars in the chart of most-seen major diagnostic categories above to filter the heatmap and isolate patterns. Or, select a range in the heatmap to show only corresponding major diagnostic category glucose levels._

## Code

[Code for the data transform is here.](https://github.com/jaanli/mimic-iv-visualization/blob/89af4215cc1f77da1918e991f1447a175ade8117/data_processing/models/figures/glucose_full.sql)

