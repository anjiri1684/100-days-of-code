value = 1
while value <= 10:
  value += 1
  if value == 5:
    print("Its number five")
    continue
  print(value)
else:
  print("Values is now equal to " + str(value))

names = ['Laura', 'Peterson',
'Michael', 'Thompson',
'Emily', 'Clark',
'Benjamin', 'Harris',
'Sophia', 'Martinez']
for name in names:
  print(name)

for letter in 'Vincent Anjiri':
  print(letter)
  
nummber = 100;
for num in range(nummber):
  if(num % 3 == 0):
    print("fizz")
  elif(num % 5 == 0 and num % 3 == 0):
    print("fizzbuzz")
  elif(num % 5 == 0):
    print('Buzz')
  else:
    print(num)

for x in names:
  if x == 'Harris':
    break
  print(x)

for x in names:
  if x == 'Harris':
    continue
  print(x)

for x in range(4):
  print(x)

for x in range(2,4):
  print(x)

for x in range(0, 100 + 5, 5):
  print(x)
else:
  print('Glad that\'s over!')

names = ['Laura', 'Peterson',
'Michael', 'Thompson']
actions = ['codes', 'eats', 'sleeps']

for name in names:
  for action in actions:
    print(name + " " + action + ".")
    
for action in actions:
  for name in names:
    print(name + " " + action + ".")