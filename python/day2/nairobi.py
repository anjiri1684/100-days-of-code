from random import choice

capital = "Embakasi"

bird = 'Columbidae'

flower = 'Chrysanthemum'

song = "Home on the range"


def randomfunfact():
    funfacts = [
      'Capital City: Nairobi is the capital of Kenya and serves as the countrys political, economic, and cultural hub.',
      'Green City in the Sun: Nairobi is often referred to as the "Green City in the Sun" due to its numerous parks and greenery, providing a beautiful contrast to its urban landscape.', 
      'Nairobi National Park: Just a short drive from the city center, Nairobi National Park is unique for being one of the few national parks located within a major city. It\'s home to a variety of wildlife, including lions, giraffes, and rhinos.', 
      'Historical Significance: Founded in 1899 as a railway depot for the Uganda Railway, Nairobi quickly grew into a major city and was declared the capital of British East Africa in 1907.',
      'Cultural Diversity: Nairobi is known for its rich cultural diversity, with over 40 different ethnic groups and numerous languages spoken, including Swahili, English, and various indigenous languages.']

    index = choice('0123')
    print(funfacts[int(index)])
if __name__ == '__main__':
  randomfunfact()