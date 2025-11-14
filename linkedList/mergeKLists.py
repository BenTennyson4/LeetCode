# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Runtime is O(nk) where n is the total number of nodes across all lists, and k is the length of lists. 

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists:
            return None
        
        # Get the first list from the array
        l1 = lists[0]

        # Merge the lists remaining in the array with l1
        for i in range(1, len(lists)):
            l2 = lists[i]
            curr2 = l2
            curr1 = l1
            # Create a dummy node so that prev is not Null
            # if we need to insert an element from l2 before
            # the first node in l1.
            dummy = ListNode()
            dummy.next = curr1
            prev1 = dummy
            while curr2 and curr1:
                if curr1.val > curr2.val:
                    tmp = curr2.next
                    curr2.next = curr1
                    prev1.next = curr2
                    prev1 = curr2
                    curr2 = tmp
                else:
                    prev1 = curr1
                    curr1 = curr1.next
            # If there are remaining values in curr2 and 
            # curr1 has reached the end, append the remaining
            # curr2 list
            if curr2:
                prev1.next = curr2

            l1 = dummy.next
            
        return l1
