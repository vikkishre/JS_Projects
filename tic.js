let boxes=document.querySelectorAll(".box");
let turnA=true;
let turnB=false;
let print=document.querySelector(".print");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let rstBtn=document.querySelector(".btn1");
let newGame= document.querySelector(".btn2");
let count=0;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnA)
        {
            box.innerText="X";
            box.style.color="#E63946";
            turnA=false;
            turnB=true;
        }
        else{
            box.innerText="O";
            box.style.color="#1D3557";
            turnB=false;
            turnA=true;
        }
        count+=1;
        box.disabled=true
        
        checkWinner();
        if(count==1)
            msg.innerText="Game was a draw";
    });
})
const showWinner=(winner)=>{
        msg.innerText=`Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes)
        box.disabled=true;
}
const enableBoxes=()=>{
    for(let box of boxes)
        box.disabled=false;
}
const resetGame=()=>{
    turnA=true;
    turnB=false;
    for(box of boxes)
        box.innerText="";
    enableBoxes();
    msgContainer.classList.add("hide");
}
const checkWinner=()=>
{
    for(pat of winPatterns)
        {
            // console.log(pat[0],pat[1],pat[2]);
            // console.log(boxes[pat[0]],boxes[pat[1]],boxes[pat[2]]);
            // if(boxes[pat[0]]=="X"&&boxes[pat[1]]=="X", boxes[pat[2]]=="X")
            // {
            //     console.log("Player A has won");
            // }
            // else if(boxes[pat[0]]=="O"&&boxes[pat[1]]=="O", boxes[pat[2]]=="O")
            // {
            //     console.log("Player B has won");
            // }
           // console.log(boxes[pat[0]].innerText);
          //  console.log(boxes[pat[1]].innerText);
            //console.log(boxes[pat[2]].innerText);
            let pos1=boxes[pat[0]].innerText;
            let pos2=boxes[pat[1]].innerText;
            let pos3=boxes[pat[2]].innerText;

            if(pos1!=""&& pos2!=""&& pos3!="")
                if(pos1==pos2 && pos2==pos3)
                {
                    // if(pos1=="X")
                    // {
                    //     console.log("Player A is Winner");
                        // print.style.border="1px solid black";
                        // print.style.height="20px";
                        // print.style.backgroundColor="black";
                        // print.style.color="White";
                        // print.innerText="Player A is Winner";
                        // print.style.textAlign="center";

                    // }
                    // else
                    // {
                    //     console.log("Palyer B is Winner");
                        // print.style.border="1px solid black";
                        // print.style.height="20px";
                        // print.style.backgroundColor="black";
                        // print.style.color="White";
                        // print.innerText="Player B is Winner";
                        // print.style.textAlign="center";
                        showWinner(pos1);
                }
                

        }
}
rstBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);