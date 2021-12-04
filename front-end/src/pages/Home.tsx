import React from "react";
import { PRODUCTS, SET_API, SET_LOADING } from "../constants/products";
import { getAllProductsAction } from "../request/product";

function productReducer(state: any, action: any) {
  switch (action.type) {
    case SET_API:
      return { ...state, url: action.payload };
    case PRODUCTS:
      return { ...state, products: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default function Home() {
  const [{ url, products, loading }, dispatch] = React.useReducer(
    productReducer,
    {
      url: "",
      products: [],
      loading: true,
    }
  );
  const dispatchSetUrl = (value: string) => {
    dispatch({ type: SET_API, payload: value });
  };

  React.useEffect(() => {
    dispatchSetUrl("https://fakestoreapi.com/products");
    const fetchData = async () => {
      dispatch({ type: SET_LOADING, payload: true });
      const res = await getAllProductsAction(url);
      dispatch({ type: PRODUCTS, payload: res.data });
      dispatch({ type: SET_LOADING, payload: false });
    };
    fetchData();
  }, []);
  console.log(products);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : products.length === 0 ? (
        <div>Products Not Found</div>
      ) : (
        products.map((value: any, index: number) => (
          <div key={index}>
            <h2>{value.title}</h2>
          </div>
        ))
      )}
    </div>
  );
}
