---
title: "Virtual Displacement Mapping Techniques"
category: "Computer Science"
featured: false
tools: ["Unity", "C#", "HLSL", "GitHub"]
role: "Graduate Student"
dates: ""
startDate: "2023-03-01"
image: "/images/projects/virtual-displacement-mapping/cover.png"
summary: "Testing and examination of virtual displacement mapping techniques"
overview: "Final project for CSCI 570 (3-D Rendering and Graphics) at USC. Our team of four compared performance of multiple virtual displacement mapping techniques against true displacement mapping in Unity, profiling each approach and evaluating visual quality."
platform: "PC (Unity)"
---

## Duties

- Implemented and compared virtual displacement mapping techniques in HLSL
- Profiled techniques with the Unity profiler against true displacement mapping
- Co-authored analysis of performance, realism, and trade-offs per technique

## Gallery

<figure class="media-frame" style="--frame-bg: url('/images/projects/virtual-displacement-mapping/report-pages/page-02.png')">
  <div class="media-frame-bg" aria-hidden="true"></div>
  <img src="/images/projects/virtual-displacement-mapping/report-pages/page-02.png" alt="VDMT report excerpt with mapping comparison figures" loading="lazy" />
</figure>
<p><em>Report visual comparison across mapping methods (excerpt)</em></p>

<figure class="media-frame" style="--frame-bg: url('/images/projects/virtual-displacement-mapping/report-pages/page-03.png')">
  <div class="media-frame-bg" aria-hidden="true"></div>
  <img src="/images/projects/virtual-displacement-mapping/report-pages/page-03.png" alt="VDMT report excerpt showing oblique-angle comparisons" loading="lazy" />
</figure>
<p><em>Oblique-angle comparison and method discussion (excerpt)</em></p>

<figure class="media-frame" style="--frame-bg: url('/images/projects/virtual-displacement-mapping/report-pages/page-04.png')">
  <div class="media-frame-bg" aria-hidden="true"></div>
  <img src="/images/projects/virtual-displacement-mapping/report-pages/page-04.png" alt="VDMT report excerpt with performance table and summary" loading="lazy" />
</figure>
<p><em>Performance table and summary conclusions (excerpt)</em></p>

## Key Figures

- Texture Mapping: 0.005-0.006 ms GPU render loop time
- Normal Mapping: 0.006-0.007 ms
- Parallax Mapping: 0.009-0.011 ms
- Steep Parallax Mapping: 0.059-0.066 ms
- Parallax Occlusion Mapping: 0.062-0.067 ms
- Relief Mapping: 0.067-0.075 ms
- Vertex Displacement (tessellation factor 20): 0.049-0.051 ms

## Process

We implemented shaders in Unity/HLSL, measured performance systematically, and documented pros, cons, and depth realism for each technique in a report that received the highest grade in the course. The key performance result was that true vertex displacement with tessellation outperformed several advanced virtual displacement variants while also producing higher-fidelity silhouettes and lighting behavior.

**Artifacts:** [Report PDF](/assets/VDMT_report.pdf) · [GitHub repository](https://github.com/usc-jmshi/csci_580_project)
