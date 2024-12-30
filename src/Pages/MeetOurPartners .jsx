import React from "react";

const partners = [
  {
    name: "Tech Innovators Inc.",
    logo: "https://example.com/logos/tech-innovators.png",
    description:
      "A leading provider of cutting-edge technology solutions, enabling businesses to thrive in a digital-first world.",
  },
  {
    name: "Green Solutions Co.",
    logo: "https://example.com/logos/green-solutions.png",
    description:
      "Dedicated to sustainability, Green Solutions Co. offers eco-friendly products and consulting services.",
  },
  {
    name: "EduSmart Partners",
    logo: "https://example.com/logos/edusmart-partners.png",
    description:
      "Collaborating with schools and universities to provide innovative learning tools and resources.",
  },
  {
    name: "HealthFirst Alliance",
    logo: "https://example.com/logos/healthfirst-alliance.png",
    description:
      "Focused on improving healthcare accessibility through technology and community programs.",
  },
  {
    name: "Global Reach Media",
    logo: "https://example.com/logos/global-reach-media.png",
    description:
      "A global leader in digital marketing and brand growth strategies for modern businesses.",
  },
];

const MeetOurPartners = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Partners</h2>
        <p className="text-gray-600">
          Learn more about our amazing partners and their contributions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg p-4 rounded-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-16 w-16 object-contain mr-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {partner.name}
              </h3>
            </div>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurPartners;
