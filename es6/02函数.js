//箭头函数
// 如果只有一个参数 括号可以省  如果只有一个return花括号可以省
//this 指向上级

let fun = i => console.log(i)

fun(12) //12

//函数参数
// 函数展开 扩展  默认参数

//...收集剩余的参数  扩展形参必须放在最后
let fun1 = (a,b,...args) => {
  console.log(a,b,args)
  //...展开数组
  console.log(a,b,...args)
}
let array = [8,7,5,2,3,1]

fun1(1,2,3,4,5)
// 1 2 [ 3, 4, 5 ]
// 1 2 3 4 5

fun1(...array)
// 8 7 [ 5, 2, 3, 1 ]
// 8 7 5 2 3 1


//默认赋值
let fun2 = (a,b=1,c=2) => {
  console.log(a+b+c)
}
fun2(5) //8
fun2(5,5,5) //15