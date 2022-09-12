"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Badge=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _badge=require("./badge.style");var _theme=require("../../theme");var _text=require("../text/text.component");var _utilities=require("../../utilities");var _types=require("../../types");var _useDefaultProps=require("../../utilities/useDefaultProps");var _excluded=["h","w","m","mt","mr","bg","mb","ml","ms","p","pr","pt","pb","pl","minH","minW","style","shadow","rounded","position","roundedTop","roundedRight","roundedBottom","roundedLeft","alignItems","fontSize","justifyContent","borderColor","borderBottomColor","borderLeftColor","borderTopColor","borderRightColor","borderWidth","borderLeftWidth","borderRightWidth","borderEndWidth","shadowColor","children","right","top","left","bottom","color","count","opacity"];var _this=void 0,_jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/badge/badge.component.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Badge=function Badge(incomingProps){var props=(0,_useDefaultProps.useDefaultProps)('Badge',incomingProps,{bg:'green700',rounded:'circle',shadow:0,color:'white',top:0,right:0,shadowColor:'gray900',position:'relative',fontSize:'sm',fontWeight:'bold'});var h=props.h,w=props.w,m=props.m,mt=props.mt,mr=props.mr,bg=props.bg,mb=props.mb,ml=props.ml,ms=props.ms,p=props.p,pr=props.pr,pt=props.pt,pb=props.pb,pl=props.pl,minH=props.minH,minW=props.minW,style=props.style,shadow=props.shadow,rounded=props.rounded,position=props.position,roundedTop=props.roundedTop,roundedRight=props.roundedRight,roundedBottom=props.roundedBottom,roundedLeft=props.roundedLeft,alignItems=props.alignItems,fontSize=props.fontSize,justifyContent=props.justifyContent,borderColor=props.borderColor,borderBottomColor=props.borderBottomColor,borderLeftColor=props.borderLeftColor,borderTopColor=props.borderTopColor,borderRightColor=props.borderRightColor,borderWidth=props.borderWidth,borderLeftWidth=props.borderLeftWidth,borderRightWidth=props.borderRightWidth,borderEndWidth=props.borderEndWidth,shadowColor=props.shadowColor,children=props.children,right=props.right,top=props.top,left=props.left,bottom=props.bottom,color=props.color,count=props.count,opacity=props.opacity,rest=(0,_objectWithoutProperties2.default)(props,_excluded);var _useTheme=(0,_theme.useTheme)(),theme=_useTheme.theme;var computedStyle=(0,_badge.getStyle)(theme,props);return React.createElement(_reactNative.View,{style:computedStyle.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:5}},React.createElement(_reactNative.View,{style:{alignSelf:'flex-start'},__self:_this,__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:7}},typeof children!=='string'&&children,React.createElement(_reactNative.View,(0,_extends2.default)({style:computedStyle.div},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:9}}),typeof children==='string'&&React.createElement(_text.Text,(0,_extends2.default)({},_utilities.getSpecificProps.apply(void 0,[props].concat((0,_toConsumableArray2.default)(_types.textProps))),{style:computedStyle.text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:13}}),children))));};exports.Badge=Badge;
//# sourceMappingURL=badge.component.js.map