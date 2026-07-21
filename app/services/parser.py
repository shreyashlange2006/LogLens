import re

LOG_PATTERN = re.compile(
    r'(?P<ip>\S+)\s+\S+\s+\S+\s+'
    r'\[(?P<timestamp>[^\]]+)\]\s+'
    r'"(?P<request>[^"]+)"\s+'
    r'(?P<status>\d{3})\s+'
    r'(?P<size>\S+)\s+'
    r'"(?P<referer>[^"]*)"\s+'
    r'"(?P<user_agent>[^"]*)"'
)


def parse_log_file(filepath):

    logs = []

    with open(filepath, "r", encoding="utf-8") as file:

        for line in file:

            line = line.strip()

            if not line:
                continue

            match = LOG_PATTERN.match(line)

            if not match:
                continue

            data = match.groupdict()

            request = data["request"]

            # Split request carefully
            parts = request.split()

            method = parts[0] if len(parts) > 0 else ""

            protocol = parts[-1] if len(parts) > 1 else ""

            path = " ".join(parts[1:-1]) if len(parts) > 2 else ""

            logs.append({
                "ip": data["ip"],
                "timestamp": data["timestamp"],
                "method": method,
                "path": path,
                "protocol": protocol,
                "status": int(data["status"]),
                "size": data["size"],
                "referer": data["referer"],
                "user_agent": data["user_agent"]
            })

    return logs