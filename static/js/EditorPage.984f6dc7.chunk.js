(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[14],{1345:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(479);e.default=function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(o.a,{title:"editor\u9875\u9762",source:"\u8fd9\u4e2a\u9875\u9762\u53ea\u6709admin\u548ceditor\u89d2\u8272\u624d\u53ef\u4ee5\u8bbf\u95ee\uff0cguest\u89d2\u8272\u770b\u4e0d\u5230"}))}},479:function(t,e,n){"use strict";n(486);var a=n(485),i=n(0),o=n.n(i),r=n(43),s=n(44),c=function(){function t(e){Object(r.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(s.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var o=[];o=this.convert(i,o),e.push({dom:i,val:o})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var a=n.dom.cloneNode();t.dom.appendChild(a),this.play({parent:t,dom:a,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),u=function(t){var e=t.title,n=t.source,r=Object(i.useRef)(),s=Object(i.useRef)();return Object(i.useEffect)((function(){new c({source:r.current,output:s.current,delay:30}).start()}),[]),o.a.createElement(a.a,{bordered:!1,className:"card-item",title:e},o.a.createElement("div",{style:{display:"none"},ref:r,dangerouslySetInnerHTML:{__html:n}}),o.a.createElement("div",{ref:s}))};u.defaultProps={title:"",source:""};e.a=u}}]);