import fs from 'fs';
import { NlpManager } from 'node-nlp';
const manager = new NlpManager({ languages: ['ja'] });
if (fs.existsSync(`${__dirname}/../model.nlp`)) {
  manager.load(`${__dirname}/../model.nlp`);
}
const getAnswer = async question => {
  const result = await manager.process(question);
  return (result.score > 0.7 && result.answer) ? result.answer : 'すいません、わかりませんでした';
};

export default getAnswer;