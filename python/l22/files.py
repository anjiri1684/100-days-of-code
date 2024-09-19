import os

# r = Read
# a = Append
# w = Write
# x = Create

# Read = error if it dosent exist

f = open("names.txt")
# print(f.read())
# print(f.readline())
# print(f.readline())

for  line in f:
  print(line.upper())

f.close()

try:
  f = open("names.txt", "r")
  print(f.read())
except:
  print('The file you want to read dosen\'t exist')
finally:
  f.close()
  
# Append creates the file if it doesn't exist
f = open('names.txt', 'a')
f.write('John\n')
f.close()

f = open('names.txt')
print(f.read())
f.close()


# write (verwrite)
f = open('context.txt', 'w')
f.write('I deleted all of the context')
f.close()

f = open('context.txt')
print(f.read())
f.close()

# Two ways to Create a new file
# 1. Opens for writing, creates the file if it does not exist
f = open('name_list.txt', 'w')
f.close()

# Creates the specified file but returns an error if the file exist
if not os.path.exists('vin.txt'):
  f = open('vin.txt', 'x')
  f.close()

# Delete a file

# Avoid an error if it doesnt exist
if os.path.exists("vin.txt"):
    os.remove('vin.txt')
else:
  print("The file you wish to delete does not exist")
  
  

with open('more_names.txt') as f:
  content = f.read()

with open('names.txt', 'w') as f:
  f.write(content)