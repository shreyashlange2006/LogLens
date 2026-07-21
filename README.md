# 🛡️ LogLens v1.0

<p align="center">

## Security Log Analysis Platform

An AI-inspired Security Log Analysis Dashboard built using **React**, **Flask**, and **Python** for detecting cyber attacks, calculating risk scores, visualizing security analytics, and generating professional incident reports.

</p>

---

# 📖 Overview

LogLens is a Security Software Engineering project that analyzes Apache, Nginx, and Common Log Format (CLF) web server logs.

It automatically:

- Detects known cyber attacks
- Calculates risk scores
- Classifies severity levels
- Generates executive security summaries
- Visualizes attack statistics
- Investigates security incidents
- Exports professional reports

The project is inspired by modern SOC (Security Operations Center) dashboards and SIEM platforms.

---

# ✨ Features

✅ Apache Log Parser

✅ Nginx Log Parser

✅ Common Log Format (CLF) Support

✅ Threat Detection Engine

✅ Risk Score Calculation

✅ Severity Classification

✅ Executive Security Summary

✅ Security Health Indicator

✅ Threat Analytics Dashboard

✅ Interactive Charts

✅ IOC Investigation Panel

✅ Incident Timeline

✅ MITRE ATT&CK Mapping

✅ CSV Export

✅ JSON Export

✅ Professional PDF Report Export

---

# 🛠 Technology Stack

| Frontend | Backend | Charts | Language |
|----------|----------|---------|----------|
| React | Flask | Recharts | Python |

Additional Libraries

- Axios
- React Icons
- jsPDF
- html2canvas
- Flask-CORS

---

# 📂 Project Structure

```
LogLens
│
├── app
│   ├── services
│   ├── templates
│   ├── routes.py
│   └── __init__.py
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│
├── demo_logs
├── signatures
├── screenshots
├── uploads
│
├── requirements.txt
├── config.py
├── run.py
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/shreyashlange2006/LogLens.git

cd LogLens
```

---

## Backend

Create Virtual Environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run Flask

```bash
python run.py
```

Backend runs at

```
http://127.0.0.1:5000
```

---

## Frontend

Open another terminal

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run Vite

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 📸 Screenshots

## 🏠 Home Page

![Home](screenshots/home.png)

---

## 📊 Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 📈 Threat Analytics

![Analytics](screenshots/analytics.png)

---

## 📄 Security Log Entries

![Logs](screenshots/logs.png)

---

## 🔍 Incident Investigation

![Investigation](screenshots/investigation.png)

---

## ℹ️ About Page

![About](screenshots/about.png)

---

# 📊 Dashboard Modules

- Executive Security Summary
- Security Health Score
- Threat Statistics
- Attack Overview
- Top Attackers
- Security Log Explorer
- Incident Investigation
- IOC Panel
- Analyst Notes
- System Status
- Quick Actions

---

# 📁 Report Export

LogLens exports security reports in

- CSV
- JSON
- PDF

These reports can be used for:

- Incident Documentation
- Security Audits
- SOC Investigation
- Demonstrations
- Academic Projects

---

# 🧠 Attack Detection

Current Version Detects

- Brute Force
- SQL Injection
- Cross Site Scripting (XSS)
- Directory Traversal / Path Traversal

Each attack is assigned

- Risk Score
- Severity
- MITRE ATT&CK Information
- IOC Details
- Recommended Response

---

# 🎯 Future Roadmap

- Real-time Log Monitoring
- Live Alert Notifications
- Machine Learning Threat Detection
- User Authentication
- Dark / Light Themes
- Cloud Deployment
- Threat Intelligence Feed
- Elastic Stack Integration

---

# 👨‍💻 Developer

**Shreyash Lange**

Security Software Engineering Project

Diploma Engineering Student

---

# 📜 License

This project is released under the MIT License.

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

---

# 🙏 Acknowledgements

Inspired by

- Splunk
- Wazuh
- ELK Stack
- MITRE ATT&CK
- OWASP
- Security Operations Centers (SOC)

---

## 🚀 LogLens v1.0

Built with ❤️ using React + Flask + Python