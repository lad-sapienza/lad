//import
import React from "react";
import { Landmark, BadgeCheck, Eye, CalendarClock } from "lucide-react";
import { SiGithub, SiX, SiBluesky, SiAcademia, SiResearchgate, SiOrcid } from "react-icons/si";

//markup

const teamData = [
  {
    name: "Julian Bogdani",
    image: "/images/team/julian-bogdani.jpg",
    position: { it: "Responsabile scientifico del laboratorio", en: "Lab scientific director" },
    affiliation: {
      it: "Professore Associato di Metodologie della Ricerca Archeologica, Dip. SARAS",
      en: "Associate Professor of Archaeological Research Methodology, Dept. SARAS",
    },
    uni: "https://purl.org/lad/jb",
    orcid: "https://orcid.org/0000-0001-5250-927X",
    github: "https://github.com/jbogdani",
    academia: "https://uniroma1.academia.edu/JulianBogdani",
    iris: "https://iris.uniroma1.it/browse?type=author&authority=rp62440&authority_lang=en",
    researchgate: "https://www.researchgate.net/profile/Julian-Bogdani",
    twitter: "https://twitter.com/JulianBogdani",
    bluesky: "https://bsky.app/profile/jbogdani.bsky.social",
    apmt: "https://apmt.day/julian.bogdani%40uniroma1.it/book/",
  },
  {
    name: "Lorenzo Cardarelli",
    image: "/images/team/lorenzo-cardarelli.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: {
      it: "Assegnista di ricerca, Dip. Scienze dell'Antichità, Sapienza",
      en: "Research fellow, Dept. of Antiquity Sciences, Sapienza",
    },
    iris: "https://iris.uniroma1.it/cris/rp/rp275041",
    academia: "https://uniroma1.academia.edu/LorenzoCardarelli",
    researchgate: "https://www.researchgate.net/profile/Lorenzo-Cardarelli-2",
    github: "https://github.com/lrncrd",
    orcid: "https://orcid.org/0000-0002-2436-9967",
  },
  {
    name: "Nadia Aleotti",
    image: "/images/team/nadia-aleotti.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: {
      it: "Assegnista di ricerca Metodologie di Ricerca Archeologica, Dip. SARAS, Sapienza",
      en: "Research fellow in Archaeological Research Methodology, Dept. SARAS, Sapienza",
    },
    academia: "https://uniroma1.academia.edu/NadiaAleotti",
    researchgate: "https://www.researchgate.net/profile/Nadia-Aleotti",
  },
  {
    name: "Francesca D'Ambola",
    image: "/images/team/francesca-dambola.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: {
      it: "Dottoranda in Archeologia, Dip. Scienze dell'Antichità, Sapienza",
      en: "PhD student in Archaeology, Dept. of Antiquity Sciences, Sapienza",
    },
    academia: "https://uniroma1.academia.edu/FrancescaDAmbola",
    iris: "https://iris.uniroma1.it/cris/rp/rp338805",
    researchgate: "https://www.researchgate.net/profile/Francesca-Dambola",
  },
  {
    name: "Domizia D'Erasmo",
    image: "/images/team/domizia-derasmo.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: {
      it: "Dottoranda in Archeologia, Dip. Scienze dell'Antichità, Sapienza",
      en: "PhD student in Archaeology, Dept. of Antiquity Sciences, Sapienza",
    },
    github: "https://github.com/ddomizia",
    academia: "https://uniroma1.academia.edu/domiziaderasmo",
    iris: "https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1",
    researchgate: "https://www.researchgate.net/profile/Domizia_Derasmo",
    twitter: "https://twitter.com/domizzzia",
  },
  {
    name: "Erasmo Di Fonso",
    image: "/images/team/erasmo-di-fonso.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: {
      it: "Assegnista di ricerca, Dip. Istituto Studi Orientali (ISO), Sapienza",
      en: "Research fellow, Dept. of Oriental Studies (ISO), Sapienza",
    },
    github: "https://github.com/erasmdif",
  },
  {
    name: "Paolo Rosati",
    image: "/images/team/paolo-rosati.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: { it: "Assegnista di ricerca presso il Dip. SARAS, Sapienza", en: "Research fellow, Dept. SARAS, Sapienza" },
    academia: "https://uniroma1.academia.edu/RosatiPaolo",
    researchgate: "https://www.researchgate.net/profile/Paolo-Rosati-2",
  },
  {
    name: "Eleonora Iacopini",
    image: "/images/team/eleonora-iacopini.jpg",
    position: { it: "Membro del laboratorio", en: "Lab member" },
    affiliation: {
      it: "Assegnista di ricerca di Metodologie di Ricerca Archeologica, Dip. SARAS, Sapienza",
      en: "Research fellow in Archaeological Research Methodology, Dept. SARAS, Sapienza",
    },
    iris: "https://iris.uniroma1.it/simple-search?query=iacopini+eleonora&needescape=1",
    academia: "https://uniroma1.academia.edu/EleonoraIacopini",
    researchgate: "https://www.researchgate.net/profile/Eleonora_Iacopini",
    github: "https://github.com/eiacopini",
  },
];

const ICON_LABELS = {
  uni: { it: "Sito istituzionale", en: "Institutional page" },
  orcid: { it: "ORCID (Open Researcher and Contributor ID)", en: "ORCID (Open Researcher and Contributor ID)" },
  github: { it: "GitHub", en: "GitHub" },
  academia: { it: "Academia.edu", en: "Academia.edu" },
  iris: { it: "Repository IRIS", en: "IRIS Repository" },
  researchgate: { it: "Research Gate", en: "Research Gate" },
  twitter: { it: "X", en: "X" },
  bluesky: { it: "BlueSky", en: "BlueSky" },
  apmt: { it: "Fissa un appuntamento", en: "Book an appointment" },
};

const Team = ({ locale = "it" }) => {
  const iconList = [
    { id: "uni", label: ICON_LABELS.uni[locale], icon: <Landmark /> },
    { id: "orcid", label: ICON_LABELS.orcid[locale], icon: <SiOrcid /> },
    { id: "github", label: ICON_LABELS.github[locale], icon: <SiGithub /> },
    { id: "academia", label: ICON_LABELS.academia[locale], icon: <SiAcademia /> },
    { id: "iris", label: ICON_LABELS.iris[locale], icon: <Eye /> },
    { id: "researchgate", label: ICON_LABELS.researchgate[locale], icon: <SiResearchgate /> },
    { id: "twitter", label: ICON_LABELS.twitter[locale], icon: <SiX /> },
    { id: "bluesky", label: ICON_LABELS.bluesky[locale], icon: <SiBluesky /> },
    { id: "apmt", label: ICON_LABELS.apmt[locale], icon: <CalendarClock /> },
  ];

  return (
    <div>
      <div className="row">
        {teamData.map((m, mk) => {
          const position = m.position[locale] ?? m.position.it;
          const affiliation = m.affiliation[locale] ?? m.affiliation.it;
          return (
            <div className="row py-5" key={mk}>
              <div className="col-md-4 col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={m.image}
                    alt={`LAD ${position}: ${m.name}`}
                  />
                </div>
              </div>
              <div className="col">
                <div className="">
                  <div className="card-body">
                    <h5 className="card-title">{m.name}</h5>
                    <p className="card-text position">{position}</p>
                    <p className="card-text dipartimento">{affiliation}</p>
                    <p className="card-text icon">
                      {iconList.map((i, ik) => {
                        if (m[i.id]) {
                          return (
                            <a href={m[i.id]} title={i.label} key={ik} className="mx-1">
                              {i.icon}
                            </a>
                          );
                        } else {
                          return "";
                        }
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
