const funFacts = [
    "A teaspoon of honey is the life's work of 12 bees.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. It lasted 38 to 45 minutes.",
    "Octopuses can change the color and texture of their skin to blend in with their surroundings within seconds.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Bananas naturally contain radiation due to their potassium-40 content, but they are completely safe to eat.",
    "Sloths can hold their breath longer than dolphins. They can slow their heart rate and stay underwater for up to 40 minutes.",
    "The longest-living land animal is a tortoise named Jonathan, who was born in 1832 and still lives today.",
    "The average cloud weighs about a million pounds, yet it stays afloat because the water droplets are spread out over a large area.",
    "Ants can carry objects up to 50 times their body weight due to their incredibly strong muscles and exoskeletons.",
    "The first oranges weren’t orange—they were originally green. The fruit was first cultivated in Southeast Asia, where they still grow green.",
    "The smell of freshly cut grass is actually a plant distress signal, as the grass releases chemicals when injured.",
    "Sea otters hold hands while they sleep to keep from drifting apart in the water.",
    "Butterflies taste with their feet because they have taste sensors on their legs.",
    "A blue whale’s heart weighs as much as a small car and can be heard beating from over two miles away.",
    "Cows have almost 360-degree vision because their eyes are located on the sides of their heads.",
    "The word ‘nerd’ was first coined by Dr. Seuss in his book ‘If I Ran the Zoo’ in 1950.",
    "The dot over the lowercase letters 'i' and 'j' is called a 'tittle.'",
    "There’s an island in Japan called Okunoshima that is home to hundreds of friendly, free-roaming rabbits.",
    "A jellyfish is about 95% water and has no brain, heart, or bones.",
    "There is a species of lizard called the basilisk lizard that can run on water, earning it the nickname ‘Jesus Christ lizard.’",
    "Honey never spoils—you could eat 3,000-year-old honey!",
    "A group of flamingos is called a 'flamboyance.'",
    "A bolt of lightning is five times hotter than the surface of the sun.",
    "The Eiffel Tower can grow taller in the summer due to heat expansion.",
    "Wombat poop is cube-shaped.",
    "Your taste buds have a lifespan of about 10 days before they regenerate.",
    "There’s a species of jellyfish that can technically live forever.",
    "A day on Venus is longer than a year on Venus.",
    "The world's smallest reptile was discovered in 2021—it fits on the tip of a finger.",
    "Scotland has over 400 words for 'snow.'"
];


function generateFact() {
    let randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById("fact").innerText = funFacts[randomIndex];
}
