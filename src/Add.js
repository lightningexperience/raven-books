import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Add(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    addReview(data);
  };

  const addReview = (data) => {
    axios.post("https://edaworkshopapp.herokuapp.com/reviews", data).then(() => {
      props.setReviews([
        ...props.reviews,
        {
          data,
        },
      ]);
    });
  };

  return (
    <form className="add-review" onSubmit={handleSubmit(onSubmit)}>
      <h4>Create Lead</h4>
      <input
        type="text"
        placeholder="Contact"
        name="book_title"
        ref={register({ required: true, maxLength: 40 })}
      />
      <input
        type="text"
        placeholder="Details"
        name="book_review"
        ref={register({ required: true, maxLength: 450 })}
      />
      <input
        type="number"
        placeholder="LeadRating"
        name="book_rating"
        ref={register({ required: true, max: 5, min: 0 })}
      />

      <input id="btn" type="submit" />
    </form>
  );
}
