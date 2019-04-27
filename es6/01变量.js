//var的缺陷 可以重复声明  无法限制修改 没有块级作用域
for(var i=0;i<10;i++){

}
console.log(i) //10
 
// let 不能重复声明 变量可以修改 块级作用域
//const 不能重复声明 常量不能修改 块级作用域
if(true){
  let c = 1
  const b = 2
}
//console.log(c,b) //not definded