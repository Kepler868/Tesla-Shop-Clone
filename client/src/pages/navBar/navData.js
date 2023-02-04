import wallConnector from "../../assets/images/lowerSwiper/wallConnector.avif";
import onTheRoad from "../../assets/images/SideBar/onTheRoad.avif";
import parts from "../../assets/images/SideBar/parts.avif";
import modelS from "../../assets/images/SideBar/model_S.avif";
import model3 from "../../assets/images/SideBar/model_3.avif";
import modelX from "../../assets/images/SideBar/model_X.avif";
import modelY from "../../assets/images/SideBar/model_Y.avif";
import men from "../../assets/images/SideBar/NavMen.avif";
import women from "../../assets/images/SideBar/NavWomen.avif";
import kids from "../../assets/images/SideBar/NavKids.avif";
import flyout from "../../assets/images/SideBar/flyout.avif";
import backPack from "../../assets/images/SideBar/MegaBackPack.avif";
import bestSellers from "../../assets/images/SideBar/bestSellers.avif"
import bags from "../../assets/images/SideBar/bags.avif"
import miniTeslas from "../../assets/images/SideBar/miniTeslas.avif"
import drinkWare from "../../assets/images/SideBar/drinkWare.avif"
import outdoorTech from "../../assets/images/SideBar/outdoorTech.avif"
import giftCard from "../../assets/images/SideBar/giftCard.avif"


export const navList = [
  {
    category: "Charging",
    subCategories: [
      { title: "At Home", image: wallConnector },
      { title: "On The Road", image: onTheRoad },
      { title: "Parts", image: parts },
    ],
    promo: { title: "Wall Connector", image: wallConnector },
  },
  {
    category: "Vehicle Accessories",
    subCategories: [
      { title: "Model S", image: modelS },
      { title: "Model 3", image: model3 },
      { title: "Model X", image: modelX },
      { title: "Model Y", image: modelY },
    ],
    options: [
      "Best Sellers",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Floor Mats",
      "Parts",
      "Keys",
    ],
  },
  {
    category: "Apparel",
    subCategories: [
      { title: "Men", image: men },
      { title: "Women", image: women },
      { title: "Kids", image: kids },
    ],
    options: [
      "Best Sellers",
      "Tees",
      "Sweatshirts and Hoodies",
      "Outerwear",
      "Joggers",
      "Hats",
      "Socks",
    ],
    promo: { title: "Model X-mas Sweater", image: flyout },
  },
  {
    category: "Lifestyle",
    subCategories: [
      { title: "Best Sellers", image: bestSellers },
      { title: "Bags", image: bags },
      { title: "Mini Teslas", image: miniTeslas },
      { title: "Drinkware", image: drinkWare },
      { title: "Outdoors and Tech", image: outdoorTech },
      { title: "Gift Card", image: giftCard },
    ],
    promo: { title: "Mega [back] Pack", image: backPack },
  },
];
