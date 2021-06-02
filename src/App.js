import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [load, setLoad] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // if id doesn not match so it is not removed
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Fetching the api
  // in order to invoke this function we use ueEffect.
  const Fetching = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoad(false);
      setTours(tours);
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  // '[]' only runs on initial render.
  useEffect(() => {
    Fetching();
  }, []);

  if (load) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={Fetching}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  // using the props
  // tours prop = tours state value.
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

// Wehave our Tours data in here so it makes sense for me to add the function RemoveTour here.
// also we have to call that function in every tour .
// so we have to pass the function down to tour component.
// we will use id .as argument in the funcion
//
