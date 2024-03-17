import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PawPrint } from "lucide-react";

import "../index.css";

type TProps = {
  handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBox(props: TProps) {
  const { handleOnSubmit, handleOnChange } = props;
  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-96 flex items-center justify-between"
    >
      <Input
        placeholder="Insert your favorite animal..."
        onChange={handleOnChange}
        className="placeholder:text-gray-400  focus:outline focus:outline-lime-400 text-lime-900 font-semibold"
      />
      <Button
        type="submit"
        className="ml-2 text-white bg-orange-600 hover:bg-orange-600 outline outline-orange-600"
      >
        <PawPrint />
      </Button>
    </form>
  );
}
