function openModal(event){
	var modal = document.getElementById(event.id + 'modal');
	var btn = document.getElementById(event.id);
	var span = modal.querySelector(".close");
		
	// When the user clicks the button, open the modal 
	modal.style.display = "block";
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

}
