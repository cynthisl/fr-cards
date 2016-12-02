
function ordered_dict() {
  var keys = [];
  var vals = {};

  return {
    push: function(k,v) {
      if(!vals[k]) keys.push(k);
      vals[k] = v;
    },
    insert: function(k,v,pos) {
      if(!vals[k]) {
        keys.splice(pos,0,k);
        vals[k] = v;
      }
    },
    val: function(k) {return vals[k]},
    index: function(k) {return keys.indexOf(k)},
    length: function() {return keys.length},
    keys: function() {return keys},
    values: function() {return vals}
  };
};


var colors = ordered_dict();
addColors(colors);

function getColorRange(color1, color2) {
  var idx1 = colors.index(color1);
  var idx2 = colors.index(color2);

  if ((idx1 == -1) || (idx2 == -1)) {
    // one of the colors does not exist
    return [];
  }

  if(idx1 > idx2) {
    console.log("swap " + idx1 + " " + idx2);
    // swap
    var swp = idx1;
    idx1 = idx2;
    idx2 = swp;
  }

  console.log("idx1: " + idx1 + " idx2: " + idx2);

  // check if needs to be reversed
  if ((idx2-idx1) < (colors.length()/2)) {
    return colors.keys().slice(idx1, idx2+1);
  } else {
    return colors.keys().slice(idx2).concat(colors.keys().slice(0,idx1+1));
  }

}

function getHexesFromRange(range) {
  var res = [];
  for(i=0; i<range.length; i++){
    res.push(colors.val(range[i]));
  }
  return res;
}

function getColorHexRange(c1, c2) {
  var r = getColorRange(c1, c2);
  return getHexesFromRange(r);
}



function addColors(colors) {
  colors.push("Maize", "#FFFDEA");
  colors.push("Cream", "#FFEFDC");
  colors.push("Antique", "#D8D6CD");
  colors.push("White", "#FFFFFF");
  colors.push("Moon", "#D8D7D8");
  colors.push("Ice", "#F1F3FF");
  colors.push("Orca", "#E1DFFF");
  colors.push("Platinum", "#C8BECE");
  colors.push("Silver", "#BBBABF");
  colors.push("Dust", "#9D9D9F");
  colors.push("Grey", "#808080");
  colors.push("Smoke", "#9494A9");
  colors.push("Gloom", "#545365");
  colors.push("Lead", "#413C40");
  colors.push("Shale", "#4D484F");
  colors.push("Flint", "#636268");
  colors.push("Charcoal", "#555555");
  colors.push("Coal", "#4B4946");
  colors.push("Oilslick", "#352C27");
  colors.push("Black", "#333333");
  colors.push("Obsidian", "#1D2224");
  colors.push("Eldritch", "#252A24");
  colors.push("Midnight", "#392D43");
  colors.push("Shadow", "#292B38");
  colors.push("Blackberry", "#4C2A4F");
  colors.push("Mulberry", "#6E235D");
  colors.push("Plum", "#863290");
  colors.push("Wisteria", "#724D79");
  colors.push("Thistle", "#8F7C8B");
  colors.push("Fog", "#A794B2");
  colors.push("Mist", "#E1CDFE");
  colors.push("Lavender", "#CCA4E0");
  colors.push("Heather", "#9778BE");
  colors.push("Purple", "#A261CF");
  colors.push("Orchid", "#DA4FFF");
  colors.push("Amethyst", "#993BD1");
  colors.push("Nightshade", "#7930B5");
  colors.push("Violet", "#643F9C");
  colors.push("Grape", "#580FC0");
  colors.push("Royal", "#4D2C89");
  colors.push("Eggplant", "#3F2B66");
  colors.push("Iris", "#525195");
  colors.push("Storm", "#757ADB");
  colors.push("Twilight", "#484AA1");
  colors.push("Indigo", "#2D237A");
  colors.push("Sapphire", "#0D0A5B");
  colors.push("Navy", "#212B5F");
  colors.push("Cobalt", "#013485");
  colors.push("Ultramarine", "#1C51E7");
  colors.push("Blue", "#324BA9");
  colors.push("Periwinkle", "#4866D5");
  colors.push("Lapis", "#2F83FF");
  colors.push("Splash", "#6394DD");
  colors.push("Cornflower", "#76A8FF");
  colors.push("Sky", "#AEC8FF");
  colors.push("Stonewash", "#7895C1");
  colors.push("Overcast", "#444F69");
  colors.push("Steel", "#556979");
  colors.push("Denim", "#2F4557");
  colors.push("Abyss", "#0D1E25");
  colors.push("Phthalo", "#0B2D46");
  colors.push("Azure", "#0A3D67");
  colors.push("Caribbean", "#0086CE");
  colors.push("Teal", "#2B768F");
  colors.push("Cerulean", "#00B4D5");
  colors.push("Cyan", "#00FFF1");
  colors.push("Robin", "#9AEAEF");
  colors.push("Aqua", "#72C4C4");
  colors.push("Turquoise", "#3CA2A4");
  colors.push("Spruce", "#8DBCB4");
  colors.push("Pistachio", "#E2FFE6");
  colors.push("Seafoam", "#B2E2BD");
  colors.push("Mint", "#9AFFC7");
  colors.push("Jade", "#61AB89");
  colors.push("Spearmint", "#148E67");
  colors.push("Thicket", "#005D48");
  colors.push("Peacock", "#1F483A");
  colors.push("Emerald", "#20603F");
  colors.push("Shamrock", "#236825");
  colors.push("Jungle", "#1E361A");
  colors.push("Hunter", "#1E2716");
  colors.push("Forest", "#425035");
  colors.push("Camo", "#51684C");
  colors.push("Algae", "#97AF8B");
  colors.push("Swamp", "#687F67");
  colors.push("Avocado", "#567C34");
  colors.push("Green", "#629C3F");
  colors.push("Fern", "#7ECE73");
  colors.push("Mantis", "#9BFF9D");
  colors.push("Pear", "#8ECE56");
  colors.push("Leaf", "#A5E32D");
  colors.push("Radioactive", "#C6FF00");
  colors.push("Honeydew", "#D1E572");
  colors.push("Peridot", "#E8FCB4");
  colors.push("Chartreuse", "#B4CD3D");
  colors.push("Spring", "#A9A032");
  colors.push("Crocodile", "#828335");
  colors.push("Olive", "#697135");
  colors.push("Murk", "#4B4420");
  colors.push("Moss", "#7E7645");
  colors.push("Goldenrod", "#BEA55D");
  colors.push("Amber", "#C18E1B");
  colors.push("Honey", "#D1B300");
  colors.push("Lemon", "#FFE63B");
  colors.push("Yellow", "#F9E255");
  colors.push("Grapefruit", "#F7FF6F");
  colors.push("Banana", "#FFEC80");
  colors.push("Sanddollar", "#EDE8B0");
  colors.push("Flaxen", "#FDE9AC");
  colors.push("Ivory", "#FFD297");
  colors.push("Buttercup", "#F6BF6C");
  colors.push("Gold", "#E8AF49");
  colors.push("Metals", "#D1B045");
  colors.push("Marigold", "#FFB53C");
  colors.push("Sunshine", "#FA912B");
  colors.push("Saffron", "#FF8500");
  colors.push("Sunset", "#FFA147");
  colors.push("Peach", "#FFB576");
  colors.push("Cantaloupe", "#FF984F");
  colors.push("Orange", "#D5602B");
  colors.push("Bronze", "#B2560D");
  colors.push("Terracotta", "#B24407");
  colors.push("Carrot", "#FF5500");
  colors.push("Fire", "#EF5C23");
  colors.push("Pumpkin", "#FF6841");
  colors.push("Tangerine", "#FF7360");
  colors.push("Cinnamon", "#C15A39");
  colors.push("Caramel", "#C47149");
  colors.push("Sand", "#B27749");
  colors.push("Tan", "#C3996F");
  colors.push("Beige", "#CABBA2");
  colors.push("Stone", "#827A64");
  colors.push("Taupe", "#6D675B");
  colors.push("Slate", "#564D48");
  colors.push("Driftwood", "#766259");
  colors.push("Latte", "#977B6C");
  colors.push("Dirt", "#774840");
  colors.push("Clay", "#603E3D");
  colors.push("Sable", "#57372C");
  colors.push("Umber", "#301E1A");
  colors.push("Soil", "#5A4534");
  colors.push("Hickory", "#72573A");
  colors.push("Tarnish", "#855B33");
  colors.push("Ginger", "#91532A");
  colors.push("Brown", "#8E5B3F");
  colors.push("Chocolate", "#563012");
  colors.push("Auburn", "#7B3C1D");
  colors.push("Copper", "#A44B28");
  colors.push("Rust", "#8B3220");
  colors.push("Tomato", "#BA311C");
  colors.push("Vermillion", "#E22D18");
  colors.push("Ruby", "#CE000D");
  colors.push("Cherry", "#AA0024");
  colors.push("Crimson", "#850012");
  colors.push("Garnet", "#581014");
  colors.push("Sanguine", "#2D0102");
  colors.push("Blood", "#451717");
  colors.push("Maroon", "#652127");
  colors.push("Berry", "#8C272D");
  colors.push("Red", "#C1272D");
  colors.push("Strawberry", "#DF3236");
  colors.push("Cerise", "#A12928");
  colors.push("Carmine", "#B13A3A");
  colors.push("Brick", "#9A534D");
  colors.push("Coral", "#CC6F6F");
  colors.push("Blush", "#FEA0A0");
  colors.push("CottonCandy", "#EB799A");
  colors.push("Watermelon", "#DB518D");
  colors.push("Magenta", "#E934AA");
  colors.push("Fuschia", "#E7008B");
  colors.push("Raspberry", "#8A024A");
  colors.push("Wine", "#4D0F28");
  colors.push("Mauve", "#9C4975");
  colors.push("Pink", "#E77FBF");
  colors.push("Bubblegum", "#E5A9FF");
  colors.push("Rose", "#FFD6F6");
  colors.push("Pearl", "#FBEDFA");
}
