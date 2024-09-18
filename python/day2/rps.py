import sys
import random
from enum import Enum


class RPS(Enum):
  ROCK = 1
  PAPER = 2
  SCISSORS = 3
  
playagain = True

while playagain:
  
 
  print("")
  playerChoice = input('Enter... \n1 for Rock, \n2 for Paper, of \n3 for Scissors\n\n')
  print(playerChoice)

  player = int(playerChoice)

  if player < 1 or player > 3:
    sys.exit('You must enter 1,2 or 3.')
    

  computerChoice = random.choice("123")

  computer = int(computerChoice)

  print("\nYou chose " + str(RPS(player)).replace("RPS. ","") + ".")
  print("Computer chose " + str(RPS(player)).replace("RPS. ","") + ".\n")

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
    
  playagain = input("\nPlay again? \nY for yes or \nQ to quit \n\n")
  
  if playagain.lower() == 'y':
    continue
  else:
    print("\n🥳🥳🥳🥳🥳")
    print("\nThanks for playing!")
    playagain = False
  
sys.exit("Bye 👋👋")