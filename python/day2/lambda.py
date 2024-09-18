

squared = lambda num : num * num

print(squared(2))

addTwo = lambda num : num + 2
print(addTwo(12))

sum = lambda a, b: a + b
print(sum(2,2))

#########################
# Lambda functions with multiple arguments
#########################
# Lambda functions can take multiple arguments, just like regular functions.
# The syntax is the same as for regular functions, with the arguments in parentheses.
# The lambda function can then use these arguments in its expression.
# Here is an example of a lambda function that takes two arguments and returns their sum:


def funcBuilder(x):
  return lambda num: num + x

addTen = funcBuilder(10)
addTwenty = funcBuilder(20)

print(addTen(7))
print(addTwenty(7))

##############


numbers = [3,7,12,18,20,21,33]

squared_nums = map(lambda num : num * num
, numbers)

print(list(squared_nums))

#######################

# Lambda functions with default arguments

odd_nums = filter(lambda num : num % 2 != 0
, numbers)

print(list(odd_nums))

from functools import reduce

numbers = [1,2,3,4,5,6,7,8,9]
total = reduce(lambda acc, curr: acc + curr
, numbers)

print(total)