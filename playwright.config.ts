import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from 'ortoni-report';

const reportConfig: OrtoniReportConfig = {
  preferredTheme: "light",
  authorName: "Mohammad Sadab Saqib",
  projectName: "Heroku Playwright Test",
  testType: "E2E",
  title: "Playwright Test Result",
  base64Image: true,
  showProject: !true,
  open: process.env.CI ? 'never' : 'on-failure',
  stdIO: true
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['ortoni-report', reportConfig]],
  use: {
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ]
});
