import {
  getFuelRequiredForModuleV1,
  getTotalFuelRequiredV1,
  getTotalFuelRequiredV2,
  getFuelRequiredForModuleV2,
} from './fuel-requirements';
import allModules from './all-modules.js';

describe('fuel-requirements', () => {
  describe('#getFuelRequiredForModuleForModule', () => {
    it('should return 2 for a mass of 12.', () => {
      const mass = 12;
      const expectedResult = 2;
      const result = getFuelRequiredForModuleV1(mass);
      expect(result).toEqual(expectedResult);
    });

    it('should return 2 for a mass of 14.', () => {
      const mass = 14;
      const expectedResult = 2;
      const result = getFuelRequiredForModuleV1(mass);
      expect(result).toEqual(expectedResult);
    });

    it('should return 654 for a mass of 1969.', () => {
      const mass = 1969;
      const expectedResult = 654;
      const result = getFuelRequiredForModuleV1(mass);
      expect(result).toEqual(expectedResult);
    });

    it('should return 33583 for a mass of 100756.', () => {
      const mass = 100756;
      const expectedResult = 33583;
      const result = getFuelRequiredForModuleV1(mass);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getTotalFuelRequiredV1', () => {
    it('should return the fuel required for a few small modules.', () => {
      const smallModuleList = [
        1969,
        14,
        12,
      ];
      const expectedResult = 658;
      const result = getTotalFuelRequiredV1(smallModuleList);
      expect(result).toEqual(expectedResult);
    });

    it('should return the fuel required for all modules in the ship.', () => {
      const expectedResult = 3256794;
      const result = getTotalFuelRequiredV1(allModules);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getFuelRequiredForModuleV2', () => {
    it('Should return 0 for fuel requirement of 2', () => {
      const fuelRequired = 2;
      const expectedResult = 0;
      const result = getFuelRequiredForModuleV2(fuelRequired);
      expect(result).toEqual(expectedResult);
    });

    it('Should return 312 for fuel requirement of 654', () => {
      const fuelRequired = 654;
      const expectedResult = 312;
      const result = getFuelRequiredForModuleV2(fuelRequired);
      expect(result).toEqual(expectedResult);
    });

    it('Should return 312 for fuel requirement of 33583', () => {
      const fuelRequired = 33583;
      const expectedResult = 16763;
      const result = getFuelRequiredForModuleV2(fuelRequired);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getTotalFuelRequiredV2', () => {
    it('should return the total fuel required for a few small modules.', () => {
      const smallModuleList = [
        14,
        1969,
        100756,
      ];
      const expectedResult = 51314;
      const result = getTotalFuelRequiredV2(smallModuleList);
      expect(result).toEqual(expectedResult);
    });

    it('should return the  the total fuel required for all modules in the ship.', () => {
      const expectedResult = 4882337;
      const result = getTotalFuelRequiredV2(allModules);
      expect(result).toEqual(expectedResult);
    });
  });
});
