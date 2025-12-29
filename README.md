# NOROSHI HIROSHIMA 25 Web

NOROSHI HIROSHIMA 25のWebプロジェクトへようこそ。
このプロジェクトは、Next.jsを使用して構築された統合ランディングページ（LP）アプリケーションです。

## プロジェクト概要

このリポジトリには、以下の主要なLP（ランディングページ）が含まれており、それぞれ統合管理されています。

- **トップページ**: `src/app/page.tsx`
  - アクセスURL: `/`
- **ToB (協賛企業向け)**: `src/app/tob/page.tsx`
  - アクセスURL: `/tob`
- **ToC (参加者向け)**: `src/app/toc/page.tsx`
  - アクセスURL: `/toc`
- **ToW (福祉事業所向け)**: `src/app/tow/page.tsx`
  - アクセスURL: `/tow`

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/)
- **プログラミング言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIライブラリ**: React

## 開発環境のセットアップ

### 前提条件

Node.jsがインストールされている必要があります。

### インストール

プロジェクトの依存関係をインストールします：

```bash
npm install
# または
yarn install
# または
pnpm install
# または
bun install
```

### 開発サーバーの起動

開発サーバーを起動して、ローカル環境でプレビューします：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

コマンド実行後、ブラウザで [http://localhost:3000](http://localhost:3000) を開くと動作確認ができます。

### ページの編集

ページの内容は `src/app` ディレクトリ以下の各 `page.tsx` ファイルを編集することで変更できます。ファイルの変更は保存時に自動的にブラウザに反映されます。

## ディレクトリ構造

- `src/app`: アプリケーションのルーティングとページコンポーネントが格納されています。
- `src/components`: 再利用可能なUIコンポーネントが格納されています。
- `public`: 画像などの静的ファイルが格納されています。

## Learn More

Next.jsについてさらに詳しく知りたい場合は、以下のリソースを参照してください：

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能やAPIについて学べます。
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsのチュートリアルです。

## デプロイ

Next.jsアプリのデプロイには、[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)の使用が推奨されています。
詳細については、[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)をご確認ください。
