"use strict";(self.webpackChunkinsta_jobs=self.webpackChunkinsta_jobs||[]).push([[7089],{37089:function(s,e,t){t.r(e),t.d(e,{startFocusVisible:function(){return c}});const n="ion-focused",o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=()=>{let s=[],e=!0;const t=document,c=e=>{s.forEach(s=>s.classList.remove(n)),e.forEach(s=>s.classList.add(n)),s=e},a=()=>{e=!1,c([])};t.addEventListener("keydown",s=>{e=o.includes(s.key),e||c([])}),t.addEventListener("focusin",s=>{if(e&&s.composedPath){const e=s.composedPath().filter(s=>!!s.classList&&s.classList.contains("ion-focusable"));c(e)}}),t.addEventListener("focusout",()=>{t.activeElement===t.body&&c([])}),t.addEventListener("touchstart",a),t.addEventListener("mousedown",a)}}}]);