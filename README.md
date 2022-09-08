![NodeShop](/src/assets/images/ArtGarage.png)

# NodeShop - REST API Version

Frontend Single Page Application (SPA) built with the ReactJS (create-react-app) library. The site's design, hexagon-inspired, was based on [Node.js's logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg). Flexbox and media queries were used for the responsive design (attempting to cater to multiple device types, both desktop and mobile, with different resolutions). As per React's latest versions, the app was made out of functional components, moving away from the class-based ("`class App extends React.Component{}`") component approach used in the past.

The App was bootstrapped with `create-react-app` and deployed with `gh-pages`, assisted by the GitHub Actions feature. It can be accessed [here](https://nothingnothings.github.io/NodeShopRestAPI/).
 
## Technologies 
 
 Some of the Languages and Libraries employed:
 
 - Node Package Manager (for bootstrapping and managing the React App)
 - HTML5 
 - CSS3 (animations, Flexbox, media queries)
 - ReactJS (JavaScript Library, app built entirely of React components)
 - React-Router-DOM (for the navigation between the different "pages" of the app)
 - React Redux approach for managing state (global state split between 4 reducers: `auth`, `orders`, `cart` and `shop`)
 - BootStrap (mainly for parts of the Footer component)
 - Form validation logic using the `useState` Hook, as seen in the 'Get Started' and 'Add a Product' pages.
 - Responsive mobile design (sidebar, Flexbox, media queries)
 - Font Awesome
 - Axios (for the communication, requests and responses, between the frontend app and the Node.js/express.js backend targeted by it)
 
 
 
## Project Directory Structure

The development environment (with the use of the `create-react-app` tool/workflow):


```

.\
│
├── public\
│   │
│   ├── images\
│   │   ├── 1658431838529-Bike.png
│   │   ├── 1658432590831-Boat.png
│   │   ├── 1658433107407-Pencil.png
│   │   ├── 1658433305838-Skateboard.png
│   │   ├── 1658433495040-keyboard.png
│   │   ├── 1658434189280-A set of tires.png
│   │   ├── 1658434649972-Boomerang.png
│   │   ├── 1658435067043-Drums.png
│   │   └── 1658435608982-Violin.png
│   │
│   ├── 404.html
│   ├── NodeShopBlack.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── mstile-150x150.png
│   └── site.webmanifest
│
├── src\
│   │
│   ├── components\
│   │   │
│   │   ├── Backdrop\
│   │   │   ├── Backdrop.css
│   │   │   └── Backdrop.js
│   │   │
│   │   ├── Cart\
│   │   │   │
│   │   │   ├── CartItemList\
│   │   │   │   │
│   │   │   │   ├── CartItem\
│   │   │   │   │   ├── CartItem.css
│   │   │   │   │   └── CartItem.js
│   │   │   │   │
│   │   │   │   ├── CartItemList.css
│   │   │   │   └── CartItemList.js
│   │   │   │
│   │   │   ├── NoProduct\
│   │   │   │   ├── NoProduct.css
│   │   │   │   └── NoProduct.js
│   │   │   │
│   │   │   ├── Cart.css
│   │   │   └── Cart.js
│   │   │
│   │   ├── Footer\
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   │
│   │   ├── Grid\
│   │   │   ├── Grid.css
│   │   │   └── Grid.js
│   │   │
│   │   ├── Navigation\
│   │   │   │
│   │   │   ├── MainNavigation\
│   │   │   │   ├── MainNavigation.css
│   │   │   │   └── MainNavigation.js
│   │   │   │
│   │   │   ├── MobileNavigation\
│   │   │   │   ├── MobileNavigation.css
│   │   │   │   └── MobileNavigation.js
│   │   │   │
│   │   │   ├── NavigationItems\
│   │   │   │   │
│   │   │   │   ├── NavigationItem\
│   │   │   │   │   ├── NavigationItem.css
│   │   │   │   │   └── NavigationItem.js
│   │   │   │   │
│   │   │   │   ├── NavigationItems.css
│   │   │   │   └── NavigationItems.js
│   │   │   │
│   │   │   └── SideDrawer\
│   │   │       │
│   │   │       └── DrawerToggle\
│   │   │           ├── DrawerToggle.css
│   │   │           └── DrawerToggle.js
│   │   │
│   │   │
│   │   │
│   │   ├── OrderBoard\
│   │   │   │
│   │   │   ├── Orders\
│   │   │   │   │
│   │   │   │   ├── OrdersItem\
│   │   │   │   │   ├── OrdersItem.css
│   │   │   │   │   └── OrdersItem.js
│   │   │   │   │
│   │   │   │   ├── Orders.css
│   │   │   │   └── Orders.js
│   │   │   │
│   │   │   ├── OrderBoard.css
│   │   │   └── OrderBoard.js
│   │   │
│   │   ├── Pagination\
│   │   │   ├── Pagination.css
│   │   │   └── Pagination.js
│   │   │
│   │   ├── ProductItem\
│   │   │   │
│   │   │   ├── Hexagon\
│   │   │   │   ├── Hexagon.css
│   │   │   │   └── Hexagon.js
│   │   │   │
│   │   │   ├── ProductBox\
│   │   │   │   ├── ProductBox.css
│   │   │   │   └── ProductBox.js
│   │   │   │
│   │   │   ├── ProductItem.css
│   │   │   └── ProductItem.js
│   │   │
│   │   ├── ProductList\
│   │   │   ├── ProductList.css
│   │   │   └── ProductList.js
│   │   │
│   │   ├── Toolbar\
│   │   │   ├── Toolbar.css
│   │   │   └── Toolbar.js
│   │   │
│   │   ├── UI\
│   │   │   │
│   │   │   ├── Button\
│   │   │   │   ├── Button.css
│   │   │   │   └── Button.js
│   │   │   │
│   │   │   ├── Input\
│   │   │   │   ├── Input.css
│   │   │   │   └── Input.js
│   │   │   │
│   │   │   └── Spinner\
│   │   │       ├── Spinner.css
│   │   │       └── Spinner.js
│   │   │
│   │   │
│   │   └── Wrapper\
│   │       ├── Wrapper.css
│   │       └── Wrapper.js
│   │
│   │
│   ├── hoc\
│   │   │
│   │   ├── Auxiliary\
│   │   │   └── Auxiliary.js
│   │   │
│   │   ├── Layout\
│   │   │   ├── Layout.css
│   │   │   └── Layout.js
│   │   │
│   │   └── ScrollToTop\
│   │       └── ScrollToTop.js
│   │
│   │
│   ├── pages\
│   │   │
│   │   ├── Admin-Shop\
│   │   │   ├── Admin-Shop.css
│   │   │   └── AdminShop.js
│   │   │
│   │   ├── Auth\
│   │   │   │
│   │   │   ├── Logout\
│   │   │   │   └── Logout.js
│   │   │   │
│   │   │   ├── Auth.css
│   │   │   └── Auth.js
│   │   │
│   │   ├── Cart\
│   │   │   ├── Cart.css
│   │   │   └── Cart.js
│   │   │
│   │   ├── Checkout\
│   │   │   ├── Checkout.css
│   │   │   └── Checkout.js
│   │   │
│   │   ├── Landing-Page\
│   │   │   ├── Landing-Page.css
│   │   │   └── Landing-Page.js
│   │   │
│   │   ├── Orders\
│   │   │   ├── Orders.css
│   │   │   └── Orders.js
│   │   │
│   │   ├── Product-Detail\
│   │   │   ├── ProductDetail.css
│   │   │   └── ProductDetail.js
│   │   │
│   │   ├── ProductEditor\
│   │   │   ├── ProductEditor.css
│   │   │   └── ProductEditor.js
│   │   │
│   │   └── Shop\
│   │       ├── Shop.css
│   │       └── Shop.js
│   │
│   │
│   ├── shared\
│   │   └── util.js
│   │
│   ├── store\
│   │   │
│   │   ├── actions\
│   │   │   ├── auth.js
│   │   │   ├── authActionTypes.js
│   │   │   ├── cart.js
│   │   │   ├── cartActionTypes.js
│   │   │   ├── order.js
│   │   │   ├── orderActionTypes.js
│   │   │   ├── shop.js
│   │   │   └── shopActionTypes.js
│   │   │
│   │   └── reducers\
│   │       ├── authReducer.js
│   │       ├── cartReducer.js
│   │       ├── orderReducer.js
│   │       └── shopReducer.js
│   │
│   │
│   ├── App.js
│   ├── axios-orders.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```


The `create-react-app` workflow's production output, as shown in the gh-pages branch (tasked with the deployment of the app):


```
.\
│
├── images\
│   ├── 1658431838529-Bike.png
│   ├── 1658432590831-Boat.png
│   ├── 1658433107407-Pencil.png
│   ├── 1658433305838-Skateboard.png
│   ├── 1658433495040-keyboard.png
│   ├── 1658434189280-A set of tires.png
│   ├── 1658434649972-Boomerang.png
│   ├── 1658435067043-Drums.png
│   └── 1658435608982-Violin.png
│
├── static\
│   │
│   ├── css\
│   │   ├── main.fa8e2a93.css
│   │   └── main.fa8e2a93.css.map
│   │
│   └── js\
│       ├── main.4e33800d.js
│       ├── main.4e33800d.js.LICENSE.txt
│       └── main.4e33800d.js.map
│
├── .nojekyll
├── 404.html
├── NodeShopBlack.png
├── apple-touch-icon.png
├── asset-manifest.json
├── browserconfig.xml
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
├── mstile-150x150.png
└── site.webmanifest
```




## Project Configuration Files (package.json)

The package.json file used in the project:

```
{
  "name": "node-shop-rest-api",
  "version": "0.2.0",
  "private": true,
  "homepage": "https://nothingnothings.github.io/NodeShopRestAPI",
  "dependencies": {
    "@fortawesome/free-regular-svg-icons": "^6.1.2",
    "@fortawesome/free-solid-svg-icons": "^6.1.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@reduxjs/toolkit": "^1.8.3",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/react-fontawesome": "^1.6.5",
    "axios": "^0.27.2",
    "bootstrap": "^5.2.0",
    "font-awesome": "^4.7.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-stripe-checkout": "^2.6.3",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react": "^18.0.15",
    "gh-pages": "^4.0.0"
  }
}
```



## Setup 


To use this project, clone it using Git:





## Features 




## Inspiration

This app was based on the 
