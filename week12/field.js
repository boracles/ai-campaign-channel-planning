const lensContent = {
  offer:['Clean Team','What exactly does the customer receive?','Household research informed an offer combining a toilet with collection and maintenance.','Value proposition, customer relationship and revenue model.'],
  journey:['Cooper Hewitt','How does the audience experience the offer?','The Pen experience connected collecting, drawing, returning the device and retrieving a visit online.','Audience journey, channels and support.'],
  operations:['GOV.UK Notify','How does the service fit into real work?','Staff phone calls and access to devices affected the authentication and messaging workflow.','Key activities and service delivery.'],
  resources:['Cooper Hewitt','What people and systems are required?','Pairing tickets and Pens created tasks for front-desk staff and a need for operational tools.','Key resources, staff responsibilities and costs.']
};
function showLens(key) {
  const panel=document.getElementById('lens-detail');if(!panel)return;
  const [name,title,copy,connection]=lensContent[key]||lensContent.offer;
  panel.innerHTML=`<p class="case-name">${name}</p><h2>${title}</h2><p>${copy}</p><p class="note">Business connection: ${connection}</p>`;
  document.querySelectorAll('[data-lens]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lens===key)));
}
let showKorean=false;
function decorateSlide(){
  const copy=document.querySelector('#deck .copy');if(!copy)return;
  const number=Number((location.hash.match(/slide-(\d+)/)||[])[1]||1)-1;
  const slide=slides[number];if(!slide)return;
  if(!copy.querySelector('.ko-note')){const p=document.createElement('p');p.className='ko-note';p.lang='ko';p.textContent=slide.ko||'';copy.append(p);}
  copy.querySelector('.ko-note').hidden=!showKorean;
  const panel=document.getElementById('lens-detail');
  if(panel&&!panel.hasChildNodes())showLens('offer');
}
new MutationObserver(()=>decorateSlide()).observe(document.getElementById('deck'),{childList:true});
document.getElementById('korean').addEventListener('click',()=>{showKorean=!showKorean;document.getElementById('korean').setAttribute('aria-pressed',String(showKorean));decorateSlide();});
document.addEventListener('click',event=>{
  const lens=event.target.closest('[data-lens]');if(lens){showLens(lens.dataset.lens);return;}
  const button=event.target.closest('[data-image]');if(!button)return;
  const large=document.getElementById('large-image');large.src=button.dataset.image;large.alt=button.dataset.alt;
  document.getElementById('image-credit').textContent=button.dataset.credit;
  document.getElementById('image-title').textContent=button.dataset.alt;
  document.getElementById('image-viewer').showModal();
});
document.getElementById('close-image').addEventListener('click',()=>document.getElementById('image-viewer').close());
// The shared deck keyboard handler is installed first. Keep its navigation
// paused while the enlarged reference image is open.
window.addEventListener('keydown',event=>{if(document.getElementById('image-viewer').open)event.stopImmediatePropagation();},{capture:true});
decorateSlide();
