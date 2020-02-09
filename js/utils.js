
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function ArrayToList(array) {
  const l = new ListNode(array[0]);
  let t = l;
  for (let i = 1; i < array.length; i++) {
    t.next = new ListNode(array[i]);
    t = t.next;
  }
  return l;
}

function ListToArray(list) {
  let a = []
  while (list !== null) {
    a.push(list.val);
    list = list.next;
  }
  return a;
}

module.exports = { ListNode, ArrayToList, ListToArray };