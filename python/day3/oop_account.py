from bank_accounts import *

Vincent = BankAccount(2000, 'Vincent')
Anjiri = BankAccount(3000, 'Anjiri')

Vincent.getBalance()
Anjiri.getBalance()

Vincent.deposit(200)
Anjiri.deposit(500)

Vincent.withdraw(500)

Vincent.transfer(11300, Anjiri)

Jim = IntrestRewardAcct(1000, 'Jim')

Jim.getBalance()
Jim.deposit(100)

Jim.transfer(100, Vincent)

Blaze = SavingsAccount(1000, "Blaze")

Blaze.getBalance()

Blaze.deposit(100)

Blaze.transfer(10000, Anjiri)
Blaze.getBalance()