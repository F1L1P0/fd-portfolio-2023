export default function Hero() {
  return (
    <section className="fd-hero fd-section">
      <div className="fd-hero__heading">
        <h1 className="heading">Něco o mně !!!</h1>
      </div>
      <div className="fd-hero__content">
        <ul>
          <li className="fd-hero__content__li">
            Zdravím!!! Jmenuji se Filip Drábek a je mi 22 let a jsem junior
            fron-end developer.
          </li>
          <li className="fd-hero__content__li">
            Webovému vývoji jsem se začal věnovat na střední škole, a od té doby
            se v něm zdokonaluji.
          </li>
          <li className="fd-hero__content__li">
            Momentálně pracuji částečně jako freelancer, ale chtěl bych se
            posunou dále a stát se plnohodnodným vývojářem.
          </li>
          <li className="fd-hero__content__li">
            Jsem otevřený jakékoliv nabídce práce / práci na projektu, který
            zahrňuje front-end vývoj.
          </li>
          <li className="fd-hero__content__li">
            Nejčastěji pracuji s HTML, SCSS, JS a poslední dobou se snažím
            zlepšit své znalosti Reactu.
          </li>
        </ul>

        <div className="btn-center">
          <a href="#contact" className="btn">
            <span>Kontakt zde!</span>
          </a>
        </div>
      </div>
    </section>
  );
}
