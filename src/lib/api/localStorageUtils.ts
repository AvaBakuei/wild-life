export const getFavoriteAnimals = (): any[] => {
  const storedAnimals: string | null = localStorage.getItem("favoriteAnimals");
  if (storedAnimals) {
    return JSON.parse(storedAnimals);
  } else {
    return [];
  }
};

export const setFavoriteAnimals = (updatedAnimals: any[]): void => {
  localStorage.setItem("favoriteAnimals", JSON.stringify(updatedAnimals));
};

export const insertFavoriteAnimals = (animal: any): void => {
  let animals: any[] = getFavoriteAnimals();

  let index = animals.findIndex((value) => {
    return value.name === animal.name;
  });

  if (index == -1) {
    animals.push(animal);
  } else {
    animals[index] = animal;
  }

  setFavoriteAnimals(animals);
};

export const removeItemFromFavoriteList = (itemToRemove: any): void => {
  const animals = getFavoriteAnimals();

  if (!animals || !Array.isArray(animals)) {
    return;
  }

  const updatedArray = animals.filter(
    (item) => item.name !== itemToRemove.name
  );
  setFavoriteAnimals(updatedArray);
};

export const isFavorite = (name: string): boolean => {
  let favoriteList = getFavoriteAnimals();
  return favoriteList.some((item) => item.name === name);
};

export const updateRate = (animal: any): void => {
  insertFavoriteAnimals(animal);
};

export const updateAttributes = (animal: any): void => {
  insertFavoriteAnimals(animal);
};
