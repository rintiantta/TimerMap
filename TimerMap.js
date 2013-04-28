// Generated by CoffeeScript 1.6.2
var TimerMap, exports;

TimerMap = (function() {
  function TimerMap(time) {
    if (time == null) {
      time = 1000;
    }
    this.object = {};
    this._timerObject = {};
  }

  TimerMap.prototype.set = function(key, value) {
    var _this = this;

    if (this.object[key]) {
      clearTimeout(this._timerObject[key].timer);
    }
    this.object[key] = value;
    this._timerObject[key] = setTimeout(function() {
      delete _this.object[key];
      return delete _this._timerObject[key];
    }, this.time);
    return this["this"];
  };

  TimerMap.prototype.get = function(key) {
    return this.object[key];
  };

  return TimerMap;

})();

if (exports && module && global) {
  exports = module.exports = TimerMap;
  exports["import"] = function() {
    return global.TimerMap = TimerMap;
  };
}
