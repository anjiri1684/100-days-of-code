import sys
import random
from enum import Enum

game_count = 0

def play_rps():
  
  class RPS(Enum):
    ROCK = 1
    PAPER = 2
    SCISSORS = 3    
    

  print("")
  playerChoice = input('Enter... \n1 for Rock, \n2 for Paper, of \n3 for Scissors\n\n')
  if(playerChoice not in ['1','2',3]):
    print("Invalid choice. Please enter 1, 2 or 3")
    return play_rps()

  player = int(playerChoice)


  computerChoice = random.choice("123")

  computer = int(computerChoice)

  print("\nYou chose " + str(RPS(player)).replace("RPS. ","") + ".")
  print("Computer chose " + str(RPS(player)).replace("RPS. ","") + ".\n")
  
  def decide_winner(player, computer):    
    if player == 1 and computer == 3:
      return "🥳Rock smashes scissors! You win!"
    elif player == 2 and computer == 1:
      return "🥳Paper smashes Rock! You win!"
    elif player == 3 and computer == 2:
      return "🥳scissors smashes Paper! You win!"
    elif  player == computer:
      return "😲It's a tie!"
    else:
      return "You lose! Computer wins"
    
  game_result = decide_winner(player, computer)
  
  print(game_result) 
  
  global game_count
  game_count += 1
  print('\nGame count: ' + str(game_count))   
  
   
  play_again = input("\nDo you want to play again? (yes/no): ")
  
  while True:
    playagain = input(" \nY for yes or \nQ to quit \n\n")
    if playagain.lower() not in ['y', 'q']:
      print("Invalid choice. Please enter Y or Q")
      continue
    else:
      break
    
  if playagain.lower() == 'y':
    return play_rps()
  else:
    print("\n🥳🥳🥳🥳🥳")
    print("\nThanks for playing!")
    sys.exit("Bye 👋👋")      

play_rps()
