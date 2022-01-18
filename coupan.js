function openOffer(){
    document.getElementById('coupan').style.visibility='visible'
}

function closeBtn(){
    document.getElementById('coupan').style.visibility='hidden'
}

function changeColor(color){
    if(color == 'red'){
        document.getElementById('coupan').style.backgroundColor='red'
    }
    else if(color =='green'){
        document.getElementById('coupan').style.backgroundColor='green'
    }
    
}