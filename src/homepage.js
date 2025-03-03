import homeImage from "./images/Ice-Cream-Home-Image.png"; 
export default function loadHome() {
  
    const content = document.getElementById("content");
    content.innerHTML = "";
    const heading = document.createElement("h1");
    heading.textContent = "Tony's Parlor";
    const container = document.createElement("div");
    container.classList.add("image-and-content");
    const image = document.createElement("img");
    image.src = homeImage;
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-home-page");
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Ever since 2025, Tony's Parlor has been bringing joy to the city of Naples.";
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Tony's signature ice cream selection of Chocolate and Vanilla";
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "has been a favorite among locals and tourists alike.";
    const button = document.createElement("button");
    button.id = "get-to-know-button";
    button.textContent = "Our Story";
    contentDiv.appendChild(paragraph1);
    contentDiv.appendChild(paragraph2);
    contentDiv.appendChild(paragraph3);
    contentDiv.appendChild(button);
    container.appendChild(image);
    container.appendChild(contentDiv);
    content.appendChild(heading);
    content.appendChild(container);
  }