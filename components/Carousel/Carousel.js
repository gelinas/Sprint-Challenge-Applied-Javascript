/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imagesArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]


const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
  let counterObj = {
    finalCount: 0,
    increment: function(limit) {
      if (counterObj.finalCount < limit) {
        counterObj.finalCount = counterObj.finalCount + 1;
      }
      return counterObj.finalCount;
    },
    decrement: function() {
      if (counterObj.finalCount > 0) {
        counterObj.finalCount = counterObj.finalCount - 1;
      }
      return counterObj.finalCount;
    }
  }
  return counterObj;
};

const carouselCounter = counterFactory();

const carouselContainer = document.querySelector(".carousel-container");

function createCarousel(/*next level: img array*/) {
    // define new elements
    const carousel = document.createElement('div');
    const leftButton = document.createElement('div');
    const displayImg = document.createElement('img');
    // const img2 = document.createElement('img');
    // const img3 = document.createElement('img');
    const rightButton = document.createElement('div');

    // setup structure of elements
    carouselContainer.appendChild(carousel);
    carousel.appendChild(leftButton);
    // next level: loop over image array
    carousel.appendChild(displayImg);
    // carousel.appendChild(img1);
    // carousel.appendChild(img2);
    // carousel.appendChild(img3);
    carousel.appendChild(rightButton);

    // set class names
    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');

    // set attributes
    displayImg.src = imagesArray[0];

    // set text content
    leftButton.textContent = "<";
    rightButton.textContent = ">";

    // set event listeners for image carousel
    rightButton.addEventListener('click', event => {
      displayImg.setAttribute('src', imagesArray[carouselCounter.increment(imagesArray.length - 1)]);
    });

    leftButton.addEventListener('click', event => {
      displayImg.setAttribute('src', imagesArray[carouselCounter.decrement()]);
    });

    return carousel;
}

createCarousel();