import sys
import random
from enum import Enum

game_count=0

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
    
    def decide_winner(player,computer):
        if player == 1 and computer == 3:
            return (win)
        elif player == 2 and computer == 1:
            return (win)
        elif player == 3 and computer == 2:
            return (win)
        elif player == computer:
            return ("😲 Tie game!")
        else:
            return ("🐍 Python Wins!")

    game_result = decide_winner(player,computer)        
    
    print(game_result)
    
    global game_count
    game_count += 1
    
    print("\nGame Count: "+str(game_count))
        
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