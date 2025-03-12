# Playwright web testing with typescript

## Requirements:

[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

## Getting Started:

Clone Repository

```bash
git clone https://github.com/sadabnepal/playwright-test-ui-api.git
cd playwright-test-ui
```

Install Packages
```bash
npm install
npm run prepare
```

Install Browsers
```bash
npx playwright install chromium
```

Run tests and Generate Report

```bash
npm test  [run all tests]
```

Code Analyze and Fix
```bash
npm run lint
npm run lint:fix
```

check script section of package.json for more test commands


TODO:
- add fixtures to optimize page imports
- update readme file
- optimize import path

## Sample Report:
![Ortoni-Report](./samples/ortoni-report.png)