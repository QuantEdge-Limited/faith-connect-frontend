import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 
                 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 
                 text-[#0D090A]"
    >
      {/* Content Container - Responsive grid layout */}
      <div className="max-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center lg:items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Badge/Tag - Responsive sizing */}
            <span className="inline-block text-sm sm:text-base md:text-lg font-semibold text-gray-600 uppercase tracking-wider">
              Faith
            </span>

            {/* Main Heading - Improved responsive typography */}
            <h2
              className="font-heading 
                          text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                          font-medium leading-[1.1] sm:leading-tight"
            >
              Our church,
              <span className="block lg:inline xl:block 2xl:inline">
                our story
              </span>
            </h2>

            {/* Description - Improved responsive text sizing */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed 
                         text-gray-700 max-w-none lg:max-w-xl xl:max-w-2xl"
            >
              Founded decades ago, our church has been a beacon of hope and
              community. We have grown together, supported each other, and
              shared our faith through generations.
            </p>

            {/* Stats Section - Improved layout and responsiveness */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-4 lg:pt-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#D4AF37] mb-2">
                  50
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight max-w-[200px] align-middle">
                  Years of spiritual growth and community service
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#D4AF37] mb-2">
                  50
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight max-w-[200px]">
                  Active ministries serving our local and global community
                </p>
              </div>
            </div>

            {/* CTA Buttons - Improved layout and sizing */}
            <div className="flex flex-row items-start justify-start gap-3 sm:gap-4 md:gap-5 pt-4">
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="w-full xs:w-auto
                           border border-gray-300 hover:bg-gray-50 
                           px-6 sm:px-8 md:px-10
                           py-3 sm:py-4 
                           text-sm sm:text-base md:text-lg
                           transition-all duration-300 
                           rounded-xl sm:rounded-2xl
                           font-medium
                           min-w-[120px]"
                >
                  Learn More
                </Button>
              </Link>

              <Link href="/community">
                <Button
                  variant="ghost"
                  className="w-full xs:w-auto
                           hover:bg-gray-50 
                           px-6 sm:px-8 md:px-10
                           py-3 sm:py-4 
                           text-sm sm:text-base md:text-lg
                           transition-all duration-300 
                           rounded-xl sm:rounded-2xl
                           font-medium
                           min-w-[120px]
                           flex items-center justify-center gap-2"
                >
                  Explore
                  <ChevronRight
                    size={16}
                    className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image - Improved responsive image */}
          <div className="w-full order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] xl:aspect-[3/4] 2xl:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/church.jpg"
                alt="Church building showcasing our parish community"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
