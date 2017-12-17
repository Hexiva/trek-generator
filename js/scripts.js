function specGen() {
  var specArray = ["Human","Vulcan", "Klingon",]
  var specNum = Math.floor(Math.random() * specArray.length);
  var species = specArray[specNum];
  return species;
}

function genderGen() {
  var genderArray = ["Male","Male", "Male", "Male", "Male", "Female", "Female", "Female", "Female", "Female", "Nonbinary",];
  var genderNum = Math.floor(Math.random() * genderArray.length);
  var gender = genderArray[genderNum];
  return gender;
}

function ageGen() {
  if (species === "Human") {
    var ageNum = Math.floor(Math.random() * 30);
    var age = ageNum + 20;
    return age;
  } else if (species === "Vulcan") {
    var ageNum = Math.floor(Math.random() * 90);
    var age = ageNum + 20;
    return age;
  } else if (species === "Klingon") {
    var ageNum = Math.floor(Math.random() * 30);
    var age = ageNum + 20;
    return age;
  }
}

function rankGen() {
  var rankArray = ["Crewman", "Petty Officer","Chief Petty Officer", "Senior Chief Petty Officer", "Master Chief Petty Officer", "Ensign",  "Lieutenant", "Lieutenant Commander", "Commander", "Captain", "Commodore", "Rear Admiral", "Vice Admiral", "Admiral",]
  var rankNum = Math.floor(Math.random() * rankArray.length);
  var rank = rankArray[rankNum];
  return rank;
}

function posGen(){
  if (rank === "Lieutenant" || rank === "Lieutenant Commander" || rank === "Commander") {
    posArray = ["Chief Medical Officer", "Chief Science Officer", "Chief of Engineering", "Chief of Operations", "First officer", "Ship's counselor", "Chief of Communications"]
    var posNum = Math.floor(Math.random() * posArray.length);
    var pos = posArray[posNum];
    return pos;
  } else if (rank === "Captain") {
    return "Starship captain";
  } else if (rank === "Commodore" || rank === "Rear Admiral" || rank === "Vice Admiral" || rank === "Admiral"){
    return "Starfleet command";
  } else {
    var posArray = ["Engineering", "Medical", "Science", "Operations", "Communications"];
    var posNum = Math.floor(Math.random() * posArray.length);
    var pos = posArray[posNum];
    return pos;
  }
}

function nameGen(){
  if (species === "Vulcan" && gender === "Female") {
    var syl1Array = ["T'P","T'P","T'P","T'L","T'V","V'L", "T'H","T'Sh", "T'Kl","T'K","T'M",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ar","eel","es","aas","eni","ir","aal","an", "ara","au", "el","enna","ol", "ring","anik","atak","as","ain"];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Vulcan" && gender === "Male") {
    var syl1Array = ["Sp","St","S","Sur","Tuv","Syb","Syr","Sep","Sit", "Sol","Fal","Haad","Joss","Kin","K","Lor","Mur","Nir","Sar", "Sakk","Sas", "Sat", "Sav","Sel",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ock","ok", "ek","ak","on","ar","al","or","en","is","oss","ot","oc","ath", "elk",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Vulcan" && gender === "Nonbinary") {
    var syl1Array = ["T'P","T'P","T'P","T'L","T'V","V'L", "T'H","T'Sh", "T'Kl","T'K","T'M","Sp","St","S","Sur","Tuv","Syb","Syr","Sep","Sit", "Sol","Fal","Haad","Joss","Kin","K","Lor","Mur","Nir","Sar", "Sakk","Sas", "Sat", "Sav","Sel",];
    var syl1Num = Math.floor(Math.random() * syl1Array.length);
    var syl2Array = ["ar","eel","es","aas","eni","ir","aal","an", "ara","au", "el","enna","ol", "ring","anik","atak","as","ain","ock","ok", "ek","ak","on","ar","al","or","en","is","oss","ot","oc","ath", "elk",];
    var syl2Num = Math.floor(Math.random() * syl2Array.length);
    var name = syl1Array[syl1Num] + syl2Array[syl2Num];
    return name;
  } else if (species === "Human") {
    var nationArray = ["England", "Russia", "France",]
    var nationNum = Math.floor(Math.random() * nationArray.length);
    nation = nationArray[nationNum];
    if (nation === "England") {
      var surArray = ["Johnson","Jackson", "Smith", "Tailor","Brown","Anderson", "Clark", "Wright", "Mitchell", "Thomas", "Rodriguez", "Lopez", "Perez", "Williams", "Lewis", "Hill", "Roberts", "Jones", "White", "Lee", "Scott", "Turner", "Harris", "Walker", "Green", "Phillips", "Davis", "Martin", "Hall", "Adams", "Campbell", "Miller", "Thompson", "Allen", "Baker", "Parker", "Wilson", "Garcia", "Young", "Gonzalez", "Evans", "Moore", "Martinez","Hernandez", "Nelson", "Edwards", "Taylor", "Robinson", "King", "Carter", "Collins",];
      var surNum = Math.floor(Math.random() * surArray.length);
      var surname = surArray[surNum];
      if (gender === "Male") {
        var firstArray = ["Mark","John","Jerry", "James", "Jake", "Benjamin", "Todd", "Scott","Robert", "Luke","David","Christopher", "George", "Ronald", "Richard", "Daniel", "Kenneth", "Anthony", "Charles", "Paul", "Steven", "Kevin", "Michael", "Joseph", "Edward", "Jason", "William", "Thomas", "Brian", "Jeff",];
        var firstNum = Math.floor(Math.random() * firstArray.length);

        var name = firstArray[firstNum] + " " + surArray[surNum];
        return name;
      } else if (gender === "Female") {
        var firstArray = ["Susan", "Deanna","Amelia","Beverly","Jane","Michelle","Katheryn", "Kate","Mary", "Jennifer", "Lisa", "Sandra", "Patricia", "Maria", "Nancy", "Donna", "Laura", "Linda", "Susan", "Karen", "Carol", "Sarah", "Barbara", "Margaret","Betty", "Ruth", "Kimberly", "Elizabeth", "Dorothy", "Helen", "Sharon", "Deborah",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum] + " " + surArray[surNum];
        return name;
      } else if (gender === "Nonbinary") {
        var firstArray = ["Susan", "Deanna","Amelia","Beverly","Jane","Michelle","Katheryn", "Kate","Mary", "Jennifer", "Lisa", "Sandra", "Patricia", "Maria", "Nancy", "Donna", "Laura", "Linda", "Susan", "Karen", "Carol", "Sarah", "Barbara", "Margaret","Betty", "Ruth", "Kimberly", "Elizabeth", "Dorothy", "Helen", "Sharon", "Deborah", "Mark","John","Jerry", "James", "Jake", "Benjamin", "Todd", "Scott","Robert", "Luke","David","Christopher", "George", "Ronald", "Richard", "Daniel", "Kenneth", "Anthony", "Charles", "Paul", "Steven", "Kevin", "Michael", "Joseph", "Edward", "Jason", "William", "Thomas", "Brian", "Jeff",];
        var firstNum = Math.floor(Math.random() * firstArray.length);
        var name = firstArray[firstNum] + " " + surArray[surNum];
        return name;
      }
  } else if (nation === "Russia") {
    var surArray = ["Ivanov", "Smirnov", "Kuznetsov","Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov", "Volkov", "Alexeev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov", "Nikolaev", "Orlov",];
    var surNum = Math.floor(Math.random() * surArray.length);
    var surname = surArray[surNum];
    if (gender === "Male") {
      var firstArray = ["Artem", "Aleksandr", "Maksim", "Ivan", "Mikhail", "Daniil", "Dmitry", "Kirill", "Andrey", "Egor", "Nikita", "Alexey", "Matvey", "Ilya", "Tomofey", "Roman", "Fedor", "Yaroslav", "Vladimir", "Sergey", "Arseny", "Nikolay", "Vladislav", "Gleb", "Konstantin", "Georgiy", "Pavel", "Stepan", "Denis"];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Andreevich","Stepanovich", "Yanovich", "Konstantinovich", "Ilyich", "Vladimovich", "Vladimirovich", "Yanovich", "Dmitrievich", "Ivanovich", "Makorovich", "Tarasovich", "Igorevich", "Nikitovich", "Larionovich", "Yakovich", "Alesnarovich", "Vitalievich", "Makarovich", "Valentinovich",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum] + " " + surArray[surNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Sophia", "Maria", "Anastasia", "Anna", "Daria", "Viktoria", "Elizaveta", "Varvara", "Polina", "Alisa", "Ksenia", "Ekaterina", "Aleksandra", "Veronika", "Arina", "Vasilisa","Valeria", "Milana", "Ulyana", "Yeva","Margarita", "Kristina", "Alena", "Vera", "Taisiya", "Alina", "Kira", "Diana", "Yulia", "Olga",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Artemievna", "Zakharovna", "Yakovna", "Yevgenievna", "Ruslanovna", "Yevgenievna", "Olegovna", "Pavlovna", "Aleksandrovna", "Romanovna", "Andreevna", "Rodionovna", "Leonidovna", "Semyonovna", "Igorievna", "Vladimovna", "Danilovna", "Zakharovna",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum] + " " + surArray[surNum] + "a";
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Sophia", "Maria", "Anastasia", "Anna", "Daria", "Viktoria", "Elizaveta", "Varvara", "Polina", "Alisa", "Ksenia", "Ekaterina", "Aleksandra", "Veronika", "Arina", "Vasilisa","Valeria", "Milana", "Ulyana", "Yeva","Margarita", "Kristina", "Alena", "Vera", "Taisiya", "Alina", "Kira", "Diana", "Yulia", "Olga","Artem", "Aleksandr", "Maksim", "Ivan", "Mikhail", "Daniil", "Dmitry", "Kirill", "Andrey", "Egor", "Nikita", "Alexey", "Matvey", "Ilya", "Tomofey", "Roman", "Fedor", "Yaroslav", "Vladimir", "Sergey", "Arseny", "Nikolay", "Vladislav", "Gleb", "Konstantin", "Georgiy", "Pavel", "Stepan", "Denis"];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var patrArray = ["Artemievna", "Zakharovna", "Yakovna", "Yevgenievna", "Ruslanovna", "Yevgenievna", "Olegovna", "Pavlovna", "Aleksandrovna", "Romanovna", "Andreevna", "Rodionovna", "Leonidovna", "Semyonovna", "Igorievna", "Vladimovna", "Danilovna", "Zakharovna",];
      var patrNum = Math.floor(Math.random() * patrArray.length);
      var name = firstArray[firstNum] + " " + patrArray[patrNum] + " " + surArray[surNum];
      return name;
    }
  } else if (nation === "France") {
    var surArray = ["Martin", "Bernard", "Duboi", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Michel", "Garcia", "David", "Betrand","Roux", "Vincent", "Fournier", "Morel", "Girard", "Andre", "Lefevre", "Mercier", "Dupont", "Lambert", "Bonnet", "Francois", "Martinez", "Legrand", "Garnier", "Faure", "Rousseau", "Blanc", "Guerin", "Miller", "Henry", "Roussel", "Nicolas","Perrin", "Morin", "Mathieu", "Clement", "Gauthier", "Dumont", "Lopez", "Fontaine", "Chevalier", "Robin", "Masson", "Sanchez", "Gerard", "Nguyen", "Boyer", "Denis", "Lemaire", "Duval", "Gautier", "Roger", "Roche", "Roy", "Noel"];
    var surNum = Math.floor(Math.random() * surArray.length);
    var surname = surArray[surNum];
    if (gender === "Male") {
      var firstArray = ["Nathan", "Lucas", "Enzo", "Louis", "Hugo", "Gabriel", "Ethan", "Mathis", "Jules", "Arthur", "Tom", "Noah", "Maxime", "Yanis", "Adam", "Thomas", "Leo", "Paul", "Evan", "Nolan", "Axel", "Antoine","Timeo", "Mael", "Raphael", "Alexandre", "Theo", "Sacha", "Noa", "Baptiste", "Maxence", "Clement", "Mohamed", "Matheo", "Gabin", "Aexis", "Rayan", "Quentin", "Valentin", "Noe", "Mathys", "Victor", "Samuel", "Kylian", "Martin", "Romain",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surArray[surNum];
      return name;
    } else if (gender === "Female") {
      var firstArray = ["Emma", "Manon", "Lola", "Jade", "Camille", "Sarah", "Louise", "Lilou", "Lea", "Clara", "Chloe", "Eva", "Lina", "Ines", "Louna", "Romane", "Maelys", "Juliette", "Lucie", "Zoe", "Ambre", "Alice", "Lou", "Lena","Lisa", "Jeanne", "Louane", "Ines", "Mathilde", "Charlotte", "Marie", "Anna", "Nina", "Anais", "Pauline", "Lana", "Laura", "Lily", "Alicia", "Julie", "Julia", "Rose", "Margaux", "Noemie", "Luna","Elise", "Margot", "Elisa", "Zoe", "Elsa", "Lena", "Clemence", "Justine", "Oceane", "Celia", "Agatha", "Inaya", "Yasmine", "Emilie", "Faustine", "Maelle", "Maeva", "Leonie", "Gabrielle",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surArray[surNum];
      return name;
    } else if (gender === "Nonbinary") {
      var firstArray = ["Emma", "Manon", "Lola", "Jade", "Camille", "Sarah", "Louise", "Lilou", "Lea", "Clara", "Chloe", "Eva", "Lina", "Ines", "Louna", "Romane", "Maelys", "Juliette", "Lucie", "Zoe", "Ambre", "Alice", "Lou", "Lena","Lisa", "Jeanne", "Louane", "Ines", "Mathilde", "Charlotte", "Marie", "Anna", "Nina", "Anais", "Pauline", "Lana", "Laura", "Lily", "Alicia", "Julie", "Julia", "Rose", "Margaux", "Noemie", "Luna","Elise", "Margot", "Elisa", "Zoe", "Elsa", "Lena", "Clemence", "Justine", "Oceane", "Celia", "Agatha", "Inaya", "Yasmine", "Emilie", "Faustine", "Maelle", "Maeva", "Leonie", "Gabrielle","Nathan", "Lucas", "Enzo", "Louis", "Hugo", "Gabriel", "Ethan", "Mathis", "Jules", "Arthur", "Tom", "Noah", "Maxime", "Yanis", "Adam", "Thomas", "Leo", "Paul", "Evan", "Nolan", "Axel", "Antoine","Timeo", "Mael", "Raphael", "Alexandre", "Theo", "Sacha", "Noa", "Baptiste", "Maxence", "Clement", "Mohamed", "Matheo", "Gabin", "Aexis", "Rayan", "Quentin", "Valentin", "Noe", "Mathys", "Victor", "Samuel", "Kylian", "Martin", "Romain",];
      var firstNum = Math.floor(Math.random() * firstArray.length);
      var name = firstArray[firstNum] + " " + surArray[surNum];
      return name;
    }
  }
} else if (species === "Klingon") {
  var syl1Array = ["W", "R", "K'R", "K'T", "Gow", "Mart", "M", "G", "Kr","K", "Br", "G'tr", "Kur", "V", "Mol", "Mow", "T'Gr","Tor","Dur","T","Gr","Kat",];
  var syl1Num = Math.floor(Math.random() * syl1Array.length);
  var syl1BNum = Math.floor(Math.random() * syl1Array.length);
  var syl2Array = ["orf", "org", "uge","oth", "ok",  "ot","ex","ulhe", "aang", "az","agh", "ogh", "oqh","oggra", "or", "orkka", "ath","al", "as", "afk"];
  var syl2Num = Math.floor(Math.random() * syl2Array.length);
  var syl2BNum = Math.floor(Math.random() * syl2Array.length);
  if (gender === "Male") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + ", son of " + syl1Array[syl1BNum] + syl2Array[syl2BNum];
    return name;
  } else if (gender === "Female") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + ", daughter of " + syl1Array[syl1BNum] + syl2Array[syl2BNum];
    return name;
  } else if (gender === "Nonbinary") {
    var name = syl1Array[syl1Num] + syl2Array[syl2Num] + ", child of " + syl1Array[syl1BNum] + syl2Array[syl2BNum];
    return name;
  }

}
}


$(document).ready(function() {
  $('.add-button').click(function(){
    event.preventDefault();
    species = specGen();
    gender = genderGen();
    rank = rankGen();
    name = rank + " " + nameGen();
    age = ageGen();
    pos = posGen();
    $("#name").text(name);
    $("#species").text(species);
    $("#gender").text(gender);
    $("#age").text(age);
    $("#position").text(pos);
  });

});
