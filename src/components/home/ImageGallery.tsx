import PhotoAlbum from "react-photo-album";
import SectionHeading from "../ui/sectionHeading";

const ImageGallery = () => {
  const photos = [
    {
      src: "https://erramix-themes.com/gymex/images/blog/blog-2.png",
      width: 640,
      height: 480,
    },
    {
      src: "https://erramix-themes.com/gymex/images/classes/class4.jpg",
      width: 840,
      height: 520,
    },
    {
      src: "https://erramix-themes.com/gymex/images/classes/class3.png",
      width: 800,
      height: 1422,
    },
    {
      src: "https://erramix-themes.com/gymex/images/classes/class2.png",
      width: 1200,
      height: 500,
    },
    {
      src: "https://erramix-themes.com/gymex/images/classes/class1.jpg",
      width: 1920,
      height: 1281,
    },
    {
      src: "https://erramix-themes.com/gymex/images/blog/blog-3.png",
      width: 900,
      height: 600,
    },
    {
      src: "https://www.fitnessavenue.ca/cdn/shop/articles/Screenshot_2024-03-11_at_1.31.55_PM.png?crop=center&height=480&v=1710178339&width=480",
      width: 1109,
      height: 614,
    },
    {
      src: "https://www.fitnessavenue.ca/cdn/shop/articles/BLOG-01.jpg?crop=center&height=480&v=1724698724&width=480",
      width: 1150,
      height: 750,
    },
    {
      src: "https://www.fitnessavenue.ca/cdn/shop/articles/152234442_s.jpg?crop=center&height=480&v=1716091083&width=480",
      width: 696,
      height: 369,
    },
  ];
  return (
    <section className="w-full mt-[50px]">
      <SectionHeading text="" />

      <div className="w-full rounded-[10px] overflow-hidden shadow-lg mt-[40px]">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </section>
  );
};

export default ImageGallery;
