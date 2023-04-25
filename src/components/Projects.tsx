import projectsData from "./componentsData/projectsData"
import Card from "./Card"

export default function Projects() {
  const projects = projectsData.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        imgSrc={card.imgSrc}
        name={card.name}
        describtion={card.describtion}
        url={card.url}
      />
    )
  })

  return (
    <section className="fd-projects__wrapper fd-section fd-section--wider">
      <div className="fd-projects" id="projects">
        <div className="fd-projects__heading">
          <h2>Mé Projekty a spolupráce</h2>
        </div>
        <div className="fd-projects__card__wrapper">{projects}</div>
      </div>
    </section>
  )
}
