import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TagList from "./TagList";
import FavoriteButton from "./FavoriteButton";
import { MapPin } from "lucide-react";

type TProps = {
  data: any;
  addToFavoriteList: (animalInfo: string) => void;
  removeFromFavorite: (animalInfo: string) => void;
  isFavorite: boolean;
};

export function AnimalCard(props: TProps) {
  const { data, addToFavoriteList, removeFromFavorite, isFavorite } = props;

  const add = (animalInfo: any) => {
    addToFavoriteList(animalInfo);
  };
  const remove = (animalInfo: any) => {
    removeFromFavorite(animalInfo);
  };

  return (
    <Card className="w-full shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] border-0">
      <CardHeader>
        <FavoriteButton
          remove={() => remove(data)}
          add={() => add(data)}
          isFavorite={isFavorite}
        />
        <CardTitle className="text-lg text-lime-950">{data.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center text-lime-900 font-semibold">
          <MapPin className="w-4 h-4 mr-1 text-orange-400" />{" "}
          {data.locations?.join(", ")}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <TagList data={data.taxonomy} />
      </CardFooter>
    </Card>
  );
}
