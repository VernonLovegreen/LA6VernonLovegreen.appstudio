
btnSubmit.onclick=function(){
  let num1 = parseInt(input2.value)
  let num2 = parseInt(input3.value)
  let sum = num1 + num2
  lbl2.value = userName + ", The answer is " + sum
}



btnMult.onclick=function(){
   let num1 = parseInt(input2.value)
  let num2 = parseInt(input3.value)
  let product = num1 * num2
  lbl2.value = userName + ", The answer is " + product
}
