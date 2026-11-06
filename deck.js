const slides = [
  {tag:'Workshop / 06 Nov 2026', theme:'cover photo-slide',
   content:['AI Campaign & Channel Planning','Set a promotion goal, choose a channel, and draft one post with AI.']},
  {tag:'01 / Team presentations',theme:'presentations photo-slide',
   content:['Team presentations','Start by sharing what your team prepared last time.',[['Present','Show your work and explain one decision your team made.'],['Listen','Note who each team wants to reach.'],['Carry it forward','Use your project and audience to set a promotion goal.']]]},
  {tag:'02 / Workshop outputs',theme:'moss outputs',
   content:['Three things per team','Open your team’s space in FigJam, fill in the three boxes, and show them for feedback.']},
  {tag:'03 / Promotion goal',theme:'paper game',
   content:['Set one promotion goal','Who do you want to reach, and what do you want them to know?']},
  {tag:'04 / Channel selection',
   content:['Where your audience is','Write the name of one place where your audience is likely to see the post.',[['Instagram / TikTok','Show the idea through a short clip or image.'],['Relevant community','Reach people who already share an interest in your topic.'],['Landing page','Show your idea on a project website.']]]},
  {tag:'05 / Campaign creative',theme:'creative',
   content:['Draft one post with AI','Give AI your promotion goal and enough context to write for your audience.',[['Give it a brief','Include your project, audience, goal and channel.'],['Draft one post','Make one piece of copy, image, or short clip that fits your channel.'],['Edit it together','Check the facts and make the wording sound like your team.']],'Put one draft in your team’s FigJam space for feedback.']},
  {tag:'06 / Wrap-up',theme:'lime wrap-up',
   content:['Team feedback','Show me the three boxes in your team’s FigJam space for feedback before you go.']}
];
const visuals = {
  '02 / Workshop outputs': `<figure class="visual output-example">
    <div class="output-grid three-outputs">
      <section class="assumption-example">
        <p class="output-kicker"><b>01</b> Promotion goal</p>
        <p class="example-claim">One sentence</p>
        <p>Who do you want to reach, and what do you want them to know?</p>
      </section>
      <section class="draft-example">
        <p class="output-kicker"><b>02</b> Promotion channel</p>
        <p class="example-claim">One channel</p>
        <p>Where are those people likely to see your post?</p>
      </section>
      <section class="draft-example">
        <p class="output-kicker"><b>03</b> First post draft</p>
        <p class="example-claim">One draft</p>
        <p>Add one caption, image, or short clip that fits your channel.</p>
      </section>
    </div>
  </figure>`,
  '03 / Promotion goal': `<figure class="visual game-example">
    <img src="media/choose-an-assumption.webp" alt="Students arranging sticky notes during a workshop">
    <div class="game-example-copy">
      <p class="output-kicker">Write one sentence as a team</p>
      <p>We want <strong style="display:inline">[audience]</strong> to <strong style="display:inline">[learn one thing about our project]</strong> after seeing our post.</p>
    </div>
  </figure>`,
  '04 / Channel selection': `<figure class="visual">
    <div class="draft-example">
      <p class="output-kicker">Make the choice as a team</p>
      <p class="example-claim">Name one channel.</p>
      <dl class="example-details">
        <div><dt>Think about</dt><dd>Where does your audience already look for this kind of content?</dd></div>
      </dl>
    </div>
  </figure>`,
  '05 / Campaign creative': `<figure class="visual">
    <div class="draft-example">
      <p class="output-kicker">Prompt starter</p>
      <p class="example-claim">“Draft one post for [audience] on [channel].”</p>
      <dl class="example-details">
        <div><dt>Project</dt><dd>[What it is and what stage it’s at]</dd></div>
        <div><dt>Goal</dt><dd>[What we want people to know]</dd></div>
        <div><dt>Message</dt><dd>[The main point]</dd></div>
      </dl>
    </div>
  </figure>`
};
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
  $('deck').innerHTML = `<article class="${slide.theme || ''}${visual ? ' with-visual' : ''}"><div class="copy"><p class="eyebrow">${slide.tag}</p><h1 tabindex="-1">${title}</h1><p class="lead">${lead}</p>${prompt ? `<blockquote class="quote">${prompt}</blockquote>` : ''}${rows ? `<div class="rows">${rows.map(([k,v])=>`<div class="row"><strong>${k}</strong><span>${v}</span></div>`).join('')}</div>` : ''}${note ? `<p class="note">${note}</p>` : ''}${index===0 ? `<button type="button" id="start">Start workshop →</button>` : ''}</div>${visual}</article>`;
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
