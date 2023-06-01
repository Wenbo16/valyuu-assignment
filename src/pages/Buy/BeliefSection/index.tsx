import Button from "components/Button";
import forward from "assets/images/forward.svg";
import MobileCard from "./MobileCard";
import SustainabilitySmImg from "assets/images/sustainability-sm.png";
import DoSomeGoodSm from "assets/images/do-some-good-sm.png";
import { useGetScreenBreakpoints } from "hooks/useGetScreenBreakpoints";

export default function BeliefSection() {
  const { lg, xl, xxl } = useGetScreenBreakpoints();
  const isMobile = !(lg || xl || xxl);

  return (
    <div className="w-full h-[1000px] z-10 relative bg-white md:z-0 md:h-[600px] border-b-black border-b flex flex-col md:flex md:flex-row items-center md:justify-center">
      <div className="mt-16 w-[330px] text-center md:text-left">
        <div>We believe</div>
        <div className="text-2xl md:text-4xl font-semibold mt-2">
          Save planet is something everyone can do
        </div>
      </div>
      {isMobile ? (
        <MobileCard
          title="Sustainability"
          description="donate the value of your product to Stichting Leergeld."
          imgUrl={SustainabilitySmImg}
          backgroundColor="#EDE9FF"
        />
      ) : (
        <div className="border border-black rounded-md bg-gray flex items-center mt-0 w-[736px] h-[355px] rotate-[-7deg] ">
          <div className="w-full h-[180px] md:w-[330px] bg-[url('assets/images/sustainability-sm.png')] md:h-[315px] md:ml-5 bg-no-repeat bg-cover md:bg-[url('assets/images/sustainability-lg.png')]" />
          <div className="p-6 pl-5 pr-5 md:ml-9 md:p-0">
            <div className="font-semibold text-lg md:text-xl">
              Sustainability
            </div>
            <div className="mt-2 mb-8 md:mb-9 text-sm md:text-base">
              donate the value of your product to Stichting Leergeld.
            </div>
            <Button type="primary" size="large">
              <span>Know more</span>
              <span className="align-middle ml-1">
                <img src={forward} alt="forward" />
              </span>
            </Button>
          </div>
        </div>
      )}
      {isMobile ? (
        <MobileCard
          title="Sustainability"
          description="donate the value of your product to Stichting Leergeld."
          imgUrl={DoSomeGoodSm}
          backgroundColor="#E8FFA8"
        />
      ) : (
        <div className="w-[333px] h-[355px] border border-black rounded-md -ml-14 bg-yellow rotate-[8.5deg] flex items-center">
          <div className="bg-no-repeat bg-cover text-xl text-white font-semibold w-[290px] h-[315px] ml-5  bg-[url('assets/images/do-some-good-lg.png')] flex justify-center items-center">
            <div>Do some good</div>
          </div>
        </div>
      )}
    </div>
  );
}
