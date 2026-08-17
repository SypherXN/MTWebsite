---
title: "InfoHub"
category: "Computer Science"
featured: false
tools: ["Go", "React", "TypeScript", "SQLite", "Linux", "Windows"]
role: "Creator"
dates: "July 2026 - Current"
startDate: "2026-07-01"
image: "/images/projects/infohub/cover.png"
summary: "Home information hub with a Go API, Linux/Windows agents, and a tablet PWA for host telemetry and household service modules"
overview: "InfoHub is a personal homelab project I built to put household and machine status on one Lenovo Tab One. A Go API on an OCI VM owns enrollment, telemetry, and SQLite history, while low-impact agents on Linux and Windows collect host metrics and run togglable modules as child processes. The React PWA is a swipeable kiosk: each module ID maps to a purpose-built page, covering HomeBot, RustTools, UPS, weather, commute, game-server hosting, and more—without shipping frontend code from the modules themselves."
platform: "Linux/Windows agents, Web (self-hosted API + tablet PWA)"
links:
  repo: https://github.com/SypherXN/InfoHub
---

## Duties

- Designed and implemented the control plane: Go API, host agents, OpenAPI contracts, and a React PWA optimized for a Lenovo Tab One
- Built agent collectors for CPU, disk, GPU, network, services, and hardware, with Linux and Windows paths and a hard timeout around module execution
- Shipped a module system where each host reports inventory and the admin toggles modules on per machine; modules emit versioned JSON and never ship UI
- Wrote bundled collectors that prefer local SQLite for co-located apps (HomeBot, RustTools, MTA Lab) and HTTP only when there is no local status store (AMP, playit.gg)
- Added enrollment tokens and a 6-digit kiosk pairing flow so the tablet can request access and an admin can approve it from Settings
- Wired SSE dashboard streaming, hashed device credentials, and role separation (`agent`, `kiosk`, `admin`)
- Set up deploy paths for OCI, Linux systemd, Windows, and Android kiosk, plus `make build` / `make test` / cross-compile release targets

## Process

The project started from a practical need: see household apps, game servers, and the machines that run them at a glance on a wall tablet, without opening a dozen dashboards or putting API keys for every service on the kiosk.

**Architecture.** The API is the source of truth (latest state plus a 7-day metric history). Agents authenticate, heartbeat, and push host plus module payloads. Modules are small executables with a JSON stdin/stdout contract; for HomeBot and RustTools they read the local database on that VM instead of calling those apps’ HTTP APIs.

**Product surface.** The PWA page list comes from the server; swipeable module pages live in a compile-time React registry. Unknown module IDs render a safe fallback. Overview tiles cover weather, commute, and host health; dedicated pages cover UPS, OCI free-tier caps, speedtest, AMP instances, and playit.gg tunnels.

**Reliability and safety.** Credentials are stored hashed. Tailscale limits who can reach the API; application auth is still required. Module runs are bounded by timeout and output size, and enablement is per-host so a collector cannot be turned on where it is not installed.

**Artifacts:** [GitHub repository](https://github.com/SypherXN/InfoHub)
