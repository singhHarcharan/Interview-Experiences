# Interview Experience - Paranissa (Remote)

## Round 1: Founder's Call (45 minutes) - January 31, 2026

### Interview Flow

#### Introduction
- The interview began with the founder's introduction and an overview of their company product
- I was then asked to introduce myself

#### Discussion Topics
- Why I want to work with them
- My background and professional experience

#### Technical Assessment

**Problem 1: Bridge Crossing Puzzle**
- **Given:**
  - Array of times: `time = [1, 2, 5, 8]` (time taken by each person to cross)
  - 1 umbrella
  - 1 bridge
- **Rules:**
  - Only 2 people can cross at a time using the umbrella
  - Someone must return with the umbrella after each crossing
  - Find the minimum time needed for all to cross the bridge

**Problem 2: Data Structures**
- Implemented a LinkedList
- Addressed follow-up questions about the implementation

### Outcome
- Received positive feedback
- Advanced to the next round with a senior developer


## Round 2: Technical Interview with Senior Developer (60 minutes) - February 5, 2026

### Problem Statement
**Find Lowest Common Ancestor (LCA) in a Binary Tree** with the following constraints:
- No access to the root node
- Only given two nodes (First and Second) to find LCA
- Tree properties:
  - All node values are unique and sequential
  - Insertion is strictly left-to-right

### Problem Analysis
This was a mathematical problem rather than a recursive tree traversal problem due to the tree's specific properties.

### Solution Approach
After analyzing the problem, I proposed two approaches. The final solution was based on level calculations:

1. **Key Insight**:
   - Each node's level can be determined mathematically since values are sequential and insertion is left-to-right
   - Level of a node can be calculated using: `2^level = node_value` and `level = floor(log2(node_value))`

2. **Algorithm**:
   - Calculate levels of both nodes
   - Bring both nodes to the same level by moving the deeper node up
   - Find LCA by comparing parents while moving both nodes up until they meet

### Time Complexity
- Level calculation: O(1) per node
- Level balancing: O(log n) in worst case
- Finding common ancestor: O(log n) in worst case
- **Total Time Complexity**: O(log n)

### Space Complexity: O(1) - No extra space required

### Challenges Faced
- Initially tried recursive approaches before realizing the mathematical pattern
- Took time to derive the level calculation formula
- Ensuring edge cases were handled (nodes at same level, one node being ancestor of other)

### Learning Outcome
- Importance of analyzing problem constraints before jumping to solutions
- Mathematical properties can often simplify seemingly complex tree problems
- Need to practice more problems with mathematical patterns in trees

