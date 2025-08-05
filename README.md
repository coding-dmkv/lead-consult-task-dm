# Lead Consult UI Test Suite

This repository contains automated end-to-end UI tests for the [Lead Consult](https://www.leadconsult.eu) website using [Playwright](https://playwright.dev/). It is structured with the Page Object Model to ensure maintainability, clarity, and scalability.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Configuration](#configuration)
- [License](#license)

## Overview

This suite verifies critical public-facing functionality of the Lead Consult website, including:

- Navigation flow and menu behavior
- UI validation on the About us page
- Validation logic for contact forms
- Input field interaction and submission behavior
- Error handling (e.g. missing CAPTCHA)

## Project Structure

```
.
├── pages/                          # Page object models
│   ├── contact-us-page.js
│   └── home-page.js
├── tests/                          # Automated Playwright test specs
│   ├── tc01-header-navigation.spec.js
│   ├── tc02-about-us-validation.spec.js
│   ├── tc03-contact-us-validation.spec.js
│   ├── tc04-contact-us-form-fill.spec.js
│   └── tc05-contact-us-send-without-captcha.spec.js
├── playwright.config.js            # Global test config
├── package.json                    # Project metadata and dependencies
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js v18 or higher
- npm (Node package manager)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/coding-dmkv/lead-consult-interview.git
cd lead-consult-interview
npm install
npx playwright install
```

## Running Tests

To run all tests:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/tc04-contact-us-form-fill.spec.js
```

To run tests in headed mode:

```bash
npx playwright test --headed
```

To run tests in a specific browser:

```bash
npx playwright test --project=firefox
```

To generate an HTML report:

```bash
npx playwright test --reporter=html
```

## Test Coverage

| Test File                                      | Purpose                                        |
| ---------------------------------------------- | ---------------------------------------------- |
| `tc01-header-navigation.spec.js`               | Validates top navigation links and routing     |
| `tc02-about-us-validation.spec.js`             | Verifies presence of key content on About page |
| `tc03-contact-us-validation.spec.js`           | Checks required form fields                    |
| `tc04-contact-us-form-fill.spec.js`            | Fills out the contact form                     |
| `tc05-contact-us-send-without-captcha.spec.js` | Asserts error when submitting without CAPTCHA  |

## Configuration

All settings are defined in `playwright.config.js`.

Key defaults:

- `headless`: `true` by default
- `viewport`: `{ width: 1280, height: 720 }`
- `timeout`: 120 seconds per test

Override `headless` from CLI:

```bash
npx playwright test --headed
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

