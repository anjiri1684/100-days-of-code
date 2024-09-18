import sys
import random
from enum import Enum

def rps():
    game_count = 0
    player_wins = 0
    computer_wins = 0

    def play_rps():
      nonlocal player_wins
      nonlocal computer_wins
      
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
        
        nonlocal player_wins
        nonlocal computer_wins
        if player == 1 and computer == 3:
          player_wins += 1
          return "🥳Rock smashes scissors! You win!"
        elif player == 2 and computer == 1:
          player_wins += 1
          return "🥳Paper smashes Rock! You win!"
        elif player == 3 and computer == 2:
          player_wins += 1
          return "🥳scissors smashes Paper! You win!"
        elif  player == computer:
          return "😲It's a tie!"
        else:
          computer_wins += 1
          return "You lose! Computer wins"
        
      game_result = decide_winner(player, computer)
      
      print(game_result) 
      
      nonlocal game_count
      game_count += 1
      print('\nGame count: ' + str(game_count))   
      print('\nPlayer wins: ' + str(player_wins))   
      print('\ncomputer wins: ' + str(computer_wins))       
      
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
    
    return play_rps    

play = rps()

play()
