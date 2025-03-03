import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-8 px-4 mx-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Hero Title</h1>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            It has survived not only five centuries but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularized in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <img
            className="h-40 w-52 rounded-lg shadow-md object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAO6raSxhlxQZKAxt-7-gHFlMGsiLnqc3zQ&s"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
