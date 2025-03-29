import { v4 as uuidv4 } from "uuid";
import type { IProducts } from "../interfaces";

export const productsOfPaper: IProducts[] = [
  {
    name: "كرافت ازرق اسبانى",
    details: " مقاوم للمياه و الحرارة و عليه طبقة بولى ايثيلين",
    size: ["145x1 ", " 120x1 "],
    id: uuidv4(),
    thickness: "جرام 100",
    numOfsheets: "6",
    img: "spanishBlue.jpg",
  },
  {
    name: "كرافت بنى اسمنتى",
    details: " ورق مرن عالى الجودة super",
    size: ["120x1"],
    id: uuidv4(),
    thickness: "80 جرام",
    numOfsheets: "10",
    img: "asmanty.jpg",
  },
  {
    name: "كرافت ورق زبده",
    details: " ورق للرش و عازل للحرارة و يمنع تماسك الدهان بالورق",
    size: ["130x1"],
    id: uuidv4(),
    thickness: "جرام 30",
    numOfsheets: "20",
    img: "butter.jpg",
  },
  {
    name: "ورق مشجر ",
    details: "",
    size: ["3x180"],
    id: uuidv4(),
    thickness: "جرام 35",
    numOfsheets: "18/17",
    img: "gifts.jpg",
  },
  {
    name: "كرافت اسفنجى",
    details: " عليها طبقة سفنج و تحفظ من الرطوبة و سميك و يمتص الصدمات",
    size: ["3x2"],
    id: uuidv4(),
    thickness: "جرام 120",
    numOfsheets: "",
    img: "sponge.jpg",
  },
  {
    name: "كرافت رمادى",
    details: " ",
    size: ["130x1"],
    id: uuidv4(),
    thickness: "جرام 60",
    numOfsheets: "12",
    img: "gray.jpg",
  },
  {
    name: "كرافت سكر",
    details: "مقاوم للمياه و عليه طبقة بولى ايثيلين",
    size: ["130x1"],
    id: uuidv4(),
    thickness: "جرام 80",
    numOfsheets: "",
    img: "suger.jpg",
  },

  {
    name: " كرافت بنى اسبانى",
    details: " ",
    size: [" 135x1", "120x1"],
    id: uuidv4(),
    thickness: "جرام 100",
    numOfsheets: "6",
    img: "spanishBrown.jpg",
  },
  {
    name: "حليبى",
    details: "مقاوم للمياه ورق الحرارة بطبقة نيكل للتصدير",
    size: [" 145x1"],
    id: uuidv4(),
    thickness: "جرام 110",
    numOfsheets: "4",
    img: "milky.jpg",
  },
  {
    name: "ورق life",
    details: "فضى",
    size: [" 145x1"],
    id: uuidv4(),
    thickness: "جرام 40",
    numOfsheets: "8",
    img: "life.jpg",
  },
  {
    name: "ورق امريكى",
    details: "شغل تصدير",
    size: [" 130x1"],
    id: uuidv4(),
    thickness: "جرام 140",
    numOfsheets: "4",
    img: "american.jpg",
  },
  {
    name: "ورق برازيلى",
    details: "",
    size: [" 130x1"],
    id: uuidv4(),
    thickness: "جرام 80",
    numOfsheets: "8",
    img: "brazilian.jpg",
  },
  {
    name: "ورق المانى ابيض",
    details: "شغل تصدير",
    size: [" 130x1"],
    id: uuidv4(),
    thickness: "جرام 60",
    numOfsheets: "12",
    img: "whiteGermany.jpg",
  },
];

export const productsOfStretch: IProducts[] = [
  {
    size: ["50سم"],
    id: uuidv4(),
    img: "stretch.jpg",
    name: "استرتش ",
  },
  {
    size: ["10سم"],
    id: uuidv4(),
    img: "smallStretch.jpg",
    name: "استرتش ",
  },
];
export const productsOfBubbles: IProducts[] = [
  {
    size: ["50سم"],
    id: uuidv4(),
    img: "bubbles.jpg",
    name: "بابلز",
  },
];
export const productsOfString: IProducts[] = [
  {
    id: uuidv4(),
    img: "mdString.jpg",
    name: " خيط",
    details: "متوسط",
  },
  {
    details: "صغير",
    id: uuidv4(),
    img: "smString.jpg",
    name: "خيط",
  },
  {
    details: "كبير",
    id: uuidv4(),
    img: "bigString.jpg",
    name: "خيط",
  },
  {
    details: "جامبو",
    id: uuidv4(),
    img: "ultraString.jpg",
    name: "خيط",
  },
  {
    details: "صوف",
    id: uuidv4(),
    img: "minString.jpg",
    name: "خيط",
  },
];
export const productsOfFoam: IProducts[] = [
  {
    name: "فوم ",

    id: uuidv4(),
    thickness: "1مم",
    img: "foam-1m.jpg",
  },
  {
    name: "فوم ",

    id: uuidv4(),
    thickness: "2مم",
    img: "foam-2m.jpg",
  },
  {
    name: "فوم ",

    id: uuidv4(),
    thickness: "1سم",
    img: "foam-1cm.jpg",
  },
  {
    name: "فوم ",

    id: uuidv4(),
    thickness: "12مم",
    img: "foam-12m.jpg",
  },
  {
    name: "لوح فوم",

    id: uuidv4(),
    thickness: "2سم",
    img: "foam-2cm.jpg",
  },
];
export const productsOfTaps: IProducts[] = [
  {
    id: uuidv4(),
    img: "tap-1.jpg",
    name: "سلوتيب الكريستال",
    size: ["40, 60, 80, 100, 150, 200, 300 يارده"],
  },
];
export const productsOfCarton: IProducts[] = [
  {
    id: uuidv4(),
    img: " carton.jpg",
    name: " كرتون",
  },
];
