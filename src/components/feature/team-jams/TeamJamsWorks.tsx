"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Clock, Zap, BrainCircuit } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Clock,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Time-Boxed Sessions",
    description:
      "Set a timer, focus intensely, and capture ideas without overthinking. Short, concentrated bursts of productivity replace lengthy meetings.",
  },
  {
    id: 2,
    icon: Zap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Rapid Fire Knowledge",
    description:
      "No time for perfect grammar or spelling. Just raw, unfiltered ideas flowing quickly from your team's collective intelligence.",
  },
  {
    id: 3,
    icon: BrainCircuit,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "AI Processing",
    description:
      "Dunkware AI processes all the content and generates the types of artifacts configured for your specific needs.",
  },
   {
    id: 4,
    icon: BrainCircuit,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "AI Processing",
    description:
      "Dunkware AI processes all the content and generates the types of artifacts configured for your specific needs.",
  },
];

export default function TeamJamsWorks() {
  return (
    <div className="bg-white py-[80px] font-roboto">
      <div className="container mx-auto px-4 relative">
        <div className="absolute -left-44 top-0 lg:block hidden"></div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How AI Jams Works</h2>
          
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                <div
                  className={`h-12 w-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
