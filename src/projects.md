---
title: Machine Learning Projects
---

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
  <h1>Machine Learning</h1>
  <h2>Projects I have led or consulted on.</h2>
  <!-- <a href="https://saunalist.org">saunalist.org has global sauna listings too!<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a> -->
</div>

## ClinicalBERT

I helped build one of the first language models applied at large scale to electronic health records data. I did my best to write and rewrite the paper to be accessible to a broad audience, hoping to inspire more people to build on our work. It worked! The paper has been cited over 900 times, and the model parameters have been downloaded millions of times on HuggingFace. I have helped hospitals and companies leverage my work to improve operations, efficiency, and modeling of clinical and financial data using this language model.

Paper: https://arxiv.org/abs/1904.05342 (900+ [citations](https://scholar.google.com/scholar?cites=6197423495043069247&as_sdt=5,33&sciodt=0,33&hl=en))

## One Fact Foundation

<img src="images/payless.health-linknyc-campaign.jpg" alt="drawing" style="width:200px;"/>

I raised $350,000+ to build a non-profit foundation. We received an initial [grant](https://brown.columbia.edu/22-23-magic/) for 2022--2023 from Columbia University and Stanford Univeristy, and raised $100,000+ in the New York City Five Boro Bike Tour. Using these funds, I led a team that collected the prices from 4,000+ hospitals nationwide and built Payless Health. Further, for our first contract, I trained a resource allocator team that manages $1B AUM in the New York area, who used our open source tools such as ClinicalBERT and hospital prices to select their next insurance policy, saving upwards of $25M in premiums per year.

Websites: [payless.health](https://www.payless.health/) (hospital prices) & [onefact.org](https://www.onefact.org/) (foundation)

## Large language model and AI research

I have contributed to papers that:

* detect [pediatric fractures as well as commercial solutions](https://link.springer.com/article/10.1007/s00247-023-05754-y)
* accurately [predict molecular substructures from mass spectrometry data](https://f1000research.com/articles/10-403)
* rigorously evaluate [pre-trained embeddings for efficacy on downstreamed tasks](https://arxiv.org/abs/2009.07368)
* compare pre-trained embeddings versus my PhD thesis work for [efficient recommendation of news articles](https://ceur-ws.org/Vol-2682/short2.pdf) (This work was commissioned by [The Browser](https://thebrowser.com/) for use in their recommendation engine)
* assess the [efficacy of ClinicalBERT and other models in predicting race, ethnicity, and social deteremninants of health from clinical text](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10785932/)

## Technical Writing

I am proud of the hundreds of thousands of pageviews my writing on machine learning has received:

* [How does physics connect to machine learning?](https://jaan.io/how-does-physics-connect-machine-learning/) - tens of thousands of pageviews with an average read time of 10 minutes+.
* [Variational autoencoder tutorial](https://jaan.io/what-is-variational-autoencoder-vae-tutorial/) - this tutorial has been viewed hundreds of thousands of times with an average read time of 8 minutes+. This tutorial elucidates some of the core technology that goes into image generation models such as Midjourney or DALL-E. **The [GitHub repository](https://github.com/jaanli/variational-autoencoder) I made has over 1,000+ stars!**