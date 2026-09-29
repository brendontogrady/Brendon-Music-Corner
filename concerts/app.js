'use strict';
const data=JSON.parse(document.getElementById('concert-data').textContent),$=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for(const b of [...new Set(data.flatMap(x=>x.lineup))].sort())$('band').add(new Option(b,b));
for(const v of [...new Set(data.map(x=>x.venue).filter(Boolean))].sort())$('venue').add(new Option(v,v));
const date=s=>new Date(s+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
function render(){const q=$('search').value.toLowerCase();const matches=data.filter(x=>(!$('band').value||x.lineup.includes($('band').value))&&(!$('venue').value||x.venue===$('venue').value)&&(!q||[x.title,x.venue,x.city,x.region,...x.lineup].filter(Boolean).join(' ').toLowerCase().includes(q)));
 $('results').textContent=`${matches.length} events · ${matches.reduce((n,x)=>n+x.media.length,0)} videos`;
 $('eventRows').innerHTML=matches.map(x=>`<tr><td>${date(x.date)}</td><td><a href="#${esc(x.id)}" data-open="${esc(x.id)}">${esc(x.title)}</a></td><td>${esc(x.venue||'—')}</td><td>${esc(x.city)}, ${esc(x.region)}</td><td class="number">${x.media.length}</td></tr>`).join('')||'<tr><td colspan="5">No events match your filters.</td></tr>';
 $('events').innerHTML=matches.map(x=>`<details class="event" id="${esc(x.id)}"><summary><strong>${esc(x.title)}</strong> · ${date(x.date)}<span class="event-info">${x.venue?esc(x.venue)+' · ':''}${esc(x.city)}, ${esc(x.region)} · ${x.media.length} videos</span></summary><div class="event-body">${x.lineup.length?`<p class="lineup"><b>Lineup:</b> ${x.lineup.map(esc).join(' · ')}</p>`:'<p class="lineup">Festival</p>'}<div class="clips">${x.media.map((m,i)=>`<figure class="clip"><video controls preload="none" playsinline poster="${esc(m.poster)}"><source src="${esc(m.file)}" type="video/mp4">Your browser cannot play this video.</video></figure>`).join('')}</div></div></details>`).join('');
 openHash();
}
function openHash(){const id=decodeURIComponent(location.hash.slice(1)),event=document.getElementById(id);if(event?.tagName==='DETAILS')event.open=true}
document.addEventListener('click',e=>{const a=e.target.closest('[data-open]');if(a){const event=document.getElementById(a.dataset.open);if(event)event.open=true}});
window.addEventListener('hashchange',openHash);for(const id of ['search','band','venue'])$(id).addEventListener('input',render);render();
