// https://adventofcode.com/2019/day/1
// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
export const getFuelRequiredForModule = mass =>
  Math.floor(mass / 3) - 2;

export const getTotalFuelRequired = modulesList =>
  modulesList.reduce((runningTotal, moduleMass) =>
    runningTotal + getFuelRequiredForModule(moduleMass)
  , 0);