# Trell(two)

The following project has been developed for the international [FemHack](https://nuwe.io/femhack) in the <mark>frontend</mark>category.

## Tools

Developed in [Svelte](https://svelte.dev/docs) and styled with CSS

## To Get started // To run in local

Install the dependencies and start!:

```bash
npm install
npm run dev

```

```bash
yarn
yarn dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see the app running.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## UX/UI

The main layout has been inspired by other tasks manager apps like [Trello](https://trello.com/) and [Jira](https://www.atlassian.com/software/jira)

## Folder Structure

- [scripts/](./svelte-nuwe-femhack/scripts)
  - [setupTypeScript.js](./svelte-nuwe-femhack/scripts/setupTypeScript.js)
- [src/](./svelte-nuwe-femhack/src)
  - [components/](./svelte-nuwe-femhack/src/components)
    - [Card.svelte](./svelte-nuwe-femhack/src/components/Card.svelte)
    - [Dashboard.svelte](./svelte-nuwe-femhack/src/components/Dashboard.svelte)
    - [Header.svelte](./svelte-nuwe-femhack/src/components/Header.svelte)
    - [List.svelte](./svelte-nuwe-femhack/src/components/List.svelte)
    - [Modal.svelte](./svelte-nuwe-femhack/src/components/Modal.svelte)
    - [Sign.svelte](./svelte-nuwe-femhack/src/components/Sign.svelte)
  - [stores/](./svelte-nuwe-femhack/src/stores)
    - [listIndex.js](./svelte-nuwe-femhack/src/stores/listIndex.js)
    - [tasks.js](./svelte-nuwe-femhack/src/stores/tasks.js)
    - [user.js](./svelte-nuwe-femhack/src/stores/user.js)
  - [App.svelte](./svelte-nuwe-femhack/src/App.svelte)
  - [main.js](./svelte-nuwe-femhack/src/main.js)
- [.gitignore](./svelte-nuwe-femhack/.gitignore)
- [README.md](./svelte-nuwe-femhack/README.md)
- [package.json](./svelte-nuwe-femhack/package.json)
- [rollup.config.js](./svelte-nuwe-femhack/rollup.config.js)
