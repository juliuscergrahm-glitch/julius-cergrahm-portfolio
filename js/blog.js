const STORAGE_KEY='jc_portfolio_blog_posts_v1';
const ADMIN_PASSWORD='1234';
const ADMIN_SESSION_KEY='jc_portfolio_admin_unlocked';
let adminUnlocked=sessionStorage.getItem(ADMIN_SESSION_KEY)==='yes';
const starterPosts=[
 {id:'welcome',title:'Welcome to Julius Cergrahm Advanced Tech',category:'Technology',date:'2026-11-03',excerpt:'A space for practical technology insights, project updates, and lessons from the world of computing.',body:'Welcome to my blog. I will share practical lessons and project updates covering networking, web development, programming, operating systems, computer maintenance, and digital design. The goal is to turn technical knowledge into useful solutions.',image:'../assets/images/brand-logo.png'},
 {id:'web-basics',title:'Building Websites That Work for People',category:'Web Development',date:'2026-11-03',excerpt:'Good websites combine clear navigation, responsive layouts, accessibility, and useful content.',body:'A successful website should be easy to navigate on both phones and computers. Start with a clear structure, use semantic HTML, keep CSS consistent, and use JavaScript where it improves the experience. Test every page in a browser at different screen sizes.',image:'../assets/images/website-project-preview.png'},
 {id:'networking',title:'Why Reliable Networks Matter',category:'Networking',date:'2026-11-03',excerpt:'A well-planned network helps people and organizations communicate, share resources, and work securely.',body:'Networking is more than connecting devices. It includes planning, addressing, switching, routing, monitoring, troubleshooting, and security. Good documentation and strong access controls make networks easier to manage and protect.',image:'../assets/images/gospel-revival-poster.jpg'}
];
function getPosts(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));return Array.isArray(saved)?saved:starterPosts;}catch(e){return starterPosts;}}
function savePosts(posts){localStorage.setItem(STORAGE_KEY,JSON.stringify(posts));}
let posts=getPosts();
const grid=document.getElementById('blogGrid');
const search=document.getElementById('blogSearch');
const form=document.getElementById('postForm');
const notice=document.getElementById('notice');
const loginForm=document.getElementById('adminLogin');
const loginNotice=document.getElementById('loginNotice');
const adminTools=document.getElementById('adminTools');
function syncAdmin(){if(adminTools)adminTools.hidden=!adminUnlocked;if(loginForm)loginForm.hidden=adminUnlocked;if(loginNotice){loginNotice.style.display=adminUnlocked?'none':'block';loginNotice.textContent=adminUnlocked?'':'Enter the admin password to continue.';}renderPosts();}
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderPosts(){const q=(search?.value||'').toLowerCase();const list=posts.filter(p=>(p.title+' '+p.category+' '+p.excerpt+' '+p.body).toLowerCase().includes(q));grid.innerHTML=list.length?list.sort((a,b)=>b.date.localeCompare(a.date)).map(p=>`<article class="blog-card"><img src="${esc(p.image||'../assets/images/brand-logo.png')}" alt=""><div class="card-body"><div class="blog-meta">${esc(p.category)} · ${esc(p.date)}</div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><details><summary class="tag">Read article</summary><p>${esc(p.body).replace(/\n/g,'<br>')}</p></details>${adminUnlocked?`<p><button class="btn outline" style="color:#805d0c" data-delete="${esc(p.id)}" type="button">Delete post</button></p>`:''}</div></article>`).join(''):'<div class="empty">No posts match your search. Try another keyword or add a new post.</div>';}
loginForm?.addEventListener('submit',e=>{e.preventDefault();const entered=document.getElementById('adminPassword').value;if(entered===ADMIN_PASSWORD){adminUnlocked=true;sessionStorage.setItem(ADMIN_SESSION_KEY,'yes');loginForm.reset();syncAdmin();adminTools?.scrollIntoView({behavior:'smooth',block:'start'});}else{loginNotice.textContent='That password is incorrect. Try again.';loginNotice.style.display='block';document.getElementById('adminPassword').select();}});
document.getElementById('adminLogout')?.addEventListener('click',()=>{adminUnlocked=false;sessionStorage.removeItem(ADMIN_SESSION_KEY);syncAdmin();document.getElementById('admin')?.scrollIntoView({behavior:'smooth',block:'start'});});
search?.addEventListener('input',renderPosts);
form?.addEventListener('submit',e=>{e.preventDefault();if(!adminUnlocked)return;const data=new FormData(form);const post={id:'post-'+Date.now(),title:data.get('title').trim(),category:data.get('category'),date:data.get('date'),excerpt:data.get('excerpt').trim(),body:data.get('body').trim(),image:data.get('image').trim()||'../assets/images/brand-logo.png'};posts.unshift(post);savePosts(posts);form.reset();renderPosts();notice.style.display='block';notice.textContent='Your post has been added on this browser.';});
grid?.addEventListener('click',e=>{if(!adminUnlocked)return;const id=e.target.dataset.delete;if(!id)return;if(confirm('Delete this post from this browser?')){posts=posts.filter(p=>p.id!==id);savePosts(posts);renderPosts();}});
document.getElementById('resetPosts')?.addEventListener('click',()=>{if(!adminUnlocked)return;if(confirm('Restore the original sample blog posts? This removes locally added posts.')){posts=starterPosts;savePosts(posts);renderPosts();}});
syncAdmin();
