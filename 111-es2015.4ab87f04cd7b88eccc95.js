(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{fHjd:function(t,s,e){"use strict";e.r(s),e.d(s,"pwa_toast",(function(){return o}));var i=e("At8z");const o=class{constructor(t){Object(i.h)(this,t),this.duration=2e3,this.closing=null}hostData(){const t={out:!!this.closing};return null!==this.closing&&(t.in=!this.closing),{class:t}}componentDidLoad(){setTimeout(()=>{this.closing=!1}),setTimeout(()=>{this.close()},this.duration)}close(){this.closing=!0,setTimeout(()=>{this.el.parentNode.removeChild(this.el)},1e3)}__stencil_render(){return Object(i.g)("div",{class:"wrapper"},Object(i.g)("div",{class:"toast"},this.message))}get el(){return Object(i.f)(this)}render(){return Object(i.g)(i.a,this.hostData(),this.__stencil_render())}static get style(){return":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}"}}}}]);