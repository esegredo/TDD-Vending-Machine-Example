/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}

function getChange(totalPayable, cashPaid) {

  var change = [];
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var remaining = cashPaid - totalPayable;

  for (var i = 0; i < coins.length; i++) {
    while (Math.trunc(remaining / coins[i]) > 0) {
      remaining -= coins[i];
      change.push(coins[i]);
    }
  }

  return change;
};
