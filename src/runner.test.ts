import { runner } from './runner';

describe('Runner simple cases', () => {
  it('1*32', () => {
    expect(runner('1*32')).toEqual(32);
  });

  it('2*32', () => {
    expect(runner('2*32')).toEqual(64);
  });

  it('2+32', () => {
    expect(runner('2 + 32')).toEqual(34);
  });
});

describe('Runner tripled/mixed cases', () => {
  it('2*2*3', () => {
    expect(runner('2*2*3')).toEqual(12);
  });

  it('2*2+3', () => {
    expect(runner('2*2+3')).toEqual(7);
  });

  it('2+2*3', () => {
    expect(runner('2+2*3')).toEqual(8);
  });
});

describe('Runner long cases', () => {
  it('20+1*10-5*3', () => {
    expect(runner('20+1*10-5*3')).toEqual(15);
  });

  it('20-10*10/5-3', () => {
    expect(runner('20-10*10/5-3')).toEqual(-3);
  });
});

describe('Runner factorial cases', () => {
  it('4!*10-5*3', () => {
    expect(runner('4!*10-5*3')).toEqual(225);
  });

  it('20-10*10/5-3+3!', () => {
    expect(runner('20-10*10/5-3+3!')).toEqual(3);
  });
});

describe('Runner power cases', () => {
  it('4^3-5', () => {
    expect(runner('4^3-5')).toEqual(59);
  });

  it('2^5-32+3!', () => {
    expect(runner('2^5-32+3!')).toEqual(6);
  });
});

describe('Runner squaring cases', () => {
  it('4**+5', () => {
    expect(runner('4**+5')).toEqual(21);
  });

  it('32-2**', () => {
    expect(runner('32-2**')).toEqual(28);
  });
});
