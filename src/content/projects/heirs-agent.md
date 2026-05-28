---
title: "Heirs Game Agent"
category: "Computer Science"
featured: false
tools: ["C++", "GitHub"]
role: "Student"
dates: "Spring 2026"
startDate: "2026-01-01"
image: "/images/projects/heirs-agent/cover.svg"
summary: "High-performance C++ game-playing agent for the USC Heirs class competition"
overview: "Heirs Game Agent is a competitive game-playing program built for the USC Heirs assignment. The agent uses depth-limited minimax search with alpha-beta pruning, iterative deepening, and aggressive move ordering to maximize playing strength under strict per-move time limits. It placed 4th out of 201 students in the class tournament."
genre: "AI, game tree search, adversarial planning"
platform: "C++ (competitive agent)"
links:
  repo: https://github.com/SypherXN/Heirs-Agent
---

## Duties

- Designed and implemented a complete game-playing agent in C++ for the Heirs ruleset and tournament protocol
- Built minimax search with alpha-beta pruning, principal variation search, iterative deepening, and quiescence search
- Tuned move ordering (transposition table moves, killers, history, countermoves, capture SEE) to reach deeper searches within time limits
- Implemented time management that adapts search depth to remaining clock and opponent pacing
- Added incremental Zobrist hashing, transposition table bounds, and incremental evaluation for high node throughput
- Handled draws, repetitions, and the 50-move rule with context-aware terminal scoring
- Iterated on search speed over heavy heuristics after profiling showed depth mattered more than evaluation complexity

## Gallery

The repository contains the full implementation and configuration notes in `homework.cpp`.

## Process

Development focused on measurable tournament impact: each technique was added or removed based on whether it improved practical depth and win rate, not theoretical elegance alone. ChatGPT assisted with planning and implementation iteration, while design decisions were validated against competition performance.

The final agent prioritizes fast make/unmake, fixed-size data structures, lightweight evaluation (material, prince safety, mate/draw awareness), and selective extensions such as late move reductions and root guards for prince-race endgames.

**Artifacts:** [GitHub repository](https://github.com/SypherXN/Heirs-Agent)
