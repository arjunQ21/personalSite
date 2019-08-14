var Percentages = document.getElementsByClassName("p_part") ;
for(let i = 0 ; i < Percentages.length ; i++){
	Percentages[i].style.width = Percentages[i].dataset.percent + "%" ;
}
