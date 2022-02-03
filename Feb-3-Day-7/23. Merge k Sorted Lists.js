var mergeKLists = function (lists) {
  var res = [];
  var tmp = null;
  for (var i = 0; i < lists.length; i++) {
    tmp = lists[i];
    while (tmp !== null) {
      res.push(tmp);
      tmp = tmp.next;
    }
  }
  res.sort((a, b) => a.val - b.val);
  for (var j = 0; j < res.length; j++) {
    res[j].next = res[j + 1] || null;
  }
  return res[0] || null;
};

// https://leetcode.com/problems/merge-k-sorted-lists/
