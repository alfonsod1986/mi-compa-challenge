export const MIN_SEQUENCE_SIZE = 4;
const MIN_SENQUENCE_FOUND = 2;

const quantifierNucleotideRegex = new RegExp(
  `(A{${MIN_SEQUENCE_SIZE}}|T{${MIN_SEQUENCE_SIZE}})|C{${MIN_SEQUENCE_SIZE}}|G{${MIN_SEQUENCE_SIZE}}`,
  'g'
);

export const hasTheSameSize = (dna: string[]) => dna.every(sequence => sequence.length === dna[0].length);

export const isNxNTable = (dna: string[]) => dna.length >= MIN_SEQUENCE_SIZE && dna.length === dna[0].length;

const isMutantSequence = (sequence: string) => (sequence.match(quantifierNucleotideRegex) ? true : false);

const generateDNAMatrix = (dna: string[]) => dna.map(sequence => sequence.split(''));

const analyze = (dna: string[]) => {
  const dnaMatrix = generateDNAMatrix(dna);

  let mutantSequencesFound = 0;
  let leftObliqueSequence = '';
  let rightObliqueSequence = '';
  let startAt = 0;

  for (let i = 0; i < dnaMatrix.length; i++) {
    const horizontalSequence = dnaMatrix[i].join('');
    mutantSequencesFound += Number(isMutantSequence(horizontalSequence) && 1);

    if (mutantSequencesFound >= MIN_SENQUENCE_FOUND) {
      break;
    }

    leftObliqueSequence += horizontalSequence.substring(startAt, startAt + 1);
    mutantSequencesFound += Number(isMutantSequence(leftObliqueSequence) && 1);

    if (mutantSequencesFound >= MIN_SENQUENCE_FOUND) {
      break;
    }

    rightObliqueSequence += dnaMatrix[i]
      .reverse()
      .join('')
      .substring(startAt, startAt + 1);
    mutantSequencesFound += Number(isMutantSequence(rightObliqueSequence) && 1);

    startAt++;
    if (mutantSequencesFound >= MIN_SENQUENCE_FOUND) {
      break;
    }

    for (let j = 0; j < horizontalSequence.length; j++) {
      if (i + 1 >= dnaMatrix.length) {
        break;
      }
      const complementarySequence = dnaMatrix
        .slice(0, i)
        .map(sequence => sequence[j])
        .join('');
      const verticalSequence = complementarySequence + dnaMatrix[i + 1][j];

      mutantSequencesFound += Number(isMutantSequence(verticalSequence) && 1);

      if (mutantSequencesFound >= MIN_SENQUENCE_FOUND) {
        break;
      }
    }
  }
  return mutantSequencesFound >= MIN_SENQUENCE_FOUND;
};

export const isMutant = (dna: string[]) => analyze(dna);
