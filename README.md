# 🛡 LogLens

## Security Log Analysis Platform

LogLens is a Security Log Analysis platform built using Flask and React. It parses Apache and Nginx access logs, detects common cyber attacks, calculates risk scores, and provides an interactive dashboard for security analysis.

---

# Features

- Upload Apache/Nginx/Common Log Format (.log) files
- Automatic log parsing
- SQL Injection Detection
- Brute Force Detection
- Cross Site Scripting (XSS) Detection
- Path Traversal Detection
- Dynamic Risk Score
- MITRE ATT&CK Mapping
- IOC (Indicators of Compromise) Extraction
- Security Health Score
- Interactive Charts
- Search & Filter Logs
- Export CSV
- Export JSON
- Export PDF Report

---

# Technology Stack

Frontend

- React
- Vite
- Axios
- Recharts

Backend

- Python
- Flask
- Flask-CORS

Libraries

- html2canvas
- jsPDF

---

# Project Structure

```
LogLens/

├── app/
│ ├── services/
│ ├── static/
│ ├── templates/
│ ├── routes.py
│ └── init.py
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│
├── requirements.txt
├── run.py
└── README.md
```

---

# Installation

## Backend

```bash
python -m venv venv
```

Activate virtual environment

Windows

```bash
venv\Scripts\activate
```

Install packages

```bash
pip install -r requirements.txt
```

Run backend

```bash
python run.py
```

---

## Frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run frontend

```bash
npm run dev
```

---

# Supported Attacks

- SQL Injection
- Brute Force
- Cross Site Scripting
- Path Traversal

---

# Export Formats

- CSV
- JSON
- PDF

---

# Future Improvements

- Authentication
- Live Log Monitoring
- Real-time Alerts
- Machine Learning Detection
- Email Notifications

---

# Developer

Shreyash Lange

Diploma Student

Security Software Engineering Project

2026