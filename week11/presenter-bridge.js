(() => {
  const params = new URLSearchParams(location.search);
  const session = params.get('presenter');
  const presenter = window.opener;
  if (params.get('view') !== 'presentation' || !presenter || !/^[a-f0-9]{32}$/.test(session || '')) return;

  const channel = 'week11-presenter-v1';
  const counter = document.getElementById('counter');
  const readIndex = () => Number(counter.textContent.split('/')[0].trim()) - 1;
  const send = type => presenter.postMessage({ channel, type, session, index: readIndex() }, '*');
  let lastIndex = readIndex();

  window.addEventListener('message', event => {
    const data = event.data;
    if (event.source !== presenter || event.origin !== 'null' ||
        data?.channel !== channel || data.type !== 'set-slide' || data.session !== session ||
        !Number.isInteger(data.index) || data.index < 0 || data.index >= slides.length) return;
    if (readIndex() !== data.index) location.hash = `slide-${data.index + 1}`;
  });

  new MutationObserver(() => {
    const index = readIndex();
    if (index === lastIndex) return;
    lastIndex = index;
    send('slide-changed');
  }).observe(counter, { childList: true, characterData: true, subtree: true });

  const fullscreen = document.createElement('button');
  fullscreen.type = 'button';
  fullscreen.className = 'audience-fullscreen';
  fullscreen.textContent = 'Full screen';
  fullscreen.hidden = !document.fullscreenEnabled;
  fullscreen.addEventListener('click', async () => {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      fullscreen.textContent = 'Use browser full screen';
    }
  });
  document.body.append(fullscreen);
  send('ready');
})();
