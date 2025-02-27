const mongoose = require("mongoose");
const Item = require("./../models/Items");
const dontenv = require("dotenv");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
    seedDB().then(() => {
      mongoose.connection.close();
    });
  })
  .catch((err) => {
    console.log(err);
  });

const seedItems = [
  {
    name: "bananas",
    category: "fruits",
    expirationDays: 5,
  },
  {
    name: "apples",
    category: "fruits",
    expirationDays: 30,
  },
  {
    name: "apple juice",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "apricots",
    category: "fruits",
    expirationDays: 4,
  },
  {
    name: "avocados",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "blackberries",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "blueberries",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "boysenberries",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "casaba melons",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "cherimoya",
    category: "fruits",
    expirationDays: 1,
  },
  {
    name: "cherries",
    category: "fruits",
    expirationDays: 4,
  },
  {
    name: "cantaloupe",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "cantaloupe melons",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "cranberries",
    category: "fruits",
    expirationDays: 21,
  },
  {
    name: "clementines",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "cranberry sauce",
    category: "fruits",
    expirationDays: 10,
  },
  {
    name: "elderberries",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "cranberry juice",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "dates",
    category: "fruits",
    expirationDays: 365,
  },
  {
    name: "dried plums",
    category: "fruits",
    expirationDays: 180,
  },
  {
    name: "currants",
    category: "fruits",
    expirationDays: 1,
  },
  {
    name: "crenshaw melons",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "figs",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "feijoa",
    category: "fruits",
    expirationDays: 1,
  },
  {
    name: "fruit drinks or punch",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "fruit salad",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "gooseberries",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "grapefruit",
    category: "fruits",
    expirationDays: 21,
  },
  {
    name: "grapes",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "grapefruit juice",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "guava",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "grape juice",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "honeydew melons",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "huckleberries",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "mangos",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "mixed fruit- fresh",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "nectarines",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "olives",
    category: "fruits",
    expirationDays: 30,
  },
  {
    name: "kiwi fruit",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "orange juice",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "juice smoothies",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "kumquats",
    category: "fruits",
    expirationDays: 14,
  },
  {
    name: "lemon juice",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "limes",
    category: "fruits",
    expirationDays: 21,
  },
  {
    name: "lemonade",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "lemons",
    category: "fruits",
    expirationDays: 21,
  },
  {
    name: "litchis",
    category: "fruits",
    expirationDays: 5,
  },
  {
    name: "lime juice",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "oranges",
    category: "fruits",
    expirationDays: 21,
  },
  {
    name: "papayas",
    category: "fruits",
    expirationDays: 5,
  },
  {
    name: "passion fruit",
    category: "fruits",
    expirationDays: 5,
  },
  {
    name: "peaches",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "pears",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "persimmons",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "pineapple juice",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "plantains",
    category: "fruits",
    expirationDays: 5,
  },
  {
    name: "pineapples",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "pineapple",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "pomegranate juice",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "plums",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "pomegranates",
    category: "fruits",
    expirationDays: 30,
  },
  {
    name: "quinces",
    category: "fruits",
    expirationDays: 14,
  },
  {
    name: "prickly pears",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "prunes",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "sapote",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "raisins",
    category: "fruits",
    expirationDays: 180,
  },
  {
    name: "raspberries",
    category: "fruits",
    expirationDays: 2,
  },
  {
    name: "star fruit",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "strawberries",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "tangerines",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "watermelon",
    category: "fruits",
    expirationDays: 3,
  },
  {
    name: "alfalfa sprouts",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "tamarind paste",
    category: "fruits",
    expirationDays: 14,
  },
  {
    name: "ugli fruit",
    category: "fruits",
    expirationDays: 7,
  },
  {
    name: "artichokes",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "asparagus",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "arugula",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "baby carrots",
    category: "vegetables",
    expirationDays: 14,
  },
  {
    name: "banana peppers",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "bean salad",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "bamboo shoots",
    category: "vegetables",
    expirationDays: 5,
  },
  {
    name: "bitter melon",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "beans",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "beets",
    category: "vegetables",
    expirationDays: 14,
  },
  {
    name: "beet greens",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "bell peppers / sweet peppers",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "bok choy",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "broccoli",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "broad beans",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "broccoli raab / rapini",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "broccoli rabe / rapini",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cabbage",
    category: "vegetables",
    expirationDays: 30,
  },
  {
    name: "brussels sprouts",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cabbage rolls / stuffed cabbage",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "carrot juice",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "chinese long beans",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "chinese food: vegetable chop suey",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "chinese food: vegetable chow mein / lo mein",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "chopped onions / sliced onions",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "collard greens",
    category: "vegetables",
    expirationDays: 4,
  },
  {
    name: "coleslaw",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cream of broccoli soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "corn on the cob",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cream of asparagus soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cassava / yucca/ manioc",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "cauliflower",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "carrots",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cream of celery soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "celeriac / celery root",
    category: "vegetables",
    expirationDays: 10,
  },
  {
    name: "celery",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "chili peppers",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "chayote",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "chicory greens",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "chinese cabbage",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cream of mushroom soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cucumber",
    category: "vegetables",
    expirationDays: 1,
  },
  {
    name: "cream of onion soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "cream of potato soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "dandelion greens",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "eggplant",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "dock",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "fennel",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "fiddlehead ferns",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "endive",
    category: "vegetables",
    expirationDays: 4,
  },
  {
    name: "french fries",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "garlic",
    category: "vegetables",
    expirationDays: 5,
  },
  {
    name: "escarole",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "frisee lettuce",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "french onion soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "green beans  / string beans / wax beans",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "ginger root",
    category: "vegetables",
    expirationDays: 28,
  },
  {
    name: "habanero peppers",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "guero peppers",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "horseradish root",
    category: "vegetables",
    expirationDays: 30,
  },
  {
    name: "jalapeno peppers",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "green onions",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "mesclun greens",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "minestrone soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "mushrooms",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "mustard greens",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "mixed vegetables",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "nopales",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "jerusalem artichokes",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "okra",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "jicama",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "kale",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "kohlrabi",
    category: "vegetables",
    expirationDays: 4,
  },
  {
    name: "leeks",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "lettuce",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "poblano peppers",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "potatoes",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "potato salad",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "radishes",
    category: "vegetables",
    expirationDays: 10,
  },
  {
    name: "pumpkin",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "rutabagas",
    category: "vegetables",
    expirationDays: 14,
  },
  {
    name: "salsify",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "sauerkraut",
    category: "vegetables",
    expirationDays: 180,
  },
  {
    name: "rhubarb",
    category: "vegetables",
    expirationDays: 5,
  },
  {
    name: "onions",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "radicchio",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "peas",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "parsnips",
    category: "vegetables",
    expirationDays: 21,
  },
  {
    name: "peppers",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "pimientos",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "sugar snap peas",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "sweet potatoes",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "sweet onions",
    category: "vegetables",
    expirationDays: 30,
  },
  {
    name: "summer squash",
    category: "vegetables",
    expirationDays: 4,
  },
  {
    name: "swiss chard",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "taro",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "tomatillos",
    category: "vegetables",
    expirationDays: 14,
  },
  {
    name: "tamarillos",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "serrano peppers",
    category: "vegetables",
    expirationDays: 1,
  },
  {
    name: "shallots",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "tomato bisque",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "sliced mushrooms  / chopped mushrooms",
    category: "vegetables",
    expirationDays: 4,
  },
  {
    name: "snow peas",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "spinach",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "sorrel",
    category: "vegetables",
    expirationDays: 1,
  },
  {
    name: "squash",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "squash soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "tomato soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "tomatoes",
    category: "vegetables",
    expirationDays: 5,
  },
  {
    name: "turnip greens",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "turnips",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "vegetable broth or stock",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "truffles",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "vegetable soup",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "water chestnuts",
    category: "vegetables",
    expirationDays: 7,
  },
  {
    name: "yams",
    category: "vegetables",
    expirationDays: 3,
  },
  {
    name: "american cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "appenzeller cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "zucchini",
    category: "vegetables",
    expirationDays: 4,
  },
  {
    name: "watercress",
    category: "vegetables",
    expirationDays: 2,
  },
  {
    name: "bel paese cheese",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "blue cheese crumbles",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "asiago cheese",
    category: "dairy & eggs",
    expirationDays: 240,
  },
  {
    name: "brick cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "blue cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "beaufort cheese",
    category: "dairy & eggs",
    expirationDays: 180,
  },
  {
    name: "boursault cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "brie cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "butter",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "camembert cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "buttermilk",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "cheddar cheese",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "cheshire cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "chocolate milk / flavored milk",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "colby cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "cottage cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "cream cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "cream",
    category: "dairy & eggs",
    expirationDays: 3,
  },
  {
    name: "creme fraiche",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "custard",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "eggs",
    category: "dairy & eggs",
    expirationDays: 28,
  },
  {
    name: "emmental /  emmenthal cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "eggs: scrambled",
    category: "dairy & eggs",
    expirationDays: 3,
  },
  {
    name: "farmer cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "feta cheese crumbles",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "feta cheese",
    category: "dairy & eggs",
    expirationDays: 90,
  },
  {
    name: "emmental/ emmenthal cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "goat cheese crumbles",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "goat cheese / chevre",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "fontina cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "gloucester cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "gorgonzola cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "gouda cheese",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "derby cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "edam cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "dip",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "dessert topping",
    category: "dairy & eggs",
    expirationDays: 90,
  },
  {
    name: "egg salad",
    category: "dairy & eggs",
    expirationDays: 3,
  },
  {
    name: "egg substitutes",
    category: "dairy & eggs",
    expirationDays: 90,
  },
  {
    name: "egg whites",
    category: "dairy & eggs",
    expirationDays: 2,
  },
  {
    name: "egg yolks",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "eggnog",
    category: "dairy & eggs",
    expirationDays: 1,
  },
  {
    name: "non-dairy coffee creamer",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "parmesan cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "parmigiano-reggiano  cheese",
    category: "dairy & eggs",
    expirationDays: 365,
  },
  {
    name: "port du salut cheese",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "provolone cheese",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "pasteurized processed cheese product",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "ricotta cheese",
    category: "dairy & eggs",
    expirationDays: 3,
  },
  {
    name: "mascarpone cheese",
    category: "dairy & eggs",
    expirationDays: 60,
  },
  {
    name: "pudding",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "milk",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "monterey jack  cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "monterey jack cheese",
    category: "dairy & eggs",
    expirationDays: 180,
  },
  {
    name: "mozzarella cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "muenster cheese",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "neufchatel cheese",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "gruyere cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "half-and-half",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "havarti cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "jarlsberg cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "heavy cream",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "lancashire cheese",
    category: "dairy & eggs",
    expirationDays: 30,
  },
  {
    name: "light cream",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "romano cheese",
    category: "dairy & eggs",
    expirationDays: 5,
  },
  {
    name: "roquefort cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "limburger cheese",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "sour cream",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "string cheese",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "stilton cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "swiss cheese",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "whipped cream",
    category: "dairy & eggs",
    expirationDays: 21,
  },
  {
    name: "tilsiter cheese",
    category: "dairy & eggs",
    expirationDays: 14,
  },
  {
    name: "whipping cream",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "abruzzese sausage",
    category: "meat & poultry",
    expirationDays: 14,
  },
  {
    name: "yogurt",
    category: "dairy & eggs",
    expirationDays: 7,
  },
  {
    name: "bacon fat/ drippings",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "bacon",
    category: "meat & poultry",
    expirationDays: 4,
  },
  {
    name: "beef brisket",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef heart",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef broth",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef liver",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef kidneys",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef ribs",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef jerky",
    category: "meat & poultry",
    expirationDays: 30,
  },
  {
    name: "beef roast",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef soup",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef tongue",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef steak",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "beef stew",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "bologna deli meat / cold cuts",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "blood sausage",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "bratwurst sausages",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "breakfast sausages",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "braunschweiger sausage",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "canadian bacon",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "capon",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "chicken  pieces",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken breasts",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "chicken cutlets",
    category: "meat & poultry",
    expirationDays: 0,
  },
  {
    name: "chicken broth",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken deli meat / cold cuts",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "chicken casserole",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "country ham",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "corned beef",
    category: "meat & poultry",
    expirationDays: 5,
  },
  {
    name: "cornish hen",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "cream of chicken soup",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "dry sausage",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "duck fat/ drippings",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "duck",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "fried chicken",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken nuggets",
    category: "meat & poultry",
    expirationDays: 0,
  },
  {
    name: "chicken fat/ drippings",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "chicken parmesan / chicken parmigiana",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken salad",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken soup / chicken noodle soup",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken pot pie",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken strips",
    category: "meat & poultry",
    expirationDays: 0,
  },
  {
    name: "chicken stew",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chicken tenderloins",
    category: "meat & poultry",
    expirationDays: 5,
  },
  {
    name: "chicken",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "chili",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: beef chop suey",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: barbecued spareribs",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: chicken chop suey",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: general tso's chicken",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: chicken chow mein / lo mein",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: beef with broccoli",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: egg rolls",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: pork chow mein / lo mein",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: pork chop suey",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: beef chow mein / lo mein",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: sweet and sour chicken",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chinese food: sweet and sour pork",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chitterlings",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "chinese food: wonton soup",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "chorizo sausage",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "ham",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "head cheese / souse",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "hot dogs",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "italian sausages",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "jellied beef loaf",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "lamb chops",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "knockwurst / knackwurst",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "lamb kidneys",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "lamb heart",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "giblets",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "goose fat/ drippings",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "goose",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "ham salad",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "ham deli meat / cold cuts",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "ham soup or stew",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "ham steak",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "lamb ribs",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "lamb liver",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "lamb roast",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "lamb steak",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "lamb tongue",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "lamb",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "liverwurst",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "meat sauce",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "meatballs",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "meat pie",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "meatloaf",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "mortadella",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "olive loaf",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pancetta",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "pastrami",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pepperoni",
    category: "meat & poultry",
    expirationDays: 14,
  },
  {
    name: "pheasant",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pate",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "pork kidneys",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pork heart",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pork chops",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "pork tongue",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "pork steak",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pork roast",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pork liver",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "pork ribs",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "pork",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "prosciutto",
    category: "meat & poultry",
    expirationDays: 60,
  },
  {
    name: "pork fat/ drippings",
    category: "meat & poultry",
    expirationDays: 180,
  },
  {
    name: "polish sausage",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "quail",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "rabbit",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "rabbit pieces",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "roast beef deli meat / cold cuts",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "salami cold cuts / deli meat",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "salami deli meat / cold cuts",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "sausages",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "salami",
    category: "meat & poultry",
    expirationDays: 14,
  },
  {
    name: "shepherd™s pie",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "squab / pigeon",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "stuffing / dressing",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "summer sausage",
    category: "meat & poultry",
    expirationDays: 90,
  },
  {
    name: "turkey broth or stock",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "salt pork",
    category: "meat & poultry",
    expirationDays: 30,
  },
  {
    name: "thuringer-style sausage",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "turkey deli meat / cold cuts",
    category: "meat & poultry",
    expirationDays: 7,
  },
  {
    name: "turkey pieces",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "turkey meatballs",
    category: "meat & poultry",
    expirationDays: 5,
  },
  {
    name: "turkey casserole",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "turkey",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal heart",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "turkey soup or stew",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal kidneys",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "veal chops or cutlets",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal parmesan / veal parmigiana",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal liver",
    category: "meat & poultry",
    expirationDays: 1,
  },
  {
    name: "veal ribs",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal roast",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal shanks",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal steak",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal tongue",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "veal",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "venison",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "wild boar",
    category: "meat & poultry",
    expirationDays: 3,
  },
  {
    name: "cod",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "crab meat",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "crab",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "crayfish",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "bluefish",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "cream of shrimp soup",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "arctic char",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "carp",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "catfish",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "caviar",
    category: "fish & shellfish",
    expirationDays: 14,
  },
  {
    name: "clams",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "clam chowder",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "chubs",
    category: "fish & shellfish",
    expirationDays: 5,
  },
  {
    name: "flounder",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "fish chowder",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "fish stock or broth",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "frog legs",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "grouper",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "haddock",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "imitation crab meat",
    category: "fish & shellfish",
    expirationDays: 14,
  },
  {
    name: "halibut",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "lobster",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "lox",
    category: "fish & shellfish",
    expirationDays: 14,
  },
  {
    name: "lobster tails",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "mackerel",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "mahi-mahi",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "monkfish",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "mullet",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "mussels",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "scallops",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "salt cod",
    category: "fish & shellfish",
    expirationDays: 300,
  },
  {
    name: "sea bass",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "sea trout",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "seafood bisque",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "shark steak",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "shrimp",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "octopus",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "orange roughy",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "oysters",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "perch",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "pollock",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "sable / black cod",
    category: "fish & shellfish",
    expirationDays: 5,
  },
  {
    name: "salmon",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "salmon roe",
    category: "fish & shellfish",
    expirationDays: 21,
  },
  {
    name: "rockfish",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "skate",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "smelts",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "smoked salmon",
    category: "fish & shellfish",
    expirationDays: 14,
  },
  {
    name: "snapper",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "squid / calamari",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "sole",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "sturgeon",
    category: "fish & shellfish",
    expirationDays: 5,
  },
  {
    name: "striped bass",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "swordfish",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "tuna",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "sushi",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "tilapia",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "trout",
    category: "fish & shellfish",
    expirationDays: 5,
  },
  {
    name: "turbot",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "whitefish",
    category: "fish & shellfish",
    expirationDays: 1,
  },
  {
    name: "tuna salad",
    category: "fish & shellfish",
    expirationDays: 3,
  },
  {
    name: "almond paste",
    category: "nuts, grains & pasta",
    expirationDays: 730,
  },
  {
    name: "almonds",
    category: "nuts, grains & pasta",
    expirationDays: 270,
  },
  {
    name: "angel hair pasta",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "barley",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "bow tie pasta",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "bean soup",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "brazil nuts",
    category: "nuts, grains & pasta",
    expirationDays: 270,
  },
  {
    name: "buckwheat groats / kasha",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "bulgur",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "capellini",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "cashews",
    category: "nuts, grains & pasta",
    expirationDays: 180,
  },
  {
    name: "chestnuts",
    category: "nuts, grains & pasta",
    expirationDays: 4,
  },
  {
    name: "fusilli",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "fettuccine",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "hazelnuts / filberts",
    category: "nuts, grains & pasta",
    expirationDays: 270,
  },
  {
    name: "lasagna noodles",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "lasagna",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "chinese food: fried rice",
    category: "nuts, grains & pasta",
    expirationDays: 5,
  },
  {
    name: "cornmeal",
    category: "nuts, grains & pasta",
    expirationDays: 60,
  },
  {
    name: "coconuts",
    category: "nuts, grains & pasta",
    expirationDays: 30,
  },
  {
    name: "farina",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "egg noodles",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "linguini",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "macaroni and cheese",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "macadamia nuts",
    category: "nuts, grains & pasta",
    expirationDays: 180,
  },
  {
    name: "macaroni salad",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "manicotti",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "millet",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "oatmeal",
    category: "nuts, grains & pasta",
    expirationDays: 4,
  },
  {
    name: "oats",
    category: "nuts, grains & pasta",
    expirationDays: 4,
  },
  {
    name: "pasta",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "orzo",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "pasta shells",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "peanut butter",
    category: "nuts, grains & pasta",
    expirationDays: 90,
  },
  {
    name: "peanuts",
    category: "nuts, grains & pasta",
    expirationDays: 120,
  },
  {
    name: "pecans",
    category: "nuts, grains & pasta",
    expirationDays: 270,
  },
  {
    name: "pine nuts",
    category: "nuts, grains & pasta",
    expirationDays: 30,
  },
  {
    name: "pistachios",
    category: "nuts, grains & pasta",
    expirationDays: 90,
  },
  {
    name: "pumpkin seeds",
    category: "nuts, grains & pasta",
    expirationDays: 360,
  },
  {
    name: "quinoa",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "penne",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "ravioli",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "rice",
    category: "nuts, grains & pasta",
    expirationDays: 4,
  },
  {
    name: "rigatoni",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "rotini",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "spelt",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "spaghetti",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "vermicelli",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "split pea soup",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "tempeh",
    category: "nuts, grains & pasta",
    expirationDays: 5,
  },
  {
    name: "walnuts",
    category: "nuts, grains & pasta",
    expirationDays: 270,
  },
  {
    name: "rye berries",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "wheat berries",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "tortellini",
    category: "nuts, grains & pasta",
    expirationDays: 2,
  },
  {
    name: "tofu",
    category: "nuts, grains & pasta",
    expirationDays: 5,
  },
  {
    name: "ziti",
    category: "nuts, grains & pasta",
    expirationDays: 3,
  },
  {
    name: "gravy",
    category: "condiments & oils",
    expirationDays: 1,
  },
  {
    name: "alfredo sauce",
    category: "condiments & oils",
    expirationDays: 3,
  },
  {
    name: "oil",
    category: "condiments & oils",
    expirationDays: 365,
  },
  {
    name: "cheese sauce",
    category: "condiments & oils",
    expirationDays: 3,
  },
  {
    name: "miso",
    category: "condiments & oils",
    expirationDays: 540,
  },
  {
    name: "hollandaise sauce",
    category: "condiments & oils",
    expirationDays: 1,
  },
  {
    name: "margarine",
    category: "condiments & oils",
    expirationDays: 30,
  },
  {
    name: "olive oil",
    category: "condiments & oils",
    expirationDays: 730,
  },
  {
    name: "pasta sauce",
    category: "condiments & oils",
    expirationDays: 7,
  },
  {
    name: "pesto",
    category: "condiments & oils",
    expirationDays: 7,
  },
  {
    name: "salad dressing",
    category: "condiments & oils",
    expirationDays: 21,
  },
  {
    name: "salsa",
    category: "condiments & oils",
    expirationDays: 5,
  },
  {
    name: "spaghetti  sauce/ pasta sauce",
    category: "condiments & oils",
    expirationDays: 3,
  },
  {
    name: "angel food cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "apple pie",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "apricot pie",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "biscuit dough",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "banana bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "banana cream pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "biscuits",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "blueberry pie",
    category: "snacks and baked goods",
    expirationDays: 4,
  },
  {
    name: "blackberry pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "chocolate cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "bread or biscuit dough",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "chocolate cream pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "chocolates",
    category: "snacks and baked goods",
    expirationDays: 60,
  },
  {
    name: "cinnamon rolls / buns",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "coconut cream pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "coffee cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "chocolate-covered candy bars or candies",
    category: "snacks and baked goods",
    expirationDays: 300,
  },
  {
    name: "candy corn",
    category: "snacks and baked goods",
    expirationDays: 180,
  },
  {
    name: "cookie dough",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "candy canes",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "butter cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "carrot cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "butterscotch candies",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "caramels",
    category: "snacks and baked goods",
    expirationDays: 180,
  },
  {
    name: "calzone",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "cherry cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "cheesecake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "cookies",
    category: "snacks and baked goods",
    expirationDays: 5,
  },
  {
    name: "corn bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "cherry pie",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "cranberry bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "cupcakes",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "donuts",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "date bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "devil's food cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "flour",
    category: "snacks and baked goods",
    expirationDays: 730,
  },
  {
    name: "french toast",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "frosting",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "fruitcake",
    category: "snacks and baked goods",
    expirationDays: 180,
  },
  {
    name: "guacamole",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "lemon bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "licorice candy",
    category: "snacks and baked goods",
    expirationDays: 180,
  },
  {
    name: "key lime pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "lemon cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "lemon cream pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "lemon chiffon pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "lemon meringue pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "eclairs",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "lollipops",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "maple syrup",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "croissants",
    category: "snacks and baked goods",
    expirationDays: 5,
  },
  {
    name: "lime cream pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "malted milk balls",
    category: "snacks and baked goods",
    expirationDays: 240,
  },
  {
    name: "hard candies",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "gummi candy",
    category: "snacks and baked goods",
    expirationDays: 180,
  },
  {
    name: "hummus",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "jelly beans",
    category: "snacks and baked goods",
    expirationDays: 240,
  },
  {
    name: "mints / mint candy",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "mincemeat pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "muffins",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "jordan almonds",
    category: "snacks and baked goods",
    expirationDays: 90,
  },
  {
    name: "pastries",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "pancakes",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "pizza",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "pound cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "nut bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "pumpkin bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "pancake / waffle batter",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "pumpkin pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "quiche",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "raspberry pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "quick breads",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "rhubarb pie",
    category: "snacks and baked goods",
    expirationDays: 1,
  },
  {
    name: "sandwiches",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "peach pie",
    category: "snacks and baked goods",
    expirationDays: 4,
  },
  {
    name: "pecan pie",
    category: "snacks and baked goods",
    expirationDays: 3,
  },
  {
    name: "peanut butter cups",
    category: "snacks and baked goods",
    expirationDays: 180,
  },
  {
    name: "pie shells",
    category: "snacks and baked goods",
    expirationDays: 0,
  },
  {
    name: "peppermints / peppermint candies",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "peppermint patties",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "pineapple pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "scones",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "sour candies",
    category: "snacks and baked goods",
    expirationDays: 365,
  },
  {
    name: "spice cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "strawberry cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "strawberry chiffon pie",
    category: "snacks and baked goods",
    expirationDays: 2,
  },
  {
    name: "strawberry pie",
    category: "snacks and baked goods",
    expirationDays: 4,
  },
  {
    name: "yellow cake",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "zucchini bread",
    category: "snacks and baked goods",
    expirationDays: 7,
  },
  {
    name: "cilantro",
    category: "herbs & spices",
    expirationDays: 7,
  },
  {
    name: "chervil",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "lemon grass",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "chives",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "mint",
    category: "herbs & spices",
    expirationDays: 7,
  },
  {
    name: "dill",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "marjoram",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "parsley",
    category: "herbs & spices",
    expirationDays: 7,
  },
  {
    name: "rosemary",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "oregano",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "sage",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "savory",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "tarragon",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "thyme",
    category: "herbs & spices",
    expirationDays: 10,
  },
  {
    name: "club soda",
    category: "beverages",
    expirationDays: 270,
  },
  {
    name: "coconut milk",
    category: "beverages",
    expirationDays: 7,
  },
  {
    name: "almond milk",
    category: "beverages",
    expirationDays: 7,
  },
  {
    name: "coffee",
    category: "beverages",
    expirationDays: 1,
  },
  {
    name: "apple cider",
    category: "beverages",
    expirationDays: 7,
  },
  {
    name: "beer",
    category: "beverages",
    expirationDays: 180,
  },
  {
    name: "champagne",
    category: "beverages",
    expirationDays: 3,
  },
  {
    name: "cashew milk",
    category: "beverages",
    expirationDays: 7,
  },
  {
    name: "port",
    category: "beverages",
    expirationDays: 60,
  },
  {
    name: "red wine",
    category: "beverages",
    expirationDays: 3,
  },
  {
    name: "diet soda / soft drinks / pop",
    category: "beverages",
    expirationDays: 90,
  },
  {
    name: "regular soda / soft drinks / pop",
    category: "beverages",
    expirationDays: 180,
  },
  {
    name: "tonic water",
    category: "beverages",
    expirationDays: 270,
  },
  {
    name: "vermouth",
    category: "beverages",
    expirationDays: 120,
  },
];

const seedDB = async () => {
  await Item.deleteMany({});
  console.log("Deleted all items in Items collection");
  await Item.insertMany(seedItems);
  console.log("Seeded Items collection");
};
