we are updating a website. 

the file structure is as follows:

```bash
❯ tree --dirsfirst docs
docs
├── components
│   ├── charts.js
│   ├── map.js
│   └── timeline.js
├── data
│   ├── country-interchange.csv.js
│   ├── eia-ba-hourly.csv.js
│   ├── eia-bia-reference.csv
│   ├── eia-connections-reference.csv
│   ├── eia-system-points.json.sh
│   ├── events.json
│   ├── launches.csv.js
│   ├── us-counties-10m.json
│   ├── us-demand.csv.js
│   └── us-states.json.js
├── aapl.csv
├── eia.md
├── example-dashboard.md
├── example-report.md
├── index.md
└── penguins.csv

3 directories, 19 files
```

the contents of `eia.md` are pasted and given to you as context for reference. 

the contents of `index.md` have also been pasted and given to you as context for reference.
    
this is an observable framework project, a new software library which requires the use of asynchronous javascript.

please create the raw markdown (with embedded snippets of javascript like in these examples) for the `index.md` file.

specifically:

1. create a new map based on the `us-states.json.js` file in the `data` directory.
2. make sure to include the slider above the map. 
3. for the data that populates the map, generate synthetic data that is a function of the slider value for calendar year. give this as a separate block with a file name that i can save. 
4. this csv should be appropriately loaded in the `index.md` snippet you are creating. 
5. this csv should be populated using the same data format and schema as in the energy grid example whose entire context you have been given for reference.
6. instead of us energy grid data, you will simulate a synthetic biography of a person who has moved around los angeles, los altos, dallas, new york, and princeton, with short snippets in "malaprop man style" (https://en.wikipedia.org/wiki/Malapropism) about their experiences and excesses in each year, and momentous occasions of clarity and insight, to squeeze out the most SEO juice. these shall be no longer than one sentence long for display over hover-over tooltips using Observable Plot.

proceed step-by-step, as you are a principal software engineer at google.