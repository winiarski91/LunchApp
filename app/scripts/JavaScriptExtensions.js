'use strict';

Array.prototype.getIndexBy = function (name, value) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][name] === value) {
      return i;
    }
  }
};
