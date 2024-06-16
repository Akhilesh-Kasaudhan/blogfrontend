import React from "react";

const Services = () => {
  const services = [
    {
      title: " Blog Creation Tools",
      description:
        "Create and publish high-quality blogs with ease using our intuitive and user-friendly blog creation tools. Customize your blog’s appearance, format your content, and add multimedia elements to make your posts engaging and visually appealing.",
      icon: "🔍",
    },
    {
      title: "Custom Domain and Branding",
      description:
        "Personalize your blog with a custom domain and unique branding options. Stand out from the crowd with a distinctive blog identity that reflects your style and personality.",
      icon: "📊",
    },
    {
      title: "Technical Support",
      description:
        "Get reliable technical support for troubleshooting, guidance, and tips to ensure a smooth blogging experience.",
      icon: "📈",
    },
    {
      title: "Content Management",
      description:
        "Effortlessly manage your blog content with our comprehensive content management system.",
      icon: "✏️",
    },
    {
      title: "Community Engagement",
      description:
        "Connect with a vibrant community of bloggers and readers. Engage with your audience through comments, discussions, and social sharing features",
      icon: "🛡️",
    },
    {
      title: "Analytics and Insights",
      description:
        "Gain valuable insights into your blog’s performance with our detailed analytics dashboard.",
      icon: "📢",
    },
  ];
  return (
    <div className="bg-[#14213d] h-full w-full">
      <div className=" bg-[#0d3b66] px-4 py-20 ">
        <h1 className="text-2xl lg:text-5xl mt-10 text-center leading-snug font-primary  font-bold text-[#faf0ca] ">
          Services Page
        </h1>
      </div>
      <div className=" text-[#faf0ca] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Our <span className="text-[#fca311]">Services</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0d4c82] p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-indigo-300">
                    {service.icon} {service.title}
                  </h3>
                  <button className="text-[#fca311] text-xl">&rarr;</button>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
