## tsc
- `@babel/preset-typescript` より前から存在していた。
- 以下が可能
  - TypeScriptの型チェック
  - TypeScript → JavaScript へのトランスパイル
  - 型定義ファイル(○○.d.ts)の生成

## @babel/preset-typescript
- 以下が可能
  - TypeScript → JavaScript へのトランスパイル
  - 複数ファイルの出力 
  (参考:https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html#babel-vs-tsc-for-typescript) 
  > Do you need a build pipeline with multiple potential outputs? Use babel for transpiling and tsc for type checking
