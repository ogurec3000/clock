const $=id=>document.getElementById(id),B=document.body,P=$('panel');
const colors=['#ffffff','#ff3e3e','#3e8bff','#3eff8b','#ffff3e','#ff3eff','#3effff','#ff9a3e','#000000','#FFD700','#FF1493','#8A2BE2','#00FA9A','#FF4500'];
const fontsClock=['Montserrat','Orbitron','Unbounded','Russo One','Press Start 2P','Bebas Neue','Noto Sans SC','JetBrains Mono'];
const fontsDate=['Montserrat','Orbitron','Comfortaa','Marck Script','JetBrains Mono','Noto Sans SC'];
const languages=[{id:'ru',n:'Русский',flag:'ru'},{id:'en',n:'English',flag:'us'},{id:'ja',n:'日本語',flag:'jp'},{id:'zh',n:'中文',flag:'cn'},{id:'de',n:'Deutsch',flag:'de'},{id:'fr',n:'Français',flag:'fr'},{id:'it',n:'Italiano',flag:'it'},{id:'ar',n:'العربية',flag:'sa'}];
const translations = {
            ru: { h_clock:"СИСТЕМА ЧАСОВ", h_date:"СИСТЕМА ДАТЫ", h_ui:"ИНТЕРФЕЙС", l_font:"Шрифт часов", l_color:"Дизайн градиента", l_scale:"Размер часов", l_glow:"Неоновое свечение", l_dfont:"Шрифт даты", l_dsize:"Размер даты", l_blur:"Размытие стекла", l_lang:"Язык системы", reset:"СБРОСИТЬ НАСТРОЙКИ", wn_title:"Русский", wn_1:"1. Добавлены флаги в меню выбора языка.", rel: "ДАТА РЕЛИЗА" },
            en: { h_clock:"CLOCK ENGINE", h_date:"DATE ENGINE", h_ui:"INTERFACE", l_font:"Clock Typography", l_color:"Gradient Design", l_scale:"Clock Scale", l_glow:"Neon Glow", l_dfont:"Date Typography", l_dsize:"Date Scale", l_blur:"Glass Blur", l_lang:"System Language", reset:"FACTORY RESET", wn_title:"English", wn_1:"1. Added flags to language selection.", rel: "RELEASE DATE" },
            zh: { h_clock:"时钟引擎", h_date:"日期引擎", h_ui:"界面设置", l_font:"时钟字体选择", l_color:"颜色渐变设计", l_scale:"时钟缩放比例", l_glow:"霓虹发光效果", l_dfont:"日期字体选择", l_dsize:"日期缩放比例", l_blur:"玻璃模糊效果", l_lang:"系统语言选择", reset:"恢复出厂设置", wn_title:"简体中文", wn_1:"1. 在语言选择菜单中添加了国旗。", rel: "发布日期" },
            ja: { h_clock:"クロックエンジン", h_date:"日付エンジン", h_ui:"インターフェース", l_font:"時計のフォント", l_color:"グラデーション", l_scale:"時計のサイズ", l_glow:"ネオン発光", l_dfont:"日付のフォント", l_dsize:"日付のサイズ", l_blur:"ガラスのぼかし", l_lang:"システム言語", reset:"設定をリセット", wn_title:"日本語", wn_1:"1. 言語選択に国旗を追加しました。", rel: "リリース日" },
            de: { h_clock:"UHR-SYSTEM", h_date:"DATUM-SYSTEM", h_ui:"INTERFACE", l_font:"Uhr-Schriftart", l_color:"Farbverlauf", l_scale:"Uhrgröße", l_glow:"Neon-Leuchten", l_dfont:"Datums-Schrift", l_dsize:"Datumsgröße", l_blur:"Glas-Unschärfe", l_lang:"Systemsprache", reset:"ZURÜCKSETZEN", wn_title:"Deutsch", wn_1:"1. Flaggen zur Sprachauswahl hinzugefügt.", rel: "VERÖFFENTLICHUNGSDATUM" },
            ar: { h_clock:"محرك الساعة", h_date:"محرك التاريخ", h_ui:"الواجهة", l_font:"خط الساعة", l_color:"تصميم التدرج", l_scale:"حجم الساعة", l_glow:"توهج النيون", l_dfont:"خط التاريخ", l_dsize:"حجم التاريخ", l_blur:"تمويه الزجاج", l_lang:"لغة النظام", reset:"إعادة ضبط المصنع", wn_title:"العربية", wn_1:"١. تمت إضافة الأعلام إلى قائمة اختيار اللغة.", rel: "تاريخ الإصدار" },
            fr: { h_clock:"HORLOGE", h_date:"DATE", h_ui:"INTERFACE", l_font:"Police d'horloge", l_color:"Dégradé", l_scale:"Taille", l_glow:"Lueur néon", l_dfont:"Police date", l_dsize:"Taille date", l_blur:"Flou", l_lang:"Langue", reset:"RÉINITIALISER", wn_title:"Français", wn_1:"1. Ajout de drapeaux à la sélection de la langue.", rel: "DATE DE SORTIE" },
            it: { h_clock:"OROLOGIO", h_date:"DATA", h_ui:"INTERFACCIA", l_font:"Font orologio", l_color:"Sfumatura", l_scale:"Scala", l_glow:"Bagliore", l_dfont:"Font data", l_dsize:"Scala data", l_blur:"Sfocatura", l_lang:"Lingua", reset:"RIPRISTINA", wn_title:"Italiano", wn_1:"1. Aggiunte bandiere alla selezione della lingua.", rel: "DATA DI RILASCIO" }
};
const X={
en:{h_theme:'THEMES',l_spacing:'Letter spacing',l_24h:'24-hour format',l_sec:'Show seconds',l_tz:'Time zone',l_world:'World clocks',l_year:'Show year',l_wd:'Show weekday',l_prog:'Day progress',l_opac:'Glass tint',l_radius:'Corner radius',l_bg:'Background',bg_liquid:'Liquid',bg_particles:'Particles',bg_none:'None',m_clock:'Clock',m_sw:'Stopwatch',m_tm:'Timer',start:'Start',pause:'Pause',resume:'Resume',lap:'Lap',rs:'Reset',tz_local:'Local time',done:'Time is up!',
c1:'1. New Liquid Glass design with a living liquid background.',c2:'2. Stopwatch and Timer modes with sound.',c3:'3. 6 ready-made themes.',c4:'4. Time zones, 12/24-hour format and world clocks.',c5:'5. New settings: seconds, year, weekday, day progress, glass tint, corner radius, letter spacing, background.',c6:'6. Fullscreen mode and hotkeys (F, S, 1–3, Space).'},
ru:{h_theme:'ТЕМЫ',l_spacing:'Межбуквенный интервал',l_24h:'24-часовой формат',l_sec:'Показывать секунды',l_tz:'Часовой пояс',l_world:'Мировое время',l_year:'Показывать год',l_wd:'День недели',l_prog:'Прогресс дня',l_opac:'Затемнение стекла',l_radius:'Скругление углов',l_bg:'Фон',bg_liquid:'Жидкий',bg_particles:'Частицы',bg_none:'Без фона',m_clock:'Часы',m_sw:'Секундомер',m_tm:'Таймер',start:'Старт',pause:'Пауза',resume:'Продолжить',lap:'Круг',rs:'Сброс',tz_local:'Местное время',done:'Время вышло!',
c1:'1. Новый дизайн Liquid Glass с живым жидким фоном.',c2:'2. Режимы «Секундомер» и «Таймер» со звуком.',c3:'3. 6 готовых тем оформления.',c4:'4. Часовые пояса, формат 12/24 ч и мировое время.',c5:'5. Новые настройки: секунды, год, день недели, прогресс дня, затемнение, скругление, интервал, фон.',c6:'6. Полноэкранный режим и горячие клавиши (F, S, 1–3, Пробел).'},
de:{h_theme:'DESIGNS',l_spacing:'Buchstabenabstand',l_24h:'24-Stunden-Format',l_sec:'Sekunden anzeigen',l_tz:'Zeitzone',l_world:'Weltzeituhren',l_year:'Jahr anzeigen',l_wd:'Wochentag anzeigen',l_prog:'Tagesfortschritt',l_opac:'Glas-Tönung',l_radius:'Eckenradius',l_bg:'Hintergrund',bg_liquid:'Flüssig',bg_particles:'Partikel',bg_none:'Keiner',m_clock:'Uhr',m_sw:'Stoppuhr',m_tm:'Timer',start:'Start',pause:'Pause',resume:'Weiter',lap:'Runde',rs:'Zurücksetzen',tz_local:'Ortszeit',done:'Zeit abgelaufen!',
c1:'1. Neues Liquid-Glass-Design mit lebendigem Hintergrund.',c2:'2. Stoppuhr- und Timer-Modus mit Ton.',c3:'3. 6 fertige Designs.',c4:'4. Zeitzonen, 12/24-Stunden-Format und Weltzeituhren.',c5:'5. Neue Einstellungen: Sekunden, Jahr, Wochentag, Tagesfortschritt, Tönung, Radius, Abstand, Hintergrund.',c6:'6. Vollbildmodus und Tastenkürzel (F, S, 1–3, Leertaste).'}};
const T=k=>{const l=cfg.ln;return(X[l]&&X[l][k])||(translations[l]&&translations[l][k])||X.en[k]||translations.en[k]||k};
const THEMES={
Aurora:{ct:'#ffffff',cb:'#3e8bff',ac:'#58a6ff',b:['#00d2ff','#7b61ff','#3a7bd5']},
Sunset:{ct:'#fff1b8',cb:'#ff4e7e',ac:'#ff7a59',b:['#ff7a59','#ff3e8b','#7b3eff']},
Matrix:{ct:'#b6ffcf',cb:'#00ff66',ac:'#00ff66',b:['#00ff66','#00a86b','#008f4f']},
Ocean:{ct:'#e0fbff',cb:'#00b7ff',ac:'#36d1ff',b:['#00b7ff','#0050ff','#00ffd0']},
Violet:{ct:'#f3e8ff',cb:'#a259ff',ac:'#b583ff',b:['#a259ff','#ff5fd2','#5b3eff']},
Mono:{ct:'#ffffff',cb:'#8a8f98',ac:'#cfd6e4',b:['#9aa4b8','#556070','#334055']}};
const ZONES=['local','UTC','Europe/Berlin','Europe/Moscow','Asia/Dubai','Asia/Tokyo','Australia/Sydney','America/New_York','America/Los_Angeles'];
const WORLD=[['New York','America/New_York'],['London','Europe/London'],['Moscow','Europe/Moscow'],['Tokyo','Asia/Tokyo']];
const DEF={ct:'#ffffff',cb:'#3e8bff',ac:'#58a6ff',bc:THEMES.Aurora.b,th:'Aurora',cf:'Montserrat',df:'Montserrat',cs:140,ds:24,cg:20,sp:0,cl:20,co:.35,rad:48,ln:'en',h24:true,sec:true,yr:false,wd:true,pr:true,wr:false,tz:'local',bg:'liquid',mode:'clock'};
let cfg;{const p=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}};
 cfg={...DEF,...(p('clockV1Cfg')||{}),...(p('clockV14Cfg')||{})};
 ['cs','ds','cg','cl','sp','rad','co'].forEach(k=>{const v=parseFloat(cfg[k]);cfg[k]=isNaN(v)?DEF[k]:v});
 if(!Array.isArray(cfg.bc))cfg.bc=DEF.bc;
 if(!languages.some(l=>l.id===cfg.ln))cfg.ln='en';
 if(!localStorage.getItem('clockV14Cfg')){const nl=(navigator.language||'en').slice(0,2);if(languages.some(l=>l.id===nl))cfg.ln=nl}}

const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const flag=c=>`<img class="flag" src="images/flags/${c}.svg" alt="" onerror="this.style.display='none'">`;
const lab=k=>{const e=el('span','lab');e.dataset.t=k;return e};
const reg=[],refresh=()=>reg.forEach(f=>f());
const closeDD=()=>document.querySelectorAll('.dd-l').forEach(l=>l.classList.remove('show'));
function items(src){
 if(src==='zones')return ZONES.map(z=>({id:z,n:z==='local'?T('tz_local'):z.replace('_',' ')}));
 if(src==='bgs')return['liquid','particles','none'].map(i=>({id:i,n:T('bg_'+i)}));
 if(src==='langs')return languages;
 return src.map(f=>({id:f,n:f,font:1}))}

const SET=[
['h_theme',[['themes']]],
['h_clock',[['dd','cf','l_font',fontsClock],['colors'],['rg','cs','l_scale',60,250,1],['rg','cg','l_glow',0,60,1],['rg','sp','l_spacing',-5,20,1],['sw','h24','l_24h'],['sw','sec','l_sec'],['dd','tz','l_tz','zones'],['sw','wr','l_world']]],
['h_date',[['dd','df','l_dfont',fontsDate],['rg','ds','l_dsize',12,60,1],['sw','wd','l_wd'],['sw','yr','l_year'],['sw','pr','l_prog']]],
['h_ui',[['rg','cl','l_blur',0,50,1],['rg','co','l_opac',0,.9,.05],['rg','rad','l_radius',0,80,1],['dd','bg','l_bg','bgs'],['dd','ln','l_lang','langs']]]];

function row(r){
 const [t,k,l,a,b,s]=r,w=el('div','row');
 if(t==='themes'){const g=el('div','chips3');
  Object.keys(THEMES).forEach(n=>{const th=THEMES[n],c=el('button','chip',`<i style="background:linear-gradient(135deg,${th.ct},${th.cb})"></i>${n}`);
   c.onclick=()=>{Object.assign(cfg,{th:n,ct:th.ct,cb:th.cb,ac:th.ac,bc:th.b});apply(true)};
   reg.push(()=>c.classList.toggle('on',cfg.th===n));g.appendChild(c)});w.appendChild(g)}
 else if(t==='colors'){w.appendChild(lab('l_color'));
  ['ct','cb'].forEach(key=>{const g=el('div','colors');
   colors.forEach(col=>{const d=el('button','dot');d.style.background=col;d.setAttribute('aria-label',col);
    d.onclick=()=>{cfg[key]=col;cfg.th='Custom';apply(true)};reg.push(()=>d.classList.toggle('on',cfg[key]===col));g.appendChild(d)});w.appendChild(g)})}
 else if(t==='rg'){const top=el('div','rtop'),v=el('b'),i=el('input');top.append(lab(l),v);i.type='range';i.min=a;i.max=b;i.step=s;
  i.oninput=()=>{cfg[k]=+i.value;v.textContent=i.value;apply()};reg.push(()=>{i.value=cfg[k];v.textContent=cfg[k]});w.append(top,i)}
 else if(t==='sw'){w.className='row line';const sw=el('button','sw');sw.setAttribute('role','switch');
  sw.onclick=()=>{cfg[k]=!cfg[k];apply(true)};reg.push(()=>{sw.classList.toggle('on',cfg[k]);sw.setAttribute('aria-checked',cfg[k])});w.append(lab(l),sw)}
 else{const d=el('div','dd'),tr=el('button','dd-t'),ls=el('div','dd-l');d.append(tr,ls);w.append(lab(l),d);
  tr.onclick=e=>{e.stopPropagation();const o=ls.classList.contains('show');closeDD();if(!o)ls.classList.add('show')};
  reg.push(()=>{const it=items(a);ls.innerHTML='';
   it.forEach(x=>{const bt=el('button','li'+(cfg[k]===x.id?' on':''),(x.flag?flag(x.flag):'')+'<span>'+x.n+'</span>');
    if(x.font)bt.style.fontFamily=`'${x.id}'`;bt.onclick=()=>{cfg[k]=x.id;closeDD();apply(true)};ls.appendChild(bt)});
   const cur=it.find(x=>x.id===cfg[k])||it[0];tr.innerHTML=`<span class="cur">${cur.flag?flag(cur.flag):''}${cur.n}</span><em>▾</em>`})}
 return w}
function buildPanel(){
 P.appendChild(el('div','ptitle','CLOCK V2.0'));
 SET.forEach(([h,rows])=>{const c=el('section','cat'),hh=el('div','cat-h');hh.dataset.t=h;c.appendChild(hh);rows.forEach(r=>c.appendChild(row(r)));P.appendChild(c)});
 const rb=el('button','danger');rb.dataset.t='reset';rb.onclick=()=>{try{localStorage.clear()}catch(e){}location.reload()};P.appendChild(rb)}

let lastBg;
function apply(ref){
 const s=document.documentElement.style;
 s.setProperty('--ct',cfg.ct);s.setProperty('--cb',cfg.cb);s.setProperty('--ac',cfg.ac);
 s.setProperty('--cf',`'${cfg.cf}'`);s.setProperty('--df',`'${cfg.df}'`);
 s.setProperty('--cs',cfg.cs+'px');s.setProperty('--ds',cfg.ds+'px');s.setProperty('--cg',cfg.cg+'px');s.setProperty('--sp',cfg.sp+'px');
 s.setProperty('--bl',cfg.cl+'px');s.setProperty('--co',cfg.co);s.setProperty('--rad',cfg.rad+'px');
 cfg.bc.forEach((c,i)=>s.setProperty('--b'+(i+1),c));
 B.dataset.bg=cfg.bg;B.dir=cfg.ln==='ar'?'rtl':'ltr';document.documentElement.lang=cfg.ln;
 $('prog').hidden=!cfg.pr;$('world').hidden=!cfg.wr;
 try{localStorage.setItem('clockV14Cfg',JSON.stringify(cfg))}catch(e){}
 if(lastBg!==cfg.bg){lastBg=cfg.bg;pSync()}
 if(ref){refresh();setTexts()}
 tick();fit()}

function setTexts(){
 document.querySelectorAll('[data-t]').forEach(e=>e.textContent=T(e.dataset.t));
 $('wl').textContent=T('wn_title');$('rel').textContent=T('rel')+': 04.10.2026';
 const c=$('cl');c.innerHTML='';for(let i=1;i<7;i++)c.appendChild(el('p','',T('c'+i)));
 swBtns();tmBtns()}

/* ---------- Clock ---------- */
const tz=()=>cfg.tz==='local'?undefined:cfg.tz;
function sod(d,z){const p={};new Intl.DateTimeFormat('en-GB',{timeZone:z,hour:'numeric',minute:'numeric',second:'numeric',hourCycle:'h23'}).formatToParts(d).forEach(x=>p[x.type]=+x.value);return p.hour*3600+p.minute*60+p.second}
function tick(){
 if(cfg.mode!=='clock')return;
 const d=new Date(),z=tz(),o={timeZone:z,hour:'2-digit',minute:'2-digit',hourCycle:cfg.h24?'h23':'h12'};
 if(cfg.sec)o.second='2-digit';
 $('clock').textContent=d.toLocaleTimeString(cfg.ln,o);
 $('date').textContent=d.toLocaleDateString(cfg.ln,{timeZone:z,weekday:cfg.wd?'long':undefined,day:'numeric',month:'long',year:cfg.yr?'numeric':undefined});
 if(cfg.pr){const f=sod(d,z)/86400;$('pbar').style.transform=`scaleX(${f})`;$('ptxt').textContent=(f*100).toFixed(1)+'%'}
 if(cfg.wr)$('world').innerHTML=WORLD.map(([n,zz])=>`<div>${n}<b>${d.toLocaleTimeString(cfg.ln,{timeZone:zz,hour:'2-digit',minute:'2-digit',hourCycle:cfg.h24?'h23':'h12'})}</b></div>`).join('')}
(function loop(){tick();setTimeout(loop,1000-Date.now()%1000+5)})();

/* ---------- Stopwatch ---------- */
const SW={run:0,t0:0,acc:0,laps:[]},p2=n=>String(n).padStart(2,'0');
const fSW=ms=>`${p2(Math.floor(ms/60000))}:${p2(Math.floor(ms/1000)%60)}.${p2(Math.floor(ms/10)%100)}`;
const swMs=()=>SW.acc+(SW.run?performance.now()-SW.t0:0);
function swRender(){$('swt').textContent=fSW(swMs());if(SW.run&&cfg.mode==='sw')requestAnimationFrame(swRender)}
function swBtns(){$('swGo').textContent=T(SW.run?'pause':SW.acc?'resume':'start');B.classList.toggle('swrun',!!SW.run)}
function swToggle(){if(SW.run){SW.acc=swMs();SW.run=0}else{SW.t0=performance.now();SW.run=1}swBtns();swRender()}
function swLap(){if(!SW.run)return;SW.laps.unshift(swMs());$('laps').innerHTML=SW.laps.slice(0,6).map((t,i)=>{const n=SW.laps.length-i,sp=t-(SW.laps[i+1]||0);return`<li><span>#${n}</span><span>+${fSW(sp)}</span><span>${fSW(t)}</span></li>`}).join('')}
function swReset(){SW.run=0;SW.acc=0;SW.laps=[];$('laps').innerHTML='';swBtns();swRender()}
$('swGo').onclick=swToggle;$('swLap').onclick=swLap;$('swRs').onclick=swReset;

/* ---------- Timer ---------- */
const TM={run:0,left:3e5,total:3e5,end:0};let tmI;
const fTM=ms=>{const s=Math.ceil(ms/1000),h=Math.floor(s/3600);return(h?h+':':'')+p2(Math.floor(s/60)%60)+':'+p2(s%60)};
function tmRender(){const l=TM.run?Math.max(0,TM.end-Date.now()):TM.left;$('tmt').textContent=fTM(l);$('tmbar').style.transform=`scaleX(${TM.total?l/TM.total:0})`;
 if(TM.run&&l<=0)tmDone();document.title=TM.run?fTM(l)+' · Clock V2.0':'Clock V2.0'}
function tmBtns(){$('tmGo').textContent=T(TM.run?'pause':TM.left<TM.total&&TM.left>0?'resume':'start')}
function tmSet(m){m=Math.max(1,Math.min(999,+m||1));TM.total=TM.left=m*6e4;TM.run=0;clearInterval(tmI);$('tmin').value=m;tmRender();tmBtns()}
function tmToggle(){if(TM.run){TM.left=Math.max(0,TM.end-Date.now());TM.run=0;clearInterval(tmI)}else{if(TM.left<=0)TM.left=TM.total;TM.end=Date.now()+TM.left;TM.run=1;tmI=setInterval(tmRender,100)}tmRender();tmBtns()}
function tmDone(){TM.run=0;TM.left=0;clearInterval(tmI);beep();toast(T('done'));$('card').classList.add('pulse');setTimeout(()=>$('card').classList.remove('pulse'),3500);tmBtns()}
$('tmGo').onclick=tmToggle;$('tmRs').onclick=()=>tmSet($('tmin').value);
document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>tmSet(b.dataset.m));$('tmin').onchange=e=>tmSet(e.target.value);
function beep(){try{const a=new(window.AudioContext||window.webkitAudioContext)();[0,.3,.6].forEach(t=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=880;o.connect(g);g.connect(a.destination);const n=a.currentTime+t;g.gain.setValueAtTime(.2,n);g.gain.exponentialRampToValueAtTime(.001,n+.22);o.start(n);o.stop(n+.25)})}catch(e){}}
let tt;function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2600)}

/* ---------- Modes / UI ---------- */
function setMode(m){cfg.mode=m;
 document.querySelectorAll('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+m));
 document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t.dataset.mode===m));
 try{localStorage.setItem('clockV14Cfg',JSON.stringify(cfg))}catch(e){}
 if(m==='clock')tick();if(m==='sw')swRender();fit()}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>setMode(t.dataset.mode));
const fs=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{});
$('bFs').onclick=fs;
$('bSet').onclick=e=>{e.stopPropagation();P.classList.toggle('on')};
const showNew=()=>$('ovNew').classList.remove('hide'),hideNew=()=>{$('ovNew').classList.add('hide');try{localStorage.setItem('seenVer','1.4')}catch(e){}};
$('bInfo').onclick=showNew;$('xNew').onclick=hideNew;$('ovNew').onclick=e=>{if(e.target===$('ovNew'))hideNew()};
addEventListener('click',e=>{if(!e.target.closest('.dd'))closeDD();if(P.classList.contains('on')&&!e.target.closest('#panel'))P.classList.remove('on')});
addEventListener('keydown',e=>{
 if(e.target.tagName==='INPUT'||e.ctrlKey||e.metaKey||e.altKey)return;
 const k=e.key.toLowerCase();
 if(k===' '){if(e.target.tagName==='BUTTON')return;e.preventDefault();if(cfg.mode==='sw')swToggle();if(cfg.mode==='tm')tmToggle()}
 else if(k==='f')fs();else if(k==='s')P.classList.toggle('on');
 else if(k==='escape'){P.classList.remove('on');closeDD()}
 else if(k==='l')swLap();
 else if(k==='1'||k==='2'||k==='3')setMode(['clock','sw','tm'][k-1])});
const card=$('card');let raf2=0;
card.addEventListener('pointermove',e=>{if(raf2)return;raf2=requestAnimationFrame(()=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',e.clientX-r.left+'px');card.style.setProperty('--my',e.clientY-r.top+'px');raf2=0})},{passive:true});

/* ---------- Particles ---------- */
const cv=$('pc'),cx=cv.getContext('2d');let ps=[],raf=0;
function pInit(){cv.width=innerWidth;cv.height=innerHeight;ps=Array.from({length:70},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*2+.3,v:Math.random()*.5+.2,w:Math.random()*.4-.2}))}
function pDraw(){cx.clearRect(0,0,cv.width,cv.height);cx.fillStyle='#fff';cx.globalAlpha=.4;
 ps.forEach(p=>{cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fill();p.y+=p.v;p.x+=p.w;if(p.y>cv.height)p.y=-5;if(p.x>cv.width)p.x=0;if(p.x<0)p.x=cv.width});raf=requestAnimationFrame(pDraw)}
function pSync(){cancelAnimationFrame(raf);if(cfg.bg==='particles'){pInit();pDraw()}}
let rz;addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(()=>{if(cfg.bg==='particles')pInit()},200)});

/* ---------- Auto-fit: keeps big sizes / zoom / small windows from breaking the layout ---------- */
function fit(){
 const s=document.documentElement.style;s.setProperty('--fit',1);
 const cs=getComputedStyle($('card')),pad=parseFloat(cs.paddingLeft)+parseFloat(cs.paddingRight);
 let w=0;['clock','swt','tmt'].forEach(id=>{const e=$(id);if(e.offsetParent!==null)w=Math.max(w,e.offsetWidth)});
 const f=Math.min(1,(innerWidth*.96-pad)/(w||1),(innerHeight*.5)/(cfg.cs*1.1));
 s.setProperty('--fit',Math.max(.2,f*.98))}
let fz;addEventListener('resize',()=>{cancelAnimationFrame(fz);fz=requestAnimationFrame(fit)});
if(document.fonts){document.fonts.ready.then(fit);document.fonts.addEventListener&&document.fonts.addEventListener('loadingdone',fit)}

/* ---------- Start ---------- */
buildPanel();apply(true);setMode(cfg.mode);swRender();tmRender();
if(!localStorage.getItem('firstTimeDone')){
 const g=$('lgrid');$('ovLang').classList.remove('hide');
 languages.forEach(l=>{const b=el('button','gb',flag(l.flag)+'<span>'+l.n+'</span>');
  b.onclick=()=>{cfg.ln=l.id;try{localStorage.setItem('firstTimeDone','1')}catch(e){}$('ovLang').classList.add('hide');apply(true);showNew()};g.appendChild(b)})}
else if(localStorage.getItem('seenVer')!=='1.4')setTimeout(showNew,600);
