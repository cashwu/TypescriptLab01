//class Caluclator {
//    Add(a: number, b: number): number {
//        return a + b;
//    }
//}
//var calcuclator = new Caluclator();
//var result = calcuclator.Add(1, 2);
//console.log(result);
var Hello = (function () {
    function Hello(dom) {
        this.dom = dom;
    }
    Hello.prototype.Say = function () {
        this.dom.innerHTML = "Hello Typescript";
    };
    return Hello;
}());
var dom = document.querySelector("#content");
var hello = new Hello(dom);
hello.Say();
