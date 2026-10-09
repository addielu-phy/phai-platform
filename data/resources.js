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
    "title": "Codex × Agent 協作——讓 AI 成為你的教學助理團隊",
    "summary": "以 Codex 與 Agent 協作示範教師如何建立可分工、可驗證的 AI 教學助理工作流",
    "description": "5/20 第一場分享：以 Codex 與 Agent 協作，讓 AI 成為你的教學助理團隊。公開 YouTube 影片與講義，適合教師研習、社群共學與 AI 教學工作流入門。",
    "author_display": "盧政良",
    "author_visibility": "可公開",
    "resource_type": [
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Codex",
      "Hermes",
      "Agent"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://youtu.be/QD0K7Kul6t4?si=BQ_Ytj7Rs80ix-xm",
    "thumbnail_url": "https://i.ytimg.com/vi/QD0K7Kul6t4/hqdefault.jpg",
    "extra_links": [
      {
        "label": "講義 PDF",
        "url": "https://drive.google.com/file/d/18VBDcvDRFWa9kYl_nZuntfSwDTbSjzF7/view",
        "kind": "Google Drive"
      }
    ],
    "license_scope": "公開 YouTube 影片與講義 PDF",
    "privacy_note": "公開影片與講義；引用時請保留作者與來源連結",
    "source_event": "5/20 第一場分享",
    "tags": [
      "Codex",
      "Agent",
      "教學助理",
      "工作流",
      "YouTube",
      "講義PDF"
    ]
  },
  {
    "id": "PHAI-0002",
    "status": "已公開",
    "title": "如何打造課堂適合且隨手可用的物理模擬教材",
    "summary": "用 AI 協作製作可直接帶進課堂的物理模擬",
    "description": "第二場分享主題，含 3Blue1Brown 開源動畫工具與物理模擬教材製作。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": [
      "模擬／互動教材",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "力學",
      "探究與實作"
    ],
    "ai_tools": [
      "3Blue1Brown",
      "Codex",
      "Claude"
    ],
    "audience": [
      "高中",
      "教師備課"
    ],
    "url": "https://dapper-churros-ce9855.netlify.app/",
    "extra_links": [
      {
        "label": "分享錄影",
        "url": "https://drive.google.com/file/d/1LYrfGLfCuguvxy97Lg4n9FCJ6m4PsFYH/view?usp=sharing",
        "kind": "Google Drive"
      }
    ],
    "license_scope": "公開互動模擬與分享資料",
    "privacy_note": "公開資源；引用時請保留作者與來源連結",
    "source_event": "5/27 第二場分享",
    "tags": [
      "模擬",
      "3B1B",
      "互動教材",
      "SHM"
    ]
  },
  {
    "id": "PHAI-0003",
    "status": "已公開",
    "title": "NotebookLM × 探究命題——科展題目轉化為符合課綱的探究題",
    "summary": "用 NotebookLM 把科展或競賽題材轉成符合課綱的探究命題",
    "description": "6/3 第三場分享：整理 108 課綱、Bloom、RAG、YAML、出題指令與探究實作命題資料，協助教師快速建立探究題材與命題流程。",
    "author_display": "趙晉鴻",
    "author_visibility": "可公開",
    "resource_type": [
      "探究題",
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "探究與實作"
    ],
    "ai_tools": [
      "NotebookLM",
      "YAML",
      "RAG",
      "Skills"
    ],
    "audience": [
      "高中",
      "教師備課"
    ],
    "url": "https://drive.google.com/drive/folders/1jzEIN1FLW1W1XcwPU6hnkaES_jDVCZQb?usp=drive_link",
    "extra_links": [
      {
        "label": "分享錄影",
        "url": "https://drive.google.com/file/d/14xVVPLvsnA0OwIWpnPtJRfZl92DGVhE3/view?usp=sharing",
        "kind": "Google Drive"
      }
    ],
    "license_scope": "公開 Google Drive 資料夾與分享錄影",
    "privacy_note": "公開資料夾與錄影；引用時請保留作者與來源連結",
    "source_event": "6/3 第三場分享",
    "tags": [
      "NotebookLM",
      "探究命題",
      "YAML",
      "RAG",
      "課綱"
    ]
  },
  {
    "id": "PHAI-0004",
    "status": "已公開",
    "title": "素養導向出題 Agent 實戰",
    "summary": "用 Claude Code / Cowork 等工具建立可反覆使用的素養命題 Agent",
    "description": "6/10 第四場分享錄影，示範如何分析課綱、拆解概念、設計情境並檢查學生迷思概念。",
    "author_display": "吳易哲",
    "author_visibility": "可公開",
    "resource_type": [
      "素養題",
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Claude Code",
      "Cowork",
      "Agent"
    ],
    "audience": [
      "高中",
      "教師備課"
    ],
    "url": "https://drive.google.com/file/d/1iKPIRj4gGD5aGGYJQNA0NZDdDatM8bWI/view?usp=drivesdk",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "6/10 第四場分享",
    "tags": [
      "素養命題",
      "Agent",
      "Claude Code",
      "Cowork",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0005",
    "status": "已公開",
    "title": "本地端大模型 × Hermes 龍蝦——把 AI 教學助理裝進自己的電腦",
    "summary": "介紹本地端大模型與 Hermes 龍蝦在教師日常工作中的應用",
    "description": "6/17 第五場分享錄影，介紹本地端大模型與 Hermes 龍蝦在教師日常工作中的應用，聚焦教材整理、評量設計、課堂素材管理與長期工作脈絡。",
    "author_display": "盧政良",
    "author_visibility": "可公開",
    "resource_type": [
      "工具安裝／部署教學",
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Hermes",
      "local LLM",
      "Ollama"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1qMW3N64S02HUDMJbtidvEr6jIZE6TKzr/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "6/17 第五場分享",
    "tags": [
      "Hermes",
      "龍蝦",
      "本地端",
      "LLM",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0006",
    "status": "已公開",
    "title": "學會模擬的下一步——如何將模擬與評量結合",
    "summary": "把物理模擬從展示工具轉成可操作、可觀察、可評量的學習任務",
    "description": "6/24 第六場分享錄影，把物理模擬從展示工具轉成可操作、可觀察、可評量的學習任務；可發展成互動評量設計模板。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": [
      "模擬／互動教材",
      "素養題",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "力學",
      "探究與實作"
    ],
    "ai_tools": [
      "AI chatbot",
      "HTML",
      "模擬工具"
    ],
    "audience": [
      "高中",
      "教師備課"
    ],
    "url": "https://changyi123456.github.io/physics-game-S.H.M/",
    "license_scope": "公開互動模擬與 Google Drive 分享錄影",
    "privacy_note": "公開資源與分享錄影；引用時請保留作者與 PhAI 共學圈來源",
    "source_event": "6/24 第六場分享",
    "tags": [
      "模擬",
      "評量",
      "互動題",
      "遊戲化",
      "分享錄影"
    ],
    "extra_links": [
      {
        "label": "分享錄影",
        "url": "https://drive.google.com/file/d/19xfij8vfddr8drL1iUaI4l-Rfe_BsplG/view",
        "kind": "Google Drive"
      }
    ]
  },
  {
    "id": "PHAI-0007",
    "status": "已公開",
    "title": "Antigravity IDE 實戰入門——讓 AI 走進你的教材開發環境",
    "summary": "讓 AI 進入教材開發環境，管理資料、題目草稿與備課流程",
    "description": "7/1 第七場分享錄影，帶領教師以 AI IDE 整理資料、管理教材專案並建立可持續修改的備課流程。",
    "author_display": "趙晉鴻",
    "author_visibility": "可公開",
    "resource_type": [
      "工具安裝／部署教學",
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Antigravity IDE",
      "AI IDE"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1H1OcbqNuB_49TM0xYQK4tiMcyRXNF1M2/view?usp=drive_web",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "7/1 第七場分享",
    "tags": [
      "Antigravity",
      "AI IDE",
      "教材開發",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0008",
    "status": "資料確認中",
    "title": "Orbit Transfer 互動模擬",
    "summary": "軌道轉移互動模擬，可讓學生觀察軌道變化與操作變因",
    "description": "講師群分享的公開互動網站，可作為物理模擬資源卡。",
    "author_display": "趙晉鴻",
    "author_visibility": "需確認",
    "resource_type": [
      "模擬／互動教材"
    ],
    "physics_topic": [
      "力學"
    ],
    "ai_tools": [
      "HTML",
      "JavaScript"
    ],
    "audience": [
      "高中",
      "大學基礎"
    ],
    "url": "https://arpowchao.github.io/apps/orbit_transfer/index.html",
    "license_scope": "待確認",
    "privacy_note": "需確認是否可收錄於 PhAI 平台",
    "source_event": "講師群 5/24 分享",
    "tags": [
      "軌道",
      "模擬",
      "互動教材"
    ]
  },
  {
    "id": "PHAI-0009",
    "status": "資料確認中",
    "title": "Orbital Decay 互動模擬",
    "summary": "軌道衰減互動模擬，可作為天體/軌道運動教材",
    "description": "講師群分享的公開互動網站，可作為物理模擬資源卡。",
    "author_display": "趙晉鴻",
    "author_visibility": "需確認",
    "resource_type": [
      "模擬／互動教材"
    ],
    "physics_topic": [
      "力學"
    ],
    "ai_tools": [
      "HTML",
      "JavaScript"
    ],
    "audience": [
      "高中",
      "大學基礎"
    ],
    "url": "https://arpowchao.github.io/apps/orbital_decay/index.html",
    "license_scope": "待確認",
    "privacy_note": "需確認是否可收錄於 PhAI 平台",
    "source_event": "講師群 5/24 分享",
    "tags": [
      "軌道",
      "模擬",
      "互動教材"
    ]
  },
  {
    "id": "PHAI-0010",
    "status": "資料確認中",
    "title": "物理 HTML 電子講義模式",
    "summary": "可吃 LaTeX 與 JavaScript 的多模態 HTML 電子講義想像",
    "description": "長屹老師分享的電子講義參考，可作為平台未來資源呈現樣式參考。",
    "author_display": "江長屹",
    "author_visibility": "需確認",
    "resource_type": [
      "教材／講義／簡報"
    ],
    "physics_topic": [
      "跨領域"
    ],
    "ai_tools": [
      "HTML",
      "LaTeX",
      "JavaScript"
    ],
    "audience": [
      "高中",
      "教師備課"
    ],
    "url": "https://ebook-physics.netlify.app/",
    "license_scope": "待確認",
    "privacy_note": "需確認可否作為案例收錄",
    "source_event": "講師群 5/18 分享",
    "tags": [
      "HTML講義",
      "LaTeX",
      "多模態"
    ]
  },
  {
    "id": "PHAI-0011",
    "status": "已公開",
    "title": "MotionLab Tracker 技術與操作指南：3D Tracker",
    "summary": "江長屹老師分享的 MotionLab 2D / 3D Tracker 操作與技術指南",
    "description": "整理 2D / 3D Workbench 的運算原理、操作流程與下載，支援自動追蹤、3D 融合與 CSV 匯出，適合高中物理實驗與探究課程。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": [
      "實驗／數據分析工具",
      "工具安裝／部署教學"
    ],
    "physics_topic": [
      "力學",
      "探究與實作",
      "實驗數據分析"
    ],
    "ai_tools": [
      "MotionLab Tracker",
      "3D Tracker",
      "CSV"
    ],
    "audience": [
      "高中",
      "教師備課",
      "學生探究"
    ],
    "url": "https://motionlab-tracker-guide.netlify.app/",
    "license_scope": "公開網站資源",
    "privacy_note": "公開網站；引用時請保留作者與來源連結",
    "source_event": "江長屹老師分享",
    "tags": [
      "3D Tracker",
      "MotionLab",
      "影片分析",
      "實驗數據",
      "探究與實作"
    ]
  },
  {
    "id": "PHAI-0012",
    "status": "已公開",
    "title": "物理研究員養成計畫 RPG 遊戲",
    "summary": "仁武高中曾意真老師分享的高一物理 RPG 遊戲化學習資源",
    "description": "以 RPG 任務情境包裝高一物理學習，適合學生自學、課堂活動與教師設計遊戲化評量時參考。",
    "author_display": "曾意真",
    "author_visibility": "可公開",
    "resource_type": [
      "遊戲化學習",
      "模擬／互動教材"
    ],
    "physics_topic": [
      "高一物理",
      "力學",
      "探究與實作"
    ],
    "ai_tools": [
      "Web App",
      "Firebase",
      "遊戲化"
    ],
    "audience": [
      "高中",
      "學生自學",
      "教師教學"
    ],
    "url": "https://high-school-1st-physics-rpg.web.app/",
    "license_scope": "公開網站資源",
    "privacy_note": "公開網站；引用時請保留作者與來源連結",
    "source_event": "仁武高中 曾意真老師分享",
    "tags": [
      "RPG",
      "遊戲化學習",
      "高一物理",
      "自學",
      "任務式學習"
    ]
  },
  {
    "id": "PHAI-0013",
    "status": "已公開",
    "title": "如何建立 Skill，並產出更符合教師需求的內容",
    "summary": "把教師的隱性判斷與命題方法整理成 AI 可重複執行的 Skill",
    "description": "7/8 第八場分享錄影，說明 Skill 的基本結構，以及如何將教學風格、教材品質與命題流程轉化成 AI 能遵循的工作規格。",
    "author_display": "吳易哲",
    "author_visibility": "可公開",
    "resource_type": [
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Skill",
      "Agent",
      "Prompt"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/18w6Zet5TF4iHnnk3ZrjLDEG32Qj3z2O3/view?usp=drivesdk",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "7/8 第八場分享",
    "tags": [
      "Skill",
      "Agent",
      "Prompt",
      "隱性知識",
      "教材開發",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0014",
    "status": "已公開",
    "title": "AI × 學生探究實作：從提問到科學論證",
    "summary": "讓 AI 成為探究鷹架，協助學生聚焦問題、設計流程、分析數據與形成科學論證",
    "description": "7/29 分享錄影，聚焦 AI 如何支援探究問題形成、變因控制、數據詮釋與科學論證，同時保留教師設定的使用界線。",
    "author_display": "PhAI 講師群",
    "author_visibility": "可公開",
    "resource_type": [
      "探究題",
      "Agent 工作流",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "探究與實作",
      "AI 教學工作流"
    ],
    "ai_tools": [
      "AI Agent",
      "Prompt",
      "探究鷹架"
    ],
    "audience": [
      "高中",
      "教師備課",
      "學生探究",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1iYwXy_dx45H7FqoS6zTQQgzhwkdXZU_X/view?usp=drivesdk",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；課堂使用時仍需由教師確認 AI 使用界線與學生資料隱私",
    "source_event": "7/29 第十一場分享",
    "tags": [
      "探究實作",
      "科學論證",
      "變因控制",
      "數據分析",
      "AI鷹架",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0015",
    "status": "已公開",
    "title": "線上互動 Q&A：AI 物理教學問題現場拆解",
    "summary": "整理老師實際遇到的問題與需求，現場拆解 AI × 物理教學常見卡點",
    "description": "7/15 第九場分享錄影，採線上互動 Q&A 形式，整理大家實際遇到的問題與需求，邀請有經驗的老師與夥伴一起上線回應。",
    "author_display": "PhAI 講師群",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範",
      "Agent 工作流"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "AI Agent",
      "Prompt",
      "Q&A"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1TuI8apDUjE0tHs8MCqkaMYxCN3IUySPH/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "7/15 第九場分享",
    "tags": [
      "Q&A",
      "許願池",
      "現場拆解",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0016",
    "status": "已公開",
    "title": "AI 模擬與視覺化入門：從概念到互動動態",
    "summary": "聚焦 Python、GeoGebra、互動模擬與數據視覺化，示範 AI 如何協助產生與修改物理模擬",
    "description": "7/22 第十場分享錄影，示範如何用 AI 協助產生與修改物理模擬與視覺化素材，從概念走到可互動的動態。",
    "author_display": "江長屹、趙晉鴻、盧政良",
    "author_visibility": "可公開",
    "resource_type": [
      "模擬／互動教材",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "力學",
      "探究與實作",
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Python",
      "GeoGebra",
      "AI chatbot",
      "模擬工具"
    ],
    "audience": [
      "高中",
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1sl0pSerDWDDfHlffa_EP2FiqEnqXeHPy/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "7/22 第十場分享",
    "tags": [
      "模擬",
      "視覺化",
      "GeoGebra",
      "Python",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0017",
    "status": "已公開",
    "title": "教師個人 AI 工作流與教材專案管理：從一次性對話到可累積、可版本控制的系統",
    "summary": "聚焦 Obsidian／Notion／AI IDE／Markdown／Skill，讓教材開發從一次性對話變成可累積、可版本控制的系統",
    "description": "8/5 第十二場分享錄影，討論如何把教材開發做成可累積、可修改、可分享的個人 AI 工作流，從一次性對話走向可版本控制的系統。",
    "author_display": "江長屹、趙晉鴻、蔡明勳、盧政良",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範",
      "Agent 工作流",
      "工具安裝／部署教學"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Obsidian",
      "Notion",
      "AI IDE",
      "Markdown",
      "Skill"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/13FrtGwVoZw0Dd4P9P37vaauVQjGWcu_J/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "8/5 第十二場分享",
    "tags": [
      "工作流",
      "教材專案",
      "Obsidian",
      "Skill",
      "版本控制",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0018",
    "status": "已公開",
    "title": "解放批改地獄——自製「PM批改精靈」",
    "summary": "分享如何自製批改精靈，減輕教師批改負擔並提升回饋品質",
    "description": "8/12 第十三場分享錄影：蔡明勳（小威）老師分享自製「PM批改精靈」，協助教師從批改地獄中解放出來。",
    "author_display": "蔡明勳（小威）／南崁高中",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "AI Agent",
      "批改精靈",
      "Prompt"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1GU9DpjzrfSQAgeVJVkmqBayDLwg6-hiR/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "8/12 第十三場分享",
    "tags": [
      "批改",
      "PM批改精靈",
      "評量回饋",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0019",
    "status": "已公開",
    "title": "報告寫得很好，學生真的懂嗎？AI 讀報告、個別追問與教師評量",
    "summary": "用 AI 讀學生報告、個別追問與協助教師評量，檢視學生是否真正理解",
    "description": "8/26 第十四場分享錄影：江長屹老師示範以 AI 讀報告、個別追問與教師評量，檢視「報告寫得好」是否等於「學生真的懂」。",
    "author_display": "江長屹",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "AI chatbot",
      "Prompt",
      "評量"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/14vSKIB28_v2GiMxHIAayvs7hxCPralGk/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "8/26 第十四場分享",
    "tags": [
      "報告評量",
      "個別追問",
      "理解檢核",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0020",
    "status": "已公開",
    "title": "Obsidian × AI：把教材、想法與教學脈絡變成可以累積的系統",
    "summary": "用 Obsidian 與 AI 把教材、想法與教學脈絡整理成可累積的知識系統",
    "description": "9/2 第十五場分享錄影：盧政良老師示範 Obsidian × AI，把教材、想法與教學脈絡變成可以累積的系統。",
    "author_display": "盧政良",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Obsidian",
      "AI Agent",
      "Markdown"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1uhWdywEicx78DfiL_bP7vQDS8poPYlgM/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "9/2 第十五場分享",
    "tags": [
      "Obsidian",
      "知識管理",
      "教材累積",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0021",
    "status": "已公開",
    "title": "3B1B × 物理教學：把抽象概念做成看得懂、能操作的視覺教材",
    "summary": "用 3Blue1Brown 風格工具，把抽象物理概念做成看得懂、能操作的視覺教材",
    "description": "9/9 第十六場分享錄影：趙晉鴻老師示範 3B1B × 物理教學，把抽象概念做成看得懂、能操作的視覺教材。",
    "author_display": "趙晉鴻",
    "author_visibility": "可公開",
    "resource_type": [
      "模擬／互動教材",
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "3Blue1Brown",
      "Manim",
      "視覺化"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1e0fo4eOOGGf2v81RfXgfxkCB2ltIOjOy/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "9/9 第十六場分享",
    "tags": [
      "3B1B",
      "視覺教材",
      "抽象概念",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0022",
    "status": "已公開",
    "title": "AI × 課堂設計：讓學生愛上學習的祕密武器",
    "summary": "分享如何用 AI 設計課堂，打造讓學生愛上學習的教學策略",
    "description": "9/23 第十七場分享錄影：蕭妤真老師分享 AI × 課堂設計，探討讓學生愛上學習的祕密武器。",
    "author_display": "蕭妤真",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "AI chatbot",
      "課堂設計"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/1CZSVLa4Av1vIVgTUuBy37Vke85EAn-NK/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "9/23 第十七場分享",
    "tags": [
      "課堂設計",
      "學習動機",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0023",
    "status": "已公開",
    "title": "Google Flow × Omni 教學應用分享",
    "summary": "分享 Google Flow 與 Omni 在教學現場的應用實務",
    "description": "9/30 第十八場分享錄影：吳易哲（陽明高中）老師分享 Google Flow × Omni 的教學應用。",
    "author_display": "吳易哲／陽明高中",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "Google Flow",
      "Omni"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/10gYu0zSEh8m7gNZUalPqZlT1x0Uw2Ysx/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "9/30 第十八場分享",
    "tags": [
      "Google Flow",
      "Omni",
      "教學應用",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0024",
    "status": "已公開",
    "title": "魔法弓箭",
    "summary": "小威老師分享以 AI 與自製工具打造可操作、可動手做的物理探究課堂",
    "description": "10/7 第十九場分享錄影：蔡明勳（小威）老師分享「魔法弓箭」，示範如何用 AI 與自製互動工具，讓物理課堂變成看得到、玩得到的探究體驗。",
    "author_display": "蔡明勳（小威）／南崁高中",
    "author_visibility": "可公開",
    "resource_type": [
      "錄影／教學示範"
    ],
    "physics_topic": [
      "AI 教學工作流"
    ],
    "ai_tools": [
      "模擬工具"
    ],
    "audience": [
      "教師備課",
      "社群共學"
    ],
    "url": "https://drive.google.com/file/d/13yMKdcxrV0YG7b1EBsZwSB5jvJiAvml-/view",
    "license_scope": "公開 Google Drive 分享錄影",
    "privacy_note": "公開分享錄影；引用時請保留講者與 PhAI 共學圈來源",
    "source_event": "10/7 第十九場分享",
    "tags": [
      "魔法弓箭",
      "動手做",
      "互動模擬",
      "分享錄影"
    ]
  },
  {
    "id": "PHAI-0025",
    "status": "已公開",
    "title": "向量鎖定 Vector Lock（手機體感光槍遊戲）",
    "summary": "把手機變成光槍，用陀螺儀與加速度計瞄準大螢幕射擊，邊玩邊學向量與三角函數",
    "description": "10/7 小威老師分享時額外介紹的自製體感遊戲。手機掃 QR Code 連上電腦大螢幕，轉動手機瞄準、點擊開火；遊戲內建互動原理教學，用玩家手機的即時數據說明陀螺儀、加速度計、指向向量與 tanθ 落點換算。可單人、雙人對戰或合作戰役，並有教室模式：老師開教室頁取得班級代碼，學生成績即時回傳並可匯出 CSV。",
    "author_display": "蔡明勳（小威）／南崁高中",
    "author_visibility": "可公開",
    "resource_type": [
      "遊戲化學習",
      "模擬／互動教材"
    ],
    "physics_topic": [
      "力學",
      "跨領域"
    ],
    "ai_tools": [
      "Web App",
      "HTML",
      "JavaScript",
      "遊戲化"
    ],
    "audience": [
      "高中",
      "學生自學",
      "教師教學"
    ],
    "url": "https://physmaker.tw/programming/tools/vector-lock/",
    "license_scope": "公開網站資源",
    "privacy_note": "公開網站，使用時請保留 PhysMaker 與作者來源",
    "source_event": "10/7 第十九場分享",
    "tags": [
      "向量",
      "陀螺儀",
      "加速度計",
      "三角函數",
      "手機感測器",
      "體感遊戲",
      "教室模式"
    ]
  }
];

/** 分享場次時間軸（依日期排序，新增場次直接加一筆） */
window.PHAI_SESSIONS = [
  {
    "no": 1,
    "date": "2026-05-20",
    "label": "5/20",
    "title": "Codex × Agent 協作——讓 AI 成為你的教學助理團隊",
    "speaker": "盧政良",
    "resource_id": "PHAI-0001"
  },
  {
    "no": 2,
    "date": "2026-05-27",
    "label": "5/27",
    "title": "如何打造課堂適合且隨手可用的物理模擬教材",
    "speaker": "江長屹",
    "resource_id": "PHAI-0002"
  },
  {
    "no": 3,
    "date": "2026-06-03",
    "label": "6/3",
    "title": "NotebookLM × 探究命題——科展題目轉化為符合課綱的探究題",
    "speaker": "趙晉鴻",
    "resource_id": "PHAI-0003"
  },
  {
    "no": 4,
    "date": "2026-06-10",
    "label": "6/10",
    "title": "素養導向出題 Agent 實戰",
    "speaker": "吳易哲",
    "resource_id": "PHAI-0004"
  },
  {
    "no": 5,
    "date": "2026-06-17",
    "label": "6/17",
    "title": "本地端大模型 × Hermes 龍蝦——把 AI 教學助理裝進自己的電腦",
    "speaker": "盧政良",
    "resource_id": "PHAI-0005"
  },
  {
    "no": 6,
    "date": "2026-06-24",
    "label": "6/24",
    "title": "學會模擬的下一步——如何將模擬與評量結合",
    "speaker": "江長屹",
    "resource_id": "PHAI-0006"
  },
  {
    "no": 7,
    "date": "2026-07-01",
    "label": "7/1",
    "title": "Antigravity IDE 實戰入門——讓 AI 走進你的教材開發環境",
    "speaker": "趙晉鴻",
    "resource_id": "PHAI-0007"
  },
  {
    "no": 8,
    "date": "2026-07-08",
    "label": "7/8",
    "title": "如何建立 Skill，並產出更符合教師需求的內容",
    "speaker": "吳易哲",
    "resource_id": "PHAI-0013"
  },
  {
    "no": 9,
    "date": "2026-07-15",
    "label": "7/15",
    "title": "線上互動 Q&A：AI 物理教學問題現場拆解",
    "speaker": "PhAI 講師群",
    "resource_id": "PHAI-0015"
  },
  {
    "no": 10,
    "date": "2026-07-22",
    "label": "7/22",
    "title": "AI 模擬與視覺化入門：從概念到互動動態",
    "speaker": "江長屹、趙晉鴻、盧政良",
    "resource_id": "PHAI-0016"
  },
  {
    "no": 11,
    "date": "2026-07-29",
    "label": "7/29",
    "title": "AI × 學生探究實作：從提問到科學論證",
    "speaker": "PhAI 講師群",
    "resource_id": "PHAI-0014"
  },
  {
    "no": 12,
    "date": "2026-08-05",
    "label": "8/5",
    "title": "教師個人 AI 工作流與教材專案管理：從一次性對話到可累積、可版本控制的系統",
    "speaker": "江長屹、趙晉鴻、蔡明勳、盧政良",
    "resource_id": "PHAI-0017"
  },
  {
    "no": 13,
    "date": "2026-08-12",
    "label": "8/12",
    "title": "解放批改地獄——自製「PM批改精靈」",
    "speaker": "蔡明勳（小威）／南崁高中",
    "resource_id": "PHAI-0018"
  },
  {
    "no": 14,
    "date": "2026-08-26",
    "label": "8/26",
    "title": "報告寫得很好，學生真的懂嗎？AI 讀報告、個別追問與教師評量",
    "speaker": "江長屹",
    "resource_id": "PHAI-0019"
  },
  {
    "no": 15,
    "date": "2026-09-02",
    "label": "9/2",
    "title": "Obsidian × AI：把教材、想法與教學脈絡變成可以累積的系統",
    "speaker": "盧政良",
    "resource_id": "PHAI-0020"
  },
  {
    "no": 16,
    "date": "2026-09-09",
    "label": "9/9",
    "title": "3B1B × 物理教學：把抽象概念做成看得懂、能操作的視覺教材",
    "speaker": "趙晉鴻",
    "resource_id": "PHAI-0021"
  },
  {
    "no": 17,
    "date": "2026-09-23",
    "label": "9/23",
    "title": "AI × 課堂設計：讓學生愛上學習的祕密武器",
    "speaker": "蕭妤真",
    "resource_id": "PHAI-0022"
  },
  {
    "no": 18,
    "date": "2026-09-30",
    "label": "9/30",
    "title": "Google Flow × Omni 教學應用分享",
    "speaker": "吳易哲／陽明高中",
    "resource_id": "PHAI-0023"
  },
  {
    "no": 19,
    "date": "2026-10-07",
    "label": "10/7",
    "title": "魔法弓箭",
    "speaker": "蔡明勳（小威）／南崁高中",
    "resource_id": "PHAI-0024"
  }
];
