/*{"k":"0.15.0","version":"11125407","mac":"1:58f8702c0bfb70297328382937c23a4c094efe5527d6f90d47d6249a1f0a29fc","created":"2012-05-28T18:39:15Z"}*/
;(function(window,document,undefined){
var g=!0,j=null,k=!1;function l(a){return function(c){this[a]=c}}function m(a){return function(){return this[a]}}var n;function o(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}}function p(a){this.q=a;this.T=void 0}n=p.prototype;
n.createElement=function(a,c,b){a=this.q.createElement(a);if(c)for(var d in c)if(c.hasOwnProperty(d))if("style"==d){var e=a,f=c[d];if(void 0===this.T){var h=this.q.createElement("p");h.innerHTML='<a style="top:1px;">w</a>';this.T=/top/.test(h.getElementsByTagName("a")[0].getAttribute("style"))}this.T?e.setAttribute("style",f):e.style.cssText=f}else a.setAttribute(d,c[d]);b&&a.appendChild(this.q.createTextNode(b));return a};
n.insertInto=function(a,c){var b=this.q.getElementsByTagName(a)[0];b||(b=document.documentElement);return b&&b.lastChild?(b.insertBefore(c,b.lastChild),g):k};n.whenBodyExists=function(a){function c(){document.body?a():setTimeout(c,0)}c()};n.removeElement=function(a){return a.parentNode?(a.parentNode.removeChild(a),g):k};n.createCssLink=function(a){return this.createElement("link",{rel:"stylesheet",href:a})};
n.appendClassName=function(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")};n.removeClassName=function(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")};n.hasClassName=function(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return g;return k};
function q(a,c,b,d,e,f,h){this.R=a;this.Oa=c;this.xa=b;this.wa=d;this.Ia=e;this.Ha=f;this.va=h}n=q.prototype;n.getName=m("R");n.getVersion=m("Oa");n.getEngine=m("xa");n.getEngineVersion=m("wa");n.getPlatform=m("Ia");n.getPlatformVersion=m("Ha");n.getDocumentMode=m("va");function s(a,c){this.j=a;this.u=c}var aa=new q("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",void 0);
s.prototype.parse=function(){var a;if(-1!=this.j.indexOf("MSIE"))if(a=t(this.j,/(MSIE [\d\w\.]+)/,1),""!=a){var c=a.split(" ");a=c[0];c=c[1];a=new q(a,c,a,c,u(this),v(this),w(this.u),6<=x(c))}else a=new q("MSIE","Unknown","MSIE","Unknown",u(this),v(this),w(this.u));else if(-1!=this.j.indexOf("Opera"))a:{var c=a="Unknown",b=t(this.j,/(Presto\/[\d\w\.]+)/,1);""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.j.indexOf("Gecko")&&(a="Gecko"),b=t(this.j,/rv:([^\)]+)/,1),""!=b&&(c=b));if(-1!=this.j.indexOf("Version/")&&
(b=t(this.j,/Version\/([\d\.]+)/,1),""!=b)){a=new q("Opera",b,a,c,u(this),v(this),w(this.u),10<=x(b));break a}b=t(this.j,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new q("Opera",b,a,c,u(this),v(this),w(this.u),10<=x(b)):new q("Opera","Unknown",a,c,u(this),v(this),w(this.u))}else if(-1!=this.j.indexOf("AppleWebKit")){a=u(this);c=v(this);b=t(this.j,/AppleWebKit\/([\d\.]+)/,1);""==b&&(b="Unknown");var d="Unknown";-1!=this.j.indexOf("Chrome")||-1!=this.j.indexOf("CrMo")?d="Chrome":-1!=this.j.indexOf("Safari")?
d="Safari":-1!=this.j.indexOf("AdobeAIR")&&(d="AdobeAIR");var e="Unknown";-1!=this.j.indexOf("Version/")?e=t(this.j,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=t(this.j,/(Chrome|CrMo)\/([\d\.]+)/,2):"AdobeAIR"==d&&(e=t(this.j,/AdobeAIR\/([\d\.]+)/,1));"AdobeAIR"==d?(t(e,/\d+\.(\d+)/,1),2<x(e)||x(e)):(t(b,/\d+\.(\d+)/,1),526<=x(b)||x(b));a=new q(d,e,"AppleWebKit",b,a,c,w(this.u))}else if(-1!=this.j.indexOf("Gecko")){c=a="Unknown";d=k;-1!=this.j.indexOf("Firefox")?(a="Firefox",b=t(this.j,/Firefox\/([\d\w\.]+)/,
1),""!=b&&(d=t(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=x(b)&&5<=parseInt(d,10))):-1!=this.j.indexOf("Mozilla")&&(a="Mozilla");b=t(this.j,/rv:([^\)]+)/,1);if(""==b)b="Unknown";else if(!d){var d=x(b),e=parseInt(t(b,/\d+\.(\d+)/,1),10),f=parseInt(t(b,/\d+\.\d+\.(\d+)/,1),10);1<d||1==d&&9<e||1==d&&9==e&&2<=f||b.match(/1\.9\.1b[123]/)!=j||b.match(/1\.9\.1\.[\d\.]+/)}a=new q(a,c,"Gecko",b,u(this),v(this),w(this.u))}else a=aa;return a};
function u(a){var c=t(a.j,/(iPod|iPad|iPhone|Android)/,1);if(""!=c)return c;a=t(a.j,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}function v(a){var c=t(a.j,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=t(a.j,/(iPhone )?OS ([\d_]+)/,2)))return c;return(a=t(a.j,/Linux ([i\d]+)/,1))?a:"Unknown"}function x(a){a=t(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function t(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}
function w(a){if(a.documentMode)return a.documentMode}function ba(a,c,b){this.c=a;this.l=c;this.V=b;this.o="wf";this.m=new y("-")}function A(a){a.c.removeClassName(a.l,a.m.k(a.o,"loading"));a.c.hasClassName(a.l,a.m.k(a.o,"active"))||a.c.appendClassName(a.l,a.m.k(a.o,"inactive"));C(a,"inactive")}function C(a,c,b,d){if(a.V[c])a.V[c](b,d)}function D(a,c,b,d,e){this.c=a;this.A=c;this.C=b;this.s=d;this.G=e;this.L=0;this.sa=this.ga=k}
D.prototype.watch=function(a,c,b,d,e){for(var f=a.length,h=0;h<f;h++){var i=a[h];c[i]||(c[i]=["n4"]);this.L+=c[i].length}e&&(this.ga=e);for(h=0;h<f;h++)for(var i=a[h],e=c[i],B=b[i],r=0,G=e.length;r<G;r++){var V=e[r],z=this.A,H=i,W=V;z.c.appendClassName(z.l,z.m.k(z.o,H,W,"loading"));C(z,"fontloading",H,W);z=o(this,this.ya);H=o(this,this.za);(new d(z,H,this.c,this.C,this.s,this.G,i,V,B)).start()}};
D.prototype.ya=function(a,c){var b=this.A;b.c.removeClassName(b.l,b.m.k(b.o,a,c,"loading"));b.c.removeClassName(b.l,b.m.k(b.o,a,c,"inactive"));b.c.appendClassName(b.l,b.m.k(b.o,a,c,"active"));C(b,"fontactive",a,c);this.sa=g;E(this)};D.prototype.za=function(a,c){var b=this.A;b.c.removeClassName(b.l,b.m.k(b.o,a,c,"loading"));b.c.hasClassName(b.l,b.m.k(b.o,a,c,"active"))||b.c.appendClassName(b.l,b.m.k(b.o,a,c,"inactive"));C(b,"fontinactive",a,c);E(this)};
function E(a){0==--a.L&&a.ga&&(a.sa?(a=a.A,a.c.removeClassName(a.l,a.m.k(a.o,"loading")),a.c.removeClassName(a.l,a.m.k(a.o,"inactive")),a.c.appendClassName(a.l,a.m.k(a.o,"active")),C(a,"active")):A(a.A))}
function F(a,c,b,d,e,f,h,i,B){this.ta=a;this.Ca=c;this.c=b;this.C=d;this.s=e;this.G=f;this.Ga=new I;this.Ba=new J;this.aa=h;this.$=i;this.Aa=B||"BESbswy";this.ia=K(this,"arial,'URW Gothic L',sans-serif");this.ja=K(this,"Georgia,'Century Schoolbook L',serif");this.ea=this.ia;this.fa=this.ja;this.na=L(this,"arial,'URW Gothic L',sans-serif");this.oa=L(this,"Georgia,'Century Schoolbook L',serif")}F.prototype.start=function(){this.Ma=this.G();this.W()};
F.prototype.W=function(){var a=this.C.O(this.na),c=this.C.O(this.oa);(this.ia!=a||this.ja!=c)&&this.ea==a&&this.fa==c?ca(this,this.ta):5E3<=this.G()-this.Ma?ca(this,this.Ca):(this.ea=a,this.fa=c,da(this))};function da(a){a.s(function(a,b){return function(){b.call(a)}}(a,a.W),25)}function ca(a,c){a.c.removeElement(a.na);a.c.removeElement(a.oa);c(a.aa,a.$)}function K(a,c){var b=L(a,c,g),d=a.C.O(b);a.c.removeElement(b);return d}
function L(a,c,b){c=a.c.createElement("span",{style:ea(a,c,a.$,b)},a.Aa);a.c.insertInto("body",c);return c}function ea(a,c,b,d){b=a.Ba.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.Ga.quote(a.aa)+",")+c+";"+b}function y(a){this.Ea=a||"-"}y.prototype.k=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Ea)};
function I(){this.ma="'"}I.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.ma+d+this.ma)}return c.join(",")};function J(){this.ka=fa;this.D=ga}var fa=["font-style","font-weight"],ga={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};
function ha(a,c,b){this.Da=a;this.Ja=c;this.D=b}ha.prototype.expand=function(a,c){for(var b=0;b<this.D.length;b++)if(c==this.D[b][0]){a[this.Da]=this.Ja+":"+this.D[b][1];break}};J.prototype.expand=function(a){if(2!=a.length)return j;for(var c=[j,j],b=0,d=this.ka.length;b<d;b++){var e=this.ka[b];(new ha(b,e,this.D[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":j};function M(a,c){this.q=a;this.j=c}M.prototype=p.prototype;M.prototype.isHttps=function(){return"https:"==this.q.location.protocol};
M.prototype.getHostName=function(){return this.q.location.hostname};M.prototype.loadScript=function(a,c){var b=this.q.getElementsByTagName("head")[0];if(b){var d=this.q.createElement("script");d.src=a;var e=k;d.onload=d.onreadystatechange=function(){if(!e&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))e=g,c&&c(),d.onload=d.onreadystatechange=j,"HEAD"==d.parentNode.tagName&&b.removeChild(d)};b.appendChild(d)}};
M.prototype.createStyle=function(a){var c=this.q.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));return c};function ia(a,c){this.Ka=a;this.Y=c}function ja(a){for(var c=a.Ka.join(","),b=[],d=0;d<a.Y.length;d++){var e=a.Y[d];b.push(e.name+":"+e.value+";")}return c+"{"+b.join("")+"}"}function N(a,c,b){this.B=a;this.F=c;this.v=b;this.ba={};this.Z={}}
N.prototype.w=function(a){return a?(this.ba[a.getStylesheetFormatId()]||this.F).slice(0):this.F.slice(0)};N.prototype.getId=m("v");function ka(a,c,b){for(var d=[],e=a.B.split(",")[0].replace(/"|'/g,""),f=a.w(),h,i=[],B={},r=0;r<f.length;r++)h=f[r],0<h.length&&!B[h]&&(B[h]=g,i.push(h));b=b.la?b.la(e,i,d):i;c=c.getStylesheetFormatId();a.ba[c]=b;a.Z[c]=d}N.prototype.watch=function(a,c,b){var d=[],e={};la(this,c,d,e);a(d,e,b)};
function la(a,c,b,d){b.push(a.B);d[a.B]=a.w(c);a=a.Z[c.getStylesheetFormatId()]||[];for(c=0;c<a.length;c++){for(var e=a[c],f=e.B,h=k,i=0;i<b.length;i++)b[i]==f&&(h=g);h||(b.push(f),d[f]=e.w())}}function ma(a,c){this.B=a;this.F=c}ma.prototype.w=m("F");function O(a,c,b){this.La=a;this.P=c;this.pa=b}O.prototype.buildUrl=function(a,c){var b=this.La&&a?"https:":"http:",d="function"==typeof this.P?this.P(b):this.P;return b+"//"+d+("/"==this.pa?"":this.pa)+c};
function na(a){var c=new Image(1,1);c.src=a;c.onload=function(){c.onload=j}}function P(a,c,b){this.v=a;this.ra=c;this.da=b}P.prototype.getId=m("v");P.prototype.getStylesheetFormatId=m("ra");P.prototype.isUserAgent=function(a){return this.da?this.da(a.getName(),a.getVersion(),a.getEngine(),a.getEngineVersion(),a.getPlatform(),a.getPlatformVersion(),a.getDocumentMode()):k};P.prototype.buildCssUrl=function(a,c,b,d){b="/"+b+"-"+this.ra+".css";d&&(b+="?"+d);return c.buildUrl(a,b)};
function Q(){this.t=[]}Q.prototype.addBrowser=function(a){this.getBrowserById(a.getId())||this.t.push(a)};Q.prototype.getBrowserById=function(a){for(var c=0;c<this.t.length;c++){var b=this.t[c];if(a===b.getId())return b}return j};Q.prototype.findBrowser=function(a){for(var c=0;c<this.t.length;c++){var b=this.t[c];if(b.isUserAgent(a))return b}return j};Q.prototype.addBrowsersToBrowserSet=function(a){for(var c=0;c<this.t.length;c++)a.addBrowser(this.t[c])};
function oa(a){this.v=a;this.I=new Q;this.n=[];this.K=[];this.M=this.X=this.z=j}n=oa.prototype;n.getId=m("v");n.setSecurityToken=l("qa");n.setNestedUrl=l("ha");n.setFontFilterSet=l("M");n.setKitOptions=l("Q");n.addBrowser=function(a){this.I.addBrowser(a)};n.addFontFamily=function(a){this.n.push(a)};n.addCssRule=function(a){this.K.push(a)};n.supportsBrowser=function(a){return!!this.I.getBrowserById(a.getId())};n.addBrowsersToBrowserSet=function(a){this.I.addBrowsersToBrowserSet(a)};
n.init=function(a){for(var c=[],b=0;b<this.K.length;b++)c.push(ja(this.K[b]));a.insertInto("head",a.createStyle(c.join("")))};
n.load=function(a,c,b,d){if(this.M)for(var e=pa(this.M,b.getStylesheetFormatId()),f=0;f<this.n.length;f++)ka(this.n[f],b,e);if(this.z&&this.X){this.z.ua(new qa(b.getStylesheetFormatId()));f=new ra(a,b,this.n);e=sa(this.X,b.getStylesheetFormatId(),f);for(f=0;f<e.length;f++)this.z.ua(e[f]);this.z.Qa(this.qa);f=this.z.buildUrl(a.isHttps(),this.ha)}else f=b.buildCssUrl(a.isHttps(),this.ha,this.v,this.qa);a.insertInto("head",a.createCssLink(f));c&&a.whenBodyExists(function(a,b,c,e){return function(){for(var d=
0;d<a.n.length;d++)a.n[d].watch(b,c,e&&d==a.n.length-1)}}(this,c,b,d))};n.collectFontFamilies=function(a,c,b){for(var d=0;d<this.n.length;d++)la(this.n[d],a,c,b)};n.performOptionalActions=function(a,c,b){this.Q&&b.whenBodyExists(function(a,b,c,h){return function(){var b=a.Q;if(b.S){var e=b.S.Pa(window,h.getHostName());na(b.S.k(h.isHttps(),e))}e=a.Q;b=a.v;e.U&&(e=e.U.k(b,c,h),e.setAttribute("id","typekit-badge-"+b),h.insertInto("body",e))}}(this,a,c,b))};
function R(a,c,b,d,e){this.Fa=a;this.c=c;this.j=b;this.l=d;this.s=e;this.p=[]}R.prototype.H=function(a){this.p.push(a)};R.prototype.load=function(a,c){var b=a,d=c||{};if("string"==typeof b)b=[b];else if(!b||!b.length)d=b||{},b=[];if(b.length)for(var e=this,f=b.length,h=0;h<b.length;h++)ta(this,b[h],function(){0==--f&&ua(e,d)});else ua(this,d)};function ta(a,c,b){a.c.loadScript(a.Fa.buildUrl(a.c.isHttps(),"/"+c+".js"),b)}
function ua(a,c){c.userAgent&&(a.j=(new s(c.userAgent,document)).parse());for(var b=new ba(a.c,a.l,c),d=new Q,e=0;e<a.p.length;e++)a.p[e].addBrowsersToBrowserSet(d);d=d.findBrowser(a.j);for(e=0;e<a.p.length;e++)a.p[e].init(a.c);d?(b.c.appendClassName(b.l,b.m.k(b.o,"loading")),C(b,"loading"),va(a,d,b)):A(b);a.p=[]}
function va(a,c,b){function d(a,b,c){e.watch(a,b,{},F,c)}for(var e=new D(a.c,b,{O:function(a){return a.offsetWidth}},a.s,function(){return+new Date}),b=0;b<a.p.length;b++){var f=a.p[b];f.supportsBrowser(c)&&(f.load(a.c,d,c,b==a.p.length-1),f.performOptionalActions(window,a.j,a.c))}}function S(a,c,b){this.ca=a;this.c=c;this.s=b;this.p=[]}S.prototype.H=function(a){this.p.push(a)};
S.prototype.load=function(){var a=this.ca.__webfonttypekitmodule__;if(a)for(var c=0;c<this.p.length;c++){var b=this.p[c],d=a[b.getId()];if(d){var e=this.c,f=this.s;d(function(a,c,d){var r=new Q;b.addBrowsersToBrowserSet(r);var c=[],G={};if(r=r.findBrowser(a))b.init(e),b.load(e,j,r,f),b.collectFontFamilies(r,c,G),b.performOptionalActions(window,a,e,f);d(!!r,c,G)})}}};function T(a,c){this.R=a;this.la=c}T.prototype.getName=m("R");function wa(a){var c=U;xa(c,a.getName())||c.N.push(a)}
function xa(a,c){for(var b=0;b<a.N.length;b++){var d=a.N[b];if(c===d.getName())return d}return j}function pa(a,c){var b=a.r[c];return b?xa(a,b):j}function sa(a,c,b){for(var d=[],a=a.Ra[c]||[],c=0;c<a.length;c++){var e;a:switch(a[c]){case "observeddomain":e=new ya(b.c);break a;case "fontmask":e=new za(b.J,b.n);break a;default:e=j}e&&d.push(e)}return d}function ra(a,c,b){this.c=a;this.J=c;this.n=b}function qa(a){this.Na=a}qa.prototype.toString=m("Na");function ya(a){this.c=a}
ya.prototype.toString=function(){var a;a=this.c.getHostName?this.c.getHostName():document.location.hostname;return encodeURIComponent(a)};function za(a,c){this.J=a;this.n=c}
za.prototype.toString=function(){for(var a=[],c=0;c<this.n.length;c++)for(var b=this.n[c],d=b.w(),b=b.w(this.J),e=0;e<d.length;e++){var f;a:{for(f=0;f<b.length;f++)if(d[e]===b[f]){f=g;break a}f=k}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");c=[];for(d=a.length;0<d;d-=4)b=a.slice(0>d-4?0:d-4,d),c.unshift(parseInt(b,2).toString(16));return c.join("")};var X=new Q;
X.addBrowser(new P("safariany-android3plus","f",function(a,c,b,d,e,f){if(!(c=k))c=/([0-9]+).([0-9]+)/.exec(f),"Android"==e&&c?(f=parseInt(c[1],10),c=parseInt(c[2],10),c=3==f&&1<=c||3<f):c=k;return!c?k:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?g:k}));
X.addBrowser(new P("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,e,f,h){var i;i=(i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):k}(a,c,b,d,e,f,h))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==
d&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i&&!("Ubuntu"==e||"Linux"==e?g:k)?k:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c){var e=parseFloat(c[1]),d=parseInt(c[2],10),c=parseInt(c[3],10);if(!(6<=e)&&(4<e||4==e&&249<d||4==e&&249==d&&4<=c))return g}}return k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("ff36plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,e,f,h){var i;i=(i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):k}(a,c,b,d,e,f,h))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==
d&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i&&!("Ubuntu"==e||"Linux"==e?g:k)?k:function(a,b,c,d){return"Gecko"==c&&(b=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(d))?(a=parseFloat(b[1]),b=parseInt(b[3],10),1.9<a||1.9<=a&&1<b):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("ie6to8-win2003-win7plus-winvista-winxp","i",function(a,c,b,d,e,f,h){var i;i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):k}(a,c,b,d,e,f,h);return!i?k:function(a,b,c,e,d,f,h){if("MSIE"==a)return(a=/([0-9]+.[0-9]+)/.exec(b))?6<=parseFloat(a[1])&&(void 0===h||9>h):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("chrome6plus-android3plus-chromeos-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,e,f,h){var i;i=(i=(i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):k}(a,c,b,d,e,f,h))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],
10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?g:k}(a,c,b,d,e,f,h))||("Ubuntu"==e||"Linux"==e?g:k)||function(a,b,c,e,d,f){a=/([0-9]+).([0-9]+)/.exec(f);return"Android"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),3==d&&1<=a||3<d):k}(a,c,b,d,e,f,h);return!(i||"CrOS"==e)?k:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return g}}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("safari3to5-osx","b",function(a,c,b,d,e,f,h){var i;i=k||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i?k:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("ff35-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,e,f,h){var i;i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):k}(a,c,b,d,e,f,h);return!i&&!("Ubuntu"==e||"Linux"==e?g:k)?k:function(a,b,c,e){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(e)&&!a.test(e)):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("safariany-android2to3-ipad4-iphone4","a",function(a,c,b,d,e,f,h){var i;i=(i=(i=k||function(a,b,c,e,d,f){a=/([0-9]+).([0-9]+)/.exec(f);return"Android"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),2==d&&2<=a||3==d&&1>a):k}(a,c,b,d,e,f,h))||function(a,b,c,d,e,f){return"iPad"==e&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):k}(a,c,b,d,e,f,h))||function(a,b,c,e,d,f){if("iPhone"==d||"iPod"==d)if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],
10),4==parseInt(a[1],10)&&2<=b;return k}(a,c,b,d,e,f,h);return!i?k:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?g:k}));
X.addBrowser(new P("opera11plus-linux-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,e,f,h){var i;i=(i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):k}(a,c,b,d,e,f,h))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):
"Macintosh"==d&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i&&!("Ubuntu"==e||"Linux"==e?g:k)?k:"Opera"==a?11.1<=parseFloat(c):k}));
X.addBrowser(new P("safari3to5-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,e,f,h){var i;i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):k}(a,c,b,d,e,f,h);return!i?k:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("ff35-osx","b",function(a,c,b,d,e,f,h){var i;i=k||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i?k:function(a,b,c,d){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(d)&&!a.test(d)):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("safari5plus-osx-win2003-win7plus-winvista-winxp","d",function(a,c,b,d,e,f,h){var i;i=(i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):k}(a,c,b,d,e,f,h))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==
e&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i?k:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?534.5<=parseFloat(a[1]):k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("air-osx","b",function(a,c,b,d,e,f,h){var i;i=k||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i?k:function(a,b){if("AdobeAIR"==a){var c=/([0-9]+.[0-9]+)/.exec(b);if(c)return 2.5<=parseFloat(c[1])}return k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("air-linux-win","a",function(a,c,b,d,e,f){if(k||("Windows"==e&&"Unknown"==f?g:k)||("Ubuntu"==e||"Linux"==e?g:k))a:{if("AdobeAIR"==a&&(a=/([0-9]+.[0-9]+)/.exec(c))){a=2.5<=parseFloat(a[1]);break a}a=k}else a=k;return a}));
X.addBrowser(new P("opera10-linux-win2003-win7plus-winvista-winxp","a",function(a,c,b,d,e,f,h){var i;i=k||("Windows"==e&&"5.1"==f?g:k)||("Windows"==e&&"5.2"==f?g:k)||("Windows"==e&&"6.0"==f?g:k)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):k}(a,c,b,d,e,f,h);return!i&&!("Ubuntu"==e||"Linux"==e?g:k)?k:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return k}(a,c,b,d,e,f,h)}));
X.addBrowser(new P("safariany-ipad5plus-iphone5plus","d",function(a,c,b,d,e,f,h){var i;i=(i=k||function(a,b,c,d,e,f){return"iPad"==e?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):k:k}(a,c,b,d,e,f,h))||function(a,b,c,d,e,f){return"iPhone"==e||"iPod"==e?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):k:k}(a,c,b,d,e,f,h);return!i?k:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?g:k}));
X.addBrowser(new P("ie9plus-win7plus-winvista","d",function(a,c,b,d,e,f,h){if(!(c=k))b=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==e&&b?(c=parseInt(b[1],10),b=parseInt(b[2],10),c=6<c||6==c&&1<=b):c=k;a=c||("Windows"==e&&"6.0"==f?g:k)?"MSIE"==a?9<=h:void 0:k;return a}));
X.addBrowser(new P("opera10-osx","b",function(a,c,b,d,e,f,h){var i;i=k||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?g:k}(a,c,b,d,e,f,h);return!i?k:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return k}(a,c,b,d,e,f,h)}));var U=new function(){this.N=[];this.r={}};wa(new T("AllFonts",function(a,c){return c}));
wa(new T("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var d=0;d<c.length;d++){var e=c[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;b.push(new ma(f,[e]))}a={};for(e=0;e<c.length;e++)b=c[e],d=b.charAt(1),(a[d]||(a[d]=[])).push(b);b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<b.length;e++)for(var f=b[e],h=0;h<f.length;h++){var i=f[h];if(a[i]){d=d.concat(a[i]);break}}b=d;d={};a=[];for(e=0;e<b.length;e++)f=b[e],d[f]||(d[f]=g,a.push(f));b=[];for(d=0;d<c.length;d++){e=c[d];
for(f=0;f<a.length;f++)h=a[f],h==e&&b.push(h)}return b}));U.r.a="AllFonts";U.r.b="AllFonts";U.r.d="AllFonts";U.r.e="AllFonts";U.r.f="AllFonts";U.r.g="AllFonts";U.r.h="AllFonts";U.r.i="DefaultFourFontsWithSingleFvdFamilies";window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var Aa=new O(g,"use.typekit.com","/"),Ba=(new s(navigator.userAgent,document)).parse(),Ca=new M(document,Ba),Da=function(a,c){setTimeout(a,c)},Y=new R(Aa,Ca,Ba,document.documentElement,Da),Z=new S(window,Ca,Da);window.Typekit.load=function(){Y.load.apply(Y,arguments)};window.Typekit.addKit=function(){Y.H.apply(Y,arguments)}}var Ea,Fa,$;Ea=new O(g,"use.typekit.com","/k");Fa=new function(){this.S=this.U=j};$=new oa("uao6mzv");$.setSecurityToken("3bb2a6e53c9684ffdc9a9bf51b5b2a629d347ed6863d344d206715ed73b81dd6c4c5b0e3082475a243fbd54229260c81bc3f2bbc97af1dd97870f66d7b64e43fb99a86d3dd7ca451990cdfeae50b76a504585841a9b0efd0c5a827dd6a3d2f7f3cd8539d3850ec1ad41f3726966d0b461d7661add1967d40b1e76742a47b02472604b3");
$.setNestedUrl(Ea);$.setKitOptions(Fa);$.addFontFamily(new N("adelle",["n3","i3","n4","n7","i7"]));$.addFontFamily(new N("pragmatica-web-condensed",["n4"]));$.addCssRule(new ia([".tk-adelle"],[{value:'"adelle","Helvetica",sans-serif',name:"font-family"}]));$.addCssRule(new ia([".tk-pragmatica-web-condensed"],[{value:'"pragmatica-web-condensed",sans-serif',name:"font-family"}]));$.addBrowser(X.getBrowserById("air-linux-win"));$.addBrowser(X.getBrowserById("air-osx"));$.addBrowser(X.getBrowserById("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp"));
$.addBrowser(X.getBrowserById("chrome6plus-android3plus-chromeos-linux-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("ff35-linux-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("ff35-osx"));$.addBrowser(X.getBrowserById("ff36plus-linux-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("ie6to8-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("ie9plus-win7plus-winvista"));$.addBrowser(X.getBrowserById("opera10-linux-win2003-win7plus-winvista-winxp"));
$.addBrowser(X.getBrowserById("opera10-osx"));$.addBrowser(X.getBrowserById("opera11plus-linux-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("safari3to5-osx"));$.addBrowser(X.getBrowserById("safari3to5-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("safari5plus-osx-win2003-win7plus-winvista-winxp"));$.addBrowser(X.getBrowserById("safariany-android2to3-ipad4-iphone4"));$.addBrowser(X.getBrowserById("safariany-android3plus"));$.addBrowser(X.getBrowserById("safariany-ipad5plus-iphone5plus"));
$.setFontFilterSet(U);Z&&Z.ca.__webfonttypekitmodule__?(Z.H($),Z.load()):window.Typekit.addKit($);
})(this,document);
window.Typekit.config={"p":"//p.typekit.net/p.gif?s=1&k=uao6mzv&ht=tk&h={host}&f=2002.6862.2001.6867.6866.10900&a=597360&_={_}"};
;(function(window,document,undefined){
function g(a,b){this.q=a;this.f=b||a;this.c=this.f.document}g.prototype.createElement=function(a,b,d){a=this.c.createElement(a);if(b)for(var c in b)b.hasOwnProperty(c)&&("style"==c?a.style.cssText=b[c]:a.setAttribute(c,b[c]));d&&a.appendChild(this.c.createTextNode(d));return a};function k(a){return a.f.location.hostname||a.q.location.hostname}function m(a){this.n=a}m.prototype.toString=function(){return encodeURIComponent(k(this.n))};function p(a,b){this.e=b}
p.prototype.toString=function(){for(var a=[],b=0;b<this.e.length;b++)for(var d=this.e[b],c=d.o,d=d.o,f=0;f<c.length;f++){var e;a:{for(e=0;e<d.length;e++)if(c[f]===d[e]){e=!0;break a}e=!1}a.push(e?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(c=a.length;0<c;c-=4)b.unshift(parseInt(a.slice(0>c-4?0:c-4,c),2).toString(16));return b.join("")};function q(a){this.t=a}
q.prototype.m=function(a){var b=a||{};a=this.t.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,c,f){return f&&b[c]?"/"+b[c].join("/"):b[c]||""});a.match(/^\/\//)&&(a="https:"+a);return a.replace(/\/*\?*($|\?)/,"$1")};function r(a,b,d,c,f,e,h){this.r=a;this.p=b;this.b=d||[];this.g=c||null;this.s=f||null;this.version=e||null;this.h=h||null}
r.prototype.send=function(a,b,d){var c=new q("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),f=encodeURIComponent((window.__adobewebfontsappname__||this.h||"").toString().substr(0,20));a=encodeURIComponent(k(a));var e=[],h=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var h=window.Typekit.fonts,l=0;l<this.b.length;l++){for(var u=!1,n=0;n<h.length;n++)if(this.b[l]===h[n]){u=
!0;break}u||(e.push(this.b[l]),h.push(this.b[l]))}e.length&&s(c.m({service:this.r,token:this.s,app:f,hosting:this.p,host:a,variations:e.join("."),account:this.g,stylesheetLoadTime:b,fontLoadTime:d,version:this.version,_:(+new Date).toString()}))};function s(a){var b=new Image(1,1),d=!1;b.src=a;b.onload=function(){d=!0;b.onload=null};setTimeout(function(){d||(b.src="about:blank",b.onload=null)},3E3)}var t={};t.a=t.d=t.l=t.j=function(){return[]};t.i=function(a,b,d){return[new m(a),new p(0,d)]};
t.k=function(a){return[new m(a)]};window.Typekit||(window.Typekit={});var v=window.Typekit.config,w=new g(window),x=new r(v.ps,v.ht,v.fi,v.a,v.kt,v.js,v.l),y=!1,z=window.Typekit.load;window.Typekit.load=function(){z&&z.apply(window.Typekit,arguments);if(!y)for(var a=document.getElementsByTagName("link"),b=0;b<a.length;b++){var d=a[b].getAttribute("href");if(d&&0<=d.indexOf("use.typekit")){x.send(w);y=!0;break}}};
})(this,document);
