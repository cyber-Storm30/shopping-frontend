import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { watcherSaga } from "./Sagas/rootSaga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./Reducers/auth";
import { cartReducer } from "./Reducers/cart";
import { productsReducer } from "./Reducers/products";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagamiddleware = createSagaMiddleware();

const middlewares = [sagamiddleware];

export const store = createStore(
  persistRootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagamiddleware.run(watcherSaga);

export const persistedStore = persistStore(store);
