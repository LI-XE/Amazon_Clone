import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CartScreen(props) {
  // const productId = props.match.params.id;
  // const [searchParms] = useSearchParams();
  // const qty = props.location.search
  //   ? Number(props.location.search.split("=")[1])
  //   : 1;

  const { id: productId } = useParams();
  const { search } = useLocation();
  const qty = search ? Number(search.split("=")[1]) : 1;

  // console.log({ productId, qty, qtyParam: Number(searchParms.get("qty")) });

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART: ProductId: {productId} Qty: {qty}{" "}
      </p>
    </div>
  );
}
