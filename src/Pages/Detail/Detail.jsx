import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Detail = () => {

  const params = useParams();
  const [prodDetail, setProdDetail] = useState({});

  const getProductDetailById = async () => {
    let result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.idProduct}`,
      method: "GET"
    });
    // Kết quả trả về => đưa vào state 
    setProdDetail(result.data.content);
    console.log(result.data.content)
  }

  useEffect(() => {
    // Call api right after UI is loaded 
    getProductDetailById(); 
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img className="w-100" src={prodDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
        </div>
      </div>
      
      <div>
        <h3>Related Products</h3>
        <div className="row">
          {prodDetail.relatedProducts.map((item, index) => {
            return <div className="col-4" key={index}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink className="btn btn-danger" to={`/detail/${item.id}`}>View Detail</NavLink>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
