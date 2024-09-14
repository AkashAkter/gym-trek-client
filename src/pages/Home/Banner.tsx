const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center mt-4 mb-80">
        <div className="">
          <p
            className="text-5xl mb-8"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            MAKE YOUR BODY BECOME{" "}
            <span
              className="text-primary"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              FIT AND STRONG
            </span>
          </p>
          <p
            className="text-[18px] text-[#686868]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            We provides high quality with affordable prices for you to make your
            home like a gym room.
          </p>
          <button
            className="bg-primary text-white px-8 py-4 mt-8"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Start Shopping
          </button>
        </div>
        <div>
          <img
            className="rounded-2xl"
            src="https://erramix-themes.com/gymex/images/hero/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
