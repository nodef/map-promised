var assert = require('assert');
var MapPromised = require('./');

var map = new MapPromised(new Map());

map.set('elon musk', 'he inspires the shit out of us');

map.set('mars', 'a cold, dusty, shitstorm').then(() => {
  console.log('are you working on a sanitation system on mars?');
});

map.size.then((ans) => {
  assert.equal(ans, 2);
  console.log('toms: '+ans);
});

map.get('mars').then((ans) => {
  assert.equal(ans, 'a cold, dusty, shitstorm');
  console.log('what plan? '+ans);
});

map.delete('mars').then(() => {
  console.log('we need toilets in mars');
});

map.size.then((ans) => {
  assert.equal(ans, 1);
  console.log('toms now: '+ans);
});

map.has('mars').then((ans) => {
  assert.equal(ans, false);
  console.log('will you be going to mars? '+ans);
});

map.clear().then((ans) => {
  console.log('is this the end of this world?');
});
// ...
