def hello_world():
    print("\nHello World!")


hello_world()


def sum(num1=0, num2=0):
    if type(num1) is not int or type(num2) is not int:
        return
    return num1 + num2


total = sum(5,5)
print(total)

# def multiple_items(*args):
#     print(args)
#     print(type(args))
    
# multiple_items("Dave","Sarah","John")

def mult_named_items(**kwargs):
    print(kwargs)
    print(type(kwargs))
    
mult_named_items(first= "Dave",second="Sarah",last="John")
