import Banner from "./Banner";

const Home = () => {
  return (
    <div className="sm:mx-5">
      <Banner />
      <div className="">
        <img
          src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?cs=srgb&dl=pexels-vladalex94-1402787.jpg&fm=jpg"
          alt=""
        />

        <img
          src="https://4kwallpapers.com/images/wallpapers/marvels-spider-man-2560x1440-11990.jpeg"
          alt=""
        />

        <img
          src="https://rare-gallery.com/mocahbig/1377136-anime-boy-alone-night-scenery-4k-pc-wallpaper.jpg"
          alt=""
        />

        <img
          src="https://pbs.twimg.com/media/FwYFblCWAAIjPNT.jpg:large"
          alt=""
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 ">
        <img
          className="h-full max-w-full "
          src="https://rare-gallery.com/mocahbig/1377136-anime-boy-alone-night-scenery-4k-pc-wallpaper.jpg"
          alt=""
        />

        <img
          className="h-full max-w-full "
          src="https://pbs.twimg.com/media/FwYFblCWAAIjPNT.jpg:large"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
