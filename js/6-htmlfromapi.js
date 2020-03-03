// Convert API data to HTML (API: https://rickandmortyapi.com/api/character/)
// The API returns a list of Rick and Morty characters.

// 1. View the API in your browser to see the data you will recieve.
//    The API returns and object with a property called results.  Results is an array of characters.
// 2. Look at the properties/data on each character.
// 3. Create a function called renderCharacter that will take in one of the character objects.
//    The function will return an HTML string that contains the characters: id, name, species and image.
//    The function will be used when mapping through the API response.
//    You can test the function works by copying one of the API results into a variable and calling the function with it.
// 4. Use fetch to connect to the API and get the JSON. <---------- NO
// 5. On the JSON response, use array.map on the 'results' arrays.
//    Use the renderCharacter function for mapping the data to HTML.
// 6. Output the mapped HTML in the browser.
// 
// 7. BONUS TASK - use array.filter to only show characters that are alive.

/*
//IT'S OLD I KNOOOW dont kill me
if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
} else {
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

//url er bare et eksempel, HUSK HTTPS, ikke HTTP
var url = "https://rickandmortyapi.com/api/character/";
//sett opp data til global variabel
var data;

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhr.responseText);
        //eventuelle funksjoner dette skal utføre
        data = data.results.filter((i)=>{
        	return (i.status == "Alive");
        });
        data = data.map(renderCharacter);
        document.body.innerHTML += data;
    }else {
        console.log("Fil ikke funnet 404");
    }
}
//true står for om det er asynchronous eller ikke
xhr.open("GET",url,true);
xhr.send();*/

//from google developers
fetch('https://rickandmortyapi.com/api/character/')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        data = data.results.filter((i)=>{
        	return (i.status == "Alive");
        });
        data = data.map(renderCharacter);
        document.body.innerHTML += data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


function renderCharacter(character) {
	return `
	<h1>Name: ${character.name}</h1>
	<p>ID: ${character.id}</p>
	<p>Species: ${character.species}</p>
	<img src="${character.image}">
	`;
}

