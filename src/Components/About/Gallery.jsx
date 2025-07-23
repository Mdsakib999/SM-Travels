const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center space-y-10 my-20">
      <header>
        <p className="text-orange-600 font-semibold mb-2 text-sm sm:text-base">
          Explore More
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          Our International Packages
        </h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="grid gap-4">
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img1.jpg"
              alt="France"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white text-sm p-2 flex justify-between rounded-b-lg">
              <span>France</span>
              <span>$1200</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img2.jpg"
              alt="Switzerland"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white text-sm p-2 flex justify-between rounded-b-lg">
              <span>Switzerland</span>
              <span>$1500</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img3.jpg"
              alt="France"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>France</span>
              <span>$1300</span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img4.jpg"
              alt="Switzerland"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>Switzerland</span>
              <span>$1800</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXVyb3BlfGVufDB8fDB8fHww"
              alt="France"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>France</span>
              <span>$1400</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img6.jpg"
              alt="Switzerland"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>Switzerland</span>
              <span>$1600</span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid gap-4">
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="https://t4.ftcdn.net/jpg/15/53/68/91/240_F_1553689115_UVX21y0Ptn6YjGPMDkDpQgD9pf433YXy.jpg"
              alt="France"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>France</span>
              <span>$1250</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img8.jpg"
              alt="Switzerland"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>Switzerland</span>
              <span>$1700</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-96 rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img9.jpg"
              alt="France"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>France</span>
              <span>$1350</span>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="grid gap-4">
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img10.jpg"
              alt="Switzerland"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>Switzerland</span>
              <span>$1650</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="https://t3.ftcdn.net/jpg/10/44/61/40/240_F_1044614002_8zFErNKTjCgoyPgZ0CoiHq4JibJhnErS.jpg"
              alt="France"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>France</span>
              <span>$1280</span>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full rounded-lg object-cover brightness-75 hover:brightness-50 duration-500"
              src="./assets/about/img12.jpg"
              alt="Switzerland"
            />
            <div className="absolute bottom-0 left-0 right-0 text-white  text-sm p-2 flex justify-between rounded-b-lg">
              <span>Switzerland</span>
              <span>$1550</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
