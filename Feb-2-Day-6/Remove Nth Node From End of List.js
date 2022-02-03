var removeNthFromEnd = function (head, n) {
  var h = new ListNode(0);
  var ll = h;
  var rr = h;

  h.next = head;

  for (var i = 0; i < n + 1; i++) {
    rr = rr.next;
  }

  while (rr !== null) {
    ll = ll.next;
    rr = rr.next;
  }

  ll.next = ll.next.next;

  return h.next;
};

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
