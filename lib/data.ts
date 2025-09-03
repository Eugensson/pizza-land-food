import {
  RiYoutubeLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "react-icons/ri";

export const parallaxItems = [
  {
    src: "/chilli-1.png",
    width: 160,
    height: 84,
    alt: "Chilli Image",
    className: "top-6 left-4",
    factorX: 0.2,
    factorY: 0.3,
  },
  {
    src: "/chilli-2.png",
    width: 130,
    height: 84,
    alt: "Chilli Image",
    className: "top-16 -left-4",
    factorX: 0.4,
    factorY: 0.4,
  },
  {
    src: "/garlic-1.png",
    width: 84,
    height: 72,
    alt: "Garlic Image",
    className: "top-80 -left-24",
    factorX: 0.6,
    factorY: 0.6,
  },
  {
    src: "/garlic-2.png",
    width: 100,
    height: 72,
    alt: "Garlic Image",
    className: "top-[22rem] -left-8",
    factorX: 0.3,
    factorY: 0.6,
  },
  {
    src: "/garlic-3.png",
    width: 100,
    height: 72,
    alt: "Garlic Image",
    className: "top-96 -left-20",
    factorX: 0.4,
    factorY: 1,
  },
  {
    src: "/leaves.png",
    width: 180,
    height: 72,
    alt: "Basilic leaves Image",
    className: "top-96 left-12",
    factorX: 0.2,
    factorY: 0.2,
  },
];

export const sizeOptions = [
  { label: "Small", value: "small", width: 60, height: 60 },
  { label: "Medium", value: "medium", width: 70, height: 70 },
  { label: "Large", value: "large", width: 80, height: 80 },
];

export const crustOptions = [
  { label: "Traditional", value: "traditional" },
  { label: "Thin", value: "thin" },
];

export const pizzas = [
  {
    id: "1",
    name: "capricciosa",
    description:
      "Savor the perfect blend of cherry tomatoes, sweet corn, and fresh tomatoes, bringing a juicy freshness to every bite. The heat of spicy jalapeños adds a bold kick, balanced by the rich, nutty notes of aged Parmesan. A vibrant mix of flavors for a truly satisfying taste!",
    image: "/capricciosa.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "2",
    name: "cheesy",
    description:
      "Indulge in the ultimate cheesy delight with a bold twist! This pizza combines gooey melted cheese with juicy cherry tomatoes, sweet corn, and fresh tomatoes, creating a perfect balance of sweetness and freshness. A touch of spicy jalapeños adds heat, while aged Parmesan brings a rich, nutty depth. A true feast for cheese lovers!",
    image: "/cheesy.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "3",
    name: "hawaii",
    description:
      "Experience a bold twist on a classic! This vibrant pizza blends juicy cherry tomatoes, sweet corn, and fresh tomatoes for a refreshing bite. A kick of spicy jalapeños adds heat, while aged Parmesan brings a rich, savory finish. A perfect mix of tropical sweetness and fiery zest!",
    image: "/hawaii.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "4",
    name: "italian",
    description:
      "A taste of Italy with a fiery kick! This pizza features juicy cherry tomatoes, sweet corn, and fresh tomatoes, delivering a burst of freshness. Spicy jalapeños add bold heat, while aged Parmesan provides a rich, nutty finish. A perfect harmony of classic Italian flavors with a modern twist!",
    image: "/italian.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "5",
    name: "margherita",
    description:
      "Enjoy a timeless favorite with a fiery kick! Our Margherita pizza starts with a rich tomato base and fresh mozzarella, topped with cherry tomatoes, sweet corn, and fresh tomatoes for added freshness. A touch of spicy jalapeños brings a bold twist, while a generous sprinkle of aged Parmesan adds a creamy finish. A classic reimagined!",
    image: "/margherita.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "6",
    name: "pepperoni",
    description:
      "Satisfy your cravings with our bold Pepperoni Heatwave Pizza! Topped with sizzling pepperoni slices, this pizza is enhanced with the freshness of cherry tomatoes, sweet corn, and fresh tomatoes. Spicy jalapeños add a fiery kick, while a sprinkle of aged Parmesan rounds out the flavor with a rich, savory finish. A perfect balance of spice, savoriness, and freshness!",
    image: "/pepperoni.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "7",
    name: "quattro formaggi",
    description:
      "Indulge in a rich, cheesy masterpiece with a bold twist! Our Quattro Formaggi Inferno Pizza is topped with four delicious cheeses, creating a creamy and decadent base. Added to this are cherry tomatoes, sweet corn, and fresh tomatoes for a burst of freshness. Spicy jalapeños bring a fiery heat, while aged Parmesan adds a savory finish to balance the richness. A perfect blend of creamy, spicy, and fresh flavors!",
    image: "/quattro-formaggi.webp",
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "8",
    name: "quattro stagioni",
    description:
      "A pizza for every season! The Quattro Stagioni Spice Pizza combines four distinct flavors to deliver a dynamic taste experience. Topped with cherry tomatoes, sweet corn, and fresh tomatoes, it brings a mix of freshness and sweetness. Spicy jalapeños add a fiery twist, and a dusting of aged Parmesan finishes it off with a rich, savory note. A seasonal blend of fresh, spicy, and savory!",
    image: "/quattro-stagioni.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "9",
    name: "tonno",
    description:
      "Dive into the savory goodness of our Tonno Spice Delight Pizza! Featuring tender tuna with the freshness of cherry tomatoes, sweet corn, and fresh tomatoes, this pizza is full of vibrant, balanced flavors. Spicy jalapeños add the perfect heat, while aged Parmesan brings a rich, nutty finish. A delightful combination of savory, fresh, and fiery elements!",
    image: "/tonno.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: "10",
    name: "vegetarian",
    description:
      "For those who love vibrant, fresh flavors with a bit of spice, the Veggie Heatwave Pizza is your perfect choice! Topped with cherry tomatoes, sweet corn, and fresh tomatoes, it offers a refreshing burst in every bite. Spicy jalapeños bring the heat, while a sprinkle of aged Parmesan adds a creamy, savory finish. A fresh and fiery delight for any vegetable lover!",
    image: "/vegetarian.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
];

export const socialLinks = [
  {
    label: "Youtube",
    icon: RiYoutubeLine,
    link: "https://www.youtube.com",
  },
  {
    label: "Facebook",
    icon: RiFacebookFill,
    link: "https://www.facebook.com",
  },
  {
    label: "Instagram",
    icon: RiInstagramLine,
    link: "https://www.instagram.com",
  },
  {
    label: "TwitterX",
    icon: RiTwitterXFill,
    link: "https://www.x.com",
  },
];
