---
layout: layouts/base.njk
title: Instructions
permalink: /instructions/
---

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
        We have noticed that when invoking twice to the DUMP command, the server will return the override code.
        You must follow the protocol to retrieve the override code.
        
        Develop an application that can connect to the MiniTel-Lite
        server and authenticate using the HELLO protocol. The, call the DUMP command twice to retrieve the override code.
        
        The server is locking down itself, so you might get disconnected without any reason. Handle such cases gracefully.
        <br />
      </li>
      <li>
        <strong>Coding Environment:</strong><br />
        <b class="red-168 yellow-255-text">You must use CODA tooling to develop the application.</b>
      </li>

      <li>
        <strong>Mission Completion:</strong><br />
        Enter the retrieved code in the form below and transmit to
        NORAD command.
      </li>

      <li>
        <strong>Winners:</strong><br />
        The first {{ site.winner_amount }} to submit the correct override code <b class="red-168 yellow-255-text">and the code is accepted by NORAD judges</b> will win.
      </li>
    </ol>

<div class="center-align">
  <a href="{{ site.form_endpoint }}" class="tui-button">
    TRANSMIT TO NORAD
  </a>
</div>
