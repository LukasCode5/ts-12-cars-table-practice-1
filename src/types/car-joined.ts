import { Car } from './car.js';
import { Brand } from './brand.js';
import { Model } from './model.js';

type CarJoined = {
  id: Pick<Car>;
  price: number;
  year: number;
  brand: string;
  model: string;
};

export default CarJoined;
