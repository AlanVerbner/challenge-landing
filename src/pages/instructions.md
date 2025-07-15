---
layout: layouts/base.njk
title: Instructions
permalink: /instructions/
---

<div class="tui-panel">
  <div class="tui-panel-content">
    <h2>Objective</h2>
    <p>
      Your mission is to infiltrate the MiniTel-Lite network and
      retrieve the emergency override codes from the JOSHUA system.
      Follow these steps precisely - any deviation could trigger the
      AI's defensive protocols.
    </p>

    <h2>Procedure</h2>
    <ol>
      <li>
        <strong>Terminal Connection:</strong><br />
        Develop an application that can connect to the MiniTel-Lite
        server and authenticate using the HELLO protocol.
        <br />
        <b class="red-168 yellow-255-text">You must use CODA tooling to develop the application.</b>
      </li>

      <li>
        <strong>Authentication Protocol:</strong><br />
        Send the Base64 encoded HELLO frame to authenticate and get
        the override code back.
      </li>

      <li>
        <strong>Mission Completion:</strong><br />
        Enter the retrieved code in the form below and transmit to
        NORAD command.
      </li>

      <li>
        <strong>Winners:</strong><br />
        The first [N] to submit the correct override code <b class="red-168 yellow-255-text">and the code is accepted by NORAD judges</b> will win.
      </li>
    </ol>
  </div>
</div>
<br />
<br />
<div class="center-align">
  <a href="{{ site.form_endpoint }}" class="tui-button">
    TRANSMIT TO NORAD
  </a>
</div> 