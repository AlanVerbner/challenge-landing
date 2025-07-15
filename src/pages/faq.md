---
layout: layouts/base.njk
title: FAQ
permalink: /faq/
---

<h1>Frequently Asked Questions</h1>

<dl class="faq-list">
  <dt id="what-is-minitel-lite">
    <a href="#what-is-minitel-lite">What is MiniTel-Lite?</a>
  </dt>
  <dd>
    MiniTel-Lite is a secure text-based terminal interface developed
    by NORAD for emergency communication protocols. It serves as a
    backup communication system when primary networks are
    compromised.
  </dd>

  <dt id="how-do-i-connect">
    <a href="#how-do-i-connect"
      >How do I connect to the MiniTel-Lite server?</a
    >
  </dt>
  <dd>
    Use the netcat (nc) command to establish a TCP connection: nc
    {{ site.server_host }} {{ site.server_port }}. Ensure you have
    netcat installed on your system.
  </dd>

  <dt id="what-is-the-hello-frame">
    <a href="#what-is-the-hello-frame">What is the HELLO frame?</a>
  </dt>
  <dd>
    The HELLO frame is a Base64 encoded authentication message used
    to initiate secure communication with the server. The current
    frame is <code>0003 AQQ==</code>. This frame identifies you as
    an authorized override agent.
  </dd>

  <dt id="netcat-not-found">
    <a href="#netcat-not-found"
      >What if I don't have netcat installed?</a
    >
  </dt>
  <dd>
    On Windows: Download netcat from the official repository or use
    <code>telnet</code> as alternative. On Mac: Install via Homebrew
    <code>brew install netcat</code>. On Linux: Install via package
    manager <code>sudo apt-get install netcat</code>.
  </dd>

  <dt id="connection-refused">
    <a href="#connection-refused">What if connection is refused?</a>
  </dt>
  <dd>
    Check your firewall settings and ensure port 7321 is not
    blocked. If the server is down, this indicates JOSHUA may have
    detected the override attempt. Contact NORAD Command
    immediately.
  </dd>

  <dt id="what-do-i-do-with-the-secret-code">
    <a href="#what-do-i-do-with-the-secret-code"
      >What do I do with the secret code?</a
    >
  </dt>
  <dd>
    Once you receive the override code from the server, enter it
    exactly as received into the transmission form on the
    INSTRUCTIONS page. Do not modify or truncate the code.
  </dd>

  <dt id="code-format">
    <a href="#code-format"
      >What format should the override code be in?</a
    >
  </dt>
  <dd>
    Override codes are alphanumeric strings, typically 8-16
    characters long. They may contain uppercase letters, lowercase
    letters, numbers, and special characters. Preserve exact
    formatting.
  </dd>

  <dt id="form-submission-failed">
    <a href="#form-submission-failed"
      >What if form submission fails?</a
    >
  </dt>
  <dd>
    Form submission failures may indicate network interference or
    JOSHUA's defensive protocols. Retry once, then contact NORAD
    Command through backup channels if the issue persists.
  </dd>

  <dt id="mobile-compatibility">
    <a href="#mobile-compatibility"
      >Can I use this on mobile devices?</a
    >
  </dt>
  <dd>
    While the terminal interface is optimized for desktop use,
    mobile devices are supported. However, terminal emulation may be
    limited on mobile platforms. Desktop use is strongly
    recommended.
  </dd>

  <dt id="time-limit">
    <a href="#time-limit">Is there a time limit for the mission?</a>
  </dt>
  <dd>
    Yes. Intelligence suggests JOSHUA will complete its war
    simulation and potentially launch real weapons within 180
    minutes of initial compromise. Time is critical.
  </dd>

  <dt id="multiple-attempts">
    <a href="#multiple-attempts"
      >Can I make multiple connection attempts?</a
    >
  </dt>
  <dd>
    Multiple rapid attempts may trigger JOSHUA's intrusion detection
    system. If your first attempt fails, wait 60 seconds before
    retrying. More than 3 failed attempts may result in permanent
    lockout.
  </dd>

  <dt id="is-this-real">
    <a href="#is-this-real">Is this scenario real?</a>
  </dt>
  <dd>
    This is a simulation based on the 1983 Able Archer exercise and
    the fictional WOPR/JOSHUA system from WarGames. However, the
    technical implementation is functional and the mission
    objectives are achievable.
  </dd>
</dl>

<div class="tui-panel">
  <h2>Technical Specifications</h2>
  <ul>
    <li><strong>Protocol:</strong> TCP/IP</li>
    <li><strong>Port:</strong> 7321</li>
    <li><strong>Encoding:</strong> Base64</li>
    <li><strong>Frame Format:</strong> Length + Data</li>
    <li><strong>Timeout:</strong> 30 seconds</li>
    <li><strong>Max Retries:</strong> 3</li>
  </ul>
</div>

<div class="tui-panel">
  <h2>Troubleshooting</h2>
  <p>If you encounter issues:</p>
  <ol>
    <li>Verify your internet connection</li>
    <li>Check firewall/antivirus settings</li>
    <li>Ensure netcat is properly installed</li>
    <li>Try connecting from a different network</li>
    <li>Contact technical support if problems persist</li>
  </ol>
</div>

<div class="security-notice">
  <h2>Security Notice</h2>
  <p>
    <strong>CLASSIFIED:</strong> This terminal interface is for
    authorized personnel only. All connections are monitored and
    logged. Unauthorized access is prohibited and may result in
    prosecution under the Computer Fraud and Abuse Act.
  </p>
</div> 