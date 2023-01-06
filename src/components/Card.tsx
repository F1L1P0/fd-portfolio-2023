//install npm install react-intersection-observer --save
// import useInView from react-intersection-observer"
//use const { ref: name of you ref, inView: keeping state } = useInView();
//dont forget to give an element a ref value same as ref in useInView
//more can be found here https://www.npmjs.com/package/react-intersection-observer

import { useInView } from "react-intersection-observer";

type Card = {
  id: number;
  imgSrc: string;
  name: string;
  describtion: string;
};

export default function Card(props: Card) {
  const { ref: cardRef, inView: elIsVisible }  = useInView({triggerOnce:true});

  return (
    <div ref={cardRef} className={`fd-projects__card ${elIsVisible?"show":"hide"}`}>
      <div className="fd-projects__card__img">
        <img src={props.imgSrc} alt="image of a card" />
      </div>
      <div className="fd-projects__card__name">
        <h2>{props.name}</h2>
      </div>
      <div className="fd-projects__card__description">
        <p>{props.describtion}</p>
      </div>
      <a href="#" className="btn">Přejít na projekt</a>
    </div>
  );
}
