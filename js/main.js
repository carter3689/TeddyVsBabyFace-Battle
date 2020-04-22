function setVotes(ans_id, ans_prc){
	let bar = document.getElementById(ans_id).style.width = ans_prc + '%';
}

let b1 = 0
let b2 = 0

function vote(){
    if(document.getElementById('Teddy').checked){
        console.log( document.getElementById('Teddy'))
        b1 += 5
        setVotes('bar1',b1)
    }
    else if(document.getElementById('BabyFace').checked){
        b2 +=5
        console.log( document.getElementById('BabyFace'))
        setVotes('bar2',b2)
    }

    document.getElementById('Teddy').checked = false
    document.getElementById('BabyFace').checked = false
}

function reset(){
    b1 = 0;
    b2 = 0;
    setVotes('bar1', b1)
    setVotes('bar2',b2)
}