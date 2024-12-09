import sys
import random
from enum import Enum


def play_rps():
    class RPS(Enum):
        ROCK = 1
        PAPER = 2
        SCISSORS = 3

    playerchoice = input(
        "\nEnter...\n1 for Rock,\n2 for Paper, or \n3 for Scissors:\n\n"
    )

    win = "🎉 You Win!"
    
    if playerchoice not in ["1","2","3"]:
        print("You must enter 1, 2, or 3.")
        return play_rps()
    
    player = int(playerchoice)

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
        
    print("\nPlay Again?")
    
    while True:
        playagain = input("\nY for Yes or \nQ to Quit\n")
        if playagain.lower() not in ["y","q"]:
            continue
        else:
            break
    
    if playagain.lower() == "y":
        return play_rps()
    elif playagain.lower() == "q":
        print("\n🎉🎉🎉🎉🍾🍾🍾")
        print("Thank You for playing!\n")
        sys.exit("Bye! 👋")
    
play_rps()