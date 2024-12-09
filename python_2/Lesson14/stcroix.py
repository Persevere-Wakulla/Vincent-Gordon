from random import choice

capital ="Charlotte Amaliee"

bird= "Humming Bird"

flower ="Ginger Thomas"

song="Quelbe Music"

def randomfunfact():
    funfacts=[
        "There are 2 sets of Virgin Islands",
        "British Virgin Islands",
        "United States Virgin Islands",
        "There out of 4 Islands are Habitable.",
        "Water Island is a Bird Sanctuary",
        "Point Udall on St.croix is the most easten point of the continental United States"
    ]
    
    index = choice("012345")
    
    print(funfacts[int(index)])
    
if __name__ == "__main__":
    randomfunfact()
    