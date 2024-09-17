# String data type

# literal assignment

first = 'Vincent'
last = 'Anjiri'
age = 24

""" print(type(first))
print(type(age))
print(type(last) == str)
print(isinstance(first, str))
"""

# constructor
""" pizaa = str('Pepperoni')
print(type(pizaa))
print(type(pizaa) == str)
print(isinstance(pizaa, str)) """

# concatination
fullname = first + " " + last
print(fullname)  # Output: Vincent Anjiri

fullname += "!"
print(fullname)


# Casting a  number to a string
decade = str(2000)
print(type(decade))
print(decade)

statement = 'I like rock music from the ' + decade + "s."
print(statement)


# Multiple lines

multiline = '''
Hey, how are you?

I was just checking in.
          All good?
'''

print(multiline);

# Escaping special characters

sentese = 'I\'m back at work!\tHey\n\nWhere\'s this at\\located?'
print(sentese)


# String methods
print(first)
print(first.lower())
print(first.upper())
print(first)

print(multiline.title())
print(multiline.replace('good', 'ok'))
print(len(multiline))
multiline += "                      "
multiline  = '                    ' + multiline
print(len(multiline))
print(multiline.strip())
print(len(multiline.lstrip()))
print(len(multiline.rstrip()))

print('')

# Build a menu
title = "menu".upper()
print(title.center(20, "="))
print('Coffee'.ljust(16, '.') + "$1".rjust(4))
print('Muffin'.ljust(16, '.') + "$2".rjust(4))
print('Cheesecake'.ljust(16, '.') + "41".rjust(4))

print('')

# String index values
print(first[0])
print(first[-1])
print(first[1:-1])
print(first[1:])


# Some methids return boolean data
print(first.startswith('V'))
print(first.endswith('t'))

# Boolean data type
myValue = False
x = bool(False)
print(type(x))
print(isinstance(myValue, bool))

# Numeric data types

# Integer
price = 100;
best_price = int(80)
print(type(price))
print(isinstance(myValue, bool))


# Float type
gpa = 3.28
y = float(1.14)
print(type(gpa))
print(isinstance(gpa, float))


# Complex type
complex_num = 3 + 4j
print(type(complex_num))
print(complex_num.real)
print(complex_num.imag)


# Built in functions for numbers
print(abs(gpa))
print(abs(gpa * -1))
print(round(gpa))
print(round(gpa, 1))

import math
print(math.pi)
print(math.sqrt(64))
print(math.ceil(gpa))
print(math.floor(gpa))

# casting a string to a number
zipcode = '10001'
zip_value = input(zipcode)
print(type(zip_value))
