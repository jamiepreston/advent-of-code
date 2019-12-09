// https://adventofcode.com/2019/day/1

export const getFuelRequiredForModuleV1 = mass =>
  Math.floor(mass / 3) - 2;

export const getTotalFuelRequiredV1 = modulesList =>
  modulesList.reduce((runningTotal, moduleMass) =>
    runningTotal + getFuelRequiredForModuleV1(moduleMass)
  , 0);

export const getFuelRequiredForModuleV2 = (fuelRequired) => {
  const additionalFuel = Math.floor(fuelRequired / 3) - 2;
  return additionalFuel <= 0
    ? 0
    : additionalFuel + getFuelRequiredForModuleV2(additionalFuel);
};

export const getTotalFuelRequiredV2 = modulesList =>
  modulesList.reduce((runningTotal, moduleMass) => {
    const basicFuelRequired = getFuelRequiredForModuleV2(moduleMass);
    return runningTotal + basicFuelRequired;
  }, 0);
