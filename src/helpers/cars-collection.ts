import Car from '../types/car.js';
import Brand from '../types/brand.js';
import Model from '../types/model.js';
import CarJoined from '../types/car-joined.js';

// type CarsCollectionProps = {};

export class CarsCollection {
  constructor(private brands: Brand[], private cars: Car[], private models: Model[]) {}

  private joinCar(carId: string): CarJoined | undefined {
    const foundCar: Car | undefined = this.cars.find((carObj: Car) => carObj.id === carId);
    if (!foundCar) return;

    const foundModel: Model | undefined = this.models.find(
      (modelObj: Model) => foundCar.modelId === modelObj.id
    );
    if (!foundModel) return;

    const foundBrand: Brand | undefined = this.brands.find(
      (brandObj: Brand) => foundModel.brandId === brandObj.id
    );
    if (!foundBrand) return;
    const { modelId, ...restCar } = foundCar;

    const joinedCar: CarJoined = {
      ...restCar,
      brand: foundBrand.title,
      model: foundModel.title,
    };

    return joinedCar;
  }
}

export default CarsCollection;
