"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Toast=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _snackbar=require("./snackbar.style");var _theme=require("../../theme");var _text=require("../text/text.component");var _utilities=require("../../utilities");var _types=require("../../types");var _useDefaultProps=require("../../utilities/useDefaultProps");var _excluded=["m","mt","mr","mb","ml","ms","p","pr","pt","pb","pl","rounded","roundedTop","roundedRight","roundedBottom","roundedLeft","children","onClose","duration","suffix","prefix","borderColor","borderBottomColor","borderLeftColor","borderTopColor","borderRightColor","borderWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","borderTopWidth","borderEndWidth","flexDir","justifyContent","alignItems","alignSelf","shadow","shadowColor","opacity","useNativeDriver"];var _this=void 0,_jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/snackbar/toast.component.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Toast=function Toast(incomingProps){var props=(0,_useDefaultProps.useDefaultProps)('Snackbar',incomingProps,{bg:'gray900',color:'white',p:'lg',m:'md',rounded:'md',fontSize:'md',duration:4000,onClose:function onClose(){},shadow:2,shadowColor:'gray500',flexDir:'row',justifyContent:'center',alignItems:'center',alignSelf:'center',useNativeDriver:false});var m=props.m,mt=props.mt,mr=props.mr,mb=props.mb,ml=props.ml,ms=props.ms,p=props.p,pr=props.pr,pt=props.pt,pb=props.pb,pl=props.pl,rounded=props.rounded,roundedTop=props.roundedTop,roundedRight=props.roundedRight,roundedBottom=props.roundedBottom,roundedLeft=props.roundedLeft,children=props.children,onClose=props.onClose,duration=props.duration,suffix=props.suffix,prefix=props.prefix,borderColor=props.borderColor,borderBottomColor=props.borderBottomColor,borderLeftColor=props.borderLeftColor,borderTopColor=props.borderTopColor,borderRightColor=props.borderRightColor,borderWidth=props.borderWidth,borderLeftWidth=props.borderLeftWidth,borderRightWidth=props.borderRightWidth,borderBottomWidth=props.borderBottomWidth,borderTopWidth=props.borderTopWidth,borderEndWidth=props.borderEndWidth,flexDir=props.flexDir,justifyContent=props.justifyContent,alignItems=props.alignItems,alignSelf=props.alignSelf,shadow=props.shadow,shadowColor=props.shadowColor,opacityProp=props.opacity,useNativeDriver=props.useNativeDriver,rest=(0,_objectWithoutProperties2.default)(props,_excluded);var _useTheme=(0,_theme.useTheme)(),theme=_useTheme.theme;var computedStyle=(0,_snackbar.getStyle)(theme,props);var _useState=(0,React.useState)(new _reactNative.Animated.Value(0.0)),_useState2=(0,_slicedToArray2.default)(_useState,1),opacity=_useState2[0];(0,React.useEffect)(function(){_reactNative.Animated.timing(opacity,{toValue:1,useNativeDriver:true,duration:250}).start();var closeTimeout=0;if(duration!==0&&typeof duration==='number'){closeTimeout=setTimeout(function(){_reactNative.Animated.timing(opacity,{toValue:0,useNativeDriver:true,duration:250}).start(function(_ref){var finished=_ref.finished;if(finished){onClose();}});},duration);}return function(){closeTimeout&&clearTimeout(closeTimeout);};},[duration,onClose,opacity]);var renderChildren=function renderChildren(){if(typeof children==='string'){return React.createElement(_text.Text,(0,_extends2.default)({},_utilities.getSpecificProps.apply(void 0,[props].concat((0,_toConsumableArray2.default)(_types.textProps))),{style:computedStyle.text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:9}}),children);}return children;};return React.createElement(_reactNative.SafeAreaView,{pointerEvents:"box-none",style:computedStyle.wrapper,__self:_this,__source:{fileName:_jsxFileName,lineNumber:126,columnNumber:5}},React.createElement(_reactNative.Animated.View,(0,_extends2.default)({style:{opacity:opacity,transform:[{scale:opacity.interpolate({inputRange:[0,1],outputRange:[0.9,1]})}]}},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:127,columnNumber:7}}),React.createElement(_reactNative.View,{style:computedStyle.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:9}},prefix&&React.createElement(_reactNative.View,{style:computedStyle.prefix,__self:_this,__source:{fileName:_jsxFileName,lineNumber:142,columnNumber:22}},prefix),renderChildren(),suffix&&React.createElement(_reactNative.View,{style:computedStyle.suffix,__self:_this,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:22}},suffix))));};exports.Toast=Toast;
//# sourceMappingURL=toast.component.js.map