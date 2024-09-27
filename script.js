
const URL = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector("#btn");
const div = document.querySelector("#div1");

const getFacts = async () => {
    console.log("getting image....");
    let response = await fetch(URL)
    let data = await response.json();

    div.innerHTML = "";

    let img = document.createElement("img");
    img.src = data[0].url;
    img.alt = "Random dog";
    img.style.maxWidth = "350px";
    div.appendChild(img);
}
btn.addEventListener("click", getFacts);