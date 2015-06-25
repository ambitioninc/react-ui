(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcReactUI = require('./src/ReactUI');

var _srcReactUI2 = _interopRequireDefault(_srcReactUI);

global.ReactUI = _srcReactUI2['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/ReactUI":7}],2:[function(require,module,exports){
module.exports={
  "name": "react-ui",
  "version": "0.4.0",
  "author": "Ambition Team",
  "license": "MIT",
  "description": "A collection of components for React.",
  "repository": {
    "type": "git",
    "url": "git://github.com/ambitioninc/react-ui.git"
  },
  "bugs": {
    "url": "https://github.com/ambitioninc/react-ui/issues"
  },
  "homepage": "https://github.com/ambitioninc/react-ui",
  "scripts": {
    "build": "npm run build_dist && npm run build_docs",
    "build_dist": "browserify dist.js -o dist/react-ui.js --no-bundle-external && uglifyjs dist/react-ui.js -o dist/react-ui.min.js",
    "build_docs": "browserify docs/js/index.js | uglifyjs -o static/js/index.min.js && stylus docs/css/index.styl --out static/css --use nib && cp node_modules/react/dist/react.min.js static/js/react.min.js",
    "lint": "eslint src",
    "test": "npm run lint"
  },
  "devDependencies": {
    "babel": "^5.6.1",
    "babel-istanbul": "^0.2.8",
    "babelify": "^6.1.2",
    "browserify": "^10.2.4",
    "browserify-shim": "^3.8.9",
    "eslint": "^0.23.0",
    "eslint-plugin-react": "^2.5.2",
    "mocha": "^2.2.5",
    "nib": "^1.1.0",
    "stylus": "^0.51.1",
    "uglify-js": "^2.4.23"
  },
  "dependencies": {
    "react": "^0.13.3"
  },
  "browserify": {
    "transform": [
      "babelify",
      "browserify-shim"
    ]
  },
  "browserify-shim": {
    "react": "global:React"
  }
}

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

/**
 * @class AjaxForm
 * A form that submits its contents with an
 * asynchronous POST request via FormData. Falls back to synchronously
 * submitting the form when FormData does not exist.
 */

var AjaxForm = (function (_React$Component) {
    function AjaxForm() {
        _classCallCheck(this, AjaxForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(AjaxForm.prototype), 'constructor', this).apply(this, args);

        this.onResponse = this.onResponse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    _inherits(AjaxForm, _React$Component);

    _createClass(AjaxForm, [{
        key: 'render',
        value: function render() {
            var className = (0, _utils.getClassName)('react-ui-ajax-form', this.props.className);

            return _react2['default'].createElement(
                'form',
                {
                    action: this.props.action,
                    className: className,
                    method: 'POST',
                    onSubmit: this.onSubmit },
                this.props.children
            );
        }
    }, {
        key: 'onResponse',
        value: function onResponse(err, res) {
            this.props.onResponse(err, res);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(evt) {
            evt.preventDefault();
            this.submit(evt);
        }
    }, {
        key: 'submit',
        value: function submit(evt) {
            this.props.onSubmit(evt);

            if (global.FormData) {
                this.submitFormData(evt);
            } else {
                evt.target.submit();
            }
        }
    }, {
        key: 'submitFormData',
        value: function submitFormData(evt) {
            (0, _utils.post)(evt.target.action, new global.FormData(evt.target), this.onResponse);
        }
    }]);

    return AjaxForm;
})(_react2['default'].Component);

AjaxForm.propTypes = {
    action: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    onResponse: _react2['default'].PropTypes.func,
    onSubmit: _react2['default'].PropTypes.func
};

AjaxForm.defaultProps = {
    action: '',
    className: '',
    onResponse: _utils.noop,
    onSubmit: _utils.noop
};

exports['default'] = AjaxForm;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../utils":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsAjaxForm = require('./components/AjaxForm');

var _componentsAjaxForm2 = _interopRequireDefault(_componentsAjaxForm);

exports['default'] = _componentsAjaxForm2['default'];
module.exports = exports['default'];

},{"./components/AjaxForm":3}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

/**
 * @class FileInput
 * A file input that can easily be styled. Uses a hidden file input
 * and exposes stylable visible inputs.
 */

var FileInput = (function (_React$Component) {
    function FileInput() {
        _classCallCheck(this, FileInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(FileInput.prototype), 'constructor', this).apply(this, args);

        this.state = { inputDisplay: '', inputKey: 0 };
        this.onChange = this.onChange.bind(this);
        this.onChooseClick = this.onChooseClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
    }

    _inherits(FileInput, _React$Component);

    _createClass(FileInput, [{
        key: 'render',
        value: function render() {
            var className = (0, _utils.getClassName)('react-ui-file-input', this.props.className);

            return _react2['default'].createElement(
                'div',
                { className: className },
                this.renderHiddenInput(),
                this.renderChooseButton(),
                this.renderClearButton(),
                this.renderInput()
            );
        }
    }, {
        key: 'renderHiddenInput',
        value: function renderHiddenInput() {
            var style = { display: 'none' };

            return _react2['default'].createElement('input', {
                key: this.state.inputKey,
                name: this.props.name,
                onChange: this.onChange,
                ref: 'fileInput',
                style: style,
                type: 'file' });
        }
    }, {
        key: 'renderChooseButton',
        value: function renderChooseButton() {
            var className = (0, _utils.getClassName)('react-ui-file-input-choose', this.props.chooseClassName);

            return _react2['default'].createElement(
                'button',
                {
                    className: className,
                    disabled: this.props.disabled,
                    onClick: this.onChooseClick,
                    type: 'button' },
                this.props.chooseText
            );
        }
    }, {
        key: 'renderClearButton',
        value: function renderClearButton() {
            var className = (0, _utils.getClassName)('react-ui-file-input-clear', this.props.chooseClassName);

            return _react2['default'].createElement(
                'button',
                {
                    className: className,
                    disabled: this.props.disabled,
                    onClick: this.onClearClick,
                    type: 'button' },
                this.props.clearText
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var className = (0, _utils.getClassName)('react-ui-file-input-input', this.props.inputClassName);

            return _react2['default'].createElement('input', {
                className: className,
                disabled: this.props.disabled,
                onClick: this.onChooseClick,
                placeholder: this.props.placeholder,
                readOnly: true,
                type: 'textbox',
                value: this.state.inputDisplay });
        }
    }, {
        key: 'onChange',
        value: function onChange(evt) {
            var inputDisplay = evt.target.value.split('\\').pop();

            this.props.onChange(evt, inputDisplay);
            this.setState({ inputDisplay: inputDisplay });
        }
    }, {
        key: 'onChooseClick',
        value: function onChooseClick(evt) {
            evt.preventDefault();
            this.props.onChooseClick(evt);
            this.refs.fileInput.getDOMNode().click();
        }
    }, {
        key: 'onClearClick',
        value: function onClearClick(evt) {
            evt.preventDefault();
            this.props.onClearClick(evt);
            this.clear();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.setState({
                inputDisplay: '',
                inputKey: this.state.inputKey + 1
            });
        }
    }]);

    return FileInput;
})(_react2['default'].Component);

FileInput.propTypes = {
    chooseClassName: _react2['default'].PropTypes.string,
    chooseText: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    clearClassName: _react2['default'].PropTypes.string,
    clearText: _react2['default'].PropTypes.string,
    inputClassName: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string,
    onChange: _react2['default'].PropTypes.func,
    onChooseClick: _react2['default'].PropTypes.func,
    onClearClick: _react2['default'].PropTypes.func,
    placeholder: _react2['default'].PropTypes.string
};

FileInput.defaultProps = {
    chooseClassName: '',
    chooseText: 'Choose File',
    className: '',
    clearClassName: '',
    clearText: 'Clear File',
    inputClassName: '',
    name: '',
    onChange: _utils.noop,
    onChooseClick: _utils.noop,
    onClearClick: _utils.noop,
    placeholder: ''
};

exports['default'] = FileInput;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../utils":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsFileInput = require('./components/FileInput');

var _componentsFileInput2 = _interopRequireDefault(_componentsFileInput);

exports['default'] = _componentsFileInput2['default'];
module.exports = exports['default'];

},{"./components/FileInput":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _packageJson = require('../package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

var _AjaxForm = require('./AjaxForm');

var _AjaxForm2 = _interopRequireDefault(_AjaxForm);

var _FileInput = require('./FileInput');

var _FileInput2 = _interopRequireDefault(_FileInput);

exports['default'] = {
    AjaxForm: _AjaxForm2['default'],
    FileInput: _FileInput2['default'],
    version: _packageJson2['default'].version
};
module.exports = exports['default'];

},{"../package.json":2,"./AjaxForm":4,"./FileInput":6}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.classNames = classNames;
exports.getClassName = getClassName;
exports.noop = noop;
exports.post = post;

function classNames() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return (typeof args[0] === 'object' ? Object.keys(args[0]).filter(function (key) {
        return args[0][key];
    }) : args).join(' ');
}

function getClassName(cls) {
    var classNameConfig = {};

    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    args.forEach(function (arg) {
        return classNameConfig[arg] = arg;
    });

    return classNames(classNameConfig);
}

function noop() {}

function post(url, data, cb) {
    var req = new global.XMLHttpRequest();

    req.onload = function () {
        return req.status > 199 && req.status < 400 ? cb(undefined, req) : cb(new Error('ReactUI.AjaxForm: Status Error'), req);
    };
    req.onerror = function () {
        return cb(new Error('ReactUI.AjaxForm: Network Error'), req);
    };
    req.open('POST', url, true);
    req.send(data);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
