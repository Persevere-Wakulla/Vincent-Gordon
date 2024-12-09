import sys
import random
from enum import Enum


def rps(name="PlayerOne"):
    game_count = 0
    player_wins = 0
    python_wins = 0

    def play_rps():
        nonlocal name
        nonlocal player_wins
        nonlocal python_wins

        class RPS(Enum):
            ROCK = 1
            PAPER = 2
            SCISSORS = 3

        playerchoice = input(
            f"\n{name},please enter...\n1 for Rock,\n2 for Paper, or \n3 for Scissors:\n\n"
        )

        win = "🎉 You Win! 🎉"

        if playerchoice not in ["1", "2", "3"]:
            print(f"{name}, please enter 1, 2, or 3.")
            return play_rps()

        player = int(playerchoice)

        computerchoice = random.choice("123")

        computer = int(computerchoice)

        print(f"\n{name} you chose {str(RPS(player)).replace("RPS.", "").title()}.")
        print(f"Python chose {str(RPS(computer)).replace("RPS.", "").title()}.\n")

        def decide_winner(player, computer):
            nonlocal player_wins
            nonlocal python_wins
            if player == 1 and computer == 3:
                player_wins += 1
                return f"{name} {win}"
            elif player == 2 and computer == 1:
                player_wins += 1
                return f"{name} {win}"
            elif player == 3 and computer == 2:
                player_wins += 1
                return f"{name} {win}"
            elif player == computer:
                return "😲 Tie game! 😲"
            else:
                python_wins += 1
                return f"🐍 Python Wins!\nSorry, {name}...🥹 🐍"

        game_result = decide_winner(player, computer)

        print(game_result)

        nonlocal game_count
        game_count += 1

        print(f"\nGame Count: {game_count}")
        print(f"\n{name}'s wins: {player_wins}")
        print(f"\nPython's wins: {python_wins}")
        print(f"\nYour winning percentage: {player_wins/game_count:.2%}")
        print(f"\nPlay Again?, {name}")

        while True:
            playagain = input("\nY for Yes or \nQ to Quit\n")
            if playagain.lower() not in ["y", "q"]:
                continue
            else:
                break

        if playagain.lower() == "y":
            return play_rps()
        elif playagain.lower() == "q":
            print("🎉✨✨✨✨✨✨✨✨✨✨✨🎉")
            print("🍾                      🍾")
            print("🥂Thank You for playing!🥂")
            print("🍾                      🍾")
            print("🎉✨✨✨✨✨✨✨✨✨✨✨🎉")
            if __name__=="__main__":
                sys.exit(f"\n 👋 Bye!,{name} 👋")
            else:
                return
    return play_rps

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Provides a personal game experience")

    parser.add_argument(
        "-n",
        "--name",
        metavar="name",
        required=True,
        help="The name of the person playing the game",
    )


    args = parser.parse_args()

    rock_paper_scissors = rps(args.name)
    rock_paper_scissors()
