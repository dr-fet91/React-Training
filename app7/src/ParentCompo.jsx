import { Component, PureComponent } from "react";
import PureCompo from "./PureCompo";



class PrentCompo extends PureComponent{
    constructor(){
        super();
        this.state = {
            name: 'reza',
        };
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'reza',
            });
        }, 1000);
    }
    render(){
        console.log('  parent compo    ');
        return (
            <div>
                <PureCompo name={this.state.name}/>
            </div>
        );
    }
}

export default PrentCompo;



// در برنامه اگر ست استیت فراخوانی بشه کامپوننت رندر میشه حتی اگه مقدار تغییر نکنه اما 
// میشه هوشمندش کرد با استفاده از 
//PureComponent
// با هر دو مدل نوشتم هم اروفانکشن هم کلاسی 