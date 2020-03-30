"use strict"
define("dom-snapshot-ui/app",["exports","ember-resolver","ember-load-initializers","dom-snapshot-ui/config/environment"],(function(e,t,n,o){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class s extends Ember.Application{constructor(...e){super(...e),i(this,"modulePrefix",o.default.modulePrefix),i(this,"podModulePrefix",o.default.podModulePrefix),i(this,"Resolver",t.default)}}e.default=s,(0,n.default)(s,o.default.modulePrefix)})),define("dom-snapshot-ui/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ember-gisty",["exports","ember-cli-gisty/components/ember-gisty"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/snapshot-list",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({currentIndex:Ember.computed("selectedSnapshot","model.[]",(function(){return this.model.indexOf(this.model.find(e=>e.id==this.selectedSnapshot))})),prev:Ember.computed("currentIndex",(function(){return this.model[this.currentIndex-1]})),next:Ember.computed("currentIndex",(function(){return this.model[this.currentIndex+1]})),actions:{loadSnapshot(e){this.sendAction("loadSnapshot",e)},removeSnapshot(){confirm(`Remove snapshot ${this.get("selectedSnapshot")}?`)&&this.sendAction("removeSnapshot",this.get("selectedSnapshot"))}}})
e.default=t})),define("dom-snapshot-ui/components/snapshot-viewer",["exports","jquery"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({didInsertElement(){this._super(...arguments),this.sendAction("sendNode",(0,t.default)(this.element).find("iframe").contents().find("body")[0])},attributeBindings:["draggable"],classNames:["ui","segment"],draggable:!0,visible:!0,x:0,y:0,iframeHeight:1080,scale:.5,iframeWidth:1920,positionChanged:Ember.observer("x","y",(function(){(0,t.default)(this.element).css({left:`${this.get("x")}px`,top:`${this.get("y")}px`})})),dragStart(e){var n=parseInt((0,t.default)(this.element).css("left"))-e.originalEvent.clientX,o=parseInt((0,t.default)(this.element).css("top"))-e.originalEvent.clientY
e.originalEvent.dataTransfer.setData("position",`${n},${o}`)},windowDrop(e){var t=e.dataTransfer.getData("position").split(",")
this.setProperties({x:`${e.originalEvent.clientX+parseInt(t[0])}`,y:`${e.originalEvent.clientY+parseInt(t[1])}`})},windowDragOver(e){e.originalEvent.preventDefault()},didRender(){(0,t.default)(document).on("drop",t.default.proxy(this.windowDrop,this)).on("dragover",t.default.proxy(this.windowDragOver,this))},didDestroyElement(){(0,t.default)(document).off("drop").off("dragover")}})
e.default=n})),define("dom-snapshot-ui/components/ui-accordion",["exports","semantic-ui-ember/components/ui-accordion"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-checkbox",["exports","semantic-ui-ember/components/ui-checkbox"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-dimmer",["exports","semantic-ui-ember/components/ui-dimmer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-dropdown",["exports","semantic-ui-ember/components/ui-dropdown"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-embed",["exports","semantic-ui-ember/components/ui-embed"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-modal",["exports","semantic-ui-ember/components/ui-modal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-nag",["exports","semantic-ui-ember/components/ui-nag"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-popup",["exports","semantic-ui-ember/components/ui-popup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-progress",["exports","semantic-ui-ember/components/ui-progress"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-radio",["exports","semantic-ui-ember/components/ui-radio"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-rating",["exports","semantic-ui-ember/components/ui-rating"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-search",["exports","semantic-ui-ember/components/ui-search"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-shape",["exports","semantic-ui-ember/components/ui-shape"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-sidebar",["exports","semantic-ui-ember/components/ui-sidebar"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/components/ui-sticky",["exports","semantic-ui-ember/components/ui-sticky"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/helpers/app-version",["exports","dom-snapshot-ui/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function o(e,o={}){const i=t.default.APP.version
let s=o.versionOnly||o.hideSha,a=o.shaOnly||o.hideVersion,r=null
return s&&(o.showExtended&&(r=i.match(n.versionExtendedRegExp)),r||(r=i.match(n.versionRegExp))),a&&(r=i.match(n.shaRegExp)),r?r[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var i=Ember.Helper.helper(o)
e.default=i})),define("dom-snapshot-ui/helpers/format-name",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Helper.helper((function([e]){const[t,n]=e.split("-")
return new Date(parseInt(n.trim(),10)).toLocaleString()}))
e.default=t})),define("dom-snapshot-ui/helpers/map-value",["exports","semantic-ui-ember/helpers/map-value"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"mapValue",{enumerable:!0,get:function(){return t.mapValue}})})),define("dom-snapshot-ui/helpers/route-action",["exports","ember-route-action-helper/helpers/route-action"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dom-snapshot-ui/config/environment"],(function(e,t,n){let o,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(o=n.default.APP.name,i=n.default.APP.version)
var s={name:"App Version",initialize:(0,t.default)(o,i)}
e.default=s})),define("dom-snapshot-ui/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){let e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dom-snapshot-ui/initializers/export-application-global",["exports","dom-snapshot-ui/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,i=t.default.exportApplicationGlobal
o="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var o={name:"export-application-global",initialize:n}
e.default=o})),define("dom-snapshot-ui/mixins/base",["exports","semantic-ui-ember/mixins/base"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dom-snapshot-ui/router",["exports","dom-snapshot-ui/config/environment"],(function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends Ember.Router{constructor(...e){super(...e),n(this,"location",t.default.locationType),n(this,"rootURL",t.default.rootURL)}}e.default=o,o.map((function(){}))})),define("dom-snapshot-ui/routes/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({beforeModel(){return this.snapshot=window.snapshoter,this.snapshot.getBodyNode=()=>this.viewNode,this.snapshot.loaded()},loadModel(){this.existingElements=[]
const e=this
return this.snapshot.firebase.database().ref("/snapshots-list").once("value").then((function(t){const n=t.val()
return e.existingElements=Object.keys(n),Object.keys(n).map(e=>({id:e,name:`snapshot - ${e}`})).reverse()}))},model(){return this.loadModel()},afterModel(){this._super(...arguments)
var e=this.snapshot.firebase.database().ref("/snapshots-list")
const t=this
e.limitToLast(1).on("child_added",(function(e){const n=e.key
t.existingElements.includes(n)||t.send("reloadModel")})),e.on("child_changed",(function(e){console.log("child_changed",e,e.val())})),e.on("child_removed",e=>{console.log("child_removed",e)})},actions:{async removeSnapshot(e){if(1503571368954==e)return
await this.snapshot.firebase.database().ref("/snapshots-list/"+e).remove(),await this.snapshot.firebase.database().ref("/snapshots/"+e).remove()
let t=this.controller.model.indexOf(this.controller.model.find(t=>t.id==e))+1
this.send("reloadModel",this.controller.model[t].id)},async reloadModel(e){let t=await this.loadModel()
this.controller.set("model",t),e&&this.send("loadSnapshot",e)},loadSnapshot(e){try{this.controller.set("selectedSnapshot",e),this.viewNode.parentNode.querySelector("head").innerHTML="",this.viewNode.innerHTML="<b>Loading...</b>",this.snapshot.showSnapshot(e).catch(t=>{confirm("Remove broken snapshot?")?this.send("removeSnapshot",e):console.log(t)})}catch(t){alert("Snapshot load error")}},sendNode(e){this.viewNode=e,this.send("loadSnapshot",1503571368954)}}})
e.default=t}))
define("dom-snapshot-ui/templates/appliaction-loading",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"/sNWrCHT",block:'{"symbols":[],"statements":[[0,"Loading..."]],"hasEval":false}',meta:{moduleName:"dom-snapshot-ui/templates/appliaction-loading.hbs"}})
e.default=t})),define("dom-snapshot-ui/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Tl5Q2lft",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","ui grid container"],[8],[0,"\\n  "],[7,"div",true],[10,"class","row"],[8],[0,"\\n    "],[5,"ember-gisty",[],[["@user","@gist"],["lifeart","5a39eaead95248d10d554cd29b926361"]]],[0,"\\n    "],[5,"snapshot-viewer",[[12,"id","snapshot-viewer"]],[["@sendNode"],[[28,"route-action",["sendNode"],null]]],{"statements":[[0,"\\n      "],[5,"snapshot-list",[],[["@model","@loadSnapshot","@removeSnapshot","@selectedSnapshot"],[[23,0,["model"]],[28,"route-action",["loadSnapshot"],null],[28,"route-action",["removeSnapshot"],null],[23,0,["selectedSnapshot"]]]]],[0,"\\n    "]],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n  "],[7,"div",true],[10,"class","row"],[8],[0,"\\n    "],[1,[22,"outlet"],false],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"dom-snapshot-ui/templates/application.hbs"}})
e.default=t})),define("dom-snapshot-ui/templates/components/snapshot-list",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"y89TJ+eQ",block:'{"symbols":["snapshot","@selectedSnapshot","&default"],"statements":[[4,"ui-dropdown",null,[["class","selected","onChange"],["selection",[23,2,[]],[28,"action",[[23,0,[]],"loadSnapshot"],null]]],{"statements":[[7,"div",true],[10,"class","default text"],[8],[0,"Snapshot"],[9],[0,"\\n"],[7,"i",true],[10,"class","dropdown icon"],[8],[9],[0,"\\n"],[7,"div",true],[10,"class","menu"],[8],[0,"\\n"],[4,"each",[[24,["model"]]],null,{"statements":[[0,"  "],[7,"div",true],[10,"class","item"],[11,"data-value",[29,[[23,1,["id"]]]]],[8],[0,"\\n    "],[1,[28,"format-name",[[23,1,["name"]]],null],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,2,[]]],null,{"statements":[[7,"button",true],[10,"style","margin-left:5px;"],[10,"class","ui icon button"],[11,"onclick",[28,"action",[[23,0,[]],"removeSnapshot"],null]],[8],[0,"\\n  "],[7,"i",true],[10,"class","trash icon"],[8],[9],[0,"\\n"],[9],[0,"\\n"],[4,"if",[[23,0,["next"]]],null,{"statements":[[7,"button",false],[12,"style","margin-left:5px;"],[12,"class","ui icon button"],[3,"action",[[23,0,[]],"loadSnapshot",[23,0,["next","id"]]]],[8],[0,"\\n  prev\\n"],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,0,["prev"]]],null,{"statements":[[7,"button",false],[12,"style","margin-left:5px;"],[12,"class","ui icon button"],[3,"action",[[23,0,[]],"loadSnapshot",[23,0,["prev","id"]]]],[8],[0,"\\n  next\\n"],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[14,3],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dom-snapshot-ui/templates/components/snapshot-list.hbs"}})
e.default=t})),define("dom-snapshot-ui/templates/components/snapshot-viewer",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"CP2ZC4el",block:'{"symbols":["&default"],"statements":[[7,"div",true],[10,"class","ui grid"],[8],[0,"\\n\\n"],[7,"div",true],[10,"class","row"],[8],[0,"\\n  "],[7,"div",true],[10,"class","seven wide column"],[8],[0,"\\n  "],[7,"div",true],[10,"class","ui labeled input"],[8],[0,"\\n    "],[7,"div",true],[10,"class","ui label"],[8],[0,"\\n      width\\n    "],[9],[0,"\\n      "],[1,[28,"input",null,[["type","placeholder","step","min","value"],["number","width","10","0",[24,["iframeWidth"]]]]],false],[0,"\\n  "],[9],[0,"\\n  \\n   "],[7,"div",true],[10,"class","ui labeled input"],[8],[0,"\\n    "],[7,"div",true],[10,"class","ui label"],[8],[0,"\\n      height\\n    "],[9],[0,"\\n    "],[1,[28,"input",null,[["type","placeholder","step","min","value"],["number","height","10","0",[24,["iframeHeight"]]]]],false],[0,"\\n  "],[9],[0,"\\n\\n   "],[7,"div",true],[10,"class","ui labeled input"],[8],[0,"\\n    "],[7,"div",true],[10,"class","ui label"],[8],[0,"\\n      scale\\n    "],[9],[0,"\\n    "],[1,[28,"input",null,[["type","placeholder","step","min","value"],["number","scale","0.05","0",[24,["scale"]]]]],false],[0,"\\n  "],[9],[0,"\\n\\n\\n  \\n  "],[9],[0,"\\n\\n "],[7,"div",true],[10,"class","five wide column"],[8],[0,"\\n  "],[14,1],[0,"\\n"],[9],[0,"\\n"],[9],[0,"\\n\\n\\n\\n"],[7,"div",true],[10,"class","row"],[8],[0,"\\n"],[7,"iframe",true],[10,"id","myFrame"],[11,"style",[29,["min-height:",[22,"iframeHeight"],"px;min-width:",[22,"iframeWidth"],"px;transform:scale(",[22,"scale"],");"]]],[10,"name","myFrame"],[10,"class","snapshot-viewer"],[8],[9],[0,"\\n"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dom-snapshot-ui/templates/components/snapshot-viewer.hbs"}})
e.default=t})),define("dom-snapshot-ui/config/environment",[],(function(){try{var e="dom-snapshot-ui/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dom-snapshot-ui/app").default.create({name:"dom-snapshot-ui",version:"0.0.0+795b8900"})