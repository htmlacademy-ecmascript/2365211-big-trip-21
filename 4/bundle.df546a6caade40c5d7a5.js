(()=>{var e={287:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),n=i(645),r=i.n(n)()(a());r.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}"],sourceRoot:""}]);const c=r},766:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),n=i(645),r=i.n(n)()(a());r.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}"],sourceRoot:""}]);const c=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",s=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),s&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),s&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,s,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(s)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);s&&r[f[0]]||(void 0!==n&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=n),i&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=i):f[2]=i),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),n="/*# ".concat(a," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",s="second",a="minute",n="hour",r="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},m=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},v={s:m,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),s=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(s,o),n=i-a<0,r=t.clone().add(s+(n?-1:1),o);return+(-(s+(i-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:r,D:l,h:n,m:a,s,ms:i,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=h;var g=function(e){return e instanceof S},$=function e(t,i,s){var a;if(!t)return _;if("string"==typeof t){var n=t.toLowerCase();y[n]&&(a=n),i&&(y[n]=i,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;y[c]=t,a=c}return!s&&a&&(_=a),a||!s&&_},w=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new S(i)},T=v;T.l=$,T.i=g,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(p);if(s){var a=s[2]-1||0,n=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return T},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var i=w(e);return this.startOf(t)<=i&&i<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,i){return T.u(e)?this[t]:this.set(i,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var i=this,d=!!T.u(t)||t,u=T.p(e),p=function(e,t){var s=T.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return d?s:s.endOf(r)},b=function(e,t){return T.w(i.toDate()[e].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},h=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(h<y?h+7:h)-y;return p(d?v-g:v+(6-g),m);case r:case l:return b(_+"Hours",0);case n:return b(_+"Minutes",1);case a:return b(_+"Seconds",2);case s:return b(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=T.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[r]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[n]=u+"Hours",c[a]=u+"Minutes",c[s]=u+"Seconds",c[i]=u+"Milliseconds",c)[d],b=d===r?this.$D+(t-this.$W):t;if(d===o||d===f){var h=this.clone().set(l,1);h.$d[p](b),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](b);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[T.p(e)]()},m.add=function(i,d){var l,u=this;i=Number(i);var p=T.p(d),b=function(e){var t=w(u);return T.w(t.date(t.date()+Math.round(e*i)),u)};if(p===o)return this.set(o,this.$M+i);if(p===f)return this.set(f,this.$y+i);if(p===r)return b(1);if(p===c)return b(7);var h=(l={},l[a]=e,l[n]=t,l[s]=1e3,l)[p]||1,m=this.$d.getTime()+i*h;return T.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||u;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=T.z(this),n=this.$H,r=this.$m,c=this.$M,o=i.weekdays,d=i.months,f=function(e,i,a,n){return e&&(e[i]||e(t,s))||a[i].slice(0,n)},l=function(e){return T.s(n%12||12,e,"0")},p=i.meridiem||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:T.s(c+1,2,"0"),MMM:f(i.monthsShort,c,d,3),MMMM:f(d,c),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:T.s(n,2,"0"),h:l(1),hh:l(2),a:p(n,r,!0),A:p(n,r,!1),m:String(r),mm:T.s(r,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:a};return s.replace(b,(function(e,t){return t||h[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,l,u){var p,b=T.p(l),h=w(i),m=(h.utcOffset()-this.utcOffset())*e,v=this-h,_=T.m(this,h);return _=(p={},p[f]=_/12,p[o]=_,p[d]=_/3,p[c]=(v-m)/6048e5,p[r]=(v-m)/864e5,p[n]=v/t,p[a]=v/e,p[s]=v/1e3,p)[b]||v,u?_:T.a(_)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=$(e,t,!0);return s&&(i.$L=s),i},m.clone=function(){return T.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),M=S.prototype;return w.prototype=M,[["$ms",i],["$s",s],["$m",a],["$H",n],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,S,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,i=1e3,s=6e4,a=36e5,n=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:n,hours:a,minutes:s,seconds:i,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,i){return new _(e,i,t.$l)},p=function(e){return t.p(e)+"s"},b=function(e){return e<0},h=function(e){return b(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?b(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function b(e,t,i){var s=this;if(this.$d={},this.$l=i,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var n=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var m=b.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(e.$d[i]||0)*f[i]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=h(e/c),e%=c,this.$d.months=h(e/o),e%=o,this.$d.days=h(e/n),e%=n,this.$d.hours=h(e/a),e%=a,this.$d.minutes=h(e/s),e%=s,this.$d.seconds=h(e/i),e%=i,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var s=v(i,"D"),a=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=v(r,"S"),o=e.negative||t.negative||s.negative||a.negative||n.negative||c.negative,d=a.format||n.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+s.format+d+a.format+n.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var i=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return i.replace(r,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,i=p(e);return"milliseconds"===i?t%=1e3:t="weeks"===i?h(t/f[i]):this.$d[i],0===t?0:t},m.add=function(e,t,i){var s;return s=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+s*(i?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},b}();return function(i,s,a){e=a,t=a().$utils(),a.duration=function(e,t){var i=a.locale();return u(e,{$l:i},t)},a.isDuration=l;var n=s.prototype.add,r=s.prototype.subtract;s.prototype.add=function(e,t){return l(e)&&(e=e.asMilliseconds()),n.bind(this)(e,t)},s.prototype.subtract=function(e,t){return l(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function i(e){for(var i=-1,s=0;s<t.length;s++)if(t[s].identifier===e){i=s;break}return i}function s(e,s){for(var n={},r=[],c=0;c<e.length;c++){var o=e[c],d=s.base?o[0]+s.base:o[0],f=n[d]||0,l="".concat(d," ").concat(f);n[d]=f+1;var u=i(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var b=a(p,s);s.byIndex=c,t.splice(c,0,{identifier:l,updater:b,references:1})}r.push(l)}return r}function a(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,a){var n=s(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var c=i(n[r]);t[c].references--}for(var o=s(e,a),d=0;d<n.length;d++){var f=i(n[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}n=o}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var s=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,a&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var n=i.sourceMap;n&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={id:s,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}}const t=e;var s=i(484),a=i.n(s),n=i(646),r=i.n(n);function c(e){return a()(e).format("HH:mm")}function o(e,t){const i=a()(t).diff(e),s=a().duration(i);return s.days()?s.format("DD[d] HH[h] mm[m]"):s.hours()?s.format("HH[h] mm[m]"):s.format("mm[m]")}function d(e,...t){return e.reduce(((e,i,s)=>{const a=t[s-1];return void 0===a?e+i:Array.isArray(a)?e+a.join("")+i:e+a+i}))}a().extend(r()),console.log(o("2023-07-15T13:00Z","2023-08-15T14:00Z"));customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return d`
     <div class="trip-info__main">
       <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

       <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
     </div>

     <p class="trip-info__cost">
       Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
     </p>

     `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return d`
       <div class="trip-filters__filter">
         <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
         <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
       </div>

       <div class="trip-filters__filter">
         <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
         <label class="trip-filters__filter-label" for="filter-future">Future</label>
       </div>

       <div class="trip-filters__filter">
         <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">
         <label class="trip-filters__filter-label" for="filter-present">Present</label>
       </div>

       <div class="trip-filters__filter">
         <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
         <label class="trip-filters__filter-label" for="filter-past">Past</label>
       </div>
     `}});customElements.define("add-button-view",class extends t{createHtml(){return d`
    <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
     `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return d`
       <div class="trip-sort__item  trip-sort__item--day">
         <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">
         <label class="trip-sort__btn" for="sort-day">Day</label>
       </div>

       <div class="trip-sort__item  trip-sort__item--event">
         <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">
         <label class="trip-sort__btn" for="sort-event">Event</label>
       </div>

       <div class="trip-sort__item  trip-sort__item--time">
         <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
         <label class="trip-sort__btn" for="sort-time">Time</label>
       </div>

       <div class="trip-sort__item  trip-sort__item--price">
         <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
         <label class="trip-sort__btn" for="sort-price">Price</label>
       </div>

       <div class="trip-sort__item  trip-sort__item--offer">
         <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">
         <label class="trip-sort__btn" for="sort-offer">Offers</label>
       </div>
     `}});var f=i(379),l=i.n(f),u=i(795),p=i.n(u),b=i(569),h=i.n(b),m=i(565),v=i.n(m),_=i(216),y=i.n(_),g=i(589),$=i.n(g),w=i(766),T={};T.styleTagTransform=$(),T.setAttributes=v(),T.insert=h().bind(null,"head"),T.domAPI=p(),T.insertStyleElement=y(),l()(w.Z,T),w.Z&&w.Z.locals&&w.Z.locals;class S extends t{constructor(){super()}createHtml(){return d`
      <div class="event">
        ${this.createStartDateHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}
      </div>
    `}createStartDateHtml(){const{dateFrom:e}=this.state;return d`
    <time class="event__date" datetime="${e}">${t=e,a()(t).format("MMM D")}</time>

    `;var t}createTypeIconHtml(){const{types:e}=this.state;return d`
      <div class="event__type">
      <img
      class="event__type-icon"
      width="42"
      height="42"
      src="img/icons/${e.find((e=>e.isSelected)).value}.png"
      alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state,i=e.find((e=>e.isSelected)),s=t.find((e=>e.isSelected));return d`
    <h3 class="event__title">${i.value} ${s.name}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return d`
       <div class="event__schedule">
         <p class="event__time">
         <time class="event__start-time" datetime="${e}">${c(e)}</time>

         <time class="event__end-time" datetime="${t}">${c(t)}</time>
         </p>
         <p class="event__duration">${o(e,t)}</p>
       </div>
     `}createPriceHtml(){const{basePrice:e}=this.state;return d`
       <p class="event__price">
       €&nbsp;<span class="event__price-value">${t=e,t.toLocaleString("en")}</span>
       </p>
     `;var t}createOfferListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t.length?d`
       <h4 class="visually-hidden">Offers:</h4>
       <ul class="event__selected-offers">

       ${t.map((e=>d`

           <li class="event__offer">
          <span class="event__offer-title">${e.title}</span>
          +€&nbsp;
          <span class="event__offer-price">20</span>+
        </li>
         `))}
       </ul>
     `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return d`
    <button class="event__favorite-btn ${e?"event__favorite-btn--active":""}" type="button">
         <span class="visually-hidden">Add to favorite</span>
         <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
           <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
         </svg>
       </button>
     `}createOpenButtonHtml(){return d`
       <button class="event__rollup-btn" type="button">
         <span class="visually-hidden">Open event</span>
       </button>
     `}}customElements.define("card-view",S);const M=S;var H=i(287),D={};D.styleTagTransform=$(),D.setAttributes=v(),D.insert=h().bind(null,"head"),D.domAPI=p(),D.insertStyleElement=y(),l()(H.Z,D),H.Z&&H.Z.locals&&H.Z.locals;class Z extends t{constructor(){super()}createHtml(){return d`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>
        <section class="event__details">
          ${this.createOfferListFieldHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){const{types:e}=this.state;return d`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17"
            height="17"
            src="img/icons/${e.find((e=>e.isSelected)).value}.png"
            alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${e.map((e=>d`
              <div class="event__type-item">
                <input
                  id="event-type-${e.value}-1"
                  class="event__type-input  visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}>
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1">
                  ${e.value}
                </label>
              </div>
            `))}
          </fieldset>
        </div>
      </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return d`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${e.find((e=>e.isSelected)).value}
        </label>

        <input
          class="event__input  event__input--destination"
          id="event-destination-1"
          type="text"
          name="event-destination"
          value="${t.find((e=>e.isSelected))?.name}"
          list="destination-list-1">

        <datalist id="destination-list-1">
          ${t.map((e=>d`
            <option value="${e.name}"></option>
          `))}
        </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return d`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input  event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          value="${e}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input
          class="event__input  event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          value="${t}">
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return d`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input
          class="event__input  event__input--price"
          id="event-price-1"
          type="text"
          name="event-price"
          value="${e}">
      </div>
    `}createSubmitButtonHtml(){return d`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return d`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return d`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?d`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${e.map((e=>d`
            <div class="event__offer-selector">
              <input
                class="event__offer-checkbox  visually-hidden"
                id="${e.id}"
                type="checkbox"
                name="event-offer"
                value="${e.id}"
                ${e.isSelected?"checked":""}>

              <label class="event__offer-label" for="${e.id}">
                <span class="event__offer-title">${e.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${e.price}</span>
              </label>
            </div>
          `))}
        </div>
      </section>
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?d`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${t.pictures.map((e=>d`
              <img class="event__photo" src="${e.src}" alt="${e.description}">
            `))}
          </div>
        </div>
      </section>
    `:""}}customElements.define("editor-view",Z);const A=Z;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new A:new M;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const j=class{},x=class extends j{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}},k=JSON.parse('[{"id":"dd03ed9f-6acb-49ad-89c2-3ab012217fd4","base_price":1298,"date_from":"2023-08-09T21:00:00.434Z","date_to":"2023-08-15T08:00:00.434Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":["bb570886-48ab-435d-98df-e3b06df1b43d","20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"7f3c9d26-1fca-45b2-be2a-dbb2b6beccef","base_price":2121,"date_from":"2023-08-06T21:00:00.434Z","date_to":"2023-08-14T06:00:00.434Z","destination":"4e80008d-ca58-434e-b15d-b0bbf1dd4fd7","is_favorite":true,"offers":["dadca605-7082-4e6c-896d-66ee97306d99","5790ed00-e93d-4878-a0fb-30880026e79c"],"type":"flight"},{"id":"66b775f8-8e9a-44cd-bf34-c8355b3089d2","base_price":4713,"date_from":"2023-08-05T21:00:00.434Z","date_to":"2023-08-14T19:00:00.434Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":[],"type":"ship"},{"id":"7958362f-b922-45a4-837b-a4413a93e008","base_price":1816,"date_from":"2023-08-05T21:00:00.434Z","date_to":"2023-08-15T01:00:00.434Z","destination":"2705c7da-8440-4c48-8945-cdcae784371c","is_favorite":true,"offers":["ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"},{"id":"0b0330e0-2d06-494c-8322-5bb3287e0c40","base_price":2655,"date_from":"2023-08-04T21:00:00.434Z","date_to":"2023-08-15T15:00:00.434Z","destination":"4e80008d-ca58-434e-b15d-b0bbf1dd4fd7","is_favorite":false,"offers":["406c9034-183b-4db4-a91e-9e807315be6b","49844cae-ac60-4a94-be42-e9d0c39ae6be"],"type":"ship"},{"id":"2c7fa4d8-9e11-4580-9953-9d804618616a","base_price":3452,"date_from":"2023-08-07T21:00:00.434Z","date_to":"2023-08-15T16:00:00.434Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":["1d84a473-6673-4848-8db9-8b288a326488"],"type":"drive"},{"id":"c36d49cb-f3db-43be-b93f-cef1150d01ee","base_price":7744,"date_from":"2023-08-07T21:00:00.434Z","date_to":"2023-08-15T08:00:00.434Z","destination":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","is_favorite":false,"offers":["c3f6c929-ac4d-4e06-b294-c41e19d1552a"],"type":"restaurant"},{"id":"ed45b53f-0848-44e2-888a-7f2929c2f342","base_price":3467,"date_from":"2023-08-09T21:00:00.434Z","date_to":"2023-08-15T18:00:00.434Z","destination":"6189e06a-4863-44a9-84f3-5b10934f3f4b","is_favorite":true,"offers":["c3f6c929-ac4d-4e06-b294-c41e19d1552a"],"type":"restaurant"},{"id":"20692977-f407-4002-a46d-dd1e17bef211","base_price":2586,"date_from":"2023-08-08T21:00:00.434Z","date_to":"2023-08-14T04:00:00.434Z","destination":"f67e67a7-1f43-4b56-b0df-799c7e59a322","is_favorite":false,"offers":[],"type":"drive"},{"id":"e01e7d87-8556-4046-b88f-9fc68be395c3","base_price":313,"date_from":"2023-08-09T21:00:00.434Z","date_to":"2023-08-15T14:00:00.434Z","destination":"6189e06a-4863-44a9-84f3-5b10934f3f4b","is_favorite":true,"offers":[],"type":"check-in"},{"id":"7243a771-a7e5-49a7-8b07-f2ab71a0470c","base_price":6143,"date_from":"2023-08-01T21:00:00.434Z","date_to":"2023-08-15T00:00:00.434Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":[],"type":"train"},{"id":"2d6ddb2d-14a3-41ce-a4df-c11f5ea930db","base_price":8789,"date_from":"2023-08-03T21:00:00.434Z","date_to":"2023-08-14T05:00:00.436Z","destination":"f67e67a7-1f43-4b56-b0df-799c7e59a322","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"119e37cf-299b-4051-a563-c29845889bee","base_price":1714,"date_from":"2023-08-07T21:00:00.436Z","date_to":"2023-08-14T08:00:00.437Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":["c7837435-e2ce-4de0-93f2-6799c3c3479c","93d24a4c-ac7c-4c0e-8a5b-d60def4d8190","468d8798-8e98-4f22-8b61-bcc548f8c5af","10df1469-3c77-4114-b8ae-71d946f8320c"],"type":"check-in"},{"id":"268a56ab-4657-443f-b5c0-8c756c37101a","base_price":9886,"date_from":"2023-08-04T21:00:00.437Z","date_to":"2023-08-15T07:00:00.437Z","destination":"2705c7da-8440-4c48-8945-cdcae784371c","is_favorite":false,"offers":["80f470ad-a09c-4420-adbf-070ab9db2235","ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"},{"id":"3fb347e8-2861-4ea7-b793-35c3b3010aa4","base_price":9527,"date_from":"2023-08-02T21:00:00.437Z","date_to":"2023-08-15T17:00:00.442Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"374ac089-7866-47ab-b94e-b7ac72988e09","base_price":9845,"date_from":"2023-08-08T21:00:00.442Z","date_to":"2023-08-15T02:00:00.442Z","destination":"5c8f9469-26fb-44b3-8294-0e11da977b96","is_favorite":false,"offers":["1d84a473-6673-4848-8db9-8b288a326488"],"type":"drive"},{"id":"a7d91597-2bac-484b-bbc0-6d2e7578d3fd","base_price":927,"date_from":"2023-08-06T21:00:00.442Z","date_to":"2023-08-15T19:00:00.442Z","destination":"2705c7da-8440-4c48-8945-cdcae784371c","is_favorite":true,"offers":["bb570886-48ab-435d-98df-e3b06df1b43d","20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"62514de2-f816-4d3f-9fe5-4badc19f19d5","base_price":6629,"date_from":"2023-08-10T21:00:00.442Z","date_to":"2023-08-14T03:00:00.442Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":["20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"0abda4d8-d1ec-4ffe-8280-2a9ec56e654e","base_price":5028,"date_from":"2023-08-04T21:00:00.442Z","date_to":"2023-08-14T15:00:00.442Z","destination":"9a997df5-3226-4ce3-9e8d-23bb5802db6e","is_favorite":false,"offers":["ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"},{"id":"3397a5e7-e4f7-40d0-ac31-13c42d0dd252","base_price":3306,"date_from":"2023-08-10T21:00:00.442Z","date_to":"2023-08-15T02:00:00.442Z","destination":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","is_favorite":true,"offers":["e8c0e86e-df6e-4342-8efd-801819d480b5","c7837435-e2ce-4de0-93f2-6799c3c3479c","93d24a4c-ac7c-4c0e-8a5b-d60def4d8190","468d8798-8e98-4f22-8b61-bcc548f8c5af","10df1469-3c77-4114-b8ae-71d946f8320c"],"type":"check-in"},{"id":"bb420136-1002-4ba1-b182-663dccaaba0e","base_price":6866,"date_from":"2023-08-09T21:00:00.442Z","date_to":"2023-08-14T17:00:00.442Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":[],"type":"ship"},{"id":"65529746-ba87-4bd8-a523-3d8bee2b5bd9","base_price":2546,"date_from":"2023-08-02T21:00:00.442Z","date_to":"2023-08-14T19:00:00.442Z","destination":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","is_favorite":true,"offers":["6e435cb8-fe4d-4bcf-940a-576e77df89d9","406c9034-183b-4db4-a91e-9e807315be6b","49844cae-ac60-4a94-be42-e9d0c39ae6be"],"type":"ship"},{"id":"5b88e06c-2819-4188-b117-6372006dd28e","base_price":5626,"date_from":"2023-08-09T21:00:00.442Z","date_to":"2023-08-14T05:00:00.442Z","destination":"5c8f9469-26fb-44b3-8294-0e11da977b96","is_favorite":false,"offers":["20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"a7bbc54e-79c4-4c59-ad7e-12b96c776eea","base_price":8281,"date_from":"2023-08-05T21:00:00.442Z","date_to":"2023-08-14T21:00:00.442Z","destination":"9a997df5-3226-4ce3-9e8d-23bb5802db6e","is_favorite":true,"offers":["c3f6c929-ac4d-4e06-b294-c41e19d1552a"],"type":"restaurant"},{"id":"083823aa-6fa1-4b00-bc16-86930ddea93f","base_price":508,"date_from":"2023-08-06T21:00:00.442Z","date_to":"2023-08-15T06:00:00.442Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":["80f470ad-a09c-4420-adbf-070ab9db2235","ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"}]'),O=JSON.parse('[{"id":"6189e06a-4863-44a9-84f3-5b10934f3f4b","description":"Tokio - famous for its crowded street markets with the best street food in Asia","name":"Tokio","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Tokio a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Tokio with a beautiful old town"}]},{"id":"c5db5b2d-8587-46c3-9a19-f98ac56e992e","description":"Milan - a true asian pearl","name":"Milan","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Milan a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Milan a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Milan middle-eastern paradise"}]},{"id":"5c8f9469-26fb-44b3-8294-0e11da977b96","description":"Naples - middle-eastern paradise","name":"Naples","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Naples with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Naples is a beautiful city"}]},{"id":"79df0484-35f6-478b-acff-e84751c64c1d","description":"Den Haag - with an embankment of a mighty river as a centre of attraction","name":"Den Haag","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Den Haag with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Den Haag in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/16.jpg","description":"Den Haag is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Den Haag a true asian pearl"}]},{"id":"9a997df5-3226-4ce3-9e8d-23bb5802db6e","description":"Den Haag - with an embankment of a mighty river as a centre of attraction","name":"Den Haag","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Den Haag a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Den Haag with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Den Haag is a beautiful city"}]},{"id":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","name":"Tokio"},{"id":"2705c7da-8440-4c48-8945-cdcae784371c","name":"Milan"},{"id":"4e80008d-ca58-434e-b15d-b0bbf1dd4fd7","name":"Rome"},{"id":"f67e67a7-1f43-4b56-b0df-799c7e59a322","description":"Kioto - in a middle of Europe","name":"Kioto","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Kioto middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Kioto in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Kioto middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Kioto with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Kioto is a beautiful city"}]},{"id":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","description":"Nagasaki - middle-eastern paradise","name":"Nagasaki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Nagasaki with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Nagasaki with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Nagasaki with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Nagasaki in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Nagasaki a perfect place to stay with a family"}]}]'),C=JSON.parse('[{"type":"taxi","offers":[{"id":"bb570886-48ab-435d-98df-e3b06df1b43d","title":"Upgrade to a business class","price":180},{"id":"20c7cb79-dce9-4678-acce-96243b06a8b9","title":"Choose the radio station","price":176},{"id":"13ac735d-3569-4566-82d9-e340fc60d461","title":"Choose temperature","price":162},{"id":"04a78f5b-7f46-4627-9e90-7cd080f0345c","title":"Drive quickly, I\'m in a hurry","price":178},{"id":"bd18e931-1915-4b95-8282-9886537c0112","title":"Drive slowly","price":189}]},{"type":"bus","offers":[{"id":"80f470ad-a09c-4420-adbf-070ab9db2235","title":"Infotainment system","price":86},{"id":"ab62038f-6e76-4de3-b066-384f935c8e56","title":"Order meal","price":187},{"id":"5cba973e-4169-4070-94e5-520e07edac15","title":"Choose seats","price":156}]},{"type":"train","offers":[{"id":"948f74bf-b904-4b4e-a9a5-a16afd3eb4c9","title":"Book a taxi at the arrival point","price":52},{"id":"51398caa-9dd5-41db-b699-bf74b693a2b6","title":"Order a breakfast","price":30},{"id":"67a6524d-ff87-4132-9a13-30df68d006c8","title":"Wake up at a certain time","price":30}]},{"type":"flight","offers":[{"id":"195613ed-eccc-4ca3-9cd9-530f0d44413d","title":"Choose meal","price":36},{"id":"95bfc866-a109-42dc-9612-16cfe9657584","title":"Choose seats","price":66},{"id":"e420b2ac-3fae-49cb-a752-00b0370372d1","title":"Upgrade to comfort class","price":74},{"id":"1c032cfd-23e9-4f5d-9e35-130063dff12c","title":"Upgrade to business class","price":70},{"id":"dadca605-7082-4e6c-896d-66ee97306d99","title":"Add luggage","price":183},{"id":"5790ed00-e93d-4878-a0fb-30880026e79c","title":"Business lounge","price":172}]},{"type":"check-in","offers":[{"id":"e8c0e86e-df6e-4342-8efd-801819d480b5","title":"Choose the time of check-in","price":112},{"id":"c7837435-e2ce-4de0-93f2-6799c3c3479c","title":"Choose the time of check-out","price":187},{"id":"93d24a4c-ac7c-4c0e-8a5b-d60def4d8190","title":"Add breakfast","price":114},{"id":"468d8798-8e98-4f22-8b61-bcc548f8c5af","title":"Laundry","price":90},{"id":"10df1469-3c77-4114-b8ae-71d946f8320c","title":"Order a meal from the restaurant","price":72}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"e07734e6-f6d4-4a02-8919-2b2123c59117","title":"Choose meal","price":165},{"id":"cb69cdc5-b1dc-45fb-8477-4f0cbdb21793","title":"Choose seats","price":190},{"id":"5d6794d0-dc40-4785-b733-a348d225a598","title":"Upgrade to comfort class","price":199},{"id":"6e435cb8-fe4d-4bcf-940a-576e77df89d9","title":"Upgrade to business class","price":162},{"id":"406c9034-183b-4db4-a91e-9e807315be6b","title":"Add luggage","price":80},{"id":"49844cae-ac60-4a94-be42-e9d0c39ae6be","title":"Business lounge","price":139}]},{"type":"drive","offers":[{"id":"aaf4e0c9-8374-4cf8-9ad6-fab7a87f1cb4","title":"With automatic transmission","price":165},{"id":"1d84a473-6673-4848-8db9-8b288a326488","title":"With air conditioning","price":101}]},{"type":"restaurant","offers":[{"id":"f394f949-acb7-429c-89d6-d2a2158c7676","title":"Choose live music","price":112},{"id":"c3f6c929-ac4d-4e06-b294-c41e19d1552a","title":"Choose VIP area","price":63}]}]'),E=class{constructor(e,t){this.view=e,this.model=t,window.queueMicrotask((()=>this.updateView()))}updateView(){}},F=class extends E{constructor(...e){super(...e)}updateView(){this.view.render()}},B=class extends E{constructor(...e){super(...e)}updateView(){this.view.render()}},L=class extends E{constructor(...e){super(...e)}updateView(){this.view.render()}},N=class extends E{constructor(...e){super(...e)}updateView(){this.view.render()}},Y=class extends E{constructor(...e){super(...e)}updateView(){const e=this.model.getPoints(),t=this.model.getDestinations(),i=this.model.getOfferGroups();console.log(e,t,i);const s=e.map(((e,s)=>{const{offers:a}=i.find((t=>t.type===e.type));return{id:e.id,types:i.map((t=>({value:t.type,isSelected:t.type===e.type}))),destinations:t.map((t=>({...t,isSelected:t.id===e.destinationId}))),dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offers:a.map((t=>({...t,isSelected:e.offerIds?.includes(t.id)}))),isFavorite:e.isFavorite,isEditable:5===s}}));this.view.setState({items:s})}},P=new class extends j{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.points=k,this.destinations=O,this.offerGroups=C}getPoints(){return this.points.map((e=>new x(e)))}getDestinations(){return structuredClone(this.destinations)}getOfferGroups(){return structuredClone(this.offerGroups)}};P.ready().then((()=>{new F(document.querySelector("brief-view"),P),new B(document.querySelector("filter-view"),P),new L(document.querySelector("add-button-view"),P),new N(document.querySelector("sort-view"),P),new Y(document.querySelector("list-view"),P)}))})()})();
//# sourceMappingURL=bundle.df546a6caade40c5d7a5.js.map