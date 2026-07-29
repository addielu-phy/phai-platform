# PhAI 資源館｜AI × 物理教學共備平台

PhAI 共學圈的教學資源分享平台，收錄社群老師的 AI 物理教學案例、互動模擬、探究命題與教師工作流。

- 正式網址：https://addielu-phy.github.io/phai-platform/
- 舊版網址（已轉址）：https://addielu-phy.github.io/ai-coding-tools-free-comparison/phai/resource-platform/

## 網站架構

```
index.html          首頁：分類導覽、資源目錄（搜尋/篩選/排序/詳情視窗）、分享場次時間軸、上架流程、關於
submit/index.html   投稿頁：Google 表單入口（可頁內填寫）、欄位預覽、投稿前檢查；管理者專區收在摺疊區
data/resources.js   資料檔：所有資源卡與場次資料都在這裡
assets/site.css     共用設計系統（色彩 tokens、深淺色、topbar、按鈕、卡片等元件）
assets/             Google Form 建立腳本（.gs）與 Sheet 欄位對照表（.csv）
404.html            GitHub Pages 404 頁（自動導回首頁）
legacy/             改版前的舊版頁面存檔，保留供回顧對照（不再更新）
```

好用的網址參數（可直接分享給老師）：

- 篩選狀態會寫進網址，例如 `?type=模擬／互動教材`、`?q=notebooklm`
- `?r=PHAI-0003` 直接打開該筆資源的詳情視窗（詳情視窗裡也有「複製分享連結」按鈕）

純靜態網站，無建置流程；push 到 main 之後 GitHub Pages 自動部署。

## 日常維護

### 新增/修改資源卡

只需要編輯 `data/resources.js`：

1. 複製 `PHAI_RESOURCES` 陣列裡的一筆物件，貼在陣列最後。
2. 改 `id`（遞增，如 PHAI-0013）、標題、連結等欄位；欄位說明見檔案開頭註解。
3. `url` 留空字串會顯示「整理中」；`status` 用「已公開」或「資料確認中」。
4. `resource_type` 第一個值決定卡片顏色與圖示（對照 index.html 裡的 `TYPE_META`）。

統計數字、篩選選項、分類 chips 都會自動更新。

### 新增分享場次

在 `data/resources.js` 的 `PHAI_SESSIONS` 陣列加一筆，`resource_id` 指向對應的資源卡。

### 投稿審核流程

1. 老師從投稿頁填 Google 表單 → 回覆進收件 Sheet。
2. 講師群在 Sheet 上做輕審核（連結可開、公開範圍、個資與授權）。
3. 審核通過後，把該筆資料整理成 `data/resources.js` 的一筆物件，push 上架。

表單後台、收件 Sheet 與重建腳本的連結，都在投稿頁的「管理者專區」摺疊區。

## 部署

```bash
git add -A
git commit -m "update resources"
git push
```

GitHub Pages（main branch / root）約 1-2 分鐘後生效。
