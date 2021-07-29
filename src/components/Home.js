import React from "react";

export default function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://thumbs.dreamstime.com/b/add-to-cart-icon-adding-shopping-cart-well-organized-fully-editable-add-to-cart-icon-adding-shopping-cart-any-use-like-167547952.jpg"
          alt=""
          width="50px"
          height="50px"
          srcset=""
        />
      </div>
      <h1>Home.js</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.pakmobizone.pk/wp-content/uploads/2021/03/oppo-A53-Electric-Black-5.jpg"
            alt=""
            width="200px"
            height="200px"
            srcset=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Oppo A53</span>
          <br />
          <span>Price : 28000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
