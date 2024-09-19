import sys

class JustNotCoolError(Exception):
  """Base class for exceptions in this module."""
  pass


x = 2
try:
    raise JustNotCoolError('This just isn\'t cool, man')
    # raise Exception("I'm a custom exception!")
    # print(x / 0)
    # if not type(x) is str:
    #     raise TypeError('Only strings are allowed')
except NameError:
    print('There is an error')
    print('NameError means something is probably undefined.')
    print("Error: ", sys.exc_info()[0])
except ZeroDivisionError:
    print('Please do not dive by zero.')
except Exception as error:
  print('An error occurred: ' + str(error))
else:
    print('No errors occurred')
finally:
  print('This will always run')