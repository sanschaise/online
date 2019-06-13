// https://stackoverflow.com/a/13480430/1986068

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
        {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
    ]
};

BrowserDetect.init();

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(){}function t(e){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],u(e,this)}function o(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,t._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(f){return void i(n.promise,f)}r(n.promise,o)}else(1===e._state?r:i)(n.promise,e._value)})):e._deferreds.push(n)}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var o=n.then;if(n instanceof t)return e._state=3,e._value=n,void f(e);if("function"==typeof o)return void u(function(e,n){return function(){e.apply(n,arguments)}}(o,n),e)}e._state=1,e._value=n,f(e)}catch(r){i(e,r)}}function i(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&t._immediateFn(function(){e._handled||t._unhandledRejectionFn(e._value)});for(var n=0,r=e._deferreds.length;r>n;n++)o(e,e._deferreds[n]);e._deferreds=null}function u(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,i(n,e))})}catch(o){if(t)return;t=!0,i(n,o)}}var c=setTimeout;t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,t,r)),r},t.prototype["finally"]=e,t.all=function(e){return new t(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(n){n(e)})},t.reject=function(e){return new t(function(n,t){t(e)})},t.race=function(e){return new t(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},t._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},t._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=t});

/*!
 * 
 *   typeit - The most versatile animated typing utility on the planet.
 *   Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
 *   Version: v6.0.3
 *   URL: https://typeitjs.com
 *   License: GPL-2.0
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TypeIt=e():t.TypeIt=e()}(this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:null,html:!0,waitUntilVisible:!1,beforeString:!1,afterString:!1,beforeStep:!1,afterStep:!1,afterComplete:!1};function r(t){var e=t.getBoundingClientRect();return!(e.right>window.innerWidth||e.bottom>window.innerHeight)&&!(e.top<0||e.left<0)}function o(t,e){return Math.abs(Math.random()*(t+e-(t-e))+(t-e))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("style");n.id=e,n.appendChild(document.createTextNode(t)),document.head.appendChild(n)}var a=function(t,e){for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},u=function(t){return["textarea","input"].indexOf(t.tagName.toLowerCase())>-1},l=function(t){return Array.isArray(t)?t.slice(0):t.split("<br>")};function c(t){return t.replace(/&(.+);/,function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value})}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h="{%}";var p=function(t){var e=function(t){var e=(new DOMParser).parseFromString(t,"text/html"),n=[].slice.call(e.body.querySelectorAll("*"));return(n=n.filter(function(e){return!(e.outerHTML.indexOf("></")>-1&&(t=t.replace(e.outerHTML,""),1))})).forEach(function(e){t=t.replace(new RegExp("<".concat(e.tagName,"(.*?)/?>((.*?)</").concat(e.tagName,">)?"),"i"),h)}),{string:t,nodes:n}}(t),n=e.string,i=e.nodes,r=c(n).split(""),o=[];return r.forEach(function(t,e){if(r.slice(e,e+3).join("")===h){var n=e,s=i.shift(),a=c(s.innerHTML).split(""),u=[].slice.call(s.attributes).map(function(t){return{name:t.name,value:t.nodeValue}});a.length?a.forEach(function(t,i){o.push({tag:s.tagName,attributes:u,content:t,isFirstCharacter:n===e,isLastCharacter:i+1===a.length}),n++}):o.push({tag:s.tagName,attributes:u,content:null})}else o.push(t)}),o=function(t){for(var e=!0;e;)t.some(function(e,n){return!("object"!==f(e)||!e.isLastCharacter&&null!==e.content||"%}"!==t.slice(n+1,n+3).join("")||(t.splice(n+1,2),0))})||(e=!1);return t}(o)},d=function(t){var e=t.tag,n=t.attributes,i=void 0===n?[]:n,r=t.content,o=void 0===r?"":r,s=document.createElement(e);return void 0!==i&&i.forEach(function(t){s.setAttribute(t.name,t.value)}),o&&(s.innerHTML=o),s.outerHTML},y=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.value="":[].slice.call(t.childNodes).forEach(function(e){void 0!==e.classList&&e.classList.contains("ti-wrapper")&&(t.innerHTML="")})};function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.executed=[],this.waiting=e,!e.length&&n&&this.add(n)}var e,n,i;return e=t,(n=[{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.waiting[e?"unshift":"push"](t),this}},{key:"delete",value:function(t){return this.waiting.splice(t,1),this}},{key:"reset",value:function(){return this.waiting=[].concat(g(this.executed),g(this.waiting)),this.executed=[],this}}])&&m(e.prototype,n),i&&m(e,i),t}();function w(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var k="display:inline;position:relative;font:inherit;color:inherit;line-height:inherit;",q=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.element,r=e.id,o=e.options,s=e.queue,c=void 0===s?[]:s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.status={started:!1,complete:!1,frozen:!1,destroyed:!1},this.timeouts=[],this.id=r,this.$e=n,this.isInput=u(n),this.opts=a({},i,o),this.opts.strings=l(this.opts.strings),this.opts.html=!this.isInput&&this.opts.html,this.queue=new b(c,[this.pause,this.opts.startDelay]),y(n,this.isInput),this.prepareDelay("nextStringDelay"),this.prepareDelay("loopDelay");var f=this.$e.innerHTML;this.prepDOM(),this.handleHardCoded(f),this.opts.strings=this.opts.strings.map(function(t){return t.replace(/<\!--.*?-->/g,"")}),!this.opts.strings.length||this.queue.waiting.length>1||this.generateQueue()}var e,n,c;return e=t,(n=[{key:"reset",value:function(){return this.queue.reset(),new t({element:this.$e,id:this.id,options:this.opts,queue:this.queue.waiting})}},{key:"init",value:function(){var t=this;if(!this.status.started){if(this.cursor(),!this.opts.waitUntilVisible||r(this.$e))return this.status.started=!0,this.fire();window.addEventListener("scroll",function e(){r(t.$e)&&!t.status.started&&(t.fire(),window.removeEventListener("scroll",e))})}}},{key:"fire",value:function(){for(var t=this,e=this.queue.waiting.slice(),n=Promise.resolve(),i=function(i){var r=e[i],o=[r,t.queue,t];n=n.then(function(){return new Promise(function(e,n){if(t.status.frozen)return n();var i,s;(t.setPace(),r[2]&&r[2].isFirst&&t.opts.beforeString)&&(i=t.opts).beforeString.apply(i,o);t.opts.beforeStep&&(s=t.opts).beforeStep.apply(s,o);r[0].call(t,r[1],r[2]).then(function(){var n,i,s=t.queue.waiting.shift();if(r[2]&&r[2].isPhantom)return e();r[2]&&r[2].isLast&&t.opts.afterString&&(n=t.opts).afterString.apply(n,o);t.opts.afterStep&&(i=t.opts).afterStep.apply(i,o);return t.queue.executed.push(s),e()})})})},r=0;r<e.length;r++)i(r);n.then(function(){if(t.opts.loop){var e=t.opts.loopDelay?t.opts.loopDelay:t.opts.nextStringDelay;t.wait(function(){t.loopify(e),t.fire()},e.after)}t.status.completed=!0,t.opts.afterComplete&&t.opts.afterComplete(t)}).catch(function(){})}},{key:"loopify",value:function(t){var e=this;this.queue.reset().delete(0).add([this.pause,t.before],!0),this.getNoderized().forEach(function(t){e.queue.add([e.delete,null,{isPhantom:!0}],!0)})}},{key:"prepDOM",value:function(){this.isInput||(this.$e.innerHTML='\n      <span style="'.concat(k,'" class="ti-wrapper">\n        <span style="').concat(k,'" class="ti-container"></span>\n      </span>\n      '),this.$e.setAttribute("data-typeit-id",this.id),this.$eContainer=this.$e.querySelector(".ti-container"),this.$eWrapper=this.$e.querySelector(".ti-wrapper"),s("\n        .".concat(this.$eContainer.className,":before {\n          content: '.';\n          display: inline-block;\n          width: 0;\n          visibility: hidden;\n        }\n      ")))}},{key:"setContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.isInput?this.$e.value=t:this.$eContainer[this.opts.html?"innerHTML":"innerText"]=t}},{key:"getRaw",value:function(){return this.isInput?this.$e.value:this.opts.html?this.$eContainer.innerHTML:this.$eContainer.innerText}},{key:"getNoderized",value:function(){return this.maybeNoderize(this.getRaw())}},{key:"prepareDelay",value:function(t){var e=this.opts[t];if(e){var n=Array.isArray(e),i=n?null:e/2;this.opts[t]={before:n?e[0]:i,after:n?e[1]:i,total:n?e[0]+e[1]:e}}}},{key:"generateQueue",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.queue.add(e),this.opts.strings.forEach(function(e,n){t.queueString(e);var i=t.queue.waiting.length;if(n+1!==t.opts.strings.length){if(t.opts.breakLines)return t.queue.add([t.type,"<br>"]),void t.addSplitPause(i);t.queueDeletions(e),t.addSplitPause(i,e.length)}})}},{key:"queueDeletions",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e="string"==typeof t?this.maybeNoderize(t).length:t,n=0;n<e;n++)this.queue.add([this.delete])}},{key:"maybeNoderize",value:function(t){return this.opts.html?p(t):t.split("")}},{key:"queueString",value:function(t){var e=this,n=(t=this.maybeNoderize(t)).length;t.forEach(function(t,i){var r=[e.type,t];0===i&&r.push({isFirst:!0}),i+1===n&&r.push({isLast:!0}),e.queue.add(r)})}},{key:"addSplitPause",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.queue.waiting.splice(t,0,[this.pause,this.opts.nextStringDelay.before]),this.queue.waiting.splice(t+e+1,0,[this.pause,this.opts.nextStringDelay.after])}},{key:"cursor",value:function(){if(!this.isInput){var t="display: none;";this.opts.cursor&&(s("\n        @keyframes blink-".concat(this.id," {\n          0% {opacity: 0}\n          49% {opacity: 0}\n          50% {opacity: 1}\n        }\n\n        [data-typeit-id='").concat(this.id,"'] .ti-cursor {\n          animation: blink-").concat(this.id," ").concat(this.opts.cursorSpeed/1e3,"s infinite;\n        }\n      "),this.id),t=""),this.$eWrapper.insertAdjacentHTML("beforeend",'<span style="'.concat(k).concat(t,'left: -.25ch;" class="ti-cursor">').concat(this.opts.cursorChar,"</span>"))}}},{key:"insert",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.isInput?this.$e.value="".concat(this.$e.value).concat(t):((e?this.$eContainer.lastChild:this.$eContainer).insertAdjacentHTML("beforeend",t),this.setContents(this.getRaw().split("").join("")))}},{key:"handleHardCoded",value:function(t){return!!t.length&&(this.opts.startDelete?(this.insert(t),this.queue.add([this.delete,!0]),void this.addSplitPause(1)):void(this.opts.strings=[].concat(w(l(t.trim())),w(this.opts.strings))))}},{key:"wait",value:function(t,e){this.timeouts.push(setTimeout(t,e))}},{key:"setPace",value:function(){var t=this.opts.speed,e=null!==this.opts.deleteSpeed?this.opts.deleteSpeed:this.opts.speed/3,n=t/2,i=e/2;this.typePace=this.opts.lifeLike?o(t,n):t,this.deletePace=this.opts.lifeLike?o(e,i):e}},{key:"pause",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,i){t.wait(function(){return n()},e||t.opts.nextStringDelay.total)})}},{key:"type",value:function(t){var e=this;return new Promise(function(n,i){e.wait(function(){return"string"==typeof t?(e.insert(t),n()):t.isFirstCharacter||null===t.content?(e.insert(d({tag:t.tag,attributes:t.attributes,content:t.content})),n()):(e.insert(t.content,!0),n())},e.typePace)})}},{key:"empty",value:function(){var t=this;return new Promise(function(e){return t.setContents(""),e()})}},{key:"delete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,i){t.wait(function(){var i=t.getNoderized();return i.splice(-1,1),i=function(t){return(t=t.map(function(e,n){if("object"===v(e)&&(e.isFirstCharacter||null===e.content)){for(var i=n,r=[e.content],o=!1;!o;){var s=t[++i];void 0!==s&&r.push(s.content),(void 0===s||s.isLastCharacter)&&(o=!0)}return d({tag:e.tag,attributes:e.attributes,content:r.join("")})}return e})).filter(function(t){return"object"!==v(t)})}(i),t.setContents(i.join("")),e&&i.length>0?t.delete(!0).then(function(){return n()}):n()},t.deletePace)})}},{key:"setOptions",value:function(t){var e=this;return new Promise(function(n){return e.opts=a({},e.opts,t),n()})}}])&&S(e.prototype,n),c&&S(e,c),t}(),C=function(t){return"string"==typeof t?t=document.querySelectorAll(t):t instanceof NodeList||(t=[t]),[].slice.call(t)};function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"default",function(){return x});var x=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.instances=C(e).map(function(t){return new q({element:t,id:Math.random().toString(36).substring(2,15),options:n,queue:[]})})}var e,n,i;return e=t,(n=[{key:"each",value:function(t){var e=this;this.instances.forEach(function(n){t.call(e,n)})}},{key:"queueUp",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.each(function(r){for(var o="string"!=typeof t,s=o?t:r[t],a=o?e:n,u=0;u<i;u++)r.queue.add([s,a])})}},{key:"is",value:function(t){return e=this.instances,n=t,i=!0,!!e.length&&e.filter(function(t){return t.status[n]===i}).length===e.length;var e,n,i}},{key:"freeze",value:function(){this.each(function(t){t.status.frozen=!0})}},{key:"unfreeze",value:function(){this.each(function(t){t.status.frozen&&(t.status.frozen=!1,t.fire())})}},{key:"type",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.each(function(e){return e.queueString(t)}),this}},{key:"delete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.queueUp("delete",null===t,null===t?1:t),this}},{key:"pause",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.queueUp("pause",t),this}},{key:"break",value:function(){return this.queueUp("type","<br>"),this}},{key:"options",value:function(t){return this.queueUp("setOptions",t),this}},{key:"exec",value:function(t){return this.queueUp(t),this}},{key:"destroy",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.each(function(e){e.timeouts.forEach(function(t){clearTimeout(t)}),e.timeouts=[];var n=e.isInput?null:e.$eWrapper.querySelector(".ti-cursor");t&&e.opts.cursor&&null!==n&&e.$eWrapper.removeChild(n),e.status.destroyed=!0})}},{key:"empty",value:function(){return this.queueUp("empty"),this}},{key:"reset",value:function(){return this.destroy(),this.instances=this.instances.map(function(t){return t.reset()}),this}},{key:"go",value:function(){return this.each(function(t){t.init()}),this}}])&&j(e.prototype,n),i&&j(e,i),t}()}]).default});
//////////////////////////////////////////////////////////////
// App namespace
//////////////////////////////////////////////////////////////

window.$ = jQuery;
window.App = window.App || {};

App.inViewport = function(el) {
  el = (el instanceof jQuery) ? el.get(0) : el;

  var rect = el.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
};

//////////////////////////////////////////////////////////////
// On page load
//////////////////////////////////////////////////////////////

$(function() {
  App.windowWidth    = $(window).width();
  App.windowHeight   = $(window).height();
  App.documentWidth  = $(document).width();
  App.documentHeight = $(document).height();

  App.scrollTop = $(window).scrollTop();

  App.$html = $('html');
  App.$body = $('body');
  App.$nav = $('#nav');
  App.$colorPicker = $('#header__palette');
});

//////////////////////////////////////////////////////////////
// On scroll
//////////////////////////////////////////////////////////////

$(window).scroll(function() {
  App.scrollTop = $(window).scrollTop();
});

//////////////////////////////////////////////////////////////
// On resize
//////////////////////////////////////////////////////////////

$(window).resize(function() {
  App.windowWidth    = $(window).width();
  App.windowHeight   = $(window).height();
  App.documentWidth  = $(document).width();
  App.documentHeight = $(document).height();
});

App.breakpoint = function(checkIfSize) {
  // Make sure these match the breakpoint variables set in variables.scss
  var xs = 480;
  var sm = 768;
  var md = 992;
  var lg = 1200;
  var breakpoint;

  if ( App.windowWidth < xs ) {
    breakpoint = 'xs';
  } else if ( App.windowWidth >= md ) {
    breakpoint = 'lg';
  } else if ( App.windowWidth >= sm ) {
    breakpoint = 'md';
  } else {
    breakpoint = 'sm';
  }

  if ( checkIfSize !== undefined ) {
    if ( checkIfSize == 'xs' ) {
      return App.windowWidth < xs;
    } else if ( checkIfSize == 'sm' ) {
      return (App.windowWidth >= xs && App.windowWidth < sm);
    } else if ( checkIfSize == 'md' ) {
      return (App.windowWidth >= sm && App.windowWidth < md);
    } else if ( checkIfSize == 'lg' ) {
      return App.windowWidth >= md;
    }
  } else {
    return breakpoint;
  }
};

App.breakpoint.isMobile = function() {
  return ( App.breakpoint('xs') || App.breakpoint('sm') );
};

// Bank box scroll

$(function() {
  var $bankCol = $('#customer__graph__col--right')

  if ( !$bankCol.length ) return;

  var $bankBox = $('#customer__banks-using-yes-container');

  $(window).on('scroll.bankBox', $.throttle(500, function() {
    if ( App.breakpoint.isMobile() ) return;

    if ( $bankBox.offset().top > $bankCol.offset().top + 300 ) {
      $bankBox.addClass('active');
    } else {
      $bankBox.removeClass('active');
    }
  }));

  $(window).trigger('scroll.bankBox');
});

// Bank Graph

$(function() {
  var $graph = $('#bank__graph');

  if ( !$graph.length ) return;

  var $sets = $graph.find('.bank__graph__col__scene-item-wrapper');

  var animate = function($items, isFirstSequence) {
    if ( !$items.length ) return;

    var $item = $items.first();
    var $button = $item.find('.button');
    var $arrow = $item.find('.down-arrow');
    var $star = $item.find('.star');
    var duration = isFirstSequence ? 0 : 1000;

    isFirstSequence = true;

    $items = $items.not($item);

    window.setTimeout(function() {
      $item.addClass('scene-item-active animation-complete');
      animate($items);
      window.setTimeout(function() {
        $arrow.addClass('active');
      }, 200);
    }, duration);
  };

  var beginAnimation = function() {
    $sets.each(function() {
      var $items = $(this).find('.bank__graph__col__scene-item');

      animate($items, true);
    });
  };

  $(window).on('scroll.bankGraph', $.throttle(250, function() {
    if ( App.inViewport( $graph ) ) {
      $(window).off('scroll.bankGraph');

      beginAnimation();
    }
  }));

  $(window).trigger('scroll.bankGraph');
});

// Browser detection init

$(function() {
  if ( BrowserDetect.browser == 'Explorer' || BrowserDetect.browser == 'MS Edge' ) {
    App.$html.removeClass('svgclippaths').addClass('no-svgclippaths');
    Modernizr.svgclippaths = false;
  }
});

// Color palette and swatches

$(function() {
  // Code to control the randomized swatch styles

  var lightOrDark = function(color) {
    // https://awik.io/determine-color-bright-dark-using-javascript/
    // Variables for red, green, blue values
    var r, g, b, hsp;
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

      r = color[1];
      g = color[2];
      b = color[3];
    }
    else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +('0x' + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
    }
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if ( hsp > 127.5 ) {
      return 'light';
    } else {
      return 'dark';
    }
  };

  var getRandomHexColor = function() {
    return "#000000".replace(/0/g,function() {
      return (~~(Math.random()*16)).toString(16);
    });
  };

  var getRandomFloat = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var getRandomBool = function() {
    return (Math.random() >= 0.5);
  };

  var generateBackground = function(backgroundColorOnly) {
    var styles = {};

    if ( backgroundColorOnly || getRandomBool() ) {
      // A plain old background color
      var backgroundColor = getRandomHexColor();
        styles.borderWidth= '1.5';
        styles.borderColor ='rgba(0,0,0,0)'
      if ( lightOrDark( backgroundColor ) == 'dark' ) {
        styles.color = '#ffffff';
      } else {
        styles.color = '';
      }

      styles.background = backgroundColor;
    } else {
      // A background gradient

      var rotation = '0deg';
      var randomNumber = Math.random();

      if ( getRandomBool() ) {
        if ( randomNumber > 0.75 ) {
          rotation = '270deg';
        } else if ( randomNumber > 0.5 ) {
          rotation = '180deg';
        } else if ( randomNumber > 0.25 ) {
          rotation = '90deg';
        } else {
          rotation = '0deg';
        }
      }

      var colors = [];
      var darkColors = 0;
      var colorCount = 2;

      for (var i = colorCount - 1; i >= 0; i--) {
        var color = getRandomHexColor()

        colors.push( color );

        if ( lightOrDark(color) == 'dark' ) {
          darkColors++;
        }
      }

      if ( darkColors >= 1 ) {
        styles.color = '#ffffff';
      }

      var gradient = 'linear-gradient(' + rotation + ', ' + colors.join(', ') + ')';

      styles.background = colors[0];
      styles.backgroundImage = gradient;
    }

    return styles;
  };

  var generateBoxShadow = function() {
    var styles = {};

    if ( getRandomBool() ) {
      styles.boxShadow = '';
    } else {
      var r = getRandomInt(100, 255);
      var g = getRandomInt(100, 255);
      var b = getRandomInt(100, 255);
      var a = getRandomFloat(0, 1);
      var color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
      var attributes = [
        getRandomInt(1, 5) + 'px',
        getRandomInt(1, 5) + 'px',
        getRandomInt(0, 5) + 'px',
        getRandomInt(1, 1) + 'px'
      ];
      var shadowStyle = getRandomBool() ? '' : ''

      styles.boxShadow = [
        attributes.join(' '),
        color,
        shadowStyle
      ].join(' ');
    }

    return styles;
  };



  var generateBorder = function(minBorder) {
    var styles = {};

    minBorder = minBorder === undefined ? 0 : minBorder;

    if ( getRandomBool() ) {
      styles.borderWidth = getRandomInt(minBorder, 2);
      styles.borderWidth = 1.5;
    } else {
      styles.borderWidth = getRandomInt(minBorder, 3);
      styles.borderWidth = 1.5;
    }

    styles.borderStyle = 'solid';

    return styles;
  };

  var generateBorderRadius = function() {
    var styles = {};

    styles.borderRadius = getRandomFloat(0, 2) + 'em';

    return styles;
  };

  var generateBorderColor = function() {
    var styles = {};

    var color = getRandomHexColor();

     while ( lightOrDark(color) == 'light' ) {
          color = getRandomHexColor();
      }

    styles.borderColor = color;
    styles.color = color;
    return styles;
  };

  var generatePageBackground = function() {
    var styles = {};
    var options = [
      'white',
      'white',
      'white',
      'aliceblue',
      'bisque',
      'ghostwhite',
      'honeydew',
      'lavender',
      'lavenderblush',
      // 'lightgreen',
      // 'lightgray',
      'lightblue',
      'lightred'

      // 'lightcoral',
      // 'palegreen'
    ];

    styles.background = options[Math.floor(Math.random()*options.length)];

    return styles;
  }

  // Logic that controls generating a random style on the fly.
  var generateStyle = function(index) {
    var styles = {

      allStyleableElements: {},
      styleableButtons: {},
      smallElements: {},
      page: {}
    };

    var borderRadius = generateBorderRadius();
    var smallBorderRadius = {
      'border-radius': ( parseFloat( borderRadius['borderRadius'] ) / 4 ) + 'em'
    };

    // All elements
    if ( index === undefined || index > 0 ) {
      var backgroundOnly = (index == 1);

      styles.allStyleableElements = $.extend( generateBackground(backgroundOnly), styles.allStyleableElements );
      styles.allStyleableElements = $.extend( generateBoxShadow(), styles.allStyleableElements );
    }

    styles.allStyleableElements = $.extend( generateBorderColor(), styles.allStyleableElements );

    // Buttons
    var minBorder = 0;
    if ( index == 0 ) minBorder = 1;

    styles.styleableButtons = $.extend( generateBorder(minBorder), styles.styleableButtons );
    styles.styleableButtons = $.extend( borderRadius, styles.styleableButtons );

    // Elements with smaller radius
    styles.smallElements = $.extend(smallBorderRadius, styles.smallElements );

    styles.allStyleableElementsAndButtons = $.extend( {}, styles.allStyleableElements, styles.styleableButtons );

    // Page styles
    styles.page = $.extend( generatePageBackground(), styles.page );

    return styles;
  };

  var generateSmallStrokeStyle = function() {
    var styles = {
      'border-width': '1px'
    };

    return styles;
  }

  // A list of all CSS properties that can be applied to a styleable element.
  var styleReset = {
    'background': '',
    'background-image': '',
    'color': '',
    'box-shadow': '',
    'border-radius': '',
    'border-color': '',
    'border-style': '',
    'border-width': ''
  };

  var pageStyleReset = {
    'background': ''
  }

  var resetStyleableElements = function() {
    App.$html.removeClass('has-styled-elements has-styled-background-elements').css(pageStyleReset);
    App.$nav.css(pageStyleReset);
    $allStyleableElements.css(styleReset).data('styles', null);
  };

  // A list of all elements that can be styled.
  var allStyleableElementSelectors = [
    '.styleable',
    '.button',
    '.square-button'
  ];

  if ( Modernizr.svgclippaths ) {
    // allStyleableElementSelectors.push('.star');
  }

  var $allStyleableElements = $( allStyleableElementSelectors.join(', ') );

  // Styleable buttons can have some additional styles added to them (like border-radius).
  var $styleableButtons = $allStyleableElements.filter('.yes-button');

  // Randomizes the swatches by choosing from the styles array.
  var randomizeSwatches = function($swatches) {
    $swatches.each(function(index) {
      var $swatch = $(this);
      var styles = generateStyle(index);

      $swatch.css(styles.allStyleableElementsAndButtons)
             .css(styles.smallElements)
             .data('styles', styles);
    });
  };

  var performElementStyle = function(styles, options) {
    options = options ? options : {};

    var skipReset = options.skipReset;
    var skipPageStyle = options.skipPageStyle;


    if ( !skipReset ) {
      resetStyleableElements();
    }

    if ( !skipPageStyle && styles.page ) {
      App.$html.add(App.$nav).css( styles.page );
    }

    App.$html.addClass('has-styled-elements');

    if ( styles.allStyleableElements.background ) {
      App.$html.addClass('has-styled-background-elements');
    }

    $allStyleableElements.css( styles.allStyleableElements )
    $styleableButtons.css( styles.styleableButtons );
  }

  randomizeSwatches( $('[data-swatch]') );

  $(document).on('click', '[data-swatch-refresh]', function() {
    var $swatchParent = $(this).closest('[data-swatch-parent]');

    randomizeSwatches( $swatchParent.find('[data-swatch]') );
  });

  $(document).on('click', '[data-swatch-reset]', function() {
    resetStyleableElements();
  });

  // When a user clicks a swatch, all styleable elements are applied
  // with that swatch's styles.
  $(document).on('click', '[data-swatch]', function() {
    stopSideshow()
    var $swatch = $(this);
    var styles = $swatch.data('styles');

    if ( typeof styles === 'undefined' ) {
      console.warn('Could not find swatch style for swatch', $swatch);
      return;
    }

    performElementStyle(styles);
  });

  // Special case for preset swatches, e.g. to match a brand's styles
  $(document).on('click', '[data-preset-swatch]', function() {
    stopSideshow()
    var $swatch = $(this);
    var swatchStyleName = $swatch.attr('data-preset-swatch');
    var styles = {};

    if ( swatchStyleName == 'bank1' ) {
      styles = {
        allStyleableElements: {
          'color': '#ffffff',
          'background': '#EA3323'
        },
        styleableButtons: {
          'border-radius': '15px',
          'border': 'none'
        }
      };
    } else if ( swatchStyleName == 'bank2' ) {
      styles = {
        allStyleableElements: {
          'color': '#ffffff',
          'background': '#ED702E'
        },
        styleableButtons: {
          'border-radius': '1px',
          'boxShadow': 'rgba(0,0,0,0.2) 2px 2px 2px 0px',
          'border': 'none'
        }
      };
    } else {
      console.warn('Could not find preset swatch style for swatch.', $swatch);
      return;
    }

    performElementStyle(styles);
  });

  var $styleguideSwatchSelector = $('#styleguide-swatch-selector');
  var $styleguideSwatches = $styleguideSwatchSelector.find('[data-swatch-attribute]');
  var $styleguideSwatchRefreshors = $styleguideSwatchSelector.find('[data-styleguide-swatch-refresh]');

  var randomizeStyleguideSwatches = function($swatches) {
    $swatches.each(function() {
      var $swatch = $(this);
      var swatchAttributeName = $swatch.attr('data-swatch-attribute');
      var swatchAttributeValue = $swatch.attr('data-swatch-attribute-value');
      var styles = {
        allStyleableElements: {},
        styleableButtons: {},
        page: {},
        smallElements: {}
      };

      if ( swatchAttributeName == 'border-color' ) {
        styles.allStyleableElements = $.extend( generateBorderColor(), styles.allStyleableElements );
        styles.allStyleableElements = $.extend( generateBorder(1), styles.allStyleableElements );
      } else if ( swatchAttributeName == 'background-color' ) {
        styles.allStyleableElements = $.extend( generateBackground(true), styles.allStyleableElements );
      } else if ( swatchAttributeName == 'random' ) {
        styles = generateStyle();
      } else if ( swatchAttributeName == 'border-radius' ) {
        if ( swatchAttributeValue ) {
          styles.styleableButtons = {
            'border-radius': swatchAttributeValue
          }
        } else {
          styles.styleableButtons = $.extend( generateBorderRadius(), styles.styleableButtons );
        }
      }

      if ( swatchAttributeName != 'border-radius' ) {
        styles.page = $.extend( generatePageBackground(), styles.page );
      }

      var swatchStyles = styles.allStyleableElementsAndButtons ? styles.allStyleableElementsAndButtons : styles.allStyleableElements;

      $swatch.css(swatchStyles)
             .css(styles.smallElements)
             .data('styles', styles);
    });
  };

  randomizeStyleguideSwatches($styleguideSwatches);

  $(document).on('click', '[data-styleguide-swatch-refresh]', function() {
    var $wrapper = $(this).closest('[data-swatch-parent]');
    var $swatches = $wrapper.find('[data-swatch-attribute]');
    randomizeStyleguideSwatches($swatches);
  });

  //pedro edit
  var instructions = [ "Login with your bank.", "Verify ID with your bank.", "Pay with your bank.", "Skip forms with your bank." , "Sign documents with your bank." ];
  var i_count = 0;
  $(document).on('click', '#jumbo-button', function() {
     var $swatches = $('#header__palette [data-swatch]');
      var $randomSwatch = $( $swatches[Math.floor(Math.random()*$swatches.length)] );
    
      $randomSwatch.trigger('click');
       randomizeSwatches( $('[data-swatch]') );
       console.log("test");
       i_count++;
        $(".header__page-title--home").text(instructions[i_count%instructions.length]);


        slideshow = setInterval(function(){ 

        $("#jumbo-button").trigger('click');
        // alert("Hello"); 
        console.log('switch');
      }, 5000);


     
  });

function stopSideshow() {
  clearInterval(slideshow);
}


var slideshow = setInterval(function(){ 

  $("#jumbo-button").trigger('click');
  // alert("Hello"); 
  console.log('switch');
}, 5000);







  //end of edit

  // Styleguide swatch selector
  $(document).on('click', '[data-swatch-attribute]', function() {
    var $swatch = $(this);
    var styles = $swatch.data('styles');
    var swatchAttribute = $swatch.attr('data-swatch-attribute');
    var skipReset = false;
    var skipPageStyle = false;

    if ( typeof styles === 'undefined' ) {
      console.warn('Could not find swatch style for swatch', $swatch);
      return;
    }

    if ( swatchAttribute == 'border-radius' ) {
      skipReset = true;
      skipPageStyle = true;
    }

    performElementStyle(styles, {
      skipReset: skipReset,
      skipPageStyle: skipPageStyle
    });
  });
});




// Elements in viewport on scroll

$(function() {
  var $elements = $('[data-apply-class-on-scroll]');

  if ( !$elements.length ) return;

  $(window).on('scroll.elementsInViewport', $.throttle(250, function() {
    $elements.each(function() {
      var $el = $(this);

      if ( App.inViewport( $el ) ) {
        var classToApply = $el.attr('data-apply-class-on-scroll');

        $el.addClass(classToApply);

        $elements = $elements.not($el);

        if ( !$elements.length ) {
          $(window).off('scroll.elementsInViewport');
        }
      }
    });
  }));

  $(window).trigger('scroll.elementsInViewport');
});

// External links

$(function() {
  var documentHost = document.location.href.split('/')[2];
  var internalLinkExceptions = ['mailto:', 'tel:', 'sms:'];

  var isExternalLink = function($el) {
    var href = $el.attr('href');
    var link = $el.get(0).href;
    var linkHost = link.split('/')[2];
    var internalLinkMatches = $.map(internalLinkExceptions, function(d) {
      if ( href ) {
        return href.indexOf(d) != -1;
      } else {
        return true;
      }
    });

    return linkHost != documentHost && ( $.inArray(true, internalLinkMatches) === -1 );
  };

  $('a').each(function() {
    var $link = $(this);

    if ( isExternalLink($link) ) {
      var target = $link.attr('target');

      if ( !target ) {
        target = '_blank';
      }

      $link.attr('target', '_blank')
           .addClass('external-link');
    }
  });
});


// Marquee

$(function() {
  var $marquees = $('.marquee');

  var animate = function($frame, marqueeTextWidth) {
    $frame.stop().transition({ x: 0 }, 0);
    $frame.stop().transition({ x: -marqueeTextWidth }, 6000, 'linear', function() {
      animate($frame, marqueeTextWidth);
    });
  };

  var initialize = function() {
    $marquees.each(function() {
      var $marquee = $(this);
      var $frame = $marquee.find('.marquee__frame');
      var $marqueeText = $marquee.find('.marquee__text');
      var marqueeWidth = $marquee.width();
      var marqueeTextWidth = $marqueeText.outerWidth(true);
      var num = Math.ceil( marqueeWidth / marqueeTextWidth );

      if ( !$marquee.data('originalFrame') ) {
        $marquee.data( 'originalFrame', $marquee.html() );
      }

      for (var i = num - 1; i >= 0; i--) {
        $frame.append( $marqueeText.clone() );
      }

      animate($frame, marqueeTextWidth);
    });
  };

  var destroy = function() {
    $marquees.each(function() {
      var $marquee = $(this);

      $marquee.empty().html( $marquee.data('originalFrame') );
    });
  };

  $(window).on('resize', $.debounce(500, function() {
    destroy();
    initialize();
  }));

  $marquees.css({ opacity: 0 });

  initialize();

  window.setTimeout(function() {
    destroy();
    initialize();

    $marquees.transition({ opacity: 1 }, 300);
  }, 500);
});

// Nav

(function() {
  var transitionDuration = 300;

  var isNavTransitioning = function() {
    return App.$body.hasClass('is-transitioning-nav');
  }

  var openNav = function() {
    if ( isNavTransitioning() ) return;

    App.$body.addClass('is-viewing-nav is-transitioning-nav');
    App.$nav.css({ opacity: 0 }).show().transition({ opacity: 1 }, transitionDuration, function() {
      App.$body.removeClass('is-transitioning-nav');
    });
  };

  var closeNav = function() {
    if ( isNavTransitioning() ) return;

    App.$body.removeClass('is-viewing-nav is-transitioning-nav');
    App.$nav.transition({ opacity: 0 }, transitionDuration, function() {
      App.$nav.hide();
      App.$body.removeClass('is-transitioning-nav');
    });
  };

  var isNavOpen = function() {
    return App.$body.hasClass('is-viewing-nav');
  };

  var toggleNav = function() {
    if ( isNavOpen() ) {
      closeNav();
    } else {
      openNav();
    }
  };

  $(document).on('click', '#hamburger', function() {
    toggleNav();
  });
})();

// Nav paint bucket button

$(function() {
  var delayBeforeFadeOut = 4000;
  var transitionDuration = 300;
  var transitionTimer;
  

  var isColorPickerTransitioning = function() {
    return App.$body.hasClass('is-transitioning-color-picker');
  }

  var closeColorPicker = function() {
    if ( isColorPickerTransitioning() ) return;

    App.$body.removeClass('is-viewing-color-picker is-transitioning-color-picker');
    App.$colorPicker.transition({ opacity: 0 }, transitionDuration, function() {
      App.$colorPicker.hide();
      App.$body.removeClass('is-transitioning-color-picker');
    });

    $(document).off('click.closeHeaderColorPalette');

    if ( transitionTimer ) window.clearTimeout(transitionTimer);
  };

  var openColorPicker = function() {
    if ( isColorPickerTransitioning() ) return;

    App.$body.addClass('is-viewing-color-picker is-transitioning-color-picker');
    App.$colorPicker.css({ opacity: 0 }).show().transition({ opacity: 1 }, transitionDuration, function() {
      App.$body.removeClass('is-transitioning-color-picker');
    });

    $(document).on('click.closeHeaderColorPalette', function(e) {
      if ( !$(e.target).closest('#header__palette').length ) {
        closeColorPicker();
      }
    });
  };

  var isColorPickerOpen = function() {
    return App.$body.hasClass('is-viewing-color-picker');
  };

  $(document).on('click', '#jumbo-button', function() {
     // openColorPicker();
     
  });


  var toggleColorPicker = function() {
    if ( App.breakpoint.isMobile() ) {

      var $swatches = $('#header__palette [data-swatch]');
      var $randomSwatch = $( $swatches[Math.floor(Math.random()*$swatches.length)] );

      $randomSwatch.trigger('click');
      return;
    } else {
      if ( isColorPickerOpen() ) {
        closeColorPicker();
      } else {
        openColorPicker();
      }
    }
  };

  $(document).on('click', '#header__paintbucket-button', function() {
    toggleColorPicker();
  });

  $(document).on('click.initialHeaderColorPaletteClick', function(e) {
    if ( !$(e.target).closest('#header__palette').length ) {
      closeColorPicker();
      $(document).off('click.initialHeaderColorPaletteClick');
    } else {
      if ( transitionTimer ) window.clearTimeout(transitionTimer);
    }
  });

  transitionTimer = window.setTimeout(function() {
    closeColorPicker();
  }, delayBeforeFadeOut);

  if ( App.breakpoint.isMobile() ) {
    App.$body.removeClass('is-viewing-color-picker');
  }

  if ( App.$body.hasClass('is-viewing-color-picker') ) {
     openColorPicker();
  } else {
    $(document).off('click.initialHeaderColorPaletteClick');
    if ( transitionTimer ) window.clearTimeout(transitionTimer);
  }
});

// Scroll up down buttons

$(document).on('click', '#home__carrot', function() {
  App.scrollTo( $('#section--customer') );
});

$(document).on('click', '#back-to-top-button', function() {
  App.scrollTo( App.$html );
});

// Smooth scroll

$(function() {
  if(location.hash.length > 1) {
    var hash = location.hash.substr(1);
    var $el = $('[name="' + hash + '"], #' + hash);

    // carousel modules can mess up spacing of page, so wait a second before scrolling
    setTimeout(function() {
      $el = $('[name="' + hash + '"], #' + hash);
      if($el.length) App.scrollTo($el);
    }, 250);
  }

});

$(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
  // If you want to disable the call to `e.preventDefault()` you can add a ` data-default-jump-link` attribute to the link.
  // This is good if e.g. you want to enable the default history behavior for jump links.
  // <a href="#jump-link" data-default-jump-link>the hash in this jump link get's added to the current URL as usual</a>

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && location.search == this.search) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      App.scrollTo(target);
      if( $(this).attr('data-default-jump-link') == undefined ) {
        e.preventDefault();
      }
    }
  }
});

App.scrollTo = function($target) {
  var smoothScrollOffset = 0;
  var duration = 2000;

  if(!$target.length) {
    console.warn('Can\'t find target to scroll to.', $target);
    return;
  }

  $('html, body').animate({
    scrollTop: $target.offset().top - smoothScrollOffset
  }, {
    duration: duration,
    easing: 'easeInOutQuart',
    complete: function() {
      // App.hideOnPageNav();
    }
  });
};

// Typewriter

$(function() {
  var $typeSetWrappers = $('[data-typewriter-set-wrapper]');
  var debug = false;

  if ( !$typeSetWrappers.length ) return;

  var isFirstInstance = true;

  var animateRightCustomerGraph = function() {
    var $scene = $('#customer__graph__col--right');
    var $sceneItems = $scene.find('.customer__graph__col--right__scene__item');
    // var $item = $sceneItems.first();
    // var $button = $item.find('.yes-button');
    // var $cursor = $item.find('.mouse-cursor');
    // var $arrow = $item.find('.down-arrow');



    var animateSceneItem = function($item) {
      var $arrow = $item.find('.down-arrow');
      var $cursor = $item.find('.mouse-cursor');
      var $button = $item.find('.yes-button');

      $item.addClass('scene-item-active animation-complete');

      $cursor.transition({ x: 80, y: 30 }, 0);
      $cursor.css({ opacity: 1 }).transition({ x: 0, y: 0 }, 1000, function() {
        $button.data( 'originalStyle', $button.attr('style') );
        $button.css({ background: 'black', color: 'white', transitionDuration: '0s' });

        window.setTimeout(function() {
          if ( $button.data('originalStyle') ) {
            $button.attr('style', $button.data('originalStyle'));
          } else {
            $button.removeAttr('style');
          }

          $arrow.addClass('active');

          window.setTimeout(function() {
            $cursor.transition({ opacity: 0 }, 50, function() {
              $cursor.remove();
            });

            $button.css({ transitionDuration: '' });

            console.log($item);

            
            $sceneItems = $sceneItems.not($item);


            if ( $sceneItems.length ) {
              window.setTimeout(function() {
                animateSceneItem( $sceneItems.first() );
              }, 250);
            }
          }, 100);

        }, 50);
        
      });
    };

    animateSceneItem( $sceneItems.first() );
  };

  var animateScene = function($typeSets) {
    // console.log('animateScene', $typeSets.length);

    var $typeSet = $typeSets.first();
    var $wrapper = $typeSet.closest('[data-typewriter-set-wrapper]');
    var $initialTypes = $typeSet.find('[data-typewriter]');
    var sceneLength = $initialTypes.length;
    var $arrow = $typeSet.find('.down-arrow');
    var instanceIndex = 0;
    var isComplete = $typeSet.attr('data-typewriter-complete') != undefined;

    $typeSets = $typeSets.not( $typeSet );

    $typeSet.addClass('active');

    if ( $arrow.length ) {
      $arrow.addClass('active');
    }

    var animateTypeInstance = function($types) {
      // console.log('animateTypeInstance', $types);

      var $type = $types.first();
      var text = $type.text();

      $types = $types.not($type);

      $types.css({ opacity: 0, position: 'absolute' });
      $type.css({ opacity: 1, position: 'relative' }).empty();

      var instance = new TypeIt($type.get(0), {
        speed: (debug ? 1 : 60),
        startDelay: (debug ? 0 : 250),
        waitUntilVisible: true,
        afterStep: function(step, queue, thisInstance) {
          if ( isFirstInstance ) {
            if ( $wrapper.hasClass('customer__graph__col--left') ) {
              animateRightCustomerGraph();
            }
          }

          isFirstInstance = false;
        },
        afterComplete: function(thisInstance) {
          instance.destroy();
          $type.html( $type.text().replace('*', '<span class="required">*</span>') );

          if ( (sceneLength == instanceIndex + 1) && $typeSets.length ) {
            animateScene($typeSets);
            instanceIndex = 0;
          } else {
            animateTypeInstance($types);
            instanceIndex++;
          }
        }
      })
      .type(text)
      .go();
    };

    var animateCompletionState = function($types) {
      $types.addClass('animation-complete');
    };

    if ( !isComplete ) {
      animateTypeInstance($initialTypes);
    } else {
      $typeSet.addClass('animation-complete');
    }
  };

  $typeSetWrappers.each(function() {
    var $typeSetWrapper = $(this);
    var $typeSets = $typeSetWrapper.find('[data-typewriter-set]');

    animateScene($typeSets);
  });
});
