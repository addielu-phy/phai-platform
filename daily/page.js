'use strict';
if (typeof renderMathInElement === 'function') {
  document.querySelectorAll('.prose').forEach(el => renderMathInElement(el, {
    delimiters: [{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false}],
    throwOnError: false, strict: false, trust: false
  }));
}
document.querySelectorAll('[data-print]').forEach(el => el.addEventListener('click', () => window.print()));
document.querySelectorAll('[data-share]').forEach(el => el.addEventListener('click', async () => {
  const status = el.parentElement.querySelector('.share-state');
  try { await navigator.clipboard.writeText(location.href); status.textContent = '已複製連結'; }
  catch (_) { status.textContent = '請從網址列複製本題連結'; }
}));
const dialog = document.getElementById('zoom');
const zoomImage = document.getElementById('zoom-img');
let trigger = null;
document.querySelectorAll('.prose img').forEach(img => {
  const button = document.createElement('button'); button.type = 'button'; button.className = 'image-zoom';
  button.setAttribute('aria-label', '放大題圖：' + img.alt);
  img.replaceWith(button); button.append(img);
  const cue = document.createElement('span'); cue.className = 'zoom-cue'; cue.textContent = '點圖放大閱讀'; button.append(cue);
  button.addEventListener('click', () => { trigger = button; zoomImage.src = img.src; zoomImage.alt = img.alt; dialog.showModal(); });
});
if (dialog) {
  document.getElementById('zoom-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { if (trigger) trigger.focus(); });
}
