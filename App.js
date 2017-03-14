'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

/*class App extends React.Component {
   render() {
     var i =1;
     var style = {
       fontSize : 100,
       color: '#FF0000'
     }
      return (
         <div>
           <h1 style = {style}>Try</h1>
           <h1>{i == 1 ? 'True!' : 'False'}</h1>
            <h1>Header</h1>
            <h2>{2+10}</h2>
            Hello World!!!
            <p data-myattribute = "somevalue">This is the content!!!</p>
            <a href ="li.html">li</a>
         </div>
      );
   }
}*/

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
  }

  /*class ShoppingList extends React.Component {
    render(){
      <div className="shopping-list">
  
    }*/
  //}

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      //Style Background
      document.body.style.backgroundColor = "SteelBlue ";
      var divStyle = {
        color: 'blue'
      };
      return _react2['default'].createElement(
        'div',
        { style: divStyle },
        _react2['default'].createElement(
          'h1',
          null,
          'React style CSS'
        )
      );
    }
  }]);

  return Header;
})(_react2['default'].Component);

var GroceList = (function (_React$Component2) {
  _inherits(GroceList, _React$Component2);

  function GroceList() {
    _classCallCheck(this, GroceList);

    _get(Object.getPrototypeOf(GroceList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(GroceList, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'ul',
        null,
        _react2['default'].createElement(ListItem, { jumlah: '1', name: 'Bread' }),
        _react2['default'].createElement(ListItem, { jumlah: '6', name: 'Eggs' }),
        _react2['default'].createElement(ListItem, { jumlah: '2', name: 'Milk' })
      );
    }
  }]);

  return GroceList;
})(_react2['default'].Component);

var ListItem = (function (_React$Component3) {
  _inherits(ListItem, _React$Component3);

  function ListItem() {
    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'li',
        null,
        this['this'].props.jumlah,
        'x ',
        this.props.name
      );
    }
  }]);

  return ListItem;
})(_react2['default'].Component);

var Statefull = (function (_React$Component4) {
  _inherits(Statefull, _React$Component4);

  function Statefull() {
    _classCallCheck(this, Statefull);

    _get(Object.getPrototypeOf(Statefull.prototype), 'constructor', this).call(this);
    this.state = {
      data: [{
        "id": 1,
        "name": "Foo",
        "age": 20
      }, {
        "id": 2,
        "name": "Bar",
        "age": 20
      }]
    };
  }

  _createClass(Statefull, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(Header, null),
        _react2['default'].createElement(
          'table',
          null,
          _react2['default'].createElement(
            'tbody',
            null,
            this.state.data.map(function (person, i) {
              return _react2['default'].createElement(TableRow, { key: i, data: person });
            })
          )
        )
      );
    }
  }]);

  return Statefull;
})(_react2['default'].Component);

var TableRow = (function (_React$Component5) {
  _inherits(TableRow, _React$Component5);

  function TableRow() {
    _classCallCheck(this, TableRow);

    _get(Object.getPrototypeOf(TableRow.prototype), 'constructor', this).apply(this, arguments);
  }

  //export default App;
  //export default Header;
  //Link Tutorial: https://www.tutorialspoint.com/reactjs/reactjs_components.htm (Stateful Example)

  _createClass(TableRow, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'tr',
        null,
        _react2['default'].createElement(
          'td',
          null,
          this.props.data.id
        ),
        _react2['default'].createElement(
          'td',
          null,
          this.props.data.name
        ),
        _react2['default'].createElement(
          'td',
          null,
          this.props.data.age
        )
      );
    }
  }]);

  return TableRow;
})(_react2['default'].Component);

exports['default'] = Statefull;
module.exports = exports['default'];