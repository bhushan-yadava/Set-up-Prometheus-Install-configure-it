# Prometheus Node Monitoring Setup

A hands-on project to set up **Prometheus** and monitor a Node.js application on Windows. This repository provides a ready-to-use setup for learning Prometheus installation, configuration, and monitoring metrics from a Node.js application.

---

## 🚀 Project Overview

This project demonstrates:

- Installing and configuring Prometheus on Windows.
- Setting up a Node.js application that exposes metrics.
- Configuring Prometheus to scrape metrics from the Node.js app.
- Basic usage of Prometheus for monitoring application performance.

The project is designed for **learning and experimentation**, and can serve as a foundation for more advanced monitoring setups, including Docker or Kubernetes integrations.

---

## 📂 Project Structure

prometheus-node-monitoring/
├─ clean-repo/ # Clean repo after removing large binaries
├─ node-metrics-app/ # Node.js app exposing metrics
│ ├─ index.js # Main app code
│ ├─ package.json # NPM dependencies
│ └─ package-lock.json # NPM lock file
├─ README.md # Project documentation
└─ .gitignore # Git ignore rules

yaml
Copy code

> Note: Prometheus binaries and large files have been removed to comply with GitHub size limits.

---

## ⚡ Features

- **Node.js Metrics App:** Exposes CPU, memory, and custom metrics for Prometheus.
- **Prometheus Configuration:** Example `prometheus.yml` included for scraping the Node.js app.
- **Learning Purpose:** Ideal for understanding Prometheus concepts and Node.js monitoring.
- **Clean Git Repo:** Large binaries removed to maintain a lightweight repository.

---

## 📝 Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [NPM](https://www.npmjs.com/get-npm)
- [Prometheus](https://prometheus.io/) (install separately)

---

## ⚙️ Installation

1. **Clone this repository:**
```bash
git clone https://github.com/bhushan-yadava/Set-up-Prometheus-Install-configure-it.git
cd Set-up-Prometheus-Install-configure-it/clean-repo
Install Node.js dependencies:

bash
Copy code
cd node-metrics-app
npm install
Run Node.js metrics app:

bash
Copy code
node index.js
Configure Prometheus:

Create prometheus.yml pointing to Node.js app metrics endpoint (e.g., http://localhost:3000/metrics).

Start Prometheus using your local installation.

🖥️ Usage
Open Prometheus dashboard: http://localhost:9090/

Run queries to monitor metrics exposed by your Node.js app.

Example Prometheus query:

text
Copy code
nodejs_memory_rss_bytes
📚 Learning Outcomes
Understanding Prometheus installation and configuration.

Scraping metrics from Node.js applications.

Monitoring application performance in real-time.

Managing GitHub repository size and clean commits.
