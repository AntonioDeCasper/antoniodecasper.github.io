(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(e,a,t){},327:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(45),c=t(17),l=t(9),i=t(37),s=t(18),m=t(39),p=t(127),u=t(31),d=t(155);function f(e,a){var t=!1;"#"==e[0]&&(e=e.slice(1),t=!0);var n=parseInt(e,16),o=(n>>16)+a;o>255?o=255:o<0&&(o=0);var r=(n>>8&255)+a;r>255?r=255:r<0&&(r=0);var c=(255&n)+a;return c>255?c=255:c<0&&(c=0),(t?"#":"")+(c|r<<8|o<<16).toString(16)}var g=t(192),h=g.object().shape({firstName:g.string().required("This field is required"),email:g.string().email("Invalid email address").required("This field is required"),message:g.string().required("This field is required").min(10,"Type at least few words please")});t(310);function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(t,!0).forEach((function(a){v(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function v(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function y(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,o=!1,r=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw r}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.default=function(e){var a=["page-content page-contact",e.className].join(" "),t=Object(c.b)("contact").t,g=Object(l.e)().width,b=Object(l.d)().colors.contact,v=b.primaryColor,E=b.secondaryColor,N=b.textColor,k=Object(l.d)().variables.pageTransition,w=function(){var e=Object(c.b)("contact").t,a=Object(l.d)().colors.contact,t=a.secondaryColor,r=a.textColor;return{info:Object(n.useMemo)((function(){return[{index:0,name:e("Email"),nameIcon:o.a.createElement(u.c,{color:t,className:"page-contact__contacts-icon",size:"21"}),value:o.a.createElement("a",{className:"page-contact__contact-link",style:{color:r},href:"mailto:antongribenkov@gmail.com"},"antongribenkov@gmail.com")},{index:1,name:e("Telegram"),nameIcon:o.a.createElement(p.h,{color:t,className:"page-contact__contacts-icon",size:"19"}),value:o.a.createElement("span",null,"@AntonGribenkov")},{index:2,name:e("Skype"),nameIcon:o.a.createElement(d.c,{color:t,className:"page-contact__contacts-icon",size:"21"}),value:o.a.createElement("a",{style:{color:r},className:"page-contact__contact-link",target:"_blank",rel:"noopener noreferrer",href:"https://join.skype.com/invite/cCV5tEfG0DKw"},"Anton Gribenkov")}]}),[e,t,r])}}().info,O=y(Object(n.useState)(!1),2),j=O[0],x=O[1];Object(n.useEffect)((function(){var e=setTimeout((function(){x(!0)}),k);return function(){clearTimeout(e)}}),[k]);var C,I={pageContact:{backgroundColor:v,color:N},socialLink:{color:E},socialLinkFacebook:{color:"#4267b2"},socialLinkLinkedIn:{color:"#3977b5"},socialLinkGithub:{color:"#ffffff"}},S={field:{borderColor:E,color:N},placeholder:{color:f(v,40)},placeholderFocused:{color:E}};return console.log("%cRender ContactPage","color: green"),o.a.createElement("div",{style:I.pageContact,className:a},o.a.createElement(i.a,null,o.a.createElement("meta",{name:"description",content:t("Description")}),o.a.createElement("title",null,t("Title"))),j&&o.a.createElement("div",{className:"page-content__container page-contact__container"},o.a.createElement("div",{className:"header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn"},o.a.createElement("span",null,"Contact"),o.a.createElement("span",{style:{color:E,marginLeft:12}},"Me"),o.a.createElement("span",null,".")),o.a.createElement(s.o,{textWrapperClassName:"animated bounceInRight",className:"paragraph",options:{text:{backgroundColor:v}}},o.a.createElement("span",{className:"text-common text-common_tt_uppercase",style:{color:E}},t("Header"))),o.a.createElement("div",{className:"page-contact__contacts-form"},o.a.createElement("div",{className:"page-contact__contacts-block"},o.a.createElement("div",{className:"page-contact__contacts-wrapper"},w.map((function(e,a){return o.a.createElement("div",{key:e.index,className:"paragraph paragraph_align_left page-contact__contact-paragraph"},o.a.createElement("div",{style:{animationDelay:"".concat(100*a*2,"ms")},className:"text-common_line animated flipInX"},e.nameIcon,o.a.createElement("span",{className:"text-common"},e.name)),o.a.createElement("div",{style:{animationDelay:"".concat(100*a*2+100,"ms")},className:"text-common text-common_weight_bold page-contact__contact-text animated flipInX"},e.value))})),o.a.createElement("div",{className:"paragraph paragraph_align_left page-contact__contact-paragraph"},o.a.createElement("div",{style:{animationDelay:"600ms"},className:"text-common text-common_line animated flipInX page-contact__social-txt"},t("Social")),o.a.createElement("div",{className:"text-common page-contact__social-links-block"},(C=g&&g<992?50:30,[{id:"socialLinkFacebook",to:"https://www.facebook.com/anton.gribenkov",icon:o.a.createElement(p.c,{size:C})},{id:"socialLinkLinkedIn",to:"https://www.linkedin.com/in/anton-gribenkov/",icon:o.a.createElement(p.f,{size:C})},{id:"socialLinkGithub",to:"https://github.com/AntonioDeCasper",icon:o.a.createElement(p.d,{size:C})}]).map((function(e){return o.a.createElement(s.e,{key:e.id,target:"_blank",rel:"noopener noreferrer",className:"page-contact__social-link animated flipInX",href:e.to,onHoverStyle:I[e.id],style:_({},I.socialLink,{},{animationDelay:"700ms"})},e.icon)})))))),o.a.createElement("div",{className:"page-contact__form-block"},o.a.createElement("div",{className:"paragraph paragraph_align_left"},o.a.createElement("div",{className:"text-common animated fadeIn"},t("ContactText"))),o.a.createElement(r.b,{initialValues:{firstName:"",email:"",message:""},validationSchema:h,onSubmit:function(e){fetch("https://mailthis.to/AntonioDeCasper",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){window.location.href="https://mailthis.to/confirm"})).catch((function(e){console.log("error: ",e)}))}},(function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",{className:"paragraph page-contact__form-paragraph"},o.a.createElement(m.a,{onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.firstName,name:"firstName",placeholder:t("FirstName"),styles:S,className:"page-contact__form-name animated flipInX",errors:e.errors.firstName,touched:e.touched.firstName}),o.a.createElement(m.a,{type:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,name:"email",placeholder:t("Email"),styles:S,className:"page-contact__form-email animated flipInX",errors:e.errors.email,touched:e.touched.email})),o.a.createElement("div",{className:"paragraph"},o.a.createElement(m.a,{as:"textarea",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.message,name:"message",placeholder:t("Message"),styles:S,errors:e.errors.message,touched:e.touched.message,className:"animated zoomIn"})),o.a.createElement("div",{className:"paragraph paragraph_align_left"},o.a.createElement(s.a,{type:"submit",text:t("SubmitText"),className:"animated flipInX page-contact__submit",animationType:"swipe-left",theme:"sun",style:{animationDelay:"800ms"}})))}))))))}}}]);