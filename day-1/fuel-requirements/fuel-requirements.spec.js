import {
  getFuelRequiredForModule,
  getTotalFuelRequired,
} from './fuel-requirements';
import allModules from './all-modules.js';

describe('fuel-requirements', () => {
  describe('#getFuelRequiredForModuleForModule', () => {
    it('should return 2 for a mass of 12.', () => {
      const mass = 12;
      const expectedResult = 2;
      const result = getFuelRequiredForModule(mass);
      expect(result).toEqual(expectedResult);
    });

    it('should return 2 for a mass of 14.', () => {
      const mass = 14;
      const expectedResult = 2;
      const result = getFuelRequiredForModule(mass);
      expect(result).toEqual(expectedResult);
    });

    it('should return 654 for a mass of 1969.', () => {
      const mass = 1969;
      const expectedResult = 654;
      const result = getFuelRequiredForModule(mass);
      expect(result).toEqual(expectedResult);
    });

    it('should return 33583 for a mass of 100756.', () => {
      const mass = 100756;
      const expectedResult = 33583;
      const result = getFuelRequiredForModule(mass);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('#getTotalFuelRequired', () => {
    it('should return the mass of a few small modules.', () => {
      const smallModuleList = [
        1969,
        14,
        12,
      ];
      const expectedResult = 658;
      const result = getTotalFuelRequired(smallModuleList);
      expect(result).toEqual(expectedResult);
    });

    it('should return the mass of all modules in the ship.', () => {
      const expectedResult = 3256794;
      const result = getTotalFuelRequired(allModules);
      expect(result).toEqual(expectedResult);
    });
  });
});