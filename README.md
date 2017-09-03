# map-promised

[![NPM](https://nodei.co/npm/map-promised.png)](https://nodei.co/npm/map-promised/)

Convert a Map to a Promised Map.

```javascript
var MapPromised = require('map-promised');
// MapPromised(<source>)

var map = new MapPromised(new Map());

map.set('elon musk', 'he inspires the shit out of us');

map.set('mars', 'a cold, dusty, shitstorm').then(() => {
  console.log('are you working on a sanitation system on mars?');
});
// 'are you working on a sanitation system on mars?'

map.size.then((ans) => {
  console.log('toms: '+ans);
});
// toms: 2

map.get('mars').then((ans) => {
  console.log('what plan? '+ans);
});
// what plan? a cold, dusty, shitstorm

map.delete('mars').then(() => {
  console.log('we need toilets in mars');
});
// we need toilets in mars

map.size.then((ans) => {
  console.log('toms now: '+ans);
});
// toms now: 1

map.has('mars').then((ans) => {
  console.log('will you be going to mars? '+ans);
});
// will you be going to mars? false

map.clear().then((ans) => {
  console.log('is this the end of this world?');
});
// is this the end of this world?
// ...
```
