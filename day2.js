//callback:
function hello(n1,n2,callback){
    console.log("hello world");

}
let a=10;
let b=20;
console.log(hello(a,b));
callback();
function sayhi(){
console.log(hello(a,b,sayhi));
}