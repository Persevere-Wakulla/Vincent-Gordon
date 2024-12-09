users = ["CrummyGWeed", "AKms 47", "UGoD", "DJCanNUCk", "TRANZExGOD"]

data = ["AKms 47", "Spec-Op", "xM0NT3C0R3xFurr"]

emptylist = []

print("AKms 47" in users)

print(users[1])
print(users[-2])

print(users.index("UGoD"))

print(users[0:2])
print(users[1:])
print(users[-3:-1])

print(len(data))

users.append("SODxHEADSHOT")
print(users)

users += ["InnisIzNerr"]
print(users)

users.extend(["SmallPoeBoy", "Pro Active"])
print(users)

# users.extend(data)
# print(users)

users.insert(0, "Pump OneShot")
print(users)

users[2:2] = ["LKA Mie Nootz", "ONE"]
print(users)
print(len(users))

users[1:3] = ["CrummG", "LK mI Knootz"]
print(users)
print(len(users))

users.remove("ONE")
print(users)

print(users.pop())
print(users)

del users[0]
print(users)

# del data

data.clear()
print(data)

users[1:2] = ['srlegacy']
users.sort()
print(users)

users.sort(key = str.lower)
print(users)

nums = [4,42,78,1,5]
nums.reverse()
print(nums)

# nums.sort(reverse=True)
# print(nums)

print(sorted(nums,reverse=True))
print(nums)

# All copies of original
numscopy = nums.copy()
mynums = list(nums)
mycopy = nums[:]

print(numscopy)
print(mynums)
mycopy.sort()
print(mycopy)
print(nums)

print(type(nums))

mylist = list([1,2,3])
print(mylist)

# Tuples

mytuple = tuple(("Vinny",38,True))

anothertuple = (1,3,5,7,9,2,2,2)

print(mytuple)
print(type(mytuple))
print(type(anothertuple))

newlist = list(mytuple)
newlist.append("Next")
newtuple = tuple(newlist)
print(newtuple)

(one, *two, hey) = anothertuple
print(one)
print(two)
print(hey)

print(anothertuple.count(2))