// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response);
    for (let elem in response.data.topics) {
        console.log(elem, response.data.topics[elem]);
        Tabs(response.data.topics[elem]);
    }
  })
  .catch(error => console.log(error));

const topicsContainer = document.querySelector(".topics");

function Tabs(topic) {
    // define new elements
    const tab = document.createElement('div');

    // setup structure of elements
    topicsContainer.appendChild(tab);

    // set class names
    tab.classList.add('tab');

    // set attributes

    // set text content
    tab.textContent = topic;

    // set event listeners

    return tab;
}