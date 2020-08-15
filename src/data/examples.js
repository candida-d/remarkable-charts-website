const examples = [
  // Please add in alphabetical order of title.

  /*
  Valid sample datasets

  fires
  trustInMediaReporting
  ruralAndUrbanPopulation
  howTheIphoneShapedApple
  globalCo2Emissions
  wikipediaViews
  formula1
  */

  {
    title: "Bar chart",
    description: "The Amazon in Brazil is on fire - how bad is it?",
    dataset: "fires",
    preview: require("./showcase/forest-fires.png"),
    website: "/showcase",
    source: "https://1drv.ms/x/s!AsHTN9MDEVo1oDHgnnCd2o0GTg8o?e=ovbuMi",
    pinned: false,
  },
  {
    title: "Bar chart",
    description: "Hamilton closing in on Schumacher",
    preview: require("./showcase/vaping.png"),
    dataset: "formula1",
    website: "/showcase",
    source: "https://1drv.ms/x/s!AsHTN9MDEVo1oDHgnnCd2o0GTg8o?e=ovbuMi",
    pinned: true,
  },
  {
    title: "Area chart",
    description: "Carboin emissions",
    preview: require("./showcase/love-island.png"),
    dataset: "globalCo2Emissions",
    website: "/showcase",
    source: "https://1drv.ms/x/s!AsHTN9MDEVo1oDHgnnCd2o0GTg8o?e=ovbuMi",
    pinned: true,
  },
];

export default examples;
