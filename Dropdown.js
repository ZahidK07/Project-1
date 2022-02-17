let url = "http://localhost:2312/city"
let hotelsUrl = "http://localhost:2312/hotels?city="
//"http://localhost:3421/hotels?city="//

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement("option")  //<option></option>
            let text = document.createTextNode(data[i].city_name) // Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = data[i]._id //<option value="1">Delhi</option>
            document.getElementById("city").appendChild(element)
            /*<select>
                <option value="1">Delhi</option>
            </select>*/
        }
    })
}

function getHotel(){
    const cityId = document.getElementById("city").value
    while(hotels.length>0){
        hotels.remove(0)
    }
     fetch(`${hotelsUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement("option")
            let text = document.createTextNode(data[i].name)
            element.appendChild(text)
            document.getElementById("hotels").appendChild(element)
        }
    })
}

/*---------- Home Coupon Banner ------------*/

function openOffer(){
    document.getElementById('coupan').style.visibility='visible'
}

function closeBtn(){
    document.getElementById('coupan').style.visibility='hidden'
}

/*----------- Home Coupon Banner -------------*/


/*----------------------- Background Mode-----------------*/
function changeMode(){
    var myBody = document.body;
    myBody.classList.toggle('dark')
}
/*-----------------------Background Mode-------------------*/