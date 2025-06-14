import hero_bike1 from "../assets/img/hero-svg/hero-bike-1.png";
import hero_bike2 from "../assets/img/hero-svg/hero-bike-2.png";
import hero_bike3 from "../assets/img/hero-svg/hero-bike-3.png";
import hero_bike4 from "../assets/img/hero-svg/hero-bike-4.png";
import hero_bike5 from "../assets/img/hero-svg/hero-bike-5.png";

const data = {
  totalProducts: [
    {
      id: "pd1-2-1",
      categ: "Gravel Bike",
      productImgs: [hero_bike1, hero_bike2, hero_bike3],
      framesizes: ["M", "L", "XL"],
      desc: {
        pd_name:
          "BMC KAIUS 01 LTD - Carbon Gravel Bike - 2024 - peacock spider",
        feature: [
          "Premium carbon layup frame",
          "Race-oriented gravel geometry",
          "Aerocore design",
          "ICS Carbon Evo handlebar/stem unit with fully integrated cable routing",
        ],
        instock: 2,
        rating: [],
      },
      img: hero_bike1,
      model: "SRAM XPLR XG-1271",
      price: 11999,
      discount: 50,
      default_frame_size: "M",
    },
    {
      id: "pd1-2-2",
      productImgs: [hero_bike1, hero_bike2, hero_bike3],
      framesizes: ["M", "L", "XL"],
      categ: "Gravel Bike",
      desc: {
        pd_name: "BMC KAIUS 01 ONE - Carbon Gravel Bike - 2023 - white & black",
        feature: [
          "Premium carbon layup frame",
          "Race-oriented gravel geometry",
          "Aerocore design",
          "ICS Carbon Evo handlebar/stem unit with fully integrated cable routing",
        ],
        instock: 3,
        rating: [],
      },
      img: hero_bike2,
      model: "SRAM Force AXS XPLR XG-1271",
      price: 11999,
      discount: null,
      default_frame_size: "L",
    },
    {
      id: "pd1-2-3",
      productImgs: [hero_bike1, hero_bike2, hero_bike3],
      framesizes: ["M", "L", "XL"],
      categ: "Gravel Bike",
      desc: {
        pd_name:
          "BMC KAIUS 01 TWO - Carbon Gravel Bike - 2024 - carbon black / brushed blue",
        feature: [
          "Premium carbon layup frame",
          "Race-oriented gravel geometry",
          "Aerocore design",
          "ICS Carbon Evo handlebar/stem unit with fully integrated cable routing",
        ],
        instock: 2,
        rating: [],
      },
      img: hero_bike3,
      model: "SRAM XPLR XG-1271",
      price: 8999,
      discount: null,
      default_frame_size: "M",
    },
    {
      id: "pd1-2-4",
      productImgs: [hero_bike1, hero_bike2, hero_bike3],
      framesizes: ["M", "L", "XL"],
      categ: "E-Bikes",
      desc: {
        pd_name:
          "Orbea RISE M20 Electric Mountain Bike - 2023 - Chameleon Goblin Green (gloss/matt)",
        feature: [
          "OMR lightweight carbon frame",
          "Fox shock and Fox 34 Float fork with 140mm travel",
          "1x12-speed Shimano SLX gears",
          "Dropper post with remote control",
        ],
        instock: 2,
        rating: [],
      },
      img: hero_bike4,
      model: "Shimano CS-M7100",
      price: 4655,
      discount: null,
      default_frame_size: "L",
    },
    {
      id: "pd1-2-5",
      productImgs: [hero_bike1, hero_bike2, hero_bike3],
      framesizes: ["M", "L", "XL"],
      categ: "Road Bikes",
      desc: {
        pd_name:
          "CUBE LITENING AERO C:68X Race - Carbon Roadbike - 2024 - Teamline",
        feature: [
          "C:68X Carbon Fiber Technology",
          "Monocoque Advanced Twin Mold Technology",
          "Aero Optimized Geometry",
          "Full integrated cable routing",
        ],
        instock: 2,
        rating: [],
      },
      img: hero_bike5,
      model: "Shimano Ultegra CS-R8100",
      price: 6048,
      discount: null,
      default_frame_size: "M",
    },
    {
      id: "pd1-2-6",
      productImgs: [hero_bike1, hero_bike2, hero_bike3],
      framesizes: ["M", "L", "XL"],
      categ: "Road Bikes",
      desc: {
        pd_name:
          "CUBE LITENING AERO C:68X Race - Carbon Roadbike - 2024 - Teamline",
        feature: [
          "C:68X Carbon Fiber Technology",
          "Monocoque Advanced Twin Mold Technology",
          "Aero Optimized Geometry",
          "Full integrated cable routing",
        ],
        instock: 0,
        rating: [],
      },
      img: hero_bike5,
      model: "Shimano Ultegra CS-R8100",
      price: 6048,
      discount: 5,
      default_frame_size: "L",
    },
  ],
  showAccount: false,
  showCart: false,
  showHeart: false,
  isHaveAccount: true,
};

export default data;
