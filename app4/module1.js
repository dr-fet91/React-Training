import { testNumber as tn } from "./module2.js";
import mydefault, {problemText} from './module3.js';
export let stringVarible = 'hello i am a string varible';

export const testFunc = (x) =>{
    return 'i am a function --- ' + x + mydefault + tn + problemText;
}

export class testClass{
    constructor(x){
        this.x = x;
    }

    log(){
        console.log('this is from test class --- ' + this.x + mydefault + tn + problemText);
    }
}

