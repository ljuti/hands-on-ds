!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("design-system",[],n):"object"==typeof exports?exports["design-system"]=n():e["design-system"]=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"./src/index.js":function(e,n,t){"use strict";t.r(n),t.d(n,"GlobalStyle",(function(){return Ot})),t.d(n,"colors",(function(){return r})),t.d(n,"typography",(function(){return a})),t.d(n,"spacing",(function(){return i})),t.d(n,"Avatar",(function(){return Tt})),t.d(n,"Button",(function(){return Mt})),t.d(n,"Carousel",(function(){return Vt})),t.d(n,"H1",(function(){return Jt})),t.d(n,"HomeHeader",(function(){return Qt})),t.d(n,"Icon",(function(){return mr})),t.d(n,"PageBody",(function(){return br})),t.d(n,"Select",(function(){return Fr})),t.d(n,"SummaryTable",(function(){return kr}));var r={};t.r(r),t.d(r,"background500",(function(){return u})),t.d(r,"onBackground500",(function(){return d})),t.d(r,"primary50",(function(){return p})),t.d(r,"primary100",(function(){return s})),t.d(r,"primary200",(function(){return f})),t.d(r,"primary300",(function(){return h})),t.d(r,"primary400",(function(){return g})),t.d(r,"primary500",(function(){return m})),t.d(r,"primary600",(function(){return y})),t.d(r,"primary700",(function(){return b})),t.d(r,"primary800",(function(){return x})),t.d(r,"primary900",(function(){return v})),t.d(r,"secondary50",(function(){return w})),t.d(r,"secondary100",(function(){return S})),t.d(r,"secondary200",(function(){return j})),t.d(r,"secondary300",(function(){return F})),t.d(r,"secondary400",(function(){return O})),t.d(r,"secondary500",(function(){return L})),t.d(r,"secondary600",(function(){return z})),t.d(r,"secondary700",(function(){return P})),t.d(r,"secondary800",(function(){return E})),t.d(r,"secondary900",(function(){return _})),t.d(r,"onSurface50",(function(){return k})),t.d(r,"onSurface100",(function(){return T})),t.d(r,"onSurface200",(function(){return C})),t.d(r,"onSurface300",(function(){return B})),t.d(r,"onSurface400",(function(){return I})),t.d(r,"onSurface500",(function(){return H})),t.d(r,"onSurface600",(function(){return M})),t.d(r,"onSurface700",(function(){return R})),t.d(r,"onSurface800",(function(){return q})),t.d(r,"onSurface900",(function(){return D})),t.d(r,"shadowSmColor",(function(){return W})),t.d(r,"shadowDefault0Color",(function(){return X})),t.d(r,"shadowDefault1Color",(function(){return N})),t.d(r,"shadowMd0Color",(function(){return A})),t.d(r,"shadowMd1Color",(function(){return V})),t.d(r,"shadowLg0Color",(function(){return G})),t.d(r,"shadowLg1Color",(function(){return J})),t.d(r,"shadowXl0Color",(function(){return K})),t.d(r,"shadowXl1Color",(function(){return Q})),t.d(r,"shadow2XlColor",(function(){return U})),t.d(r,"shadowInnerColor",(function(){return Y}));var a={};t.r(a),t.d(a,"headline1FontSize",(function(){return Z})),t.d(a,"headline1TextDecoration",(function(){return $})),t.d(a,"headline1FontFamily",(function(){return ee})),t.d(a,"headline1FontWeight",(function(){return ne})),t.d(a,"headline1FontStyle",(function(){return te})),t.d(a,"headline1FontStretch",(function(){return re})),t.d(a,"headline1LetterSpacing",(function(){return ae})),t.d(a,"headline1LineHeight",(function(){return ie})),t.d(a,"headline1ParagraphIndent",(function(){return oe})),t.d(a,"headline1ParagraphSpacing",(function(){return le})),t.d(a,"headline1TextCase",(function(){return ce})),t.d(a,"headline2FontSize",(function(){return ue})),t.d(a,"headline2TextDecoration",(function(){return de})),t.d(a,"headline2FontFamily",(function(){return pe})),t.d(a,"headline2FontWeight",(function(){return se})),t.d(a,"headline2FontStyle",(function(){return fe})),t.d(a,"headline2FontStretch",(function(){return he})),t.d(a,"headline2LetterSpacing",(function(){return ge})),t.d(a,"headline2LineHeight",(function(){return me})),t.d(a,"headline2ParagraphIndent",(function(){return ye})),t.d(a,"headline2ParagraphSpacing",(function(){return be})),t.d(a,"headline2TextCase",(function(){return xe})),t.d(a,"headline3FontSize",(function(){return ve})),t.d(a,"headline3TextDecoration",(function(){return we})),t.d(a,"headline3FontFamily",(function(){return Se})),t.d(a,"headline3FontWeight",(function(){return je})),t.d(a,"headline3FontStyle",(function(){return Fe})),t.d(a,"headline3FontStretch",(function(){return Oe})),t.d(a,"headline3LetterSpacing",(function(){return Le})),t.d(a,"headline3LineHeight",(function(){return ze})),t.d(a,"headline3ParagraphIndent",(function(){return Pe})),t.d(a,"headline3ParagraphSpacing",(function(){return Ee})),t.d(a,"headline3TextCase",(function(){return _e})),t.d(a,"headline4FontSize",(function(){return ke})),t.d(a,"headline4TextDecoration",(function(){return Te})),t.d(a,"headline4FontFamily",(function(){return Ce})),t.d(a,"headline4FontWeight",(function(){return Be})),t.d(a,"headline4FontStyle",(function(){return Ie})),t.d(a,"headline4FontStretch",(function(){return He})),t.d(a,"headline4LetterSpacing",(function(){return Me})),t.d(a,"headline4LineHeight",(function(){return Re})),t.d(a,"headline4ParagraphIndent",(function(){return qe})),t.d(a,"headline4ParagraphSpacing",(function(){return De})),t.d(a,"headline4TextCase",(function(){return We})),t.d(a,"headline5FontSize",(function(){return Xe})),t.d(a,"headline5TextDecoration",(function(){return Ne})),t.d(a,"headline5FontFamily",(function(){return Ae})),t.d(a,"headline5FontWeight",(function(){return Ve})),t.d(a,"headline5FontStyle",(function(){return Ge})),t.d(a,"headline5FontStretch",(function(){return Je})),t.d(a,"headline5LetterSpacing",(function(){return Ke})),t.d(a,"headline5LineHeight",(function(){return Qe})),t.d(a,"headline5ParagraphIndent",(function(){return Ue})),t.d(a,"headline5ParagraphSpacing",(function(){return Ye})),t.d(a,"headline5TextCase",(function(){return Ze})),t.d(a,"headline6FontSize",(function(){return $e})),t.d(a,"headline6TextDecoration",(function(){return en})),t.d(a,"headline6FontFamily",(function(){return nn})),t.d(a,"headline6FontWeight",(function(){return tn})),t.d(a,"headline6FontStyle",(function(){return rn})),t.d(a,"headline6FontStretch",(function(){return an})),t.d(a,"headline6LetterSpacing",(function(){return on})),t.d(a,"headline6LineHeight",(function(){return ln})),t.d(a,"headline6ParagraphIndent",(function(){return cn})),t.d(a,"headline6ParagraphSpacing",(function(){return un})),t.d(a,"headline6TextCase",(function(){return dn})),t.d(a,"paragraph1FontSize",(function(){return pn})),t.d(a,"paragraph1TextDecoration",(function(){return sn})),t.d(a,"paragraph1FontFamily",(function(){return fn})),t.d(a,"paragraph1FontWeight",(function(){return hn})),t.d(a,"paragraph1FontStyle",(function(){return gn})),t.d(a,"paragraph1FontStretch",(function(){return mn})),t.d(a,"paragraph1LetterSpacing",(function(){return yn})),t.d(a,"paragraph1LineHeight",(function(){return bn})),t.d(a,"paragraph1ParagraphIndent",(function(){return xn})),t.d(a,"paragraph1ParagraphSpacing",(function(){return vn})),t.d(a,"paragraph1TextCase",(function(){return wn})),t.d(a,"paragraph2FontSize",(function(){return Sn})),t.d(a,"paragraph2TextDecoration",(function(){return jn})),t.d(a,"paragraph2FontFamily",(function(){return Fn})),t.d(a,"paragraph2FontWeight",(function(){return On})),t.d(a,"paragraph2FontStyle",(function(){return Ln})),t.d(a,"paragraph2FontStretch",(function(){return zn})),t.d(a,"paragraph2LetterSpacing",(function(){return Pn})),t.d(a,"paragraph2LineHeight",(function(){return En})),t.d(a,"paragraph2ParagraphIndent",(function(){return _n})),t.d(a,"paragraph2ParagraphSpacing",(function(){return kn})),t.d(a,"paragraph2TextCase",(function(){return Tn})),t.d(a,"paragraph3FontSize",(function(){return Cn})),t.d(a,"paragraph3TextDecoration",(function(){return Bn})),t.d(a,"paragraph3FontFamily",(function(){return In})),t.d(a,"paragraph3FontWeight",(function(){return Hn})),t.d(a,"paragraph3FontStyle",(function(){return Mn})),t.d(a,"paragraph3FontStretch",(function(){return Rn})),t.d(a,"paragraph3LetterSpacing",(function(){return qn})),t.d(a,"paragraph3LineHeight",(function(){return Dn})),t.d(a,"paragraph3ParagraphIndent",(function(){return Wn})),t.d(a,"paragraph3ParagraphSpacing",(function(){return Xn})),t.d(a,"paragraph3TextCase",(function(){return Nn}));var i={};t.r(i),t.d(i,"spacingXsTop",(function(){return An})),t.d(i,"spacingXsRight",(function(){return Vn})),t.d(i,"spacingXsBottom",(function(){return Gn})),t.d(i,"spacingXsLeft",(function(){return Jn})),t.d(i,"spacingSmTop",(function(){return Kn})),t.d(i,"spacingSmRight",(function(){return Qn})),t.d(i,"spacingSmBottom",(function(){return Un})),t.d(i,"spacingSmLeft",(function(){return Yn})),t.d(i,"spacingBaseTop",(function(){return Zn})),t.d(i,"spacingBaseRight",(function(){return $n})),t.d(i,"spacingBaseBottom",(function(){return et})),t.d(i,"spacingBaseLeft",(function(){return nt})),t.d(i,"spacingMdTop",(function(){return tt})),t.d(i,"spacingMdRight",(function(){return rt})),t.d(i,"spacingMdBottom",(function(){return at})),t.d(i,"spacingMdLeft",(function(){return it})),t.d(i,"spacingLgTop",(function(){return ot})),t.d(i,"spacingLgRight",(function(){return lt})),t.d(i,"spacingLgBottom",(function(){return ct})),t.d(i,"spacingLgLeft",(function(){return ut})),t.d(i,"spacingXlTop",(function(){return dt})),t.d(i,"spacingXlRight",(function(){return pt})),t.d(i,"spacingXlBottom",(function(){return st})),t.d(i,"spacingXlLeft",(function(){return ft})),t.d(i,"spacing2XlTop",(function(){return ht})),t.d(i,"spacing2XlRight",(function(){return gt})),t.d(i,"spacing2XlBottom",(function(){return mt})),t.d(i,"spacing2XlLeft",(function(){return yt})),t.d(i,"spacing3XlTop",(function(){return bt})),t.d(i,"spacing3XlRight",(function(){return xt})),t.d(i,"spacing3XlBottom",(function(){return vt})),t.d(i,"spacing3XlLeft",(function(){return wt}));t("core-js/modules/es.array.slice.js"),t("core-js/modules/es.object.freeze.js");var o,l=t("styled-components"),c=t.n(l),u="rgba(255, 255, 255, 1)",d="rgba(12, 17, 24, 1)",p="rgba(254, 248, 246, 1)",s="rgba(251, 212, 204, 1)",f="rgba(249, 178, 162, 1)",h="rgba(246, 145, 120, 1)",g="rgba(243, 113, 78, 1)",m="rgba(241, 82, 35, 1)",y="rgba(214, 70, 28, 1)",b="rgba(186, 59, 21, 1)",x="rgba(157, 48, 15, 1)",v="rgba(128, 37, 10, 1)",w="rgba(248, 247, 252, 1)",S="rgba(213, 211, 235, 1)",j="rgba(213, 211, 235, 1)",F="rgba(145, 138, 203, 1)",O="rgba(112, 102, 187, 1)",L="rgba(80, 65, 171, 1)",z="rgba(69, 55, 151, 1)",P="rgba(58, 46, 131, 1)",E="rgba(48, 37, 110, 1)",_="rgba(37, 29, 89, 1)",k="rgba(255, 255, 255, 1)",T="rgba(221, 227, 235, 1)",C="rgba(188, 199, 213, 1)",B="rgba(157, 171, 190, 1)",I="rgba(128, 143, 165, 1)",H="rgba(100, 116, 139, 1)",M="rgba(75, 91, 113, 1)",R="rgba(52, 66, 86, 1)",q="rgba(31, 41, 56, 1)",D="rgba(12, 17, 24, 1)",W="rgba(0, 0, 0, 0.05)",X="rgba(0, 0, 0, 0.1)",N="rgba(0, 0, 0, 0.06)",A="rgba(0, 0, 0, 0.1)",V="rgba(0, 0, 0, 0.06)",G="rgba(0, 0, 0, 0.1)",J="rgba(0, 0, 0, 0.05)",K="rgba(0, 0, 0, 0.1)",Q="rgba(0, 0, 0, 0.04)",U="rgba(0, 0, 0, 0.25)",Y="rgba(0, 0, 0, 0.06)",Z="36px",$="none",ee="DM Sans",ne=700,te="normal",re="normal",ae="-1.6px",ie="46px",oe="0px",le="0px",ce="none",ue="24px",de="none",pe="DM Sans",se=700,fe="normal",he="normal",ge="-0.8px",me="34px",ye="0px",be="0px",xe="none",ve="22px",we="none",Se="DM Sans",je=700,Fe="normal",Oe="normal",Le="-0.4px",ze="32px",Pe="0px",Ee="0px",_e="none",ke="18px",Te="none",Ce="DM Sans",Be=700,Ie="normal",He="normal",Me="-0.4px",Re="28px",qe="0px",De="0px",We="none",Xe="16px",Ne="none",Ae="DM Sans",Ve=700,Ge="normal",Je="normal",Ke="-0.36px",Qe="26px",Ue="0px",Ye="0px",Ze="none",$e="14px",en="none",nn="DM Sans",tn=700,rn="normal",an="normal",on="-0.3px",ln="24px",cn="0px",un="0px",dn="none",pn="18px",sn="none",fn="DM Sans",hn=400,gn="normal",mn="normal",yn="-0.4px",bn="28px",xn="0px",vn="0px",wn="none",Sn="16px",jn="none",Fn="DM Sans",On=400,Ln="normal",zn="normal",Pn="-0.36px",En="26px",_n="0px",kn="0px",Tn="none",Cn="14px",Bn="none",In="DM Sans",Hn=400,Mn="normal",Rn="normal",qn="-0.3px",Dn="24px",Wn="0px",Xn="0px",Nn="none",An="2px",Vn="2px",Gn="2px",Jn="2px",Kn="4px",Qn="4px",Un="4px",Yn="4px",Zn="8px",$n="8px",et="8px",nt="8px",tt="12px",rt="12px",at="12px",it="12px",ot="16px",lt="16px",ct="16px",ut="16px",dt="20px",pt="20px",st="20px",ft="20px",ht="24px",gt="24px",mt="24px",yt="24px",bt="32px",xt="32px",vt="32px",wt="32px";var St,jt,Ft=Object(l.css)(["overflow-y:auto;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-overflow-scrolling:touch;font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";*{box-sizing:border-box;}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;}p{font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",";}h1{font-family:",";font-size:",";line-height:",";font-weight:",";font-style:",";letter-spacing:",";}h2{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h3{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h4{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h5{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}h6{font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";}"],a.paragraph3FontFamily,a.paragraph3FontSize,a.paragraph3FontWeight,a.paragraph3FontStyle,a.paragraph3LineHeight,a.paragraph3FontFamily,a.paragraph3FontSize,a.paragraph3LineHeight,a.paragraph3FontWeight,a.paragraph3FontStyle,a.paragraph3LetterSpacing,a.headline1FontFamily,a.headline1FontSize,a.headline1LineHeight,a.headline1FontWeight,a.headline1FontStyle,a.headline1LetterSpacing,a.headline2FontFamily,a.headline2FontSize,a.headline2FontWeight,a.headline2FontStyle,a.headline2LineHeight,a.headline2LetterSpacing,a.headline3FontFamily,a.headline3FontSize,a.headline3FontWeight,a.headline3FontStyle,a.headline3LineHeight,a.headline3LetterSpacing,a.headline4FontFamily,a.headline4FontSize,a.headline4FontWeight,a.headline4FontStyle,a.headline4LineHeight,a.headline4LetterSpacing,a.headline5FontFamily,a.headline5FontSize,a.headline5FontWeight,a.headline5FontStyle,a.headline5LineHeight,a.headline5LetterSpacing,a.headline6FontFamily,a.headline6FontSize,a.headline6FontWeight,a.headline6FontStyle,a.headline6LineHeight,a.headline6LetterSpacing),Ot=Object(l.createGlobalStyle)(o||(St=["\n  body {\n    ","\n  }\n  // prevent mouse-clicks from focusing elements\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"],jt||(jt=St.slice(0)),o=Object.freeze(Object.defineProperties(St,{raw:{value:Object.freeze(jt)}}))),Ft),Lt=(t("core-js/modules/es.object.keys.js"),t("core-js/modules/es.symbol.js"),t("prop-types")),zt=t("react"),Pt=t.n(zt);function Et(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _t=function(e){var n=e.src;Et(e,["src"]);return Pt.a.createElement(kt,{src:n})},kt=c.a.img.withConfig({displayName:"Avatar__StyledAvatar",componentId:"ayyuxz-0"})(["width:48px;height:48px;border-radius:16px;"]);_t.propTypes={src:Lt.string};var Tt=_t;t("core-js/modules/es.object.assign.js");function Ct(){return(Ct=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Bt(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var It=c.a.button.withConfig({displayName:"Button__StyledButton",componentId:"kt0lv5-0"})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;outline:none;border:1px solid;border-color:",";box-sizing:border-box;line-height:24px;position:relative;user-select:none;text-decoration:none;border-radius:1rem;padding:",";background-color:",";opacity:",";color:",";font-size:14px;font-weight:700;width:",";",""],(function(e){return e.isOutline?e.isActive?r.pinkPink100:r.secondaryBlack20:"transparent"}),(function(e){return e.label?"16px":"12px"}),(function(e){return e.isOutline?e.isActive?r.pinkPink20:"transparent":e.color}),(function(e){return e.disabled?.6:1}),(function(e){return e.isOutline?e.isActive?r.pinkPink80:r.secondaryBlack100:r.secondaryWhite100}),(function(e){return e.isStretched?"100%":null}),(function(e){return e.isActive&&"svg {\n      fill: ".concat(r.pinkPink100,";\n        path {\n          fill-opacity: 1;\n        }\n  }")})),Ht=function(e){var n=e.href,t=e.label,r=e.children,a=(e.to,Bt(e,["href","label","children","to"]));return Pt.a.createElement(It,Ct({as:n&&"a",href:n},a),t||r)};Ht.propTypes={label:Lt.string,disabled:Lt.bool,isStretched:Lt.bool,isOutline:Lt.bool,color:Lt.string},Ht.defaultProps={color:r.primaryOrange100};var Mt=Ht,Rt=(t("core-js/modules/es.array.map.js"),t("react-awesome-slider")),qt=t.n(Rt);t("react-awesome-slider/dist/styles.css");function Dt(){return(Dt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Wt(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Xt,Nt,At=c.a.div.withConfig({displayName:"Carousel__StyledCarousel",componentId:"sc-819yy4-0"})(["> .awssld{--control-bullet-color:",";--control-bullet-active-color:",";--content-background-color:transparent;--loader-bar-color:#ffffff;--loader-bar-height:1px;}.awssld__content > img,.awssld__content > video{object-fit:contain;}.awssld__bullets{position:relative;bottom:0;padding:0;display:flex;justify-content:center;width:100%;margin:0;height:36px;align-items:flex-end;button{width:8px;height:8px;margin:0 4px;opacity:0.6;border-radius:50%;}& > .awssld__bullets--active{transform:none;}}"],r.secondaryBlack20,r.secondaryBlack100),Vt=function(e){var n=e.images,t=Wt(e,["images"]);return Pt.a.createElement(At,null,Pt.a.createElement(qt.a,Dt({organicArrows:!1},t),n&&n.map((function(e){return Pt.a.createElement("div",{key:e.source,style:{display:"flex"}},Pt.a.createElement("img",{src:e.source}))}))))},Gt=c.a.h1.withConfig({displayName:"H1__Styledh1",componentId:"sc-1yc85gj-0"})(["margin-bottom:40px;letter-spacing:-1.6px;"]),Jt=function(e){return Pt.a.createElement(Gt,null)},Kt=c.a.div.withConfig({displayName:"HomeHeader__StyledHomeHeader",componentId:"sc-15iaylk-0"})(["display:flex;justify-content:space-between;margin-bottom:40px;"]),Qt=function(e){e.props;var n=e.children;return Pt.a.createElement(Kt,null,n)};t("core-js/modules/es.function.name.js");function Ut(){return(Ut=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var Yt;t.p;function Zt(){return(Zt=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var $t;t.p;function er(){return(er=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var nr;t.p;function tr(){return(tr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var rr;t.p;function ar(){return(ar=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var ir;t.p;function or(){return(or=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var lr;t.p;function cr(){return(cr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var ur;t.p;function dr(){return(dr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.p;function pr(){return(pr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function sr(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var fr={settings:function(e){return zt.createElement("svg",Ut({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Xt||(Xt=zt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.23 12.37c-.194-.3-.47-.6-.828-.79-.286-.14-.47-.37-.633-.64-.521-.86-.215-1.99.654-2.5a2.027 2.027 0 00.756-2.83l-.685-1.18a2.112 2.112 0 00-2.871-.76c-.9.48-2.054.16-2.576-.69-.163-.28-.255-.58-.235-.88.03-.39-.092-.76-.276-1.06A2.152 2.152 0 0010.717 0h-1.44c-.747.02-1.431.42-1.81 1.04-.194.3-.306.67-.286 1.06.02.3-.071.6-.235.88-.521.85-1.676 1.17-2.565.69a2.124 2.124 0 00-2.882.76L.814 5.61c-.582.99-.255 2.26.757 2.83.868.51 1.175 1.64.664 2.5-.174.27-.358.5-.644.64-.347.19-.654.49-.817.79-.379.62-.358 1.4.02 2.05l.705 1.2a2.134 2.134 0 001.82 1.04c.347 0 .755-.1 1.083-.3.255-.17.562-.23.899-.23 1.012 0 1.86.83 1.88 1.82 0 1.15.94 2.05 2.126 2.05h1.39c1.175 0 2.115-.9 2.115-2.05.03-.99.88-1.82 1.89-1.82.328 0 .634.06.9.23.327.2.726.3 1.084.3.725 0 1.43-.4 1.808-1.04l.716-1.2c.368-.67.398-1.43.02-2.05z",fill:"inherit",fillOpacity:.2})),Nt||(Nt=zt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.012 12.83c-1.604 0-2.902-1.25-2.902-2.82 0-1.57 1.298-2.83 2.902-2.83s2.872 1.26 2.872 2.83-1.268 2.82-2.872 2.82z",fill:"inherit"})))},heart:function(e){return zt.createElement("svg",Zt({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Yt||(Yt=zt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.776 21.837a36.258 36.258 0 01-6.328-4.957 12.668 12.668 0 01-3.03-4.805C1.28 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0112.007 4.3a6.291 6.291 0 015.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.669 12.669 0 01-3.013 4.805 36.583 36.583 0 01-6.328 4.957l-.249.163-.24-.163z",fill:"inherit",fillOpacity:.2})))},menu:function(e){return zt.createElement("svg",er({fill:"none",height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg"},e),$t||($t=zt.createElement("g",{fill:"inherit"},zt.createElement("path",{clipRule:"evenodd",d:"M7 6a1 1 0 000 2h10a1 1 0 100-2zm0 10a1 1 0 100 2h10a1 1 0 100-2z",fillOpacity:.2,fillRule:"evenodd"}),zt.createElement("rect",{height:2,rx:1,width:18,x:3,y:11}))))},arrowBack:function(e){return zt.createElement("svg",tr({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),nr||(nr=zt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 18.581c.32.324.32.85.002 1.175a.81.81 0 01-1.066.082l-.091-.08-6.6-6.67a.84.84 0 01-.08-1.082l.08-.094 6.6-6.67a.81.81 0 011.157.002.84.84 0 01.077 1.082l-.08.093L9.742 12.5l6.017 6.08z",fill:"inherit"})))},chevronDown:function(e){return zt.createElement("svg",ar({width:11,height:6,viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),rr||(rr=zt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.388.336a.56.56 0 01.783-.001.54.54 0 01.055.71l-.054.061-4.446 4.4a.56.56 0 01-.722.053l-.062-.053-4.447-4.4A.54.54 0 01.496.335a.56.56 0 01.721-.051l.062.052 4.055 4.012L9.388.336z",fill:"#040415"})))},filter:function(e){return zt.createElement("svg",dr({width:20,height:18,viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),ur||(ur=zt.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.878 3.379c0 1.866-1.54 3.38-3.44 3.38C1.54 6.758 0 5.244 0 3.378 0 1.513 1.54 0 3.439 0c1.9 0 3.439 1.513 3.439 3.379zm11.615-1.48c.832 0 1.507.663 1.507 1.48s-.675 1.48-1.507 1.48h-6.575c-.832 0-1.508-.663-1.508-1.48s.676-1.48 1.508-1.48h6.575zM1.508 12.957h6.575c.833 0 1.508.664 1.508 1.481 0 .817-.675 1.482-1.508 1.482H1.508C.676 15.92 0 15.256 0 14.439s.676-1.481 1.508-1.481zm15.053 4.82c1.9 0 3.439-1.513 3.439-3.379s-1.539-3.38-3.439-3.38c-1.899 0-3.439 1.514-3.439 3.38 0 1.866 1.54 3.379 3.44 3.379z",fill:"inherit",fillOpacity:.2})))},viewGrid:function(e){return zt.createElement("svg",or({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),ir||(ir=zt.createElement("path",{clipRule:"evenodd",d:"M11 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2h-3zM2 9a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H2zm7 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zM2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2H2z"})))},viewItem:function(e){return zt.createElement("svg",cr({viewBox:"0 0 16 16",width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),lr||(lr=zt.createElement("rect",{width:16,height:16,rx:4,fill:"inherit",fillOpacity:.2})))}},hr=c()("span").withConfig({displayName:"Icon___StyledSpan",componentId:"k1qdra-0"})({display:"inline-flex"}),gr=function(e){var n=e.name,t=e.width,r=void 0===t?24:t,a=e.height,i=void 0===a?24:a,o=e.color,l=sr(e,["name","width","height","color"]),c=fr[n];return Pt.a.createElement(hr,pr({className:"icon"},l),Pt.a.createElement(c,{fill:o,width:r,height:i}))};gr.propTypes={name:Lt.string,color:Lt.string,height:Lt.number,width:Lt.number};var mr=gr,yr=c.a.div.withConfig({displayName:"PageBody__StyledPageBody",componentId:"sc-1m9lg2o-0"})(["padding:64px 40px;"]),br=function(e){e.props;var n=e.children;return Pt.a.createElement(yr,null,n)},xr=t("@reach/listbox");t("@reach/listbox/styles.css");function vr(){return(vr=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function wr(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Sr=function(e){var n=e.defaultValue,t=e.options,r=wr(e,["defaultValue","options"]);if(!t)return null;return Pt.a.createElement(jr,vr({arrow:Pt.a.createElement(mr,{name:"chevronDown",width:10,height:10})},r),Pt.a.createElement(Pt.a.Fragment,null,n&&Pt.a.createElement(xr.ListboxOption,{key:"default",value:"default"},n),t&&function(e){return Pt.a.createElement(Pt.a.Fragment,null,e.map((function(e,n){return Pt.a.createElement(xr.ListboxOption,{key:"option-".concat(n),value:e.value},e.title)})))}(t)))};Sr.propTypes={defaultValue:Lt.string,options:Object(Lt.arrayOf)(Object(Lt.shape)({title:Lt.string.isRequired,value:Lt.string.isRequired})).isRequired};var jr=c()(xr.Listbox).withConfig({displayName:"Select__StyledSelect",componentId:"sc-167fa7p-0"})(["> [data-reach-listbox-button]{padding:8px 16px;font-family:",";line-height:24px;font-weight:bold;border-color:",";border-radius:12px;color:",";position:relative;outline:none;align-items:baseline;}> [data-reach-listbox-arrow]{right:0.75rem;pointer-events:none;display:block;}"],a.paragraph1FontFamily,r.secondaryBlack20,r.secondaryBlack100),Fr=Sr,Or=c.a.div.withConfig({displayName:"SummaryTable__StyledGrid",componentId:"sc-15ffqnu-0"})(["display:grid;grid-template-columns:1fr auto;row-gap:16px;margin-bottom:32px;"]),Lr=c.a.div.withConfig({displayName:"SummaryTable__StyledBorder",componentId:"sc-15ffqnu-1"})(["width:100%;height:1px;background-color:rgba(0,0,0,0.1);margin:32px 0;"]),zr=c.a.p.withConfig({displayName:"SummaryTable__StyledItemName",componentId:"sc-15ffqnu-2"})(["font-size:18px;line-height:28px;"]),Pr=c.a.h2.withConfig({displayName:"SummaryTable__StyledHeading",componentId:"sc-15ffqnu-3"})(["margin-bottom:30px;"]),Er=c.a.div.withConfig({displayName:"SummaryTable__StyledPrice",componentId:"sc-15ffqnu-4"})(["font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";text-align:right;"],a.headline6FontFamily,a.headline6FontSize,a.headline6FontWeight,a.headline6FontStyle,a.headline6LineHeight,a.headline6LetterSpacing),_r=c.a.div.withConfig({displayName:"SummaryTable__StyledTotal",componentId:"sc-15ffqnu-5"})(["font-family:",";font-size:",";font-weight:",";font-style:",";line-height:",";letter-spacing:",";text-align:right;"],a.headline4FontFamily,a.headline4FontSize,a.headline4FontWeight,a.headline4FontStyle,a.headline4LineHeight,a.headline4LetterSpacing),kr=function(e){var n=e.items,t=e.total;return n&&n.length>0&&Pt.a.createElement(Pt.a.Fragment,null,Pt.a.createElement(Pr,null,"Summary"),Pt.a.createElement(Or,null,n.map((function(e){return Pt.a.createElement(Pt.a.Fragment,{key:e.name},Pt.a.createElement("p",null,e.name),Pt.a.createElement(Er,null,e.price))}))),t&&Pt.a.createElement(Pt.a.Fragment,null,Pt.a.createElement(Lr,null),Pt.a.createElement(Or,null,Pt.a.createElement(zr,null,"Total"),Pt.a.createElement(_r,null,t))))}},0:function(e,n,t){e.exports=t("./src/index.js")},"@reach/listbox":function(e,n){e.exports=require("@reach/listbox")},"@reach/listbox/styles.css":function(e,n){e.exports=require("@reach/listbox/styles.css")},"core-js/modules/es.array.map.js":function(e,n){e.exports=require("core-js/modules/es.array.map.js")},"core-js/modules/es.array.slice.js":function(e,n){e.exports=require("core-js/modules/es.array.slice.js")},"core-js/modules/es.function.name.js":function(e,n){e.exports=require("core-js/modules/es.function.name.js")},"core-js/modules/es.object.assign.js":function(e,n){e.exports=require("core-js/modules/es.object.assign.js")},"core-js/modules/es.object.freeze.js":function(e,n){e.exports=require("core-js/modules/es.object.freeze.js")},"core-js/modules/es.object.keys.js":function(e,n){e.exports=require("core-js/modules/es.object.keys.js")},"core-js/modules/es.symbol.js":function(e,n){e.exports=require("core-js/modules/es.symbol.js")},"prop-types":function(e,n){e.exports=require("prop-types")},react:function(e,n){e.exports=require("react")},"react-awesome-slider":function(e,n){e.exports=require("react-awesome-slider")},"react-awesome-slider/dist/styles.css":function(e,n){e.exports=require("react-awesome-slider/dist/styles.css")},"styled-components":function(e,n){e.exports=require("styled-components")}})}));
//# sourceMappingURL=design-system.js.map