const { Movie } = require('../models')

const movieData = [
    {
        "title": "Minions: The Rise of Gru",
        "image": "https://image.tmdb.org/t/p/w1280/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        "description": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions."
    },
    {
        "title": "Jurassic World Dominion",
        "image": "https://image.tmdb.org/t/p/w1280/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        "description": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures."
    },
    {
        "title": "The Black Phone",
        "image": "https://image.tmdb.org/t/p/w1280/bxHZpV02OOu9vq3sb3MsOudEnYc.jpg",
        "description":"Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney."
    },
    {
        "title": "Top Gun: Maverick",
        "image": "https://image.tmdb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        "description": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen."
    },
    {
        "title": "Lightyear",
        "image": "https://image.tmdb.org/t/p/w1280/vpILbP9eOQEtdQgl4vgjZUNY07r.jpg",
        "description": "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox."
    },
    {
        "title": "Downton Abbey: A New Era",
        "image": "https://image.tmdb.org/t/p/w1280/r5n4CLoIjUcnT3shWDi6MHdJ25a.jpg",
        "description": "The Crawley family goes on a grand journey to the south of France to uncover the mystery of the dowager countess's newly inherited villa."
    },
    {
        "title": "崖の上のポニョ",
        "image": "https://image.tmdb.org/t/p/w1280/yp8vEZflGynlEylxEesbYasc06i.jpg",
        "description": "The son of a sailor, 5-year-old Sosuke, lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish."
    },
    {
        "title": "Men",
        "image": "https://image.tmdb.org/t/p/w1280/jo1Kv3P3UgDVk7JnUFr2Cl8WWUM.jpg",
        "description": "In the aftermath of a personal tragedy, Harper retreats alone to the beautiful English countryside, hoping to find a place to heal. But someone — or something — from the surrounding woods appears to be stalking her, and what begins as simmering dread becomes a fully-formed nightmare, inhabited by her darkest memories and fears."
    },
    {
        "title": "The Bob's Burgers Movie",
        "image": "https://image.tmdb.org/t/p/w1280/31vliI2mopLlh5kUoWpJZ19cF8y.jpg",
        "description": "When a ruptured water main creates an enormous sinkhole right in front of Bob's Burgers, it blocks the entrance indefinitely and ruins the Belchers’ plans for a successful summer. While Bob and Linda struggle to keep the business afloat, the kids try to solve a mystery that could save their family's restaurant. As the dangers mount, these underdogs help each other find hope and fight to get back behind the counter, where they belong."
    },
    {
        "title": "Crimes of the Future",
        "image": "https://image.tmdb.org/t/p/w1280/iSx6t4mj1FT4ePqPYHW287SmNa1.jpg",
        "description": "As the human species adapts to a synthetic environment, the body undergoes new transformations and mutations. Accompanied by his partner Caprice, celebrity performance artist Saul Tenser showcases the metamorphosis of his organs. Meanwhile, a mysterious group tries to use Saul's notoriety to shed light on the next phase of human evolution."
    },
    {
        "title": "Mr. Malcolm's List",
        "image": "https://image.tmdb.org/t/p/w1280/LXcoR9X3QXm0T9Qf9pw56EgRla.jpg",
        "description": "When she fails to meet an item on his list of requirements for a bride, Julia Thistlewaite is jilted by London’s most eligible bachelor, Mr. Malcolm. Feeling humiliated and determined to exact revenge, she convinces her friend Selina Dalton to play the role of his ideal match. Soon, Mr. Malcolm wonders whether he’s found the perfect woman...or the perfect hoax."
    },
    {
        "title": "The Sea Beast",
        "image": "https://image.tmdb.org/t/p/w1280/7363mrbx0Le5VOgX3GuxTF8ORbN.jpg",
        "description": "The life of a legendary sea monster hunter is turned upside down when a young girl stows away on his ship."
    },
];
const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;