import sys
import random
from enum import Enum


class RPS(Enum):
  ROCK = 1
  PAPER = 2
  SCISSORS = 3
  
print(RPS(2))
print(RPS.ROCK)
print(RPS['ROCK'])
print(RPS.ROCK.value)
sys.exit

print("")
playerChoice = input('Enter... \n1 for Rock, \n2 for Paper, of \n3 for Scissors\n\n')
print(playerChoice)

player = int(playerChoice)

if player < 1 | player > 3:
  sys.exit('You must enter 1,2 or 3.')
  

computerChoice = random.choice("123")

computer = int(computerChoice)



print("")
print("You chose " + str(RPS(player)).replace("RPS. ","") + ".")
print("Computer chose " + str(RPS(player)).replace("RPS. ","") + ".")
print("")

if player == 1 and computer == 3:
  print("🥳Rock smashes scissors! You win!")
elif player == 2 and computer == 1:
  print("🥳Paper smashes Rock! You win!")
elif player == 3 and computer == 2:
  print("🥳scissors smashes Paper! You win!")
elif  player == computer:
  print("😲It's a tie!")
else:
  print("You lose! Computer wins")