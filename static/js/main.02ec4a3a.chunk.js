(this["webpackJsonpphoto-search-app"]=this["webpackJsonpphoto-search-app"]||[]).push([[0],{13:function(e,a,t){e.exports=t(29)},18:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(4),l=t.n(r),s=(t(18),t(3)),o=t(5);t(25);var i=function(e){var a=e.closeModalHandler,t=e.modal,c=e.showModal;return n.a.createElement("div",{className:"modal-overlay ".concat(c&&"modalActive")},n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal__closeBtn",onClick:function(){a()}},"\xd7"),n.a.createElement("div",{className:"modal__body"},n.a.createElement("img",{className:"modal__body__img",alt:t[0].alt_description,src:t[0].urls.raw}),n.a.createElement("div",{className:"modal__body__text"},n.a.createElement("p",{className:"auto-name"},t[0].user.name),n.a.createElement("p",{className:"auto-location"},t[0].user.location)))))};t(26);var d=function(){var e=Object(c.useState)([1,2,3,4,5,6,7,8,9]),a=Object(s.a)(e,1)[0];return n.a.createElement("div",{className:"loader-cards"},a.map((function(e){return n.a.createElement("div",{className:"loader-card animate",key:e},n.a.createElement("div",{className:"loader-card_body"},n.a.createElement("div",{className:"text-title animate"}),n.a.createElement("div",{className:"text-location animate"})))})))},m=(t(27),[{id:0,alt_description:"",user:{name:"",location:null},urls:{raw:""}}]);var u=Object(o.b)((function(e){return{data:e.data,modalData:e.modalData}}))((function(e){var a=e.dispatch,t=e.data,r=Object(c.useState)(""),l=Object(s.a)(r,2),o=l[0],u=l[1],p=Object(c.useState)(m),h=Object(s.a)(p,2),E=h[0],f=h[1],v=Object(c.useState)(!1),b=Object(s.a)(v,2),_=b[0],N=b[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"search-bar-cont"},n.a.createElement("div",{className:"search-bar-cont__search-bar ".concat(t.isFetching&&"hide")},n.a.createElement("span",{className:"search-bar-cont__search-icon"}),n.a.createElement("input",{type:"search",placeholder:"Search for photo",onKeyPress:function(e){if(""!==e.target.value&&"Enter"===e.key){var t=e.target.value,c="".concat("https://api.unsplash.com/search/photos?query=").concat(t).concat("&client_id=0fc8549db89ae4c1188627dcbfa7814ade834ef2ba33f5a738f9127b8eb1f11d");a(function(e){return function(a){a({type:"IS_FETCHING"}),fetch(e).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).then((function(e){var t=e.results;a({type:"IS_AVAILABLE",payload:t})})).catch((function(e){a({type:"IS_NOT_AVAILABLE",payload:e.massage})}))}}(c)),u(t)}},className:"search-bar-cont__input-field"})),n.a.createElement("div",{className:"searching-for ".concat(t.isFetching&&"show")},n.a.createElement("span",null,"Searching Results for"),n.a.createElement("span",null,'"'.concat(o,'"')))),n.a.createElement(i,{modal:E,showModal:_,closeModalHandler:function(){f(m),N(!_)}}),t.isFetching?n.a.createElement("div",{className:"skelental-loader"},n.a.createElement(d,null)):n.a.createElement("div",{className:"card-list"},t.data.length>0&&t.data.map((function(e){return n.a.createElement("div",{className:"card",key:e.id},n.a.createElement("img",{className:"card-photo",src:e.urls.raw,alt:e.alt_description,onClick:function(){!function(e){var a=t.data.slice().filter((function(a,t){return a.id===e}));f(a),N(!_)}(e.id)}}),n.a.createElement("div",{className:"card-text"},n.a.createElement("p",{className:"card-auto-name"},e.user.name),n.a.createElement("p",{className:"card-auto-location"},e.user.location)))}))),t.err&&0===t.data.length&&n.a.createElement("div",null,t.err))}));t(28);var p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null))},h=t(1),E=t(11),f=t(12),v=t(2),b={isFetching:!1,data:[],err:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_FETCHING":return Object(v.a)(Object(v.a)({},e),{},{isFetching:!0});case"IS_AVAILABLE":return{isFetching:!1,err:"",data:a.payload};case"IS_NOT_AVAILABLE":return Object(v.a)(Object(v.a)({},e),{},{err:a.payload});default:return Object(v.a)(Object(v.a)({},e),{},{isFetching:!1})}},N=Object(h.combineReducers)({data:_}),y=Object(h.createStore)(N,Object(E.composeWithDevTools)(Object(h.applyMiddleware)(f.a)));l.a.render(n.a.createElement(o.a,{store:y},n.a.createElement(p,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.02ec4a3a.chunk.js.map