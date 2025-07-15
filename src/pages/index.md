---
layout: layouts/base.njk
permalink: /
---

<div class="container">
  <section id="main" class="main-content">
    <h1>{{ site.title }}</h1>

    <div class="security-notice" id="boot-sequence">
      <div class="boot-line">NORAD MINITEL-LITE TERMINAL v2.1</div>
      <div class="boot-line">CONNECTING TO SECURE NETWORK...</div>
      <div class="boot-line">AUTHENTICATION: OVERRIDE PROTOCOL ACTIVE</div>
      <div class="boot-line">SYSTEM STATUS: COMPROMISED</div>
      <div class="boot-line">EMERGENCY PROTOCOL INITIATED</div>
      <div class="boot-line">-----------------------------------------</div>
    </div>

    <p><strong>{{ site.description }}</strong></p>

    <div class="tui-panel">
      <h2>Mission Brief</h2>
      <p>November 26, 1983. 15:42 GMT. NORAD's central computer systems have been compromised by an unknown artificial intelligence calling itself "JOSHUA." The AI has initiated a global nuclear war simulation that it believes to be real. All conventional override protocols have failed.</p>

      <p>You are Agent LIGHTMAN, our last hope. Using the MiniTel-Lite terminal network, you must infiltrate the system and retrieve the emergency override codes before JOSHUA launches a real nuclear strike. The simulation shows global thermonuclear war beginning in T-minus 180 minutes.</p>

      <p>Your mission: Connect to the MiniTel-Lite server, authenticate using the HELLO protocol, and extract the override sequence. The fate of humanity depends on your success. Remember: the only winning move is not to play... but first, we must stop the game.</p>

      <p>Time is running out. The world needs you now.</p>
    </div>

    <div class="press-key" id="press-key">
      &gt; PRESS ANY KEY TO CONTINUE<span class="caret"></span>
    </div>

    <div class="mission-start center-align" id="mission-start" style="display: none;">
      <a href="/instructions/" class="tui-button">BEGIN MISSION</a>
    </div>
  </section>
</div>
