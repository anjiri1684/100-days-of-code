# Closure is a function having to the scope of its parent
# It can access the variables of its parent

def parent_function(person, coins):
  #coins = 3
  
  def play_game():
    nonlocal coins
    coins -= 1
    
    if coins > 1:
      print("\n" + person + " has " + str(coins) + " coins left.")
    elif coins == 1:
      print("\n" + person + " has " + str(coins) + " coin left.")
    else:
      print("\n" + person + " has no coins left.")
      
  return play_game

vincent = parent_function("Vincent", 5)
emmaculate = parent_function("Emmaculate", 5)

vincent()
vincent()


emmaculate()
