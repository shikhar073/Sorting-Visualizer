const n=20;
const arr=[];

init();

function init(){
    for(let i=0;i<n;i++){
        arr[i]=Math.random();
        
    }
    showbars();
    
}

function play(){
    const copy=[...arr];
    const moves=bubblesort(copy);
    animate(moves);
}

function animate(moves){
    if(moves.length==0){
        showbars();
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;

    if(move.type=="swap"){
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    showbars(move);
    setTimeout(function(){
        animate(moves);
    },150);
}
function bubblesort(arr){
    let i, j;
    var swapped;
    const moves=[];
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            moves.push({indices:[j,j+1],type:"comp"});
            if (arr[j] > arr[j + 1]) {
                moves.push({indices:[j,j+1],type:"swap"});
                [arr[j], arr[j + 1]]=[ arr[j + 1],arr[j]]
                swapped = true;
            }
        }

        // If no two elements were swapped
        // by inner loop, then break
        if (swapped == false)
            break;
    }
    return moves;
}

function showbars(move){
    container.innerHTML="";
    for(let i=0;i<n;i++){
        const bar=document.createElement("div");
        bar.style.height=arr[i]*100+"%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i)){
            bar.style.backgroundColor=
                move.type=="swap"?"green":"red";
        }
        container.appendChild(bar);
    }
}



