import { Heart } from "lucide-react";
import { useState } from "react";

type TProps = {
  remove: () => void;
  add: () => void;
  isFavorite: boolean;
};
export default function FavoriteButton(props: TProps) {
  const { remove, add, isFavorite } = props;
  const [isFav, setIsFav] = useState(isFavorite);
  return (
    <div
      data-testid="favorite-button"
      className="cursor-pointer"
      onClick={() => {
        isFav ? remove() : add();
        setIsFav(!isFav);
      }}
    >
      <Heart
        data-testid="heart-icon"
        className={`w-6 h-6 stroke-0 ${
          isFav ? "fill-red-600" : "fill-gray-400"
        }`}
      />
    </div>
  );
}
