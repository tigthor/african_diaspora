// reparationhub@123
// info@reparationhub.com
// Importing nigeria slide story images
import ImageNigeria1 from "../img/slide-nigeria/slide-nigeria-1.png";
import ImageNigeria2 from "../img/slide-nigeria/slide-nigeria-2.png";
import ImageNigeria3 from "../img/slide-nigeria/slide-nigeria-3.png";
import ImageNigeria4 from "../img/slide-nigeria/slide-nigeria-4.png";
import ImageNigeria5 from "../img/slide-nigeria/slide-nigeria-5.png";
import ImageNigeria6 from "../img/slide-nigeria/slide-nigeria-6.png";

// Importing south america story images
import ImageSouthamerica1 from "../img/slide-southamerica/slide-southamerica-1.png";
import ImageSouthamerica2 from "../img/slide-southamerica/slide-southamerica-2.png";
import ImageSouthamerica3 from "../img/slide-southamerica/slide-southamerica-3.png";
import ImageSouthamerica4 from "../img/slide-southamerica/slide-southamerica-4.png";
import ImageSouthamerica5 from "../img/slide-southamerica/slide-southamerica-5.png";

// Importing europe slide images
import ImageEurope1 from "../img/slide-europe/slide-europe-1.png";
import ImageEurope2 from "../img/slide-europe/slide-europe-2.png";
import ImageEurope3 from "../img/slide-europe/slide-europe-3.png";
import ImageEurope4 from "../img/slide-europe/slide-europe-4.png";
import ImageEurope5 from "../img/slide-europe/slide-europe-5.png";

// Importing carribean slide images
import ImageCarribean1 from "../img/slide-carribean/slide-carribean-1.png";
import ImageCarribean2 from "../img/slide-carribean/slide-carribean-2.png";
import ImageCarribean3 from "../img/slide-carribean/slide-carribean-3.png";
import ImageCarribean4 from "../img/slide-carribean/slide-carribean-4.png";
import ImageCarribean5 from "../img/slide-carribean/slide-carribean-5.png";

// Importing usa slides

import ImageUsa1 from "../img/slide-usa/slide-usa-1.png";
import ImageUsa2 from "../img/slide-usa/slide-usa-2.png";
import ImageUsa3 from "../img/slide-usa/slide-usa-3.png";
import ImageUsa4 from "../img/slide-usa/slide-usa-4.png";
import ImageUsa5 from "../img/slide-usa/slide-usa-5.png";
import ImageUsa6 from "../img/slide-usa/slide-usa-6.png";

// Importing canada slide images
import ImageCanada1 from "../img/slide-canada/slide-canada-1.png";
import ImageCanada2 from "../img/slide-canada/slide-canada-2.png";
import ImageCanada3 from "../img/slide-canada/slide-canada-3.png";
import ImageCanada4 from "../img/slide-canada/slide-canada-4.png";
import ImageCanada5 from "../img/slide-canada/slide-canada-5.png";

export const tourDescription = [
  {
    name: "westafrica",
    title: "The West African Slave Trade",
    description: (
      <p className="tour-start-desc">
        The West African slave trade formed one of the most pivotal experiences
        in Africa's history. With the scramble and partition of Africa by the
        Portuguese and other European superpowers in the early 15th century,
        this commenced a dark period of slave trade in the history of West
        Africa.
        <br />
        <br />
        After discovery the coast of West Africa in one of its voyages,
        Portuguese soldiers started to capture Africans and hold them as slaves
        from the coast. Due to its proximity to the water, it was easy for the
        Portuguese to capture Africans and easily ship them to their home
        country.
        <br />
        <br />
        On this journey, we will take you through an in-depth interactive
        experience on the history of slave trade in West Africa, and you will
        attempt to experience some of the harsh realities that have left many
        Africans in the diaspora.
      </p>
    ),
  },
  {
    name: "eastafrica",
    title: "The East African Slave Trade",
    description: (
      <p className="tour-start-desc">
        The slave trade in East Africa really took off from the 17th century. More and
        more merchants from Oman settled in Zanzibar. The island took on an even more
        important role in the international trade of goods due to the large trade at the
        Swahili coast and consequently also in the slave trade. This is how the largest
        slave market in East Africa was created.
        <br />
        <br />
        East Africa was a late participant in the transatlantic slave trade. 
        It was only in he 1770s that a regular trade in slaves to the French islands of Mauritius and
        Réunion began from points on the East African coast. Small numbers of slaves had been carried around 
        the Cape for more than a century. But as planters on St Domingue cried out for labour,
        this trade became more profitable and systematic, particularly as the French 
        king agreed to ubsidise the shipment of slaves to the island.
        <br />
        <br />
        In this journey, we will explore the history of slavery in East Africa, 
        you will explore the rigorous environment of slave trade in East Africa.
      </p>
    ),
  },
];

// Nigeria slide data
//====================================
export const nigeriaSlides = [
  {
    type: "intro",
    active: false,
    description: (
      <p>
        On this tour, you will explore the historical events of the slave trade
        in Nigeria.
        <br />
        <br />
        You will explore tales of how the colonialists invaded Africa, and led
        its people into the diaspora.
      </p>
    ),
    map: {
      darkness: 0.8,
      zoomLevel: 1.6,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: -100 },
    },
    flag: { active: true, type: "start", position: { x: 1200, y: 475 } },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        The West African territory now known as Nigeria was first discovered in
        1472 by researchers from Portugal who were seeking a sea route to Asia.
        <br />
        <br />
        Their names were Joao de Santarem, Lopo Goncalves, Pero Escobar and
        Fernao do Po.
        <br />
        <br />
        The Portuguese were shocked to see established civilizations that
        rivalled those in Europe.
      </p>
    ),
    image: ImageNigeria1,
    map: {
      darkness: 0.8,
      zoomLevel: 1.5,
      freezed: false,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    flag: { active: false },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        An interesting fact is that the name 'Nigeria' was not given to the
        Nigerians themselves. However, by the European colonizers.
        <br />
        <br />
        Prior to this, the four main kingdoms that made up the country were
        Borno, Hausa in the north, Benin and Oyo in the south.
        <br />
        <br />
        Each had its own unique and artistic identity.
      </p>
    ),
    image: ImageNigeria2,
    map: {
      darkness: 0.8,
      zoomLevel: 1.4,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        Mainly driven by the goal of finding a suitable trade route with Asia,
        the Portuguese sailors actually discovered Nigeria by mistake.
        <br />
        <br />
        <br />
        The Portuguese wanted a shipping route that would make more economic
        sense and would be more cost-effective. However, when they arrived, they
        discovered that the land was very similar to theirs.
      </p>
    ),
    image: ImageNigeria3,
    map: {
      darkness: 0.8,
      zoomLevel: 1.3,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        As at 1471, Portuguese ships had ventured into the Niger Delta, although
        they did not know what it was at the time, they quickly encountered the
        Benin Kingdom, and were shocked at the opulence and level of wealth the
        land displayed.
        <br />
        <br />
        In 1481, emissaries from the King of Portugal visited the court of the
        Oba of Benin. This sparked the beginning of a long relationship between
        the Portuguese and people from Benin.
      </p>
    ),
    image: ImageNigeria4,
    map: {
      darkness: 0.8,
      zoomLevel: 1.2,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        The people of Benin welcomed the Portuguese with open arms, but that
        would become the downfall of the people.
        <br />
        <br />
        They maintained a good relationship, and the Portuguese even received
        payments for joining the people of Benin in wars. At a point, Portuguese
        even came to be spoken at the palace of the Oba of Benin.
        <br />
        <br />
        Gwatto, the port of Benin, became the depot for handling peppers, ivory
        and increasing numbers of slaves offered by the Oba in exchange for
        beads, textiles, tools and weapons.
      </p>
    ),
    image: ImageNigeria5,
    map: {
      darkness: 0.8,
      zoomLevel: 1.1,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "nigeria",
    active: false,
    description: (
      <p>
        Despite the flourishing trade relationship, one state in the Benin
        Kingdom, 'Edo', was reluctant to be a part of the transatlantic slave
        trade. The Edo people believed that selling their brothers would have
        consequences on their land.
        <br />
        <br />
        The Portuguese took what they could get, and began to trade slaves on
        the Gold Coast. The port of Benin and the Gold Coast of Benin became
        famous for its trade in slaves, and this marked start of the movement of
        West Africans into the diaspora. This activity led to majority of Black
        people being disenfranchised and unware of their origins.
      </p>
    ),
    image: ImageNigeria6,
    map: {
      darkness: 0.8,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -330, y: -80 },
    },
    locations: ["nigeria"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },
];

// South slide data
//====================================
export const southamericaSlides = [
  {
    type: "stop",
    active: false,
    title: "1ST STOP",
    description: (
      <p>
        <span className="highlighted"> Transatlantic slave trade,</span> segment
        of the global slave trade that transported between 10 million and 12
        million enslaved Africans across the Atlantic Ocean to the Americas from
        the 16th to the 19th aka the african diaspora.
        <br />
        <br />
        The Triangular Trade routes covered Europe, Africa, the Americas and the
        West Indies. Our first stop on this african diaspora tour is{" "}
        <span className="highlighted">
          {" "}
          South America. Click on the map of South America.
        </span>
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: 0, y: -100 },
      blinking: true,
    },
    triangle: { active: true },
    locations: ["southamerica"],
    popups: [],
    funfacts: [],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica1,
    active: false,
    description: (
      <p>
        The history of Africans in Latin America is multifaceted and complex.
        Not all Africans were slaves, and for those who were, conditions were
        diverse depending on a number of factors, such as economics, politics,
        ecology and demographics.
        <br />
        <br />
        Europeans in Latin America used African labour in every conceivable form
        in every place they settled during the colonial period and beyond.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -250 },
      blinking: false,
    },
    triangle: { active: false },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica2,
    active: false,
    description: (
      <p>
        Colombia was a major destination for slave ships, with the town of
        Cartagena de Indias one of the most important ports through which which
        enslaved Africans entered Nueva Granada.
        <br />
        <br />
        Cartagena also or intra-Latin American slave trade, where slaves were
        sold on to various destinations in the Andes and beyond.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.9,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -190 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica3,
    active: false,
    description: (
      <p>
        Slaves carried out a wide range of tasks. They were squires, muleteers,
        cowboys, blacksmiths, domestic servants, gold miners, pearl divers,
        sugar cane cultivators etc. As in other parts of South America, the
        indigenous population decreased dramatically as a result of the arrival
        of the Spaniards.
        <br />
        <br />
        To compensate for the loss of indigenous labour, African slaves were
        transported in great numbers to certain south american regions.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.8,
      freezed: true,
      blurLevel: 4,
      position: { x: -320, y: -170 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },

  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica4,
    active: false,
    description: (
      <p>
        In spite of the authorities efforts, slaves continued to rise up, revolt
        and abscond throughout the colonial period and beyond. The vast
        territories were impossible for slave owners and authorities to fully
        monitor. More importantly, perhaps, was the influence of the indigenous
        peoples means of resistance.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 0.9,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -190 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },
  {
    type: "story",
    name: "southamerica",
    image: ImageSouthamerica5,
    active: false,
    description: (
      <p>
        The role of descendants of slaves in the building of the Panama Canal
        was enforced by the French who had previously built a railroad through
        Panama, linking the Atlantic to the Pacific, an undertaking that relied
        heavily on slave labour.
        <br />
        <br />
        However, the French never finished the canal, due to high death toll of
        workers. It is estimated that a total 22 K people died, a large number
        of whom were descendants of Africans.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -150, y: -200 },
      blinking: false,
    },
    locations: ["southamerica"],
    popups: ["southamerica"],
    funfacts: ["southamerica"],
    mapbutton: {
      active: false,
    },
  },
];

// Europe slide data
//====================================
export const europeSlides = [
  {
    type: "stop",
    active: false,
    title: "2ND STOP",
    description: (
      <p>
        Click on the map of <span className="highlighted">Europe</span> to see
        how africans further disappeared into the diaspora. Several european
        countries including the Netherland, Spain France, Portugal, Britian and
        Denmark played a major role in the transatlantic slave trade. We will
        focus on the U.K for illustration purposes.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: 0 },
      blinking: true,
      blinking: true,
    },
    locations: ["europe"],
    popups: [],
    funfacts: [],
  },

  {
    type: "story",
    name: "europe",
    image: ImageEurope1,
    active: false,
    description: (
      <p>
        Whilst slavery had no legal basis in England, the law was often
        misinterpreted. Black people previously enslaved in the colonies
        overseas and then brought to England by their owners, were often still
        treated as slaves.
        <br />
        <br />
        Some former believing this slaves got baptized would ensure their
        freedom. Others took advantage of being on English soil and absconded.
        Notices for runaway slaves featured in newspapers during this period.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.4,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: 150 },
      blinking: false,
    },
    locations: ["europe", "uk"],
    popups: ["europe", "spain", "portugal", "france", "denmark", "netherland"],
    funfacts: ["europe"],
  },
  {
    type: "story",
    name: "europe",
    image: ImageEurope2,
    active: false,
    description: (
      <p>
        Some entrepreneurs brought slaves to Britain, where they were kept in
        bondage, branded and forced to hard labor much in the same way black
        slaves were forced to hard labor in cotton fields and plantations in
        British colonies in North America.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.35,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: 150 },
      blinking: false,
    },
    locations: ["europe", "uk"],
    popups: ["europe", "spain", "portugal", "france", "denmark", "netherland"],
    funfacts: ["europe"],
  },
  {
    type: "story",
    name: "europe",
    image: ImageEurope3,
    active: false,
    description: (
      <p>
        There are few areas in the United Kingdom that were not affected by the
        trade in enslaved Africans. The clues to the history in places like
        Jamaica Road, Tobago Street, Guinea Street, Black Boys Hill, Whiteladies
        Road or parish records and inscribed gravestones.
        <br />
        <br />
        In Cumbria, parish records bear witness to several black people living
        in the area, many having arrived as servants.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.3,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: 100 },
      blinking: false,
    },
    locations: ["europe", "uk"],
    popups: ["europe", "spain", "portugal", "france", "denmark", "netherland"],
    funfacts: ["europe"],
  },
  {
    type: "story",
    name: "europe",
    image: ImageEurope4,
    active: false,
    description: (
      <p>
        In Liverpool, coffee houses were often sites for the sale of slaves. In
        1765, a very fine negro girl about eight years of age, very healthy was
        sold at auction at Georges Coffee-house and very large scale of 11
        Africans was held at the Exchange Coffee House in Water Street in 1766.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.25,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: 100 },
      blinking: false,
    },
    locations: ["europe", "uk"],
    popups: ["europe", "spain", "portugal", "france", "denmark", "netherland"],
    funfacts: ["europe"],
  },
  {
    type: "story",
    name: "europe",
    image: ImageEurope5,
    active: false,
    description: (
      <p>
        The sugar plantations were key to creating Britain's most valuable
        colonies. By the end of the 18th century, Bristol, Glasgow and Liverpool
        had become major ports handling the cargoes brought back.
        <br />
        <br />
        Britain's slavery economy was enormous and extremely complex. It is
        clear that the economy benefited enormously from the exploitation of
        African slave labor in the Caribbean.
        <br />
        <br />
        Slavery and colonialism were intimately linked to the development of
        much of the financial infrastructure that enabled Britain to emerge as
        the economic and imperial global powerhouse of the nineteenth century.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.2,
      freezed: true,
      blurLevel: 4,
      position: { x: -200, y: 100 },
      blinking: false,
    },
    locations: ["europe", "uk"],
    popups: ["europe", "spain", "portugal", "france", "denmark", "netherland"],
    funfacts: ["europe"],
  },
];

// Carribean slide data
//====================================
export const carribeanSlides = [
  {
    type: "stop",
    active: false,
    title: "3RD STOP",
    description: (
      <p>
        Click on the map of the <span className="highlighted">Caribbean</span>{" "}
        to see how africans further disappeared into the diaspora.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.5,
      freezed: true,
      blurLevel: 4,
      position: { x: 200, y: 0 },
      blinking: true,
    },
    locations: ["carribean"],
    popups: [],
    funfacts: [],
  },

  {
    type: "story",
    name: "carribean",
    image: ImageCarribean1,
    active: false,
    description: (
      <p>
        The Caribbean is a region of islands and coastal territory in the
        Americas that is roughly defined by its interaction with the Caribbean
        Sea. The earliest interactions between Europeans and indigenous people
        in the New World took place in the Caribbean.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.4,
      freezed: true,
      blurLevel: 4,
      position: { x: 80, y: 0 },
      blinking: false,
    },
    locations: ["carribean"],
    popups: ["carribean"],
    funfacts: ["carribean"],
  },

  {
    type: "story",
    name: "carribean",
    image: ImageCarribean2,
    active: false,
    description: (
      <p>
        Beginning in the late fifteenth and early sixteenth centuries, Europeans
        began to exploit the region for mineral and agricultural production,
        launching unprecedented demographic changes as indigenous people were
        systematically replaced with people of African origins.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.3,
      freezed: true,
      blurLevel: 4,
      position: { x: 100, y: 0 },
      blinking: false,
    },
    locations: ["carribean"],
    popups: ["carribean"],
    funfacts: ["carribean"],
  },
  {
    type: "story",
    name: "carribean",
    image: ImageCarribean3,
    active: false,
    description: (
      <p>
        Africans were forcibly brought to British owned colonies in the
        Caribbean and sold as slaves to work on plantations.
        <br />
        <br />
        Those engaged in the trade were driven by the huge financial gain to be
        made, both in the Caribbean and at home in Britain.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.2,
      freezed: true,
      blurLevel: 4,
      position: { x: 100, y: 0 },
      blinking: false,
    },
    locations: ["carribean"],
    popups: ["carribean"],
    funfacts: ["carribean"],
  },
  {
    type: "story",
    name: "carribean",
    image: ImageCarribean4,
    active: false,
    description: (
      <p>
        Enslaved people constantly rebelled against slavery right up until
        emancipation in 1834. Most spectacular were the slave revolts during the
        18th and 19th centuries, including: Tackys rebellion in 1760s Jamaica,
        the Haitian Revolution (1789), Fedon's 1790 revolution in Grenada, the
        1816 Barbados slave revolt led by Bussa, and the major 1831 slave revolt
        in Jamaica led by Sam Sharpe.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.1,
      freezed: true,
      blurLevel: 4,
      position: { x: 50, y: 0 },
      blinking: false,
    },
    locations: ["carribean"],
    popups: ["carribean"],
    funfacts: ["carribean"],
  },
  {
    type: "story",
    name: "carribean",
    image: ImageCarribean5,
    active: false,
    description: (
      <p>
        The British slave trade officially ended in 1807, making the buying and
        selling of slaves from Africa illegal: however, slavery itself had not
        ended.
        <br />
        <br />
        Passed legislation brought about a period of apprenticeship with freedom
        coming in 1838. Even after the end of slavery and apprenticeship the
        Caribbean was not totally free. Former enslaved people received no
        compensation and had limited representation in government.
        <br />
        <br />
        Indentured labour from India and China was introduced after slavery.
        After indenture, Indians and Africans struggled to own land and create
        their own communities.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: 0, y: 0 },
      blinking: false,
    },
    locations: ["carribean"],
    popups: ["carribean"],
    funfacts: ["carribean"],
  },
];

// Usa slide data
//====================================
export const slideUsa = [
  {
    type: "stop",
    active: false,
    title: "4TH STOP",
    description: (
      <p>
        Click on the map of <span className="highlighted">America</span> to see
        how africans further disappeared into the diaspora.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.5,
      freezed: true,
      blurLevel: 4,
      position: { x: 400, y: 200 },
      blinking: true,
      blinking: true,
    },
    locations: ["usa"],
    popups: [],
    funfacts: [],
  },
  {
    type: "story",
    name: "usa",
    image: ImageUsa1,
    active: false,
    description: (
      <p>
        In 1619, 20 and odd Negroes arrived off the coast of Virginia, where
        where they were bought by English colonists in Jamestown.
        <br />
        <br />
        These captive Africans are often cited as the first enslaved people in
        the United States.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.4,
      freezed: true,
      blurLevel: 4,
      position: { x: 350, y: 150 },
      blinking: false,
    },
    locations: ["usa"],
    popups: ["usa"],
    funfacts: ["usa"],
  },
  {
    type: "story",
    name: "usa",
    image: ImageUsa5,
    active: false,
    description: (
      <p>
        Those first Africans who landed in the US were destined for a life of
        servitude. They were sold or traced to wealthy plantation owners in
        Hampton or sent to a settlement on the James River. They had to work the
        crop, the corn fields, the tobacco fields.
        <br />
        <br />
        Africans had no official status in the American colonies until
        Massachusetts became the first to legalize slavery in 1641.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.35,
      freezed: true,
      blurLevel: 4,
      position: { x: 300, y: 150 },
      blinking: false,
    },
    locations: ["usa"],
    popups: ["usa"],
    funfacts: ["usa"],
  },
  {
    type: "story",
    name: "usa",
    image: ImageUsa6,
    active: false,
    description: (
      <p>
        While those in the South held more slaves to tend labor intensive crops,
        many whites in the more industrialized, urban North kept slaves as
        domestic servants or skilled laborers. And though Northern states
        abolished slavery some of them gradually they still profited from the
        institution.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.3,
      freezed: true,
      blurLevel: 4,
      position: { x: 250, y: 100 },
      blinking: false,
    },
    locations: ["usa"],
    popups: ["usa"],
    funfacts: ["usa"],
  },
  {
    type: "story",
    name: "usa",
    image: ImageUsa3,
    active: false,
    description: (
      <p>
        Life for most enslaved men and women was brutal and harsh. As slavery
        expanded in the Lower South in the early 19th century, legal codes
        governing the behavior of enslaved men and women became more harsh.
        Punishments for infractions were severe. Whipping was prescribed for
        minor offenses, and branding, mutilation, and even death were employed
        as punishment for more serious As the nineteenth century progressed,
        many abolitionists united to form numerous antislavery societies.
        <br />
        <br />
        Slavery in the US was eventually abolished 1865. Blacks continue to
        fight for equal rights in the US.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.2,
      freezed: true,
      blurLevel: 4,
      position: { x: 150, y: 50 },
      blinking: false,
    },
    locations: ["usa"],
    popups: ["usa"],
    funfacts: ["usa"],
  },

  {
    type: "story",
    name: "usa",
    image: ImageUsa4,
    active: false,
    description: (
      <p>
        The enslavement of Black people in the United States created wealth,
        opportunity, and prosperity for millions of Americans. As American
        slavery evolved, an elaborate and enduring mythology about the
        inferiority of Black people was created to legitimate, perpetuate, and
        defend slavery.
        <br />
        <br />
        This mythology survived slaverys formal abolition following the Civil
        War.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: 0, y: 0 },
      blinking: false,
    },
    locations: ["usa"],
    popups: ["usa"],
    funfacts: ["usa"],
  },
];

// Canada slide data
//====================================
export const canadaSlides = [
  {
    type: "stop",
    active: false,
    title: "5TH STOP",
    description: (
      <p>
        Click on the map of <span className="highlighted">Canada</span> to see
        how africans further disappeared into the diaspora.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.5,
      freezed: true,
      blurLevel: 4,
      position: { x: 280, y: 200 },
      blinking: true,
      blinking: true,
    },
    locations: ["canada"],
    popups: [],
    funfacts: [],
  },

  {
    type: "story",
    name: "canada",
    image: ImageCanada1,
    active: false,
    description: (
      <p>
        When Canadians talk about slavery, they often point with pride to the
        role their country played as a safe haven for Americans escaping
        captivity via the Underground Railroad.
        <br />
        <br />
        This, however, is only half the story. Like the United States, Britian,
        South America and Caribbean Canada has its own history of slavery, a
        history we should never forget.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.4,
      freezed: true,
      blurLevel: 4,
      position: { x: 280, y: 180 },
      blinking: false,
    },
    locations: ["canada"],
    popups: ["canada"],
    funfacts: ["canada"],
  },

  {
    type: "story",
    name: "canada",
    image: ImageCanada2,
    active: false,
    description: (
      <p>
        Slavery in what is now Canada predates the arrival of Europeans, with
        some Indigenous peoples enslaving prisoners taken in war. Europeans
        brought a different kind of slavery to North America, however. Europeans
        viewed slavery in racial terms, with Indigenous and African people
        serving and white people ruling as masters.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.3,
      freezed: true,
      blurLevel: 4,
      position: { x: 280, y: 140 },
      blinking: false,
    },
    locations: ["canada"],
    popups: ["canada"],
    funfacts: ["canada"],
  },
  {
    type: "story",
    name: "canada",
    image: ImageCanada3,
    active: false,
    description: (
      <p>
        The colony of New France, founded in the early 1600s, was the first
        major settlement in what is now Canada. Slavery was a common practice in
        the territory.
        <br />
        <br />
        When New France was conquered by the British in 1759, records revealed
        that approximately 3,600 enslaved had lived in the settlement since its
        beginnings. The vast majority of them were Indigenous but Black enslaved
        people were also present because of the transatlantic slave trade.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.2,
      freezed: true,
      blurLevel: 4,
      position: { x: 170, y: 100 },
      blinking: false,
    },
    locations: ["canada"],
    popups: ["canada"],
    funfacts: ["canada"],
  },
  {
    type: "story",
    name: "canada",
    image: ImageCanada4,
    active: false,
    description: (
      <p>
        Slavery continued after the British conquest of New France in 1763. The
        territory was eventually renamed British North America, and black
        enslaved people came to replace Indigenous enslaved people.
        <br />
        <br />
        Compared to the United States, enslaved people made up a much smaller
        proportion of the It would be wrong, however, to suggest that enslaved
        people in British North America were well treated.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1.1,
      freezed: true,
      blurLevel: 4,
      position: { x: 100, y: 50 },
      blinking: false,
    },
    locations: ["canada"],
    popups: ["canada"],
    funfacts: ["canada"],
  },
  {
    type: "story",
    name: "canada",
    image: ImageCanada5,
    active: false,
    description: (
      <p>
        African Americans escape from enslavement in the American South to to
        free Northern states or to Canada. After the war, about 3,000 Black fled
        to Canada - then British North America - on the promise of freedom and a
        farm. Most were given access to rocky, hardscrabble lots often on the
        worst soil- in the maritime province of Nova Scotia.
        <br />
        <br />
        But they weren't given the ownership white settlers received. To this
        day, the descendants of runaway slaves from America live on land that is
        theirs but they do not not legally own. To this day, the fight continues
        for land owneship by African Canadians.
      </p>
    ),
    map: {
      darkness: 0.7,
      zoomLevel: 1,
      freezed: true,
      blurLevel: 4,
      position: { x: 0, y: 0 },
      blinking: false,
    },
    locations: ["canada"],
    popups: ["canada"],
    funfacts: ["canada"],
  },
];
