const Ship = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 my-20 uppercase">
      <div className="relative flex flex-col items-center justify-center text-center p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src="/images/fast-shipping.png"
          alt="Fast Shipping"
          className="h-20 w-20 transition-transform duration-300 transform hover:scale-110"
        />
        <p className="mt-10">Fast Shipping</p>
      </div>
      <div className="relative flex flex-col items-center justify-center text-center p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src="/images/free-pickup.png"
          alt="Free Pickup"
          className="h-20 w-20 transition-transform duration-300 transform hover:scale-110"
        />
        <p className="mt-10">Free In-Store Pickup</p>
      </div>
      <div className="relative flex flex-col items-center justify-center text-center p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src="/images/trusted.png"
          alt="Trusted"
          className="h-20 w-20 transition-transform duration-300 transform hover:scale-110"
        />
        <p className="mt-10">Trusted</p>
      </div>
      <div className="relative flex flex-col items-center justify-center text-center p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src="/images/gift-card.png"
          alt="Gift Cards"
          className="h-20 w-20 transition-transform duration-300 transform hover:scale-110"
        />
        <p className="mt-10">Gift Cards</p>
      </div>
    </div>
  );
};

export default Ship;
