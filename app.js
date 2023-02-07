
// let btn=document .querySelector('#btn');
// btn.addEventListener("click",()=>{
    
// location.href="questions.html" ;
// sessionStorage.setItem("location.href.value");
// });

// let startMinutes=.15;
// let currtime=startMinutes*60;
// const countdown=document.getElementById('time');
// let timeout;
// setInterval(update,1000);

//     function update(){
//         let minutes=Math.floor(currtime/60);
//         let seconds=currtime%60;
                 
//          minutes=minutes < 10 ?'0'+ minutes:minutes;

//         seconds=seconds < 10 ?'0'+seconds:seconds;
         
//         countdown.innerHTML=`${minutes} : ${seconds}`;
//         currtime--;
//        currtime=currtime<0 ? 0:currtime ;
//        if(currtime===0){
//         setTimeout(() => {
//             alert("Time up");
//           }, 2000)
          
        
//        }
//       }


const questions=[{
    'que':'who is the interpreter of Indian constition ?',
     'a':'Sansad',
     'b':'Prime Minister',
     'c':'President',
     'd':'None of these',
     'correct':'d',
     'selected':""
},
{
    'que':'who is the current chief justice of india?',
     'a':'Deepak Mishra',
     'b':'DY chandrachud',
     'c':'UU Lalit',
     'd':'None of the above',
     'correct':'b',
     
    },
     {
        'que':'what is value sin30?',
         'a':'1',
         'b':'0',
         'c':'.5',
         'd':'-1',
         'correct':'c',
         
        },
{
        'que':'Current Prime Minsiter of an India',
         'a':'N Modi',
         'b':'OM Birla',
         'c':'Piyush Goyal',
         'd':'Rahul Gandhi',
         'correct':'a',
         
        },
{
        'que':'CAG related to which article?',
         'a':'154',
         'b':'148',
         'c':'76',
         'd':'324',
         'correct':'b',
         
        }

]




let index=0;
let total=questions.length
let right=0,wrong=0;
const quesBox=document.getElementById('questionset');
const optionInputs=document.querySelectorAll('.options');

const loadQuestion=()=>{
    if(index===total){
        //alert("Do you want to finish the Quiz");
      
        return endQuiz();
    }
     reset();

    const data=questions[index];
    console.log(data);
    
    
    quesBox.innerText=`${index+1}. ${data.que}`;

    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
    
}


const submitQuiz=()=>{
    const data=questions[index];
      
    const ans=getAnswer();
    
    
    if(ans===data.correct){
        right++;
    }
        else{wrong++;
        }
        index++;
        loadQuestion();
        return;
}
const previous=()=>{
   
const data=questions[index];
if(index>0)
index--;
loadQuestion();
        return;
}
getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        } 
    )
     return answer;
    
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
endQuiz=()=>{
  document.getElementById('quiz').innerHTML=`
    <h3>Thank you very much</h3>
    <h2> ${right} out of ${total} are correct</h2>
 `

}
loadQuestion();


