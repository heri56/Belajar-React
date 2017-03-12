import React from 'react';


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
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }

}

/*class ShoppingList extends React.Component {
  render(){
    <div className="shopping-list">

  }*/
//}

//export default App;
export default Header;
