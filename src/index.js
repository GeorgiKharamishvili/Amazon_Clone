import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "slick-carousel/slick/slick.css";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import { ProductFilterProvider } from "./context/ProductFilterContext";
import { SearchProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ProductFilterProvider>
      <SearchProvider>
        <PersistGate loading={"loading"} persistor={persistor}>
          <App />
        </PersistGate>
      </SearchProvider>
    </ProductFilterProvider>
  </Provider>
);
