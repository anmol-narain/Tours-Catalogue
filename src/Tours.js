import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {/* iterating over the tours */}
      {/* object spread operator--So in the Tour component we can have access to all the property inside the object */}
      {/* removeTour prop = removeTour function */}
      <div>
        {tours.map((everyTour) => {
          return (
            <Tour key={everyTour.id} {...everyTour} removeTour={removeTour} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
