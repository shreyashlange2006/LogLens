import re
from collections import Counter
from urllib.parse import unquote

# -----------------------------
# Attack Detection Patterns
# -----------------------------
ATTACK_PATTERNS = {
    "sql_injection": [
        r"or\s+1=1",
        r"union\s+select",
        r"drop\s+table",
        r"insert\s+into",
        r"delete\s+from",
        r"select\s+\*",
        r"information_schema",
        r"sleep\s*\(",
        r"benchmark\s*\("
    ],

    "xss": [
        r"<script>",
        r"</script>",
        r"javascript:",
        r"onerror=",
        r"onload=",
        r"alert\s*\(",
        r"<img"
    ],

    "directory_traversal": [
        r"\.\./",
        r"\.\.\\",
        r"/etc/passwd",
        r"boot.ini",
        r"win.ini"
    ]
}

# -----------------------------
# Display Names
# -----------------------------
ATTACK_NAMES = {
    "sql_injection": "SQL Injection",
    "xss": "XSS",
    "directory_traversal": "Path Traversal",
    "brute_force": "Brute Force"
}

# -----------------------------
# Risk Scores
# -----------------------------
RISK_SCORES = {
    "SQL Injection": 90,
    "XSS": 70,
    "Path Traversal": 80,
    "Brute Force": 95
}


# -----------------------------
# Detect Attacks
# -----------------------------
def detect_attacks(logs):

    attack_counter = Counter()
    attacker_counter = Counter()
    brute_force_counter = Counter()

    total_logs = len(logs)
    attack_logs = 0

    # -----------------------------
    # First Pass
    # -----------------------------
    for log in logs:

        log["is_attack"] = False
        log["attack"] = None
        log["severity"] = "Low"
        log["risk_score"] = 10

        path = unquote(log.get("path", "")).lower()

        for attack_key, patterns in ATTACK_PATTERNS.items():

            for pattern in patterns:

                if re.search(pattern, path, re.IGNORECASE):

                    log["is_attack"] = True
                    log["attack"] = ATTACK_NAMES[attack_key]
                    log["severity"] = "High"
                    log["risk_score"] = RISK_SCORES[
                        ATTACK_NAMES[attack_key]
                    ]

                    attack_counter[ATTACK_NAMES[attack_key]] += 1
                    attacker_counter[log["ip"]] += 1
                    attack_logs += 1

                    break

            if log["is_attack"]:
                break

        # Count failed login attempts
        if (
            log["status"] == 401
            and log["path"] == "/login"
            and log["method"] == "POST"
        ):
            brute_force_counter[log["ip"]] += 1

    # -----------------------------
    # Second Pass (Brute Force)
    # -----------------------------
    for log in logs:

        if (
            log["status"] == 401
            and log["path"] == "/login"
            and log["method"] == "POST"
        ):

            if brute_force_counter[log["ip"]] >= 3:

                if not log["is_attack"]:
                    attack_logs += 1

                log["is_attack"] = True
                log["attack"] = ATTACK_NAMES["brute_force"]
                log["severity"] = "Critical"
                log["risk_score"] = RISK_SCORES["Brute Force"]

                attack_counter[ATTACK_NAMES["brute_force"]] += 1
                attacker_counter[log["ip"]] += 1

    # -----------------------------
    # Summary
    # -----------------------------
    normal_logs = total_logs - attack_logs

    average_risk = round(
        sum(log["risk_score"] for log in logs) / total_logs,
        1
    )

    # -----------------------------
    # Threat Confidence
    # -----------------------------
    if attack_logs == 0:
        threat_confidence = 0
    elif average_risk >= 90:
        threat_confidence = 98
    elif average_risk >= 80:
        threat_confidence = 90
    elif average_risk >= 70:
        threat_confidence = 75
    elif average_risk >= 50:
        threat_confidence = 55
    else:
        threat_confidence = 25

    summary = {
        "total_logs": total_logs,
        "attacks": attack_logs,
        "normal_logs": normal_logs,
        "average_risk": average_risk,
        "threat_confidence": threat_confidence,
        "attack_types": dict(attack_counter),
        "top_attackers": dict(attacker_counter.most_common(10))
    }

    return {
        "success": True,
        "logs": logs,
        "summary": summary
    }