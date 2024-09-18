import datetime

def hello(name):
  print("Hello " + name)
  date_now = datetime.datetime.now()
  print(date_now)
  
hello("Vincent")


def sum(num1, num2):
  print(num1 + num2)

sum(2,3)
sum(1,7)
sum(100,3)

def subtract(num1, num2):
  if(type(num1) is not int or type(num2) is not int):
    print("Error: Both inputs must be integers")
    return
  return num1 - num2

total = subtract(23, 13)
print(total)

def mutliple_item(*args):
  print(args)
  print(type(args))
  

mutliple_item('Vincent', 'Anjiri', 'Jacob')

def mult_names_items(**kwargs):
  print(kwargs)
  print(type(kwargs))


mult_names_items(first = 'Vincent',last = 'Jacob')