// narrativeMap.js
import * as Plot from "npm:@observablehq/plot";
import {format} from "npm:d3";

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
  biographyDataChange,
  biographyDataLatest,
  locations,
  nation,
  statemesh,
  width
}) {
  return Plot.plot({
    width,
    height: width * 0.6,
    color: {
      ...color,
      transform: (d) => d,
      label: "Change in description length (%) from previous year"
    },
    projection: {
      type: "albers",
      insetTop: 15
    },
    r: {
      range: [10, 30]
    },
    marks: [
      Plot.geo(nation, {fill: "currentColor", fillOpacity: 0.1, stroke: "var(--theme-background-alt)"}),
      Plot.geo(statemesh, {stroke: "var(--theme-background-alt)", strokeWidth: 0.8}),
      Plot.dot(locations, {
        filter: (d) => !isNaN(biographyDataChange.get(d.id)),
        x: "lon",
        y: "lat",
        r: "radius",
        fill: colorGenerating,
        stroke: "gray",
        strokeWidth: 1
      }),
      Plot.dot(locations, {
        filter: (d) => !isNaN(biographyDataChange.get(d.id)),
        x: "lon",
        y: "lat",
        r: 10,
        stroke: colorUnavailable,
        strokeWidth: 1,
        fill: (d) => biographyDataChange.get(d.id)
      }),
      Plot.text(locations, {
        x: "lon",
        y: "lat",
        text: (d) => d.id,
        dx: 12,
        fontWeight: 800,
        fill: "black"
      }),
      Plot.tip(
        locations,
        Plot.pointer({
          x: "lon",
          y: "lat",
          title: (d) =>
            `${d.id}\nChange from previous year: ${
              isNaN(biographyDataChange.get(d.id)) ? "Unavailable" : biographyDataChange.get(d.id).toFixed(1) + "%"
            }\nLatest description: ${
              biographyDataLatest.get(d.id) || "Unavailable"
            }`
        })
      )
    ]
  });
}