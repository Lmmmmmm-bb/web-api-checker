# Web API Checker

[![codeql][codeql-badge]][codeql-url] [![release][release-badge]][release-url] [![license][license-badge]][license-url] [![npm][npm-badge]][npm-url]

[codeql-badge]: https://github.com/Lmmmmmm-bb/web-api-checker/actions/workflows/codeql-analysis.yml/badge.svg
[codeql-url]: https://github.com/Lmmmmmm-bb/web-api-checker/actions/workflows/codeql-analysis.yml
[release-badge]: https://github.com/Lmmmmmm-bb/web-api-checker/actions/workflows/release.yml/badge.svg
[release-url]: https://github.com/Lmmmmmm-bb/web-api-checker/actions/workflows/release.yml
[license-badge]: https://img.shields.io/github/license/Lmmmmmm-bb/web-api-checker
[license-url]: https://github.com/Lmmmmmm-bb/web-api-checker/blob/main/LICENSE
[npm-badge]: https://img.shields.io/github/v/release/Lmmmmmm-bb/web-api-checker?include_prereleases&sort=semver
[npm-url]: https://www.npmjs.com/package/web-api-checker

> Just check the web api is available or not before using it, inspired by [toniengelhardt](https://github.com/toniengelhardt/webapicheck).

## Install

```bash
npm install web-api-checker
```

## Usage

```ts
import { isWebAPISupport } from 'web-api-checker';

// check all api support in https://api-checker.lmmmmmm.dev
console.log(isWebAPISupport('WebGPU')); // false
console.log(isWebAPISupport('WebSocket')); // true
// check multiple web api
console.log(isWebAPISupport(['WebGPU', 'WebSocket'])); // false
```
