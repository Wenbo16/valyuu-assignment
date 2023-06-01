import AchievementCard from "./AchievementCard";
import CO2 from "assets/images/CO2.svg";
import TreePlant from "assets/images/tree-planted.svg";
import Donation from "assets/images/donation.svg";
import ValyuuEarth from "assets/images/valyuu-earth.png";
import Orange from "assets/images/orange.png";
import Green from "assets/images/green.png";
import WhiteBlue from "assets/images/white-blue.png";

export default function AchievementSection() {
  return (
    <div className="w-full h-[700px] z-0 relative flex flex-col items-center md:h-[526px]">
      <div className="w-[128px] h-[128px] absolute top-[260px] -left-[30px] rotate-[-28.5deg] md:top-[60px] md:-left-[35px] md:w-[210px] md:h-[210px]">
        <img src={WhiteBlue} alt="" />
      </div>
      <div className="w-[128px] h-[128px] absolute -top-[64px] right-[4px] rotate-[-145deg] md:-top-[100px] md:right-[120px] md:w-[216px] md:h-[216px]">
        <img src={ValyuuEarth} alt="" />
      </div>
      <div className="w-[140px] h-[140px] z-0 absolute bottom-[60px] -right-[20px] rotate-[-22deg] md:top-[216px] md:-right-[74px] md:w-[230px] md:h-[230px]">
        <img src={Orange} alt="" />
      </div>
      <div className="z-0 absolute invisible md:bottom-[35px] rotate-[-147.75deg] md:left-[360px] md:w-[230px] md:h-[230px] md:visible">
        <img src={Green} alt="" />
      </div>
      <div className="mt-16 w-[335px] text-center md:mt-20 md:w-[787px]">
        <div className="text-2xl md:text-4xl font-semibold mb-2">
          Come and join us!
        </div>
        <div>together with our 134,000 members, Valyuu has already</div>
      </div>
      <div className="w-[335px] h-[447px] z-10 bg-white mt-6 px-6 border border-black rounded-md md:w-[1372px] md:h-[180px] md:flex md:justify-between md:mt-10 md:py-8 md:px-6">
        <AchievementCard
          title="Saved CO₂"
          number={Number(90000).toLocaleString().toLocaleString() + "g"}
          description="From Paris to New York"
          image={CO2}
          imageBackgroundColor="#005B25"
        />
        <AchievementCard
          title="Tree Planted"
          number={Number(23500).toLocaleString().toLocaleString()}
          description="Driving on GAS"
          image={TreePlant}
          imageBackgroundColor="#3232FB"
        />
        <AchievementCard
          title="Donation"
          number={"€" + Number(7600).toLocaleString().toLocaleString()}
          description="From Paris to New York"
          image={Donation}
          imageBackgroundColor="#FF6E40"
          showBorder={false}
        />
      </div>
    </div>
  );
}
