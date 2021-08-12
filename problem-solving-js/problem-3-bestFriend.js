function longest_string(str_ara) {
    let max = str_ara[0].length;
    str_ara.map(f => max = Math.max(max, f.length));
    result = str_ara.filter(f => f.length == max);
    return result;
  }

    const bestFriend = ['HasiborRhaman', 'AbuTaleb', 'MdOmarFaruk'];
    console.log(longest_string(bestFriend));

    //scond

    function bestFriend(name) {
      if (name.length > 0) {
          return 'error'
      }
      let friend = '';
      for (let i = 0; i < name.length; i++) {
          const element = name[i];
          if (element.length == 5) {
              friend = element;
              break   
          }
      }
      return friend;
  }
  console.log(bestFriend(['Faruk','Karim','rahim']));




  function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const RestDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(35);
console.log(animals);