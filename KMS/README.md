# 프로젝트 설정

## React TypeScript 프로젝트 생성

<br/>

```properties
npx create-react-app [Project Name] --template typescript
```

<br/>

## ESLint + Prettier 설정

<br/>

```properties
npm i -D eslint prettier
npm i -D @typescript-eslint/eslint-plugin
npm i -D @typescript-eslint/parser
npm i -D eslint-config-airbnb
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-plugin-react eslint-plugin-react-hooks
npm i -D eslint-plugin-jsx-a11y eslint-plugin-import
```

- **eslint**: ESLint 코어
- **eslint-plugin-react**: React 관련 lint 설정 지원
- **eslint-plugin-react-hooks**: React Hooks의 규칙을 강제해주는 플러그인
- **eslint-plugin-import**: ES2015+의 import/export 구문을 지원
- **eslint-plugin-jsx-ally**: JSX 내의 접근성 문제에 대해 즉각적인 AST린팅 피드백을 제공
- **eslint-config-prettier**: prettier와 eslint의 충돌을 일으키는 ESLint 규칙들을 비활성 시켜주는 config
- **eslint-plugin-prettier**: prettier에서 인식하는 오류를 ESLint가 출력
- **eslint-config-airbnb**: airbnb사의 코딩규칙 사용
