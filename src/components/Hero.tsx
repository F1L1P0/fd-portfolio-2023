export default function Hero() {
  return (
    <section className="fd-hero fd-section">
      <div className="fd-hero__heading">
        <h1 className="heading">Něco o mně !!!</h1>
      </div>
      <div className="fd-hero__content">
        <ul>
          <li className="fd-hero__content__li">
            Chtěli by jste webové stránky?
          </li>
          <li className="fd-hero__content__li">
            Máte vymyšlený design, ale potřebujete někoho, kdo vám ho pomůže
            zrealizovat?
          </li>
        </ul>
        <p>
          Zdravím! Jmenuji se Filip Drábek a jsem vývojář webových stránek -
          konkrétně front-endu.
        </p>
        <p>
          O tohle téma se zajímám již od svých 17 let a stále se zdokonaluji.
        </p>
        <p>Zde se můžeš podívat co vše umím!</p>
        <div className="btn-center">
          <a href="#contact" className="btn">
            <span>Kontakt zde!</span>
          </a>
        </div>
      </div>
    </section>
  );
}
