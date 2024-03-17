import { Badge } from "@/components/ui/badge";

type TProps = {
  data: object;
};
export default function TagList(props: TProps) {
  const { data } = props;
  return (
    <div className="flex flex-wrap">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2 m-1 capitalize">
          <Badge className="bg-lime-200 text-slate-950 hover:bg-lime-200">
            {key.split("_").join(" ")}:
            <span className="ml-1 font-semibold text-lime-900">{value}</span>
          </Badge>
        </div>
      ))}
    </div>
  );
}
