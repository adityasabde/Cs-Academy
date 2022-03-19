const data = [
    {
        id:"1",
        question:"TO place the image into a HTML file ...... attribute is used in IMG tag",
        option1:"URL",
        option2:"ALT",
        option3:"SRC",
        option4:"HREF",
        ansid:"3"
    },
    {
        id:"2",
        question:"The elements of a record are.......",
        option1:"Homogeneous",
        option2:"Similar",
        option3:"Non-Homogeneous",
        option4:"Identical",
        ansid:"3"
    },
    {
        id:"3",
        question:"Windows NT is ....... operating system.",
        option1:"Multiuser",
        option2:"Multitasking",
        option3:"Multithreading",
        option4:"All of the above",
        ansid:"4"
    },
    {
        id:"4",
        question:"The ability to take more than one form is called ...... in object oriented programming.",
        option1:"Inheritance",
        option2:"Encapsulation",
        option3:"Polymorphism",
        option4:"Data abstraction",
        ansid:"3"
    },{
        id:"5",
        question:"Is not a operating system ?",
        option1:"UNIX",
        option2:"LINUX",
        option3:"MS-DOS",
        option4:"C++",
        ansid:"4"
    },{
        id:"6",
        question:"The most efficient search algorithm.",
        option1:"Binary search",
        option2:"Reverse search",
        option3:"Linear search",
        option4:"Pointer search",
        ansid:"1"
    },{
        id:"7",
        question:"VBScript can be executed in ..... web browser",
        option1:"Netscape navigator",
        option2:"Internet explorer",
        option3:"Both",
        option4:"None of these",
        ansid:"4"
    },{
        id:"8",
        question:"Bulleted list in HTML is created by ..... tag.",
        option1:"<UL>",
        option2:"<OL>",
        option3:"<B>",
        option4:"<Br>",
        ansid:"1"
    },{
        id:"9",
        question:"..... is very useful in situation when data is to be stored and retrieved in reverse order.",
        option1:"Stack",
        option2:"Queue",
        option3:"Linked List",
        option4:"Tree",
        ansid:"1"
    },{
        id:"10",
        question:"What will be the value of x after execution of following expression in c++? X= ++m+n+ +; where m=10 and n=15.",
        option1:"25",
        option2:"27",
        option3:"26",
        option4:"28",
        ansid:"3"
    },{
        id:"11",
        question:"...... is free softwear  (2019)",
        option1:"UNIX",
        option2:"WINDOWS",
        option3:"LINUX",
        option4:"DOS",
        ansid:"3"
    },{
        id:"12",
        question:"Turning attentions of CPU from one processor to another is called as ........",
        option1:"Reference",
        option2:"Context Switching",
        option3:"process Scheduling",
        option4:"Multithreading",
        ansid:"2"
    },{
        id:"13",
        question:"If lower bound = 0 and upperbound = 15 then midterm is ..... in binary search method.",
        option1:"6",
        option2:"7",
        option3:"8",
        option4:"9",
        ansid:"3"
    },{
        id:"14",
        question:"..... system is used to declare destructor function in c++.",
        option1:"@",
        option2:"#",
        option3:"~",
        option4:"!",
        ansid:"3"
    },{
        id:"5",
        question:".... tag is uses to write the defination list?",
        option1:"<ul>",
        option2:"<dl>",
        option3:"<ol>",
        option4:"<dl>",
        ansid:"2"
    }
];

const no = document.querySelector(".no");
const question = document.querySelector('.question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');

const submit = document.getElementById('submit');
// const pre = document.getElementById('pre');
// const next = document.getElementById('next');


const input = document.querySelectorAll(".input");


let currenttime = 0;
window.addEventListener("DOMContentLoaded",()=>{
    showquestion(currenttime);
})

function showquestion(currenttime){
    const item = data[currenttime];
    no.textContent = item.id;
    question.textContent = item.question;
    option1.textContent = item.option1;
    option2.textContent = item.option2;
    option3.textContent = item.option3;
    option4.textContent = item.option4;
}

// next.addEventListener("click",()=>{
//     currenttime++;
//     if(currenttime < data.length){
//         showquestion(currenttime);
//     }
//     else{
//         currenttime = 0;
//     }

// });

// pre.addEventListener("click",()=>{
//     currenttime--;
//     if(currenttime >= 0){
//         showquestion(currenttime);
       
//     }
//     else{
//         currenttime = data.length-1;
//     }
// });

function getcheckanswer(){
    let ans ;
    input.forEach((current)=>{
        // console.log(current);
        if(current.checked){
            ans = current.id;
        }
    })
    return ans;
};
const deleselectall =()=>{
    input.forEach((current) => {
        current.checked = false;
    });
};


var score=0;
 submit.addEventListener("click",()=>{
    //  console.log(submit);
    // console.log("no"+currenttime)
    let circle = document.querySelector(".no"+currenttime);
    // console.log(circle)
    circle.style.background = "rgb(12, 236, 12)";
    let checkans = getcheckanswer();
    if(checkans === data[currenttime].ansid){
       score++;
    }
    currenttime++;
    deleselectall();
    if(currenttime >= data.length){
        const modal = document.querySelector(".modal-overlay");
        modal.classList.add("open-modal")

        const marks = document.querySelector(".marks");
        const suggetion = document.querySelector(".suggetion");

        if(score == 5){
            suggetion.textContent = "Excellet score";
        }else if(score >= 3){
            suggetion.textContent = "good score";
        }else{
            suggetion.textContent = "bad Score";
        }
        marks.textContent = score;
        console.log(score);
    }
    else{
        showquestion(currenttime);
    }
 });



 var count = 1200;
 let sec = 60;
var interval = setInterval(function(){
    let time = Math.trunc(count / 60);
    
  document.getElementById('count').innerHTML="Time Left :- "+time+" : "+sec;
  count--;
  if(sec === 0){
      sec = 60;
  }
  else{
    sec--;
  }
  
  if (count === 1990){
    const modal = document.querySelector(".modal-overlay");
        modal.classList.add("open-modal")

        const marks = document.querySelector(".marks");
        const suggetion = document.querySelector(".suggetion");

        if(score == 5){
            suggetion.textContent = "Excellet score";
        }else if(score >= 3){
            suggetion.textContent = "good score";
        }else{
            suggetion.textContent = "bad Score";
        }
        marks.textContent = score;
        console.log(score);
        clearInterval(interval);
  }
}, 1000);

