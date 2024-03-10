# Pizza Stop

An online pizza ordering site build with React.js and Tailwind.

## Overview

Its a fun application built while learning the features of react router and tailwind css. In short its a frontend heavy application with a dummy api from where we can get, post and patch some data. While developing this project, I learnt about the different ways of fetching a data from an api. Moreover, its really been fun developing it using tailwind css. Let's get to the features. 

## Features

It has four simple features such as creating an order, displaying a menu, a cart page to modify order items and ability to store few user information required for order. 

### User
  * It has an input field at the landing page to collect username
  * Later the username is displayed in the order form.

### Menu
  * Pizzas menu is loaded with react router's loader callback that fetches data relevant to a page while navigating to that page.
  * It provides a better user experience as opposed to using useEffect to fetch data when the page is already mounted/rendered
  * It also has an option to add or delete items to cart.

### Cart
  * It displays the items in the cart
  * Cart items can either be modified in quantity or deleted.
  * A bottom bar displays the cart information with total quantity and total price

### Order
  * It has a form to collect the required user information and submit the order
  * I have used geolocation api to get the user's address from browser
  * Once submitted, user will have an option to make an order priority so as to get the order faster.
  * Finally user has an option to search for the order.

## Helpful links
  * [Pizza Stop - project link](https://pizza-stop.vercel.app/)
  * Other projects
      * [The Wild Oasis](https://github.com/bas-sivaraman/the-wild-oasis)
      * [React Quiz](https://github.com/bas-sivaraman/react-quiz)
