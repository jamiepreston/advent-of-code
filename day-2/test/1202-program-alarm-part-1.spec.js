import IntcodeComputer from '../src/1202-program-alarm-part-1';
import code from './test-data.js';

describe('1202-program-alarm-part-1', () => {
  describe('#opcodeComputer', () => {
    it('should initialise', () => {
      const inputCode = [
        1,9,10,3,
        2,3,11,0,
        99,
        30,40,50
      ];
      const intcodeComputer = new IntcodeComputer(inputCode);
      expect(intcodeComputer.code).toEqual(inputCode);
    });

    describe('singleStep', () => {
      it('should step through once', () => {
        const inputCode = [
          1,9,10,3,
          2,3,11,0,
          99,
          30,40,50
        ];
        const intcodeComputer = new IntcodeComputer(inputCode);
        intcodeComputer.singleStep();
        const expectedResult = [
          1,9,10,70,
          2,3,11,0,
          99,
          30,40,50
        ];
        expect(intcodeComputer.code).toEqual(expectedResult);
      });

      it('should step through twice', () => {
        const inputCode = [
          1,9,10,3,
          2,3,11,0,
          99,
          30,40,50
        ];
        const intcodeComputer = new IntcodeComputer(inputCode);
        intcodeComputer.singleStep();
        intcodeComputer.singleStep();
        const expectedResult = [
          3500,9,10,70,
          2,3,11,0,
          99,
          30,40,50
        ];
        expect(intcodeComputer.code).toEqual(expectedResult);
      });
    });
  });

  describe('execute', () => {
    it('should execute a single step program with addition', () => {
      const inputCode = [1,0,0,0,99];
      const intcodeComputer = new IntcodeComputer(inputCode);
      const expectedResult = [2,0,0,0,99];
      const result = intcodeComputer.execute();

      expect(result).toEqual(expectedResult);
    });
    it('should execute a single step program with multiplication', () => {
      const inputCode = [2,3,0,3,99];
      const intcodeComputer = new IntcodeComputer(inputCode);
      const expectedResult = [2,3,0,6,99];
      const result = intcodeComputer.execute();

      expect(result).toEqual(expectedResult);
    });

    it('should execute a multi step program', () => {
      const inputCode = [1,1,1,4,99,5,6,0,99];
      const intcodeComputer = new IntcodeComputer(inputCode);
      const expectedResult = [30,1,1,4,2,5,6,0,99];
      const result = intcodeComputer.execute();

      expect(result).toEqual(expectedResult);
    });

    it('should execute a multi step program and stop at 99', () => {
      const inputCode = [
        1,9,10,3,
        2,3,11,0,
        99,
        30,40,50
      ];
      const intcodeComputer = new IntcodeComputer(inputCode);
      const expectedResult = [
        3500,9,10,70,
        2,3,11,0,
        99,
        30,40,50
      ];
      const result = intcodeComputer.execute();

      expect(result).toEqual(expectedResult);
    });

    it('should solve the given puzzle', () => {
      const intcodeComputer = new IntcodeComputer(code);
      const expectedResult = 4090701;
      const [result] = intcodeComputer.execute();

      expect(result).toEqual(expectedResult);
    });
  });
});
