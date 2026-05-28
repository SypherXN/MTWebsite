---
title: "HomeBot"
category: "Computer Science"
featured: false
tools: ["C#", ".NET", "React", "TypeScript", "SQLite", "Discord"]
role: "Creator"
dates: "April 2026 - Current"
startDate: "2026-04-01"
image: "/images/projects/homebot/cover.png"
summary: "Single-household assistant combining a Discord bot, HTTP API, and React web UI for shared lists, calendar, and money tracking"
overview: "HomeBot is a personal full-stack project I built for my household. One .NET process runs a Discord bot and optional REST API against a shared SQLite database, while a React web UI reads and writes the same data. Family members can manage buy lists, a wishlist, shared expenses and payments, and calendar tasks from either Discord slash commands or the browser—with undo support and JWT-based web authentication."
platform: "Discord, Web (self-hosted API + SPA)"
links:
  repo: https://github.com/SypherXN/HomeBot
---

## Duties

- Designed and implemented the full system architecture: Discord client, REST API, and React SPA sharing one SQLite datastore
- Built household features end to end—buy lists, wishlist, money ledger (expenses and payments), and calendar tasks/events with recurrence
- Implemented a global undo stack keyed by actor so recent Discord and web changes can be reverted safely
- Added web authentication with JWT access/refresh tokens, optional Discord OAuth, and API bearer access for scripts
- Wired channel-bound Discord workflows (`/setup-set`, feature-specific commands) alongside browser forms and pagination
- Set up operational tooling: CI (dotnet test + web lint/build), Dependabot, systemd/GitHub Pages deployment paths documented in the repo

## Process

The project started from a practical need: keep shopping, scheduling, and shared expenses in one place my family already uses daily (Discord), without maintaining separate spreadsheets or apps.

**Architecture.** A single .NET host can run Discord-only, API-only, or both. The API exposes OpenAPI-documented routes; the React UI signs in and calls the same endpoints browsers and automation can use. Large Discord snowflake IDs are handled carefully in JSON to avoid precision loss.

**Reliability and safety.** Mutations are rate-limited, auth routes have tighter per-IP limits, and refresh tokens are stored server-side. SQLite backups and environment-driven configuration are documented for long-running household deployment.

**Artifacts:** [GitHub repository](https://github.com/SypherXN/HomeBot) · MIT licensed
