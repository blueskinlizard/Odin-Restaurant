export default function loadAbout(){
    
    const content = document.getElementById("content");
    content.innerHTML = "";
    const heading = document.createElement("h1");
    heading.textContent = "I'm too lazy to make any more webpages";
    content.appendChild(heading);
}