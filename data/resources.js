/**
 * PhAI 資源館資料檔
 * ─────────────────────────────────────────────
 * 新增資源：複製一筆物件、改內容即可，網頁會自動長出卡片與篩選選項。
 * 欄位說明：
 *   id                資源編號（PHAI-XXXX，遞增）
 *   status            "已公開" | "資料確認中"
 *   title / summary / description  標題、一句話介紹、詳細描述
 *   author_display    作者顯示名稱
 *   author_visibility "可公開" | "需確認"
 *   resource_type[]   資源類型（對應篩選分類）
 *   physics_topic[]   物理主題
 *   ai_tools[]        使用工具
 *   audience[]        適用對象
 *   url               主要連結（留空字串 = 整理中）
 *   thumbnail_url     （選填）卡片縮圖
 *   extra_links[]     （選填）{label, url, kind}
 *   license_scope / privacy_note   授權與隱私說明
 *   source_event      來源場次或活動
 *   tags[]            關鍵字標籤
 */
window.PHAI_RESOURCES = [
  {
    "id": "PHAI-0001",
    "status": "已公開",
    "title": "Codex × Agent 協作：讓 AI 成為教學助理團隊",
    "summary": "以 Codex 與 Agent 協作示範教師如何建立可分工、可驗證的 AI 教學助理工作流",
    "description": "公開 YouTube 影片資源，適合用於教師研習、社群共學與 AI 教學工作流入門。",
    "author_display": "盧政良",
    "author_visibility": "可公開",
    "resource_type": ["Agent 工作流"],
    "physics_topic": ["AI 教學工作流"],
    "ai_tools": ["Codex", "Hermes", "Agent"],
    "audience": ["教師備課", "社群共學"],
    "url": "https://youtu.be/QD0K7Kul6t4?si=BQ_Ytj7Rs80ix-xm",
    "thumbnail_url": "https://i.ytimg.com/vi/QD0K7Kul6t4/hqdefault.jpg",
    "extra_links": [
      { "label": "講義 PDF", "url": "https://drive.google.com/file/d/18VBDcvDRFWa9kYl_nZuntfSwDTbSjzF7/view", "kind": "Google Drive" }
    ],
    "license_scope": "公開 YouTube 影片與講義 PDF",
    "privacy_note": "公開影片與講義；引用時請保留作者與來源連結",
    "source_event": "5/20 第一場分享",
    "tags": ["Codex", "Agent", "教學助理", "工作流", "YouTube", "講義PDF"]
  },
  {
    "id": "PHAI-0002",
    "status": "已公開",
    "title": "如何打造課堂適合且隨手可用的物理模擬教材",
    "summary": "用 AI 協作製作可直接帶進課堂的物理模擬",
    "description": "第二場分享主題，含 3Blue1Brown 開源動畫工具與物理模擬教材製作。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": ["模擬／互動教材"],
    "physics_topic": ["力學", "探究與實作"],
    "ai_tools": ["3Blue1Brown", "Codex", "Claude"],
    "audience": ["高中", "教師備課"],
    "url": "https://dapper-churros-ce9855.netlify.app/",
    "extra_links": [
      { "label": "分享資料", "url": "https://drive.google.com/file/d/1LYrfGLfCuguvxy97Lg4n9FCJ6m4PsFYH/view?usp=sharing", "kind": "Google Drive" }
    ],
    "license_scope": "公開互動模擬與分享資料",
    "privacy_note": "公開資源；引用時請保留作者與來源連結",
    "source_event": "5/27 第二場分享",
    "tags": ["模擬", "3B1B", "互動教材", "SHM"]
  },
  {
    "id": "PHAI-0003",
    "status": "已公開",
    "title": "NotebookLM × 探究命題：科展轉探究題",
    "summary": "用 NotebookLM 把科展或競賽題材轉成符合課綱的探究命題",
    "description": "整理 108 課綱、Bloom、RAG、YAML、出題指令與探究實作命題資料，協助教師快速建立探究題材與命題流程。",
    "author_display": "趙晉鴻",
    "author_visibility": "可公開",
    "resource_type": ["探究題", "Agent 工作流"],
    "physics_topic": ["探究與實作"],
    "ai_tools": ["NotebookLM", "YAML", "RAG", "Skills"],
    "audience": ["高中", "教師備課"],
    "url": "https://drive.google.com/drive/folders/1jzEIN1FLW1W1XcwPU6hnkaES_jDVCZQb?usp=drive_link",
    "extra_links": [
      { "label": "分享錄影", "url": "https://drive.google.com/file/d/14xVVPLvsnA0OwIWpnPtJRfZl92DGVhE3/view?usp=sharing", "kind": "Google Drive" }
    ],
    "license_scope": "公開 Google Drive 資料夾與分享錄影",
    "privacy_note": "公開資料夾與錄影；引用時請保留作者與來源連結",
    "source_event": "6/3 第三場分享",
    "tags": ["NotebookLM", "探究命題", "YAML", "RAG", "課綱"]
  },
  {
    "id": "PHAI-0004",
    "status": "資料確認中",
    "title": "素養導向出題 Agent 實戰",
    "summary": "用 Claude Code / Cowork 等工具建立可反覆使用的素養命題 Agent",
    "description": "第四場分享主題，重點是分析課綱、拆概念、設計情境、檢查迷思概念。",
    "author_display": "吳易哲",
    "author_visibility": "可公開",
    "resource_type": ["素養題", "Agent 工作流"],
    "physics_topic": ["AI 教學工作流"],
    "ai_tools": ["Claude Code", "Cowork", "Agent"],
    "audience": ["高中", "教師備課"],
    "url": "",
    "license_scope": "待確認",
    "privacy_note": "需確認範例題目與學生資料邊界",
    "source_event": "6/10 第四場分享",
    "tags": ["素養命題", "Agent", "Claude Code", "Cowork"]
  },
  {
    "id": "PHAI-0005",
    "status": "資料確認中",
    "title": "本地端大模型 × Hermes 龍蝦：把 AI 教學助理裝進自己的電腦",
    "summary": "介紹本地端大模型與 Hermes 龍蝦在教師日常工作中的應用",
    "description": "第五場分享主題，聚焦教材整理、評量設計、課堂素材管理與長期工作脈絡。",
    "author_display": "盧政良",
    "author_visibility": "可公開",
    "resource_type": ["工具安裝／部署教學", "Agent 工作流"],
    "physics_topic": ["AI 教學工作流"],
    "ai_tools": ["Hermes", "local LLM", "Ollama"],
    "audience": ["教師備課", "社群共學"],
    "url": "",
    "license_scope": "待確認",
    "privacy_note": "安裝畫面若含帳號路徑需遮蔽",
    "source_event": "6/17 第五場分享",
    "tags": ["Hermes", "龍蝦", "本地端", "LLM"]
  },
  {
    "id": "PHAI-0006",
    "status": "資料確認中",
    "title": "學會模擬的下一步：如何將模擬與評量結合",
    "summary": "把物理模擬從展示工具轉成可操作、可觀察、可評量的學習任務",
    "description": "第六場分享主題，可發展成互動評量設計模板。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": ["模擬／互動教材", "素養題"],
    "physics_topic": ["力學", "探究與實作"],
    "ai_tools": ["AI chatbot", "HTML", "模擬工具"],
    "audience": ["高中", "教師備課"],
    "url": "https://changyi123456.github.io/physics-game-S.H.M/",
    "license_scope": "待確認",
    "privacy_note": "需確認題目與評量資料公開範圍",
    "source_event": "6/24 第六場分享",
    "tags": ["模擬", "評量", "互動題", "遊戲化"]
  },
  {
    "id": "PHAI-0007",
    "status": "資料確認中",
    "title": "Antigravity IDE 實戰入門",
    "summary": "讓 AI 進入教材開發環境，管理資料、題目草稿與備課流程",
    "description": "第七場分享主題，定位為 AI IDE 教材開發入門。",
    "author_display": "趙晉鴻",
    "author_visibility": "可公開",
    "resource_type": ["工具安裝／部署教學", "Agent 工作流"],
    "physics_topic": ["AI 教學工作流"],
    "ai_tools": ["Antigravity IDE", "AI IDE"],
    "audience": ["教師備課", "社群共學"],
    "url": "",
    "license_scope": "待確認",
    "privacy_note": "安裝畫面與帳號資訊需注意",
    "source_event": "7/1 第七場分享",
    "tags": ["Antigravity", "AI IDE", "教材開發"]
  },
  {
    "id": "PHAI-0008",
    "status": "資料確認中",
    "title": "Orbit Transfer 互動模擬",
    "summary": "軌道轉移互動模擬，可讓學生觀察軌道變化與操作變因",
    "description": "講師群分享的公開互動網站，可作為物理模擬資源卡。",
    "author_display": "趙晉鴻",
    "author_visibility": "需確認",
    "resource_type": ["模擬／互動教材"],
    "physics_topic": ["力學"],
    "ai_tools": ["HTML", "JavaScript"],
    "audience": ["高中", "大學基礎"],
    "url": "https://arpowchao.github.io/apps/orbit_transfer/index.html",
    "license_scope": "待確認",
    "privacy_note": "需確認是否可收錄於 PhAI 平台",
    "source_event": "講師群 5/24 分享",
    "tags": ["軌道", "模擬", "互動教材"]
  },
  {
    "id": "PHAI-0009",
    "status": "資料確認中",
    "title": "Orbital Decay 互動模擬",
    "summary": "軌道衰減互動模擬，可作為天體/軌道運動教材",
    "description": "講師群分享的公開互動網站，可作為物理模擬資源卡。",
    "author_display": "趙晉鴻",
    "author_visibility": "需確認",
    "resource_type": ["模擬／互動教材"],
    "physics_topic": ["力學"],
    "ai_tools": ["HTML", "JavaScript"],
    "audience": ["高中", "大學基礎"],
    "url": "https://arpowchao.github.io/apps/orbital_decay/index.html",
    "license_scope": "待確認",
    "privacy_note": "需確認是否可收錄於 PhAI 平台",
    "source_event": "講師群 5/24 分享",
    "tags": ["軌道", "模擬", "互動教材"]
  },
  {
    "id": "PHAI-0010",
    "status": "資料確認中",
    "title": "物理 HTML 電子講義模式",
    "summary": "可吃 LaTeX 與 JavaScript 的多模態 HTML 電子講義想像",
    "description": "長屹老師分享的電子講義參考，可作為平台未來資源呈現樣式參考。",
    "author_display": "江長屹",
    "author_visibility": "需確認",
    "resource_type": ["教材／講義／簡報"],
    "physics_topic": ["跨領域"],
    "ai_tools": ["HTML", "LaTeX", "JavaScript"],
    "audience": ["高中", "教師備課"],
    "url": "https://ebook-physics.netlify.app/",
    "license_scope": "待確認",
    "privacy_note": "需確認可否作為案例收錄",
    "source_event": "講師群 5/18 分享",
    "tags": ["HTML講義", "LaTeX", "多模態"]
  },
  {
    "id": "PHAI-0011",
    "status": "已公開",
    "title": "MotionLab Tracker 技術與操作指南：3D Tracker",
    "summary": "江長屹老師分享的 MotionLab 2D / 3D Tracker 操作與技術指南",
    "description": "整理 2D / 3D Workbench 的運算原理、操作流程與下載，支援自動追蹤、3D 融合與 CSV 匯出，適合高中物理實驗與探究課程。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": ["實驗／數據分析工具", "工具安裝／部署教學"],
    "physics_topic": ["力學", "探究與實作", "實驗數據分析"],
    "ai_tools": ["MotionLab Tracker", "3D Tracker", "CSV"],
    "audience": ["高中", "教師備課", "學生探究"],
    "url": "https://motionlab-tracker-guide.netlify.app/",
    "license_scope": "公開網站資源",
    "privacy_note": "公開網站；引用時請保留作者與來源連結",
    "source_event": "江長屹老師分享",
    "tags": ["3D Tracker", "MotionLab", "影片分析", "實驗數據", "探究與實作"]
  },
  {
    "id": "PHAI-0012",
    "status": "已公開",
    "title": "物理研究員養成計畫 RPG 遊戲",
    "summary": "仁武高中曾意真老師分享的高一物理 RPG 遊戲化學習資源",
    "description": "以 RPG 任務情境包裝高一物理學習，適合學生自學、課堂活動與教師設計遊戲化評量時參考。",
    "author_display": "曾意真",
    "author_visibility": "可公開",
    "resource_type": ["遊戲化學習", "模擬／互動教材"],
    "physics_topic": ["高一物理", "力學", "探究與實作"],
    "ai_tools": ["Web App", "Firebase", "遊戲化"],
    "audience": ["高中", "學生自學", "教師教學"],
    "url": "https://high-school-1st-physics-rpg.web.app/",
    "license_scope": "公開網站資源",
    "privacy_note": "公開網站；引用時請保留作者與來源連結",
    "source_event": "仁武高中 曾意真老師分享",
    "tags": ["RPG", "遊戲化學習", "高一物理", "自學", "任務式學習"]
  }
];

/** 分享場次時間軸（依日期排序，新增場次直接加一筆） */
window.PHAI_SESSIONS = [
  { "no": 1, "date": "2026-05-20", "label": "5/20", "title": "Codex × Agent 協作：讓 AI 成為教學助理團隊", "speaker": "盧政良", "resource_id": "PHAI-0001" },
  { "no": 2, "date": "2026-05-27", "label": "5/27", "title": "如何打造課堂適合且隨手可用的物理模擬教材", "speaker": "江長屹", "resource_id": "PHAI-0002" },
  { "no": 3, "date": "2026-06-03", "label": "6/3",  "title": "NotebookLM × 探究命題：科展轉探究題", "speaker": "趙晉鴻", "resource_id": "PHAI-0003" },
  { "no": 4, "date": "2026-06-10", "label": "6/10", "title": "素養導向出題 Agent 實戰", "speaker": "吳易哲", "resource_id": "PHAI-0004" },
  { "no": 5, "date": "2026-06-17", "label": "6/17", "title": "本地端大模型 × Hermes 龍蝦：把 AI 教學助理裝進自己的電腦", "speaker": "盧政良", "resource_id": "PHAI-0005" },
  { "no": 6, "date": "2026-06-24", "label": "6/24", "title": "學會模擬的下一步：如何將模擬與評量結合", "speaker": "江長屹", "resource_id": "PHAI-0006" },
  { "no": 7, "date": "2026-07-01", "label": "7/1",  "title": "Antigravity IDE 實戰入門", "speaker": "趙晉鴻", "resource_id": "PHAI-0007" }
];
