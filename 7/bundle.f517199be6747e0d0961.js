(()=>{var e={287:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}"],sourceRoot:""}]);const c=r},766:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}"],sourceRoot:""}]);const c=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);i&&r[f[0]]||(void 0!==n&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=n),s&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=s):f[2]=s),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],s=e[3];if(!s)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),n="/*# ".concat(a," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,s="millisecond",i="second",a="minute",n="hour",r="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||t[0])+"]"}},m=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},v={s:m,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),a=s%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(a,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),a=t.clone().add(i,o),n=s-a<0,r=t.clone().add(i+(n?-1:1),o);return+(-(i+(s-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:r,D:l,h:n,m:a,s:i,ms:s,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=b;var g=function(e){return e instanceof T},$=function e(t,s,i){var a;if(!t)return _;if("string"==typeof t){var n=t.toLowerCase();y[n]&&(a=n),s&&(y[n]=s,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;y[c]=t,a=c}return!i&&a&&(_=a),a||!i&&_},w=function(e,t){if(g(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new T(s)},S=v;S.l=$,S.i=g,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=b.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var s=w(e);return this.startOf(t)<=s&&s<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,s){return S.u(e)?this[t]:this.set(s,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var s=this,d=!!S.u(t)||t,u=S.p(e),p=function(e,t){var i=S.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return d?i:i.endOf(r)},h=function(e,t){return S.w(s.toDate()[e].apply(s.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},b=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(b<y?b+7:b)-y;return p(d?v-g:v+(6-g),m);case r:case l:return h(_+"Hours",0);case n:return h(_+"Minutes",1);case a:return h(_+"Seconds",2);case i:return h(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=S.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[r]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[n]=u+"Hours",c[a]=u+"Minutes",c[i]=u+"Seconds",c[s]=u+"Milliseconds",c)[d],h=d===r?this.$D+(t-this.$W):t;if(d===o||d===f){var b=this.clone().set(l,1);b.$d[p](h),b.init(),this.$d=b.set(l,Math.min(this.$D,b.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(s,d){var l,u=this;s=Number(s);var p=S.p(d),h=function(e){var t=w(u);return S.w(t.date(t.date()+Math.round(e*s)),u)};if(p===o)return this.set(o,this.$M+s);if(p===f)return this.set(f,this.$y+s);if(p===r)return h(1);if(p===c)return h(7);var b=(l={},l[a]=e,l[n]=t,l[i]=1e3,l)[p]||1,m=this.$d.getTime()+s*b;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),n=this.$H,r=this.$m,c=this.$M,o=s.weekdays,d=s.months,f=function(e,s,a,n){return e&&(e[s]||e(t,i))||a[s].slice(0,n)},l=function(e){return S.s(n%12||12,e,"0")},p=s.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:S.s(c+1,2,"0"),MMM:f(s.monthsShort,c,d,3),MMMM:f(d,c),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(s.weekdaysMin,this.$W,o,2),ddd:f(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:S.s(n,2,"0"),h:l(1),hh:l(2),a:p(n,r,!0),A:p(n,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return i.replace(h,(function(e,t){return t||b[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(s,l,u){var p,h=S.p(l),b=w(s),m=(b.utcOffset()-this.utcOffset())*e,v=this-b,_=S.m(this,b);return _=(p={},p[f]=_/12,p[o]=_,p[d]=_/3,p[c]=(v-m)/6048e5,p[r]=(v-m)/864e5,p[n]=v/t,p[a]=v/e,p[i]=v/1e3,p)[h]||v,u?_:S.a(_)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=$(e,t,!0);return i&&(s.$L=i),s},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},b}(),M=T.prototype;return w.prototype=M,[["$ms",s],["$s",i],["$m",a],["$H",n],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,T,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,s=1e3,i=6e4,a=36e5,n=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:n,hours:a,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,s){return new _(e,s,t.$l)},p=function(e){return t.p(e)+"s"},h=function(e){return e<0},b=function(e){return h(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?h(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function h(e,t,s){var i=this;if(this.$d={},this.$l=s,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var n=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,s){return t+(e.$d[s]||0)*f[s]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=b(e/c),e%=c,this.$d.months=b(e/o),e%=o,this.$d.days=b(e/n),e%=n,this.$d.hours=b(e/a),e%=a,this.$d.minutes=b(e/i),e%=i,this.$d.seconds=b(e/s),e%=s,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var i=v(s,"D"),a=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=v(r,"S"),o=e.negative||t.negative||i.negative||a.negative||n.negative||c.negative,d=a.format||n.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+i.format+d+a.format+n.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var s=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return s.replace(r,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,s=p(e);return"milliseconds"===s?t%=1e3:t="weeks"===s?b(t/f[s]):this.$d[s],0===t?0:t},m.add=function(e,t,s){var i;return i=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+i*(s?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}();return function(s,i,a){e=a,t=a().$utils(),a.duration=function(e,t){var s=a.locale();return u(e,{$l:s},t)},a.isDuration=l;var n=i.prototype.add,r=i.prototype.subtract;i.prototype.add=function(e,t){return l(e)&&(e=e.asMilliseconds()),n.bind(this)(e,t)},i.prototype.subtract=function(e,t){return l(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var n={},r=[],c=0;c<e.length;c++){var o=e[c],d=i.base?o[0]+i.base:o[0],f=n[d]||0,l="".concat(d," ").concat(f);n[d]=f+1;var u=s(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=a(p,i);i.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var n=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var c=s(n[r]);t[c].references--}for(var o=i(e,a),d=0;d<n.length;d++){var f=s(n[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}n=o}}},569:e=>{"use strict";var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{"use strict";e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,a&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var n=s.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={id:i,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(e,t=null){const s=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return this.dispatchEvent(s)}}const t=e;var i=s(484),a=s.n(i),n=s(646),r=s.n(n);function c(e){return a()(e).format("HH:mm")}function o(e,...t){return e.reduce(((e,s,i)=>{const a=t[i-1];return void 0===a?e+s:Array.isArray(a)?e+a.join("")+s:e+a+s}))}a().extend(r());customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return o`
     <div class="trip-info__main">
       <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

       <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
     </div>

     <p class="trip-info__cost">
       Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
     </p>

     `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return o`
      ${this.state.items.map((e=>o`

        <div class="trip-filters__filter">
          <input
            id="filter-${e.value}"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="${e.value}"
            checked="${e.isSelected?"checked":""}"
            checked="${e.isDisabled?"checked":""}" >
          <label
            class="trip-filters__filter-label"
            for="filter-${e.value}">
            ${e.value}
          </label>
        </div>
      `))}
    `}});customElements.define("add-button-view",class extends t{createHtml(){return o`
    <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
     `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return o`
    ${this.state.items.map((e=>o`
       <div class="trip-sort__item  trip-sort__item--${e.value}">
         <input
         id="sort-${e.value}"
         class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="${e.value}"
        ${e.isSelected?"checked":""}
        ${e.isDisabled?"checked":""}>
         <label
        class="trip-sort__btn"
        for="sort-${e.value}">
        ${e.value}
        </label>
       </div>
       `))}
     `}});var d=s(379),f=s.n(d),l=s(795),u=s.n(l),p=s(569),h=s.n(p),b=s(565),m=s.n(b),v=s(216),_=s.n(v),y=s(589),g=s.n(y),$=s(766),w={};w.styleTagTransform=g(),w.setAttributes=m(),w.insert=h().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=_(),f()($.Z,w),$.Z&&$.Z.locals&&$.Z.locals;class S extends t{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return o`
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
    `}createStartDateHtml(){const{dateFrom:e}=this.state;return o`
    <time class="event__date" datetime="${e}">${t=e,a()(t).format("MMM D")}</time>

    `;var t}createTypeIconHtml(){const{types:e}=this.state;return o`
      <div class="event__type">
      <img
      class="event__type-icon"
      width="42"
      height="42"
      src="img/icons/${e.find((e=>e.isSelected)).value}.png"
      alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state,s=e.find((e=>e.isSelected)),i=t.find((e=>e.isSelected));return o`
    <h3 class="event__title">${s.value} ${i.name}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return o`
       <div class="event__schedule">
         <p class="event__time">
         <time class="event__start-time" datetime="${e}">${c(e)}</time>

         <time class="event__end-time" datetime="${t}">${c(t)}</time>
         </p>
         <p class="event__duration">${function(e,t){const s=a()(t).diff(e),i=a().duration(s);return i.days()?i.format("DD[d] HH[h] mm[m]"):i.hours()?i.format("HH[h] mm[m]"):i.format("mm[m]")}(e,t)}</p>
       </div>
     `}createPriceHtml(){const{basePrice:e}=this.state;return o`
       <p class="event__price">
       €&nbsp;<span class="event__price-value">${t=e,t.toLocaleString("en")}</span>
       </p>
     `;var t}createOfferListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t.length?o`
       <h4 class="visually-hidden">Offers:</h4>
       <ul class="event__selected-offers">

       ${t.map((e=>o`

           <li class="event__offer">
          <span class="event__offer-title">${e.title}</span>
          +€&nbsp;
          <span class="event__offer-price">20</span>+
        </li>
         `))}
       </ul>
     `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return o`
    <button class="event__favorite-btn ${e?"event__favorite-btn--active":""}" type="button">
         <span class="visually-hidden">Add to favorite</span>
         <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
           <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
         </svg>
       </button>
     `}createOpenButtonHtml(){return o`
       <button class="event__rollup-btn" type="button">
         <span class="visually-hidden">Open event</span>
       </button>
     `}onClick(e){e.target.closest(".event__rollup-btn")?this.dispatch("open"):e.target.closest(".event__favorite-btn")&&this.dispatch("favorite")}}customElements.define("card-view",S);const T=S;var M=s(287),H={};H.styleTagTransform=g(),H.setAttributes=m(),H.insert=h().bind(null,"head"),H.domAPI=u(),H.insertStyleElement=_(),f()(M.Z,H),M.Z&&M.Z.locals&&M.Z.locals;class D extends t{constructor(){super(),this.addEventListener("click",this.onClick)}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return o`
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
    `}createTypeFieldHtml(){const{types:e}=this.state;return o`
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

            ${e.map((e=>o`
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
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return o`
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
          ${t.map((e=>o`
            <option value="${e.name}"></option>
          `))}
        </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return o`
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
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return o`
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
    `}createSubmitButtonHtml(){return o`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return o`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return o`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?o`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${e.map((e=>o`
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
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?o`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${t.pictures?.map((e=>o`
              <img class="event__photo" src="${e.src}" alt="${e.description}">
            `))}
          </div>
        </div>
      </section>
    `:""}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(e){e.key?.startsWith("Esc")&&this.dispatch("close")}}customElements.define("editor-view",D);const k=D;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new k:new T;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const j=class{},C=class extends j{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}toJSON(){return{id:this.id,base_price:this.basePrice,date_from:this.dateFrom,date_to:this.dateTo,destination:this.destinationId,is_favorite:this.isFavorite,offers:structuredClone(this.offerIds),type:this.type}}},A=JSON.parse('[{"id":"dd03ed9f-6acb-49ad-89c2-3ab012217fd4","base_price":1298,"date_from":"2023-08-09T21:00:00.434Z","date_to":"2023-08-15T08:00:00.434Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":["bb570886-48ab-435d-98df-e3b06df1b43d","20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"7f3c9d26-1fca-45b2-be2a-dbb2b6beccef","base_price":2121,"date_from":"2023-08-06T21:00:00.434Z","date_to":"2023-08-14T06:00:00.434Z","destination":"4e80008d-ca58-434e-b15d-b0bbf1dd4fd7","is_favorite":true,"offers":["dadca605-7082-4e6c-896d-66ee97306d99","5790ed00-e93d-4878-a0fb-30880026e79c"],"type":"flight"},{"id":"66b775f8-8e9a-44cd-bf34-c8355b3089d2","base_price":4713,"date_from":"2023-08-05T21:00:00.434Z","date_to":"2023-08-14T19:00:00.434Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":[],"type":"ship"},{"id":"7958362f-b922-45a4-837b-a4413a93e008","base_price":1816,"date_from":"2023-08-05T21:00:00.434Z","date_to":"2023-08-15T01:00:00.434Z","destination":"2705c7da-8440-4c48-8945-cdcae784371c","is_favorite":true,"offers":["ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"},{"id":"0b0330e0-2d06-494c-8322-5bb3287e0c40","base_price":2655,"date_from":"2023-08-04T21:00:00.434Z","date_to":"2023-08-15T15:00:00.434Z","destination":"4e80008d-ca58-434e-b15d-b0bbf1dd4fd7","is_favorite":false,"offers":["406c9034-183b-4db4-a91e-9e807315be6b","49844cae-ac60-4a94-be42-e9d0c39ae6be"],"type":"ship"},{"id":"2c7fa4d8-9e11-4580-9953-9d804618616a","base_price":3452,"date_from":"2023-08-07T21:00:00.434Z","date_to":"2023-08-15T16:00:00.434Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":["1d84a473-6673-4848-8db9-8b288a326488"],"type":"drive"},{"id":"c36d49cb-f3db-43be-b93f-cef1150d01ee","base_price":7744,"date_from":"2023-08-07T21:00:00.434Z","date_to":"2023-08-15T08:00:00.434Z","destination":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","is_favorite":false,"offers":["c3f6c929-ac4d-4e06-b294-c41e19d1552a"],"type":"restaurant"},{"id":"ed45b53f-0848-44e2-888a-7f2929c2f342","base_price":3467,"date_from":"2023-08-09T21:00:00.434Z","date_to":"2023-08-15T18:00:00.434Z","destination":"6189e06a-4863-44a9-84f3-5b10934f3f4b","is_favorite":true,"offers":["c3f6c929-ac4d-4e06-b294-c41e19d1552a"],"type":"restaurant"},{"id":"20692977-f407-4002-a46d-dd1e17bef211","base_price":2586,"date_from":"2023-08-08T21:00:00.434Z","date_to":"2023-08-14T04:00:00.434Z","destination":"f67e67a7-1f43-4b56-b0df-799c7e59a322","is_favorite":false,"offers":[],"type":"drive"},{"id":"e01e7d87-8556-4046-b88f-9fc68be395c3","base_price":313,"date_from":"2023-08-09T21:00:00.434Z","date_to":"2023-08-15T14:00:00.434Z","destination":"6189e06a-4863-44a9-84f3-5b10934f3f4b","is_favorite":true,"offers":[],"type":"check-in"},{"id":"7243a771-a7e5-49a7-8b07-f2ab71a0470c","base_price":6143,"date_from":"2023-08-01T21:00:00.434Z","date_to":"2023-08-15T00:00:00.434Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":[],"type":"train"},{"id":"2d6ddb2d-14a3-41ce-a4df-c11f5ea930db","base_price":8789,"date_from":"2023-08-03T21:00:00.434Z","date_to":"2023-08-14T05:00:00.436Z","destination":"f67e67a7-1f43-4b56-b0df-799c7e59a322","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"119e37cf-299b-4051-a563-c29845889bee","base_price":1714,"date_from":"2023-08-07T21:00:00.436Z","date_to":"2023-08-14T08:00:00.437Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":["c7837435-e2ce-4de0-93f2-6799c3c3479c","93d24a4c-ac7c-4c0e-8a5b-d60def4d8190","468d8798-8e98-4f22-8b61-bcc548f8c5af","10df1469-3c77-4114-b8ae-71d946f8320c"],"type":"check-in"},{"id":"268a56ab-4657-443f-b5c0-8c756c37101a","base_price":9886,"date_from":"2023-08-04T21:00:00.437Z","date_to":"2023-08-15T07:00:00.437Z","destination":"2705c7da-8440-4c48-8945-cdcae784371c","is_favorite":false,"offers":["80f470ad-a09c-4420-adbf-070ab9db2235","ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"},{"id":"3fb347e8-2861-4ea7-b793-35c3b3010aa4","base_price":9527,"date_from":"2023-08-02T21:00:00.437Z","date_to":"2023-08-15T17:00:00.442Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"374ac089-7866-47ab-b94e-b7ac72988e09","base_price":9845,"date_from":"2023-08-08T21:00:00.442Z","date_to":"2023-08-15T02:00:00.442Z","destination":"5c8f9469-26fb-44b3-8294-0e11da977b96","is_favorite":false,"offers":["1d84a473-6673-4848-8db9-8b288a326488"],"type":"drive"},{"id":"a7d91597-2bac-484b-bbc0-6d2e7578d3fd","base_price":927,"date_from":"2023-08-06T21:00:00.442Z","date_to":"2023-08-15T19:00:00.442Z","destination":"2705c7da-8440-4c48-8945-cdcae784371c","is_favorite":true,"offers":["bb570886-48ab-435d-98df-e3b06df1b43d","20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"62514de2-f816-4d3f-9fe5-4badc19f19d5","base_price":6629,"date_from":"2023-08-10T21:00:00.442Z","date_to":"2023-08-14T03:00:00.442Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":["20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"0abda4d8-d1ec-4ffe-8280-2a9ec56e654e","base_price":5028,"date_from":"2023-08-04T21:00:00.442Z","date_to":"2023-08-14T15:00:00.442Z","destination":"9a997df5-3226-4ce3-9e8d-23bb5802db6e","is_favorite":false,"offers":["ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"},{"id":"3397a5e7-e4f7-40d0-ac31-13c42d0dd252","base_price":3306,"date_from":"2023-08-10T21:00:00.442Z","date_to":"2023-08-15T02:00:00.442Z","destination":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","is_favorite":true,"offers":["e8c0e86e-df6e-4342-8efd-801819d480b5","c7837435-e2ce-4de0-93f2-6799c3c3479c","93d24a4c-ac7c-4c0e-8a5b-d60def4d8190","468d8798-8e98-4f22-8b61-bcc548f8c5af","10df1469-3c77-4114-b8ae-71d946f8320c"],"type":"check-in"},{"id":"bb420136-1002-4ba1-b182-663dccaaba0e","base_price":6866,"date_from":"2023-08-09T21:00:00.442Z","date_to":"2023-08-14T17:00:00.442Z","destination":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","is_favorite":true,"offers":[],"type":"ship"},{"id":"65529746-ba87-4bd8-a523-3d8bee2b5bd9","base_price":2546,"date_from":"2023-08-02T21:00:00.442Z","date_to":"2023-08-14T19:00:00.442Z","destination":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","is_favorite":true,"offers":["6e435cb8-fe4d-4bcf-940a-576e77df89d9","406c9034-183b-4db4-a91e-9e807315be6b","49844cae-ac60-4a94-be42-e9d0c39ae6be"],"type":"ship"},{"id":"5b88e06c-2819-4188-b117-6372006dd28e","base_price":5626,"date_from":"2023-08-09T21:00:00.442Z","date_to":"2023-08-14T05:00:00.442Z","destination":"5c8f9469-26fb-44b3-8294-0e11da977b96","is_favorite":false,"offers":["20c7cb79-dce9-4678-acce-96243b06a8b9","13ac735d-3569-4566-82d9-e340fc60d461","04a78f5b-7f46-4627-9e90-7cd080f0345c","bd18e931-1915-4b95-8282-9886537c0112"],"type":"taxi"},{"id":"a7bbc54e-79c4-4c59-ad7e-12b96c776eea","base_price":8281,"date_from":"2023-08-05T21:00:00.442Z","date_to":"2023-08-14T21:00:00.442Z","destination":"9a997df5-3226-4ce3-9e8d-23bb5802db6e","is_favorite":true,"offers":["c3f6c929-ac4d-4e06-b294-c41e19d1552a"],"type":"restaurant"},{"id":"083823aa-6fa1-4b00-bc16-86930ddea93f","base_price":508,"date_from":"2023-08-06T21:00:00.442Z","date_to":"2023-08-15T06:00:00.442Z","destination":"79df0484-35f6-478b-acff-e84751c64c1d","is_favorite":true,"offers":["80f470ad-a09c-4420-adbf-070ab9db2235","ab62038f-6e76-4de3-b066-384f935c8e56","5cba973e-4169-4070-94e5-520e07edac15"],"type":"bus"}]'),Z=JSON.parse('[{"id":"6189e06a-4863-44a9-84f3-5b10934f3f4b","description":"Tokio - famous for its crowded street markets with the best street food in Asia","name":"Tokio","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Tokio a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Tokio with a beautiful old town"}]},{"id":"c5db5b2d-8587-46c3-9a19-f98ac56e992e","description":"Milan - a true asian pearl","name":"Milan","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Milan a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Milan a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Milan middle-eastern paradise"}]},{"id":"5c8f9469-26fb-44b3-8294-0e11da977b96","description":"Naples - middle-eastern paradise","name":"Naples","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Naples with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Naples is a beautiful city"}]},{"id":"79df0484-35f6-478b-acff-e84751c64c1d","description":"Den Haag - with an embankment of a mighty river as a centre of attraction","name":"Den Haag","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Den Haag with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Den Haag in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/16.jpg","description":"Den Haag is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Den Haag a true asian pearl"}]},{"id":"9a997df5-3226-4ce3-9e8d-23bb5802db6e","description":"Den Haag - with an embankment of a mighty river as a centre of attraction","name":"Den Haag","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Den Haag a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Den Haag with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Den Haag is a beautiful city"}]},{"id":"f771ad56-14a5-4145-ba1b-5957d4fb35ee","name":"Tokio"},{"id":"2705c7da-8440-4c48-8945-cdcae784371c","name":"Milan"},{"id":"4e80008d-ca58-434e-b15d-b0bbf1dd4fd7","name":"Rome"},{"id":"f67e67a7-1f43-4b56-b0df-799c7e59a322","description":"Kioto - in a middle of Europe","name":"Kioto","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Kioto middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Kioto in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Kioto middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Kioto with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Kioto is a beautiful city"}]},{"id":"9e44e4bc-aafa-4bbb-b953-7f9ef2b81073","description":"Nagasaki - middle-eastern paradise","name":"Nagasaki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Nagasaki with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Nagasaki with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Nagasaki with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Nagasaki in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Nagasaki a perfect place to stay with a family"}]}]'),x=JSON.parse('[{"type":"taxi","offers":[{"id":"bb570886-48ab-435d-98df-e3b06df1b43d","title":"Upgrade to a business class","price":180},{"id":"20c7cb79-dce9-4678-acce-96243b06a8b9","title":"Choose the radio station","price":176},{"id":"13ac735d-3569-4566-82d9-e340fc60d461","title":"Choose temperature","price":162},{"id":"04a78f5b-7f46-4627-9e90-7cd080f0345c","title":"Drive quickly, I\'m in a hurry","price":178},{"id":"bd18e931-1915-4b95-8282-9886537c0112","title":"Drive slowly","price":189}]},{"type":"bus","offers":[{"id":"80f470ad-a09c-4420-adbf-070ab9db2235","title":"Infotainment system","price":86},{"id":"ab62038f-6e76-4de3-b066-384f935c8e56","title":"Order meal","price":187},{"id":"5cba973e-4169-4070-94e5-520e07edac15","title":"Choose seats","price":156}]},{"type":"train","offers":[{"id":"948f74bf-b904-4b4e-a9a5-a16afd3eb4c9","title":"Book a taxi at the arrival point","price":52},{"id":"51398caa-9dd5-41db-b699-bf74b693a2b6","title":"Order a breakfast","price":30},{"id":"67a6524d-ff87-4132-9a13-30df68d006c8","title":"Wake up at a certain time","price":30}]},{"type":"flight","offers":[{"id":"195613ed-eccc-4ca3-9cd9-530f0d44413d","title":"Choose meal","price":36},{"id":"95bfc866-a109-42dc-9612-16cfe9657584","title":"Choose seats","price":66},{"id":"e420b2ac-3fae-49cb-a752-00b0370372d1","title":"Upgrade to comfort class","price":74},{"id":"1c032cfd-23e9-4f5d-9e35-130063dff12c","title":"Upgrade to business class","price":70},{"id":"dadca605-7082-4e6c-896d-66ee97306d99","title":"Add luggage","price":183},{"id":"5790ed00-e93d-4878-a0fb-30880026e79c","title":"Business lounge","price":172}]},{"type":"check-in","offers":[{"id":"e8c0e86e-df6e-4342-8efd-801819d480b5","title":"Choose the time of check-in","price":112},{"id":"c7837435-e2ce-4de0-93f2-6799c3c3479c","title":"Choose the time of check-out","price":187},{"id":"93d24a4c-ac7c-4c0e-8a5b-d60def4d8190","title":"Add breakfast","price":114},{"id":"468d8798-8e98-4f22-8b61-bcc548f8c5af","title":"Laundry","price":90},{"id":"10df1469-3c77-4114-b8ae-71d946f8320c","title":"Order a meal from the restaurant","price":72}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"e07734e6-f6d4-4a02-8919-2b2123c59117","title":"Choose meal","price":165},{"id":"cb69cdc5-b1dc-45fb-8477-4f0cbdb21793","title":"Choose seats","price":190},{"id":"5d6794d0-dc40-4785-b733-a348d225a598","title":"Upgrade to comfort class","price":199},{"id":"6e435cb8-fe4d-4bcf-940a-576e77df89d9","title":"Upgrade to business class","price":162},{"id":"406c9034-183b-4db4-a91e-9e807315be6b","title":"Add luggage","price":80},{"id":"49844cae-ac60-4a94-be42-e9d0c39ae6be","title":"Business lounge","price":139}]},{"type":"drive","offers":[{"id":"aaf4e0c9-8374-4cf8-9ad6-fab7a87f1cb4","title":"With automatic transmission","price":165},{"id":"1d84a473-6673-4848-8db9-8b288a326488","title":"With air conditioning","price":101}]},{"type":"restaurant","offers":[{"id":"f394f949-acb7-429c-89d6-d2a2158c7676","title":"Choose live music","price":112},{"id":"c3f6c929-ac4d-4e06-b294-c41e19d1552a","title":"Choose VIP area","price":63}]}]');class E extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(e){const t=this.getUrl();t.search="",Object.keys(e).forEach((s=>{t.searchParams.set(s,e[s])})),window.history.pushState(null,"",t.href),this.dispatchEvent(new Event("change"))}getParams(){const e=this.getUrl();return Object.fromEntries(e.searchParams)}getUrl(){return new URL(window.location.href)}}const O=new E,P=class{constructor(e,t){this.view=e,this.model=t,this.navigation=O,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){this.updateView()}},F=class extends P{constructor(...e){super(...e)}updateView(){this.view.render()}},L=class extends P{constructor(...e){super(...e),this.view.addEventListener("change",this.onViewChange.bind(this))}updateView(){const e=["everything","future","present","past"].map((e=>({value:e,isSelected:"past"===e,isDisabled:"future"===e})));this.view.setState({items:e})}onViewChange(e){console.log(e.target.value)}},N=class extends P{constructor(...e){super(...e)}updateView(){this.view.render()}},I=class extends P{constructor(...e){super(...e),this.view.addEventListener("change",this.onViewChange.bind(this))}updateView(){const e=["day","event","time","price","offers"].map((e=>({value:e,isSelected:"day"===e,isDisabled:"event"===e||"offers"===e})));this.view.setState({items:e})}onViewChange(e){console.log(e.target.value)}},B=class extends P{constructor(...e){super(...e),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this)),this.view.addEventListener("favorite",this.onViewFavorite.bind(this))}updateView(){const e=this.navigation.getParams(),t=this.model.getPoints(),s=this.model.getDestinations(),i=this.model.getOfferGroups(),a=t.map((t=>{const{offers:a}=i.find((e=>e.type===t.type));return{id:t.id,types:i.map((e=>({value:e.type,isSelected:e.type===t.type}))),destinations:s.map((e=>({...e,isSelected:e.id===t.destinationId}))),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offers:a.map((e=>({...e,isSelected:t.offerIds?.includes(e.id)}))),isFavorite:t.isFavorite,isEditable:e.edit===t.id}}));this.view.setState({items:a})}createPoint(e){const t=this.model.createPoint();return Object.assign(t,{id:e.id,type:e.types.find((e=>e.isSelected)).value,destinationId:e.destinations.find((e=>e.isSelected))?.id,dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offerIds:e.offers.filter((e=>e.isSelected)).map((e=>e.id)),isFavorite:e.isFavorite}),t}onViewOpen(e){const t=this.navigation.getParams();t.edit=e.target.state.id,this.navigation.setParams(t)}onViewClose(){const e=this.navigation.getParams();delete e.edit,this.navigation.setParams(e)}async onViewFavorite(e){const t=e.target;t.state.isFavorite=!t.state.isFavorite,await this.model.updatePoint(this.createPoint(t.state)),t.render()}},Y=new class extends j{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.points=A,this.destinations=Z,this.offerGroups=x}getPoints(){return this.points.map(this.createPoint)}createPoint(e=Object.create(null)){return new C(e)}async updatePoint(e){const t=e.toJSON(),s=this.points.findIndex((e=>e.id===t.id));this.points.splice(s,1,t)}getDestinations(){return structuredClone(this.destinations)}getOfferGroups(){return structuredClone(this.offerGroups)}};Y.ready().then((()=>{new F(document.querySelector("brief-view"),Y),new L(document.querySelector("filter-view"),Y),new N(document.querySelector("add-button-view"),Y),new I(document.querySelector("sort-view"),Y),new B(document.querySelector("list-view"),Y)}))})()})();
//# sourceMappingURL=bundle.f517199be6747e0d0961.js.map