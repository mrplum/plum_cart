## Create a basic shopping cart using React

###### A quick view about how we build this shopping cart

_here introduction_

**Requirements**

- Node js installed
- Yarn installed
- A terminal

**Get started**
Initially, we created the basic structure of a React app using the following command:
`npx create-react-app plum_cart`
And then, in our project, we installed...
_here webpack, babel, typescript_

**Starting**
As we needed to show products, we started creating the component Card, to show a product, with a title, an image, and a price.
After that, it was necessary to list the products, so we created the components CardList, which uses Card, and ImageList. Here, we decided to use Material-ui for taking advantage of its usable components with a high level design concept. For these components, we used its GridList.
Also, we added a Switch button that Material provides, to change from a view to another.

**Routing**
To extend our shopping cart, we wanted to create a page for showing a product in a more detailed way, so we created the component Product and installed the React-router package using:
`yarn add react-router-dom`
to create routes. We modified the App.tsx to manage navigation between the diferents pages, and added a new route "/products/:id", which shows the product with this id.
Then, we connected these two pages adding a link in the listed products to the more detail page.

**Adding the cart**

**Internalization and Context**

**Sidebar**

**UseReducer**

**Checkout**

**Pagination**

**Search**
