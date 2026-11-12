const $ = id => document.getElementById(id);
const scriptPanel = $('speaker-script');
const studentLink = $('open-student');
let studentWindow;
const slideHash = n => `#slide-${n+1}`;
const fromHash = () => {
  const match = location.hash.match(/^#(?:slide|notes)-(\d+)$/);
  const number = match ? Number(match[1]) : 1;
  return Math.max(0,Math.min(slides.length-1,number-1));
};
let index = fromHash();
function render(focus = false) {
  const slide = slides[index];
  const [title, lead, rows, note, prompt] = slide.content;
  const visual = visuals[slide.tag] || '';
  const link = slide.link ? `<a class="decklink" href="${slide.link[1]}" target="_blank" rel="noopener">${slide.link[0]} ↗</a>` : '';
  $('deck').innerHTML = `<article class="${slide.theme || ''}${visual ? ' with-visual' : ''}"><div class="copy"><p class="eyebrow">${slide.tag}</p><h1 tabindex="-1">${title}</h1><p class="lead">${lead}</p>${prompt ? `<blockquote class="quote">${prompt}</blockquote>` : ''}${rows ? `<div class="rows">${rows.map(([k,v])=>`<div class="row"><strong>${k}</strong><span>${v}</span></div>`).join('')}</div>` : ''}${note ? `<p class="note">${note}</p>` : ''}${link}${index===0 ? `<button type="button" id="start">Start workshop →</button>` : ''}</div>${visual}</article>`;
  if ($('start')) $('start').onclick = () => go(1);
  $('prev').disabled = index === 0;
  $('next').disabled = index === slides.length-1;
  $('chapter').textContent = slide.tag;
  $('counter').textContent = `${String(index+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  $('bar').style.width = `${(index+1)/slides.length*100}%`;
  $('items').innerHTML = slides.map((s,i)=>`<li><button type="button" data-index="${i}" aria-current="${index===i}">${s.content[0]}</button></li>`).join('');
  if (scriptPanel) {
    studentLink.href = 'student.html' + slideHash(index);
    $('speaker-title').textContent = `발표 대본 · ${index+1}장`;
    scriptPanel.replaceChildren(...speakerScripts[index].map(([english, korean]) => {
      const pair = document.createElement('div');
      pair.className = 'speaker-pair';
      const en = document.createElement('p');
      en.lang = 'en';
      en.textContent = english;
      const ko = document.createElement('p');
      ko.lang = 'ko';
      ko.textContent = korean;
      pair.append(en, ko);
      return pair;
    }));
  }
  if (focus) document.querySelector('h1').focus({preventScroll:true});
}
function sendSlide() {
  const other = scriptPanel ? studentWindow : window.opener;
  if (other && !other.closed) {
    other.postMessage({type:'campaign-slide', index}, location.origin);
  }
}
function go(n, sync = true) {
  if (n<0 || n>=slides.length || n===index) return;
  index = n;
  history.pushState(null,'',slideHash(index));
  window.scrollTo(0,0);
  render(true);
  if (sync) sendSlide();
}
$('toc').onclick = () => $('menu').showModal();
$('close-menu').onclick = () => $('menu').close();
$('items').onclick = event => {
  const button = event.target.closest('button[data-index]');
  if (!button) return;
  $('menu').close();
  go(Number(button.dataset.index));
};
$('prev').onclick = () => go(index-1);
$('next').onclick = () => go(index+1);
window.addEventListener('hashchange',()=>{
  const next = fromHash();
  if (next === index) return;
  index = next;
  render(true);
  sendSlide();
});
window.addEventListener('message', event => {
  const other = scriptPanel ? studentWindow : window.opener;
  if (event.origin !== location.origin || !other || event.source !== other) return;
  if (event.data?.type === 'campaign-slide' && Number.isInteger(event.data.index)) go(event.data.index, false);
});
if (studentLink) {
  studentLink.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const popup = window.open(studentLink.href, 'campaign-student', 'popup,width=1280,height=850');
    if (!popup) return;
    event.preventDefault();
    studentWindow = popup;
    studentWindow.focus();
  });
}
window.addEventListener('keydown',event=>{
  if ($('menu').open || event.target.closest?.('video') || event.altKey || event.ctrlKey || event.metaKey) return;
  const target = {ArrowLeft:index-1,ArrowRight:index+1,Home:0,End:slides.length-1}[event.key];
  if (Number.isInteger(target)) {event.preventDefault();go(target);}
});
const fullscreenButton = $('fullscreen');
const fullscreenStatus = $('fullscreen-status');
if (fullscreenButton && document.fullscreenEnabled && document.documentElement.requestFullscreen) {
  fullscreenButton.hidden = false;
  fullscreenButton.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      fullscreenStatus.hidden = true;
    } catch {
      fullscreenStatus.textContent = 'Full screen is unavailable here. Try your browser’s full-screen menu.';
      fullscreenStatus.hidden = false;
    }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreenButton.textContent = document.fullscreenElement ? 'Exit full screen' : 'Full screen';
  });
}
render();
