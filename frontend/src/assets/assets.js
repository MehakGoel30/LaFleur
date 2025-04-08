import logo from './logo.png';
import search_icon from './search_icon.png';
import profile_icon from './profile_icon.png';
import cart_icon from './cart_icon.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png'
import hero_img from './hero_img.png';
import hero2_img from './hero2_img.png';
import hero3_img from './hero3_img.png';
import download from './download.png';
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_img from './support_img.png'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import r1 from './r1.jpg'
import l1 from './l1.jpg'
import d1 from './d1.jpg'
import l2 from './l2.jpg'
import w1 from './w1.jpg'
import w2 from './w2.jpg'
import ps1 from './ps1.jpg'
import ps2 from './ps2.jpg'
import rr1 from './rr1.jpg'
import rr2 from './rr2.jpg'
import cb1 from './cb1.jpg'
import cb2 from './cb2.jpg'
import t1 from './t1.jpg'
import cross_icon from './cross_icon.png'
import star_icon from './star_icon.png'
import bin_icon from './bin_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import about_img from './about_img.jpg'
import contact_img from './contact_img.jpg'
import parcel_icon from './parcel_icon.svg';



export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img,
  hero2_img,
  hero3_img,
  download,
  exchange_icon,
  quality_icon,
  support_img,
  p1,
  p2,
  s1,
  s2,
  r1,l1,l2,w1,w2,ps1,ps2,rr1,rr2,d1,cb1,cb2,t1,cross_icon,star_icon,bin_icon,stripe_logo,razorpay_logo,about_img,
  contact_img,parcel_icon
};

export const products = [
    {
        _id: "aaaaa",
        name: "Blush Pink Peonies",
        description: "Soft and romantic peonies in gentle blush hues — perfect for heartfelt moments.",
        price:1999,
        image: [p1,p2],
        category: "Flowers",
        subCategory: "Bouquets",
        sizes: ["Small", "Medium", "Large"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Sunshine Yellow Tulips",
        description: "Bright yellow tulips bundled with greens to spread joy and sunshine.",
        price: 1299,
        image: [s2,s1],
        category: "Flowers",
        subCategory: "Fresh Stems",
        sizes: ["Small", "Medium", "Large"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Classic Red Roses",
        description: "A timeless bouquet of deep red roses, symbolizing love and admiration.",
        price:899,
        image: [r1],
        category: "Gifting",
        subCategory: "Hampers",
        sizes: ["Small", "Medium", "Large"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Pink Ruby Ranunculus",
        description: "Lush and layered pink ranunculus in vibrant ruby tones — bold yet graceful.",
        price:999,
        image: [rr1,rr2],
        category: "Flowers",
        subCategory: "Bouquets",
        sizes: ["Small", "Medium", "Large"],
        date: 1716621542448,
        bestseller: false
    },
    
    {
        _id: "aaaae",
        name: "White Orchid Elegance",
        description: "A Elegant white orchids, carefully arranged to bring grace and sophistication.",
        price:1999,
        image: [w1,w2],
        category: "Flowers",
        subCategory: "Fresh Stems",
        sizes: ["Small", "Medium", "Large"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Pastel Mixed Blooms",
        description: "A dreamy mix of pastel florals — roses, lilies, and daisies in a handcrafted arrangement.",
        price:899,
        image: [ps1,ps2],
        category: "Flowers",
        subCategory: "Bouquets",
        sizes: ["Small", "Medium", "Large"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Sweet Spring Daisies",
        description: "A cheerful bouquet of white and yellow daisies — light-hearted and bright.",
        price:1999,
        image: [d1],
        category: "Flowers",
        subCategory: "Fresh Stems",
        sizes: ["Small", "Medium", "Large"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Cherry Blue Bunch",
        description: "Delicate cherry blossoms — a symbol of beauty and renewal in every petal.",
        price:899,
        image: [cb2,cb1],
        category: "Gifting",
        subCategory: "Bouquets",
        sizes:["Small", "Medium", "Large"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Lavender Lilacs",
        description: "Delicate and fragrant lilacs in calming lavender shades — perfect for soothing the soul.",
        price:999,
        image: [l2,l1],
        category: "Gifting",
        subCategory: "Hampers",
        sizes: ["Small", "Medium", "Large"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaaj",
        name: "Garden Mix Harmony",
        description: "A vibrant blend of seasonal blooms to bring a splash of nature indoors.",
        price: 1099,
        image: [t1],
        category: "Flowers",
        subCategory: "Fresh Stems",
        sizes: ["Small", "Medium", "Large"],
        date: 1716622235448,
        bestseller: false
    }
]