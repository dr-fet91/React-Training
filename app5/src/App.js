import React from 'react';
import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Title: 'hello my friend',
    }
    // this.handleSetTitle = this.handleSetTitle.bind(this); @1
  }
  /*
 if we want access to function with `this` we must intial function with
 arrow function way
 */
  handleSetTitle = () => {
    this.setState({
      Title: 'hello hello',
    });
  }

  /*
  if we want intial function with old way we must binding `this` for function
  in constructor method   @1
  */

  /* @1
  handleSetTitle(){
    this.setState({
      Title: 'hello hello',
    });
  }
*/
  render() {
    return (
      <div className='main'>
        <Hello Title={this.state.Title} />
        <Timer handleSetTitle={this.handleSetTitle} />
      </div>
    );
  }
}
export default App;