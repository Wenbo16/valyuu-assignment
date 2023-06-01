import Button from "components/Button";
import forward from "assets/images/forward.svg";

interface MobileCardProps {
  title: string;
  description: string;
  imgUrl: string;
  backgroundColor: string;
}

export default function MobileCard({
  title,
  description,
  imgUrl,
  backgroundColor
}: MobileCardProps) {
  return (
    <div
      style={{ background: backgroundColor }}
      className="w-[335px] h-[373px] mt-6 border border-black rounded-md"
    >
      <div className={`w-full h-[180px] bg-no-repeat bg-cover`}>
        <img src={imgUrl} alt="" />
      </div>
      <div className="p-6 pl-5 pr-5">
        <div className="font-semibold text-lg ">{title}</div>
        <div className="mt-2 mb-8 text-sm">{description}</div>
        <Button type="primary" size="small">
          <span>Know more</span>
          <span className="align-middle ml-1">
            <img src={forward} alt="forward" />
          </span>
        </Button>
      </div>
    </div>
  );
}
