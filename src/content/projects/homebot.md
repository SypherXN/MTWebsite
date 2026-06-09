---
title: "HomeBot"
category: "Computer Science"
featured: false
tools: ["C#", ".NET", "React", "TypeScript", "SQLite", "Discord", "Vite"]
role: "Creator"
dates: "April 2026 - Current"
startDate: "2026-04-01"
image: "/images/projects/homebot/cover.png"
summary: "Single-household assistant with a Discord bot, HTTP API, and React web UI for lists, budgeting, calendar, meals, and shared money"
overview: "HomeBot is a personal full-stack project I built for my household. One .NET process runs a Discord bot and optional REST API against a shared SQLite database, while a React web UI reads and writes the same data. Family members can manage buy lists, a wishlist, shared expenses and payments, household budgeting, calendar events and tasks, and meal planning from either Discord slash commands or the browser—with global undo, JWT-based web auth, optional Google Calendar sync, and PWA support."
platform: "Discord, Web (self-hosted API + SPA), PWA"
links:
  repo: https://github.com/SypherXN/HomeBot
---

## Duties

- Designed and implemented the full system architecture: Discord client, OpenAPI-documented REST API, and React SPA sharing one SQLite datastore
- Built household features end to end—buy lists, wishlist, money ledger (splits and payments), household budgeting (envelopes, accounts, bills, goals), calendar events/tasks with recurrence, and meal planning
- Shipped a dashboard home view with at-a-glance widgets across meals, lists, budget, money, and calendar, plus header search with deep links
- Implemented a global undo stack keyed by actor so recent Discord and web changes can be reverted safely
- Added web authentication with JWT access/refresh tokens, optional Discord OAuth, and API bearer access for scripts and automation
- Wired channel-bound Discord workflows (`/setup-set`, feature-specific commands) alongside browser forms, bulk actions, and pagination
- Integrated optional Google Calendar two-way sync, webhooks, Web Push for installed PWA, and budget background jobs (alerts and weekly digest)
- Set up operational tooling: CI (dotnet test + web lint/build), Dependabot, systemd/GitHub Pages deployment paths, and SQLite backup scripts documented in the repo

## Gallery

<figure class="media-frame"><img src="/images/projects/homebot/dashboard.png" alt="HomeBot dashboard with sidebar navigation and at-a-glance widgets" loading="lazy" />
</figure>
<p><em>Dashboard home view — meals, buy list, wishlist, budget, money, and calendar at a glance</em></p>

<figure class="media-frame"><img src="/images/projects/homebot/calendar.png" alt="HomeBot calendar with month view, tasks sidebar, and event controls" loading="lazy" />
</figure>
<p><em>Calendar — month/week/day/agenda views, tasks, Google sync, and .ics import/export</em></p>

<figure class="media-frame"><img src="/images/projects/homebot/budget.png" alt="HomeBot budget page with income, expenses, trends, and annual snapshot" loading="lazy" />
</figure>
<p><em>Budget — household spending by category, income plan, trends, and annual snapshot</em></p>

## Process

The project started from a practical need: keep shopping, scheduling, shared expenses, and household budgeting in one place my family already uses daily (Discord), without maintaining separate spreadsheets or apps.

**Architecture.** A single .NET 10 host can run Discord-only, API-only, or both. The API exposes OpenAPI-documented routes; the React UI signs in and calls the same endpoints browsers, scripts, and webhooks can use. Large Discord snowflake IDs are handled carefully in JSON to avoid precision loss.

**Product surface.** Discord slash commands cover every feature area; the web UI adds richer views (dashboard, budget charts, calendar grids, meal plans) plus settings for theme, push notifications, and household config. After many API writes, the bot can post a short line to the Discord channel bound for that feature.

**Reliability and safety.** Mutations are rate-limited, auth routes have tighter per-IP limits, and refresh tokens are stored server-side. SQLite backups (local and optional Google Drive via rclone) and environment-driven configuration are documented for long-running household deployment. Integration tests exercise full household workflows over real HTTP and SQLite.

**Artifacts:** [GitHub repository](https://github.com/SypherXN/HomeBot) · MIT licensed
