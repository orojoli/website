'use client';

import { useEffect, useRef, useState } from 'react';

function useScrollReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function Oenologie() {
  const [rotatingText, setRotatingText] = useState(
    "découvrir le vin sans jargon"
  );
  const [vinsCount, setVinsCount] = useState(0);
  const [durationHours, setDurationHours] = useState(0);

  useEffect(() => {
    const texts = [
      "découvrir le vin sans jargon",
      "créer du lien autour d'un verre",
      "offrir un moment pour votre équipe",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setRotatingText(texts[index]);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const workshopFormats = [
    {
      icon: "glass",
      title: "Initiation à la degustation",
      subtitle: "Apprendre à lire un vin en 3 temps : œil, nez, bouche",
      bullets: [
        "Découvrir les grandes familles d'arômes sans se prendre au sérieux",
        "Comprendre l'acidité, les tanins, le corps... avec des repères concrets",
      ],
      gradient: "linear-gradient(135deg, #f5f0e8 0%, #e8e0d5 100%)",
      accent: "#6b4423",
      border: "#8b5a2b",
    },
    {
      icon: "map",
      title: "Voyage par terroirs",
      subtitle: "Explorer des régions emblématiques (Bourgogne, Rhône, Loire…)",
      bullets: [
        "Comparer deux vins d'une même région pour sentir l'impact du terroir",
        "Découvrir des histoires de vignerons et de parcelles plutôt que des fiches techniques",
      ],
      gradient: "linear-gradient(135deg, #f5f0e8 0%, #e8e0d5 100%)",
      accent: "#6b4423",
      border: "#8b5a2b",
    },
    {
      icon: "flask",
      title: "Fût ou cuve inox ?",
      subtitle: "Plonger dans la magie (et la science) de l'élevage du vin",
      bullets: [
        "Goûter la différence entre un vin passé en fût et un vin élevé en cuve",
        "Comprendre ce que le bois apporte (ou pas) : aromas, structure, rondeur",
      ],
      gradient: "linear-gradient(135deg, #f0e8e5 0%, #e5dbd8 100%)",
      accent: "#6b4423",
      border: "#8b5a2b",
    },
  ];

  const journeyMoments = [
    {
      title: "On se pose, on débranche",
      text:
        "La journée se termine, on s'installe autour de la table. Les bouteilles sont encore bouchées, les verres vides, tout le monde prend le temps d'arriver.",
      image: "/img/oenologie/vignoble-soleil.webp",
      alt: "Vignoble apaisant au soleil, rangées de vignes baignées de lumière",
    },
    {
      title: "On apprend à goûter autrement",
      text:
        "Je prends une trentaine de minutes pour vous montrer comment regarder, sentir et goûter un vin. On fait le premier verre ensemble, pas à pas.",
      image: "/img/oenologie/plateau-charcuteries.webp",
      alt: "Animateur qui pose un plateau généreux de charcuteries et fromages",
    },
    {
      title: "On laisse la place aux échanges",
      text:
        "Vous dégustez les autres vins en petits groupes, vous comparez, vous rigolez, vous cherchez vos mots. On met ensuite tout ça en commun.",
      image: "/img/oenologie/discussion-raisins.webp",
      alt: "Groupe de personnes qui discutent en portant des grappes de raisin et des verres",
    },
    {
      title: "On termine comme à la maison",
      text:
        "On ouvre les planches, on ressert un verre. Ceux qui veulent restent, on continue la discussion autour des charcuteries et fromages.",
      image: "/img/oenologie/feu-bois-vin.webp",
      alt: "Ambiance feu de bois chaleureuse avec verres à vin prêts à être servis",
    },
  ];

  const clients = [
    {
      name: "Noesio",
      type: "Entreprise tech",
      detail: "atelier afterwork pour l'équipe produit autour de 5 vins contrastés",
    },
    {
      name: "Codyssee",
      type: "Cabinet de conseil",
      detail:
        "soirée d'équipe pour créer du lien autrement qu'autour d'un rétro de projet",
    },
    {
      name: "Maison Magis",
      type: "Association",
      detail:
        "atelier découverte pour bénévoles et résidents, avec un focus sur le partage",
    },
    {
      name: "Sarah L.",
      type: "Equipe Marketing",
      detail:
        "Une soirée inoubliable ! Olivier nous a fait découvrir le vin sans prise de tête, dans une ambiance conviviale. Recommandé !",
    },
    {
      name: "Marc T.",
      type: "Dirigeant",
      detail:
        "Parfait pour souder l'équipe. ni trop formel, ni trop sérieux. On a appris plein de choses en s'amusant.",
    },
    {
      name: "Julie M.",
      type: "Association",
      detail:
        "Atelier adapté à tous les niveaux. Chacun est reparti avec des nouvelles connaissances et un sourire.",
    },
  ];

  const pedagogyReveal = useScrollReveal();
  const formatsReveal = useScrollReveal();
  const journeyReveal = useScrollReveal();
  const clientsReveal = useScrollReveal();

  useEffect(() => {
    if (!journeyReveal.visible) return;

    let vins = 0;
    let hours = 0;
    const interval = setInterval(() => {
      if (vins < 5) {
        vins += 1;
        setVinsCount(vins);
      }
      if (hours < 2) {
        hours += 1;
        setDurationHours(hours);
      }

      if (vins >= 5 && hours >= 2) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [journeyReveal.visible]);

  return (
    <main>
      {/* Header */}
      <header
        className="headerwrap dark-wrapper small"
        style={{ backgroundImage: 'url(/img/hero/Montagne_3.webp)' }}
      >
        <div className="container vertical-center">
          <div className="intro-text">
            <h1
              className="intro-heading wow fadeIn heading-font"
              style={{ marginTop: '-80px', animationDelay: '0.2s' }}
            >
              Oenologie
            </h1>
            <div
              className="intro-sub-heading wow fadeIn secondary-font"
              style={{ animationDelay: '0.4s' }}
            >
              Découvrez{' '}
              <span
                key={rotatingText}
                className="rotate-text"
                style={{ textShadow: 'black 0px 0px 14px', opacity: 0.85 }}
              >
                {rotatingText}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Offre entreprises / associations */}
      <section
        ref={pedagogyReveal.ref}
        className={`section wine-section wine-section-light wine-section-intro scroll-reveal has-bg-image ${
          pedagogyReveal.visible ? 'scroll-reveal-visible' : ''
        }`}
        style={{ backgroundImage: 'url(/img/oenologie/fond_oeno_1.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container wine-layout">
          <div className="wine-column-main">
            <p className="wine-kicker">Pour vos équipes et vos clients</p>
            <h1 className="wine-title">Des ateliers d&apos;oenologie clés en main</h1>
            <p className="wine-metrics">
              <span className="wine-metric">
                <strong>5</strong> vins
              </span>
              <span className="wine-metric">
                <strong>2</strong> h d&apos;atelier
              </span>
              <span className="wine-metric">
                <strong>Charcuteries / fromages</strong>
              </span>
            </p>
            <p className="wine-lead">
              Afterwork, séminaire, offsite : j&apos;anime des ateliers d&apos;oenologie
              pensés pour faire tomber la pression autour du vin, créer du lien
              et faire vivre un vrai moment de partage, même pour des publics
              qui n&apos;y connaissent rien.
            </p>
            <div className="wine-cta-grid">
              <a
                className="wine-cta-button wine-cta-button-primary"
                href="mailto:olivier@rojo.fr?subject=Atelier%20d%27oenologie%20-%20demande%20d%27informations"
              >
                Demander un atelier
              </a>
              <a
                className="wine-cta-button wine-cta-button-secondary"
                href="https://www.linkedin.com/search/results/all/?keywords=Olivier%20Rojo"
                target="_blank"
                rel="noreferrer"
              >
                Discuter de votre besoin
              </a>
            </div>
          </div>
          <div className="wine-column-side">
            <div className="wine-card wine-card-photo">
              <div className="wine-card-image">
                <img
                  src="/img/oenologie/session_oenologie.webp"
                  alt="Atelier d'oenologie en cours de dégustation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats d&apos;ateliers */}
      <section
        ref={formatsReveal.ref}
        className={`section wine-section wine-section-dark scroll-reveal ${
          formatsReveal.visible ? 'scroll-reveal-visible' : ''
        }`}
      >
        <div className="container">
          <div className="wine-formats-header">
            <p className="wine-kicker">Quelques formats possibles</p>
            <h1 className="wine-title">Des ateliers modulables selon vos envies</h1>
          </div>
          <div className="wine-formats-grid">
            {workshopFormats.map((format, index) => (
              <article 
                key={index} 
                className="wine-format-card"
              >
                <img 
                  src="/img/oenologie/encart_oeno.webp" 
                  alt="" 
                  className="wine-format-bg"
                />
                <div className="wine-format-content">
                  <div className="wine-format-icon" style={{ background: format.accent }}>
                  {format.icon === 'glass' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 2h8l2 4H6l2-4zM6 6h12l-1 14a2 2 0 01-2 2H9a2 2 0 01-2-2L6 6z"/>
                      <path d="M9 12v4M15 12v4"/>
                    </svg>
                  )}
                  {format.icon === 'map' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="10" r="3"/>
                      <path d="M12 2a8 8 0 018 8c0 6-8 12-8 12s-8-6-8-12a8 8 0 018-8z"/>
                    </svg>
                  )}
                  {format.icon === 'flask' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 3h6v5l3 10a2 2 0 01-2 2H8a2 2 0 01-2-2l3-10V3z"/>
                      <path d="M9 3L7 8M15 3l2 5"/>
                    </svg>
                  )}
                </div>
                <h2 className="wine-format-title">{format.title}</h2>
                <p className="wine-format-subtitle">{format.subtitle}</p>
                <ul className="wine-format-list">
                  {format.bullets.map((bullet, i) => (
                    <li key={i}>
                      <span className="wine-format-bullet-point" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="wine-format-number">0{index + 1}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Déroulé d&apos;une soirée type */}
      <section
        ref={journeyReveal.ref}
        className={`section wine-section wine-section-light wine-section-journey scroll-reveal has-bg-image ${
          journeyReveal.visible ? 'scroll-reveal-visible' : ''
        }`}
        style={{ backgroundImage: 'url(/img/oenologie/fond_deroule_atelier_oeno.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="wine-column-main">
            <h1 className="wine-title">À quoi ressemble un atelier ?</h1>
            <p className="wine-metrics">
              <span className="wine-metric">
                <strong>{vinsCount}</strong> vins
              </span>
              <span className="wine-metric">
                <strong>{durationHours}</strong> h d&apos;atelier
              </span>
              <span className="wine-metric">
                <strong>Charcuteries / fromages</strong>
              </span>
            </p>
            <div className="wine-journey-grid">
              {journeyMoments.map((moment, index) => (
                <article key={index} className="wine-journey-card">
                  <div className="wine-journey-inner">
                    <div className="wine-journey-face wine-journey-front">
                      <h2>{moment.title}</h2>
                      <p>{moment.text}</p>
                    </div>
                    <div className="wine-journey-face wine-journey-back">
                      <img src={moment.image} alt={moment.alt} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Références clients */}
      <section
        ref={clientsReveal.ref}
        className={`section wine-section wine-section-dark scroll-reveal ${
          clientsReveal.visible ? 'scroll-reveal-visible' : ''
        }`}
      >
        <div className="container">
          <div className="wine-clients-header">
            <p className="wine-kicker">Ils m'ont déjà fait confiance</p>
            <h1 className="wine-title">Témoignages</h1>
          </div>
          <div className="wine-testimonials-wrapper">
            <div className="wine-testimonials-track">
              {[...clients, ...clients].map((client, index) => (
                <article
                  key={`${client.name}-${index}`}
                  className="wine-testimonial-card"
                >
                  <img
                    src="/img/oenologie/encart_oeno_2.webp"
                    alt=""
                    className="wine-testimonial-bg"
                  />
                  <div className="wine-testimonial-inner">
                    <div className="wine-testimonial-header">
                      <div className="wine-testimonial-author">
                        <span className="wine-testimonial-name">{client.name}</span>
                        <span className="wine-testimonial-type">{client.type}</span>
                      </div>
                    </div>
                    <div className="wine-testimonial-content">
                      <p className="wine-testimonial-text">"{client.detail}"</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrapper">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Olivier Rojo · Oenologie</p>
          <p className="footer-note">
            Ateliers d&apos;oenologie pour découvrir le vin dans un esprit de partage
            et de simplicité
          </p>
        </div>
      </footer>
    </main>
  );
}
