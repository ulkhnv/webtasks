function onClick(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var faculty = document.getElementById("faculty").value;
	
	if(name==""){
		document.getElementById("name").style.border = "5px solid red";
		return;
	}
	else if(surname==""){
		document.getElementById("surname").style.border = "5px solid red";
		return;
	}
	else if(faculty==-1){
		return;
	}
	
	else {
		document.getElementById("name").style.border = "1px solid grey";
		document.getElementById("surname").style.border = "1px solid grey";
		document.getElementById("faculty").style.border = "1px solid grey";
	}
		
	var tr = document.createElement('tr');
	var tdname = document.createElement('td');
	var tdsurname = document.createElement('td');
	var tdfaculty = document.createElement('td');
	
	tdname.innerHTML = name;
	tdsurname.innerHTML = surname;
	tdfaculty.innerHTML = faculty;
	
	tr.appendChild(tdname);
	tr.appendChild(tdsurname);
	tr.appendChild(tdfaculty);
	
	var table = document.getElementById('students');
	table.appendChild(tr);
	}
	x=document.getElementsByTagName("STYLE");
	console.log(x.border);
	
	
	
document.getElementById("addStudent").addEventListener('click',onClick);