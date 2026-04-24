import { defineConfig, devices, withTestronautAngular } from '@testronaut/angular';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

export default defineConfig(
  withTestronautAngular({
    configPath: __filename,
    testServer: {
      command: 'ng serve --configuration testronaut --port {port} --live-reload false',
    },
  }),
  {
    testDir: '.',
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env['CI'],
    /* Retry on CI only */
    retries: process.env['CI'] ? 2 : 0,
    reporter: 'html',
    use: {
      trace: 'on-first-retry',
    },

    projects: [
      { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
      // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
      // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ],
  }
);
