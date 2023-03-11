import React from "react";

export const PreFooter = () => {
  const title = "It’s Time to Start Investing in Yourself in Learning";
  const btn = "Get Started";

  const content = [
    {
      title: "E learn",
      subcontent: [
        "About",
        "What The Learner",
        "Leadership",
        "Careers",
        "Catalog",
        "For Inspiration",
      ],
    },
    {
      title: "Courses",
      subcontent: [
        "Classroom Courses",
        "Virtual Classroom Courses",
        "E-learning Courses",
        "Video Courses",
        "Online Courses",
      ],
    },
    {
      title: "Community",
      subcontent: [
        "Learners",
        "Partners",
        "Competitor",
        "Transactio",
        "Blog",
        "Teaching Center",
      ],
    },
    {
      title: "Quick Links",
      subcontent: [
        "Home",
        "Professional Education",
        "Courses",
        "Admissions",
        "Testimonials",
        "Programs",
      ],
    },
    {
      title: "More",
      subcontent: [
        "Process",
        "Implementation",
        "Team",
        "Privacy",
        "Help",
        "Contact",
      ],
    },
  ];
  return (
    <div className="bg-[#FFF8DD] lg:px-[135px] px-10">
      <div className="flex items-center justify-center flex-col">
        {/* card */}
        <div className="bg-[#06AED5] xl:w-[915px] p-10 rounded-3xl flex items-center justify-center flex-col gap-10 -mt-28">
          <div className="text-white font-semibold text-2xl xl:text-4xl text-center w-3/4">
            {title}
          </div>

          <button className="cursor-pointer bgPrimary px-4 py-2 text-white font-semibold">
            {btn}
          </button>
        </div>
      </div>

      {/* prefooter */}
      <div className="w-full py-10">
        <div className="xl:flex items-start xl:justify-between grid grid-cols-2">
          {content.map((item, index) => (
            <div className="flex flex-col py-5" key={index}>
              <p className="font-semibold text-lg"> {item.title}</p>

              {item.subcontent.map((subitem, index) => (
                <div key={index} className="pt-5 font-normal cursor-pointer">
                  {subitem}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
