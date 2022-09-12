"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Header=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _text=require("../text/text.component");var _header=require("./header.style");var _theme=require("../../theme");var _utilities=require("../../utilities");var _types=require("../../types");var _useDefaultProps=require("../../utilities/useDefaultProps");var _div=require("../div/div.component");var _excluded=["children","prefix","suffix"];var _this=void 0,_jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/header/header.component.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Header=function Header(incomingProps){var props=(0,_useDefaultProps.useDefaultProps)('Header',incomingProps,{minH:70,p:'lg',bg:'white',rounded:'none',flexDir:'row',shadow:'sm',shadowColor:'gray900',position:'relative',bgMode:'cover',pointerEvents:'auto',borderStyle:'solid',alignItems:'center',alignment:'left',fontWeight:'bold',fontSize:'lg',textTransform:'uppercase'});var children=props.children,prefix=props.prefix,suffix=props.suffix,rest=(0,_objectWithoutProperties2.default)(props,_excluded);var _useTheme=(0,_theme.useTheme)(),theme=_useTheme.theme;var computedStyle=(0,_header.getStyle)(theme,props);var renderChildren=function renderChildren(){if(typeof children==='string'){return React.createElement(_text.Text,(0,_extends2.default)({},_utilities.getSpecificProps.apply(void 0,[props].concat((0,_toConsumableArray2.default)(_types.textProps))),{style:computedStyle.text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:9}}),children);}return children;};var getPrefix=function getPrefix(){if(props.alignment==='center'){return prefix;}return prefix!==null&&prefix!==void 0?prefix:React.createElement(_div.Div,{px:"sm",__self:_this,__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:22}});};return React.createElement(_div.Div,(0,_extends2.default)({},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:62,columnNumber:5}}),React.createElement(_div.Div,{style:computedStyle.prefix,__self:_this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:7}},getPrefix()),React.createElement(_div.Div,{style:computedStyle.center,__self:_this,__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:7}},renderChildren()),React.createElement(_div.Div,{style:computedStyle.suffix,__self:_this,__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:7}},suffix));};exports.Header=Header;
//# sourceMappingURL=header.component.js.map