---
title: "Babel Plugin for React Components Made with Framer X"
tags: [react, design, javascript, framer]
description: Useful for converting Framer X components into production-ready components.
pubDate: "Oct 08 2018"
---

This weekend I published a Babel plugin that turns React components made with Framer X into production-ready components that you can directly use in Storybook, Styleguidist, Gatsby, or wherever.

Typically if you created React components with Framer, you need to remove the static `propertyControls` and dependencies imported from the `framer` npm library by hand, if you want to use them anywhere else.

### The TLDR;

```
npm install --save-dev babel-plugin-framer-x
```

Then add it to your Babel configuration:

```json
{
  "plugins": ["babel-plugin-framer-x"]
}
```

If you find any issues, please bring them to my attention on Github!

[https://github.com/eschaefer/babel-plugin-framer-x](https://github.com/eschaefer/babel-plugin-framer-x)
