import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

import ban1 from "../images/b1.jpg";
import ban2 from "../images/b2.jpg";
import ban3 from "../images/b3.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";

const KidsCollection = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
    const navigate = useNavigate();


  const loadData = () => {
    let api = "http://localhost:3000/shopping/?category=kids";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const cartDataAdd = (id, name, price, categ, desc, myimg) => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        category: categ,
        description: desc,
        image: myimg,
        qnty: 1,
      })
    );
  };

   const goto_pro_detail = (id) => {
     navigate(`/prodetail/${id}`);
   };


  const ans = mydata.map((key) => {
    return (
      <>
        <Card style={{ width: "380px", marginTop: "10px" }}>
          <a
            href="#"
            onClick={() => {
              goto_pro_detail(key.id);
            }}
          >
            <img src={key.image} style={{ height: "300px" }} />
          </a>
          <Card.Body>
            <Card.Title>
              {" "}
              {key.name} for {key.category}
            </Card.Title>
            <Card.Text>
              {key.description}
              <br />
              <span style={{ color: "red", fontWeight: "bold" }}>
                Price : Rs. {key.price}/-
              </span>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                cartDataAdd(
                  key.id,
                  key.name,
                  key.price,
                  key.category,
                  key.description,
                  key.image
                );
              }}
            >
              add to cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <h1>Kids Collection</h1>
      <div id="cardData">{ans}</div>
    </>
  );
};

export default KidsCollection;
