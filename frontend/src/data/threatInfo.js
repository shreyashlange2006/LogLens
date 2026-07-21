const threatInfo = {
    "SQL Injection": {
        description:
            "Attempts to execute malicious SQL commands through application inputs.",
        target:
            "Login forms, search fields, URL parameters",
        impact:
            "Database compromise, authentication bypass, data theft",
        mitre:
            "T1190 - Exploit Public-Facing Application",
        owasp:
            "OWASP A03:2021 - Injection",
    },

    "Brute Force": {
        description:
            "Repeated authentication attempts to discover valid credentials.",
        target:
            "Login portals",
        impact:
            "Account compromise",
        mitre:
            "T1110 - Brute Force",
        owasp:
            "OWASP A07:2021 - Identification & Authentication Failures",
    },

    "Path Traversal": {
        description:
            "Attempts to access restricted files by manipulating file paths.",
        target:
            "File download endpoints",
        impact:
            "Sensitive file disclosure",
        mitre:
            "T1006 - Path Traversal",
        owasp:
            "OWASP A01:2021 - Broken Access Control",
    },

    "XSS": {
        description:
            "Injects malicious JavaScript into web pages viewed by other users.",
        target:
            "Forms and user-generated content",
        impact:
            "Session hijacking, credential theft",
        mitre:
            "T1059 - Command and Scripting Interpreter",
        owasp:
            "OWASP A03:2021 - Injection",
    },
};

export default threatInfo;