import { Checkbox } from "@/components/ui/checkbox";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

type TProps = {
  data: any[];
  onSelected: (checked: any) => void;
  likeList: {};
};

export function Attributes(props: TProps) {
  const { data, onSelected, likeList } = props;
  const [checked, setChecked] = useState<{ [key: string]: boolean }>(likeList);

  const toggleLike = (key: any) => {
    let checkList = { ...checked, [key]: !checked[key] };
    setChecked(checkList);
    onSelected(checkList);
  };

  return (
    <div className="flex flex-col justify-first">
      <span className="m-2.5 text-md text-left text-lime-900 font-semibold">
        Attributes
      </span>
      <div>
        {Object?.entries(data)?.map(([key, value]) => (
          <div className="flex items-center space-x-2 my-2 mx-3 capitalize">
            <Checkbox
              key={key}
              id={key + uuidv4()}
              className="attribute-checkbox cursor-pointer"
              onCheckedChange={() => toggleLike(key)}
              checked={checked[key]}
            />
            <label
              htmlFor={key + uuidv4()}
              className="text-sm text-left font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span className="text-sky-950">
                {key.split("_").join(" ")}:{" "}
                {<span className="font-semibold text-lime-800">{value}</span>}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
