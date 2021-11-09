const BTN = document.getElementById("getRandomFact");
BTN.addEventListener("click", () =>{
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((Response) => Response.json())
    .then(({text}) => {
        document.getElementById("randomFact").innerText = text;
    });
});