impl Solution {
    pub fn multiply(left: usize, right: usize) -> usize {
        left * right
    }
}

pub struct Solution;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = Solution::multiply(3, 2);
        assert_eq!(result, 6);
    }
}
