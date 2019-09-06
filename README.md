# Louis Gelinas 06SEP19
# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

The DOM, or document object model, is what the browser has rendered and displayed to the user. It is not the HTML/CSS/JS itself, but what the HTML/CSS/JS is after being processed and rendered.

2. What is an event?

events are sent to notify code that interesting things have taken places-- click, drag, resize, load, etc, etc, etc.

3. What is an event listener?

an event listener is added to the DOM to cause code to process when an event is detected-- the event listener allows a webpage to become dynamic based on user action and input.

4. Why would we convert a NodeList into an Array?

A NodeList may look like an array, but it doesn't have the array prototype methods (although it does have it's own .forEach() with similar functionality to the array prototype method .forEach). Converting a NodeList to an array lets you operate on it with .filter, .map, .reduce and other array methods.

5. What is a component?

a component is a package of code (HTML, CSS, and JS) that renders to make a building block of a website. Components are important because you rapidly scale your website by making DRY code by to package components in functions.

### Git Set up

* [X] complete

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [X] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [X] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
