import random as rdm
import math
import sys
from enum import Enum
import nairobi
from rps7 import rock_paper_scissors

rand_choice = rdm.choices('123456')
print(f"The random choice is {rand_choice}")

print(math.pi)

print(dir(rdm))


# for item in dir(rdm):
#   print(item)

print(nairobi.capital)
nairobi.randomfunfact()

print(__name__)
print(nairobi.__name__)


rock_paper_scissors()