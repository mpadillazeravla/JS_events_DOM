//Declare your function here

let button = document.querySelector("#hello");
button.addEventListener("click", function() {
    alert("Hello world")
});



// En realidad pide que se haga con el onclick en el html, que sería lo siguiente:
// aquí en la parte de JS

// window.myClickFunction = function myClickFunction() {
// 	alert("Hello World!");
// };


// Y en la parte de html sería agregar la funcion al boton, poniendo lo siguiente en el boton:
//<input id="hello" type="button " value="Press to show 'Hello world'" onclick="myClickFunction();/>
 