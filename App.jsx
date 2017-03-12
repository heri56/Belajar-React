import React from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

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

class Header extends React.Component {
  render(){
    //Style Background
  document.body.style.backgroundColor = "SteelBlue ";
    const divStyle = {
      color: 'blue',
    };
    return (
      <div style={divStyle}>
        <h1>React style CSS</h1>
      </div>

    );
  }

}

/*class ShoppingList extends React.Component {
  render(){
    <div className="shopping-list">

  }*/
//}

class GroceList extends React.Component {
  render(){
    return(
      <ul>
        <ListItem jumlah="1" name="Bread"/>
        <ListItem jumlah="6" name="Eggs"/>
        <ListItem jumlah="2" name="Milk"/>
      </ul>
    );
  }
}

class ListItem extends React.Component {
  render(){
    return(
      <li>
        {this.this.props.jumlah}x {this.props.name}
      </li>
    );
  }

}

//export default App;
export default Header;
