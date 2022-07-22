import Car from '../types/car.js';
import Brand from '../types/brand.js';
import Model from '../types/model.js';
import CarJoined from '../types/car-joined.js';

// type CarsCollectionProps = {};

export class CarsCollection {
  constructor(private brands: Brand[], private cars: Car[], private models: Model[]) {}

  private joinCar(foundCar: Car): CarJoined {
    // senas budas
    // const foundCar: Car | undefined = this.cars.find((carObj: Car) => carObj.id === carId);
    // if (!foundCar) return;

    const foundModel: Model | undefined = this.models.find(
      (m: Model) => m.id === foundCar.modelId
    );
    let foundBrand: Brand | undefined;
    if (foundModel) {
      foundBrand = this.brands.find((b: Brand) => b.id === foundModel.brandId);
    }
    // sujungti i viena
    const { modelId, ...restCar } = foundCar;
    const joinedCar: CarJoined = {
      ...restCar,
      brand: foundBrand?.title || 'not found',
      model: foundModel?.title || 'not found',
    };
    return joinedCar;
  }

  get allCars(): CarJoined[] {
    return this.cars.map((carObj: Car) => this.joinCar(carObj));
  }
}

export default CarsCollection;
