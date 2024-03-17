import { useState } from "react";
import { Star } from "lucide-react";

type TProps = {
  ratingChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

export default function RatingBox(props: TProps) {
  const { ratingChanged, value } = props;
  const [rate, setRate] = useState(value);
  const [hover, setHover] = useState<number | null>(null);

  const handleRate = (currentRate: any) => {
    setRate(currentRate);
    ratingChanged(currentRate);
  };
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRate}
              onChange={() => handleRate(currentRate)}
            />

            <Star
              className={`cursor-pointer stroke-0 ${
                currentRate <= (hover || rate)
                  ? "fill-yellow-400"
                  : "fill-gray-300"
              }`}
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
