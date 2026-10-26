# k6 Performance Testing – SauceDemo

![k6](https://img.shields.io/badge/Performance%20Testing-k6-7D64FF)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E)
![Status](https://img.shields.io/badge/Project-In%20Progress-orange)

## Overview

This project demonstrates performance testing using [Grafana k6](https://grafana.com/docs/k6/latest/) against the [SauceDemo](https://www.saucedemo.com/) sample web application.

The objective is to evaluate HTTP response times, validate application responses, measure request failure rates, and establish a repeatable performance-testing workflow.

The project is designed to demonstrate practical skills in performance engineering, JavaScript-based test automation, performance metrics analysis, and CI/CD integration.

> **Note:** SauceDemo is a public demonstration application. Initial tests are intentionally lightweight. Obtain authorization before running sustained or high-concurrency load tests.

## Objectives

- Develop reusable performance tests using k6 and JavaScript.
- Measure HTTP response times and request failure rates.
- Validate responses using automated checks.
- Define performance thresholds and pass/fail criteria.
- Capture test execution results for analysis.
- Integrate performance tests into CI/CD pipelines.
- Document findings and performance-testing best practices.

## Technology Stack

| Technology | Purpose |
|---|---|
| Grafana k6 | Performance and load testing |
| JavaScript | Test scripting |
| HTTP module | HTTP request execution |
| k6 Checks | Response validation |
| k6 Thresholds | Performance acceptance criteria |
| Git and GitHub | Version control and collaboration |
| GitHub Actions | Planned CI/CD automation |

## Project Structure

```text
k6-saucedemo-performance/
├── tests/
│   └── homepage.js
├── reports/
├── .github/
│   └── workflows/
├── .gitignore
└── README.md
```

## Prerequisites

- Windows, macOS, or Linux
- [Visual Studio Code](https://code.visualstudio.com/)
- [Grafana k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)
- Git

Verify the installation:

```bash
k6 version
git --version
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/k6-saucedemo-performance.git
cd k6-saucedemo-performance
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Run the homepage test

```bash
k6 run tests/homepage.js
```

The test sends a small number of requests to the SauceDemo homepage and validates the response.

### 3. Save a test execution summary

```bash
k6 run --summary-export=reports/summary.json tests/homepage.js
```

The summary file contains metrics from the execution. Run this command after creating the `reports` directory.

## Initial Test Coverage

| Test | Validation |
|---|---|
| Homepage availability | HTTP status is 200 |
| Response content type | HTML response is returned |
| Page content | Expected SauceDemo text is present |
| Request failures | Failure rate stays below the configured threshold |
| Response time | 95th-percentile duration meets the configured target |

## Performance Acceptance Criteria

The initial script uses example thresholds that can be adjusted as the project develops.

| Metric | Initial target |
|---|---|
| HTTP request failure rate | Less than 1% |
| 95th-percentile HTTP duration | Below 2 seconds |
| Check pass rate | Above 99% |

These values are demonstration targets, not measured results or official SauceDemo service-level objectives.

## Key Performance Metrics

- **Average response time:** Mean HTTP request duration.
- **p50 latency:** Median request duration.
- **p95 latency:** Duration below which 95% of measured requests complete.
- **p99 latency:** Duration below which 99% of measured requests complete.
- **Request failure rate:** Proportion of failed HTTP requests.
- **Throughput:** Number of requests completed per unit of time.
- **Virtual users (VUs):** Simulated concurrent users executing test iterations.

## Planned Enhancements

- [x] Create initial homepage smoke test.
- [x] Add response validation and performance thresholds.
- [ ] Add controlled load-test scenarios.
- [ ] Add configurable test environments.
- [ ] Export and compare performance results.
- [ ] Add GitHub Actions workflow.
- [ ] Document baseline performance measurements.
- [ ] Add performance regression checks.
- [ ] Create a consolidated test execution report.

## Example Execution

```bash
k6 run tests/homepage.js
```

After execution, review the terminal summary for request duration, failure rate, iteration count, and check results.

Actual performance results should be recorded only after running the tests. Results may vary depending on network conditions, server behavior, and the test environment.

## Repository Goals

This project demonstrates hands-on experience with:

- Performance test design and execution.
- JavaScript-based test automation.
- HTTP protocol testing.
- Performance thresholds and response validation.
- Test result analysis.
- Version control and CI/CD integration.

## Author

**Pranit Bardapurkar**

Senior QA Automation Engineer / SDET

Focus areas: Test Automation, Performance Testing, API Testing, and AI/LLM Quality Engineering.

## Disclaimer

This repository is intended for educational and portfolio purposes. It is not affiliated with or endorsed by Sauce Labs. Test execution should remain within reasonable limits, and high-volume testing should only be performed against systems for which explicit authorization has been obtained.
