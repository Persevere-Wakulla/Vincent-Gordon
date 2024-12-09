msg = "Roll a Dice"
print(msg)


if 5 > 2:
    print("Five is geater than two!")
    x = 1
    y = "Hello World!"
    print(x > 2)

hello = 'World'
print(hello)

hello = 'Hello!'
print(hello)

x = str(3)
y = int(3)
z = float(3)
print(x,y,z)
print(type(x),type(y),type(z))

fruits = ['apple',"banana",'cherry',5,x ]

print(type(fruits))

a,b,c,d,e = fruits
print(a,b,c,d,e)

x = 'awesome'

def myfunc():
    # global x
    x = 'fantastic'
    # print('Pyhton is ' + x)

myfunc()

print('Python is ' + x)

x = 'Hello World' # str
x = str('Hello World')
print(x[0])
print(len(x))
print(type(x))
x = 20 #int
x = int(20)
print(type(x))
x = 20.5 #float
x = float(20.5)
print(type(x))

x = 1j #complex
x = complex(1j)
print(type(x))

x = ['apple','banana','cherry'] #list
x = list(('apple','banana','cherry'))
print(type(x))

x = ('apple','banana','cherry') #tuple
x = tuple(('apple','banana','cherry'))
print(type(x))

x = range(6) #range

print(type(x))

x = {'name': 'John','age': 36} #dict
x = dict(name = 'john', age = 36)
print(type(x))

x = {'apple','banana','cherry'} #set
x = set(('apple','banana','cherry'))
print(type(x))

x = frozenset({'apple','banana','cherry'}) #frozenset
print(type(x))

x = True #bool
x = bool(5)
print(type(x))

x = b'Hello' #bytes
x = bytes(5)
print(type(x))

x = bytearray(5) #bytearray
print(type(x))

x = memoryview(bytes(5)) #memoryview
print(type(x))

x = None #NoneType
print(type(x))


# converting numeric types
x = 1  #int
y = 2.8 #float
z = 1j #complex

# convert from int to float
a = float(x)

# convert from float to int
b = int(y)

# convert from int to complex
c = complex(x)

print(type(a),a,type(b),b,type(c),c)

import random

print(random.randrange(1,100))

for x in 'banana':
    print(x)

txt = 'The best things in life are free!'
print('free' in txt)

txt = "6'4 225lbs how you gon stop that"
if "ha" in txt:
    print('Yes , "stop" is present.')
    
txt = 'the best things in life are free'
print('expensive' not in txt)

txt = 'the best things in life are free'
if 'expensive' not in txt:
    print('No, "expensive" is NOT present.')
