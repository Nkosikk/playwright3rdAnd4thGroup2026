# Playwright Testing Suite

A comprehensive end-to-end testing suite using Playwright with TypeScript.

## Prerequisites

- Node.js 16+ 
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers (already done)
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Debug tests
npm run test:debug

# Run tests in specific browser
npm run test:chrome      # Chromium only
npm run test:firefox     # Firefox only
npm run test:webkit      # Safari only

# View test report
npm run test:report
```

## Project Structure

```
.
├── tests/
│   ├── example.spec.ts       # Example test file
│   └── *.spec.ts             # Test files (*.spec.ts pattern)
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Configuration

Edit `playwright.config.ts` to customize:
- Base URL for tests
- Browsers to test against
- Screenshots and video recording
- Test timeouts and retries
- Reporter settings

## Writing Tests

Tests are in the `tests/` directory with `.spec.ts` extension.

Example:
```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## CI/CD Integration

The project is ready for CI/CD integration. In `playwright.config.ts`:
- Tests run serially in CI (workers: 1)
- Failed tests retry automatically
- HTML report generated for each run

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Tests](https://playwright.dev/docs/debug)

## License

MIT
