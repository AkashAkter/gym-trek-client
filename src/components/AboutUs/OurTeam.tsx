const OurTeam = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "CEO",
      bio: "Alice is a visionary leader with over 10 years of experience in the fitness industry. She is passionate about promoting health and wellness.",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Bob Smith",
      role: "Head of Marketing",
      bio: "Bob has a knack for creating innovative marketing strategies that connect with customers. He loves fitness and healthy living.",
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    },
    {
      name: "Catherine Lee",
      role: "Product Manager",
      bio: "Catherine is dedicated to developing high-quality products that meet customer needs. She has a strong background in nutrition.",
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
      name: "David Kim",
      role: "Customer Support",
      bio: "David is committed to providing the best support for our customers. He enjoys helping others achieve their fitness goals.",
      image:
        "https://t4.ftcdn.net/jpg/05/31/37/89/360_F_531378938_xwRjN9e5ramdPj2coDwHrwk9QHckVa5Y.jpg",
    },
  ];

  return (
    <section className="container mx-auto my-10">
      <div className="mb-10">
        <h1 className="text-3xl">Meet Our Team</h1>
        <p className="border border-b-4 border-primaryMat w-20 my-4"></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-background rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
            <p className="text-gray-500 text-center">{member.role}</p>
            <p className="mt-2 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
