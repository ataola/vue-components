# vue3-vite-ts-uniapp

## init project

```
npx degit dcloudio/uni-preset-vue#vite-ts vue3-vite-uniapp
```

## install dependencies

```
yarn install
```

## add prettier and eslint to project

```
yarn add @typescript-eslint/eslint-plugin -D
yarn add @typescript-eslint/parser -D
yarn add @vue/eslint-config-prettier -D
yarn add @vue/eslint-config-typescript -D
yarn add @vuedx/typescript-plugin-vue -D
yarn add eslint -D
yarn add eslint-plugin-prettier -D
yarn add eslint-plugin-vue -D
yarn add prettier -D
```

## commitlint && husky && lint-staged

```
yarn add @commitlint/cli @commitlint/config-conventional -D
yarn add husky -D
yarn add lint-staged -D
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## run in h5 mode

```
yarn dev:h5
```

## build in wechat mini program

```
yarn build:mp-weixin
```
