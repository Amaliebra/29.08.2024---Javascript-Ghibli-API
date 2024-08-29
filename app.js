const cont = document.querySelector("#ghib-cont");

import { url } from "/module.js";

const response = await fetch(url);
console.log(response);

async function checkApi(api) {
  if (api.status === 200) {
    console.log("it ok");
  } else {
    throw new console.error(api.statusText);
  }
}

const data = await response.json();
console.log(data);

checkApi(response);

function cardCreator() {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.classList = "card";
    img.src = `${data[i].img}`;
    div.appendChild(img);
    cont.appendChild(div);
  }
}

cardCreator();

document.createElement("div");
