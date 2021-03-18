import "./App.css";
import { useState, useEffect } from "react";
import logo from "./img/ravenclaw.png";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";

import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './header.js';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);


function App() {
  const [reviews, setReviews] = useState([]);

  const getReviews = () => {
    axios.get("https://edaworkshopapp.herokuapp.com/reviews").then((res) => {
      setReviews(res.data);
    });
  };

  useEffect(() => {
    getReviews();
  }, [reviews]);

  return (
    
    <div className="App">
      <header className="App-header"> </header>
    
       <Router>
        <Route path='/:page' component={Header} />
        <Route exact path='/' component={Header} />

        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    
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
