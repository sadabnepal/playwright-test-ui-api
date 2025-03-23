# Playwright TypeScript Test Automation Framework

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
npx playwright install --with-deps --chromium
npx playwright install --with-deps --webkit
```

Run tests and Generate Report

```bash
npm test            [ run all tests ]
npm run test:chrome [ Run UI tests in Chromium ]
npm run test:webkit [ Run UI tests in Webkit ]
npm run test:api    [ Run API tests ]
```

Code Analyze and Fix
```bash
npm run lint
npm run lint:fix
```

check script section of package.json for more test commands


TODO:
- update readme file

## Sample Report:
![Report](./samples/report.png)
