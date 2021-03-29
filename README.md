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

17. Implement Remove From Cart Action
   - create removeFormCart constants, actions and reducers
   - add reducer to store.js
   - use action in CartScreen.js

18. Connect To MongoDB
   - npm install mongoose
   - connect to mongodb
   - create config.js
   - npm install dotenv
   - export MONGODB_URL
   - create models/userModel.js
   - create userSchema and userModel
   - create models/productModel.js
   - create productSchema and productModel
   - create userRoute
   - Seed sample data
   
19. Create Sample Products In MongoDB
   - create models/productModel.js
   - create productSchema and productModel
   - create productRoute
   - Seed sample data

20. Create Sign-in Backend
   - create /signin api
   - check email and password
   - generate token
   - install json web token
   - return token and data
   - test it using postman

21. Design SignIn Screen
   - create SigninScreen
   - render email and password fields
   - create signin constants, actions and reducers
   - Update Header based on user login

22. Implement SignIn Action
   - create signin constants, actions and reducers
   - add reducer to store.js
   - use action in SigninScreen.js

23. Create Register Screen and Backend API
   - create API for /api/users/register
   - insert new user to database
   - return user info and token
   - create RegisterScreen
   - Add fields
   - Style fields
   - Add screen to App.js

24. Create Shipping Screen
   - create CheckoutSteps.js component
   - create shipping fields
   - implement shipping constant, actions and reducers

25. Create Payment Screen
   - create payment fields
   - implement shipping constant, actions and reducers

26. Design Place Order Screen
   - design order summary fields
   - design order action

27. Create Place Order API
   - createOrder api
   - create orderModel
   - create orderRouter
   - create post order route

28. Implement PlaceOrder Action
   - handle place order button click
   - create place order constants, action and reducer

29. Create Order Screen
   - build order api for /api/orders/:id
   - create OrderScreen.js
   - dispatch order details action in useEffect
   - load data with useSelector
   - show data like place order screen
   - create order details constant, action and reducer
   



















   

                         