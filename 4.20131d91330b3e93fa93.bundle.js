(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{305:function(e,t,a){},307:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(16),i=a(8),c=a(17),l=(a(305),Object(r.memo)((function(e){var t=e.className,a=e.label,r=["header-ubuntu",t].join(" ");return n.a.createElement("div",{className:r},n.a.createElement("span",null,a),n.a.createElement("div",{className:"header-ubuntu__icons"}))})));l.displayName="HeaderUbuntu";var s=a(29),m=a(121),p=a(306),u=a(149),d=function(e){switch(e){case"html5":return{icon:n.a.createElement(m.e,{style:{marginTop:-14,marginLeft:-15},size:30}),color:"#dd3d1d"};case"css3":return{icon:n.a.createElement(m.b,{style:{marginTop:-14,marginLeft:-14},size:30}),color:"#54b2e9"};case"javascript":return{icon:n.a.createElement(p.a,{style:{marginTop:-15,marginLeft:-16},size:32}),color:"#ebba25"};case"jquery":return{icon:n.a.createElement(p.b,{style:{marginTop:-15,marginLeft:-15},size:30}),color:"#386fb0"};case"react":return{icon:n.a.createElement(m.g,{style:{marginTop:-15,marginLeft:-15},size:30}),color:"#61d4f4"};case"ui/ux design":return{icon:n.a.createElement(u.a,{style:{marginTop:-15,marginLeft:-15},size:30}),color:"#9C27B0"};default:return{icon:n.a.createElement(u.b,{style:{marginTop:-15,marginLeft:-15},size:30}),color:"#26A69A"}}};a(307);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=Object(r.memo)((function(e){var t=e.className,a=e.config,o=e.isActive,i=e.onClick,c=["project-box animated",t,o?"zoomIn":"zoomOut"].join(" "),m=g(Object(r.useState)(!1),2),p=m[0],u=m[1],f=function(e){"mouseenter"===e.type&&u(!0),"mouseleave"===e.type&&u(!1)},b=function(e){i&&i(e)};return n.a.createElement("div",{onClick:function(){return b(a)},className:c},n.a.createElement("div",{onMouseEnter:f,onMouseLeave:f,className:"project-box__container"},n.a.createElement(l,{label:a&&a.name||"Header"}),n.a.createElement("div",{className:"project-box__content"},a.cover?n.a.createElement("img",{src:a.cover,alt:"Project 1"}):n.a.createElement("div",{className:"project-box__no-image"},n.a.createElement("span",{className:"project-box__no-image-404-txt"},"404"),n.a.createElement("span",{className:"project-box__no-image-txt"},"Image not found")),n.a.createElement("div",{className:"project-box__details"},a&&a.tags&&n.a.createElement("div",{className:"project-box__details-tags"},a.tags.map((function(e,t){var a=d(e.toLowerCase()),r=a.icon,o=a.color;return n.a.createElement("div",{style:{backgroundColor:o,animationDelay:"".concat(.05*t+.2,"s")},key:e,className:"project-box__details-tag animated ".concat(p?"bounceIn":"")},r)}))),n.a.createElement("div",{className:"project-box__details-more animated ".concat(p?"flipInX":"")},n.a.createElement("span",null,"More..."),n.a.createElement("div",{className:"project-box__details-more-btn"},n.a.createElement(s.a,{color:"#3c80b9",size:28})))))))}));f.displayName="ProjectBox";var b=a(308),_=a.n(b),h=(a(316),[{original:"https://picsum.photos/id/1018/1000/600/",thumbnail:"https://picsum.photos/id/1018/250/150/"},{original:"https://picsum.photos/id/1015/1000/600/",thumbnail:"https://picsum.photos/id/1015/250/150/"},{original:"https://picsum.photos/id/1019/1000/600/",thumbnail:"https://picsum.photos/id/1019/250/150/"}]),v=Object(r.memo)((function(e){var t=e.className,a=e.data,r=["project-details",t].join(" "),s=Object(i.d)().colors.portfolio,p=s.primaryColor,u=s.secondaryColor,g=s.textColor,f=Object(o.b)("portfolio").t,b=Object(i.b)().closeProjectMenu;return n.a.createElement("div",{className:r},n.a.createElement("div",{style:{borderColor:u},className:"project-details__header"},n.a.createElement(c.a,{className:"project-details__header-btn",text:n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null),n.a.createElement("span",null,"Back")),onClick:function(){b()}})),n.a.createElement("div",{className:"project-details__container"},n.a.createElement("div",{className:"paragraph"},n.a.createElement("div",{className:"header header_type_h3 header_tt_uppercase header_fw_bold"},n.a.createElement("span",{style:{color:u}},f("ProjectText")),n.a.createElement("span",null,":")),n.a.createElement("div",{className:"header header_type_h3 header_tt_uppercase header_fw_bold project-details__project-name-txt"},a?a.name:"Jonh Doe")),n.a.createElement("div",{className:"paragraph paragraph_paddings_large project-details__paragraph-slider"},n.a.createElement("div",{className:"project-details__slider"},n.a.createElement(_.a,{items:a?a.gallery:h,lazyLoad:!0,useTranslate3D:!1,autoPlay:!0}),n.a.createElement(l,{label:a?a.name:""}))),n.a.createElement(c.n,{textWrapperClassName:"animated bounceInRight",className:"project-details__description-header",options:{text:{backgroundColor:p}}},n.a.createElement("span",{className:"header header_type_h4 header_tt_uppercase header_fw_medium",style:{color:g}},f("HeaderAboutProject"))),n.a.createElement("div",{className:"paragraph paragraph_align_left"},n.a.createElement("div",{className:"text-common"},a?a.description:"Empty"))),n.a.createElement("div",{className:"project-details__tags"},a&&a.tags.map((function(e,t){var a=d(e.toLowerCase()),r=a.icon,o=a.color;return n.a.createElement("div",{style:{backgroundColor:o},className:"project-details__tag",key:t},r)}))))}));v.displayName="ProjectDetails";var y=a.p+"img/cover__1GPsb.png",j=a.p+"img/picture_1__1Uq_H.png",E=a.p+"img/picture_2__3bFHT.png",N=a.p+"img/picture_3__uuBOC.png",C=a.p+"img/picture_1__2csIt.png",O=a.p+"img/picture_2__2EYrg.png",x=a.p+"img/picture_3__15BsQ.png",S=["HTML5","CSS3","JavaScript","jQuery","React","React Native","UI/UX Design"],w=[{index:"0",name:"My personal site",tags:["HTML5","CSS3","JavaScript","React","UI/UX Design"],cover:y,gallery:[{original:j,thumbnail:C},{original:E,thumbnail:O},{original:N,thumbnail:x}],description:"Description for project A"},{index:"1",name:"Project No Image",tags:["HTML5","CSS3","JavaScript","jQuery"],cover:null,gallery:[{original:"https://picsum.photos/id/1018/1000/600/",thumbnail:"https://picsum.photos/id/1018/250/150/"},{original:"https://picsum.photos/id/1015/1000/600/",thumbnail:"https://picsum.photos/id/1015/250/150/"},{original:"https://picsum.photos/id/1019/1000/600/",thumbnail:"https://picsum.photos/id/1019/250/150/"}],description:"Description for project B"},{index:"2",name:"Test Project",tags:["HTML5","CSS3","jQuery"],cover:y,gallery:[{original:j,thumbnail:C},{original:E,thumbnail:O},{original:N,thumbnail:x}],description:"Description for Test Project"},{index:"3",name:"Another Test Project",tags:["HTML5","CSS3","jQuery","UI/UX Design"],cover:y,gallery:[{original:j,thumbnail:C},{original:E,thumbnail:O},{original:N,thumbnail:x}],description:"Description for Another Test Project"},{index:"4",name:"Simple Test Project",tags:["HTML5","CSS3","JavaScript"],cover:y,gallery:[{original:j,thumbnail:C},{original:E,thumbnail:O},{original:N,thumbnail:x}],description:"Description for Simple Test Project"},{index:"5",name:"Mobile Test Project",tags:["React Native, JavaScript"],cover:y,gallery:[{original:j,thumbnail:C},{original:E,thumbnail:O},{original:N,thumbnail:x}],description:"Description for Mobile Test Project"},{index:"6",name:"Landing Page Test Project",tags:["HTML5","CSS3","jQuery"],cover:y,gallery:[{original:j,thumbnail:C},{original:E,thumbnail:O},{original:N,thumbnail:x}],description:"Description for Landing Page Test Project"}];a(317),a(318);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t=["page-content page-portfolio",e.className].join(" "),a=Object(i.d)().colors.portfolio,l=a.primaryColor,s=a.secondaryColor,m=a.textColor,p=Object(i.d)().variables.pageTransition,u=function(){var e=Object(i.e)().width;if(e){if(e>1200)return 750;if(e>992)return 700;if(e>768)return 600;if(e>480)return 380;if(e>0)return e}return 250}(),d=Object(o.b)("portfolio").t,g=Object(i.c)().projectMenuState,b=Object(i.b)(),_=b.openProjectMenu,h=b.closeProjectMenu,y=Object(i.e)().width,j=A(Object(r.useState)(!1),2),E=j[0],N=j[1],C=A(Object(r.useState)(S.map((function(e){return{state:!1,tag:e}}))),2),O=C[0],x=C[1],P=A(Object(r.useState)(new Set([])),2),k=P[0],D=P[1],I=A(Object(r.useState)({state:!1,offset:0}),2),M=I[0],z=I[1],H=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=setTimeout((function(){N(!0)}),p);return function(){clearTimeout(e)}}),[p]),Object(r.useEffect)((function(){if(w.length>0){var e=new Set,t=O.filter((function(e){return e.state}));w.map((function(a,r){var n=new Set(a.tags);t.every((function(e){return n.has(e.tag)}))&&e.add(r)})),D(e)}}),[O]);var R=Object(r.useCallback)((function(e,t){var a=L(O);for(var r in t){var n=t[r];Number.isNaN(r)||(a[Number(r)].state=!n)}x(a)}),[O]),J=Object(r.useCallback)((function(e){!e&&h()}),[h]),U=Object(r.useCallback)((function(){var e=0;!M.state&&H.current&&(e=H.current.scrollTop),z((function(t){return T({},t,{state:!t.state,offset:e})}))}),[M.state]);console.log("%cRender Portfolio Page","color: green");var B={pageContainer:{color:m},socialLink:{color:s},socialLinkFacebook:{color:"#4267b2"},socialLinkLinkedIn:{color:"#3977b5"}};return n.a.createElement("div",{style:T({},B.pageContainer,{},g.isActive?{transform:"translateX(".concat("string"==typeof u?"-".concat(u):"".concat(-1*u,"px"),")"),zIndex:1e3}:{}),className:t},n.a.createElement(c.l,{style:{mainContainer:{width:u,backgroundColor:l}},overlay:!0,isActive:g.isActive,onStateChange:J},n.a.createElement(v,{data:g.data})),n.a.createElement("div",{className:"page-portfolio__container"},E&&n.a.createElement("div",{ref:H,className:"page-content__container page-portfolio__container-inner ".concat(M.state?"page-portfolio_isActive_filters":"")},n.a.createElement("div",{className:"page-portfolio__box"},n.a.createElement("div",{className:"header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn"},n.a.createElement("span",{style:{color:s}},"My"),n.a.createElement("span",{style:{marginRight:12}},"."),n.a.createElement("span",null,"Portfolio")),n.a.createElement(c.n,{textWrapperClassName:"animated bounceInRight",className:"paragraph",options:{text:{backgroundColor:l}}},n.a.createElement("span",{className:"text-common text-common_tt_uppercase",style:{color:s}},d("Header"))),n.a.createElement("div",{className:"paragraph"},n.a.createElement("div",{className:"text-common animated bounceInLeft"},d("Description"))),n.a.createElement("div",{className:"page-portfolio__content"},n.a.createElement("div",{className:"page-portfolio__tags-filter"},n.a.createElement(c.a,{className:"page-portfolio__tags-filter-btn",text:"Filters",onClick:U,activeStyle:{backgroundColor:s,color:m,borderColor:s}}),n.a.createElement("div",{style:{backgroundColor:y>=480?"transparent":l,borderColor:s,top:M.state?M.offset:"-100%"},className:"page-portfolio__tags-filter-wrapper"},n.a.createElement("div",{className:"paragraph page-portfolio__tag-header"},n.a.createElement("span",{className:"text-common text-common_fz_medium text-common_tt_uppercase"},"Filters:")),S.map((function(e,t){return n.a.createElement(c.a,{isToggled:O[t].state,onClick:R,className:"page-portfolio__tag-selector animated flipInX",key:e,name:"".concat(t),text:e,theme:"tag",style:{animationDelay:"".concat(100*t,"ms")},activeStyle:{backgroundColor:s,color:m,borderColor:s}})})),n.a.createElement(c.a,{className:"page-portfolio__tags-filter-btn",text:"Close",onClick:U,style:{borderColor:s,color:s},activeStyle:{backgroundColor:s,color:m}}))),n.a.createElement(c.k,{isBottomPadding:0!==k.size,className:"page-portfolio__projects"},0!==k.size?w.map((function(e,t){return n.a.createElement(f,{key:e.index,config:{name:e.name,tags:e.tags,cover:e.cover},className:"page-portfolio__project",isActive:k.has(t),onClick:function(e){return function(e,t){_(w[t])}(0,t)}})})):n.a.createElement("div",{className:"header_type_h2 header_tt_uppercase header_fw_bold page-portfolio__no-match"},d("NoMatch"))))))))}}}]);