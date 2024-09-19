const CustomerTestimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      message: "This product changed my life! I can't recommend it enough.",
      position: "Fitness Enthusiast",
    },
    {
      name: "Jane Smith",
      message:
        "Excellent quality and great customer service. Highly satisfied!",
      position: "Personal Trainer",
    },
    {
      name: "Mike Johnson",
      message:
        "I've seen amazing results since using these products. Truly fantastic!",
      position: "Nutritionist",
    },
    {
      name: "Emily Clark",
      message:
        "The variety of products available is outstanding. I found exactly what I needed!",
      position: "Yoga Instructor",
    },
    {
      name: "David Brown",
      message:
        "Fantastic experience! The quality is top-notch and delivery was prompt.",
      position: "Fitness Coach",
    },
    {
      name: "Sophia Davis",
      message:
        "I love how this brand prioritizes customer satisfaction. Highly recommend!",
      position: "Health Blogger",
    },
  ];

  return (
    <section className="container mx-auto py-12 mb-10">
      <div className="mb-10 ">
        <h1 className="text-3xl">Customer Testimonials</h1>
        <p className="border border-b-4 border-primaryMat w-20 my-4"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-background rounded-lg shadow-lg p-6">
            <p className="italic">"{testimonial.message}"</p>
            <h3 className="font-bold mt-4">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonial;
