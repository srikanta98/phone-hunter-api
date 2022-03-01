const main = document.getElementById("main");
const searchButton = () =>{
    const input = document.getElementById("input-value").value;
    const error = document.getElementById("error");
   
    
    if(input <= 0){
        error.innerText="Please give a positive number";
        input.value="";
        main.innerHTML="";
    }
    // else if ((input != 'oppo') || (input != 'samsung') || (input !='iphone')){
    //     input.value="";
    //     main.innerHTML="";
    //     error.innerText="Please give a positive phone detail";
    // }
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(data => cardsDisplay(data.data.slice(0,20)))

        input.value="";
        error.innerHTML=""
    }        
    
}

const cardsDisplay = (cards) =>{
    
    if (!cards) {
        alert("Please give a positive number");
    }
    // cards = cards.cards;
    console.log(cards);
    for(const data of cards){
      
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
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
        // card.code e oikhane 5c/3c dewa taktece
        main.appendChild(div)
    }
}

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
        <p class="card-text">RealeaseDate: ${info.releaseDate}</p>
        <p class="card-text">Sensors: ${info.mainFeatures.sensors}</p>
        <p class="card-text">Memory: ${info.mainFeatures.memory}</p>
        <p class="card-text">USB: ${info.others.USB}</p>
        <p class="card-text">WLAN: ${info.others.WLAN}</p>       
        <p class="card-text">NFC: ${info.others.NFC}</p>       
        <p class="card-text">GPS: ${info.others.GPS}</p>       
        <p class="card-text">BLUETOOTH: ${info.others.Bluetooth}</p>       
      </div>
    </div>  
    `;
    main.appendChild(div)
}




//         .then(data => {
//             const allCards = data;
//             console.log(allCards);
// //             // code mani jei button e click korbo
// //             // card jetha lopp martese ak step aghe
// //             // card.code=code mane jetha input e dibo oitha card.code er sathe mile gele
//             // pop => pop.code ata value ta indirecty data.code theke antese
//             const singleCard = allCards.find(pop => pop.slug === id)
//             const div = document.createElement("div");
//             // click korle agher gula jabe ga
            
//             div.innerHTML=`
//                 <div class="card" style="width: 18rem;">
//                     <img src="${singleCard.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${singleCard.releaseDate}</h5>
//                         <p class="card-text">${singleCard.code}</p>
//                         <p class="card-text">${singleCard.value}</p>
//                     </div>
//                 </div>
//             `
//             main.appendChild(div)
//         })
// }