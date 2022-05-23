window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		
		alert(event.target.nodeName);	}); // esta funcion me muestra alerta con el elemento que clico
};
