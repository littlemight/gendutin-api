import { capSentence, randElm } from '@/utils';
import { getRows } from './gsheets';
// import { buzz1, buzz2, buzz3, conjunction, prefix } from './words';

// buzzSentence: buzz1 buzz2? buzz3
export const generateBuzzSentence = (
  arrBuzz1: string[],
  arrBuzz2: string[],
  arrBuzz3: string[]
): string => {
  return `${randElm(arrBuzz1)} ${
    Math.random() >= 0.5 ? randElm(arrBuzz2) + ' ' : ''
  }${randElm(arrBuzz3)}`;
};

// topik: prefix? buzzSentence conjunction buzzSentence
export const generateTopik = async () => {
  const prefix = await getRows('prefix');
  const conjunction = await getRows('conjunction');
  const buzz1 = await getRows('buzz1');
  const buzz2 = await getRows('buzz2');
  const buzz3 = await getRows('buzz3');

  const buzzSentence1 = `${
    Math.random() >= 0.5 ? randElm(prefix) + ' ' : ''
  }${generateBuzzSentence(buzz1, buzz2, buzz3)}`;
  if (Math.random() >= 0.5) {
    return capSentence(buzzSentence1);
  }
  const buzzSentence2 = generateBuzzSentence(buzz1, buzz2, buzz3);
  return `${capSentence(buzzSentence1)} ${randElm(conjunction)} ${capSentence(
    buzzSentence2
  )}`;
};
