export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  reviews: string[] | any[];
  description: string;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  icon: string;
  discount: string;
}
export interface HeaderProps {
  listings: PropertyProps[];
}
export interface ImagesProp {
  logo: string;
  alt: string;
}
export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}
export interface OptionsProp {
  title: string;
  subtitle: string;
}
