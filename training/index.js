const fs = require('fs');
const answerData = require('./answer')();
const documentData = require('./document')();
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['ja'] });

(async () => {
  if (fs.existsSync(`${__dirname}/../model.nlp`)) {
    manager.load(`${__dirname}/../model.nlp`);
  } else {
    documentData.forEach((obj) => {
      manager.addDocument('ja', obj.message, obj.target);
    });
    console.log('Training, please wait..');
    await manager.train();
    console.log('Trained!');  
    answerData.forEach((obj) => {
        manager.addAnswer('ja', obj.target, obj.message);
    });
    manager.save(`${__dirname}/../model.nlp`);
  }

  console.log('何か聞いてみて!');

  rl.on('line', async line => {
    const result = await manager.process(line);
    console.log(result.score > 0.7 && result.answer ? result.answer : 'すいません、わかりませんでした');
  });
})();