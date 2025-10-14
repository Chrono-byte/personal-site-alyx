---
title: "Firefox Discord Presence: My First Browser Extension"
tags: ["firefox", "browser-extension", "discord", "javascript"]
date: "2025-02-15"
summary: "Building my first browser extension that shares the current website to Discord presence - a journey from basic JavaScript to published Firefox add-on."
---

## Firefox Discord Presence: My First Browser Extension

**Firefox Discord Presence** marked my entry into browser extension development,
a project born from the desire to share what I was browsing with friends on
Discord. This simple yet functional extension automatically updates Discord rich
presence with the current website information.

## Project Origins

Created during my early programming exploration in 2017, this was one of my
first substantial JavaScript projects. The motivation was simple: I wanted to
show friends what websites I was visiting through Discord's rich presence
feature.

### Learning Goals

The project served as a practical introduction to:

- **Browser Extension APIs** and manifest structures
- **JavaScript asynchronous programming** with promises
- **Cross-origin communication** between content scripts and background scripts
- **Extension publishing** and distribution

## Technical Architecture

### Extension Components

Firefox extensions follow a modular architecture:

- **Manifest File**: Extension metadata and permissions
- **Background Script**: Handles Discord API communication
- **Content Script**: Extracts page information
- **Popup Interface**: User controls and status display

### Discord Rich Presence Integration

The core functionality relies on Discord's RPC (Rich Presence) API:

```javascript
// Background script communication with Discord
const client = require("discord-rpc");
client.login({ clientId: "your-client-id" }).then(() => {
  client.setActivity({
    details: "Browsing the web",
    state: document.title,
    largeImageKey: "firefox-logo",
    largeImageText: "Firefox",
    startTimestamp: Date.now(),
  });
});
```

## Implementation Journey

### Version 1: Basic Functionality

The initial implementation was straightforward:

1. **Content Script** extracts page title and URL
2. **Background Script** connects to Discord RPC
3. **Activity Updates** on page navigation

### Technical Challenges

Working with browser extension constraints taught me about:

- **Content Security Policy** limitations
- **Extension Permissions** and user privacy
- **Cross-domain Communication** patterns
- **Asynchronous Message Passing** between scripts

### User Experience Considerations

The extension needed to balance functionality with user control:

- **Automatic Updates**: Seamless presence sharing
- **Manual Controls**: User can pause/resume sharing
- **Privacy Settings**: Granular control over shared information
- **Status Indicators**: Clear feedback on connection status

## Development Process

### Firefox Extension APIs

Learning the WebExtensions API was foundational:

```javascript
// Manifest v2 structure
{
  "manifest_version": 2,
  "name": "Discord Presence for Firefox",
  "version": "1.0",
  "permissions": [
    "tabs",
    "activeTab",
    "storage"
  ],
  "background": {
    "scripts": ["background.js"]
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"]
  }]
}
```

### Discord Integration

Implementing Discord rich presence required:

- **OAuth2 Flow** for user authentication
- **WebSocket Connection** for real-time updates
- **Activity Payloads** with rich media information
- **Error Handling** for connection failures

## Publishing and Distribution

### Firefox Add-ons Process

Getting the extension published involved:

- **Code Review** by Mozilla reviewers
- **Security Audit** for potential vulnerabilities
- **Privacy Policy** compliance
- **User Support** infrastructure

### User Feedback and Iteration

Post-launch development focused on:

- **Bug Fixes** from user reports
- **Feature Requests** implementation
- **Performance Optimization** for resource usage
- **Compatibility Updates** for Firefox versions

## Lessons Learned

### Browser Extension Development

The project taught me crucial lessons about:

- **Security-First Design** in extension development
- **User Privacy** considerations and permissions
- **Cross-Browser Compatibility** challenges
- **Extension Lifecycle** management

### JavaScript Ecosystem

Working with vanilla JavaScript highlighted:

- **Asynchronous Programming** patterns
- **Module Systems** and dependency management
- **Browser APIs** and their limitations
- **Debugging Tools** for extension development

## Project Impact

Firefox Discord Presence achieved:

- **Active User Base** with positive feedback
- **Learning Platform** for browser extension concepts
- **Foundation** for future extension projects
- **Community Contribution** to the Firefox ecosystem

## Technical Evolution

The project evolved from simple presence sharing to include:

- **Custom Status Messages** for different sites
- **Site-Specific Icons** and branding
- **Activity History** and statistics
- **Advanced Privacy Controls**

## Current Status

While the extension served its purpose during its active period, it
demonstrated:

- **Feasibility** of Discord integration in browsers
- **Effectiveness** of rich presence for social features
- **Importance** of user-centric extension design
- **Value** of learning through practical projects

The extension remains available on
[GitLab](https://gitlab.com/Chrono-byte/firefox-discord) as a reference for
browser extension development.
