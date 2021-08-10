const dotaAPI = "https://api.opendota.com/api/players/";
const request = document.getElementById("request");
const result = document.querySelector(".result-data");
const resultv2 = document.querySelector(".result-datav2");
const userID = document.querySelector(".userID");

async function getData() {
    
    const response = await fetch(dotaAPI + userID.value);
    const json = await response.json();
    
    const responsev2 = await fetch(`https://api.opendota.com/api/players/${userID.value}/totals`);
    const jsonv2 = await responsev2.json();

    try {
        console.log(json.profile.personaname)
        result.innerHTML = '';
        resultv2.innerHTML = '';
    } catch (error) {
        alert("Invalid Account ID");
    }


    result.innerHTML = ` 
        
    <div class="card bg-white text-danger">
    <div class="card-header text-center">
        <h1>${json.profile.personaname}</h1>
    </div>
    <div class="card-body text-center">   
        <img src="${json.profile.avatarfull}" class="rounded mx-auto d-block" alt="${json.profile.personaname}">

        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Account ID: ${json.profile.account_id}
            <span class="badge badge-danger badge-pill">${json.profile.account_id}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Dota Plus: ${json.profile.plus}
            <span class="badge badge-danger badge-pill">${json.profile.plus}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Steam ID: ${json.profile.steamid}
            <span class="badge badge-danger badge-pill">${json.profile.steamid}</span>
        </li>
        </ul>
     
        <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer">Last login <cite title="${json.profile.last_login}}">${json.profile.last_login}</cite></footer>
        </blockquote>
        <a class="btn btn-danger" href="${json.profile.profileurl}" target="_blank" rel="noopener noreferrer">Steam Profile URL</a>
    </div>
    </div>
    `;

    jsonv2.forEach(element =>{
        resultv2.innerHTML += `
        <a class="list-group-item list-group-item-action text-center">${(element.field).toUpperCase().replace("_", " ").replace("_", " ")} : ${element.sum} <span class="badge badge-danger badge-pill">${element.n}</span></a>
        

        `;
    });
   
}

request.addEventListener("click", getData); 

result.innerHTML = ` 
        
<div class="card bg-white text-danger">
<div class="card-header text-center">
    <h1>Steam Account</h1>
</div>
<div class="card-body text-center">   
   <img src="/Assets/profile.png" class="rounded mx-auto d-block">

    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
        Account ID: 00000000000
        <span class="badge badge-danger badge-pill">00000000000</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        Dota Plus: NULL
        <span class="badge badge-danger badge-pill">Null</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        Steam ID: 00000000000
        <span class="badge badge-danger badge-pill">00000000000</span>
    </li>
    </ul>
 
    <blockquote class="blockquote mb-0">
    <footer class="blockquote-footer">Last login <cite title="00-00-00-00">00-00-00-00</cite></footer>
    </blockquote>
    <a class="btn btn-danger" href="#" rel="noopener noreferrer">Steam Profile URL</a>
</div>
</div>
`;

resultv2.innerHTML = `
<a class="list-group-item list-group-item-action text-center">KILLS : 0000 <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">DEATHS : 0000  <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">ASSISTS : 0000  <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">KDA : 0000 <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">GOLD PER MIN : 0000 <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">XP PER MIN : 0000 <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">LAST HITS : 0000  <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">DENIES : 0000 <span class="badge badge-danger badge-pill">0000</span></a>
<a class="list-group-item list-group-item-action text-center">LANE EFFICIENCY PCT : 0000 <span class="badge badge-danger badge-pill">0000</span></a>

`;




