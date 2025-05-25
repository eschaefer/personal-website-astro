---
layout: "../layouts/About.astro"
title: About Me
---

I'm a **software engineer** with 12 years of experience developing apps and user interfaces for the web. I work across the full stack, and have always leaned toward product companies that build beautiful and stable software.

I have a strong preference for statically typed languages like **TypeScript** and **ReScript**. My library of choice for building UIs is **React**, and I've built backends and **GraphQL** servers with **node.js**. I've set up **CI/CD** pipelines and managed deployments to **GCP** (on Kubernetes), **AWS**, **Vercel**, and others.

I've worked at:

- [Linear](https://linear.app)
- [Amie](https://amie.so)
- [EyeEm](https://www.eyeem.com)
- [Native Instruments](https://www.native-instruments.com)
- [Edenspiekermann](https://www.edenspiekermann.com/)
- [Sunst Studio](http://sunst-studio.com)

## Open source

- [Mubi Watch Party](https://github.com/eschaefer/mubi-watch-party) - A web extension (Chrome + Firefox) to sync Mubi movies with friends.
- [rescript-peerjs](https://github.com/eschaefer/rescript-peerjs) - ReScript bindings for PeerJS.
- [bs-react-grid-dnd](https://github.com/eschaefer/bs-react-grid-dnd) - ReasonML binding for react-grid-dnd.
- [babel-plugin-framer-x](https://github.com/eschaefer/babel-plugin-framer-x) - A Babel plugin to remove Framer X code from your React components.
- [React + Apollo SSR Boilerplate](https://github.com/eschaefer/react-apollo-ssr-boilerplate) - Made for my talk at BerlinJS (unmaintained)
- [Dash Nightwatch Generator](https://github.com/eschaefer/dash-nightwatch-generator) - Generates a Nightwatch.js docset for Dash
- [Tor Proxy Toggle](https://github.com/eschaefer/tor-proxy-toggle) - Sets up an OS X command-line alias to toggle a system SOCKS proxy through Tor
- [faster-react-tabs](https://github.com/edenspiekermann/faster-react-tabs) - A flexible and context-agnostic React component used to render accessible and simple tabs (unmaintained)

## Talks

- [ReasonML for Skeptics](https://www.youtube.com/watch?v=cmOSN_mZbEo) - React Day Berlin: 06.12.2019
- [Apollo + GraphQL: A step toward more declarative UIs](/blog/2017/10/22/apollo-graphql-a-step-toward-more-declarative-uis/) - Berlin.JS: 19.10.2017

<!-- prettier-ignore-end -->

<script type="module">
  async function main() {
    async function getTracks() {
      const url =
        'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=twegen&api_key=c64ac6cffa22a119f22f856dcc646157&format=json';

      const response = await fetch(url).then((resp) => resp.json());
      return response.recenttracks.track;
    }

    const tracks = await getTracks();

    if (tracks && tracks.length) {
      document.querySelector(
        '.listening'
      ).innerHTML = `<h2>🎵 &nbsp;&nbsp;Lately I am listening to...</h2>
      <ul class="tracks"></ul>
    `;

      let el = document.querySelector('.tracks');

      tracks.slice(0, 25).forEach((track) => {
        let parent = document.createElement('li');
        parent.innerHTML = `<strong>${track.artist['#text']}</strong> - <span>${track.name}</span>`;
        parent.className = 'track';
        el.appendChild(parent);
      });
    }
  }

  main();
</script>

<div class="listening"></div>
