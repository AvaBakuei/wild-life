import { SearchBox } from "../components/SearchBox";
import { useState } from "react";
import { AnimalCard } from "@/components/AnimalCard";
import { fetchData } from "../lib/api/fetchApi";
import {
  removeItemFromFavoriteList,
  insertFavoriteAnimals,
  isFavorite,
} from "@/lib/api/localStorageUtils";
import Loading from "@/components/Loading";
import CardWrapper from "@/components/CardWrapper";

export default function Home() {
  const [animalName, setAnimalName] = useState("");
  const [animalsList, setAnimalsList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnimalName(value);
  };

  const addToFavoriteList = (animal: any) => {
    let characteristics = animal.characteristics;
    const checkList = Object.fromEntries(
      Object.keys(characteristics).map((key) => [key, false])
    );
    let newData = { ...animal, checkList, rating: 0 };
    insertFavoriteAnimals(newData);
  };

  const removeFromFavorite = (animal: any) => {
    removeItemFromFavoriteList(animal);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await fetchData(animalName);
      let newData = Array.isArray(data) ? data : [];
      setAnimalsList(newData);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!loading ? (
        <div
          className={`${
            animalsList.length !== 0
              ? "h-screen flex flex-col justify-start items-center mt-14"
              : "h-screen flex flex-col justify-center items-center relative bottom-[100px]"
          }`}
        >
          <SearchBox
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
          {animalsList.length !== 0 && (
            <CardWrapper>
              {animalsList.map((item) => (
                <AnimalCard
                  key={item.name}
                  data={item}
                  addToFavoriteList={addToFavoriteList}
                  removeFromFavorite={removeFromFavorite}
                  isFavorite={isFavorite(item.name)}
                />
              ))}
            </CardWrapper>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
