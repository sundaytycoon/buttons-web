# buttons-web

## Setup Configuration

- yarn 적용... 왜 yarn을 쓰는거지?

  - parallel installation!
  - automatic lock file generation!
  - more powerful security!
    ```bash
    # https://yarnpkg.com/getting-started/install
    # Node.js >= 16.10, 관리자 권한으로 실행(windows)
    $ corepack enable
    $ yarn init -2
    ```

- react-app-rewired... 얘는 또 뭔데?

  - eject를 하지 않고도 webpack 설정을 다시 할 수 있다!
  - project root path의 `config-overrides.js` 파일로 그게 가능하다!

    ```bash
    $ yarn add react-app-rewired --dev

    # install 이후, scripts 명령어에 react-scripts 부분을 react-app-rewired로 바꿔준다!
    ```

- typescript를 적용시켜 보자!
  ```bash
  $ npm i -g typescript
  $ tsc --init
  ```

## Issue
- 아니 왜 typescript path alias 안먹는거야아아아아아아
  ```json
  // tsconfig.json
  {
    "extends": "./tsconfig.paths.json",
    "compilerOptions": {
      // settings
    },
    "include": ["src"]
  }

  // tsconfig.paths.json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@src/*": ["./src/*"]
      }
    }
  }
  ```
- eslint 한거로 format on save 가 안된다... 홀리몰리;;