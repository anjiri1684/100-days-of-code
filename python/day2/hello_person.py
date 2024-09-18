
def hello(name, lang):
  greetings = {
    "English": "Hello",
    "Spanish": "Hola",
    "French": "Bonjour",
  }
  msg = f"{greetings[lang]} {name}!"
  print(msg)

if __name__ == '__main__':
  

    import argparse

    parser = argparse.ArgumentParser(
      description='Provides a personal greeting.'
    )

    parser.add_argument(
      '-l', "--lang", metavar="language",
      required=True,
      choices=['English', 'Spanish', 'French'],
      help="Language of the greeting",
    )

    args = parser.parse_args()

    msg = f'Hello {args.name}'
    hello(args.name, args.lang)