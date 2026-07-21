# 🛡 LogLens

> Security Log Analysis Platform built with Flask + React

LogLens is a Security Information and Event Management (SIEM-lite) project that analyzes Apache, Nginx, and Common Log Format (CLF) logs to detect cyber attacks, calculate risk scores, and generate interactive security dashboards.

---

# 🚀 Features

- 📂 Upload Apache/Nginx/Common Log Format logs
- 🔍 Automatic log parsing
- 🛡 SQL Injection Detection
- ⚡ Brute Force Detection
- 📁 Path Traversal Detection
- 💥 Cross-Site Scripting (XSS) Detection
- 🎯 Dynamic Risk Scoring
- 📊 Executive Security Dashboard
- 📈 Interactive Charts
- 🔎 Threat Explorer
- 📋 Incident Investigation
- 🧠 MITRE ATT&CK Mapping
- 📄 Export Reports (CSV / JSON / PDF)
- ❤️ Security Health Score

---

# 🖥 Screenshots

> Add screenshots here after taking them.

Example:

```
screenshots/dashboard.png
screenshots/about.png
screenshots/report.png
```

---

# 🏗 Project Architecture

```
React Frontend
        │
Axios API Calls
        │
Flask Backend
        │
Log Parser
        │
Threat Detection Engine
        │
Summary Generator
        │
Dashboard & Reports
```

---

# 📂 Project Structure

```
LogLens
│
├── app/
│   ├── routes.py
│   ├── services/
│   └── templates/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── signatures/
├── demo_logs/
├── requirements.txt
├── run.py
└── README.md
```

---

# ⚙ Technologies Used

## Backend

- Python
- Flask
- Flask-CORS

## Frontend

- React
- Vite
- Axios
- Recharts

## Others

- Git
- GitHub

---

# ▶ Installation

Clone the repository

```bash
git clone https://github.com/shreyashlange2006/LogLens.git
```

Backend

```bash
pip install -r requirements.txt
python run.py
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📄 Export Support

- CSV
- JSON
- PDF

---

# 🎯 Future Improvements

- Live Log Monitoring
- User Authentication
- Email Alerts
- Elasticsearch Integration
- Machine Learning Detection
- Docker Deployment

---

# 👨‍💻 Developer

**Shreyash Lange**

Diploma Student

Security Software Engineering Intern Project

---

# 📜 License

MIT License