import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {

  const params = useParams();

  return <div className="container">
    idProduct: {params.idProduct}
  </div>;
};

export default Detail;
