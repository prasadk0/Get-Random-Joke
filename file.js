const button = document.getElementById('#here');
const text = document.querySelector('.text');
// console.log(text);
// console.log(button);
button.addEventListener('click', () => {
    
        fetch(
          "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
              "x-rapidapi-key": "e2e427e642mshc257b569b7fdb67p14e25cjsne8197ccb00c4",
            },
          }
        )
          .then((response) => response.json())
          .then((response) => {
            const { value,icon_url} = response;
        
           text.innerText = value+' 🤣😁 '

            // console.log(value);
            // text.style.cssText=`background-image:url(${icon_url})`;
          })
          .catch((err) => {
            console.error(err);
          });

}
);
