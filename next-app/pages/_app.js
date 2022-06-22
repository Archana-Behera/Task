import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "../store/reducers";

import '../styles/globals.css'

// Redux setup
const store = createStore(reducers, {}, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
  <Component {...pageProps} />
</Provider>
  )
}

export default MyApp
