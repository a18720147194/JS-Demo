//map映射  reduce汇总  filter过滤器  forEach迭代

let arr1 = [12,21,12,41]
let re1 = arr1.map(i=>i*2)
console.log(re1) //[ 24, 42, 24, 82 ]

let arr2 = [11,24,56,177]
let re2 = arr2.reduce((tmp,item,index)=>{
  console.log(tmp,item,index)
  //tmp上次返回的值
  return tmp+item
})
console.log(re2) //268

let arr3 = [12,24,56,177]
let re3 = arr3.filter(item=>{
  if(item%3==0){
    return true
  }else
  return false
})
console.log(re3) //[ 12, 24, 177 ]

let arr4 = [1,2,4]
arr4.forEach((item,index)=>{
  //item 元素    index下标
})