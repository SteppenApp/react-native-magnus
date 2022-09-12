var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Mention=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _mention=require("./mention.style");var _theme=require("../../theme");var _withDefaultProps=require("../../utilities/withDefaultProps");var _jsxFileName="/Users/glairnarra/Development/react-native-magnus/src/ui/mention/mention.component.tsx";var _excluded=["m","mt","mr","mb","ml","p","pr","pt","pb","pl","borderColor","borderBottomColor","borderLeftColor","borderTopColor","borderRightColor","borderWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","borderTopWidth","rounded","roundedTop","roundedRight","roundedBottom","roundedLeft","children","renderItem","loading","data"];function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var MentionBase=function(_React$Component){(0,_inherits2.default)(MentionBase,_React$Component);var _super=_createSuper(MentionBase);function MentionBase(){var _this;(0,_classCallCheck2.default)(this,MentionBase);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"previousChar",' ');(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"isTrackingStarted",false);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{textInputHeight:'',isTrackingStarted:false});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"startTracking",function(){_this.isTrackingStarted=true;_this.setState({isTrackingStarted:true});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"stopTracking",function(){var onHide=_this.props.onHide;_this.isTrackingStarted=false;_this.setState({isTrackingStarted:false});if(onHide){onHide();}});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"updateSuggestions",function(lastKeyword){var triggerCallback=_this.props.triggerCallback;triggerCallback(lastKeyword);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"identifyKeyword",function(val){var _this$props=_this.props,trigger=_this$props.trigger,triggerLocation=_this$props.triggerLocation;if(_this.isTrackingStarted){var boundary=triggerLocation==='new-word-only'?'B':'';var pattern=new RegExp("\\"+boundary+trigger+"[a-z0-9_-]+|\\"+boundary+trigger,'gi');var keywordArray=val.match(pattern);if(keywordArray&&!!keywordArray.length){var lastKeyword=keywordArray[keywordArray.length-1];_this.updateSuggestions(lastKeyword);}}});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onChangeText",function(val){var isTrackingStarted=_this.state.isTrackingStarted;var _this$props2=_this.props,children=_this$props2.children,triggerLocation=_this$props2.triggerLocation,trigger=_this$props2.trigger;if(children.props.onChangeText){children.props.onChangeText(val);}var lastChar=val.substr(val.length-1);var wordBoundry=triggerLocation==='new-word-only'?_this.previousChar.trim().length===0:true;if(lastChar===trigger&&wordBoundry){_this.startTracking();}else if(lastChar===' '&&isTrackingStarted||val===''){_this.stopTracking();}_this.previousChar=lastChar;_this.identifyKeyword(val);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"resetTextbox",function(){_this.previousChar=' ';_this.stopTracking();});return _this;}(0,_createClass2.default)(MentionBase,[{key:"render",value:function render(){var _this2=this;var isTrackingStarted=this.state.isTrackingStarted;var _this$props3=this.props,m=_this$props3.m,mt=_this$props3.mt,mr=_this$props3.mr,mb=_this$props3.mb,ml=_this$props3.ml,p=_this$props3.p,pr=_this$props3.pr,pt=_this$props3.pt,pb=_this$props3.pb,pl=_this$props3.pl,borderColor=_this$props3.borderColor,borderBottomColor=_this$props3.borderBottomColor,borderLeftColor=_this$props3.borderLeftColor,borderTopColor=_this$props3.borderTopColor,borderRightColor=_this$props3.borderRightColor,borderWidth=_this$props3.borderWidth,borderLeftWidth=_this$props3.borderLeftWidth,borderRightWidth=_this$props3.borderRightWidth,borderBottomWidth=_this$props3.borderBottomWidth,borderTopWidth=_this$props3.borderTopWidth,rounded=_this$props3.rounded,roundedTop=_this$props3.roundedTop,roundedRight=_this$props3.roundedRight,roundedBottom=_this$props3.roundedBottom,roundedLeft=_this$props3.roundedLeft,children=_this$props3.children,_renderItem=_this$props3.renderItem,loading=_this$props3.loading,data=_this$props3.data,rest=(0,_objectWithoutProperties2.default)(_this$props3,_excluded);return _react.default.createElement(_theme.ThemeContext.Consumer,{__self:this,__source:{fileName:_jsxFileName,lineNumber:134,columnNumber:7}},function(_ref){var theme=_ref.theme;var computedStyle=(0,_mention.getStyle)(theme,_this2.props);return _react.default.createElement(_reactNative.View,{style:{flex:1},__self:_this2,__source:{fileName:_jsxFileName,lineNumber:139,columnNumber:13}},_react.default.createElement(_react.default.Fragment,null,(data!==null&&data!==void 0?data:[]).length>0&&isTrackingStarted&&loading===false&&_react.default.createElement(_reactNative.FlatList,(0,_extends2.default)({data:data,showsVerticalScrollIndicator:true,style:computedStyle.list},rest,{renderItem:function renderItem(rowData){return _renderItem(rowData);},__self:_this2,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:21}})),loading&&_react.default.createElement(_reactNative.View,{style:computedStyle.loading,__self:_this2,__source:{fileName:_jsxFileName,lineNumber:153,columnNumber:19}},_react.default.createElement(_reactNative.ActivityIndicator,{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:154,columnNumber:21}}))),_react.default.createElement(_reactNative.View,{__self:_this2,__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:15}},_react.default.cloneElement(children,{onChangeText:_this2.onChangeText})));});}}]);return MentionBase;}(_react.default.Component);var Mention=(0,_withDefaultProps.withDefaultProps)(MentionBase,'Mention',{bg:'white',rounded:'md',borderColor:'gray200',borderWidth:1,horizontal:false,loading:false,shadow:1,shadowColor:'gray900',keyboardShouldPersistTaps:'always',trigger:'@',position:'absolute',bottom:0,onHide:function onHide(){}});exports.Mention=Mention;
//# sourceMappingURL=mention.component.js.map