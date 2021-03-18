import "./App.css";
import { useState, useEffect } from "react";
import logo from "./img/ravenclaw.png";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";

function App() {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    axios.get("https://edaworkshopapp.herokuapp.com/reviews").then((res) => {
      setReviews(res.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            backgroundColor: "cornflowerblue",
            marginTop: 0,
            padding: "1rem",
          }}
        >
          Salesforce Workshop for end-to-end Event Driven Architecture 
        </p>
        <img src={logo} style={{ width: "18rem" }} alt="" />
      </header>
      <Add reviews={reviews} setReviews={setReviews} />
      <div className="reviews">
        {reviews.map((item) => {
          return (
            <div className="review">
              <h3>Contact: {item.book_title}</h3>
              <h3>Details: {item.book_review}</h3>
              <h3>Lead-Rating: {item.book_rating}</h3>
              <Edit id={item.id} reviews={reviews} setReviews={setReviews} />
              <Delete id={item.id} reviews={reviews} setReviews={setReviews} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
