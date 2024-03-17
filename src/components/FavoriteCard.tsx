import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RatingBox from "./RatingBox";
import { Attributes } from "./Attributes";
import FavoriteButton from "./FavoriteButton";
import { MapPin } from "lucide-react";

type TProps = {
  data: any;
  addToFavoriteList: (animalInfo: string) => void;
  removeFromFavorite: (animalInfo: string) => void;
  handleRating: (data: object, currentRate: number) => void;
  isFavorite: boolean;
  onSelect: (check: any, data: object) => void;
  likeList: any;
};

export function FavoriteCard(props: TProps) {
  const {
    data,
    addToFavoriteList,
    removeFromFavorite,
    isFavorite,
    handleRating,
    onSelect,
    likeList,
  } = props;

  const add = (animalInfo: any) => {
    addToFavoriteList(animalInfo);
  };
  const remove = (animalInfo: any) => {
    removeFromFavorite(animalInfo);
  };
  const ratingChanged = (currentRate: any) => {
    handleRating(data, currentRate);
  };
  const onSelected = (check: any, data: any) => {
    onSelect(check, data);
  };
  return (
    <div className="w-full shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] bg-white rounded-lg">
      <Card className="border-0 shadow-none">
        <CardHeader>
          <FavoriteButton
            remove={() => remove(data)}
            add={() => add(data)}
            isFavorite={isFavorite}
          />
          <CardTitle className="text-lg text-lime-950">{data.name}</CardTitle>
          <div className="flex justify-center items-center text-lime-900 font-semibold">
            <MapPin className="w-4 h-4 mr-1 text-orange-400" />{" "}
            {data.locations?.join(", ")}
          </div>
        </CardHeader>
        <CardContent>
          <RatingBox ratingChanged={ratingChanged} value={data.rating} />
        </CardContent>
        <CardFooter className="flex">
          <Attributes
            data={data?.characteristics}
            onSelected={(check) => onSelected(check, data)}
            likeList={likeList}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
