(this["webpackJsonpphoto-search-app"]=this["webpackJsonpphoto-search-app"]||[]).push([[0],{13:function(e,a,t){e.exports=t(29)},18:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(4),l=t.n(r),o=(t(18),t(3)),s=t(5);t(25);var i=function(e){var a=e.closeModalHandler,t=e.modal,c=e.showModal;return n.a.createElement("div",{className:"modal-overlay ".concat(c&&"modalActive")},n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal__closeBtn",onClick:function(){a()}},"\xd7"),n.a.createElement("div",{className:"modal__body"},n.a.createElement("img",{className:"modal__body__img",alt:t[0].alt_description,src:t[0].urls.raw}),n.a.createElement("div",{className:"modal__body__text"},n.a.createElement("p",{className:"auto-name"},t[0].user.name),n.a.createElement("p",{className:"auto-location"},t[0].user.location)))))};t(26);var d=function(){var e=Object(c.useState)([1,2,3,4,5,6,7,8,9]),a=Object(o.a)(e,1)[0];return n.a.createElement("div",{className:"loader-cards"},a.map((function(e){return n.a.createElement("div",{className:"loader-card animate",key:e},n.a.createElement("div",{className:"loader-card_body"},n.a.createElement("div",{className:"text-title animate"}),n.a.createElement("div",{className:"text-location animate"})))})))},m=(t(27),[{id:0,alt_description:"",user:{name:"",location:null},urls:{raw:""}}]);var u=Object(s.b)((function(e){return{data:e.data,modalData:e.modalData}}))((function(e){var a=e.dispatch,t=e.data,r=Object(c.useState)(""),l=Object(o.a)(r,2),s=l[0],u=l[1],p=Object(c.useState)(m),E=Object(o.a)(p,2),h=E[0],v=E[1],_=Object(c.useState)(!1),f=Object(o.a)(_,2),b=f[0],N=f[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"search-bar-cont"},n.a.createElement("div",{className:"search-bar-cont__search-bar ".concat(t.isFetching&&"hide")},n.a.createElement("span",{className:"search-bar-cont__search-icon"}),n.a.createElement("input",{type:"search",placeholder:"Search for photo",onKeyPress:function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/photo-search-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_apiAccessKey;if(""!==e.target.value&&"Enter"===e.key){var c=e.target.value,n="".concat("https://api.unsplash.com/search/photos?query=").concat(c).concat(t);a(function(e){return function(a){a({type:"IS_FETCHING"}),fetch(e).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).then((function(e){var t=e.results;a({type:"IS_AVAILABLE",payload:t})})).catch((function(e){a({type:"IS_NOT_AVAILABLE",payload:e.massage})}))}}(n)),u(c)}},className:"search-bar-cont__input-field"})),n.a.createElement("div",{className:"searching-for ".concat(t.isFetching&&"show")},n.a.createElement("span",null,"Searching Results for"),n.a.createElement("span",null,'"'.concat(s,'"')))),n.a.createElement(i,{modal:h,showModal:b,closeModalHandler:function(){v(m),N(!b)}}),t.isFetching?n.a.createElement("div",{className:"skelental-loader"},n.a.createElement(d,null)):n.a.createElement("div",{className:"card-list"},t.data.length>0&&t.data.map((function(e){return n.a.createElement("div",{className:"card",key:e.id},n.a.createElement("img",{className:"card-photo",src:e.urls.raw,alt:e.alt_description,onClick:function(){!function(e){var a=t.data.slice().filter((function(a,t){return a.id===e}));v(a),N(!b)}(e.id)}}),n.a.createElement("div",{className:"card-text"},n.a.createElement("p",{className:"card-auto-name"},e.user.name),n.a.createElement("p",{className:"card-auto-location"},e.user.location)))}))),t.err&&0===t.data.length&&n.a.createElement("div",null,t.err))}));t(28);var p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null))},E=t(1),h=t(11),v=t(12),_=t(2),f={isFetching:!1,data:[],err:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"IS_FETCHING":return Object(_.a)(Object(_.a)({},e),{},{isFetching:!0});case"IS_AVAILABLE":return{isFetching:!1,err:"",data:a.payload};case"IS_NOT_AVAILABLE":return Object(_.a)(Object(_.a)({},e),{},{err:a.payload});default:return Object(_.a)(Object(_.a)({},e),{},{isFetching:!1})}},N=Object(E.combineReducers)({data:b}),O=Object(E.createStore)(N,Object(h.composeWithDevTools)(Object(E.applyMiddleware)(v.a)));l.a.render(n.a.createElement(s.a,{store:O},n.a.createElement(p,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a8f893f1.chunk.js.map