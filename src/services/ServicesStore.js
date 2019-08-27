const Desires = Object.freeze({
  kleMeg: "kleMeg",
  lageMat: "lageMat",
  vaskeMeg: "vaskeMeg",
  kommeMegRundtHjemme: "kommeMegRundtHjemme",
  kommeMegRundtUtenforHjemmet: "kommeMegRundtUtenforHjemmet",
  kollektivTransport: "kollektivTransport",
  handleMat: "handleMat",
  brukeInternett: "brukeInternett",
  kontrollPåPenger: "kontrollPåPenger",
  deltaISamfunn: "deltaISamfunn",
  vaskeHjemme: "vaskeHjemme",
  hobby: "hobby",
  fysiskAktivitet: "fysiskAktivitet",
  sosialisere: "sosialisere"
});

export const desireList = [
  Desires.kleMeg,
  Desires.lageMat,
  Desires.vaskeMeg,
  Desires.kommeMegRundtHjemme,
  Desires.kommeMegRundtUtenforHjemmet,
  Desires.kollektivTransport,
  Desires.handleMat,
  Desires.brukeInternett,
  Desires.kontrollPåPenger,
  Desires.deltaISamfunn,
  Desires.vaskeHjemme,
  Desires.hobby,
  Desires.fysiskAktivitet,
  Desires.sosialisere
];

const Limitations = Object.freeze({
  bevege: "bevege",
  balanse: "balanse",
  smerter: "smerter",
  angst: "angst",
  falle: "falle",
  nedstemt: "nedstemt",
  stedssans: "stedssans",
  overfalt: "overfalt",
  syn: "syn",
  hørsel: "hørsel",
  digitalKompetanse: "digitalKompetanse"
});

export const limitationList = [
  Limitations.bevege,
  Limitations.balanse,
  Limitations.smerter,
  Limitations.angst,
  Limitations.falle,
  Limitations.nedstemt,
  Limitations.stedssans,
  Limitations.overfalt,
  Limitations.syn,
  Limitations.hørsel,
  Limitations.digitalKompetanse
];

// Basert på regnearket på Disk. Gule relasjoner er ignorert.
export const desireLimitationRelationList = {
  [Desires.kleMeg]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.falle,
    Limitations.syn
  ],
  [Desires.lageMat]: [
    Limitations.bevege,
    Limitations.smerter,
    Limitations.nedstemt,
    Limitations.syn
  ],
  [Desires.vaskeMeg]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.falle,
    Limitations.nedstemt,
    Limitations.syn
  ],
  [Desires.kommeMegRundtHjemme]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.falle,
    Limitations.stedssans,
    Limitations.syn
  ],
  [Desires.kommeMegRundtUtenforHjemmet]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.angst,
    Limitations.falle,
    Limitations.nedstemt,
    Limitations.stedssans,
    Limitations.overfalt,
    Limitations.syn,
    Limitations.hørsel
  ],
  [Desires.kollektivTransport]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.angst,
    Limitations.falle,
    Limitations.stedssans,
    Limitations.overfalt,
    Limitations.syn,
    Limitations.hørsel,
    Limitations.digitalKompetanse
  ],
  [Desires.handleMat]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.angst,
    Limitations.falle,
    Limitations.stedssans,
    Limitations.overfalt,
    Limitations.syn,
    Limitations.digitalKompetanse
  ],
  [Desires.brukeInternett]: [
    Limitations.bevege,
    Limitations.angst,
    Limitations.nedstemt,
    Limitations.syn,
    Limitations.digitalKompetanse
  ],
  [Desires.kontrollPåPenger]: [
    Limitations.angst,
    Limitations.nedstemt,
    Limitations.syn,
    Limitations.digitalKompetanse
  ],
  [Desires.deltaISamfunn]: [
    Limitations.bevege,
    Limitations.angst,
    Limitations.nedstemt,
    Limitations.syn,
    Limitations.hørsel,
    Limitations.digitalKompetanse
  ],
  [Desires.vaskeHjemme]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.falle,
    Limitations.nedstemt,
    Limitations.syn
  ],
  [Desires.hobby]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.falle,
    Limitations.nedstemt,
    Limitations.syn,
    Limitations.digitalKompetanse
  ],
  [Desires.fysiskAktivitet]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.angst,
    Limitations.falle,
    Limitations.nedstemt,
    Limitations.stedssans,
    Limitations.overfalt,
    Limitations.syn
  ],
  [Desires.sosialisere]: [
    Limitations.bevege,
    Limitations.balanse,
    Limitations.smerter,
    Limitations.angst,
    Limitations.nedstemt,
    Limitations.syn,
    Limitations.hørsel,
    Limitations.digitalKompetanse
  ]
};

// Utdrag av tilbudsliste man finner på Disk. Verdiene er satt veldig fort mest for å skape data til å teste applikasjonen.
export const serviceList = [
  {
    name: "Ledsagerbevis",
    description:
      "Hvis du har fysiske eller psykiske funksjonshemninger kan du ha med deg en ledsager. Med et ledsagerbevis slipper ledsageren din å betale for sin billett på for eksempel offentlig transport eller kulturarrangementer.",
    limitationRatings: {
      [Limitations.bevege]: 0.8,
      [Limitations.stedssans]: 0.6,
      [Limitations.syn]: 0.4,
      [Limitations.balanse]: 0.5,
      [Limitations.falle]: 0.1
    },
    desireRatings: {
      [Desires.kommeMegRundtUtenforHjemmet]: 0.8,
      [Desires.handleMat]: 0.5,
      [Desires.kollektivTransport]: 0.5
    }
  },
  {
    name: "Besøkstjeneste Røde Kors",
    description:
      "Hvis du er ensom eller ønsker sosial kontakt, kan du få en besøksvenn fra Røde Kors.",
    limitationRatings: {
      [Limitations.bevege]: 0.7,
      [Limitations.stedssans]: 0.7,
      [Limitations.nedstemt]: 0.5,
      [Limitations.angst]: 0.5
    },
    desireRatings: {
      [Desires.sosialisere]: 0.8,
      [Desires.deltaISamfunn]: 0.2,
      [Desires.hobby]: 0.2
    }
  },
  {
    name: "Besøkstjeneste Kirkens Bymisjon",
    description:
      "Hvis du er ensom eller ønsker sosial kontakt, kan du få en besøksvenn fra Kirkens Bymisjon.",
    limitationRatings: {
      [Limitations.bevege]: 0.7,
      [Limitations.stedssans]: 0.7,
      [Limitations.nedstemt]: 0.5,
      [Limitations.angst]: 0.5
    },
    desireRatings: {
      [Desires.sosialisere]: 0.8,
      [Desires.deltaISamfunn]: 0.2,
      [Desires.hobby]: 0.2
    }
  },
  {
    name: "Fallforebyggende trim",
    description:
      "Balanse og styrketrening for deg over 60 år. Gruppetreningen ledes av en fysioterapeut. Vi holder til i lokalene til Stovner eldresenter. Du kan bruke eldresenterets transportjeneste for å komme til og fra eldresenteret.",
    limitationRatings: {
      [Limitations.bevege]: 0.5,
      [Limitations.smerter]: 0.1,
      [Limitations.falle]: 0.7,
      [Limitations.balanse]: 0.7
    },
    desireRatings: {
      [Desires.sosialisere]: 0.5,
      [Desires.kommeMegRundtUtenforHjemmet]: 0.5,
      [Desires.fysiskAktivitet]: 0.8
    }
  },
  {
    name: "Stavgang 60+",
    description:
      "Bli med på tur, med eller uten staver. Arrangeres av Stovner eldresenter.",
    limitationRatings: {
      [Limitations.nedstemt]: 0.3,
      [Limitations.overfalt]: 0.3,
      [Limitations.syn]: 0.4,
      [Limitations.balanse]: 0.5
    },
    desireRatings: {
      [Desires.hobby]: 0.6,
      [Desires.sosialisere]: 0.7,
      [Desires.fysiskAktivitet]: 0.7
    }
  },
  {
    name: "Hjelpemidler",
    description:
      "Du kan låne midlertidige hjelpemidler som for eksempel: stokk, rullator, prekestol, rullestol, toalettstol, toalettforhøyer, dusjkrakk og trykkavlastende madrass.",
    limitationRatings: {
      [Limitations.bevege]: 0.7,
      [Limitations.falle]: 0.7,
      [Limitations.smerter]: 0.5,
      [Limitations.balanse]: 0.6
    },
    desireRatings: {
      [Desires.kommeMegRundtHjemme]: 0.8,
      [Desires.handleMat]: 0.3,
      [Desires.kommeMegRundtUtenforHjemmet]: 0.5,
      [Desires.vaskeMeg]: 0.4
    }
  },
  {
    name: "Varer levert hjem",
    description:
      "Bestill matvarer via internett eller telefon, og få de levert hjem.",
    limitationRatings: {
      [Limitations.bevege]: 0.7,
      [Limitations.stedssans]: 0.7,
      [Limitations.smerter]: 0.6,
      [Limitations.syn]: 0.4,
      [Limitations.balanse]: 0.4,
      [Limitations.nedstemt]: 0.2
    },
    desireRatings: {
      [Desires.handleMat]: 0.5
    }
  },
  {
    name: "Stovner eldresenter",
    description:
      "Eldresenter for de over 60 år, som tilbyr ulike aktiviteter å delta på, samt en kafeteria. Det er mulighet for transport til og fra eldresentret mandag, onsdag og fredag..",
    limitationRatings: {
      [Limitations.bevege]: 0.2,
      [Limitations.syn]: 0.4,
      [Limitations.balanse]: 0.4,
      [Limitations.nedstemt]: 0.2,
      [Limitations.angst]: 0.1
    },
    desireRatings: {
      [Desires.hobby]: 0.6,
      [Desires.sosialisere]: 0.9,
      [Desires.lageMat]: 0.4
    }
  },
  {
    name: "Stovner Frisklivs- og mestringssenter",
    description:
      "Frisklivsordningen er for deg som ønsker hjelp til å komme i gang med fysisk aktivitet og et tilpasset kosthold. Du kan også delta på kurs i mestring av depresjon eller belastning.",
    limitationRatings: {
      [Limitations.bevege]: 0.1,
      [Limitations.balanse]: 0.1,
      [Limitations.nedstemt]: 0.6,
      [Limitations.angst]: 0.4
    },
    desireRatings: {
      [Desires.hobby]: 0.5,
      [Desires.sosialisere]: 0.7,
      [Desires.lageMat]: 0.6,
      [Desires.fysiskAktivitet]: 0.7,
      [Desires.kleMeg]: 0.2,
      [Desires.kontrollPåPenger]: 0.2,
      [Desires.brukeInternett]: 0.1
    }
  },
  {
    name: "Fysioterapeut",
    description:
      "Du kan få behandling hos fysioterapeut for å få bedre bevegelighet og mindre smerter. Flere fysioterapeuter har kommunal avtale, noe som betyr at du kun betaler egenandel.",
    limitationRatings: {
      [Limitations.bevege]: 0.6,
      [Limitations.balanse]: 0.3,
      [Limitations.smerte]: 0.6
    },
    desireRatings: {
      [Desires.kommeMegRundtHjemme]: 0.6,
      [Desires.kommeMegRundtUtenforHjemmet]: 0.4,
      [Desires.fysiskAktivitet]: 0.2
    }
  },
  {
    name: "Vurderingsteam",
    description:
      "Du får hjemmebesøk av et tverrfaglig team som snakker med deg om din situasjon. Du vil også få informasjon om hvilke tilbud som finnes i din bydel, og hva som kan passe for deg.",
    limitationRatings: {
      [Limitations.bevege]: 0.6,
      [Limitations.balanse]: 0.4,
      [Limitations.smerte]: 0.4,
      [Limitations.angst]: 0.4,
      [Limitations.falle]: 0.3
    },
    desireRatings: {
      [Desires.kommeMegRundtHjemme]: 0.3,
      [Desires.kommeMegRundtUtenforHjemmet]: 0.5,
      [Desires.fysiskAktivitet]: 0.2,
      [Desires.kollektivTransport]: 0.3
    }
  }
];

export default serviceList;
