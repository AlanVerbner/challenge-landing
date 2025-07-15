---
layout: layouts/base.njk
title: Protocol
permalink: /protocol/
---

<div class="tui-panel">
  <div class="tui-panel-content">
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
    <div class="tui-panel cyan-168 black-255-text">
      <div class="tui-panel-content">
        <h2>Important Notes</h2>
        <ul>
          <li>Connection is established via TCP on port 7321</li>
          <li>
            HELLO frame format: <code>0003 AQQ==</code> (Base64
            encoded)
          </li>
          <li>Server response contains the override code</li>
          <li>Time limit: 180 minutes before system lockdown</li>
          <li>Multiple attempts may trigger security protocols</li>
        </ul>
      </div>
    </div>
  </div>
</div> 