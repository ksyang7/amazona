# Amazona Ecommerce Website

8. Build Product Screen
   - Install react-router-dom
   - Use BrowserRouter and Route for Home Screen
   - Create HomeScreen.js
   - Add product list code there
   - Create ProductScreen.js
   - Add new Route from product details to App.js
   - Create 3 column3 for product image, info and action

9. Create Node.JS Server
   - run npm init in root folder
   - Update package.json set type: module
   - Add .js to imports
   - npm install express
   - create server.js
   - add start command as node backend/server.js
   - require express
   - create route for / return backend is ready
   - move products.js from frontend to backend
   - create route for /api/products
   - return products
   - run npm start

10. Load Products From Backend
   - edit HomeScreen.js
   - define products, loading and error.
   - create useEffect
   - define async fetchData and call it
   - install axios
   - get data from /api/products
   - show them in the list
   - create Loading Component
   - create Message Box Component
   - use them in HomeScreen

11. ESlint For Code Linting
   - install VSCode eslint extension
   - npm install -D eslint
   - run ./node_modules/.bin/eslint --init
   - Create ./frontend/.env
   - Add SKIP_PREFLIGHT_CHECK     

12. Add Redux to Home Screen
   - npm install redux react-redux
   - Create store.js
   - initState = {products:[]}
   - reducer = (state, action) => switch LOAD_PRODUCTS: {products: action payload}   
   - export default createStore(reducer, initState)
   - Edit HomeScreen.js
   - shopName = useSelector(state => state.products)
   - const dispatch = useDispatch()
   - useEffect(() => dispatch({type: LOAD_PRODUCTS, payload: data}))
   - Add store to index.js     

13. Add Redux to Product Screen
   - create product details constants, actions and reducers
   - add reducer to store.js
   - use action in ProductScreen.js
   - add /api/product/:id to backend api   

14. Handle Add To Cart Button
   - Handle Add To Cart in ProdctScreen.js
   - create CartScreen.js

15. Implement Add to Cart Action
   - create addToCart constants, actions and reducers
   - add reducer to stroe.js
   - use action in CartScreen.js
   - render cartItems.length

16. Build Cart Screen
   - create 2 columns for cart items and cart action
   - cartItems.length === 0 ? cart is empty
   - show item image, name, qty and price
   - Porceed to Checkout button
   - Implement remove from cart action
                         