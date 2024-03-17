import Lottie from "lottie-react";
import loadingAnimate from "../assets/loadingAnimate.json";
function Loading() {
  return (
    <section className="flex justify-center items-center absolute w-full h-full left-0 top-0">
      <div className="w-[500px] mt-[100px] p-4">
        <Lottie animationData={loadingAnimate} loop={true} />
      </div>
    </section>
  );
}

export default Loading;
