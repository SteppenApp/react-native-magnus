"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.ScrollDiv=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _scrolldiv=require("./scrolldiv.style");var _theme=require("../../theme");var _useDefaultProps=require("../../utilities/useDefaultProps");var _excluded=["h","w","m","mt","mr","mb","ml","p","pr","pt","pb","pl","minH","minW","position","style","flexDir","rounded","roundedTop","roundedRight","roundedBottom","roundedLeft","children","bgImg","bgMode","alignItems","justifyContent","borderColor","borderBottomColor","borderLeftColor","borderTopColor","borderRightColor","borderWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","borderTopWidth","flexWrap","shadow","shadowColor"];var _this=void 0,_jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/scrolldiv/scrolldiv.component.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ScrollDiv=function ScrollDiv(incomingProps){var props=(0,_useDefaultProps.useDefaultProps)('ScrollDiv',incomingProps,{bg:'transparent',flexDir:'column',flexWrap:'nowrap',rounded:'none',shadow:0,shadowColor:'gray900',position:'relative',bgMode:'cover'});var h=props.h,w=props.w,m=props.m,mt=props.mt,mr=props.mr,mb=props.mb,ml=props.ml,p=props.p,pr=props.pr,pt=props.pt,pb=props.pb,pl=props.pl,minH=props.minH,minW=props.minW,position=props.position,style=props.style,flexDir=props.flexDir,rounded=props.rounded,roundedTop=props.roundedTop,roundedRight=props.roundedRight,roundedBottom=props.roundedBottom,roundedLeft=props.roundedLeft,children=props.children,bgImg=props.bgImg,bgMode=props.bgMode,alignItems=props.alignItems,justifyContent=props.justifyContent,borderColor=props.borderColor,borderBottomColor=props.borderBottomColor,borderLeftColor=props.borderLeftColor,borderTopColor=props.borderTopColor,borderRightColor=props.borderRightColor,borderWidth=props.borderWidth,borderLeftWidth=props.borderLeftWidth,borderRightWidth=props.borderRightWidth,borderBottomWidth=props.borderBottomWidth,borderTopWidth=props.borderTopWidth,flexWrap=props.flexWrap,shadow=props.shadow,shadowColor=props.shadowColor,rest=(0,_objectWithoutProperties2.default)(props,_excluded);var _useTheme=(0,_theme.useTheme)(),theme=_useTheme.theme;var computedStyle=(0,_scrolldiv.getStyle)(theme,props);if(bgImg){return React.createElement(_reactNative.ImageBackground,(0,_extends2.default)({source:bgImg,style:computedStyle.div,resizeMode:props.bgMode,imageStyle:computedStyle.image},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:7}}),children);}return React.createElement(_reactNative.ScrollView,(0,_extends2.default)({style:computedStyle.div},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:5}}),children);};exports.ScrollDiv=ScrollDiv;
//# sourceMappingURL=scrolldiv.component.js.map