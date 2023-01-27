# https://leetcode.com/problems/happy-number/
# 202. Happy Number


class Solution:
    def isHappy(self, n: int) -> bool:  # noqa: N802
        visited: set[int] = set()
        visited.add(n)
        while n != 1:
            sum = 0
            while n:
                print("n before divmod " + str(n))
                n, digit = divmod(n, 10)
                sum += digit * digit
                print("n after divmod " + str(n))

                print("visited set " + str(visited))
                print("sum is" + str(sum))
                print("\n")
            if sum in visited:
                return False

            n = sum
            visited.add(n)
        return True


solution = Solution()


n = 19
assert solution.isHappy(n)

#n = 2
#assert not solution.isHappy(n)

#n = 1
#assert solution.isHappy(n)


# Alternative solution
## class Solution(object):
#    def isHappy(self, n):
#        hset = set()
#        while n != 1:
#            if n in hset: return False
#            hset.add(n)
#            n = sum([int(i) ** 2 for i in str(n)])
#        else:
#            return True
