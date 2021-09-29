let members = ["Mary", "Sam", "Joey", "Paul", "Mike", "Char", "Jenny", "Kennedy", "Kaden", "Kurt", "Anne"]

let userName = ""


btn.onclick = function() {
  userName = input1.value
  if (members.includes(userName) == true)
    lblMessage.textContent = userName + ", you are already a member."
  else {
    lblMessage.textContent = userName + ", you have been added to the membership roster."
    members.push(userName)
  }
}


btnCalc.onclick=function(){
  ChangeForm(calculator)
}
