// getting id
const main = document.getElementById("main");
const searchButton = () =>{
    const input = document.getElementById("input-value").value;
    const error = document.getElementById("error");
   
    // error case
    if(input <= 0){
        error.innerText="Please give a positive number";
        input.value="";
        main.innerHTML="";
    }
      
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.data.slice(0,20)))

        input.value="";
        error.innerHTML=""
    }        
    
}

const cardsDisplay = (cards) =>{
    
    if (cards.length == 0) {
        error.innerText="Please give a positive mobile details";
    }
    // cards = cards.cards;
    console.log(cards);
    for(const data of cards){
      
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        error.innerHTML=""
        div.innerHTML=`
            <div class="card" style="width: 18rem;">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Brand:${data.brand}</h5>
                    <p class="card-text">Phone Name:${data.phone_name}</p>
                    <p class="card-text">Slug:${data.slug}</p>
                    <button onclick="cardDetails('${data.slug}')" class="btn btn-primary">See Details</button>
                </div>
            </div>
        ` 
        // appending elements
        main.appendChild(div)
    }
}
// showing individual data
const cardDetails = (id) =>{
        fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => showInfo(data.data));
}
const showInfo= info => {
    const div = document.createElement('div');
    main.innerHTML="";
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="w-50 mx-auto" src="${info.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Brand: ${info.brand}</h5>
        <p class="card-text">Slug: ${info.slug}</p>
        <p class="card-text">RealeaseDate:${info.releaseDate?info.releaseDate:'Main information not available'}</p>
        <p class="card-text">Sensors: ${info.mainFeatures.sensors}</p>
        <p class="card-text">Memory: ${info.mainFeatures.memory}</p>
        <p class="card-text">USB:  ${info.others?info.others.USB:'Main information not available'}</p>
        <p class="card-text">WLAN: ${info.others?info.others.WLAN:'Main information not available'}</p>       
        <p class="card-text">NFC:  ${info.others?info.others.NFC:'Main information not available'}</p>       
        <p class="card-text">GPS: ${info.others?info.others.GPS:'Main information not available'}</p>       
        <p class="card-text">BLUETOOTH:  ${info.others?info.others.Bluetooth:'Main information not available'}</p>       
      </div>
    </div>  
    `;
    main.appendChild(div)
}



egedgdgsdgsdgsdgsdg
