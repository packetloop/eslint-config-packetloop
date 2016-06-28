# eslint-config-packetloop


ESLint package for Node and React


## Installation

```sh
npm install --save-dev eslint packetloop/eslint-config-packetloop
```

## Configuration

```sh
touch .eslintrc

echo '{
  "extends": "packetloop"
}' > .eslintrc
```

## Running

Update `package.json`
```json
{
  "scripts": {
  "lint": "eslint --cache ."
  }
}
```

Run:
```sh
npm run lint --silent
```

## CircleCI

```yaml
test:
  pre:
    - npm run lint -- --debug --output-file reports/lint.xml --format junit

general:
  artifacts:
    - reports
```
