//import
import React from "react";
import { Landmark, BadgeCheck, Eye, CalendarClock } from "lucide-react";
import { SiGithub, SiX, SiBluesky, SiAcademia, SiResearchgate, SiOrcid } from "react-icons/si";

//markup

const Team = () => {
  const teamData = [
    {
      name: "Julian Bogdani",
      image: "/images/team/julian-bogdani.jpg",
      position: "Responsabile scientifico del laboratorio",
      affiliation:
        "Professore Associato di Metodologie della Ricerca Archeologica, Dip. SARAS",
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
      position: "Membro del laboratorio",
      affiliation:
        "Assegnista di ricerca, Dip. Scienze dell'Antichità, Sapienza",
      iris: "https://iris.uniroma1.it/cris/rp/rp275041",
      academia: "https://uniroma1.academia.edu/LorenzoCardarelli",
      researchgate: "https://www.researchgate.net/profile/Lorenzo-Cardarelli-2",
      github: "https://github.com/lrncrd",
      orcid: "https://orcid.org/0000-0002-2436-9967",
    },
    {
      name: "Nadia Aleotti",
      image: "/images/team/nadia-aleotti.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Assegnista di ricerca Metodologie di Ricerca Archeologica, Dip. SARAS, Sapienza",
      academia: "https://uniroma1.academia.edu/NadiaAleotti",
      researchgate: "https://www.researchgate.net/profile/Nadia-Aleotti",
    },
    {
      name: "Francesca D'Ambola",
      image: "/images/team/francesca-dambola.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Dottoranda in Archeologia, Dip. Scienze dell'Antichità, Sapienza",
      academia: "https://uniroma1.academia.edu/FrancescaDAmbola",
      iris: "https://iris.uniroma1.it/cris/rp/rp338805",
      researchgate: "https://www.researchgate.net/profile/Francesca-Dambola",
    },
    {
      name: "Domizia D'Erasmo",
      image: "/images/team/domizia-derasmo.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Dottoranda in Archeologia, Dip. Scienze dell'Antichità, Sapienza",
      github: "https://github.com/ddomizia",
      academia: "https://uniroma1.academia.edu/domiziaderasmo",
      iris: "https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1",
      researchgate: "https://www.researchgate.net/profile/Domizia_Derasmo",
      twitter: "https://twitter.com/domizzzia",
    },
    {
      name: "Erasmo Di Fonso",
      image: "/images/team/erasmo-di-fonso.jpg",
      position: "Membro del laboratorio",
      affiliation: "Assegnista di ricerca, Dip. Istituto Studi Orientali (ISO), Sapienza",
      github: "https://github.com/erasmdif",
    },
    {
      name: "Paolo Rosati",
      image: "/images/team/paolo-rosati.jpg",
      position: "Membro del laboratorio",
      affiliation: "Assegnista di ricerca presso il Dip. SARAS, Sapienza",
      academia: "https://uniroma1.academia.edu/RosatiPaolo",
      researchgate: "https://www.researchgate.net/profile/Paolo-Rosati-2",
    },
    {
      name: "Eleonora Iacopini",
      image: "/images/team/eleonora-iacopini.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Assegnista di ricerca di Metodologie di Ricerca Archeologica, Dip. SARAS, Sapienza",
      iris: "https://iris.uniroma1.it/simple-search?query=iacopini+eleonora&needescape=1",
      academia: "https://uniroma1.academia.edu/EleonoraIacopini",
      researchgate: "https://www.researchgate.net/profile/Eleonora_Iacopini",
      github: "https://github.com/eiacopini",
    },

  ];

  const iconList = [
    {
      id: "uni",
      label: "Sito istituzionale",
      icon: <Landmark />,
    },
    {
      id: "orcid",
      label: "ORCID (Open Researcher and Contributor ID)",
      icon: <SiOrcid />,
    },
    {
      id: "github",
      label: "GitHub",
      icon: <SiGithub />,
    },
    {
      id: "academia",
      label: "Academia.edu",
      icon: <SiAcademia />,
    },
    {
      id: "iris",
      label: "Repository IRIS",
      icon: <Eye />,
    },
    {
      id: "researchgate",
      label: "Research Gate",
      icon: <SiResearchgate />,
    },
    {
      id: "twitter",
      label: "X",
      icon: <SiX />,
    },
    {
      id: "bluesky",
      label: "BlueSky",
      icon: <SiBluesky />,
    },
    {
      id: "apmt",
      label: "Fissa un appuntamento",
      icon: <CalendarClock />,
    },
  ];

  return (
    <div>
      <div className="row">
        {teamData.map((m, mk) => {
          return (
            <div className="row py-5" key={mk}>
              <div className="col-md-4 col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={m.image}
                    alt={`LAD ${m.position}: ${m.name}`}
                  />
                </div>
              </div>
              <div className="col">
                <div className="">
                  <div className="card-body">
                    <h5 className="card-title">{m.name}</h5>
                    <p className="card-text position">{m.position}</p>
                    <p className="card-text dipartimento">{m.affiliation}</p>
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
