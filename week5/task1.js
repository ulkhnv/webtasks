function onClick(){
	let m1 = document.querySelector("#s11").value;
	let m2 = document.querySelector("#s12").value;
	let m3 = document.querySelector("#s13").value;
	let m4 = document.querySelector("#s21").value;
	let m5 = document.querySelector("#s22").value;
	let m6 = document.querySelector("#s23").value;
	let m7 = document.querySelector("#s31").value;
	let m8 = document.querySelector("#s32").value;
	let m9 = document.querySelector("#s33").value;
	let total = m1*m5*m9+m2*m6*m7+m3*m4*m8-m3*m5*m7-m2*m4*m9-m1*m6*m8;
	document.querySelector("#result").innerHTML = total;
	
}
document.querySelector("#determinant").addEventListener("click",onClick);

