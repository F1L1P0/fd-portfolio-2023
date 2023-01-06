import { useInView } from "react-intersection-observer";

type Skill = {
  id: number;
  skillName: string;
  percentage: number;
};

export default function Skill(props: Skill) {
  const { ref: skillRef, inView: elIsVisible } = useInView({
    triggerOnce: true,
  });

  function appearEffect(id: number) {
    if (id % 2 == 1) {
      return "show-left";
    } else {
      return "show-right";
    }
  }

  return (
    <li
      ref={skillRef}
      className={`fd-skills__list__bar ${
        elIsVisible ? "show" : appearEffect(props.id)
      }`}
    >
      <div data-percent={props.percentage}></div>
      <span>{props.skillName}</span>
    </li>
  );
}
