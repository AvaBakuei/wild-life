import { ReactNode } from "react";
type TProps = {
  children: ReactNode;
};
export default function CardWrapper(props: TProps) {
  const { children } = props;
  return (
    <div className="w-full mt-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-2 max-md:grid-cols-1">
          {children}
        </dl>
      </div>
    </div>
  );
}
