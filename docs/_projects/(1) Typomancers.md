---
name: Typomancers
category: Game Development
tools: [Unity, C#, GitHub, WebGL]
image: https://i.imgur.com/09uFnp3.png
description: Cooperative typing rougelike game where players work together to defeat as many enemies through typing
---

# Typomancers

---

### Role

Lead/Network Engineer

### Dates

August 2025 - December 2025

### Genre

Cooperative, Typing, Rougelike, Web Game

### Platform

WebGL

### Link To Game

[Play Typomancers Here!](https://csci-526.github.io/main-qwerty/)

### Description

Typomancers is a cooperative typing rougelike games developed for play in browsers through WebGL. In this game, players will join together to defeat as many enemies as they can. At the end of each battle, they will choose from a variety of curses and buffs that will alter the way they type and play the game.

---

<p align="center">
<iframe width="710" height="399" src="https://www.youtube.com/embed/HHaYRU80L9o" title="Typomancers Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br>
<em>Typomancers Teaser</em>
</p>

---

## Duties

- Develop a game experience that can be played on browsers using WebGL for CTIN 526 at USC

- Lead a team of 5 engineers through development of a cooperative typing rouge-like game

- Utilize GitHub for version control to streamline code organization

- Integrate Unity Multiplayer to allow for a seamless multiplayer experience for players

- Implement Unity Analytics to identify player behavior issues and iteratively optimized gameplay

- Create a unique cooperative rougelike game designed around typing as the core mechanic

- Design a scalable network architecture that supports seamless feature expansion while minimizing synchronization issues

---

## Production Timeline

---

### Alpha
For the alpha, we spent a lot of time establishing the core mechanics of the game and designing game. After our design of the game we established the three core systems that needed to be implemented for the alpha. These were Unity multiplayer networking, typing (typing field, curses/buffs, and accuracy/wpm calculations), and enemy/player interaction.

<p align="center">
  <img src="https://i.imgur.com/UXIOkpH.png" />
  <br>
  <em>Basic Unity Multiplayer Networking</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/UdTQC1U.png" />
  <br>
  <em>Early Implementation of Typing Elements and Enemy/Player</em>
</p>

---

### Beta
With all of the core systems established in the Alpha, we now were more focused on adding supplemental features and making adjustments to improve the players' experience.

<p align="center">
  <img src="https://i.imgur.com/pdRZBrN.png" />
  <br>
  <em>Early Class Selection Screen</em>
</p>

The main supplemental feature we implemented was the class system. We wanted to allow for more playstyles in the game especially when it comes to playing with others. The addition of classes would allow players to specialize in different parts of the game such as attacking, supporting, and healing.

<p align="center">
  <img src="https://i.imgur.com/6Zmt6je.png" />
  <br>
  <em>Beta Lobby Screen</em>
</p>

One of the main feedback we got from our Alpha milestone was that the joining process of the game was unclear. So we created a new UI that would make the joining process easier to understand by taking inspiration from other games that players are more used to.

<p align="center">
  <img src="https://i.imgur.com/3mZDmIF.png" />
  <br>
  <em>New Typing Field</em>
</p>

Another piece of feedback we received was that it wasn't clear that players needed to type the prompt. After a lot of discussion we decided to take inspiration from other typing games like Typeracer and MonkeyType. In these games, as you type it goes over the prompt and errors are highlighted red. So we implemented this new typing field to make it more familiar to players with the goal of making it clearer.

<p align="center">
  <img src="https://i.imgur.com/ZigQ8HM.png" />
  <br>
  <em>Tab Screen</em>
</p>

A lot of players also were unsure of what their curses/buffs were as they played through the game as there was no way to view it. To solve this we added a tab screen that allowed for players to view their curse/buff status throughout the game. We decided to also add the class information here so players could easily view it.

<p align="center">
  <img src="https://i.imgur.com/TX3uzS3.png" />
  <br>
  <em>Tutorialization</em>
</p>

Because our Alpha milestone was solely focused on implementing the core systems of the game, we didn't have any tutorialization which made it difficult for players to understand the game. So we designed a new tutorial system to teach players the basics of the game. This consisted of the prompts in the first level telling the player important information and then sparkle effects being added to different game elements to draw the player's attention.

#### Analytics
Another requirement for our Beta milestone was the implementation of analytics pipeline. We decided to use Unity Analytics to gather key statistics from players. I was in charge of establishing this pipeline and interpreting this data to make future changes.

<p align="center">
  <img src="https://i.imgur.com/5Ik4CqK.png" />
  <br>
  <em>Ability Usage Statistics</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/0EYQmIJ.png" />
  <br>
  <em>Player Statistics</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/j1XXqwq.png" />
  <br>
  <em>Curse/Buff Statistics</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/N6FFY8J.png" />
  <br>
  <em>Difficulty Statistics</em>
</p>

---

### Gold
Part of the restrictions we were given as part of the class was that we were not allowed to utilize any external assets (specifically art and audio) before the Gold milestone. So for the gold milestone we focused a lot on adding art and audio assets to make the game more immersive for players.

<p align="center">
  <img src="https://i.imgur.com/SFHxOaU.png" />
  <br>
  <em>New Lobby Screen</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/abI85KG.png" />
  <br>
  <em>New Battle Screen</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/HfupRCt.png" />
  <br>
  <em>New Tab Screen</em>
</p>

We also created a presentation to showcase the gold milestone of Typomancers to our class which included a video teaser we edited to showcase the core elements of Typomancers.

[Download Slides PDF](../assets/typomancers_slides.pdf)

<p align="center">
<iframe src="../assets/typomancers_slides.pdf#toolbar=0" width="960" height="540" style="border:none; max-width: 100%;"></iframe>
</p>

<p align="center">
<iframe width="710" height="399" src="https://www.youtube.com/embed/HHaYRU80L9o" title="Typomancers Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br>
<em>Typomancers Teaser</em>
</p>