// https://adventofcode.com/2019/day/2

const calculateValue = (code, position) => {
    const [
      command,
      firstPos,
      secondPos,
      indexToUpdate,
    ] = code.slice(position, position + 4);

    const firstVal = code[firstPos];
    const secondVal = code[secondPos];

    const newValue = command === 1
      ? firstVal + secondVal
      : firstVal * secondVal;

    return {
      newValue,
      indexToUpdate,
    };
};

class IntcodeComputer {

  constructor(code) {
    this.code = code;
    this.currentPosition = 0;
  }

  singleStep() {
    const command = this.code[this.currentPosition];

    if (![1, 2, 99].includes(command)) {
      throw new Error(`Unrecognized command: ${command}`);
    }

    if (command === 99) {
      this.currentPosition = this.currentPosition + 1;
      return 'STOP';
    }

    const {
      newValue,
      indexToUpdate,
    } = calculateValue(this.code, this.currentPosition);
    
    this.code[indexToUpdate] = newValue;
    this.currentPosition = this.currentPosition + 4;

    return 'CONTINUE';
  };

  execute() {
    let action = 'START';
    while (action !== 'STOP') {
      action = this.singleStep();
    }
    return this.code;
  }
};

export default IntcodeComputer;
