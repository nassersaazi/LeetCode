# https://leetcode.com/problems/happy-number/
# 202. Happy Number


class Solution:
    def isHappy(self, n: int) -> bool:
        hset = set()
        while n != 1:
            if n in hset: return False
            hset.add(n)
            n = sum([int(i) ** 2 for i in str(n)])
        else:
            return True

solution = Solution()


n = 19
assert solution.isHappy(n)

n = 2
assert not solution.isHappy(n)

n = 1
assert solution.isHappy(n)


