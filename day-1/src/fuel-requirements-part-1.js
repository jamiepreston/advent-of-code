// https://adventofcode.com/2019/day/1

export const getFuelRequiredForModule = mass =>
  Math.floor(mass / 3) - 2;

export const getTotalFuelRequired = modulesList =>
  modulesList.reduce((runningTotal, moduleMass) =>
    runningTotal + getFuelRequiredForModule(moduleMass)
  , 0);
