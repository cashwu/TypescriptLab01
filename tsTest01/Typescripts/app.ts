
//class Caluclator {
//    Add(a: number, b: number): number {
//        return a + b;
//    }
//}

//var calcuclator = new Caluclator();
//var result = calcuclator.Add(1, 2);

//console.log(result);

class Hello {
    constructor(private dom: Element) {
        
    }

    Say() {
        this.dom.innerHTML = "Hello Typescript";
    }
}

var dom = document.querySelector("#content");
var hello = new Hello(dom);
hello.Say();