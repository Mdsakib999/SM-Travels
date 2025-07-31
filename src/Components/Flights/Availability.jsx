import guidelineImg from "/assets/guideline.png";

export const Availability = () => {
  return (
    <div className="max-w-7xl mx-auto px-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          9 Flight Available
        </h1>

        <div className="flex gap-3 items-center text-gray-600">
          <p className="text-md">25 Jan</p>
          <span className="text-2xl font-semibold leading-none">•</span>
          <p className="text-md">1 Stop</p>
        </div>
      </div>

      <div className="my-4">
        <img src={guidelineImg} alt="guideline" className="w-full" />
      </div>
    </div>
  );
};
