import t from"vue";const e={enableCache:!0,insertOrder:!1,returnRoot:!1};class o{constructor(t){this.options=e,this.root={},this.index=0;for(const e in t)t.hasOwnProperty(e)&&(this.options[e]=t[e]);"function"!=typeof this.options.insert&&(this.options.insert=(t,e)=>{let o;return this.options.insertOrder&&!function(t){return void 0!==t.d&&void 0!==t.o}(e)&&(o={d:e,o:this.index++}),t&&t.length?t.push(e):t=[e],t}),"function"!=typeof this.options.sort&&(this.options.insertOrder?this.options.insertOrder&&(this.options.sort=function(){this.sort((t,e)=>void 0===t.o||void 0===e.o?0:t.o-e.o)}):this.options.sort=function(){this.sort()}),"function"!=typeof this.options.clip&&(this.options.clip=function(t){this.length>t&&this.splice(t,this.length-t)}),"function"!=typeof this.options.copy&&(this.options.copy=t=>t.slice(0)),"function"!=typeof this.options.merge&&(this.options.merge=(t,e,o)=>{for(let s=0,i=e.length;s<i;s++)t=this.options.insert.call(this,t,e[s]),this.options.sort.call(t,o);return t})}_addCacheData(t,e){return!(this.root===t&&!this.options.returnRoot||!1===this.options.enableCache||(t.$d||(t.$d={}),t.$d=this.options.insert.call(this,t.$d,e),this.options.sort.call(t.$d),0))}_addSuffix(t,e,o){const s=t.charAt(0),i=t.substring(1)||null,n={$d:{}};i&&(n.$s=i),void 0===o[s]?o[s]=n:void 0===o[s].$d&&(o[s].$d={},i&&void 0===o[s].$s&&(o[s].$s=i)),o[s].$d=this.options.insert.call(this,o[s].$d,e),this.options.sort.call(o[s].$d)}_moveSuffix(t,e,o){const s=t.charAt(0),i=t.substring(1)||null,n={$d:{}};i&&(n.$s=i),void 0===o[s]&&(o[s]=n),o[s].$d=this.options.copy(e)}_getDataAtNode(t,e){let o;return this.options.enableCache?(this.options.sort.call(t.$d,e),o=t.$d):o=this._getSubtree(t,e),this.options.insertOrder&&(o=this._stripInsertOrder(o)),o?this.options.copy(o):void 0}_stripInsertOrder(t){if(void 0===t)return;const e=[];for(let o=0,s=t.length;o<s;o++)e.push(t[o].d);return e}_getSubtree(t,e){let o=[];const s=[t];let i;for(;i=s.pop();)for(const t in i)i.hasOwnProperty(t)&&("$d"==t?o=this.options.merge.call(this,o,i.$d,e):"$s"!=t&&s.push(i[t]));return o}add(t,e){if("string"!=typeof t)return!1;1==arguments.length&&(e=t),t=t.toLowerCase();let o=this.root;for(let s=0,i=t.length;s<i;s++){const n=t.charAt(s);if(o[n])s==i-1?(this._addCacheData(o,e),this._addCacheData(o[n],e)||this._addSuffix(n,e,o)):(this._addCacheData(o,e),o=o[n]);else{if(o.$s){if(o.$s==t.substring(s)){this._addCacheData(o,e)||(o.$d=this.options.insert.call(this,o.$d,e),this.options.sort.call(o.$d));break}this._moveSuffix(o.$s,o.$d,o),delete o.$s,!1===this.options.enableCache&&delete o.$d}if(!o[n]){this._addSuffix(t.substring(s),e,o),this._addCacheData(o,e);break}this._addCacheData(o,e),s==i-1&&(o[n].$s?(this._moveSuffix(o[n].$s,o[n].$d,o[n]),delete o[n].$s,!1===this.options.enableCache&&delete o[n].$d,this._addSuffix(n,e,o)):this._addCacheData(o[n],e)||this._addSuffix(n,e,o)),o=o[n]}}}contains(t){if("string"!=typeof t||""==t)return!1;t=t.toLowerCase();let e=this.root;for(let o=0,s=t.length;o<s;o++){const s=t.charAt(o);if(!e[s])return!(!e.$s||e.$s!==t.substring(o));e=e[s]}return!(!e.$d||void 0!==e.$s)}find(t){if("string"!=typeof t)return;if(""==t&&!this.options.returnRoot)return;t=t.toLowerCase();let e=this.root;for(let o=0,s=t.length;o<s;o++){const s=t.charAt(o);if(!e[s])return e.$s&&0==e.$s.indexOf(t.substring(o))?this._getDataAtNode(e,t):void 0;e=e[s]}return this._getDataAtNode(e,t)}}function s(t,e){var o=t();return o&&o.then?o.then(e):e(o)}var i,n=t.extend({name:"tab-complete-input",data(){return{trie:new o,position:0,wordPos:0,index:0,words:[],word:"",dynamicData:!1,possible:!1,saved:!1,localValue:this.value}},render(t){const e=this;return t("input",{ref:"input",attrs:{...e.$props},domProps:{value:e.value},directives:[{name:"model",value:e.localValue,expression:"value"}],on:{...e.$listeners,keydown:e.$listeners.keydown?[e.tabComplete,e.$listeners.keydown]:e.tabComplete,input(t){e.localValue=t.target.value,e.$emit("input",t.target.value)}}})},created(){this.dynamicData=this.dataSource instanceof Function,this.dynamicData||this.setData(this.dataSource)},props:{dataSource:{default:()=>[]},format:{default:(t,e,o)=>({word:t,prev:e}),type:Function},value:{default:"",type:String}},watch:{dataSource(t){this.dynamicData=t instanceof Function,this.dynamicData||this.setData(t)}},methods:{setData(t){this.trie=new o,t.forEach(t=>{this.trie.add(t)})},tabComplete:(i=function(t){const e=this;return t&&9!==t.keyCode?(e.saved=!1,void(e.index=0)):s(function(){if(!e.saved){e.position=e.getCursorPos();const n=e.localValue.slice(0,e.position)+" "+e.localValue.slice(e.position);e.words=n.split(" ");for(var o=0,i=0;i<e.words.length;i++)if((o+=e.words[i].length+1)>=e.position)return e.word=e.words[i],void(e.wordPos=i);return""!=e.word&&t&&t.preventDefault(),s(function(){if(e.dynamicData)return o=function(t){e.setData(t)},(t=e.dataSource(e.word,e.wordPos))&&t.then||(t=Promise.resolve(t)),o?t.then(o):t;var t,o},function(){e.saved=!0,e.possible=e.trie.find(e.word)})}e.index++},function(){if(e.possible&&e.index>=e.possible.length&&(e.index=0),e.possible){t&&t.preventDefault();let o=e.words,s="";o.length>1&&(s=o[e.wordPos-1]);let i=e.format(e.possible[e.index],s,e.wordPos);o[e.wordPos]=i.word,i.prev&&(o[e.wordPos-1]=i.prev);let n=e.words.slice(0,e.wordPos+1).join(" ").length;e.localValue=o.join(" "),e.localValue=e.localValue.slice(0,n)+e.localValue.slice(n+1),e.updateValue(e.localValue),e.$nextTick(()=>e.selectRange(n,n))}})},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(i.apply(this,t))}catch(t){return Promise.reject(t)}}),updateValue(t){this.localValue=t,this.$emit("input",t)},selectRange(t,e){this.$el.focus(),this.$el.setSelectionRange(t,e)},getCursorPos(){return this.$el.selectionStart}}});export default n;
//# sourceMappingURL=tab-complete-input.modern.js.map
