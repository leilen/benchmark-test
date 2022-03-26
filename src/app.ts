import * as Benchmark from 'benchmark';

const suite = new Benchmark.Suite();

const main = async () => {
  suite
    .add('RegExp#test', function () {
      /o/.test('Hello World!');
    })
    .add('String#indexOf', function () {
      'Hello World!'.indexOf('o') > -1;
    })
    // add listeners
    .on('cycle', function (event) {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({async: true});
};

main();
