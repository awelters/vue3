# Vite + Vue 3 + Typescript + Vue Router + Pinia + Vue I18n + Eslint + Prettier + Vitest + Cypress

A [Vite](https://vitejs.dev/) scaffolded project with Vite + Vue 3 + Typescript + Vue Router + Pinia + Vue I18n + Eslint + Prettier + Vitest + Cypress template extended with some useful tools. To scaffold your own based on this template
`npx degit awelters/vue3 vue3`

## Why Vite?
Long story short, slow start and update times for the serve when developing. Uses native ESM based dev server vs bundle based dev server. Read more about it here: https://vitejs.dev/guide/why.html#why-vite

## Options API vs Composition API
This template will use both the Options API and Composition API to demonstrate both. The Options API is implemented on top of the Composition API. Tip: While Vue does support TypeScript usage with Options API, it is recommended to use Vue with TypeScript via Composition API as it offers simpler, more efficient and more robust type inference.

The Options API is centered around the concept of a "component instance", which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.

The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic. If you've used React before this will be more familiar.

If you are new to Vue, here's our general recommendation:

For learning purposes, go with the style that looks easier to understand to you. Again, most of the core concepts are shared between the two styles. You can always pick up the other style later.

For production use:

Go with Options API if you are not using build tools, or plan to use Vue primarily in low-complexity scenarios, e.g. progressive enhancement.

Go with Composition API + Single-File Components if you plan to build full applications with Vue.

## `<script setup>`

`<script setup>` is a compile-time syntactic sugar for using Composition API inside Single-File Components (SFCs). It is the recommended syntax if you are using both SFCs and Composition API. It provides a number of advantages over the normal `<script>` syntax:

* More succinct code with less boilerplate
* Ability to declare props and emitted events using pure TypeScript
* Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
* Better IDE type-inference performance (less work for the language server to extract types from code)

## Further Reading:

https://vuejs.org/guide/introduction.html#api-styles

https://vuejs.org/guide/introduction.html#which-to-choose

https://vuejs.org/guide/typescript/options-api.html

https://vuejs.org/guide/typescript/composition-api.html

https://vuejs.org/api/sfc-spec.html#sfc-syntax-specification

https://vuejs.org/api/sfc-script-setup.html#script-setup


## Links to some libraries used

- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vite.net/) for easier and type safe state handling
- [Vue I18n](https://vue-i18n.intlify.dev/) for easy internationalization
- [Eslint](https://eslint.org/) with rules for high code quality
- [Prettier](https://prettier.io/) for formatting code in an opinonated way
- [Vitest](https://vitest.dev/) for unit testing
- [Cypress](https://www.cypress.io/) for E2E testing

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Install Node Version Manager

### Mac/Linux

https://github.com/nvm-sh/nvm#installing-and-updating

### Windows

https://github.com/coreybutler/nvm-windows/releases

## Use Node LTS (as of 10/3/2023)

```
nvm install 18.18.0
nvm use 18.18.0
```

## Installation Yarn Package Manager (v1)

```
npm install --global yarn
```

## Installation Project Dependencies

```
yarn install
```

## Run in dev mode locally (http) with hot reload

```
yarn dev
```

## Run in dev mode locally (https) with hot reload

```
yarn dev-https
```

## Lint w/ fixing

```
yarn lint
```

## Formate code using Prettier

```
yarn format
```

## Run Unit Tests with coverage and hot reload

```
yarn test:unit:dev
```

## Run Unit Tests with coverage (typical use is in CI/CD pipelines)

```
yarn test:unit
```

## Open E2E Tests (opens Cypress UI)

```
yarn test:e2e:local
```

## Run E2E Tests in headless mode (typical use is in CI/CD pipelines)

```
yarn build
yarn test:e2e
```

## Type-Check and build for production

```
yarn build
```

## Preview build for production (after building for production)

```
yarn preview
```