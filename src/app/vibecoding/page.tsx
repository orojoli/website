'use client';

import React, { useState, useEffect } from 'react';

export default function VibeCoding() {
  const [rotatingText, setRotatingText] = useState("Finy, assistant budgétaire intelligent");

  useEffect(() => {
    const texts = [
      "Finy, assistant budgétaire intelligent",
      "Consultant Staffing, planning haute précision",
      "mes side-projects produits"
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setRotatingText(texts[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const finyFeatures = [
    "Tableau de bord holistique pour suivre sa trajectoire d'épargne",
    "Gestion par enveloppes avec reste à dépenser en temps réel",
    "Planification budgétaire annuelle avec variations saisonnières",
    "Coach IA qui analyse les dépenses et propose des optimisations"
  ];

  const finyTech = [
    "React 19 & TypeScript pour une base solide et typée",
    "Tailwind CSS et esthétique iOS / glassmorphism",
    "Supabase (PostgreSQL) pour la persistance et l'authentification",
    "Recharts et intégration IA (Gemini) prêtes pour l'analyse prédictive"
  ];

  const finyUx = [
    "Approche Mobile-First avec zones tactiles confortables",
    "Transitions fluides pour un ajout de dépense quasi instantané",
    "Palette indigo / slate pour réduire la charge cognitive liée aux chiffres"
  ];

  const staffingFeatures = [
    "Vue Pilotage : projection d'occupation sur plusieurs mois et coûts d'inactivité par consultant",
    "Vue Dispo : compétences clés, séniorité et souhaits de mission pour chaque personne",
    "Vue Timeline : staffing à la demi-journée (AM / PM) avec drag-and-drop et modes bureau / télétravail / chez le client"
  ];

  const staffingTech = [
    "Application SaaS full React 19 & TypeScript",
    "Backend temps réel avec Supabase (PostgreSQL)",
    "Intégration Gemini via @google/genai pour l'analyse prédictive",
    "Optimisations de rendu pour grosses timelines (useMemo, useCallback)"
  ];

  const cvOptimizerFeatures = [
    "Analyse chaque offre pour en extraire les mots-clés stratégiques et les contraintes ATS",
    "Réécrit le contenu du CV sans inventer d'expériences ni déformer le parcours du candidat",
    "Applique un style \"human-writing\" factuel, orienté résultats et vocabulaire business",
    "Respecte une contrainte d'isométrie stricte : même nombre de caractères que le texte d'origine"
  ];

  const cvOptimizerTech = [
    "Pipeline entrée : offre d'emploi, CV source en Markdown et template HTML/CSS millimétré",
    "Moteur de substitution sémantique qui injecte les nouveaux mots-clés dans le Markdown",
    "Intégration front-end pixel-perfect du texte réécrit dans le template HTML d'origine",
    "Génération d'un fichier HTML prêt pour impression PDF et envoi de candidature"
  ];

  return (
    <main>
      {/* Header */}
      <header 
        className="headerwrap dark-wrapper small" 
        style={{ backgroundImage: 'url(/img/hero/Montagne_2.webp)' }}
      >
        <div className="container vertical-center">
          <div className="intro-text">
            <h1
              className="intro-heading wow fadeIn heading-font"
              style={{ animationDelay: '0.2s' }}
            >
              Vibe Coding
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

      {/* Finy Section */}
      <section className="section section-projects-pro vibe-section">
        <div className="container">
          <p className="vibe-intro vibe-fade-up">
            Voici quelques-unes des apps que j&apos;ai{' '}
            <span className="vibe-intro-highlight">« vibe codé »</span> en explorant Google AI
            Studio et Claude Code.
          </p>
          <div className="vibe-layout">
            <div className="vibe-text vibe-text-card vibe-fade-up">
              <p className="vibe-kicker">
                Assistant budgétaire personnel
                <span className="vibe-kicker-separator" />
                <span className="vibe-kicker-brand">
                  <img
                    src="/img/finy/finy.webp"
                    alt="Finy logo"
                    className="vibe-kicker-logo"
                  />
                  FINY
                </span>
              </p>
              <div className="vibe-tags">
                <span className="vibe-tag">PWA</span>
                <span className="vibe-tag">Mobile-first</span>
                <span className="vibe-tag">Budget par enveloppes</span>
                <span className="vibe-tag">Supabase &amp; IA</span>
              </div>
              <h2 className="vibe-title">Optimiser son épargne avec un coach IA</h2>
              <p className="vibe-lead">
                Finy est une PWA Mobile-First qui aide à garder le contrôle sur son budget
                tout en optimisant son épargne. Le coach IA analyse les dépenses, détecte les
                postes surdimensionnés et suggère des ajustements concrets pour rapprocher
                chaque mois l'utilisateur de ses objectifs financiers.
              </p>
              <div className="vibe-text-grid">
                <div className="vibe-block">
                  <h3>Ce que Finy apporte</h3>
                  <ul className="vibe-list vibe-list-animated">
                    {finyFeatures.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="vibe-block">
                  <h3>Stack & architecture</h3>
                  <ul className="vibe-list vibe-list-animated">
                    {finyTech.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="vibe-gallery vibe-fade-up-delayed">
              <div className="phone-strip">
                {["/img/finy/IMG_0966.webp", "/img/finy/IMG_0963.webp", "/img/finy/IMG_0964.webp", "/img/finy/IMG_0965.webp"].map(
                  (src, index) => (
                    <div key={src} className="phone-frame">
                      <div className="phone-screen">
                        <img src={src} alt={`Finy écran ${index + 1}`} />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultant Staffing Section */}
      <section className="section section-projects-personal vibe-section">
        <div className="container">
          <div className="vibe-text vibe-text-card vibe-fullwidth vibe-fade-up">
            <p className="vibe-kicker">
              SaaS de staffing haute précision
              <span className="vibe-kicker-separator" />
              <span className="vibe-kicker-brand">
                <img
                  src="/img/staffingpro/csp.webp"
                  alt="Consultant Staffing Pro logo"
                  className="vibe-kicker-logo vibe-kicker-logo-medium"
                />
                Consultant Staffing Pro
              </span>
            </p>
            <div className="vibe-tags">
              <span className="vibe-tag">Cabinets de conseil</span>
              <span className="vibe-tag">Staffing AM / PM</span>
              <span className="vibe-tag">Timeline drag-and-drop</span>
              <span className="vibe-tag">IA Gemini</span>
            </div>
            <h2 className="vibe-title">Remplacer les Excel par un cockpit temps réel</h2>
            <p className="vibe-lead">
              Application SaaS pensée autour de trois vues complémentaires&nbsp;: une vue
              Pilotage qui projette l'occupation sur les prochains mois et matérialise les coûts
              d'inactivité, une vue Dispo centrée sur les compétences et souhaits des
              consultants, et une timeline de staffing à la demi-journée où l'on pose les
              missions et le mode de présence (bureau, télétravail, chez le client).
            </p>
            <div className="vibe-text-grid">
              <div className="vibe-block">
                <h3>Fonctionnalités clés</h3>
                <ul className="vibe-list vibe-list-animated">
                  {staffingFeatures.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="vibe-block">
                <h3>Stack & IA</h3>
                <ul className="vibe-list vibe-list-animated">
                  {staffingTech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
           <div className="vibe-gallery vibe-fade-up-delayed">
             <div className="desktop-strip">
               {['/img/staffingpro/csp_2.webp', '/img/staffingpro/csp_1.webp'].map((src, index) => (
                 <div key={src} className="desktop-frame">
                  <div className="desktop-screen">
                    <img src={src} alt={`Consultant Staffing écran ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Optimizer Section */}
      <section className="section section-projects-pro vibe-section">
        <div className="container">
          <div className="vibe-gallery vibe-fade-up-delayed">
            <div className="desktop-strip cvoptimizer-strip">
              {['/img/cv_optimizer/Exemple_CVO_1.webp', '/img/cv_optimizer/Exemple_CVO_2.webp'].map(
                (src, index) => (
                  <div key={src} className="desktop-frame cvoptimizer-desktop-frame">
                    <div className="desktop-screen">
                      <img src={src} alt={`CV Optimizer écran ${index + 1}`} />
                    </div>
                  </div>
                )
              )}
              <div className="cvoptimizer-confetti cvoptimizer-confetti-left" aria-hidden="true" />
              <div className="cvoptimizer-confetti cvoptimizer-confetti-right" aria-hidden="true" />
            </div>
          </div>
          <div className="vibe-text vibe-text-card vibe-fullwidth vibe-fade-up">
            <p className="vibe-kicker">
              Optimisation de CV par IA
              <span className="vibe-kicker-separator" />
              <span className="vibe-kicker-brand">
                <img
                  src="/img/cv_optimizer/logo_CV_optimizer.webp"
                  alt="CV Optimizer logo"
                  className="vibe-kicker-logo vibe-kicker-logo-large"
                />
                CV Optimizer
              </span>
            </p>
            <div className="vibe-tags">
              <span className="vibe-tag">Anti-ATS</span>
              <span className="vibe-tag">Human-writing</span>
              <span className="vibe-tag">HTML/CSS pixel-perfect</span>
              <span className="vibe-tag">CV Markdown</span>
            </div>
            <h2 className="vibe-title">Adapter un CV à chaque offre sans casser le design</h2>
            <p className="vibe-lead">
              CV Optimizer est un système qui adapte automatiquement le fond et la forme d'un CV
              à une offre d'emploi précise pour maximiser le matching ATS, tout en préservant
              strictement le template HTML/CSS d'origine grâce à une réécriture isométrique
              (même nombre de caractères par segment).
            </p>
            <div className="vibe-text-grid">
              <div className="vibe-block">
                <h3>Fonctionnalités clés</h3>
                <ul className="vibe-list vibe-list-animated">
                  {cvOptimizerFeatures.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="vibe-block">
                <h3>Stack & architecture</h3>
                <ul className="vibe-list vibe-list-animated">
                  {cvOptimizerTech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrapper">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Olivier Rojo · Vibe Coding</p>
          <p className="footer-note">Expérimentations, bonnes pratiques et envies de code</p>
        </div>
      </footer>
    </main>
  );
}
