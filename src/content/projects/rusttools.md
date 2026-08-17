---
title: "RustTools"
category: "Computer Science"
featured: false
tools: ["TypeScript", "Node.js", "React", "SQLite", "Discord", "Vite"]
role: "Creator"
dates: "June 2026 - Current"
startDate: "2026-06-01"
image: "/images/projects/rusttools/cover.png"
summary: "Self-hosted Rust+ companion with a live web dashboard and Discord bot for team devices, map, automations, and raid alerts"
overview: "RustTools is a personal full-stack project I built for my Rust team. A Node.js API stays paired to a master Rust+ account, while a React web UI and Discord bot share the same SQLite data. Teammates can control smart switches and alarms, watch the live map and team chat, and get raid or TC decay alerts from the browser or Discord—without everyone needing to stay in-game. Role-based Discord OAuth, encrypted companion credentials, and production boot checks keep the 24/7 bot account separate from per-user identity."
platform: "Discord, Web (self-hosted API + SPA)"
links:
  repo: https://github.com/SypherXN/RustTools
---

## Duties

- Designed and implemented the full system architecture: Fastify API, React SPA, and Discord slash-command bot sharing one SQLite datastore
- Built a gated master Rust+ connection (FCM pairing, reconnect, read caching) so one bot account powers devices, team, map, and automations around the clock
- Shipped dashboard pages for devices, storage, 2D/3D map, team chat, cameras, automations, and audit, with WebSocket live updates
- Added Discord OAuth login and three permission tiers (View, Switch, Admin) mapped from guild roles, plus admin user blocking
- Implemented IFTTT-style automations (alarms, TC upkeep, day/night, proximity to a server base) and switch groups with timed and auto modes
- Wired raid, TC decay, world-event, and storage alerts to Discord, team chat, web push, and optional SMS/email escalation
- Set up operational tooling: Docker/Caddy production layout, GitHub Pages UI, CI, health/backup scripts, and documented clone-and-deploy

## Process

The project started from a practical need: keep smart devices, map awareness, and raid alerts in one place my team already uses (Discord and a browser), without leaving a game client open on a dedicated machine.

**Architecture.** A Node.js host on a VM runs the API and Discord bot; the React UI can live on GitHub Pages or locally. One master Rust+ WebSocket owns live entity state. Teammates optionally link Steam ID and companion Rust+ credentials (encrypted on their user row) for identity and leader promotion—those links never replace the master bot.

**Product surface.** The web UI is an orange terminal HUD: dashboard, explicit On/Off device controls, procgen map overlays and 3D terrain when a `.map` file is uploaded, and an automation builder with a configurable server-base radius. Discord slash commands and embeds cover the same live data, including a channel-bound info board and team-chat mirror.

**Reliability and safety.** Production refuses to start on default secrets, missing guild/role config, or unprompted pairing. Rust+ reads are rate-limited and cached; FCM expiry is surfaced in Settings before the ~90-day window. SQLite migrations run on startup, and ops scripts cover health, disk, backups, and VM updates.

**Artifacts:** [GitHub repository](https://github.com/SypherXN/RustTools) · MIT licensed
