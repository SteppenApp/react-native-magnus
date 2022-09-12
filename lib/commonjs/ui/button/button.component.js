"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Button=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _button=require("./button.style");var _theme=require("../../theme");var _theme2=require("../../theme/theme.service");var _button2=require("./button.service");var _text=require("../text/text.component");var _types=require("../../types");var _utilities=require("../../utilities");var _useDefaultProps=require("../../utilities/useDefaultProps");var _excluded=["m","mt","mr","mb","ml","ms","p","pr","pt","pb","pl","h","w","bg","minW","minH","suffix","style","fontSize","fontWeight","prefix","rounded","roundedTop","roundedRight","roundedBottom","roundedLeft","color","loading","disabled","loaderColor","loaderSize","children","borderColor","borderBottomColor","borderLeftColor","borderTopColor","borderRightColor","borderWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","borderTopWidth","borderEndWidth","shadow","borderless","rippleColor","shadowColor","onPress","block","ripple","alignSelf"];var _this=void 0,_jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/button/button.component.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Button=function Button(incomingProps){var props=(0,_useDefaultProps.useDefaultProps)('Button',incomingProps,{bg:'blue600',p:'lg',color:'white',rounded:'sm',loading:false,disabled:false,loaderSize:'2xl',loaderColor:'white',block:false,position:'relative',shadowColor:'gray800',shadow:0,fontSize:'lg',rippleColor:'white',ripple:true,borderless:false,alignItems:'center',justifyContent:'center',alignSelf:'flex-start',onPress:function onPress(){},flexDir:'row'});var m=props.m,mt=props.mt,mr=props.mr,mb=props.mb,ml=props.ml,ms=props.ms,p=props.p,pr=props.pr,pt=props.pt,pb=props.pb,pl=props.pl,h=props.h,w=props.w,bg=props.bg,minW=props.minW,minH=props.minH,suffix=props.suffix,style=props.style,fontSize=props.fontSize,fontWeight=props.fontWeight,prefix=props.prefix,rounded=props.rounded,roundedTop=props.roundedTop,roundedRight=props.roundedRight,roundedBottom=props.roundedBottom,roundedLeft=props.roundedLeft,colorProp=props.color,loading=props.loading,disabled=props.disabled,loaderColor=props.loaderColor,loaderSize=props.loaderSize,children=props.children,borderColor=props.borderColor,borderBottomColor=props.borderBottomColor,borderLeftColor=props.borderLeftColor,borderTopColor=props.borderTopColor,borderRightColor=props.borderRightColor,borderWidth=props.borderWidth,borderLeftWidth=props.borderLeftWidth,borderRightWidth=props.borderRightWidth,borderBottomWidth=props.borderBottomWidth,borderTopWidth=props.borderTopWidth,borderEndWidth=props.borderEndWidth,shadow=props.shadow,borderless=props.borderless,rippleColor=props.rippleColor,shadowColor=props.shadowColor,onPress=props.onPress,block=props.block,ripple=props.ripple,alignSelf=props.alignSelf,rest=(0,_objectWithoutProperties2.default)(props,_excluded);var _useTheme=(0,_theme.useTheme)(),theme=_useTheme.theme;var computedStyle=(0,_button.getStyle)(theme,props);var underlayColor=(0,_button2.getUnderlayColor)(theme,props);var calculatedRippleColor=(0,_button2.getRippleColor)(theme,props);var renderChildren=function renderChildren(){if(typeof children==='string'){return React.createElement(_text.Text,(0,_extends2.default)({},_utilities.getSpecificProps.apply(void 0,[props].concat((0,_toConsumableArray2.default)(_types.textProps))),{style:computedStyle.text,__self:_this,__source:{fileName:_jsxFileName,lineNumber:112,columnNumber:9}}),children);}return children;};return React.createElement(_reactNative.Pressable,(0,_extends2.default)({},rest,{onPress:disabled||loading?undefined:onPress,style:function style(_ref){var pressed=_ref.pressed;return[computedStyle.button,pressed&&!disabled&&!loading&&{backgroundColor:underlayColor}];},android_ripple:!ripple?{color:calculatedRippleColor,borderless:borderless}:null,__self:_this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:5}}),loading?React.createElement(_reactNative.View,{style:computedStyle.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:142,columnNumber:9}},React.createElement(_reactNative.View,{style:computedStyle.loadingContainer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:143,columnNumber:11}},React.createElement(_reactNative.ActivityIndicator,{size:(0,_theme2.getThemeProperty)(theme.fontSize,loaderSize),color:(0,_theme2.getThemeColor)(theme.colors,loaderColor),__self:_this,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:13}}))):React.createElement(_reactNative.Animated.View,{style:computedStyle.container,__self:_this,__source:{fileName:_jsxFileName,lineNumber:151,columnNumber:9}},prefix,renderChildren(),suffix));};exports.Button=Button;
//# sourceMappingURL=button.component.js.map