!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.vueTabCompleteInput=e()}(this,function(){var t=function(t){for(var e in this.options={maxCache:10,enableCache:!0,insertOrder:!1,returnRoot:!1,insert:null,sort:null,clip:null,copy:null,merge:null},this.root={},this.index=0,t)t.hasOwnProperty(e)&&(this.options[e]=t[e]);"function"!=typeof this.options.insert&&(this.options.insert=function(t,e){return this.options.insertOrder&&void 0===e.d&&void 0===e.o&&(e={d:e,o:this.index++}),t&&t.length?t.push(e):t=[e],t}),"function"!=typeof this.options.sort&&(this.options.insertOrder?this.options.insertOrder&&(this.options.sort=function(){this.sort(function(t,e){return t.o-e.o})}):this.options.sort=function(){this.sort()}),"function"!=typeof this.options.clip&&(this.options.clip=function(t){this.length>t&&this.splice(t,this.length-t)}),"function"!=typeof this.options.copy&&(this.options.copy=function(t){return t.slice(0)}),"function"!=typeof this.options.merge&&(this.options.merge=function(t,e,o){for(var i=0,s=e.length;i<s;i++)t=this.options.insert.call(this,t,e[i]),this.options.sort.call(t,o),this.options.clip.call(t,this.options.maxCache);return t})};return t.prototype={_addCacheData:function(t,e){return!(this.root===t&&!this.options.returnRoot||!1===this.options.enableCache)&&(t.$d||(t.$d={}),t.$d=this.options.insert.call(this,t.$d,e),this.options.sort.call(t.$d),this.options.clip.call(t.$d,this.options.maxCache),!0)},_addSuffix:function(t,e,o){var i=t.charAt(0),s=t.substring(1)||null,n={$d:{}};s&&(n.$s=s),void 0===o[i]?o[i]=n:void 0===o[i].$d&&(o[i].$d={},s&&void 0===o[i].$s&&(o[i].$s=s)),o[i].$d=this.options.insert.call(this,o[i].$d,e),this.options.sort.call(o[i].$d)},_moveSuffix:function(t,e,o){var i=t.charAt(0),s=t.substring(1)||null,n={$d:{}};s&&(n.$s=s),void 0===o[i]&&(o[i]=n),o[i].$d=this.options.copy(e)},_getDataAtNode:function(t,e){var o;return this.options.enableCache?(this.options.sort.call(t.$d,e),o=t.$d):o=this._getSubtree(t,e),this.options.insertOrder&&(o=this._stripInsertOrder(o)),o?this.options.copy(o):void 0},_stripInsertOrder:function(t){if(void 0!==t){for(var e=[],o=0,i=t.length;o<i;o++)e.push(t[o].d);return e}},_getSubtree:function(t,e){for(var o,i,s=[t];i=s.pop();)for(var n in i)i.hasOwnProperty(n)&&("$d"==n?(void 0===o&&(o=[]),o=this.options.merge.call(this,o,i.$d,e)):"$s"!=n&&s.push(i[n]));return o},add:function(t,e){if("string"!=typeof t)return!1;1==arguments.length&&(e=t),t=t.toLowerCase();for(var o=this.root,i=0,s=t.length;i<s;i++){var n=t.charAt(i);if(o[n])i==s-1?(this._addCacheData(o,e),this._addCacheData(o[n],e)||this._addSuffix(n,e,o)):(this._addCacheData(o,e),o=o[n]);else{if(o.$s){if(o.$s==t.substring(i)){this._addCacheData(o,e)||(o.$d=this.options.insert.call(this,o.$d,e),this.options.sort.call(o.$d));break}this._moveSuffix(o.$s,o.$d,o),delete o.$s,!1===this.options.enableCache&&delete o.$d}if(!o[n]){this._addSuffix(t.substring(i),e,o),this._addCacheData(o,e);break}this._addCacheData(o,e),i==s-1&&(o[n].$s?(this._moveSuffix(o[n].$s,o[n].$d,o[n]),delete o[n].$s,!1===this.options.enableCache&&delete o[n].$d,this._addSuffix(n,e,o)):this._addCacheData(o[n],e)||this._addSuffix(n,e,o)),o=o[n]}}},remove:function(t){if("string"==typeof t&&""!==t&&!this.options.enableCache){t=t.toLowerCase();var e,o,i,s,n,r,a=this.root,d=0;for(o=0,i=t.length;o<i;o++){if(!a[e=t.charAt(o)]){if(a.$s&&a.$s===t.substring(o))break;return}s=a,n=e,a=a[e]}for(var l in r=this.options.copy(a.$d),this.options.insertOrder&&(r=this._stripInsertOrder(r)),delete a.$d,delete a.$s,a)a.hasOwnProperty(l)&&d++;return d||delete s[n],r}},contains:function(t){if("string"!=typeof t||""==t)return!1;t=t.toLowerCase();for(var e=this.root,o=0,i=t.length;o<i;o++){var s=t.charAt(o);if(!e[s])return!(!e.$s||e.$s!==t.substring(o));e=e[s]}return!(!e.$d||void 0!==e.$s)},find:function(t){if("string"==typeof t&&(""!=t||this.options.returnRoot)){t=t.toLowerCase();for(var e=this.root,o=0,i=t.length;o<i;o++){var s=t.charAt(o);if(!e[s])return e.$s&&0==e.$s.indexOf(t.substring(o))?this._getDataAtNode(e,t):void 0;e=e[s]}return this._getDataAtNode(e,t)}}},{name:"tab-complete-input",data:function(){return{trie:{},position:0,wordPos:0,index:0,words:[],word:"",dynamicData:!1,possible:!1,saved:!1,localValue:this.value}},render:function(t){var e=this;return t("input",{ref:"input",attrs:Object.assign({},e.$props),domProps:{value:e.value},directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"value"}],on:Object.assign({},e.$listeners,{keydown:e.$listeners.keydown?[e.tabComplete,e.$listeners.keydown]:e.tabComplete,input:function(t){e.localValue=t.target.value,e.$emit("input",t.target.value)}})})},created:function(){this.dynamicData=this.dataSource instanceof Function,this.dynamicData||this.setData(this.dataSource)},props:{dataSource:{default:[]},format:{default:function(t,e,o){return{word:t,prev:e}},type:Function},value:{default:"",type:String}},methods:{setData:function(e){var o=this;this.trie=new t,e.forEach(function(t){o.trie.add(t)})},tabComplete:function(t){try{var e=this;function o(){if(e.possible&&e.index>=e.possible.length&&(e.index=0),e.possible){t&&t.preventDefault();var o=e.words,i="";o.length>1&&(i=o[e.wordPos-1]);var s=e.format(e.possible[e.index],i,e.wordPos);o[e.wordPos]=s.word,s.prev&&(o[e.wordPos-1]=s.prev);var n=e.words.slice(0,e.wordPos+1).join(" ").length;e.localValue=o.join(" "),e.localValue=e.localValue.slice(0,n)+e.localValue.slice(n+1),e.updateValue(e.localValue),e.selectRange(n,n)}}if(t&&9!==t.keyCode)return e.saved=!1,e.index=0,Promise.resolve();var i=function(){if(!e.saved){function o(){e.saved=!0,e.possible=e.trie.find(e.word)}e.position=e.getCursorPos();var i=e.localValue.slice(0,e.position)+" "+e.localValue.slice(e.position);e.words=i.split(" ");for(var s=0,n=0;n<e.words.length;n++){if((s+=e.words[n].length+1)>=e.position){e.word=e.words[n],e.wordPos=n;break}}""!=e.word&&t&&t.preventDefault();var r=function(){if(e.dynamicData){var t=e.dataSource(e.word,e.wordPos);return Promise.resolve(t).then(function(t){e.setData(t)})}}();return r&&r.then?r.then(o):o()}e.index++}();return Promise.resolve(i&&i.then?i.then(o):o())}catch(t){return Promise.reject(t)}},updateValue:function(t){this.localValue=t,this.$emit("input",t)},selectRange:function(t,e){this.$el.focus(),this.$el.setSelectionRange(t,e)},getCursorPos:function(){return this.$el.selectionStart}}}});
//# sourceMappingURL=tab-complete-input.umd.js.map
