import { PropertyProps } from "@/interfaces";
import { ImagesProp } from "@/interfaces";
import { OptionsProp } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "John Doe",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/Image1.png",
    icon: "/assets/apartment 1.png",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Lewis Raven",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/image 11.png",
    icon: "/assets/home 1.png",
    discount: "30",
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Mary Taser",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/image 2.png",
    icon: "/assets/cabin 1.png",
    discount: "",
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Grace Monroe",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/image 3.png",
    icon: "/assets/castle-tower 1.png",
    discount: "15",
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Elvis Dave",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/image 4.png",
    icon: "/assets/cottage 1.png",
    discount: "20",
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "James Thomas",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/image 5.png",
    icon: "/assets/farm 1-1.png",
    discount: "",
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Juliet Rader",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/image 6.png",
    icon: "/assets/farm 1.png",
    discount: "10",
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Teklit Yun",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "/assets/image 8.png",
    icon: "/assets/island (1) 1.png",
    discount: "25",
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Carrie Taze",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/image 9.png",
    icon: "/assets/key-chain 1.png",
    discount: "",
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Kate Rover",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/image 11.png",
    icon: "/assets/living-room 1.png",
    discount: "40",
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Jerry Huge",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/image 12.png",
    icon: "/assets/apartment 1.png",
    discount: "50",
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Katie Yang",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/image 13.png",
    icon: "/assets/mansion 1.png",
    discount: "",
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Elton Mark",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/image 15.png",
    discount: "35",
    icon: "/assets/palm-tree 1.png",
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Amy Anne",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: "/assets/image 16.png",
    icon: "/assets/swimming-pool 1.png",
    discount: "",
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "James Trevor",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/image 18 (1).png",
    icon: "/assets/tent 1.png",
    discount: "20",
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "June May",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "/assets/image 2.png",
    icon: "/assets/treehouse (1) 1.png",
    discount: "25",
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Catherine Johnson",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/image 16.png",
    icon: "/assets/palm-tree 1.png",
    discount: "30",
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Jackson Lee",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "assets/image 2 (1).png",
    icon: "/assets/villa 1.png",
    discount: "",
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Gregory Smith",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/image 13.png",
    icon: "/assets/palm-tree 1.png",
    discount: "60",
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
     description: "A beautiful villa with ocean views and modern amenities.",
    reviews: [
      {
        name: "Susan Green",
        avatar: "/assets/reviewers/john.png",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking and the service was top-notch.",
      }],
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/image 13.png",
    icon: "/assets/vacations 1.png",
    discount: "",
  },
];

export const HERO_IMAGE = "/assets/Image1.png";

export const logo: ImagesProp = {
  logo: "/assets/Vector(1).png",
  alt: "ALX",
};
