import { BsCartFill } from "react-icons/bs";
import { AiFillHome, AiFillHeart } from "react-icons/ai";

import Camera from "./assets/images/camera.png";
import Console from "./assets/images/console.png";
import Laptop from "./assets/images/laptop.png";
import Ranni from "./assets/images/ranni.png";
import Phone from "./assets/images/phone.png";
import Watch from "./assets/images/watch.png";
import Icerock2 from "./assets/images/icerock2.png";
import Icerock1 from "./assets/images/icerock1.png";
import Rubik1 from "./assets/images/rubik.png";
import rubik2 from "./assets/images/rubik2.png";
import coffee1 from "./assets/images/coffee1.png";
import coffee2 from "./assets/images/coffee2.png";
import coffee3 from "./assets/images/coffee3.png";
import coffee4 from "./assets/images/coffee4.png";
import pillow3 from "./assets/images/pillow3.png";
import pillow2 from "./assets/images/pillow2.png";
import mousepad1 from "./assets/images/mousepad1.png";
import mousepad2 from "./assets/images/mousepad2.png";
import mousepad3 from "./assets/images/mousepad3.png";
import animePillow from "./assets/images/anime-pillow.png";
import animePillow2 from "./assets/images/anime-pillow2.png";
import mouse from "./assets/images/mouse.png";
import mouse2 from "./assets/images/mouse2.png";
import keyboard1 from "./assets/images/keyboard.png";
import keyboard2 from "./assets/images/keyboard2.png";
import keyboard3 from "./assets/images/keyboard3.png";
import heardphone from "./assets/images/heardphone.png";
import iphone2 from "./assets/images/iphone2.png";
import glass1 from "./assets/images/glass1.png";
import console2 from "./assets/images/console2.png";
import watch2 from "./assets/images/watch2.png";
import airpod1 from "./assets/images/airpod1.png";
import juice from "./assets/images/pineapple-juice.png";
import shoe1 from "./assets/images/shoe1.png";
import coffeeMachine from "./assets/images/coffee-machine.png";

import banner1 from "./assets/images/banner1.png";
import banner2 from "./assets/images/banner2.png";
import banner3 from "./assets/images/banner3.png";

/* import react-icons */
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

export const nav = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome />,
    path: "/",
  },
  {
    id: 2,
    name: "Cart",
    icon: <BsCartFill />,
    path: "/cart",
  },
];

export const banner = [
  {
    id: 1,
    img: banner1,
    smallTitle: "Shop Now!",
    title: "Shop 'til you drop - without dropping your wallet!",
    desc: "Welcome to our online shopping paradise where you can find everything you need and more in one convenient place. From trendy clothing and stylish accessories to home goods and gadgets, we've got you covered.",
  },
  {
    id: 2,
    img: banner2,
    smallTitle: "Amazing Deals Await",
    title: "Unleash your shopping desires with us",
    desc: "Step into the world of fashion and beyond with our vast collection of products that cater to your every need. Whether you're looking for a stunning new outfit, the latest tech gadget, or stylish home decor, we've got it all.",
  },
  {
    id: 3,
    img: banner3,
    smallTitle: "Don't Miss Out!",
    title: "Experience the joy of shopping",
    desc: "At our shopping website, we believe that everyone should have access to the best products at the best prices. That's why we're committed to bringing you the latest and greatest items at unbeatable prices.",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Sony Cyber-shot RX100 III",
    img: Camera,
    desc: "Camera full-frame hightest of Canon, full 45 megapixel, quality 8K",
    price: 600,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 2,
    name: "DualSense Console PS5",
    img: Console,
    desc: "Bring gaming worlds to life - Feel your in-game actions and environment",
    price: 80,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 3,
    name: "MacBook Air M1",
    img: Laptop,
    desc: "Powerful Performance – Professional-quality editing and working",
    price: 1200,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 4,
    name: "Plushie Ranni Lovely Dolls",
    img: Ranni,
    desc: "Please do not put Ranni in the jar !!!! Best XMAS gift choice for anine fans",
    price: 30,
    isFavorite: false,
    quantity: 1,
    category: "Toy",
  },
  {
    id: 5,
    name: "iPhone 14 Pro, 128GB Purple",
    img: Phone,
    desc: "Dynamic Island, a magical new way to interact with iPhone.",
    price: 1400,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 6,
    name: "Blue Rock pure 70%",
    img: Icerock2,
    desc: "Very easy to use !!",
    price: 900,
    isFavorite: false,
    quantity: 1,
    category: "Special",
  },
  {
    id: 7,
    name: "Rubik 3x3",
    img: Rubik1,
    desc: "Ez, even noobs can solve this",
    price: 20,
    isFavorite: false,
    quantity: 1,
    category: "Toy",
  },
  {
    id: 8,
    name: "Coffee mixer type XX",
    img: coffee4,
    desc: "Very cool products 100% riu",
    price: 80,
    isFavorite: false,
    quantity: 1,
    category: "Coffee",
  },
  {
    id: 9,
    name: "Blue Rock pure 100% from Mr.White",
    img: Icerock1,
    desc: "better call saul. he can deal with it",
    price: 9999,
    isFavorite: false,
    quantity: 1,
    category: "Special",
  },
  {
    id: 10,
    name: "Rubik 4x4",
    img: rubik2,
    desc: "Still ez, you cant solve this you're gey",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Toy",
  },
  {
    id: 11,
    name: "Pillow Luxrury XS",
    img: pillow3,
    desc: "Soft and good design for sleep",
    price: 80,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 12,
    name: "Watch Ultra 49mm LTE",
    img: Watch,
    desc: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    price: 250,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 13,
    name: "Coffee mixer SA47",
    img: coffee3,
    desc: "Winning isn’t everything, but wanting to win is.",
    price: 90,
    isFavorite: false,
    quantity: 1,
    category: "Coffee",
  },
  {
    id: 14,
    name: "Pillow Normal T34",
    img: pillow2,
    desc: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 15,
    name: "Mousepad Bremeton Azurlane",
    img: mousepad1,
    desc: "Start where you are. Use what you have. Do what you can.",
    price: 300,
    isFavorite: false,
    quantity: 1,
    category: "Anime",
  },
  {
    id: 16,
    name: "Anime pillow Rem Limited",
    img: animePillow,
    desc: "Believe you can and you’re halfway there.",
    price: 400,
    isFavorite: false,
    quantity: 1,
    category: "Anime",
  },
  {
    id: 17,
    name: "Mouse Logitech G502 Hero High Performance",
    img: mouse2,
    desc: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    price: 200,
    isFavorite: false,
    quantity: 1,
    category: "Mouse",
  },
  {
    id: 18,
    name: "Mouse Delux M618 Plus RGB",
    img: mouse,
    desc: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    price: 90,
    isFavorite: false,
    quantity: 1,
    category: "Mouse",
  },
  {
    id: 19,
    name: "Coffee Zamboo ZB-68CF",
    img: coffee2,
    desc: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    price: 130,
    isFavorite: false,
    quantity: 1,
    category: "Coffee",
  },
  {
    id: 20,
    name: "Coffee Espresso Italiano Whole Bean",
    img: coffee1,
    desc: "The person who says it cannot be done should not interrupt the person who is doing it.",
    price: 230,
    isFavorite: false,
    quantity: 1,
    category: "Coffee",
  },
  {
    id: 21,
    name: "Keyboard Dareu EK810",
    img: keyboard1,
    desc: "The best revenge is massive success.",
    price: 250,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
  {
    id: 22,
    name: "Headphone Bang & Olufsen Beoplay H95",
    img: heardphone,
    desc: "I would rather die of passion than of boredom.",
    price: 120,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 23,
    name: "Mousepad Anime big buts",
    img: mousepad2,
    desc: "Winning isn’t everything, but wanting to win is.",
    price: 200,
    isFavorite: false,
    quantity: 1,
    category: "Anime",
  },
  {
    id: 24,
    name: "Mousepad Anime soft desgin",
    img: mousepad3,
    desc: "Definiteness of purpose is the starting point of all achievement.",
    price: 320,
    isFavorite: false,
    quantity: 1,
    category: "Anime",
  },
  {
    id: 25,
    name: "Iphone 13 XXS",
    img: iphone2,
    desc: "If you can dream it, you can achieve it.",
    price: 840,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 26,
    name: "Console Xbox One XA97",
    img: console2,
    desc: "If you want to lift yourself up, lift up someone else.",
    price: 90,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 27,
    name: "Anime pillow Rias Limited",
    img: animePillow2,
    desc: "The question isn’t who is going to let me; it’s who is going to stop me.",
    price: 700,
    isFavorite: false,
    quantity: 1,
    category: "Anime",
  },
  {
    id: 28,
    name: "Nielsen-Massey Madagascar VG53",
    img: coffeeMachine,
    desc: "A person who never made a mistake never tried anything new.",
    price: 880,
    isFavorite: false,
    quantity: 1,
    category: "Coffee",
  },
  {
    id: 29,
    name: "Keyboard IKBC CD87HR Dolch Brown",
    img: keyboard2,
    desc: "An unexamined life is not worth living.",
    price: 470,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
  {
    id: 30,
    name: "Keyboard Dareu A98 PRO Tri Mode Timeless",
    img: keyboard3,
    desc: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    price: 320,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
  {
    id: 31,
    name: "Glass 2185 C1",
    img: glass1,
    desc: "Remember no one can make you feel inferior without your consent.",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 32,
    name: "Avenue Of Americas Intravedere Men's Watch",
    img: watch2,
    desc: "Life shrinks or expands in proportion to one’s courage.",
    price: 950,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 33,
    name: "Airpod XC7647",
    img: airpod1,
    desc: "It’s not the years in your life that count. It’s the life in your years.",
    price: 270,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 34,
    name: "pineapple juice",
    img: juice,
    desc: "If you want to lift yourself up, lift up someone else.",
    price: 25,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 35,
    name: "Air Force 1 Low LE GS All White DH2920",
    img: shoe1,
    desc: "Our lives begin to end the day we become silent about things that matter.",
    price: 340,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
];

export const footer = {
  social: [
    <AiFillFacebook />,
    <AiFillInstagram />,
    <AiFillLinkedin />,
    <AiFillYoutube />,
    <AiFillGithub />,
  ],
  details: [
    {
      id: 1,
      title: "Product",
      links: [
        "Landing Page",
        "Popup Builder",
        "Web-design",
        "Content",
        "Integrations",
      ],
    },
    {
      id: 2,
      title: "Use Cases",
      links: [
        "Web-designers",
        "Marketerser",
        "Small Business",
        "Website Builder",
      ],
    },
    {
      id: 3,
      title: "Company",
      links: ["About Us", "Careers", "Terms", "Contact Us", "Team"],
    },
    {
      id: 4,
      title: "Resources",
      links: ["About Us", "Careers", "Terms", "Contact Us", "Team"],
    },
  ],
};

export const option = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Tech",
    value: "Tech",
  },
  {
    name: "Coffee",
    value: "Coffee",
  },
  {
    name: "Toy",
    value: "Toy",
  },
  {
    name: "Anime",
    value: "Anime",
  },
  {
    name: "Mouse",
    value: "Mouse",
  },
  {
    name: "Keyboard",
    value: "Keyboard",
  },
  {
    name: "Special",
    value: "Special",
  },
  {
    name: "Other",
    value: "Other",
  },
];

export const lastest = [
  {
    id: 10,
    name: "Rubik 4x4",
    img: rubik2,
    desc: "Still ez, you cant solve this you're gey",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Toy",
  },
  {
    id: 11,
    name: "Pillow Luxrury XS",
    img: pillow3,
    desc: "Soft and good design for sleep",
    price: 80,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 12,
    name: "Watch Ultra 49mm LTE",
    img: Watch,
    desc: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    price: 250,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 32,
    name: "Avenue Of Americas Intravedere Men's Watch",
    img: watch2,
    desc: "Life shrinks or expands in proportion to one’s courage.",
    price: 950,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 30,
    name: "Keyboard Dareu A98 PRO Tri Mode Timeless",
    img: keyboard3,
    desc: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    price: 320,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
  {
    id: 31,
    name: "Glass 2185 C1",
    img: glass1,
    desc: "Remember no one can make you feel inferior without your consent.",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 33,
    name: "Airpod XC7647",
    img: airpod1,
    desc: "It’s not the years in your life that count. It’s the life in your years.",
    price: 270,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 29,
    name: "Keyboard IKBC CD87HR Dolch Brown",
    img: keyboard2,
    desc: "An unexamined life is not worth living.",
    price: 470,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
];
