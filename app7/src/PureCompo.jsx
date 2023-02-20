import { memo } from "react";
// import { Component, PureComponent } from "react";


// class PureCompo extends PureComponent{
//     render(){
//         console.log('   pure component   ');
//         return(
//             <h1>{this.props.name}</h1>
//         );
//     }
// }

const PureCompo = (props)=>{
    return(
        <h1>{props.name}</h1>
    )
}
export default memo(PureCompo);



