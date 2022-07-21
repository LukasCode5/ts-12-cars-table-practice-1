import Car from './car.js';
import Brand from './brand.js';
import Model from './model.js';

type CarJoined = Omit<Car, 'modelId'> & {
  brand: Brand['title'];
  model: Model['title'];
};

export default CarJoined;
