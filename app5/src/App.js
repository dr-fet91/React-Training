import React, { useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       Title: 'hello my friend',
//     }
//     // this.handleSetTitle = this.handleSetTitle.bind(this); @1
//   }
//   /*
//  if we want access to function with `this` we must intial function with
//  arrow function way
//  */
//   handleSetTitle = () => {
//     this.setState({
//       Title: 'hello hello',
//     });
//   }

//   /*
//   if we want intial function with old way we must binding `this` for function
//   in constructor method   @1
//   */

//   /* @1
//   handleSetTitle(){
//     this.setState({
//       Title: 'hello hello',
//     });
//   }
// */
//   render() {
//     return (
//       <div className='main'>
//         <Hello Title={this.state.Title} />
//         <Timer handleSetTitle={this.handleSetTitle} />
//       </div>
//     );
//   }
// }

//دیگه از روش بالا برای ساخت کامپوننت در ری اکت استفاده نمیشه
//در ورژن جدید از هوک ها استفاده میشه که در زیر کد معادل کد بالا رو نوشتیم
//درواقع کامپوننت نوع کلاسی نیست و نوع تابعی است
const App = () => {
  const [Title, setTitle] = useState('hello my friend');
  const handleSetTitle = () => {
    setTitle('hello');
  }
  return (
    <div className='main'>
      <Hello Title={Title} />
      <Timer handleSetTitle={handleSetTitle} />
    </div>
  );
}
export default App;