// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Jaan Li",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Articles",
      pages: [
        {name: "Wanna Sauna?", path: "/wanna-sauna"},
        {name: "Longform Adaptations", path: "/longform-adaptations"},
      ]
    },
    {
      name: "Machine Learning",
      pages: [
        {name: "Projects", path: "/projects"}
      ]
    },
    {
      name: "Visualizations ",
      pages: [
        {name: "Healthcare data of 1.2M people", path: "/synthetic-healthcare-data"},
        {name: "850k properties in New York real estate", path: "/new-york-real-estate"},
        {name: "Glucose levels of 150k people over time", path: "/glucose"},
        {name: "American Community Survey data from 2022", path: "/american-community-survey/"},
        {name: "Community Survey historical data from 38M+ people", path: "/american-community-survey/income"},
        {name: "Community Survey historical data from NYC, 15M+ people, by sector", path: "/american-community-survey/new-york-area"},
        {name: "Community Survey historical data from NYC, 15M+ people, by race", path: "/american-community-survey/income-by-race"}
      ]
    },
    {
      name: "Art",
      pages: [
        {name: "Modern Tarot", path: "/modern-tarot"}
      ]
    }
  ],

  // Some additional configuration options and their defaults:
  theme: "slate", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Follow me on Twitter @thejaan", // what to show in the footer (HTML)
  toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  root: "src", // path to the source root for preview
  // output: "dist", // path to the output root for build
  // search: true, // activate search
};
