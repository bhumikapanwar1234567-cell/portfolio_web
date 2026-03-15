const roles=[

"Computer Science Student",
"AI Learner",
"Cybersecurity Enthusiast",
"Future Software Developer"

]

let i=0
let j=0
let text=""
let deleting=false

function type(){

const element=document.querySelector(".typing")

if(!deleting && j<=roles[i].length){

text=roles[i].substring(0,j++)
element.textContent=text

}

if(deleting && j>=0){

text=roles[i].substring(0,j--)
element.textContent=text

}

if(j==roles[i].length){

deleting=true

}

if(j==0 && deleting){

deleting=false
i++
if(i==roles.length) i=0

}

setTimeout(type,100)

}

type()
