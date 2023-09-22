export type Question = {
  id: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  answer: number;
  options: { id: number; text: string }[];
};

export const questions: Question[] = [
  {
    id: "1",
    text: "What is the most important rule of the road in South Africa?",
    answer: 2,
    options: [
      { id: 1, text: "Never exceed the speed limit." },
      { id: 2, text: "Keep as far to the left as is safe." },
      { id: 3, text: "Always be a courteous and helpful driver." },
    ],
  },
  {
    id: "2",
    text: "When another vehicle is overtaking you, which of the following statements applies?",
    answer: 3,
    options: [
      { id: 1, text: "Hoot and wave." },
      { id: 2, text: "Check your speed." },
      { id: 3, text: "Don't accelerate" },
    ],
  },
  {
    id: "3",
    text: "Which of the following is correct?",
    answer: 2,
    options: [
      { id: 1, text: "Vehicle lights must be switched on at sunrise." },
      {
        id: 2,
        text: "Use emergency flashers only when the vehicle is stationary, or in an emergency.",
      },
      { id: 3, text: "Use bright beams only in urban areas." },
    ],
  },
  {
    id: "4",
    text: "Car and truck tyres must have a minimum tread depth of ...",
    answer: 3,
    options: [
      { id: 1, text: "At least 2mm across 80% 0f tread width." },
      { id: 2, text: "At least 1mm across 80% of the tread width." },
      { id: 3, text: "At least 1mm across the entire tread width." },
    ],
  },
  {
    id: "5",
    text: "What does this sign warn you about?",
    imageSrc: "/Roadsigns/narrowroad.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      { id: 1, text: "Road ahead narrows from both sides." },
      { id: 2, text: "Bridge ahead" },
      { id: 3, text: "Narrow gate ahead" },
    ],
  },
  {
    id: "6",
    text: "What does this sign mean?",
    imageSrc: "/Roadsigns/rightofway.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "Slow down in case other vehicles are comming." },
      { id: 2, text: "Right of way is yours" },
      { id: 3, text: "Be on the lookout for a yellow flashing light" },
    ],
  },
  {
    id: "7",
    text: "When towing vehicles, the distance between the two vehicles...",
    answer: 2,
    options: [
      { id: 1, text: "Must not be greater than 3 m." },
      { id: 2, text: "Must not be greater than 3.5 m." },
      { id: 3, text: "Must not be greater than 4 m." },
    ],
  },
  {
    id: "8",
    text: "What does this sign forbid for a motor car?",
    imageSrc: "/Roadsigns/cartimelimit.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "Parking here for 3 hours." },
      { id: 2, text: "Stopping between the times indicated." },
      { id: 3, text: "Driving here between 06:00 and 09:00." },
    ],
  },
  {
    id: "9",
    text: "This road marking shows that:",
    imageSrc: "/Roadsigns/doubleline.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "This is a two-way street." },
      { id: 2, text: "You may not cross or overtake in this area." },
      { id: 3, text: "None of the above." },
    ],
  },
  {
    id: "10",
    text: "When approaching a traffic signal and the red light is flashing, you must:",
    answer: 2,
    options: [
      {
        id: 1,
        text: "Keep moving slowly through the intersection if there is no other traffic.",
      },
      {
        id: 2,
        text: "Stop and when safe, pull off again as at a four-way stop.",
      },
      { id: 3, text: "Stop and wait for it to turn green before you can go." },
    ],
  },
  {
    id: "11",
    text: "Where is it legal to stop your vehicle?",
    answer: 1,
    options: [
      { id: 1, text: "Within 9 m of a pedestrian crossing." },
      { id: 2, text: "Within 3m of an intersection." },
      { id: 3, text: "Opposite another vehicle where the road is 8 m wide." },
    ],
  },
  {
    id: "12",
    text: "This sign prohibits you from driving:",
    imageSrc: "/Roadsigns/night.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "More than 100 times at night." },
      { id: 2, text: "At more than 100km/h at night." },
      { id: 3, text: "At less than 100 km/h at night." },
    ],
  },
  {
    id: "13",
    text: "What is the longest time you may leave your vehicle parked in one place on a public road in an urban area?",
    answer: 3,
    options: [
      { id: 1, text: "21 days." },
      { id: 2, text: "10 days." },
      { id: 3, text: "7 days." },
    ],
  },
  {
    id: "14",
    text: "This sign warns you of:",
    imageSrc: "/Roadsigns/water.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "A good fishing spot." },
      { id: 2, text: "A drift." },
      { id: 3, text: "A jetty edge or river bank." },
    ],
  },
  {
    id: "15",
    text: "What is a safe following distance at all speeds?",
    answer: 2,
    options: [
      { id: 1, text: "3 seconds." },
      { id: 2, text: "2 seconds." },
      { id: 3, text: "Both." },
    ],
  },
  {
    id: "16",
    text: "You may not use your hooter except under the following circumstances:",
    answer: 3,
    options: [
      {
        id: 1,
        text: "To signal to someone that you want to offer them a lift.",
      },
      { id: 2, text: "To tell the driver in front to go faster." },
      { id: 3, text: "In an attempt to avoid a crash." },
    ],
  },
  {
    id: "17",
    text: "Road markings RTM3 tell us that:",
    imageSrc: "/Roadsigns/Rtm 3.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      { id: 1, text: "These are the lines for pedestrians to cross at." },
      { id: 2, text: "These lines divide the traffic." },
      { id: 3, text: "These are the stop lines for an." },
    ],
  },
  {
    id: "18",
    text: "A driver may:",
    answer: 3,
    options: [
      { id: 1, text: "Allow a passenger to help him steer the vehicle." },
      {
        id: 2,
        text: "Leave the vehicle unattended while the engine is still running.",
      },
      { id: 3, text: "Use hand signals on a freeway in an emergancy." },
    ],
  },
  {
    id: "19",
    text: "A vehicle licence is valid for:",
    answer: 2,
    options: [
      { id: 1, text: "24 months." },
      {
        id: 2,
        text: "12 months.",
      },
      { id: 3, text: "90 days." },
    ],
  },
  {
    id: "20",
    text: "Road marking RTM1 means that:",
    imageSrc: "/Roadsigns/Rtm1.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      { id: 1, text: "If you are in vehicle A you may treat this as a yield." },
      {
        id: 2,
        text: "If you are in vehicle B, you must slow down with vehicle A and when is moves off you can move with it.",
      },
      { id: 3, text: "Vehicle A must stop before the line RTM 1." },
    ],
  },
  {
    id: "21",
    text: "You can overtake on the left if ...",
    answer: 3,
    options: [
      {
        id: 1,
        text: "You are in a one-way street that is wide enough for two or more vehicles to drive abreast.",
      },
      {
        id: 2,
        text: "You are directed to do so by a traffic officer .",
      },
      { id: 3, text: "Both of the above." },
    ],
  },
  {
    id: "22",
    text: "If you are filling up with fuel, you should not...",
    answer: 1,
    options: [
      {
        id: 1,
        text: "Let the engine run.",
      },
      {
        id: 2,
        text: "Use the hooter.",
      },
      { id: 3, text: "Get out of your vehicle." },
    ],
  },
  {
    id: "23",
    text: "When parking on a public road at night you should use your parking lights: ",
    answer: 1,
    options: [
      {
        id: 1,
        text: "If you are parked in a street that is not painted with parking lines or properly lit.",
      },
      {
        id: 2,
        text: "If you are parked well off the road.",
      },
      { id: 3, text: "If you are within 10 m of a lit street lamp." },
    ],
  },
  {
    id: "24",
    text: "You may not obtain a learner's licence if: ",
    answer: 2,
    options: [
      {
        id: 1,
        text: "You are blind in one eye.",
      },
      {
        id: 2,
        text: "You were declared unfit to obtain a licence for a certain period and that period is not over.",
      },
      { id: 3, text: "You are older than 70 years, or younger than 18 years." },
    ],
  },
  {
    id: "25",
    text: "This sign warns you about:",
    imageSrc: "/Roadsigns/slippery.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "A wet road." },
      {
        id: 2,
        text: "Drunk driving.",
      },
      { id: 3, text: "A slippery road." },
    ],
  },
  {
    id: "26",
    text: "Before changing lanes the final thing you must do is: ",
    answer: 2,
    options: [
      {
        id: 1,
        text: "Check your mirror.",
      },
      {
        id: 2,
        text: "Check your blind spot.",
      },
      { id: 3, text: "Check the road ahead." },
    ],
  },
  {
    id: "27",
    text: "This sign prohibits you from:",
    imageSrc: "/Roadsigns/noovertake.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      { id: 1, text: "No overtaking for the next 500 m." },
      {
        id: 2,
        text: "No overtaking for the next 200 m.",
      },
      { id: 3, text: "No overtaking for the next 1 km." },
    ],
  },
  {
    id: "28",
    text: "Under normal circumstances you may do the following:",
    answer: 3,
    options: [
      {
        id: 1,
        text: "Fill up with petrol while the engine is running.",
      },
      {
        id: 2,
        text: "Drive on a sidewalk.",
      },
      { id: 3, text: "None of the above." },
    ],
  },
  {
    id: "29",
    text: "What is the meaning of this sign?",
    imageSrc: "/Roadsigns/deadend.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      { id: 1, text: "It warns of a dead end to the right." },
      {
        id: 2,
        text: "It warns of a T-junction ahead.",
      },
      { id: 3, text: "It shows an entrance to a shopping center." },
    ],
  },
  {
    id: "30",
    text: "What is this exclusive parking bay reserved for?",
    imageSrc: "/Roadsigns/loadingzone.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "Lay-bye for heavy vehicle drivers to rest overnight." },
      {
        id: 2,
        text: "A loading zone.",
      },
      { id: 3, text: "A landing zone." },
    ],
  },
  {
    id: "31",
    text: "Is your following distance safe if the vehicle is front of you suddenly stops and you are able to...",
    answer: 1,
    options: [
      {
        id: 1,
        text: "Stop without swerving.",
      },
      {
        id: 2,
        text: "Hoot and accelerate past it.",
      },
      { id: 3, text: "Swerve and stop your vehicle next to the other." },
    ],
  },
  {
    id: "32",
    text: "What must be your responce when seeing this control sign?",
    imageSrc: "/Roadsigns/yeild.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "Slow down and hoot." },
      {
        id: 2,
        text: "Give way to pedestrians.",
      },
      { id: 3, text: "Stop for pedestrians." },
    ],
  },
  {
    id: "33",
    text: "Seat belts must be worn:",
    answer: 1,
    options: [
      {
        id: 1,
        text: "When driving on all public roads.",
      },
      {
        id: 2,
        text: "While parking.",
      },
      { id: 3, text: "When the vehicle is parked." },
    ],
  },
  {
    id: "34",
    text: "This sign brings your attention to:",
    imageSrc: "/Roadsigns/trafficlightsign.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "A robot out of order." },
      {
        id: 2,
        text: "A police roadblock.",
      },
      { id: 3, text: "A traffic signal." },
    ],
  },
  {
    id: "35",
    text: "This sign tells you to:",
    imageSrc: "/Roadsigns/rightarrow.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "Sharp right turn ahead." },
      {
        id: 2,
        text: "Turn right at the junction ahead.",
      },
      { id: 3, text: "Road ahead curves to the right." },
    ],
  },
  {
    id: "36",
    text: "When changing lanes, you must:",
    answer: 3,
    options: [
      {
        id: 1,
        text: "Indicate that you are going to change lanes.",
      },
      {
        id: 2,
        text: "Apply your brakes a few times, then change lanes.",
      },
      {
        id: 3,
        text: "Check for traffic behind and in the blind spot, then signal and change lanes when it is safe.",
      },
    ],
  },
  {
    id: "37",
    text: "This sign warns you of:",
    imageSrc: "/Roadsigns/concealed.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      { id: 1, text: "Sharp curves ahead." },
      {
        id: 2,
        text: "Concealed driveway ahead.",
      },
      { id: 3, text: "The road winding ahead." },
    ],
  },
  {
    id: "38",
    text: "What is the general speed limit on national roads?",
    answer: 3,
    options: [
      { id: 1, text: "60 km/h." },
      { id: 2, text: "120 km/h." },
      { id: 3, text: "100 km/h." },
    ],
  },
  {
    id: "39",
    text: "Which one of these statements are not correct:",
    answer: 1,
    options: [
      {
        id: 1,
        text: "When making an urgent stop, it takes longer on a dry road than on a wet road.",
      },
      {
        id: 2,
        text: "When making an urgent stop, it takes longer if the vehicle is at a higher speed.",
      },
      {
        id: 3,
        text: "When making an urgent stop, it takes longer if the vehicle is heavily loaded.",
      },
    ],
  },
  {
    id: "40",
    text: "Your vehicle will be towed away and impounded if left:",
    answer: 2,
    options: [
      {
        id: 1,
        text: "For 12 hours in the same place on a public road in a rural area.",
      },
      {
        id: 2,
        text: "For 24 hours or more in the same place on a public road in a rural area.",
      },
      {
        id: 3,
        text: "For 5 days in the same place on a public road in an urban area.",
      },
    ],
  },
  {
    id: "41",
    text: "When you see this sign you must ...",
    imageSrc: "/Roadsigns/countdown.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "Check if your mileage reads 300, 200, 100." },
      {
        id: 2,
        text: "Stop for a police roadblock in 300 m.",
      },
      { id: 3, text: "Begin slowing down if turning off a freeway." },
    ],
  },
  {
    id: "42",
    text: "Which one of these statements are not correct:",
    answer: 2,
    options: [
      {
        id: 1,
        text: "Passengers may ride in the vehicle if the driver only has a learner's licence.",
      },
      {
        id: 2,
        text: "Passengers may use hand signals out of the window.",
      },
      {
        id: 3,
        text: "Passengers may change the channel of the radio for the driver.",
      },
    ],
  },
  {
    id: "43",
    text: "Road marking A tells you that:",
    imageSrc: "/Roadsigns/nostopping.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "This is a stopping area for emergency vehicles only." },
      {
        id: 2,
        text: "This is a reserved area for motorcyles.",
      },
      { id: 3, text: "You may not stop or park here at any time." },
    ],
  },
  {
    id: "44",
    text: "This sign tells all drivers that:",
    imageSrc: "/Roadsigns/10ton.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      {
        id: 1,
        text: "Vehicles with a GVM of 10 t or more must use this portion of the road.",
      },
      {
        id: 2,
        text: "They are only allowed to drive through here 10 times.",
      },
      {
        id: 3,
        text: "Vehicles exceeding 10 t GVM may not proceed beyond the sign.",
      },
    ],
  },
  {
    id: "45",
    text: "When is it not necessary to switch on your headlights?",
    answer: 2,
    options: [
      {
        id: 1,
        text: "If road users and vehicles are not clearly visible within 150 m.",
      },
      {
        id: 2,
        text: "Form sunrise to sunset.",
      },
      {
        id: 3,
        text: "In rain, mist and or low visibility.",
      },
    ],
  },
  {
    id: "46",
    text: "This sign warns you that:",
    imageSrc: "/Roadsigns/gravel.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      {
        id: 1,
        text: "An even roaday begins.",
      },
      {
        id: 2,
        text: "There are loose stones.",
      },
      {
        id: 3,
        text: "A gravel road begins.",
      },
    ],
  },
  {
    id: "47",
    text: "This area is reserved for:",
    imageSrc: "/Roadsigns/Rcar.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      {
        id: 1,
        text: "Minibusues.",
      },
      {
        id: 2,
        text: "Motor vehicles.",
      },
      {
        id: 3,
        text: "Taxis.",
      },
    ],
  },
  {
    id: "48",
    text: "What does this temporary traffic controle sign warn us about?",
    imageSrc: "/Roadsigns/patrol.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      {
        id: 1,
        text: "Roadworks ahead with stop control.",
      },
      {
        id: 2,
        text: "Vehicle inspection stop ahead.",
      },
      {
        id: 3,
        text: "Scolar patrol ahead.",
      },
    ],
  },
  {
    id: "49",
    text: "What else is important about the hooter? ",
    answer: 1,
    options: [
      {
        id: 1,
        text: "The tone or pitch of the sound may not change.",
      },
      {
        id: 2,
        text: "You can hoot once in front of a hospital.",
      },
      { id: 3, text: "You must be able to hear it from at least 40 m away." },
    ],
  },
  {
    id: "50",
    text: "This sign indicates...",
    imageSrc: "/Roadsigns/parking.png",
    imageAlt: "K53 roadsigns",
    answer: 2,
    options: [
      {
        id: 1,
        text: "That all vehicles may park there between those times.",
      },
      {
        id: 2,
        text: "That you are allowed to park there at those times.",
      },
      {
        id: 3,
        text: "None of the above.",
      },
    ],
  },
];
