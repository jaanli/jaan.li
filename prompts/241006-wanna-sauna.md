Framework
    What is Framework?
    Getting started
    Deploying
    Embedding
Reference
    Project structure
    Markdown
    JavaScript
    Reactivity
    JSX
    Imports
    Data loaders
    Files
    SQL
    Themes
    Page loaders
    Parameterized routes
    Configuration
Inputs
Libraries
    Apache Arrow
    Arquero
    CSV
    D3
    Deck.gl
    DOT (Graphviz)
    DuckDB
    Hypertext Literal
    Leaflet
    Lodash
    Mapbox GL JS
    Mermaid
    Microsoft Excel (XLSX)
    Mosaic vgplot
    Observable Generators
    Observable Plot
    Shapefile
    SQLite
    TeX
    TopoJSON
    Vega-Lite
    ZIP
    Examples
    Converting notebooks
    Contributing

1.12.0
GitHub️ 2.4k
Mermaid
Mermaid is a language for expressing node-link diagrams, flowcharts, sequence diagrams, and many other types of visualizations. (See also DOT.) Observable provides a mermaid tagged template literal for convenience. This is available by default in Markdown, or you can import it like so:
import mermaid from "npm:@observablehq/mermaid";
To use in a JavaScript code block:
A
B
C
D
mermaidgraph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
You can also write Mermaid in a mermaid fenced code block:
mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

This produces:
A
B
C
D
Here are some more examples.
JohnBobAliceJohnBobAliceloop[Healthcheck]Rational thoughts prevail!Hello John, how are you?Fight against hypochondriaGreat!How about you?Jolly good!
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
Cool
Where am i?
Cool label
Class01
int chimp
int gorilla
size()
AveryLongClass
Class03
Class04
Class05
Class06
Class07
Object[] elementData
equals()
Class08
Class09
C2
C3
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 -- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 -- C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
© 2024 Observable, Inc.

take the above and generate a timeline mermaid chart (respond only in the code block), for saunas. 

on the left: $60 sauna on amazon that is a tiny little sauna tent 

then, a $3000 infrared sauna procured on HSA

then a $5000 barrel sauna from costco or ebay or alibaba
then a $10000 concrete 3d printed sauna
then a $8M buildout of othership, a sauna in new york city that costs $50-80 for a 90 minute session (estimate)
then a $20M euro estimate for kultuurissauna in finland, a public sauna designed by renowned architects  (estimate) that is FREE to use
then a $30M buildout for world spa, a world class custom architected experience in brooklyn (estimate) that is $70-120 for a day pass
then a $40M buildout of bathhouse, an upscale spa in new york city, that is $80-100 to use
then a $50M buildout of aire baths, that costs $200-300 per visit and is a luxury spa
then a $200M buildout of a therme group project, who build 300,000+ square feet developments globally, that cost $50-100+ to visit

also estimate the IRR for each (internal rate of return) and specify the time horizon for investment return on capital.