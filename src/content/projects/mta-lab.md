---
title: "MTA Lab"
category: "Computer Science"
featured: false
tools: ["Python", "FastAPI", "SQLite", "JavaScript"]
role: "Creator"
dates: "June 2026 - Current"
startDate: "2026-06-01"
image: "/images/projects/mta-lab/cover.png"
summary: "Research-first lab for testing market agents—paper lanes, auditable run logs, and a dashboard over a small self-hosted API"
overview: "MTA Lab (Market Test Agent Lab) is a personal research project I built to test agentic market ideas in a controlled way. Scheduled automations pull a plan and market context from a FastAPI service, record decisions, and keep paper results on separate lanes so I can compare approaches without mixing them together. Strategy lives as versioned plan JSON in git. A static dashboard on GitHub Pages reads the same API so I can inspect the decision trail, compare paper lanes, and keep safety controls in one place."
platform: "Web (self-hosted API + GitHub Pages dashboard)"
links:
  repo: https://github.com/SypherXN/MTA-Lab
---

## Duties

- Designed and implemented the system as scheduled agents plus a small API: plans, run logs, paper portfolios, and dashboard reads share one SQLite datastore
- Built FastAPI endpoints for automation context, plan lookup, run ingest, lane comparison, and admin ops, with OpenAPI docs
- Implemented multi-lane simulation so each plan has a permanent paper track I can compare on equal footing
- Shipped a static command-center dashboard (overview, lanes, operations, activity) deployed via GitHub Pages
- Added research-mode defaults, promotion gates, and write-protected safety settings so execution stays blocked until checks pass
- Kept agent plans in git and synced them into the API so the dashboard is a read-only viewer of the same source of truth
- Set up OCI deploy scripts (systemd, backups, retention) and sequential lane execution for a small VM

## Gallery

<figure class="media-frame"><img src="/images/projects/mta-lab/overview.png" alt="MTA Lab dashboard overview with run metrics and paper simulation lanes" loading="lazy" />
</figure>
<p><em>Overview — run metrics, lane status, and paper simulation at a glance</em></p>

<figure class="media-frame"><img src="/images/projects/mta-lab/lanes.png" alt="MTA Lab lanes workspace for comparing paper tracks and plans" loading="lazy" />
</figure>
<p><em>Lanes — head-to-head comparison, portfolios, and pinned agent plans</em></p>

<figure class="media-frame"><img src="/images/projects/mta-lab/operations.png" alt="MTA Lab operations view with strategy and safety controls" loading="lazy" />
</figure>
<p><em>Operations — active strategy, safety controls, and data freshness</em></p>

## Process

The project started from a practical need: try agent-driven market tests without mixing research notes, paper results, and execution state in a spreadsheet.

**Architecture.** A FastAPI host on a small VM owns SQLite state. Scheduled automations call the API for the current plan and context, then POST a run. The dashboard is a static site that only reads.

**Product surface.** Four workspaces: Overview for status and lane cards, Lanes for comparison and plan inspection, Operations for safety and reconciliation, Activity for the decision timeline. Plans are edited in GitHub, not in the UI.

**Reliability and safety.** Research mode is the default. Writes use an API key; dashboard login is optional. Backups and retention run on a timer so run history does not grow without bound.

**Artifacts:** [GitHub repository](https://github.com/SypherXN/MTA-Lab)
