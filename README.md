## 依存関係のインストール
```
cd /home/nomadlab/projects/noroshi
npm install
```

## 統合開発サーバーの起動
```
npm run dev
```
### 期待される結果:
- 3つのNext.js開発サーバーが並列で起動
- コンソールに各LPの起動ログが表示される
- ブラウザでの確認
```
toB-lp: http://localhost:3000 にアクセス
toC-lp: http://localhost:3001 にアクセス
toW-lp: http://localhost:3002 にアクセス
```
- 各LPが正常に表示されることを確認

## 個別起動の確認（オプション）
```
npm run dev:toB  # toB-lpのみ起動
npm run dev:toC  # toC-lpのみ起動
npm run dev:toW  # toW-lpのみ起動
```