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

    text: "What is the general speed limit on national roads?",
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
    answer: 3,
    options: [
      { id: 1, text: "60 km/h" },
      { id: 2, text: "120 km/h" },
      { id: 3, text: "100 km/h" },
    ],
  },
  {
    id: "2",
    text: "When another vehicle is overtaking you, which of the following statements applies?",
    imageSrc: "/Roadsigns/RTM3.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/icons.png",
    imageAlt: "K53 roadsigns",
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
    imageSrc: "/Roadsigns/rtm3.png",
    imageAlt: "K53 roadsigns",
    answer: 1,
    options: [
      { id: 1, text: "These are the lines for pedestrians to cross at." },
      { id: 2, text: "These lines divide the traffic." },
      { id: 3, text: "These are the stop lines for an." },
    ],
  },
];
