# amazona
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