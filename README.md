# Michelin Ramen LP (Halal Wagyu)

業態: **Michelin Ramen** (Halal Wagyu) ドメイン: `michelin-ramen.halal-food-wagyu.com`

## 仕組み

Eleventy (11ty) を使ったマルチ店舗対応の静的サイト。
`src/_data/stores.js` の配列に店舗を追加するだけで、
`/{region}/{slug}/index.html` が自動生成されます。

## 店舗追加の手順

`src/_data/stores.js` の `stores` 配列に新しいオブジェクトを追加するだけ:

```js
{
  region: "osaka",
  slug: "umeda",
  name_full_en: "...",
  ...
}
```

→ `/osaka/umeda/` で公開されます。

## ローカルビルド

```bash
npm install
npm run start   # localhost:8080 で確認
```

## デプロイ

Vercel に Push すると自動でビルド & デプロイされます。
- Build Command: `npm run build`
- Output Directory: `_site`

## ファイル構成

```
.
├── .eleventy.js        # Eleventy 設定
├── vercel.json         # Vercel ビルド設定
├── package.json
├── src/
│   ├── store.njk       # 全店舗共通のテンプレート
│   ├── _data/
│   │   └── stores.js   # 全店舗データ（ここに追加するだけ）
│   └── assets/         # 画像（ヒーローなど）
│       └── ramen1.jpg
```
