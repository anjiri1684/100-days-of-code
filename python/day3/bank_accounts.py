class BalanceException(Exception):
  """Exception raised for balance errors."""
  pass


class BankAccount:
      def __init__(self, initialAmount, acctName):
          self.balance = initialAmount
          self.name = acctName
          print(f"\nAccount '{self.name}' created.\nBalance = ${self.balance:.2f}")
      def getBalance(self):
        print(f"\nAccount '{self.name}' balance = ${self.balance:.2f}")
        
      def deposit(self, amount):
        self.balance = self.balance + amount
        print(f"\nDeposited ${amount:.2f}. New balance = ${self.balance}")
      
      def viableTransaction(self, amount):
        if self.balance >= amount:
          return True
        else:
          raise BalanceException(f"\nInsufficient balance for transaction. The account '{self.name}' only has a balance of ${self.balance}")
      def withdraw(self, amount):
          try:
            self.viableTransaction(amount)
            self.balance = self.balance - amount
            print("\nWithdraw complete.")
            self.getBalance()
          except BalanceException as error:
            print(f'\nWithdraw interrupted: {error}')
      def  transfer(self, amount, recipient):
        try:
          print('\n*********\n\nBeginning Transfer')
          self.viableTransaction(amount)
          self.withdraw(amount)
          recipient.deposit(amount)
          print(f"\nTransfer complete. ${amount:.2f} transferred to account '{recipient.name}'")
        except BalanceException as error:
          print(f'\nTransfer interrupted: {error}')
          
class IntrestRewardAcct(BankAccount):
      def deposit(self, amount):
          self.balance = self.balance + (amount * 1.05)
          print('\nDeposit Complete.')
          self.getBalance()

class SavingsAccount(IntrestRewardAcct):
  def __init__(self, initialAmount, acctName):
    super().__init__(initialAmount, acctName)
    self.fee = 5
  def withdraw(self, amount):
      try:
        self.viableTransaction(amount + self.fee)
        self.balance = self.balance - (amount + self.fee)
        print('\nWithdraw complete.')
        self.getBalance()
      except BalanceException as error:
        print(f'\nWithdraw interrupted: {error}')
