class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }


    render(){
        console.log(this.width, this.height);
    }
}



var obj = new Rectangle(20, 30);
//console.log(obj.width, obj.height); OR
obj.render();


class coloredRegtangle extends Rectangle{
    constructor(width, height, color){
        super(width, height); // ----> access to parent class property
        this.color = color;
    }
    show(){
        return "<div style='width:"+this.width+"px;height:"+this.height+"px;background-color:"+this.color+"'></div>"
    }
}

var coloreRegtangle = new coloredRegtangle(200, 300, 'red');      // نمیشه اسم متغییر هم اسم کلاس باشه ارور میده
document.getElementById('myDiv').innerHTML = coloreRegtangle.show();


/////////////////// var let const //////////

if(true){
    var x = 1;
    let y = 3;
    const z = 5;

    // z = 5 This code generates an error. Because the constant value cannot be changed
}

console.log(x);
/* 
console.log(y);
console.log(z);
The above causes an error
Because their scope is limited to the block in which they are defined
*/

//////////////////////// function in ES6 ///////////////////

//The old way
function test(x, y){
    console.log(x, y);
}

// the new way

const test2 = (x, y) => {
    console.log(x, y);
}

// If your function has an argument, you can write it like this:
const test3 = x => {
    console.log(x);
}

// If your function is linear. And it has a return , you can write it like this:

const test4 = x => x; // This is equal to `return x` you can also use x * 2;

test(3, 5);
test2(4, 3);
test3(1);
console.log(test4(100));
