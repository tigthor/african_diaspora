import {
  tourDescription,
  nigeriaSlides,
  southamericaSlides,
  europeSlides,
  carribeanSlides,
  slideUsa,
  canadaSlides,
} from "./data";
import { useState } from 'react';

// Importing location's indivudual images
import Europe from "../img/europe.png";
import Guinea from "../img/guinea.png";
import Usa from "../img/usa.png";
import Nigeria from "../img/nigeria.png";
import Westafrica from "../img/westafrica.png";
import Carribean from "../img/carribean.png";
import Canada from "../img/canada.png";
import Southamerica from "../img/southamerica.png";
import Triangle from "../img/triangular-trade.png";
import Uk from "../img/uk.png";

// Importing location's sound track
import EuropeSound from "../sounds/europe.mp3";
import WestafricaSound from "../sounds/africa.mp3";
import CanadaSound from "../sounds/canada.mp3";
import CarribeanSound from "../sounds/carribean.mp3";
import SouthamericaSound from "../sounds/southamerica.mp3";
import UsaSound from "../sounds/usa.mp3";

const menu = {
  active: true,
  items: [
    {
      name: "North African Tour",
      target: "northafrica",
      available: false,
    },
    {
      name: "West African Tour",
      target: "westafrica",
      available: true,
    },
    {
      name: "East African Tour",
      target: "eastafrica",
      available: true,
    },
    {
      name: "South African Tour",
      target: "southafrica",
      available: false,
    },
  ],
};

const tourstart = [
  {
    name: "westafrica",
    title: tourDescription.find((tour) => tour.name === "westafrica").title,
    description: tourDescription.find((tour) => tour.name === "westafrica")
      .description,
    active: false,
  },
  {
    name: "eastafrica",
    title: tourDescription.find((tour) => tour.name === "eastafrica").title,
    description: tourDescription.find((tour) => tour.name === "eastafrica")
      .description,
    active: false,
  },
];

const active = tourstart.filter((tour) => tour.active === true);
console.log(active)

// Map information
let map = {
  dimension: { x: 2500, y: 1355 },
  darkness: 0.8,
  zoomLevel: 1,
  blurLevel: 2,
  position: { x: -360, y: -100 },
  freezed: true,
  isScrolling: true,
  blinking: false,
};

// location structure to create map

let locations =[
  {
    name: "europe",
    coords: { x: 1091, y: 71 },
    image: Europe,
    // sound: EuropeSound,
    active: false,
    clickable: false,
  },
  {
    name: "usa",
    coords: { x: 117, y: 162 },
    image: Usa,
    sound: UsaSound,
    active: false,
    clickable: false,
  },

  {
    name: "guinea",
    coords: { x: 1031, y: 542 },
    image: Guinea,
    active: false,
    clickable: false,
  },
  {
    name: "nigeria",
    coords: { x: 1190, y: 530 },
    image: Nigeria,
    active: false,
    clickable: false,
  },
  {
    name: "westafrica",
    coords: { x: 1008, y: 387 },
    image: Westafrica,
    active: false,
    sound: WestafricaSound,
    clickable: false,
  },
  {
    name: "westafrica",
    coords: { x: 1300, y: 550 },
    image: Westafrica,
    active: false,
    sound: WestafricaSound,
    clickable: false,
  },
  {
    name: "carribean",
    coords: { x: 408, y: 431 },
    image: Carribean,
    sound: CarribeanSound,
    active: false,
    clickable: false,
  },

  {
    name: "canada",
    coords: { x: 149, y: -1 },
    image: Canada,
    sound: CanadaSound,
    active: false,
    clickable: false,
  },
  {
    name: "southamerica",
    coords: { x: 420, y: 542 },
    image: Southamerica,
    sound: SouthamericaSound,
    active: false,
    clickable: false,
  },

  {
    name: "uk",
    coords: { x: 1133, y: 71 },
    image: Uk,
    sound: EuropeSound,
    active: false,
    clickable: false,
  },
]



const popups = [
  {
    name: "canada",
    coords: { x: 460, y: 120 },
    description: (
      <p>
        Approximately 3000 runaway enslaved persons arrived in Canada from the
        United States in the 1800's. Today, there are roughly 2,000,000
        descendants of African enslaved persons residing in Canada.
      </p>
    ),
    active: false,
  },
  {
    name: "southamerica",
    coords: { x: 600, y: 1000 },
    description: (
      <p>
        Approximately 6,000,000 African enslaved persons were forced into South
        America as a result of the transatlantic slave trade. Today, there are
        roughly 150,000,000 descendants of African enslaved persons residing in
        Latin America.
      </p>
    ),
    active: false,
  },
  {
    name: "europe",
    coords: { x: 1150, y: 120 },
    active: false,
    description: (
      <p>
        Approximately 3,000,000 African enslaved persons were forced into the
        territories of Great Britain as a result of the transatlantic slave
        trade. Today, there are roughly 2,000,000 descendants of African
        enslaved persons residing in Great Britain.
      </p>
    ),
  },
  {
    name: "usa",
    coords: { x: 300, y: 300 },
    active: false,
    description: (
      <p>
        Approximately 380,000 African enslaved persons werre forced into America
        as a result of the transatlantic slave trade.Today, there are roughly
        37,000,000 descendants of African enslaved person residing in America.
      </p>
    ),
  },
  {
    name: "carribean",
    coords: { x: 440, y: 450 },
    active: false,
    description: (
      <p>
        Approximately 5,000,000 African enslaved persons were forced into the
        Caribbean Islands as a result of the transatlantic slave trade. Today,
        there are roughly 40,000,000 descendants of African enslaved persons
        residing in the Caribbean.
      </p>
    ),
  },

  {
    name: "spain",
    coords: { x: 1130, y: 260 },
    active: false,
    description: (
      <p>
        Approximately 1,100,000 African enslaved persons were forced into Spain
        as a result of the transatlantic slave trade.Today, there are roughly
        1,000,000 descendants of African enslaved persons residing in Spain.
      </p>
    ),
  },
  {
    name: "portugal",
    coords: { x: 1080, y: 233 },
    active: false,
    description: (
      <p>
        Approximately 6,000,000 African enslaved persons were forced into
        Portugal as a result of the transatlantic slave trade. Today, there are
        roughly 450,000 descendants of African enslaved persons residing in
        Portugal.
      </p>
    ),
  },

  {
    name: "france",
    coords: { x: 1190, y: 180 },
    active: false,
    description: (
      <p>
        1,400,000 African enslaved persons were forced into France as a result
        of the transatlantic slave trade.Today, there are roughly 3,000,000
        descendants of African enslaved persons residing in France.
      </p>
    ),
  },
  {
    name: "denmark",
    coords: { x: 1240, y: 70 },
    active: false,
    description: (
      <p>
        Approximately 100,000 African enslaved persons were forced into Denmark
        as a result of the transatlantic slave trade. Today, there are roughly
        250,000 descendants of African enslaved persons residing in Denmark.
      </p>
    ),
  },
  {
    name: "netherland",
    coords: { x: 1210, y: 110 },
    active: false,
    description: (
      <p>
        Approximately 550,000 African enslaved persons were forced into the
        Netherlands as a result of the transatlantic slave trade. Today, there
        are roughly the same amount of descendants of African enslaved people
        residing in the Netherlands.
      </p>
    ),
  },
];

let funfacts = [
  {
    name: "canada",
    coords: { x: 270, y: 50 },
    description: (
      <p>
        North Preston, the largest Black community in Nova Scotia by population,
        has the highest concentration of African Canadians of any community in
        Canada. Nova Scotians are the direct descendants of the runaway slaves
        from the United States namely, The Black Loyalist.
      </p>
    ),
    active: false,
  },
  {
    name: "usa",
    coords: { x: 230, y: 230 },
    description: (
      <p>
        In the United States, one in four cowboys was Black, despite the stories
        told in popular books and movies.
      </p>
    ),
    active: false,
  },
  {
    name: "southamerica",
    coords: { x: 740, y: 800 },
    description: (
      <p>Brazil is the only country in South America that speaks Portuguese.</p>
    ),
    active: false,
  },
  {
    name: "carribean",
    coords: { x: 480, y: 430 },
    description: (
      <p>
        The Caribbean islands get their name from the indigenous Carib tribes
        who migrated to the islands from South America.
      </p>
    ),
    active: false,
  },
  {
    name: "europe",
    coords: { x: 1100, y: 140 },
    description: (
      <p>
        Little Kingston (named after the capital city of jamaica) is home to a
        vibrant Jamaican community located in the U.K
      </p>
    ),
    active: false,
  },
  {
    name: "westafrica",
    coords: { x: 1100, y: 550 },
    active: false,
    description: (
      <p>
        The population of west africa is roughly 400 million people -- that’s
        roughly 6.5 times greater than south african population of 60 million
        people.
      </p>
    ),
  }
];

const mapbutton = {
  type: "",
  coords: { x: 0, y: 0 },
  dimension: { x: 0, y: 0 },
  active: false,
  text: "",
};

let slides = [
  {
    type: "init",
    active: false,
    map: {
      darkness: 0.5,
      blurLevel: 0,
      freezed: false,
      position: { x: 0, y: 0 },
    },
    locations: "all",
    ignoreLocation: ["nigeria"],
    popups: "all",
    funfacts: "all",
    mapbutton: {
      active: true,
      type: "visible",
      coords: { x: 1200, y: 540 },
      text: "Tour West Africa",
    },
  },
  ...nigeriaSlides,
  ...southamericaSlides,
  ...europeSlides,
  ...carribeanSlides,
  ...slideUsa,
  ...canadaSlides,
];

const popup = {
  type: "",
  active: false,
  description: "",
};

const triangle = {
  image: Triangle,
  active: false,
  position: { x: 650, y: 150 },
};

const flag = {
  type: "start",
  active: false,
  position: { x: 650, y: 150 },
};

const tourEnd = {
  active: false,
};

const state = {
  map,
  locations,
  popups,
  funfacts,
  slides,
  menu,
  tourstart,
  mapbutton,
  popup,
  triangle,
  flag,
  tourEnd,
};

export default state;
