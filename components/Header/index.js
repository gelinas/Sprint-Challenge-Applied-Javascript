// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector(".header-container");

function Header() {
    // define new elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headline = document.createElement('h1');
    const temp = document.createElement('span');

    // setup structure of elements
    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(headline);
    header.appendChild(temp);

    // set class names
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // set attributes

    // set text content
    date.textContent = "SMARCH 28, 2019";
    headline.textContent = "Lambda Times";
    temp.textContent = "98°";

    // set event listeners

    return header;
}

Header();