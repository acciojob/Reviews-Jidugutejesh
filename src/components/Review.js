import { useState } from "react";

export default function Review() {
  const data = [ ... ]; // your reviews array
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const handlenext = () => setIndex((index + 1) % data.length);
  const handleprev = () => setIndex((index - 1 + data.length) % data.length);
  const handlerandom = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    while (randomIndex === index) randomIndex = Math.floor(Math.random() * data.length);
    setIndex(randomIndex);
  };

  return (
    <article className="review">
      <img src={image} alt={name} className="person-img" />
      <h4 className="author" id={`author-${id}`}>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={handleprev}>Prev</button>
      <button className="next-btn" onClick={handlenext}>Next</button>
      <button className="random-btn" onClick={handlerandom}>surprise me</button>
    </article>
  );
}
