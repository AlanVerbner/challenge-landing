---
layout: layouts/base.njk
title: Protocol
permalink: /protocol/
---

<!-- <h2>Messages</h2>
<div class="tui-panel cyan-168 black-255-text">
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
</div> -->

<h2>Message Encoding</h2>

<p>Binary inner frame (after Base64 decoding):</p>
<div class="tui-panel cyan-168 black-255-text" style="padding: 10px; margin-bottom: 10px;">
	<code>LEN (2 bytes) | CMD (1 byte) | PAYLOAD (0-65535 bytes) | HASH (32 bytes SHA-256 over CMD + PAYLOAD)</code>
</div>

<h2>Encoding / Decoding Rules</h2>
<div class="tui-panel cyan-168 black-255-text" style="padding: 10px;">
	<ul>
		<li>Build binary <code>FRAME_BIN = CMD + PAYLOAD + HASH</code></li>
		<li><code>DATA_B64 = base64.b64encode(FRAME_BIN)</code> (no newlines)</li>
		<li>Prepend two-byte <code>LEN = len(DATA_B64)</code> and transmit</li>
	</ul>
</div>

<h4>Field Descriptions</h4>
<div class="tui-panel cyan-168 black-255-text" style="padding: 10px;">
	<ul>
		<li>* <strong>LEN</strong> – unsigned 16-bit, big-endian, length of Base64-encoded data</li>
		<li>* <strong>CMD</strong> – command ID (see Messages)</li>
		<li>* <strong>PAYLOAD</strong> – command-specific data, UTF-8 prior to encoding</li>
		<li>* <strong>HASH</strong> – 32-byte SHA-256 digest of the clear-text sequence CMD | PAYLOAD</li>
	</ul>
</div>

<h2>Messages</h2>

<table class="tui-table">
  <thead>
    <tr>
      <th> CMD (hex) </th>
      <th> Name </th>
      <th> Direction </th>
      <th> PAYLOAD Rules </th>
      <th> Server Response </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 0x01 </td>
      <td> HELLO </td>
      <td> C → S </td>
      <td> (empty) </td>
      <td> 0x81 HELLO_ACK with secret in payload </td>
    </tr>
    <tr>
      <td> 0x02 </td>
      <td> PING </td>
      <td> C → S </td>
      <td> 4–64 bytes </td>
      <td> 0x82 PONG echoing identical payload </td>
    </tr>
    <tr>
      <td> 0x7F </td>
      <td> BYE </td>
      <td> C ↔ S </td>
      <td> (empty) </td>
      <td> No reply – peer closes TCP </td>
    </tr>
  </tbody>
</table>
