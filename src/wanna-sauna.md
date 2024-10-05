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
  <h1>Wanna Sauna?</h1>
  <h2>Saunas are inaccessible. Here's how to get one for your home, workplace, and city :)</h2>
  <a href="https://saunalist.org">saunalist.org has global sauna listings too!<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

Saunas have financial returns and non-financial returns.

The non-financial returns of saunas include:

* social connection risk score reduction (c.f. reviews on the public health risks of [loneliness](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5598785/))
* health benefits, such as reduced all-cause mortality (c.f. many articles such as [this one](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6262976/) describing research in cultures in which saunas are common, such as Finland)

Edit the following diagram [here](https://www.mermaidchart.com/app/projects/3eff3399-79fc-46e3-a424-3e78655e6142/diagrams/2168f791-4b5b-4eec-9f86-ca194dee46b7/version/v0.1/edit) if you have any suggestions, or Tweet/DM me on Twitter at [@thejaan](https://x.com/thejaan)!

```mermaid
timeline
    title 
    section Personal Saunas
        $60 : Amazon Tiny Sauna Tent or Sauna Blanket
            : Est. IRR 0% (Personal use)
        $3,000 : HSA Infrared Sauna
            : Est. IRR 0% (Personal use)
        $5,000 : Barrel Sauna (Costco/eBay/Alibaba)
            : Est. IRR 0% (Personal use)
        $10,000 : 3D Printed Concrete Sauna
            : Est. IRR 0% (Personal use)
    section Public Saunas
        $500K : Raua Saun (Tallinn)
            : 8 EUR per visit
            : Est. IRR 5-8% (10-15 year horizon)
        $20M : Kultuurisauna (Finland)
            : Free public use
            : Est. IRR N/A (Public good)
    section Workplace/School Saunas
        $100K : Tartu University (Estonia)
            : Delta Center Faculty/Student Sauna (free benefit)
            : Est. IRR N/A (Employee/Student Benefit)
        $150K : Chalmers University (Sweden)
            : CS-bastun (CS-sauna)
            : Chalmers Kårhus Union Building Sauna
            : Est. IRR N/A (Employee/Student Benefit)
    section Commercial Saunas
        $8M : Othership (NYC)
            : $50-80 per 90min session
            : Est. IRR 15-20% (5-7 year horizon)
        $30M : World Spa (Brooklyn)
            : $70-120 day pass
            : Est. IRR 12-15% (7-10 year horizon)
        $40M : Bathhouse (NYC)
            : $80-100 per visit
            : Est. IRR 10-13% (8-12 year horizon)
        $50M : Aire Baths
            : $200-300 per visit
            : Est. IRR 15-18% (6-8 year horizon)
        $200M : Therme Group Project
            : $50-100+ per visit
            : Est. IRR 8-12% (10-15 year horizon)
```