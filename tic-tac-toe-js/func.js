console.log("hi");
let turn='X';
let gameover=false;
let xp=0
let op=0
let won=[]
const changeTurn=()=>{
    return turn==='X'?"O":"X"

}
const checkwin=()=>{
   
    
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e=>{
        var m=true;
        
        //console.log(won.indexOf(e),won,e[0],e[1],e[2])
        
    for(let i of won){
        console.log("hioo",i);
       
        if(i[0]===e[0] && i[1]===e[1] && i[2]===e[2]){
            
            return
        }
        
    }
        
        
       
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText ===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==''){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +' won'
            gameover=true
            
            won.push(
                e
            )
            
            if(boxtext[e[0]].innerText==='X'){
                xp+=1
                document.getElementById('p').innerText="X scored "+xp+" O scored "+op
            }
           else  if(boxtext[e[0]].innerText==='O'){
                op+=1
            document.getElementById('p').innerText="X scored "+xp+ " O scored "+op
            }
           
        }
    



    })

}




let boxes=document.querySelectorAll(".box");
boxes.forEach(element => {
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
        
        turn=changeTurn()
        checkwin()
        
        if(!gameover){
        document.getElementsByClassName("info")[0].innerText='Turn for '+turn;
        }
        gameover=false;
    }

    })
    
});
document.getElementById("reset").addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    boxtext.forEach(e=>{
        e.innerText=''
        turn='X'
        gameover=false
        won=[]
        document.getElementsByClassName("info")[0].innerText='Turn for '+turn;
        

    })

})
