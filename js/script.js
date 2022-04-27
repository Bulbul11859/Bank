let btn=document.querySelector(".btn_one")
let btn2=document.querySelector(".btn_two")
let input=document.querySelector(".input_1")
let input2=document.querySelector(".input_2")
let amount_1=document.querySelector(".amount_1")
let amount_2=document.querySelector(".amount_2")
let amount_3=document.querySelector(".amount_3")
let sum=0




btn.addEventListener("click",function(){
    var bb=parseInt(input.value)
    amount_1.innerHTML=`$${input.value}`
    amount_2.innerHTML=`$0`
   sum=sum+bb 
    amount_3.innerHTML=`$${sum}`

})

btn2.addEventListener("click",function(){
    amount_2.innerHTML=`$${input2.value}`
    amount_1.innerHTML=`$0`
    sum=sum-input2.value
    amount_3.innerHTML=`$${sum}`
 })
 