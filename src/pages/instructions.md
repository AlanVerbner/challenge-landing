---
layout: layouts/base.njk
permalink: /instructions/
---

<div class="container">
  <section id="instructions">
    <h1>Mission Instructions</h1>
    
    <div class="tui-panel">
      <h2>Objective</h2>
      <p>Your mission is to infiltrate the MiniTel-Lite network and retrieve the emergency override codes from the JOSHUA system. Follow these steps precisely - any deviation could trigger the AI's defensive protocols.</p>
    </div>

    <div class="tui-panel">
      <h2>Procedure</h2>
      <ol>
        <li><strong>Terminal Connection:</strong><br>
            Open a terminal/command prompt and establish connection to the MiniTel-Lite server:<br>
            <code>nc {{ site.server_host }} {{ site.server_port }}</code></li>
        
        <li><strong>Authentication Protocol:</strong><br>
            Send the Base64 encoded HELLO frame to authenticate:<br>
            <code>0003 AQQ==</code></li>
        
        <li><strong>Code Extraction:</strong><br>
            The server will respond with the secret override code. Copy this code exactly as received.</li>
        
        <li><strong>Mission Completion:</strong><br>
            Enter the retrieved code in the form below and transmit to NORAD command.</li>
      </ol>
    </div>

    <div class="tui-fieldset">
      <legend>Override Code Transmission</legend>
      <form action="{{ site.form_endpoint }}" method="POST">
        <label for="secret">Secret Override Code:</label>
        <input type="text" id="secret" name="secret" required placeholder="Enter retrieved code here..." autocomplete="off" class="tui-input">
        <div class="form-help">
          <small>Code must be at least 8 characters. Transmitted via secure channel.</small>
        </div>
        <button type="submit" class="tui-button">TRANSMIT TO NORAD</button>
      </form>
    </div>

    <div class="tui-panel">
      <h2>Network Topology</h2>
      <pre>
    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
    │   YOUR TERMINAL │───▶│  MINITEL-LITE   │───▶│   NORAD JOSHUA  │
    │                 │    │     SERVER      │    │      SYSTEM     │
    │  nc demo.mini   │    │  Port 7321      │    │  [COMPROMISED]  │
    │  tel-lite.xyz   │    │                 │    │                 │
    │  7321           │    │  HELLO Frame    │    │  Override Codes │
    └─────────────────┘    │  0003 AQQ==     │    │  [CLASSIFIED]   │
                           └─────────────────┘    └─────────────────┘
                                    │
                                    ▼
                           ┌─────────────────┐
                           │   THIS FORM     │
                           │                 │
                           │  Code Submission│
                           │  to NORAD Cmd   │
                           └─────────────────┘
      </pre>
    </div>

    <div class="tui-panel">
      <h2>Important Notes</h2>
      <ul>
        <li>Connection is established via TCP on port 7321</li>
        <li>HELLO frame format: <code>0003 AQQ==</code> (Base64 encoded)</li>
        <li>Server response contains the override code</li>
        <li>Time limit: 180 minutes before system lockdown</li>
        <li>Multiple attempts may trigger security protocols</li>
      </ul>
    </div>

    <div class="security-notice">
      <h2>Emergency Contacts</h2>
      <p>If connection fails, contact NORAD Command immediately:</p>
      <ul>
        <li>Priority Channel: [CLASSIFIED]</li>
        <li>Backup Protocol: [CLASSIFIED]</li>
        <li>Emergency Override: [CLASSIFIED]</li>
      </ul>
    </div>
  </section>
</div>