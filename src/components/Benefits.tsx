import React from "react";
import driver from "../../public/driver.png";
import ellipse from "../../public/ellipse-1.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <>
      <div className="max-container bg-black text-white flex items-center justify-center p-4 ">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <Image
              src={driver}
              alt="Smiling person in a vehicle"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="space-y-10 relative">
            <h2 className="max-sm:text-start max-sm:text-2xl text-6xl pl-10 font-bold mt-10">
              Why Choose <span className="text-red">Us</span>
            </h2>
            <div className="max-sm:hidden absolute left-0 top-24 bottom-24 w-0.5 bg-stone-600">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red rounded-full"></div>
            </div>
            <div className="pl-10 max-sm:pl-0  relative">
              <div className="max-sm:hidden absolute left-0 top-0 bottom-0 w-6 overflow-hidden">
                <div className=" absolute top-24 left-0 w-6 h-6 bg-red transform rotate-45 -translate-x-3 -translate-y-3"></div>
              </div>
              <div className="rounded-sm p-4 bg-red">
                <h3 className="text-xl font-semibold mb-2">
                  Proven Track Record of Excellence
                </h3>
                <p className="text-gray-200">
                  At Acme Logistics, we take pride in our proven track record of
                  excellence and our deep understanding of Africas unique
                  logistics landscape. With years of experience, we have
                  established ourselves as a trusted partner for businesses
                  across the continent.
                </p>
              </div>
            </div>
            <div className="pl-10 max-sm:pl-0 relative">
              <div className="max-sm:hidden absolute left-0 top-0 bottom-0 w-6 overflow-hidden">
                <div className="absolute top-20 left-0 w-6 h-6 bg-red transform rotate-45 -translate-x-3 -translate-y-3"></div>
              </div>

              <Image
                  src={ellipse}
                  alt="bg-circle"
                  className="absolute -z-0 -top-72 ml-80  "
                />

              <div className="bg-red p-4 rounded-sm ">
             
                <h3 className="text-xl font-semibold mb-2">
                  Comprehensive Solutions Tailored to Your Needs
                </h3>

                <p className="text-gray-200">
                  We offer comprehensive logistics solutions tailored to meet
                  the specific needs of every customer, industry, and shipment.
                  Whether you are looking to transport goods across borders or
                  within cities, we have the expertise and network to ensure
                  your cargo reaches its destination safely and on time.
                </p>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
