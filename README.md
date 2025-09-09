# Set-up-Prometheus-Install-configure-it

# 🚀 Prometheus + Node.js Monitoring Project

This project demonstrates how to set up **Prometheus** to monitor a **Node.js** application by collecting metrics exposed via a `/metrics` endpoint.

---

## ✅ Project Components

### 1. Node.js Metrics Application

- Built using **Express** and **prom-client**.
- Exposes custom metrics at `http://localhost:3000/metrics`.

#### Run the Node.js App

```bash
cd node-metrics-app
npm install
node index.js
