let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let turnX=true;
const winPattern=[
                [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]];
const resetGame=()=>{
    count=0;
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        count++;
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
     }) });
const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled=true;
    }
};
const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
    }
};
     const showWinner=(winner)=>{
        if(winner!="Draw"){
        msg.innerText=`Congratulations, Winner is ${winner}`;
        }
        else{
            msg.innerText="Match is Draw";
        }
        msgContainer.classList.remove("hide");
                        disableBoxes();

     }
     
const checkWinner=()=>{
    for(let pat of winPattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;
        if(pos1!="" || pos2!="" || pos3!=""){
            if(pos1===pos2 && pos2===pos3 ){
                showWinner(pos1);
                return;
            }
            }
}
 if(count==9){
            showWinner("Draw");
        }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);