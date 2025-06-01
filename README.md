# Mobility Intelligence Hub

モビリティ業界コンサルタント向けRSS情報収集アプリケーション

## 概要

Mobility Intelligence Hubは、モビリティ業界のコンサルタントが効率的に情報収集を行うためのWebアプリケーションです。政府機関、自動車メーカー、メディアなどの多様な情報源からRSSフィードを自動取得し、MECE（Mutually Exclusive, Collectively Exhaustive）原則に基づいて体系的に分類・表示します。

## 主な機能

### 📊 MECE分類システム
- **A. 政策・規制**: 国内外の政策動向
- **B. 技術・製品**: SDV、自動運転、電動化
- **C. 市場・事業**: メーカー動向、MaaS、サプライチェーン
- **D. 社会・環境**: 社会課題、サステナビリティ

### 🚗 SDV専用詳細分類
- プラットフォーム層（車載OS、仮想化技術）
- アプリケーション層（インフォテインメント、ADAS機能）
- クラウド・通信層（OTA配信、V2X通信）
- ハードウェア層（高性能ECU、センサー技術）
- データ・AI層（機械学習、デジタルツイン）

### 🔄 自動RSS収集
- リアルタイムRSSフィード取得
- CORS対応プロキシ統合
- 重複記事の自動除去
- 古い記事の自動アーカイブ

### 📈 分析・可視化機能
- トレンド分析チャート
- カテゴリ別記事数統計
- 検索・フィルタリング機能
- エクスポート機能

## 対応RSS情報源

### 政府・行政機関
- [経済産業省](https://www.meti.go.jp/rss/)
- [国土交通省](https://www.mlit.go.jp/page/rssinfo.html)

### 自動車メーカー
- [トヨタ自動車](https://global.toyota/jp/rss_feeds/index.html)
- [マツダ](https://www.mazda.com/ja/rss/)

### メディア・報道機関
- Car Watch
- Response.jp
- オートカー・ジャパン

## 技術仕様

### フロントエンド
- **JavaScript**: ES6+
- **CSS**: CSS Grid, Flexbox
- **RSS Parser**: rss-parser
- **Charts**: Chart.js

### バックエンド（CORS対応）
- **CORS Proxy**: allorigins.win
- **Fallback**: cors-anywhere.herokuapp.com

### デプロイメント
- **GitHub Pages**: 静的サイトホスティング
- **GitHub Actions**: 自動ビルド・デプロイ

## セットアップ

### 前提条件
- Node.js 18.0以上
- Git

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/your-username/mobility-intelligence-hub.git
cd mobility-intelligence-hub

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 本番環境デプロイ

```bash
# ビルド
npm run build

# GitHub Pagesにデプロイ
npm run deploy
```

## ディレクトリ構造

```
mobility-intelligence-hub/
├── src/
│   ├── index.html
│   ├── js/
│   │   ├── app.js
│   │   ├── rss-parser.js
│   │   ├── categorizer.js
│   │   └── chart-generator.js
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   └── data/
│       ├── rss-sources.json
│       └── mece-categories.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
├── package.json
├── README.md
└── LICENSE
```

## 使用方法

### 1. ダッシュボード
アプリケーション起動時に表示される最新記事の一覧。カテゴリ別フィルタリングと検索機能を利用可能。

### 2. カテゴリビュー
MECE分類に基づいた記事の体系的表示。SDV関連記事は詳細分類で確認可能。

### 3. 統計・分析
記事数の推移、カテゴリ別分布、トレンド分析をチャートで可視化。

### 4. RSS管理
情報源の追加・削除、更新頻度の設定、CORS設定の管理。

## 設定

### RSS情報源の追加

`src/data/rss-sources.json`にRSS情報源を追加：

```json
{
  "新情報源名": {
    "name": "情報源の表示名",
    "category": "MECE分類コード",
    "subcategory": "サブカテゴリ名",
    "rss_url": "RSSフィードのURL",
    "description": "情報源の説明",
    "status": "active"
  }
}
```

### CORSプロキシの設定

CORS制限を回避するため、以下のプロキシを利用：
- プライマリ: `https://api.allorigins.win/get?url=`
- バックアップ: `https://cors-anywhere.herokuapp.com/`

## GitHub Actions によるCI/CD

`.github/workflows/deploy.yml`により自動デプロイを実現：

- **トリガー**: mainブランチへのプッシュ
- **ビルド**: npm run build
- **テスト**: ESLintとJestによる自動テスト
- **デプロイ**: GitHub Pagesへの自動デプロイ

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 貢献

プルリクエストや課題報告を歓迎します。大きな変更を提案する場合は、まずIssueで議論してください。

### 開発ガイドライン

1. フォークしてfeatureブランチを作成
2. 変更をコミット
3. テストを実行: `npm test`
4. プルリクエストを作成

## お問い合わせ

質問や提案がございましたら、[Issues](https://github.com/your-username/mobility-intelligence-hub/issues)までお願いします。

## 更新履歴

### v1.0.0 (2025-06-01)
- 初回リリース
- MECE分類システム実装
- SDV詳細分類機能
- RSS自動取得機能
- 基本的な統計機能

### v1.1.0 (予定)
- AI自動要約機能
- より高度なフィルタリング
- データエクスポート機能
- モバイル対応の改善

---

**Developed for Mobility Industry Consultants**