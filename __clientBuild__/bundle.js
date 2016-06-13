webpackJsonp([0],{0:function(t,o,e){t.exports=e(1)},1:function(t,o,e){"use strict";var n=e(2);n.one.bootstrap()},2:function(t,o,e){"use strict";var n=e(3);o.one=n.one,o.Sync=n.Sync;var r=e(596),s=e(598);s.TodosCollection.instance.shareContext("collectionCode"),n.one.url="https://one-framework-sample.herokuapp.com",n.one.routes={path:"/",component:r.MainComponent,indexRoute:{component:r.TodosComponent},childRoutes:[{path:"/:status",component:r.TodosComponent}]}},596:function(t,o,e){"use strict";var n=e(597);o.MainComponent=n.Main;var r=e(602);o.TodosComponent=r.Todos;var s=e(603);o.TodoComponent=s.Todo;var i=e(604);o.InputComponent=i.Input},597:function(t,o,e){"use strict";var n=this&&this.__extends||function(t,o){function e(){this.constructor=t}for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n]);t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)},r=e(12),s=e(3),i=e(518),c=e(598),a=function(t){function o(o){t.call(this,o),this.collection=c.TodosCollection.instance}return n(o,t),o.preServer=function(){return c.TodosCollection.instance.fetch({reset:!0})},o.prototype.render=function(){return r.createElement("section",null,r.createElement("div",{className:"ui pointing menu"},r.createElement(i.Link,{className:"item",activeClassName:"active",onlyActiveOnIndex:!0,to:"/"},"All"),r.createElement(i.Link,{className:"item",activeClassName:"active",to:"/done"},"Done"),r.createElement("div",{className:"right menu"},r.createElement("a",{className:"item",href:"https://github.com/feliperohdee/one-framework-sample"},"Source"))),this.props.children)},o}(s.Component);o.Main=a},598:function(t,o,e){"use strict";var n=e(599);o.TodosCollection=n.Todos},599:function(t,o,e){"use strict";var n=this&&this.__extends||function(t,o){function e(){this.constructor=t}for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n]);t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)},r=e(3),s=e(600),i=function(t){function o(){t.call(this,s.TodoModel),this.resource="/api/v1/todos",this.defaultOrder={done:"desc",text:"asc"}}return n(o,t),Object.defineProperty(o,"instance",{get:function(){return r.utils.exportSingleton(o)},enumerable:!0,configurable:!0}),o.prototype.add=function(t){this.set({text:t})},o}(r.Collection);o.Todos=i},600:function(t,o,e){"use strict";var n=e(601);o.TodoModel=n.Todo},601:function(t,o,e){"use strict";var n=this&&this.__extends||function(t,o){function e(){this.constructor=t}for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n]);t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)},r=e(3),s=function(t){function o(){t.call(this),this.defaults={text:"",done:!1}}return n(o,t),o.prototype.done=function(){this.set({done:!0}).save().subscribe()},o.prototype.remove=function(){this["delete"]().subscribe()},o}(r.Model);o.Todo=s},602:function(t,o,e){"use strict";var n=this&&this.__extends||function(t,o){function e(){this.constructor=t}for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n]);t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)},r=e(10),s=e(12),i=e(3),c=e(598),a=e(596),u=function(t){function o(o){t.call(this,o),this.todos=c.TodosCollection.instance,this.setInitialState({todos:this.todos.filter(o.params.status)})}return n(o,t),o.prototype.componentDidMount=function(){var t=this;this.todos.on("set","remove").merge(this.onRoute.mapTo(this.todos)).takeUntil(this.onUnmount).map(function(o){return o.filter(t.props.params.status)}).subscribe(function(o){return t.setState({todos:o})})},o.prototype.render=function(){var t=this.state.todos.map(function(t){return s.createElement(a.TodoComponent,{key:t.cid,todo:t})});return s.createElement("section",{className:"ui divided list"},r.size(t)?t:s.createElement("div",{className:"item"},"No todos"),s.createElement(a.InputComponent,{todos:this.todos}))},o}(i.Component);o.Todos=u},603:function(t,o,e){"use strict";var n=this&&this.__extends||function(t,o){function e(){this.constructor=t}for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n]);t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)},r=e(12),s=e(3),i=function(t){function o(o){var e=this;t.call(this,o),this.lastSet=o.todo.lastSet,this.fromPool("onDone").subscribe(function(t){t.stopPropagation(),e.props.todo.done()}),this.fromPool("onDestroy").subscribe(function(t){t.stopPropagation(),e.props.todo.remove()})}return n(o,t),o.prototype.shouldComponentUpdate=function(t){var o=!1;return this.lastSet!==t.todo.lastSet&&(this.lastSet=t.todo.lastSet,o=!0),o},o.prototype.render=function(){var t=this;return r.createElement("div",{className:"item "+(this.props.todo.get("done")?"done":""),onClick:function(o){return t.toPool("onDone",o)}},r.createElement("div",{className:"right floated content"},r.createElement("button",{className:"ui icon red circular button",onClick:function(o){return t.toPool("onDestroy",o)}},r.createElement("i",{className:"trash icon"}))),r.createElement("div",{className:"content text"},r.createElement("i",{className:"icon "+(this.props.todo.get("done")?"checkmark box":"square outline")}),this.props.todo.get("text")))},o}(s.Component);o.Todo=i},604:function(t,o,e){"use strict";var n=this&&this.__extends||function(t,o){function e(){this.constructor=t}for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n]);t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)},r=e(12),s=e(3),i=function(t){function o(o){var e=this;t.call(this,o),this.fromPool("onAddTask").subscribe(function(t){if(13===t.keyCode){var o=t.target,n=o.value;o.value="",e.props.todos.add(n)}})}return n(o,t),o.prototype.render=function(){var t=this;return r.createElement("div",{className:"ui form"},r.createElement("div",{className:"field"},r.createElement("label",null,"Add Todo"),r.createElement("input",{type:"text",placeholder:"Add todo and press enter",onKeyUp:function(o){return t.toPool("onAddTask",o)}})))},o}(s.Component);o.Input=i}});
//# sourceMappingURL=bundle.js.map