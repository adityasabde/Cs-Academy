const data = [
    {
        id:"1",
        question:"1)Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio unde ducimus maiores voluptas. Non, earum.",
        option1:"Lorem ipsum dolor sit amet",
        option2:"Lorem ipsum dolor sit amet",
        option3:"Lorem ipsum dolor sit amet",
        option4:"Lorem ipsum dolor sit amet",
        ansid:"4"
    },
    {
        id:"2",
        question:"2)Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio unde ducimus maiores voluptas. Non, earum.",
        option1:"Lorem ipsum dolor sit amet",
        option2:"Lorem ipsum dolor sit amet",
        option3:"Lorem ipsum dolor sit amet",
        option4:"Lorem ipsum dolor sit amet",
        ansid:"4"
    },
    {
        id:"3",
        question:"3)Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio unde ducimus maiores voluptas. Non, earum.",
        option1:"Lorem ipsum dolor sit amet",
        option2:"Lorem ipsum dolor sit amet",
        option3:"Lorem ipsum dolor sit amet",
        option4:"Lorem ipsum dolor sit amet",
        ansid:"4"
    },
    {
        id:"4",
        question:"4)Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio unde ducimus maiores voluptas. Non, earum.",
        option1:"Lorem ipsum dolor sit amet",
        option2:"Lorem ipsum dolor sit amet",
        option3:"Lorem ipsum dolor sit amet",
        option4:"Lorem ipsum dolor sit amet",
        ansid:"4"
    },{
        id:"5",
        question:"5)Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio unde ducimus maiores voluptas. Non, earum.",
        option1:"Lorem ipsum dolor sit amet",
        option2:"Lorem ipsum dolor sit amet",
        option3:"Lorem ipsum dolor sit amet",
        option4:"Lorem ipsum dolor sit amet",
        ansid:"4"
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

