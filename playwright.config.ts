import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from 'ortoni-report';

const reportConfig: OrtoniReportConfig = {
    open: process.env.CI ? 'never' : 'on-failure',
    folderPath: './reports/ortoni-report',
    filename: 'index.html',
    title: 'Playwright Test Result',
    projectName: 'OrangeHrm Test',
    testType: 'Regression',
    authorName: 'Mohammad Sadab Saqib',
    base64Image: true,
    preferredTheme: 'light',
    showProject: !true,
    stdIO: true,
    meta: {
        project: 'Playwright Test For Web, Rest API and GraphQL API',
        version: '3.0.0',
        release: 'Release.2025',
        platform: process.platform,
    }
};

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['ortoni-report', reportConfig],
        ['html', { outputFolder: './reports/playwright-report', open: 'never' }],
    ],
    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'UI chromium',
            use: { ...devices['Desktop Chrome'] },
            testDir: './tests/ui'
        },
        {
            name: 'UI webkit',
            use: { ...devices['Desktop Safari'] },
            testDir: './tests/ui'
        },
        {
            name: 'Rest API',
            testDir: './tests/api/specs/rest'
        },
        {
            name: 'GraphQL API',
            testDir: './tests/api/specs/graphql'
        }
    ]
});
