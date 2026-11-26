function fitStage(){
  const header=document.querySelector('.topbar').offsetHeight;
  const footer=document.querySelector('.bottombar').offsetHeight;
  const scale=Math.max(.1,Math.min((window.innerWidth-24)/1600,(window.innerHeight-header-footer-42)/900));
  const shell=document.getElementById('stage-shell');
  shell.style.width=`${1600*scale}px`;shell.style.height=`${900*scale}px`;
  document.getElementById('deck').style.transform=`scale(${scale})`;
}
function decorateSlide(){
  const number=Number((location.hash.match(/slide-(\d+)/)||[])[1]||1)-1;
  const slide=slides[number];if(!slide)return;
  document.getElementById('korean-copy').textContent=slide.ko||'';
  fitStage();
}
new MutationObserver(decorateSlide).observe(document.getElementById('deck'),{childList:true});
window.addEventListener('resize',fitStage);
document.getElementById('korean').addEventListener('click',()=>document.getElementById('korean-notes').showModal());
document.getElementById('close-korean').addEventListener('click',()=>document.getElementById('korean-notes').close());
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-image]');if(!button)return;
  const large=document.getElementById('large-image');large.src=button.dataset.image;large.alt=button.dataset.alt;
  document.getElementById('image-credit').textContent=button.dataset.credit;
  document.getElementById('image-title').textContent=button.dataset.alt;
  document.getElementById('image-viewer').showModal();
});
document.getElementById('close-image').addEventListener('click',()=>document.getElementById('image-viewer').close());
// The shared deck keyboard handler is installed first. Keep its navigation
// paused while the enlarged reference image is open.
window.addEventListener('keydown',event=>{if(document.getElementById('image-viewer').open||document.getElementById('korean-notes').open)event.stopImmediatePropagation();},{capture:true});
decorateSlide();
