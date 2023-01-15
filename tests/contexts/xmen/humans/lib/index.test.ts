import { hasTheSameSize, isNxNTable, isMutant } from '../../../../../src/contexts/xmen/humans/lib';

describe('hasTheSameSize', () => {
  it('Should return true if send a dna with equal sequence sizes', () => {
    const dna = ['ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA'];

    expect(hasTheSameSize(dna)).toBeTruthy();
  });

  it('Should return false if send a dna with different sequence sizes', () => {
    const dna = ['ATGCGAAATTCCCCG', 'A', 'ATGCGAA', 'ATG', 'ATGCGAA', 'ATGCGAA'];

    expect(hasTheSameSize(dna)).toBeFalsy();
  });
});

describe('isNxNTable', () => {
  it('Should return true if send a dna  N x N table', () => {
    const dna = ['ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA'];

    expect(isNxNTable(dna)).toBeTruthy();
  });

  it('Should return false if send a dna with different sequence sizes', () => {
    const dna = ['ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA'];

    expect(isNxNTable(dna)).toBeFalsy();
  });
});

describe('Verifying DNA sequences', () => {
  it('Should return true', () => {
    const dna = ['ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA', 'ATGCGAA'];

    expect(isMutant(dna)).toBeTruthy();
  });

  it('Should return false', () => {
    const dna = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'];

    expect(isMutant(dna)).toBeFalsy();
  });
});
