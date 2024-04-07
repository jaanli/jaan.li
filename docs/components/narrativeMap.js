// narrativeMap.js
import * as Plot from "npm:@observablehq/plot";
import { format } from "npm:d3";

// Colors and scale
const colorGenerating = "#88DCAD";
const colorUnavailable = "gray";
const color = Plot.scale({
  color: {
    type: "linear",
    domain: [-1, -0.1501, -0.15, 0, 0.15, 0.1501, 1],
    range: ["#145a95", "#145a95", "steelblue", "white", "orange", "darkorange", "darkorange"]
  }
});

// US narrative map
export function narrativeMap({
  narrativeDataChange,
  narrativeDataLatest,
  nation,
  statemesh,
  width
}) {
  return Plot.plot({
    width,
    height: width * 0.6,
    color: {
      ...color,
      transform: (d) => d / 100,
      label: "Change in description length (%) from previous hour"
    },
    projection: {
      type: "albers",
      insetTop: 15
    },
    r: {
      range: [4, 30]
    },
    marks: [
      Plot.geo(nation, { fill: "currentColor", fillOpacity: 0.1, stroke: "var(--theme-background-alt)" }),
      Plot.geo(statemesh, { stroke: "var(--theme-background-alt)", strokeWidth: 0.8 }),
      Plot.dot(narrativeDataLatest || [], {
        x: (d) => d.location.lon,
        y: (d) => d.location.lat,
        r: (d) => d.radius,
        stroke: "gray",
        strokeWidth: 1,
        fill: (d) => colorGenerating
      }),
      Plot.text(narrativeDataLatest || [], {
        x: (d) => d.location.lon,
        y: (d) => d.location.lat,
        text: (d) => (d.radius > 10 ? d.id : null),
        fontWeight: 800,
        fill: "black"
      }),
      Plot.tip(
        narrativeDataLatest || [],
        Plot.pointer({
          x: (d) => d.location.lon,
          y: (d) => d.location.lat,
          title: (d) =>
            `${d.id}\nChange from previous hour: ${
              isNaN(narrativeDataChange.get(d.id)) ? "Unavailable" : narrativeDataChange.get(d.id).toFixed(1) + "%"
            }\nLatest description: ${
              d.description || "Unavailable"
            }`
        })
      ),
      Plot.text(narrativeDataLatest, {
        x: (d) => d.location[0],
        y: (d) => d.location[1],
        text: (d) => (d.radius > 1 ? d.period : null),
        fontWeight: 800,
        fill: "black"
      }),
      Plot.tip(
        narrativeDataLatest,
        Plot.pointer({
          x: (d) => d.location[0],
          y: (d) => d.location[1],
          title: (d) =>
            `${d.period}\nChange from previous hour: ${isNaN(narrativeDataChange.get(d.period)) ? "Unavailable" : narrativeDataChange.get(d.period).toFixed(1) + "%"
            }\nLatest description: ${narrativeDataLatest[d.period] || "Unavailable"
            }`
        })
      )
    ]
  });
}

// Map legend
export function narrativeMapLegend(width) {
  console.log(width);
  return Plot.plot({
    marginTop: 15,
    width: Math.min(width - 30, 400),
    height: 60,
    y: { axis: null },
    marks: [
      Plot.raster({
        y1: 0,
        y2: 1,
        x1: -1,
        x2: 1,
        fill: (x) => color.apply(x)
      }),
      Plot.ruleX([-0.2, 0, 0.2], { insetBottom: -5 }),
      Plot.axisX([-0.2, 0, 0.2], { tickFormat: format("+.0%"), tickSize: 0 }),
      Plot.dot(["Unavailable"], {
        x: [1.2],
        r: 5,
        dx: -8,
        fill: [colorUnavailable],
        stroke: "grey"
      }),
      Plot.text(["Unavailable"], {
        x: [1.2],
        textAnchor: "start"
      })
    ]
  });
}