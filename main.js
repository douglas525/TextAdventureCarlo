/*
Enter the name of your game into the string assigned to the gameName variable. 
Enter your name and the name of any collaborators into the string assigned to the creator variable. 
*/
let gameName = "Get To School!!";
let creator = "Carlo Kuang";

let gameNameContainer = document.getElementById("gameNameContainer")
gameNameContainer.textContent += gameName;

let NameContainer = document.getElementById("NameContainer")
NameContainer.textContent += creator;

/*----------
Create a new variable that will contain a new instance of the Text Game Engine. 
*/
let tge = new TextGameEngine();

/* ----------
Create a function named Start that will run when the player starts the game.
*/
let Start = function() {
    tge.setText("You hear a strange beeping...  Investigate?     (Disclaimer: Its in beta)");
    tge.characterDelay = 40;
    tge.setImage("Images/elena_bed_02_1.png");
    tge.setOptions([new GameOption("Get Up", () => tge.setScene(BedRoom)),
        new GameOption("Stay in bed", () => tge.setScene(GameoverBed))
    ]);
};

/* ----------
Add to the game by creating new Scenes. 
*/
let BedRoom = new Scene({
    text: "You get up, look at your alarm clock and realize you have woken up late!",
    audio: "Audio/Music/Strange_Dreams.mp3.mpeg",
    image: "Images/pixil-frame-0.png",
    options: [new GameOption("Get ready for school", () => {
        tge.setText("You are now ready for school. You enter the kitchen as you walk to the front door, you notice a pot of coffee. Drink?");
        tge.setImage("Images/pixil-frame-0 (2).png");
        tge.setOptions([new GameOption("Drink Coffee", () => tge.setScene(CoffeePath)),
            new GameOption("Head out to school", () => tge.setScene(Outside))
        ]);
    })],
});

let GameoverBed = new Scene({
    text: "You stay asleep in bed... Waking up to an angry mother grounding you for missing school. GameOver",
    image: "Images/pixil-frame-0 (3).png",
    options: [new GameOption("Start Over", () => Start())],
});

let CoffeePath = new Scene({
    text: "Okay you drank coffee, now what",
    options: [new GameOption("Head out to School", () => tge.setScene(Outside)),
    new GameOption("Drink More Coffee", () => {
tge.setText("Okay you drank MORE coffee, you should really get going now..");
tge.setOptions([new GameOption("Head out to school", () => tge.setScene(Outside)),
new GameOption("Drink Even More Coffee", () => tge.setScene(CoffeeDeath))
]);
    })]
});

let CoffeeDeath = new Scene({
    text: "Your heart beats faster and faster... Gameover, had no one told you to not drink a lot of coffee. (HeartAttack)",
    image: "Images/Screenshot 2024-11-14 094047.png",
    options: [new GameOption("Start Over", () => Start())],
});

let Outside = new Scene({
    text: "You breath a sigh of relief as you exit the building, ahead you see a Bus stop, you could also call for a cab. Else walking would also be a good stratigey as you know there is a train-station nearby.",
    image: "Images/abbey-road-london.webp",
    options: [new GameOption("Wait at the bus stop", () => tge.setScene(BusStop)),
        new GameOption("Call for a Taxi", () => tge.setScene(TaxiCabInside)),
        new GameOption("Wonder around to find the TrainStation", () => tge.setScene(Somewhere))]
});

let BusStop = new Scene({
    text: "You wait at a bus stop... Theres a vending machine. Buy a snack?",
    image: "Images/view-of-a-vending-machine-set-beside-zhejiangs-first-intelligent-solar-bus-station-in-hangzhou-city-east-chinas-zhejiang-province-23-august-2017-W7M2WG.jpg",
    options: [new GameOption("Wait for bus", () => tge.setScene(InsideBus)),
        new GameOption("Buy a snack", () => {
            tge.setText("As the bus arrives you realize you don\'t have enough money to pay for a ticket... GameOver"),
            tge.setOptions([new GameOption("Start Over", () => Start())])
        })]

});
let InsideBus = new Scene({
    text: "You ride the bus, as it reaches your stop.",
    image: "Images/Smith_Street_Fulton_Mall_td_(2018-07-07)_12a.jpg",
    options: [new GameOption("Get off on your stop", () => tge.setScene(PathToSchool)),
        new GameOption("Wait in the bus", () => {
            tge.setText("And you missed your stop. Now your lost and your parents are worried about you... GameOver"),
            tge.setImage(""),
            tge.setOptions("Start Over", () => Start())
        })
    ]
});
let TaxiCabInside = new Scene({
   text: "As you call over a taxi, you enter inside enjoying the view as you ride along.",
    image: "Images/Ford-Crown-Victoria-New-York-City-Taxi-Cab-Exterior-002-Front-Three-Quarters.avif",
    options: [new GameOption("Wait. . .", () => {
        tge.setText("Great you arrived on time, now to pay the cab driver!");
        tge.setOptions([new GameOption("Pay the driver", () => tge.setScene(TaxiGameOver))]);
    })]
});
let TaxiGameOver = new Scene({
    text: "Oh... you dont have enough money. Well, thats a gameover. And a grounding when you get home.",
    image: "Images/pixil-frame-0 (3).png",
    options: [new GameOption("Start Over", () => Start())]
});
let Somewhere = new Scene({
    text: "You have abolsutly no idea where you are...",
    image: "Images/200318140126009-1920x960.jpg",
    options: [new GameOption("Attempt to find a path to school", () => tge.setScene(GameOverLost)),
        new GameOption("???", () => tge.setScene(Backrooms)),
        new GameOption("Use Google Maps", () => tge.setScene(TrainStation))
]});
let PathToSchool = new Scene({
    text: "You can see the school in the distance... Run!",
    image: "Images/anime-style-picture-school-building-with-gate-walkway-generative-ai_902846-115168.avif",
    options: [new GameOption("Run to school", () => tge.setScene(SchoolWin))]
});
let SchoolWin = new Scene({
    text: "Congrats you made it to school! You win!",
    image: "Images/classroom_1542034403442_61914801_ver1.0.webp",
    options: [new GameOption("Congrats! Start Over?", () => Start())]
});
let GameOverLost = new Scene({
    text: "As you try to look around you realize you dont even know where you are anymore... Game Over: Lost",
    imagme: "Images/Forest.jpg",
    options: [new GameOption("Start Over", () => Start())]
});
let TrainStation = new Scene({
    text: "You finally found the trainstation! Theres a snack machcine. Would you like to get a snack to celebrate your success ay finding the train-station?",
    image: "Images/38090305082_90e79fa619_o.0.jpg",
    options: [new GameOption("Buy a snack", () => tge.setScene(GMMissedTrain)),
        new GameOption("Run to the platform", () => tge.setScene(TrainInside))
    ]});
    let GMMissedTrain = new Scene({
        text: "Ah bad luck, looks like you missed the train, shame. Game Over: Missed Train",
        image: "Images/gettyimages-1714795927-612x612.jpg",
        options: [new GameOption("Start Over", () => Start())]
    });
    let TrainInside = new Scene({
        text: "As you bolt down the stairs, the train had just arrived. As you get on the door closes behind you.",
        image: "Images/38090305082_90e79fa619_o.0.jpg",
        options: [new GameOption("Rest", () => {
            tge.setText("As you rest... The train pulls into the station.")
            tge.setOptions([new GameOption("Get off the train", () => tge.setScene(PathToSchool)),
                    new GameOption("Stay in the train", () => tge.setScene(GameOverTrain))
            ])
        })
        ]
    });
    let GameOverTrain = new Scene({
        text: "Why did you.? Well, you missed your stop and you have no idea where you are. Game Over: Station Missed",
        image: "Images/R211A_A_Train_@_Inwood-207th_Street_July_7th_2023.jpg",
        options: [new GameOption("Start Over", () => Start())]
    });
    let Backrooms = new Scene({
        text: "Player? Player where are you? I cant find you on my radar... Where are you? (You wake up in a weird place, the walls were yellow abd striped, carpet was also yellow...)",
        image: "Images/Backrooms_model.jpg",
        options: [new GameOption("Escape", () => {
            tge.setText("Escape? There is no escape! This isnt the narrator you know...");
            tge.setOptions("Escape", () => tge.setScene(NoWhere))
        })]
    });

/* ----------
DO NOT REMOVE OR EDIT ANY CODE BELOW THIS COMMENT! The game is ran by calling the Start function. 
*/
Start();