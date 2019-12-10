import IntcodeComputer from '../src/1202-program-alarm-part-1';
import code from './test-data.js';

describe('1202-program-alarm-part-1', () => {
  describe('#opcodeComputer', () => {
    it('should initialise', () => {
      const intcodeComputer = new IntcodeComputer(code);
      expect(intcodeComputer.code).toEqual(code);
    });
  });
});
