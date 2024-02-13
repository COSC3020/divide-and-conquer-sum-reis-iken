[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**
Recurrence Relation:
T(n) = {1 if n <= 2, 3T(n/3) + n

Solve By Substitution:
T(n) = 3(3T(n/9) + n/3) + n
= 9T(n/9) + 2n
= 27T(n/27) + 3n
= 3^iT(n/(3^i)) + in
for i = log(base3)n:
= nT(1) + nlog(base3)n
So since T(1) is our base case, we get:
T(n) = n + nlog(base3)n ∈ Θ(nlogn)
So our big Theta complexity is Θ(nlogn).

Reasoning:
We know the base case is 1 because it takes constant time to simply return a value.
We also know that in each recursive call, the array is split into 3 parts. So we know that the algorithm performs 3 resursive calls on sub-arrays of size n/3. This explains our use of 3T(n/3).
Lastly, we know that the addition at the end of the function takes constant time. Hence, our use of + n.
Once we have this recurrence relation, we can solve by substitution, basically the exact same as how we did so for merge sort. When we sub in i = nlog(base3)n, we then get to our base case, which we can sub in n for. At that point, we are able to conclude our big Theta complexity.
**
