(()=>{var e={n:r=>{var a=r&&r.__esModule?()=>r.default:()=>r;return e.d(a,{a}),a},d:(r,a)=>{for(var t in a)e.o(a,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:a[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r);const a=flarum.core.compat["admin/app"];var t=e.n(a);t().initializers.add("datlechin/flarum-remove-sidenav",(function(){t().extensionData.for("datlechin-remove-sidenav").registerPermission({icon:"fas fa-eye",label:t().translator.trans("datlechin-remove-sidenav.admin.permissions.view_sidenav_label"),permission:"viewSidenav"},"start")}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map