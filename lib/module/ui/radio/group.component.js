var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.RadioGroup=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var React=_interopRequireWildcard(require("react"));var _div=require("../div/div.component");var _useDefaultProps=require("../../utilities/useDefaultProps");var _excluded=["children","onChange","value"];var _this=this,_jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/radio/group.component.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var RadioGroup=function RadioGroup(incomingProps){var _ref,_props$value;var props=(0,_useDefaultProps.useDefaultProps)('RadioGroup',incomingProps,{});var _useState=(0,React.useState)((_ref=(_props$value=props.value)!==null&&_props$value!==void 0?_props$value:props.defaultValue)!==null&&_ref!==void 0?_ref:null),_useState2=(0,_slicedToArray2.default)(_useState,2),value=_useState2[0],setValue=_useState2[1];var children=props.children,onChangeProp=props.onChange,propsValue=props.value,rest=(0,_objectWithoutProperties2.default)(props,_excluded);var onChange=function onChange(optionValue){if(!('value'in props)){setValue(optionValue);}if(onChangeProp){onChangeProp(optionValue);}};var renderChildren=function renderChildren(){return React.Children.map(children,function(child){return React.cloneElement(child,{onChange:onChange,checked:value===child.props.value});});};return React.createElement(_div.Div,(0,_extends2.default)({},rest,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:10}}),renderChildren());};exports.RadioGroup=RadioGroup;
//# sourceMappingURL=group.component.js.map