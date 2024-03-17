import {
  getFavoriteAnimals,
  isFavorite,
  removeItemFromFavoriteList,
  insertFavoriteAnimals,
  updateRate,
  updateAttributes,
} from "../lib/api/localStorageUtils";
import { useEffect, useState } from "react";
import { FavoriteCard } from "@/components/FavoriteCard";
import CardWrapper from "@/components/CardWrapper";
import Lottie from "lottie-react";
import emptyAnimate from "../assets/emptyAnimate.json";

export default function FavoriteList() {
  const [favoriteAnimals, setFavoriteAnimals] = useState<any[]>([]);
  const [likeList, setLikeList] = useState<{ [key: string]: boolean }>({});
  const [rate, setRate] = useState(Number);

  useEffect(() => {
    setFavoriteAnimals(getFavoriteAnimals());
  }, [likeList, rate]);

  const addToFavoriteList = (animal: any) => {
    insertFavoriteAnimals(animal);
  };
  const removeFromFavorite = (animal: any) => {
    removeItemFromFavoriteList(animal);
    setFavoriteAnimals(getFavoriteAnimals());
  };
  const handleRating = (data: object, currentRate: number) => {
    let newData = { ...data, rating: currentRate };
    updateRate(newData);
    setRate(currentRate);
  };

  const onSelect = (checked: any, data: any) => {
    let newData = { ...data, checkList: checked };
    updateAttributes(newData);
    setLikeList(checked);
  };

  return (
    <div className="flex flex-col items-center">
      {favoriteAnimals.length !== 0 ? (
        <CardWrapper>
          {favoriteAnimals.map((item) => (
            <FavoriteCard
              key={item.name}
              data={item}
              addToFavoriteList={addToFavoriteList}
              removeFromFavorite={removeFromFavorite}
              handleRating={handleRating}
              isFavorite={isFavorite(item.name)}
              onSelect={onSelect}
              likeList={item.checkList}
            />
          ))}
        </CardWrapper>
      ) : (
        <div className="w-[500px] mt-[100px] p-4">
          <Lottie animationData={emptyAnimate} loop={true} />
        </div>
      )}
    </div>
  );
}
