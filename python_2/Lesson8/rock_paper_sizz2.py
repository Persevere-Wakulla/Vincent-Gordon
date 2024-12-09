import sys
import random
from enum import Enum


class RPS(Enum):
    ROCK = 1
    PAPER = 2
    SCISSORS = 3


playagain = True

while playagain:
    playerchoice = input("\nEnter...\n1 for Rock,\n2 for Paper, or \n3 for Scissors:\n\n")

    win = "🎉 You Win!"

    loose = "😵 You Loose!"

    player = int(playerchoice)

    if player < 1 or player > 3:
        sys.exit("You must enter 1, 2, or 3.")

    computerchoice = random.choice("123")

    computer = int(computerchoice)

    print("\nYou Chose " + str(RPS(player)).replace("RPS.", "") + ".")
    print("Python Chose " + str(RPS(computer)).replace("RPS.", "") + ".\n")
  
    if player == 1 and computer == 3:
        print(win)
    elif player == 2 and computer == 1:
        print(win)
    elif player == 3 and computer == 2:
        print(win)
    elif player == computer:
        print("😲 Tie game!")
    else:
        print("🐍 Python Wins!")
        
    playagain = input("\nPlay again? \nY for Yes or \nQ to Quit \n\n")

    if playagain.lower() == "y":
        continue
    elif playagain.lower() == "q":
        print("\n🎉🎉🎉🎉🍾🍾🍾")
        print("Thank You for playing!\n")
        playagain = False # break would work to end the loop as well
    else:
        continue
sys.exit("Bye! 👋")