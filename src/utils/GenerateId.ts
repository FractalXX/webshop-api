import RandExp from 'randexp';

export default function generateId(): string {
  const randExp = new RandExp(/(\w|\d){24}/);
  return randExp.gen();
}
