---
title: "Heirs Game Agent"
category: "Computer Science"
featured: false
tools: ["C++", "GitHub"]
role: "Student"
dates: "Spring 2026"
startDate: "2026-01-01"
image: "/images/projects/heirs-agent/cover.png"
summary: "C++ game-playing agent for CSCI 561 (Heirs homework), placing 4th of 201 in the class tournament"
overview: "Heirs Game Agent is my submission for USC CSCI 561 (Foundations of Artificial Intelligence), Homework 2 — a strategic board game called Heirs. The program reads tournament game states from input.txt and writes the chosen move to output.txt under strict time limits. The agent uses depth-limited minimax with alpha-beta pruning, iterative deepening, and aggressive move ordering, and placed 4th out of 201 students in the class competition."
platform: "C++ (Vocareum tournament)"
links:
  repo: https://github.com/SypherXN/Heirs-Agent
---

## Duties

- Designed and implemented a complete game-playing agent in C++ for the Heirs ruleset and Vocareum tournament protocol
- Built minimax search with alpha-beta pruning, principal variation search, iterative deepening, and quiescence search
- Tuned move ordering (transposition table moves, killers, history, countermoves, capture SEE) to reach deeper searches within time limits
- Implemented time management that adapts search depth to remaining clock and opponent pacing
- Added incremental Zobrist hashing, transposition table bounds, and incremental evaluation for high node throughput
- Handled draws, repetitions, and the 50-move rule with context-aware terminal scoring
- Iterated on search speed over heavy heuristics after profiling showed depth mattered more than evaluation complexity

## Gallery

<figure class="media-frame" style="--frame-bg: url('/images/projects/heirs-agent/cover.png')">
  <div class="media-frame-bg" aria-hidden="true"></div>
  <img src="/images/projects/heirs-agent/cover.png" alt="Heirs board game pieces and setup" loading="lazy" />
</figure>
<p><em>Heirs — strategic board game of youthful royalty (assignment overview)</em></p>

## Process

Development focused on measurable tournament impact: each technique was added or removed based on whether it improved practical depth and win rate. The assignment spec defines Heirs as a strategic board game played under automated grading on Vocareum; the agent must parse standardized input and emit a legal move within the allotted time.

The final implementation prioritizes fast make/unmake, fixed-size data structures, lightweight evaluation (material, prince safety, mate/draw awareness), and selective extensions such as late move reductions and root guards for prince-race endgames. ChatGPT assisted with planning and implementation iteration, consistent with course guidelines.

**Artifacts:** [Assignment description PDF](/assets/heirs-homework-description.pdf) · [GitHub repository](https://github.com/SypherXN/Heirs-Agent)
