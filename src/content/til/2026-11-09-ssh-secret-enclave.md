---
title: "Stopping forwarding your SSH agent to remote machines"
tags: [ai]
description: ChatGPT can do what now?
pubDate: "Nov 9 2026"
---

ChatGPT desktop (and probably other AI agents) can and do forward your SSH agent to remote machines. I did not even imagine this is possible, but it is. I was made aware of this in a [discussion here on HN](https://news.ycombinator.com/item?id=50422628). Some users pointed out that using [Secretive](https://github.com/maxgoedjen/secretive) can help you prevent this, using the macOS Secure Enclave. This requires a TouchID or proper authentication before a local SSH key is used.
