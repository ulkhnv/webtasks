arr=[{"maker":"Toyota","model":"Camry 50","price":50000},
{"maker":"Toyota","model":"Carina","price":40000},
{"maker":"Volkswagen","model":"Tuareg","price":35000},
{"maker":"Mercedes","model":"C100","price":45000}]

function load(){
	cards=document.getElementById("cards");
	loading=document.getElementById("loading");
	loading.style.display="inline";	
	
	setTimeout(function(){
		loading.style.display="none";
		for (let i = 0;i<arr.length;i++){
		
		card=document.createElement("div"),card.className="card";
		price=document.createElement("div"),price.className="price";
		title=document.createElement("div"),title.className="title";
	
		title.innerHTML=arr[i]["maker"]+" "+arr[i]["model"];
		price.innerHTML=arr[i]["price"];
	
		card.appendChild(title);
		card.appendChild(price);
		cards.appendChild(card);
		}
	},500);
	
	
}
	


document.querySelectorAll("*")[0].addEventListener("click",load);



	
	
	
	




