from functools import reduce
squared = lambda num: num**2

print(squared(2))

addTwo = lambda num: num + 2

print(addTwo(12))

sum_total = lambda a, b: a + b

print(sum_total(2, 4))


## Higher order functions
#####################
def func_builder(x):
    return lambda num: num + x

addTen = func_builder(10)
addTwenty = func_builder(20)

print(addTen(7), addTwenty(7))
###########################
numbers = [1, 3, 5, 7, 9, 11, 12,13]

squared_nums = map(lambda num: num**2, numbers)

print(list(squared_nums))
###########################
odd_nums=filter(lambda num: num % 2 != 0,numbers)

print(list(odd_nums))
###########################
total = reduce(lambda acc,curr:acc+curr,numbers,10)

print(total)
print(sum(numbers,10))

names = ["VI","Feezy","SouthSide"]

char_count = reduce(lambda acc,curr : acc + len(curr),names,0)
print(char_count)




