import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from 'ortoni-report';

const reportConfig: OrtoniReportConfig = {
    preferredTheme: 'light',
    authorName: 'Mohammad Sadab Saqib',
    projectName: 'OrangeHrm Test',
    testType: 'E2E',
    title: 'Playwright Test Result',
    base64Image: true,
    showProject: !true,
    open: process.env.CI ? 'never' : 'on-failure',
    stdIO: true,
    meta: {
        appVersion: '3.0.0',
        description: 'Playwright test report',
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
        ['html']
    ],
    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
            testDir: './tests/ui'
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
            testDir: './tests/ui'
        },
        {
            name: 'api',
            testDir: './tests/api'
        }
    ]
});
