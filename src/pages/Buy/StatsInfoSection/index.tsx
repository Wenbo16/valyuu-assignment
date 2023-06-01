import CountUp from "react-countup";

interface StatsInfoItemProps {
  numberCountUp: number;
  text: string;
  unit?: string;
}

function StatsInfoItem({ numberCountUp, text, unit }: StatsInfoItemProps) {
  return (
    <div className="mt-6">
      <div>
        <CountUp
          className="font-semibold text-white text-4xl md:text-5xl"
          end={numberCountUp}
          separator=","
        />
        {unit && (
          <span className="font-semibold text-white text-4xl md:text-5xl">
            {" " + unit}
          </span>
        )}
      </div>
      <div>
        <span className="text-white text-base">{text}</span>
      </div>
    </div>
  );
}

export default function StatsInfoSection() {
  return (
    <div>
      <div className="w-full h-[364px] md:h-[512px] flex justify-center items-center bg-no-repeat bg-cover bg-[url('assets/images/stats-info-sm.png')] md:bg-[url('assets/images/stats-info-lg.png')]">
        <div className="w-[336px] md:w-[678px] h-[240px] md:h-[312px] text-center flex flex-col justify-center items-center">
          <div>
            <span className="text-white text-sm">Every year, there are</span>
          </div>
          <StatsInfoItem
            numberCountUp={100000000}
            text="end-of-use electronics"
          ></StatsInfoItem>
          <StatsInfoItem
            numberCountUp={2000}
            text="value is ignored, and eventually"
            unit="&#8364;"
          ></StatsInfoItem>
          <StatsInfoItem
            numberCountUp={1000}
            text="waste is generated"
            unit="KG"
          ></StatsInfoItem>
        </div>
      </div>
    </div>
  );
}
