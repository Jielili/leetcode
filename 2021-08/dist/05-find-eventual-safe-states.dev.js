"use strict";

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function eventualSafeNodes(graph) {
  var res = [];
  var pre = 0;

  while (true) {
    var len = res.length;

    for (var i = 0; i < graph.length; i++) {
      if (res.includes(i)) {
        continue;
      }

      for (var j = pre; j < len; j++) {
        var item = res[j];

        if (graph[i].includes(item)) {
          graph[i].splice(graph[i].indexOf(item), 1);
        }
      }

      if (graph[i].length === 0) {
        res.push(i);
      }
    }

    if (res.length === len) {
      break;
    }

    pre = len;
  }

  return res.sort(function (a, b) {
    return a - b;
  });
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));