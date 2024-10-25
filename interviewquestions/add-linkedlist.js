// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //Initialize current node to dummy head of the returning list.
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    //Initialize carry to 0.
    let carry = 0;
    //Loop through lists l1 and l2 until you reach both ends and carry is 0
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Set x to node l1's value. If l1 has reached the end of l1, set to 0.
        let x = l1 !== null ? l1.val : 0;
        // Set y to node l2's value. If l2 has reached the end of l2, set to 0.
        let y = l2 !== null ? l2.val : 0;
        // Set sum=x+y+carry.
        let sum = carry + x + y;
        // Update carry=sum/10.
        carry = Math.floor(sum / 10);
        // Create a new node with the digit value of (summod10) and set it to current node's next, then advance current node to next.
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        // Advance both l1 and l2.
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummyHead.next;
};
