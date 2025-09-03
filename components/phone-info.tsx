import Image from "next/image";

export const PhoneInfo = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src="/phone.svg"
        alt="Phone icon"
        width={42}
        height={42}
        className="w-auto h-full"
      />
      <div className="font-tertiary leading-none text-white">
        <p className="text-sm font-medium uppercase">
          24/7 Pizza delivery service
        </p>
        <p className="text-3xl font-extrabold tracking-wide">912 986 1588</p>
      </div>
    </div>
  );
};
