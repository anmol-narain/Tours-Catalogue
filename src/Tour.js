import React, { useState } from "react";

// First we destructure all the props which are properties  from the object.
const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}$</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 180)}...`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Remove Tour
        </button>
      </footer>
    </article>
  );
};

export default Tour;
