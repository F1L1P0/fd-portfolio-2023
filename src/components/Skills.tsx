import { useInView } from "react-intersection-observer";
import skillsData from "./componentsData/skillsData";
import Skill from "./Skill";

export default function Skills() {
  const { ref: cardRef, inView: elIsVisible } = useInView({
    triggerOnce: true,
  });

  const skills = skillsData.map((skill) => {
    return (
      <Skill
        key={skill.id}
        id={skill.id}
        skillName={skill.skillName}
        percentage={skill.percentage}
      />
    );
  });

  return (
    <section className="Skills fd-section fd-section" id="skills">
      <div className="fd-skills">
        <div className="fd-skills__heading">
          <h2>Dovednosti</h2>
        </div>
        <div className="fd-skills__list">
          <ul>{skills}</ul>
        </div>
      </div>
    </section>
  );
}
