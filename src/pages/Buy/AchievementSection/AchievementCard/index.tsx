import { useGetScreenBreakpoints } from "hooks/useGetScreenBreakpoints";

interface AchievementCardProps {
  title: string;
  number: string;
  description: string;
  image: string;
  imageBackgroundColor: string;
  showBorder?: boolean;
}

export default function AchievementCard({
  title,
  number,
  description,
  image,
  imageBackgroundColor,
  showBorder = true
}: AchievementCardProps) {
  const { lg, xl, xxl } = useGetScreenBreakpoints();
  const isMobile = !(lg || xl || xxl);
  return (
    <div
      style={{
        borderRight: !isMobile && showBorder ? "1px solid #1a1a1a" : "none",
        borderBottom: isMobile && showBorder ? "1px solid #1a1a1a" : "none"
      }}
      className="w-[292px] h-[145px] flex items-center text-black md:w-[420px] md:h-[112px]"
    >
      <div
        style={{ backgroundColor: imageBackgroundColor }}
        className="w-[64px] h-[64px] rounded-md mr-4"
      >
        <img src={image} alt="CO2" />
      </div>
      <div>
        <div>{title}</div>
        <div className="text-4xl font-semibold">{number}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
