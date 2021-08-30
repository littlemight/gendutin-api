import { capSentence, randElm } from '@/utils';
import { buzz1, buzz2, buzz3, conjunction, prefix } from './words';

// buzzSentence: buzz1 buzz2? buzz3
export const generateBuzzSentence = (): string => {
  return `${randElm(buzz1)} ${
    Math.random() >= 0.5 ? randElm(buzz2) + ' ' : ''
  }${randElm(buzz3)}`;
};

// topik: prefix? buzzSentence conjunction buzzSentence
export const generateTopik = () => {
  const buzzSentence1 = `${
    Math.random() >= 0.5 ? randElm(prefix) + ' ' : ''
  }${generateBuzzSentence()}`;
  if (Math.random() >= 0.5) {
    return capSentence(buzzSentence1);
  }
  const buzzSentence2 = generateBuzzSentence();
  return `${capSentence(buzzSentence1)} ${randElm(conjunction)} ${capSentence(
    buzzSentence2
  )}`;
};
