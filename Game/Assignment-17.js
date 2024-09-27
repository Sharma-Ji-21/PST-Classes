const prompt=require("prompt-sync")();
let name=prompt("Enter Ur Name-> ");
let newName=name.toLowerCase();
if (newName==''){
    console.log("Name can't be empty");
    return false;
}
if (newName.includes("yug") || newName.includes("gautam")){
    console.log("THIS GAME IS NOT FOR RUN-D");
    return false;
}
else {
    console.log(`Welcome ${name}`);
}

// # Dumsaraj Game in JavaScript
// # Assignment: Dumsaraj Game in JavaScript
// # Develop a "Dumsaraj" game where the computer selects a movie from a list, and players must guess it using multiple hints. Each movie has 10 unique hints, and the score decreases based on the number of hints used. The assignment is designed to help you practice working with arrays, objects, and logic in JavaScript.
// # Requirements
// # 1. Movie Data: Create an array of objects where each object contains:
// # The title of the movie.
// # An array of 10 hints associated with that movie.
// # 2. Hint System: The player will receive one hint at a time, starting with the first. Each time they guess incorrectly, they get another hint.
// # 3. Scoring System:
// # Start with a score of 10 points.
// # For each hint used, the score decreases by 1.
// # If the user guesses the movie after using:
// # 1 hint: 10 points.
// # 5 hints: 5 points.
// # 9 hints: 1 point.
// # If all 10 hints are used, the player receives no points and is encouraged to "Try again next time."
// # 4. Input and Output:
// # Use prompt-sync to capture user input and display messages to the console.
// # Ensure the program handles case sensitivity and allows for multiple guesses.
// # Game Flow
// # 1. Initialization:
// # The computer selects a random movie from the array of objects.
// # The user is provided with the first hint.
// # 2. User Interaction:
// # The user inputs their guess after each hint.
// # If the guess is correct, the game ends and displays the final score.
// # If the guess is incorrect, a new hint is shown, and the score decreases.
// # After 10 incorrect guesses, the game displays "Try again next time" and reveals the movie.
// # 3. Repeat Option:
// # After each game, prompt the user to play again.
// # If the user selects "yes", restart the game with a new random movie.
// # Detailed Instructions:
// # 1. Setup:
// # Create a new JavaScript file (e.g., 'dumsarajGame.js').
// # Use the 'prompt-sync' library for user input
// # npm install prompt-sync
// # 2. Code Structure:
// # Create an array named 'movies' with objects containing
// # The movie title ('title').
// # 10 hints ('hints' array).
// # Example:
// # const movies = [
// # {
// # title: "3 Idiots",
// # hints: [
// # "It starts with '3'.",
// # "Three college friends, but one of them is the smartest.",
// # "It's not about actual idiots.",
// # // Add more hints...
// # ]
// # },
// # // Add more movies...
// # ];
// # 3. Game Logic:
// # Randomly select a movie from the array.
// # Display the first hint to the user.
// # After each guess:
// # If correct, display the movie title and score.
// # If incorrect, provide the next hint and decrease the score by 1.
// # If the user fails to guess the movie after 10 hints, reveal the movie and ask if they want to play again.
// # Evaluation Criteria
// # 1. Correct Functionality:
// # The game should run smoothly with no errors.
// # The player should be able to guess the movie using hints and see their score.
// # 2. Hint and Score System:
// # Properly implemented hint and score logic.
// # The user should be given hints in sequence, and the score should decrease accordingly.
// # 3. Edge Cases:
// # Handle case sensitivity (e.g., "Inception" vs. "inception").
// # Handle unexpected inputs from the user.
// # 4. Code Quality:
// # Ensure your code is clean, well organized, and properly commented.
// # Bonus Challenge
// # For extra credit, you can:
// # Add more movies (e.g., 10+ movies).
// # Implement two teams and consta scoring leaderboard that tracks the scores and after deciding the number of rounds by teams, both the teams play and when game ends computer announce the winner.
// # You can utilise the following movies array:


const movies = [
{
title: "3 Idiots",
hints: [
"It starts with '3'. and it is based on engineering",
"Three college friends, but one of them is the smartest.",
"It's not about actual idiots.",
"A famous line: 'All is well!'",
"Engineering students in trouble.",
"One of them is a 'Chatur'.",
"It features a baby being delivered with a vacuum cleaner.",
"One friend disappears after college.",
"Based on a Chetan Bhagat novel.",
"Aamir Khan plays the lead role."
]
},
{
title: "Dilwale Dulhania Le Jayenge",
hints: [
"It starts with 'D'. and is a romantic movie",
"The movie's initials are DDLJ.",
"A train scene where a guy stretches his hand to help the girl.",
"Europe, mustard fields, and a stubborn dad.",
"The lead couple meet on a Europe trip.",
"Released in 1995, but still runs in a Mumbai theatre!",
"Features Raj and Simran's love story.",
"SRK says, 'Bade bade deshon mein'.",
"Amandaji must be convinced for the shaadi.",
"One word: iconic!"
]
},
{
title: "Sholay",
hints: [
"It starts with 'S'. and was a hit movie and still jokes and memes are created on it",
"Two friends and a villain with a crazy laugh.",
"Famous dialogue: 'Kitne aadmi the?'",
"There?s a lot of fire in this movie, literally and figuratively.",
"A dacoit called Gabbar.",
"The story is set in a small village called Ramgarh.",
"Veeru and Jai, iconic duo.",
"Thakur has a very 'hands-off' approach to things.",
"Released in 1975, a classic action-drama.",
"A unique mix of friendship, revenge, and bandits."
]
},
{
title: "Kabhi Khushi Kabhi Gham",
hints: [
"It starts with 'K'. inspired by indian family",
"A family drama with a lot of crying and hugs.",
"Amitabh Bachchan plays a strict father.",
"It's not always about happiness in this one.",
"Poo is obsessed with herself.",
"London and India both play a big role.",
"The tagline says: 'It's all about loving your parents'.",
"Big family reunions and long emotional scenes.",
"Directed by Karan Johar.",
"SRK and Kajol steal the show."
]
},
{
title: "Zindagi Na Milegi Dobara",
hints: [
"It starts with 'Z'. and it is based on friendship and romance",
"Three friends go on a bachelor road trip.",
"The title means 'You only live once'.",
"Tomatina festival and sky diving!",
"Hrithik, Farhan, and Abhay star in this one.",
"It?s a journey of friendship and self-discovery.",
"There's poetry in this movie, literally.",
"A lot of beautiful Spanish landscapes.",
"One of them is afraid of water, but still dives.",
"Directed by Zoya Akhtar."
]
},
{
title: "Lagaan",
hints: [
"It starts with 'L'. it was a very long movie of amit khan",
"A cricket match between villagers and British officers.",
"It?s not just a game, it?s a matter of survival.",
"Aamir Khan stars in this epic.",
"A tax issue, but the solution is cricket.",
"Set in the colonial era.",
"A whole village versus British arrogance.",
"Nominated for an Oscar.",
"Team spirit saves the day!",
"A very long movie, but totally worth it."
]
},
{
title: "Chennai Express",
hints: [
"It starts with 'C'. it's romantic movies based on tamil girl",
"A man takes his grandfather?s ashes to Rameshwaram.",
"A train journey changes everything.",
"SRK plays the lead role.",
"A lot of South Indian flavor, especially Tamil Nadu.",
"Deepika Padukone speaks a funny Tamil accent.",
"There?s a famous 'lungi dance'.",
"It's more about adventure than just ashes.",
"Lots of comedy and action.",
"The train is almost a character in the movie!"
]
},
{
title: "PK",
hints: [
"It starts with 'P'. based on hindu belief systems",
"An alien who likes to drink water from all bottles.",
"Aamir Khan with a radio around his neck.",
"It questions God and religion.",
"A man searching for his 'remote control'.",
"He comes from another planet.",
"He befriends Anushka Sharma?s character.",
"He dresses in random clothes throughout the movie.",
"The movie takes place in India.",
"He learns about Earth?s customs in a very funny way."
]
},
{
title: "Dangal",
hints: [
"It starts with 'D'. based on real inspiring story",
"A wrestler who trains his daughters.",
"Aamir Khan put on a lot of weight for this role.",
"It's about women's wrestling in India.",
"Geeta and Babita are the names you should remember.",
"Inspired by a true story.",
"A strict yet loving father.",
"The national anthem scene will give you chills.",
"It?s not just a sports movie; it?s an emotional journey.",
"Phogat family?s real-life story."
]
},
{
title: "Bajrangi Bhaijaan",
hints: [
"It starts with 'B'. it's an old bollybood movie",
"A mute girl from Pakistan is lost in India.",
"Salman Khan plays a pure-hearted man.",
"It's a cross-border emotional drama.",
"A lot of traveling on foot to help the girl.",
"Harshaali Malhotra plays the little girl.",
"It's not just about religion, but humanity.",
"Salman becomes her 'Bajrangi'.",
"The girl can?t speak but communicates through her innocence.",
"A lot of tears and a lot of love."
]
},
{
title: "Andaz Apna Apna",
hints: [
"It starts with 'A'. it's comedy movie of amir khan",
"Two guys with big dreams and very small brains.",
"A comedy of errors.",
"Salman Khan and Aamir Khan together.",
"A famous character: Crime Master Gogo.",
"A lot of confusion about who loves whom.",
"Famous line: 'Teja main hoon, mark idhar hai'.",
"The two friends want to marry rich girls.",
"A lot of laughs, even after 20+ years.",
"Cult classic comedy from the 90s."
]
},
{
title: "Munnabhai MBBS",
hints: [
"It starts with 'M'. based on doctors",
"A gangster who becomes a fake doctor.",
"Sanjay Dutt plays the lead.",
"His sidekick is called Circuit.",
"A new way of healing people: 'Jadoo ki Jhappi'.",
"It?s a mix of comedy and emotion.",
"The hospital scenes are hilarious.",
"The story is about love, family, and dreams.",
"The gangster tries to impress his parents.",
"Laughter and heartwarming moments combined."
]
},
{
title: "Don",
hints: [
"It starts with 'D'. based on crime",
"A criminal mastermind who?s impossible to catch.",
"Don ko pakadna mushkil hi nahi, namumkin hai.",
"A remake of a classic movie starring Amitabh Bachchan.",
"SRK plays a double role.",
"There?s a twist at the end.",
"A lot of chase sequences and disguises.",
"The police can?t figure out who the real Don is.",
"The movie?s tagline says it all.",
"It?s slick and stylish."
]
},
{
title: "Jab We Met",
hints: [
"It starts with 'J'.",
"A love story that starts on a train.",
"A talkative girl meets a depressed guy.",
"Geet loves to talk, and Aditya loves silence.",
"A runaway bride turns things upside down.",
"Famous dialogues: 'Main apni favourite hoon'.",
"The second half is set in Punjab.",
"Kareena Kapoor and Shahid Kapoor star in this.",
"The movie?s title is related to their first meeting.",
"A journey that changes both their lives."
]
},
{
title: "Golmaal",
hints: [
"It starts with 'G'.",
"A movie full of confusion and comedy.",
"Ajay Devgn and his gang of crazy friends.",
"Pranks, tricks, and non-stop laughter.",
"There?s a blind couple in this movie, or are they?",
"No one knows who?s lying and who?s telling the truth.",
"Famous line: 'Golmaal hai bhai sab golmaal hai'.",
"A comedy of misunderstandings.",
"Each sequel gets crazier.",
"Directed by Rohit Shetty."
]
}
];
let randomiser=Math.ceil((Math.random()*(15-1))+1)
let randomMovie=movies[randomiser];
let length=randomMovie.hints.length;
console.log(randomMovie.hints[0]);
let input=prompt("Guess the Movie-> ");
for (let i=1; i<length; i++) {
    if (input!==randomMovie.title){
        console.log(`U guessed it wrong, Here Is The Hint: ${randomMovie.hints[i]}`);
        input=prompt("Guess the Movie-> ");
    }
    else{
        if (i<length){
            console.log(`Congratulation U get it and Secured ${10-i+1} points`)
            break;
        }
        else if(i==length){
            console.log(`Try again next time`)
        }
    }
}
