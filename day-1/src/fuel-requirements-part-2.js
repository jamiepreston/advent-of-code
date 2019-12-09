// https://adventofcode.com/2019/day/1

export const getFuelRequiredForModule = (fuelRequired) => {
  const additionalFuel = Math.floor(fuelRequired / 3) - 2;
  return additionalFuel <= 0
    ? 0
    : additionalFuel + getFuelRequiredForModule(additionalFuel);
};

export const getTotalFuelRequired = modulesList =>
  modulesList.reduce((runningTotal, moduleMass) => {
    const basicFuelRequired = getFuelRequiredForModule(moduleMass);
    return runningTotal + basicFuelRequired;
  }, 0);
