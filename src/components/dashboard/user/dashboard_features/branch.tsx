import React from "react";
import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "../../../ui/card";

/*
  Branch component:
  Displays details about a specific church branch including
  name, pastor, location, service times, and contact info.
*/
const Branch = () => {
  // Example static branch data
  const branch = {
    id: 1,
    name: "Grace Community Church",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=400&fit=crop",
    location: {
      address: "123 Hope Street",
      city: "Nairobi",
      state: "Nairobi County",
      country: "Kenya",
    },
    pastor: "Rev. John Mwangi",
    serviceTimes: ["Sunday 9:00 AM", "Sunday 11:00 AM", "Wednesday 6:00 PM"],
    contact: {
      phone: "+254 712 345 678",
      email: "info@gracecommunity.ke",
      website: "https://gracecommunity.ke",
    },
  };

  return (
    <div className="h-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 px-1 dark:text-gray-100">
        Branch Overview
      </h2>

      {/* Card for branch information */}
      <Card className="h-auto border-[#D4AF37]/20 bg-white shadow-sm hover:shadow-md transition-shadow text-[#0D090A] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
        <CardContent className="p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Branch Image and Basic Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-5">
              <img
                src={branch.image}
                alt={branch.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full flex-shrink-0 border-2 border-gray-200 dark:border-gray-600"
              />
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 break-words">
                  {branch.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {branch.pastor}
                </p>
              </div>
            </div>

            {/* Location, Service Times, and Contact Info */}
            <div className="space-y-5 text-sm sm:text-base">
              {/* Location */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold ">Location:</span>
                  <p className="text-gray-600 break-words dark:text-gray-300">
                    {branch.location.address}, {branch.location.city}
                  </p>
                </div>
              </div>

              {/* Service Times */}
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold ">Service Times:</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {branch.serviceTimes.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="mt-5 pt-2 border-t border-gray-100 dark:border-gray-700">
            <p className="break-words">
              <span className="font-semibold ">Phone:</span>{" "}
              {branch.contact.phone}
            </p>
            <p className="break-all">
              <span className="font-semibold ">Email:</span>{" "}
              <span className="dark:text-gray-300">{branch.contact.email}</span>
            </p>

            {/* Conditional rendering for website */}
            {branch.contact.website && (
              <p className=" break-all">
                <span className="font-semibold ">Website:</span>{" "}
                <a
                  href={branch.contact.website}
                  className="text-blue-500 hover:text-blue-700 underline dark:text-blue-300 dark:hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {branch.contact.website}
                </a>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Branch;
