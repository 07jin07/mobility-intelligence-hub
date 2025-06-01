// Application data
const appData = {
  "rssSources": {
    "government_agencies": {
      "経済産業省": {
        "name": "経済産業省",
        "category": "A1",
        "subcategory": "政策・規制",
        "rss_url": "https://www.meti.go.jp/rss/news/index.rdf",
        "description": "経済産業省の最新情報",
        "status": "active",
        "lastFetch": "2025-06-01T10:30:00Z",
        "articleCount": 15
      },
      "国土交通省": {
        "name": "国土交通省",
        "category": "A1",
        "subcategory": "政策・規制",
        "rss_url": "https://www.mlit.go.jp/rss/kisya.rdf",
        "description": "国土交通省プレスリリース",
        "status": "active",
        "lastFetch": "2025-06-01T10:25:00Z",
        "articleCount": 12
      }
    },
    "automotive_manufacturers": {
      "トヨタ自動車": {
        "name": "トヨタ自動車",
        "category": "C1",
        "subcategory": "自動車メーカー動向",
        "rss_url": "https://global.toyota/export/jp/allnews_rss.xml",
        "description": "トヨタのニュースリリース",
        "status": "active",
        "lastFetch": "2025-06-01T10:20:00Z",
        "articleCount": 18
      },
      "マツダ": {
        "name": "マツダ",
        "category": "C1",
        "subcategory": "自動車メーカー動向",
        "rss_url": "https://www.mazda.com/ja/rss/news.rdf",
        "description": "マツダのニュースリリース",
        "status": "active",
        "lastFetch": "2025-06-01T10:15:00Z",
        "articleCount": 8
      }
    }
  },
  "meceCategories": {
    "A": {
      "name": "政策・規制",
      "color": "#3B82F6",
      "subcategories": {
        "A1": "国内政策",
        "A2": "国際政策"
      }
    },
    "B": {
      "name": "技術・製品",
      "color": "#10B981",
      "subcategories": {
        "B1": "SDV (Software-Defined Vehicle)",
        "B2": "自動運転・ADAS",
        "B3": "電動化"
      }
    },
    "C": {
      "name": "市場・事業",
      "color": "#F59E0B",
      "subcategories": {
        "C1": "自動車メーカー動向",
        "C2": "モビリティサービス",
        "C3": "サプライチェーン"
      }
    },
    "D": {
      "name": "社会・環境",
      "color": "#8B5CF6",
      "subcategories": {
        "D1": "社会課題",
        "D2": "サステナビリティ"
      }
    }
  },
  "sdvCategories": {
    "プラットフォーム層": {
      "車載OS": ["車載オペレーティングシステム", "リアルタイムOS"],
      "仮想化技術": ["ハイパーバイザー", "コンテナ技術"]
    },
    "アプリケーション層": {
      "インフォテインメント": ["ナビゲーション", "エンターテインメント"],
      "ADAS機能": ["自動運転支援", "安全システム"]
    },
    "クラウド・通信層": {
      "OTA配信": ["ソフトウェア更新", "機能追加"],
      "V2X通信": ["車車間通信", "路車間通信"]
    },
    "ハードウェア層": {
      "高性能ECU": ["車載コンピュータ", "処理装置"],
      "センサー技術": ["カメラ", "LiDAR", "レーダー"]
    },
    "データ・AI層": {
      "機械学習": ["深層学習", "強化学習"],
      "デジタルツイン": ["仮想モデル", "シミュレーション"]
    }
  },
  "sampleArticles": [
    {
      "id": "1",
      "title": "経済産業省、モビリティDX戦略2025を発表",
      "source": "経済産業省",
      "category": "A1",
      "subcategory": "国内政策",
      "publishDate": "2025-05-30T09:00:00Z",
      "excerpt": "経済産業省は、2030年に向けたモビリティDX戦略の最新版を発表。SDV領域での日系企業のグローバルシェア拡大を目指す。",
      "url": "https://example.com/meti-mobility-dx-2025",
      "tags": ["政策", "DX", "戦略"]
    },
    {
      "id": "2",
      "title": "トヨタ、次世代SDVプラットフォームの開発加速",
      "source": "トヨタ自動車",
      "category": "B1",
      "subcategory": "SDV",
      "publishDate": "2025-05-28T14:30:00Z",
      "excerpt": "トヨタ自動車は、ソフトウェア定義車両の新プラットフォーム開発に向けて、AI・クラウド技術の統合を進めると発表。",
      "url": "https://example.com/toyota-sdv-platform",
      "tags": ["SDV", "プラットフォーム", "AI"],
      "sdvLayer": "プラットフォーム層"
    },
    {
      "id": "3",
      "title": "自動運転レベル4実用化に向けた法整備が前進",
      "source": "国土交通省",
      "category": "A1",
      "subcategory": "国内政策",
      "publishDate": "2025-05-27T16:45:00Z",
      "excerpt": "国土交通省は、自動運転レベル4の実用化に向けた道路交通法改正案を提出。2026年度からの本格運用を目指す。",
      "url": "https://example.com/mlit-autonomous-driving-law",
      "tags": ["自動運転", "法整備", "レベル4"]
    },
    {
      "id": "4",
      "title": "マツダ、電動化戦略を大幅見直し",
      "source": "マツダ",
      "category": "B3",
      "subcategory": "電動化",
      "publishDate": "2025-05-26T11:15:00Z",
      "excerpt": "マツダは2030年までの電動化戦略を見直し、EV販売比率目標を40%に引き上げると発表した。",
      "url": "https://example.com/mazda-ev-strategy-update",
      "tags": ["電動化", "EV", "戦略見直し"]
    },
    {
      "id": "5",
      "title": "OTA更新機能、2025年新車の80%に搭載予定",
      "source": "Car Watch",
      "category": "B1",
      "subcategory": "SDV",
      "publishDate": "2025-05-25T13:20:00Z",
      "excerpt": "業界調査によると、2025年に発売される新車の約80%がOTA（Over-The-Air）更新機能を搭載する見込み。",
      "url": "https://example.com/ota-update-trend-2025",
      "tags": ["OTA", "更新", "トレンド"],
      "sdvLayer": "クラウド・通信層"
    }
  ]
};

// Application state
let currentTab = 'dashboard';
let filteredArticles = [...appData.sampleArticles];
let charts = {};

// DOM elements
const tabButtons = document.querySelectorAll('.nav__tab');
const tabContents = document.querySelectorAll('.tab-content');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const dateFilter = document.getElementById('date-filter');
const articlesContainer = document.getElementById('articles-container');
const refreshBtn = document.getElementById('refresh-btn');
const exportBtn = document.getElementById('export-btn');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  loadDashboard();
});

function initializeApp() {
  updateStats();
  setupTabNavigation();
}

function setupEventListeners() {
  // Tab navigation
  tabButtons.forEach(button => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
  });

  // Search and filters
  searchInput.addEventListener('input', debounce(handleSearch, 300));
  categoryFilter.addEventListener('change', handleFilter);
  dateFilter.addEventListener('change', handleFilter);

  // Action buttons
  refreshBtn.addEventListener('click', handleRefresh);
  exportBtn.addEventListener('click', handleExport);

  // Modal handling
  setupModalHandlers();
}

function setupTabNavigation() {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tabName) {
  // Update active tab button
  tabButtons.forEach(btn => btn.classList.remove('nav__tab--active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('nav__tab--active');

  // Update active tab content
  tabContents.forEach(content => content.classList.remove('tab-content--active'));
  document.getElementById(tabName).classList.add('tab-content--active');

  currentTab = tabName;

  // Load tab-specific content
  switch(tabName) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'mece':
      loadMECECategories();
      break;
    case 'sdv':
      loadSDVClassification();
      break;
    case 'analytics':
      loadAnalytics();
      break;
    case 'sources':
      loadRSSSources();
      break;
  }
}

function updateStats() {
  const totalArticles = appData.sampleArticles.length;
  const activeSources = Object.values(appData.rssSources).flat().filter(s => 
    Object.values(s).some(source => source.status === 'active')
  ).length;
  
  document.getElementById('total-articles').textContent = totalArticles;
  document.getElementById('active-sources').textContent = activeSources;
  document.getElementById('last-update').textContent = new Date().toLocaleTimeString('ja-JP', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function loadDashboard() {
  displayArticles(filteredArticles);
}

function displayArticles(articles) {
  if (articles.length === 0) {
    articlesContainer.innerHTML = `
      <div class="empty-state">
        <h3>記事が見つかりません</h3>
        <p>検索条件を変更してお試しください。</p>
      </div>
    `;
    return;
  }

  articlesContainer.innerHTML = articles.map(article => createArticleCard(article)).join('');
}

function createArticleCard(article) {
  const categoryLetter = article.category.charAt(0);
  const categoryInfo = appData.meceCategories[categoryLetter];
  const publishDate = new Date(article.publishDate).toLocaleDateString('ja-JP');
  
  return `
    <div class="article-card" onclick="openArticle('${article.url}')">
      <div class="article-card__header">
        <span class="article-card__category category-${categoryLetter}">
          ${categoryLetter}: ${categoryInfo.name}
        </span>
        <span class="article-card__date">${publishDate}</span>
      </div>
      
      <h3 class="article-card__title">${article.title}</h3>
      <div class="article-card__source">${article.source}</div>
      <p class="article-card__excerpt">${article.excerpt}</p>
      
      <div class="article-card__tags">
        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
}

function openArticle(url) {
  window.open(url, '_blank');
}

function loadMECECategories() {
  const meceGrid = document.getElementById('mece-grid');
  
  meceGrid.innerHTML = Object.entries(appData.meceCategories).map(([key, category]) => {
    const articleCount = appData.sampleArticles.filter(article => 
      article.category.startsWith(key)
    ).length;
    
    return `
      <div class="mece-category">
        <div class="mece-category__header">
          <div class="mece-category__title">
            <div class="mece-category__color" style="background-color: ${category.color}"></div>
            ${key}: ${category.name}
          </div>
          <span class="mece-category__count">${articleCount}</span>
        </div>
        
        <ul class="mece-subcategories">
          ${Object.entries(category.subcategories).map(([subKey, subName]) => {
            const subCount = appData.sampleArticles.filter(article => 
              article.category === subKey
            ).length;
            return `
              <li class="mece-subcategory">
                <span>${subKey}: ${subName}</span>
                <span class="mece-subcategory__count">${subCount}</span>
              </li>
            `;
          }).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

function loadSDVClassification() {
  const sdvLayers = document.getElementById('sdv-layers');
  
  sdvLayers.innerHTML = Object.entries(appData.sdvCategories).map(([layer, categories]) => `
    <div class="sdv-layer">
      <div class="sdv-layer__header" onclick="toggleSDVLayer(this)">
        <div class="sdv-layer__title">${layer}</div>
        <div class="sdv-layer__toggle">▼</div>
      </div>
      
      <div class="sdv-layer__content">
        <div class="sdv-categories">
          ${Object.entries(categories).map(([category, subcategories]) => `
            <div class="sdv-category">
              <div class="sdv-category__title">${category}</div>
              <ul class="sdv-subcategories">
                ${subcategories.map(sub => `<li class="sdv-subcategory">${sub}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleSDVLayer(header) {
  const layer = header.parentElement;
  layer.classList.toggle('sdv-layer--expanded');
}

function loadAnalytics() {
  setTimeout(() => {
    createCategoryChart();
    createTimelineChart();
    createSourcesChart();
    loadActivityFeed();
  }, 100);
}

function createCategoryChart() {
  const ctx = document.getElementById('category-chart').getContext('2d');
  
  const categoryData = Object.entries(appData.meceCategories).map(([key, category]) => ({
    label: `${key}: ${category.name}`,
    value: appData.sampleArticles.filter(article => article.category.startsWith(key)).length,
    color: category.color
  }));

  if (charts.categoryChart) {
    charts.categoryChart.destroy();
  }

  charts.categoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categoryData.map(d => d.label),
      datasets: [{
        data: categoryData.map(d => d.value),
        backgroundColor: categoryData.map(d => d.color),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function createTimelineChart() {
  const ctx = document.getElementById('timeline-chart').getContext('2d');
  
  // Group articles by date
  const dateGroups = {};
  appData.sampleArticles.forEach(article => {
    const date = new Date(article.publishDate).toLocaleDateString('ja-JP');
    dateGroups[date] = (dateGroups[date] || 0) + 1;
  });

  const sortedDates = Object.keys(dateGroups).sort();

  if (charts.timelineChart) {
    charts.timelineChart.destroy();
  }

  charts.timelineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedDates,
      datasets: [{
        label: '記事数',
        data: sortedDates.map(date => dateGroups[date]),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function createSourcesChart() {
  const ctx = document.getElementById('sources-chart').getContext('2d');
  
  const sourceData = {};
  appData.sampleArticles.forEach(article => {
    sourceData[article.source] = (sourceData[article.source] || 0) + 1;
  });

  if (charts.sourcesChart) {
    charts.sourcesChart.destroy();
  }

  charts.sourcesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(sourceData),
      datasets: [{
        label: '記事数',
        data: Object.values(sourceData),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function loadActivityFeed() {
  const activityFeed = document.getElementById('activity-feed');
  
  const activities = [
    { time: '10:30', text: 'トヨタ自動車から3件の新しい記事を取得' },
    { time: '10:25', text: '国土交通省から2件の新しい記事を取得' },
    { time: '10:20', text: 'システム更新が完了しました' },
    { time: '09:45', text: 'マツダから1件の新しい記事を取得' },
    { time: '09:30', text: '経済産業省から4件の新しい記事を取得' }
  ];

  activityFeed.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-time">${activity.time}</div>
      <div>${activity.text}</div>
    </div>
  `).join('');
}

function loadRSSSources() {
  const sourcesList = document.getElementById('sources-list');
  
  const allSources = Object.values(appData.rssSources).flatMap(group => Object.values(group));
  
  sourcesList.innerHTML = allSources.map(source => `
    <div class="source-card">
      <div class="source-card__header">
        <div>
          <div class="source-card__title">${source.name}</div>
          <div class="source-card__description">${source.description}</div>
        </div>
        <span class="source-card__status source-card__status--${source.status}">
          ${source.status === 'active' ? 'アクティブ' : '非アクティブ'}
        </span>
      </div>
      
      <div class="source-card__meta">
        <span>記事数: ${source.articleCount}</span>
        <span>最終取得: ${new Date(source.lastFetch).toLocaleString('ja-JP')}</span>
      </div>
    </div>
  `).join('');
}

function setupModalHandlers() {
  const addSourceBtn = document.getElementById('add-source-btn');
  const modal = document.getElementById('add-source-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const cancelModalBtn = document.getElementById('cancel-modal-btn');
  const addSourceForm = document.getElementById('add-source-form');

  addSourceBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  [closeModalBtn, cancelModalBtn].forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('hidden');
      addSourceForm.reset();
    });
  });

  modal.querySelector('.modal__backdrop').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      modal.classList.add('hidden');
      addSourceForm.reset();
    }
  });

  addSourceForm.addEventListener('submit', handleAddSource);
}

function handleSearch() {
  const query = searchInput.value.toLowerCase();
  applyFilters();
}

function handleFilter() {
  applyFilters();
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const categoryFilter = document.getElementById('category-filter').value;
  const dateFilter = document.getElementById('date-filter').value;

  filteredArticles = appData.sampleArticles.filter(article => {
    // Text search
    const matchesSearch = !query || 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.source.toLowerCase().includes(query);

    // Category filter
    const matchesCategory = !categoryFilter || article.category.startsWith(categoryFilter);

    // Date filter
    let matchesDate = true;
    if (dateFilter) {
      const articleDate = new Date(article.publishDate);
      const now = new Date();
      
      switch(dateFilter) {
        case 'today':
          matchesDate = articleDate.toDateString() === now.toDateString();
          break;
        case 'week':
          matchesDate = now - articleDate <= 7 * 24 * 60 * 60 * 1000;
          break;
        case 'month':
          matchesDate = now - articleDate <= 30 * 24 * 60 * 60 * 1000;
          break;
      }
    }

    return matchesSearch && matchesCategory && matchesDate;
  });

  if (currentTab === 'dashboard') {
    displayArticles(filteredArticles);
  }
}

function handleRefresh() {
  refreshBtn.textContent = '更新中...';
  refreshBtn.disabled = true;
  
  setTimeout(() => {
    updateStats();
    if (currentTab === 'dashboard') {
      loadDashboard();
    }
    refreshBtn.textContent = '更新';
    refreshBtn.disabled = false;
    
    // Show notification
    showNotification('RSS フィードを更新しました');
  }, 1500);
}

function handleExport() {
  const csvContent = generateCSV(filteredArticles);
  downloadCSV(csvContent, 'mobility-articles.csv');
  showNotification('CSVファイルをダウンロードしました');
}

function generateCSV(articles) {
  const headers = ['タイトル', '情報源', 'カテゴリ', '公開日', '抜粋'];
  const rows = articles.map(article => [
    article.title,
    article.source,
    article.category,
    new Date(article.publishDate).toLocaleDateString('ja-JP'),
    article.excerpt
  ]);

  return [headers, ...rows].map(row => 
    row.map(field => `"${field}"`).join(',')
  ).join('\n');
}

function downloadCSV(content, filename) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function handleAddSource(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const newSource = {
    name: formData.get('source-name') || document.getElementById('source-name').value,
    url: formData.get('source-url') || document.getElementById('source-url').value,
    category: formData.get('source-category') || document.getElementById('source-category').value,
    description: formData.get('source-description') || document.getElementById('source-description').value,
    status: 'active',
    lastFetch: new Date().toISOString(),
    articleCount: 0
  };

  // Simulate adding the source
  showNotification(`新しい情報源「${newSource.name}」を追加しました`);
  
  // Close modal and reset form
  document.getElementById('add-source-modal').classList.add('hidden');
  e.target.reset();
  
  // Reload sources if we're on that tab
  if (currentTab === 'sources') {
    loadRSSSources();
  }
}

function showNotification(message) {
  // Simple notification implementation
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);