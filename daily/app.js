'use strict';
const cards = Array.from(document.querySelectorAll('.question-card'));
const grid = document.getElementById('questions');
const search = document.getElementById('search');
const subject = document.getElementById('subject');
const month = document.getElementById('month');
const sort = document.getElementById('sort');
const form = document.querySelector('.filters');
form.addEventListener('submit', e => e.preventDefault());
function filterCards() {
  const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  let count = 0;
  cards.forEach(card => {
    const text = card.dataset.search.toLocaleLowerCase();
    const visible = terms.every(t => text.includes(t)) && (!subject.value || card.dataset.subject === subject.value) && (!month.value || card.dataset.month === month.value);
    card.hidden = !visible; if (visible) count++;
  });
  cards.slice().sort((a,b) => sort.value === 'asc' ? a.dataset.date.localeCompare(b.dataset.date) : b.dataset.date.localeCompare(a.dataset.date)).forEach(card => grid.append(card));
  document.getElementById('result-count').textContent = `顯示 ${count} / ${cards.length} 份每日題組`;
  document.getElementById('empty').hidden = count !== 0;
}
function clearFilters() { search.value = ''; subject.value = ''; month.value = ''; sort.value = 'desc'; filterCards(); search.focus(); }
search.addEventListener('input', filterCards);
[subject,month,sort].forEach(el => el.addEventListener('change',filterCards));
document.getElementById('reset').addEventListener('click',clearFilters);
document.getElementById('empty-reset').addEventListener('click',clearFilters);
filterCards();
