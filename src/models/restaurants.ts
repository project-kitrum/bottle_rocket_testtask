import { Id } from './common'

enum Category {
  Burgers = 'Burgers',
  Seafood = 'Seafood',
  TapHouse = 'Tap House',
  WingJoint = 'Wing Joint',
  Japanese = 'Japanese',
  Mexican = 'Mexican',
  BarAndGrill = 'Bar and Grill',
  TexMex = 'Tex Mex',
  PreparedEats = 'Prepared Eats',
  Pub = 'Pub',
  CoffeeAndBreakfast = 'Coffee and Breakfast',
  Thai = 'Thai',
  FastFoodBurgers = 'Fast Food Burgers'
}

type Contact = {
  phone: string;
  formattedPhone: string;
  twitter: string;
}

type Location = {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

export type Restaurant = {
  id: Id;
  name: string;
  backgroundImageURL: string;
  category: Category;
  contact: Contact;
  location: Location;
}
