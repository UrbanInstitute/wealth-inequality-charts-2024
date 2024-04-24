# 9 Charts on wealth inequality 2024 update

This repository is the source code for the 2024 update to the [Urban Institute's '9 Charts on Wealth Inequality' feature](https://apps.urban.org/features/wealth-inequality-charts/).

## Development requirements

- [Node.js](https://nodejs.org/en/) >= 18.0.0
- [NPM](https://docs.npmjs.com/cli/v9/commands/npm)

For using this project's R scripts, you'll need a working environment with the following packages installed:

```R
install.packages("tidyverse")
install.packages("jsonlite")
install.packages("here")
devtools::install_github("munichrocker/DatawRappr")
```

To interact with the Datawrapper API, you'll also need a Datawrapper API key, and you can authenticate with a one time step:

```R
datawrapper_auth(api_key = "your-api-key-here")
```

## Updating the content for this project

Text and information about each is stored in an [ArchieML](http://archieml.org/) formatted document, stored as a Google document. You can download a copy of the latest content by running:

```bash
npm run content
```

This raw content is also archived in this repository as `data/source/site_content.txt` in case access to the Google document is not possible.

The charts in this project are created using Datawrapper. These charts can be updated with new text programmatically using the Datawrapper API and the R programming language. Make sure you have the necessary R dependencies and have authenticated with the Datawrapper API. You make updates by running:

```bash
npm run update-charts
```

This will edit the charts in Datawrapper, but it won't publish those updates in case you'd like to review them first. Once you're ready to publish, you can run

```bash
npm run publish-charts
```


## Data

Source data files are included in Excel format in the `data/source` directory. These files were used to setup the initial charts in Datawrapper and are stored in the repository for reference or in case of future updates.


## Getting started

Open up the project directory in a terminal and install the project dependencies by running:

```bash
npm install
```

## Development

You should now be ready to start developing! Start a local server with:

```bash
npm run dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173) to see your project running.

## Building for production

If you need to preview a production build locally, you can build your project with:

```bash
npm run build
```

This will generate a production-ready build of your project in the `dist` directory.

You can view the build you just created by running:

```bash
npm run preview
```

and opening your browser to: [http://localhost:4173](http://localhost:4173)

