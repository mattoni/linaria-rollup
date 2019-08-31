# Linaria Rollup Issue

The rollup plugin for linaria is causing the error
`Error: Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup`

This is a minimal reproduction of the issue.

## Building the Library

```
npm install
npm run build
npm link
```

## Running the Example

```
cd example
npm install
npm link linaria-rollup
npm start
```
