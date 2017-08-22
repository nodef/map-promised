var $ = function MapPromised(src) {
  this._src = src;
};
module.exports = $;

var _ = $.prototype;

Object.defineProperty(_, 'size', {'get': function() {
  return Promise.resolve(this._src.size);
}});

_.flush = function() {
  return Promise.resolve();
};

_.evict = function() {
  return Promise.resolve();
};

_.set = function(k, v) {
  return Promise.resolve(this._src.set(k, v));
};

_.get = function(k) {
  return Promise.resolve(this._src.get(k));
};

_.delete = function(k) {
  return Promise.resolve(this._src.delete(k));
};

_.has = function(k) {
  return Promise.resolve(this._src.has(k));
};

_.clear = function() {
  return Promise.resolve(this._src.clear());
};

_.forEach = function(fn, thisArg) {
  return Promise.resolve(this._src.forEach(fn, thisArg));
};

_.valueOf = function() {
  return Promise.resolve(this._src);
};

_.entries = function() {
  return Promise.resolve(this._src.entries());
};

_.keys = function() {
  return Promise.resolve(this._src.keys());
};

_.values = function() {
  return Promise.resolve(this._src.values());
};
