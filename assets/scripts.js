document.addEventListener('DOMContentLoaded', function(){
  const faq = document.getElementById('faq');
  const singleOpen = !faq.hasAttribute('data-multi');

  function closeItem(item){
    const btn = item.querySelector('.question');
    const a = item.querySelector('.answer');
    if(!btn || !a) return;
    btn.setAttribute('aria-expanded','false');
    a.hidden = true;
    item.classList.remove('open');
  }
  function openItem(item){
    const btn = item.querySelector('.question');
    const a = item.querySelector('.answer');
    if(!btn || !a) return;
    if(singleOpen){
      document.querySelectorAll('.item.open').forEach(i => closeItem(i));
    }
    btn.setAttribute('aria-expanded','true');
    a.hidden = false;
    item.classList.add('open');
    setTimeout(()=> item.scrollIntoView({behavior:'smooth', block:'center'}), 120);
  }

  document.querySelectorAll('.item').forEach(item=>{
    const btn = item.querySelector('.question');
    const a = item.querySelector('.answer');
    if(!btn || !a) return;
    a.hidden = true;
    btn.addEventListener('click', ()=> {
      const isOpen = item.classList.contains('open');
      if(isOpen) closeItem(item); else openItem(item);
    });
    btn.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Ensure external blank links have rel for security
  document.querySelectorAll('a[target="_blank"]').forEach(a=>{
    if(!a.hasAttribute('rel')) a.setAttribute('rel','noopener noreferrer');
  });
});
