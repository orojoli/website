'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [rotatingText, setRotatingText] = useState("mes expertises");
  
  useEffect(() => {
    const texts = ["mes expertises", "mon parcours", "mon CV"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setRotatingText(texts[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const skills = [
    {
      title: "Valeur ajoutée",
      image: "/img/homepage/img_skill_1b.webp",
      items: [
        "Orchestrer jusqu'à 56 applications tout en gardant une vision produit claire",
        "Sécuriser des budgets annuels supérieurs à 6 M€ sans perdre de vue la marge",
        "Fédérer des équipes pluridisciplinaires (PO, Dev, QA, Techlead) autour d'objectifs partagés"
      ]
    },
    {
      title: "Compétences clés",
      image: "/img/homepage/img_skill_2a.webp",
      items: [
        "Structurer et livrer des programmes IT transverses dans des environnements complexes",
        "Construire des roadmaps stratégiques alignées sur les objectifs métiers",
        "Installer des cadres de pilotage clairs (rituels, indicateurs, décisions) pour les équipes"
      ]
    },
    {
      title: "Pilotage & indicateurs",
      image: "/img/homepage/img_skill_3a.webp",
      items: [
        "Prendre des décisions guidées par les KPI, la data et l'impact business",
        "Animer une gouvernance lisible pour les sponsors comme pour les équipes",
        "Aligner IT, métiers et partenaires externes autour d'une même feuille de route"
      ]
    }
  ];

  const collaborations = [
    {
      title: "Direction de programmes IT",
      text:
        "Prendre en main un portefeuille d'applications existant, sécuriser les livraisons et les dépendances et donner de la visibilité aux sponsors.",
    },
    {
      title: "Transition & structuration",
      text:
        "Clarifier la gouvernance, les rôles et les rituels pour des équipes déjà en place, avec un cadre de pilotage pragmatique.",
    },
    {
      title: "Coaching produit & agilité",
      text:
        "Accompagner PO / PM et équipes dans la mise en place d'un mode produit plus robuste, via ateliers ciblés et accompagnement sur la durée.",
    },
    {
      title: "Conseil & stratégie IT",
      text:
        "Auditer l'existant, identifier les axes d'amélioration et définir une feuille de route technologique alignée avec les objectifs business.",
    },
  ];

  const formation = [
    {
      title: "Diplômes",
      image: "/img/homepage/compas.webp",
      items: [
        "Texas A&M University, USA : MSCS - Master of Computer Sciences and Engineering",
        "EPF Ecole d'ingénieurs, France : Diplôme d'Ingénieur Généraliste, option Informatique",
        "Lycée Charles Péguy, France : Baccalauréat S, mention Très Bien"
      ]
    },
    {
      title: "Certifications",
      image: "/img/homepage/piolet2.webp",
      items: [
        "Professional Scrum Product Owner (Scrum.org PSPO I)",
        "Agilité à l'échelle SAFe (SAFe 4 Agilist)",
        "Scrum Master (Scrum.org PSM II)",
        "Gestion de Projet (MOOC École Centrale Lille)"
      ]
    }
  ];
  const timeline = [
    {
      period: "3 ans",
      title: "Directeur de projets – Codyssée (Cardiweb, Noesio)",
      responsibilities: [
        "Pilotage d'un portefeuille de 56 applications multi-pays",
        "Définition des stratégies produits et des roadmaps IT multi-entités",
        "Gestion des budgets, suivi des marges et reporting exécutif"
      ],
      achievements: [
        "URW : Program & Delivery Manager, Scrum master – création et supervision de 56 applications mobiles (budget 1,5 M€), supervision TMA / MCO",
        "CHANEL : Product Manager – lancement d'une application mobile intégrant l'IA et création/TMA d'un annuaire Salesforce",
        "Allianz (pôle Data & BI) : Release Manager & Scrum master – gestion des mises en production de 36 applications (budget 6 M€)",
        "Autres clients : GazelEnergie (pilote transverse Data), Polène (PO), Newrest (PO), Between (PO)"
      ]
    },
    {
      period: "4 ans",
      title: "Manager et Product Owner – mc2i (Paris)",
      responsibilities: [
        "Management opérationnel d'une équipe de 12 consultants",
        "Structuration des dispositifs et participation active aux appels d'offres",
        "Refonte et animation de formations certifiantes Agile"
      ],
      achievements: [
        "BNP Paribas CIB : Scrum master & Delivery manager – pilotage d'équipes en environnement réglementé",
        "Crédit Agricole DSI : Chef de Projet – pilotage de la WebFactory (12 personnes) et accompagnement à la réversibilité",
        "Caisse des Dépôts DSI : Product Owner France services puis Mon Parcours Handicap"
      ]
    },
    {
      period: "5 ans",
      title: "Business Analyst – mc2i (Paris)",
      missions: [
        "SNCF : déploiement d'un nouveau système de paie – recette, planning de déploiement et formations",
        "Enedis DSI : gestion de crises de production, pilotage du support national et responsable des flux financiers",
        "Caisse des Dépôts DSI : conception, pilotage, mises en production, TMA et création/pilotage d'un pôle de tests automatisés"
      ]
    },
    {
      period: "2 ans",
      title: "Software Engineer – Parasol Lab (USA)",
      missions: [
        "Développement C++ pour une librairie de programmation parallèle",
        "Développement web et base de données"
      ]
    }
  ];

  const hobbies = [
    { image: "/img/homepage/oenologie.webp", title: "Oenologie" },
    { image: "/img/homepage/wcs.webp", title: "West Coast Swing" },
    { image: "/img/homepage/pain.webp", title: "Boulangerie" },
    { image: "/img/homepage/muscu.webp", title: "Musculation" },
    { image: "/img/homepage/bricolage.webp", title: "Bricolage" }
  ];

  const publications = [
    {
      image: "/img/homepage/article2.webp",
      title: "Voitures autonomes : programmées pour tuer ?",
      link: "https://www.maddyness.com/2016/11/16/voitures-autonomes-programmees-pour-tuer/",
      text: "À horizon trente ou quarante ans, il y a fort à parier que les compagnies VTC proposeront des trajets à prix cassés grâce aux voitures sans conducteurs. Or, on le voit aujourd'hui, de nombreuses questions se posent déjà : Comment vont être programmées ces voitures quand il s'agira de faire un choix de sacrifice de vie humaine en cas d'accident inévitable par exemple ? Le développement des voitures sans chauffeur est en réalité aujourd'hui plus freiné par des questions éthiques et philosophiques que par des problèmes techniques ou mécaniques."
    },
    {
      image: "/img/homepage/article1.webp",
      title: "Réalité augmentée : le coup de grâce de la vente physique au profit de l'e-commerce?",
      link: "http://www.ecommercemag.fr/Thematique/cross-canal-1009/Breves/Realite-augmentee-coup-grace-vente-physique-profit-commerce-315305.htm#OBY575voIcj8kfUj.97",
      text: "La réalité virtuelle a ouvert le champ des possibles pour les marques, puisqu'elles peuvent immerger le consommateur dans un univers particulier. Pour les e-marchands, cette technologie peut être l'opportunité de littéralement 'donner à voir' au client."
    }
  ];

  return (
    <main>
      {/* Header / Hero */}
      <header 
        className="headerwrap dark-wrapper small" 
        style={{ backgroundImage: 'url(/img/hero/Montagne_1.webp)' }}
      >
       <div className="container">
          <div className="intro-text text-left">
            <h1 className="intro-heading wow fadeIn heading-font" style={{ animationDelay: '0.2s' }}>Directeur de projets IT</h1>
            <div className="intro-sub-heading wow fadeIn secondary-font" style={{ animationDelay: '0.4s' }}>
              Découvrez <span key={rotatingText} className="rotate-text" style={{ textShadow: 'black 0px 0px 14px', opacity: 0.85 }}>{rotatingText}</span>
            </div>
          </div>
          <div className="col text-center">
            <a href="/files/CV_Rojo.pdf" download="CV_Rojo.pdf">
              <button type="button" className="btn btn-lg btn-cv wow fadeIn">Télécharger mon CV</button>
            </a>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="section section-summary">
        <div className="container">
          <h1>Résumé</h1>
          <p>
            14 ans d&apos;expérience dans le pilotage de produits et de projets IT stratégiques, au sein d&apos;environnements
            complexes, multi-applicatifs et réglementés.
          </p>
          <p>
            Expertise en gouvernance, delivery à grande échelle et coordination DSI / métiers. Double compétence
            technique et managériale, orientée maîtrise budgétaire et alignement stratégique.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section section-skills">
        <div className="container">
          <h1>Compétences</h1>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.image} alt={skill.title} />
                <div className="skill-content">
                  <h2>{skill.title}</h2>
                  <ul>
                    {skill.items.map((item, i) => (
                      <li key={i}><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="section section-formation">
        <div className="container">
          <h1>Formation</h1>
          <div className="formation-grid">
            {formation.map((item, index) => (
              <div key={index} className="formation-item">
                <img src={item.image} alt={item.title} />
                <div className="skill-content">
                  <h2>{item.title}</h2>
                  <ul>
                    {item.items.map((item2, i) => (
                      <li key={i}><span>{item2}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-clients">
        <div className="container">
          <h1>Parcours professionnel</h1>
          <div className="timeline">
            {timeline.map((step, index) => (
              <div
                key={index}
                className={`timeline-item ${index === 0 ? 'timeline-item-current' : ''}`}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h2>
                      {step.title} <span className="timeline-duration">({step.period})</span>
                    </h2>
                    {index === 0 && (
                      <span className="timeline-badge">Poste actuel</span>
                    )}
                  </div>

                  {step.responsibilities && (
                    <>
                      <div className="timeline-section-title">Responsabilités clés</div>
                      <ul>
                        {step.responsibilities.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {step.achievements && (
                    <>
                      <div className="timeline-section-title">Missions principales</div>
                      <ul>
                        {step.achievements.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {step.missions && (
                    <>
                      <div className="timeline-section-title">Missions principales</div>
                      <ul>
                        {step.missions.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Travailler ensemble */}
      <section className="section section-collaboration">
        <div className="container">
          <h1 className="collab-title-full">
            Travailler ensemble
          </h1>
          <div className="collab-split">
            <div className="collab-left">
              <div className="collab-grid">
                {collaborations.map((item, index) => (
                  <div 
                    key={index} 
                    className="collab-card"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="collab-cta">
                <a
                  className="collab-button collab-button-primary"
                  href="mailto:olivier@rojo.fr?subject=Direction%20de%20projets%20IT%20-%20prise%20de%20contact"
                >
                  Discuter d'un projet
                </a>
                <a
                  className="collab-button collab-button-secondary"
                  href="https://www.linkedin.com/search/results/all/?keywords=Olivier%20Rojo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir mon profil LinkedIn
                </a>
              </div>
            </div>
            <div className="collab-right">
              <div className="collab-image-container">
                <img 
                  src="/img/directeur_projets/olivier_microphone.webp" 
                  alt="Olivier Rojo" 
                  className="collab-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="section section-hobbies">
        <div className="container">
          <h1>Centres d&apos;intérêts</h1>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-item">
                <img src={hobby.image} alt={hobby.title} />
                <div className="overlay">
                  <h2>{hobby.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section section-publications">
        <div className="container">
          <h1>Publications</h1>
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <img src={pub.image} alt={pub.title} />
                <div className="skill-content">
                  <h2>{pub.title}</h2>
                  <a className="a-publication" href={pub.link}>Lien vers l&apos;article</a>
                  <p style={{ paddingTop: '20px' }}>{pub.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrapper">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Olivier Rojo · Directeur de projets IT</p>
          <p className="footer-note">Portfolio personnel – Site régulièrement mis à jour</p>
        </div>
      </footer>
    </main>
  );
}
