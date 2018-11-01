let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

for (var country of countries){
	var newitem = document.createElement('option');
	newitem.textContent = country;
	var select = document.getElementById('countries');
	select.appendChild(newitem);
}

function Change() {

	document.getElementById('cities').options.length = 1;

	var selector = event.currentTarget.value;


	for(var i = 0; i < cities_by_country[selector].length; i++){
		var select = document.getElementById('cities');
		var option = document.createElement('option');
		option.textContent = cities_by_country[selector][i];
		select.appendChild(option);
	}
}



document.querySelector("#countries").addEventListener('click',Change);