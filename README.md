# jaan.li

Created using:

```
yarn create @observablehq
```

This is an [Observable Framework](https://observablehq.com/framework) project. To start the local preview server, run:

```
yarn dev
```


Then visit <http://localhost:3000> to preview your project.

For more, see <https://observablehq.com/framework/getting-started>.

## Project structure

A typical Framework project looks like this:

```ini
.
├─ docs
│  ├─ components
│  │  └─ timeline.js           # an importable module
│  ├─ data
│  │  ├─ launches.csv.js       # a data loader
│  │  └─ events.json           # a static data file
│  ├─ example-dashboard.md     # a page
│  ├─ example-report.md        # another page
│  └─ index.md                 # the home page
├─ .gitignore
├─ observablehq.config.js      # the project config file
├─ package.json
└─ README.md
```

**`docs`** - This is the “source root” — where your source files live. Pages go here. Each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/routing), which means that the name of the file controls where the page is served. You can create as many pages as you like. Use folders to organize your pages.

**`docs/index.md`** - This is the home page for your site. You can have as many additional pages as you’d like, but you should always have a home page, too.

**`docs/data`** - You can put [data loaders](https://observablehq.com/framework/loaders) or static data files anywhere in your source root, but we recommend putting them here.

**`docs/components`** - You can put shared [JavaScript modules](https://observablehq.com/framework/javascript/imports) anywhere in your source root, but we recommend putting them here. This helps you pull code out of Markdown files and into JavaScript modules, making it easier to reuse code across pages, write tests and run linters, and even share code with vanilla web applications.

**`observablehq.config.js`** - This is the [project configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the project’s title.

## Command reference

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `yarn install`            | Install or reinstall dependencies                        |
| `yarn dev`        | Start local preview server                               |
| `yarn build`      | Build your static site, generating `./dist`              |
| `yarn deploy`     | Deploy your project to Observable                        |
| `yarn clean`      | Clear the local data loader cache                        |
| `yarn observable` | Run commands like `observable help`                      |

## Working with secrets and API keys

* Go to repository settings: https://github.com/jaanli/jaan.li/settings/secrets/actions 
* Click add secret
* Make sure the YAML configuration for the GitHub Actions deploy script is set up to use the secret

## Deploying to GitHub Pages

* Comment out the Cloudflare secrets in the deploy script.
* Make sure the GitHub Actions deploy script YAML configuration includes the following:
```
       - name: Deploy to GitHub Pages
         uses: actions/deploy-pages@v1
         if: github.ref == 'refs/heads/main'
``` 

## Using with Cloudflare Pages

Cloudflare Pages gives free analytics and a global content delivery network for free, along with goodies like image resizing and free bandwidth.

Create a Cloudflare API Token: https://dash.cloudflare.com/profile/api-tokens with edit permissions for: `Account.Cloudflare Pages`.

Then add the following secrets to the repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` and make sure they are referenced correctly in the YAML configuration for the GitHub Actions deploy script.

Then go to Cloudflare Pages, create a new Page, connect it to the `.git` repository using your GitHub account, and note the name of the project for below, in this case https://jaan-li.pages.dev.

Then make sure the GitHub Actions deploy script YAML configuration includes the following:
```
      - uses: cloudflare/pages-action@1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: jaan.li
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## Editing with Claude & GPT-4

Constructing a prompt requires giving these large language models context. Use an app like Maccy (https://maccy.app) or Alfred (https://www.alfredapp.com) to store and retrieve your clipboard history using their keyboard shortcuts.

Start with copy and pasting the file tree for `docs` (use homebrew to install `tree` if you don't have it installed):

```
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

Then give more specific instructions with links to Observable Framework / Observable / d3 / Mosaic examples. Example prompts are in the `/prompts` directory.

## TODO
- [x] Test GitHub Pages deployment
- [x] Test Cloudflare Pages deployment
- [x] Test map example
- [ ] Modify map example
- [ ] Test Google Analytics example
- [ ] Modify map example