import {
  getFuelRequiredForModule,
  getTotalFuelRequired,
} from '../src/fuel-requirements-part-2';
import allModules from './all-modules.js';

describe('fuel-requirements-part-2', () => {
  describe('#getFuelRequiredForModule', () => {
    it('Should return 0 for fuel requirement of 2', () => {
      const fuelRequired = 2;
      const expectedResult = 0;
      const result = getFuelRequiredForModule(fuelRequired);
      expect(result).toEqual(expectedResult);
    });

    it('Should return 312 for fuel requirement of 654', () => {
      const fuelRequired = 654;
      const expectedResult = 312;
      const result = getFuelRequiredForModule(fuelRequired);
      expect(result).toEqual(expectedResult);
    });

    it('Should return 312 for fuel requirement of 33583', () => {
      const fuelRequired = 33583;
      const expectedResult = 16763;
      const result = getFuelRequiredForModule(fuelRequired);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getTotalFuelRequired', () => {
    it('should return the total fuel required for a few small modules.', () => {
      const smallModuleList = [
        14,
        1969,
        100756,
      ];
      const expectedResult = 51314;
      const result = getTotalFuelRequired(smallModuleList);
      expect(result).toEqual(expectedResult);
    });

    it('should return the  the total fuel required for all modules in the ship.', () => {
      const expectedResult = 4882337;
      const result = getTotalFuelRequired(allModules);
      expect(result).toEqual(expectedResult);
    });
  });
});
