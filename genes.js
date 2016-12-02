var rarity = [
  "Plentiful", // 0
  "Common", // 1
  "Uncommon", // 2
  "Limited", // 3
  "Rare" // 4
]

var rarityMatrix = [
  [.5, .7, .85, .97, .99], //plentiful
  [.3, .5, .75, .9, .99], // common
  [.15, .25, .5, .85, .98], // Uncommon
  [.03, .01, .15, .5, .97], // Limited
  [.01, .01, .02, .03, .5] // rare
]

var breed = [
  ["Fae", "Guardian", "Mirror", "Tundra"],
  ["Pearlcatcher", "Ridgeback", "Snapper", "Spiral"],
  ["Bogsneak", "Skydancer"],
  ["Imperial", "Nocturne"],
  ["Coatl", "Wildclaw"]
];

var primary = [
  ["Basic"],
  ["Clown", "Falcon", "Piebald", "Speckle", "Tiger"],
  ["Bar", "Cherub", "Giraffe", "Jupiter", "Ripple", "Vipera"],
  ["Poison", "Skink"],
  ["Crystal", "Iridescent", "Metallic", "Petals"]
];

var secondary = [
  ["Basic"],
  ["Current", "Daub", "Eye Spots", "Freckle", "Paint", "Peregrine", "Stripes"],
  ["Hex", "Hypnotics", "Saturn", "Seraph"],
  ["Spinner", "Toxin"],
  ["Butterfly", "Facet", "Shimmer"]
];

var tertiary = [
  ["Basic"],
  ["Contour", "Thylacine", "Underbelly"],
  ["Crackle", "Okapi", "Smoke"],
  ["Gembond", "Runes", "Spines"],
  ["Circuit", "Glimmer", "Stained"]
];

function buildRarityDict(genes) {
  var d = {};
  for(i = 0; i<genes.length; i++) {
    for(j=0; j<genes[i].length; j++) {
      d[genes[i][j]] = rarity[i];
    }
  }
  return d;
}

var breedDict = buildRarityDict(breed);
var primaryDict = buildRarityDict(primary);
var secondaryDict = buildRarityDict(secondary);
var tertiaryDict = buildRarityDict(tertiary);

var allDict = $.extend({}, breedDict, primaryDict, secondaryDict, tertiaryDict);

function compareRarity(gene1, gene2) {

  if(gene1 == gene2) {
    return [1,1];
  }

  var rar1 = allDict[gene1];
  var rar2 = allDict[gene2];

  var r1 = rarity.indexOf(rar1);
  var r2 = rarity.indexOf(rar2);

  // this is flipped because the chart is read left first, then top
  var odds1 = rarityMatrix[r1][r2];
  var odds2 = 1 - odds1;

  return [odds1, odds2];
}

// giventwo types and a rarity pair, generate the string that compares them
function rarityStr(r1, r2) {
  var arr = compareRarity(r1, r2);
  if(arr[0] == 1) {
    // same breed
    return("100% " + r1);
  } else {
    return(Math.floor(arr[0]*100) + "% " + r1 + " | " + Math.floor(arr[1]*100) + "% " +  r2);
  }   
}