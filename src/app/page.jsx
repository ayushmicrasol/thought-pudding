"use client";
import Button from "@/components/common/Button";
import WebsiteLayout from "@/layout/website/WebsiteLayout";
import { ArrowUpRight, CalendarDots, CheckFat } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import {
  AnalyticsIcon,
  CalendarIcon,
  ClockIcon,
  RegularNotificationIcon,
} from "../../public/assets/Svgs";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import FAQ from "@/components/common/FAQ";

const GrowthDriven = [
  {
    icon: <CalendarIcon className="sm:w-8 sm:h-8 w-6 h-6" />,
    title: "Integrated Calendar",
    paragraph:
      "Sync with your existing calendar to avoid double bookings and conflicts.",
    list: [
      "Real-time Availability",
      "Secure Scheduling",
      "Time Zone Management",
    ],
    img: "/assets/images/home/growth2.webp",
    extraImg: "/assets/images/home/DatePicker.webp",
  },
  {
    icon: (
      <RegularNotificationIcon
        pathFillColor="#2C58BB"
        className="sm:w-8 sm:h-8 w-6 h-6"
      />
    ),
    title: "Automated Reminder",
    paragraph:
      "Send automatic reminders to your patients to reduce no-shows and late cancellations.",
    list: [
      "Timely Notifications",
      "Save time and effort",
      "Maintain a positive reputation",
    ],
    img: "/assets/images/home/growth3.webp",
    extraImg: "/assets/images/home/Reminder.webp",
  },
  {
    icon: <ClockIcon className="sm:w-8 sm:h-8 w-6 h-6" />,
    title: "Easy Appointment Booking",
    paragraph:
      "Manage your appointments from any device, whether you’re in the office or on the go.",
    list: ["Simple calendar", "Add reminders", "Easy Rescheduling"],
    img: "/assets/images/home/growth1.webp",
    extraImg: "/assets/images/home/Session.webp",
  },
  {
    icon: <AnalyticsIcon className="sm:w-8 sm:h-8 w-6 h-6" />,
    title: "Analytics and Reporting",
    paragraph:
      "Enables improved strategic planning and decision-making by providing real-time financial insights.",
    list: [
      "User Behavior Analysis",
      "Cancellation session",
      "Future-proof your business",
    ],
    img: "/assets/images/home/growth4.webp",
    extraImg: "/assets/images/home/Cancellation.webp",
  },
];

const clinetReview = [
  {
    image: "/assets/images/home/client.webp",
    paragraph:
      "This system has saved me about 30% of my time. Scheduling, client management, and payments are now faster and more efficient!",
    rating: "5.0",
    name: "Dr Puran sharma",
  },
  {
    image: "/assets/images/home/client2.webp",
    paragraph:
      "This system has saved me about 30% of my time. Scheduling, client management, and payments are now faster and more efficient!",
    rating: "5.0",
    name: "Dr sweta puran",
  },
  {
    image: "/assets/images/home/client3.webp",
    paragraph:
      "This system has saved me about 30% of my time. Scheduling, client management, and payments are now faster and more efficient!",
    rating: "5.0",
    name: "Dr Puran sharma",
  },
];

export default function Home() {
  return (
    <div className="">
      <WebsiteLayout>
        {/* Hero section  */}
        <section className="">
          <div className="bg-[url('/assets/images/bg-image.webp')] bg-cover bg-center bg-no-repeat">
            <div className="sm:py-150px pt-[60px] pb-50px px-4 sm:px-0 text-center">
              <h1 className="sm:text-[54px] sm:leading-[64px] text-2xl/8 font-semibold text-primary max-w-[900px] mx-auto">
                Optimize your Practice with Our{" "}
                <span className="text-blue-600">Admin Solution</span>
              </h1>
              <p className="sm:pt-30px pt-5 sm:max-w-[751px] mx-auto sm:text-base/7 text-sm_18 text-gray-400">
                Take a chance on the efficiency and speed of your company and
                gain{" "}
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden relative z-[1] align-middle border-2 border-white">
                  <Image
                    src="/assets/images/home/client.webp"
                    alt="banner"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden -ml-2 relative z-[2] align-middle border-2 border-white">
                  <Image
                    src="/assets/images/home/client2.webp"
                    alt="banner"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden -ml-2 relative z-[3] align-middle border-2 border-white">
                  <Image
                    src="/assets/images/home/client3.webp"
                    alt="banner"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </span>{" "}
                20% more clients with the help of the Thought Pudding Admin
                Panel.
              </p>
              <Button
                variant="filled"
                className={`mt-30px flex items-center gap-2 mx-auto`}
              >
                schedule a demo
                <CalendarDots size={16} />
              </Button>
              <div className="max-w-[1009px] mx-auto h-auto overflow-hidden rounded-base sm:mt-[92px] mt-10">
                <Image
                  src="/assets/images/home/hero-img.webp"
                  alt="banner"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Growth-Driven Tools */}
        <section className="container mx-auto">
          <div className="bg-blue-300 sm:px-[50.5px] px-4 sm:pb-20 sm:pt-100px py-50px  rounded-xl">
            <div className="max-w-[704px] mx-auto text-center">
              <h2 className="sm:text-4.5xl sm:leading-[48px] text-xl/7 font-semibold text-primary">
                Empower Your Practice with Our{" "}
                <span className="text-blue-600">Growth-Driven</span> Tools
              </h2>
              <div className="flex items-center justify-center pt-30px">
                <Button variant="filled" className="flex items-center gap-1.5">
                  Free trial request a demo <ArrowUpRight />
                </Button>
              </div>
            </div>

            <div className="sm:pt-20 pt-30px sm:space-y-20 space-y-50px">
              {GrowthDriven.map((item, index) => (
                <div
                  key={index}
                  className="grid sm:grid-cols-2 gap-16 sm:gap-0 bg-white rounded-base overflow-hidden relative sm:p-0 p-15px pb-6"
                >
                  <div
                    className={`bg-white sm:p-12 sm:h-[462px] flex order-2 ${
                      index % 2 !== 0
                        ? "sm:order-2 sm:justify-end"
                        : "sm:order-1"
                    }`}
                  >
                    <div>
                      {item.icon}
                      <h2 className="sm:text-xl/7 text-base/5  text-primary font-semibold pt-3">
                        {item.title}
                      </h2>
                      <p className="sm:text-sm/5 text-xs/4 sm:pt-5 pt-3 max-w-[360px] text-gray-400">
                        {item.paragraph}
                      </p>
                      <ul className="sm:pt-30px pt-15px space-y-5">
                        {item.list?.map((items, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-[18px] sm:text-lg/6 text-sm_18 text-blue-700 font-medium"
                          >
                            <CheckFat
                              weight="fill"
                              className="text-blue-600 sm:text-base text-xs"
                            />
                            {items}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`w-full sm:h-[462px] h-[219px] rounded-lg overflow-hidden sm:rounded-none order-1 ${
                      index % 2 !== 0 ? "sm:order-1" : "sm:order-2"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt="Growth-Driven Tools"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute shadow-[0px_1.58px_8.89px_0px_#2424241A] rounded-lg animate-move left-3.5 bottom-64  ${
                      item.extraImg === "/assets/images/home/DatePicker.webp"
                        ? "sm:left-[430px] sm:bottom-7"
                        : item.extraImg === "/assets/images/home/Reminder.webp"
                        ? "sm:left-[350px] sm:bottom-16"
                        : item.extraImg === "/assets/images/home/Session.webp"
                        ? "sm:left-1/3 sm:bottom-16"
                        : item.extraImg ===
                          "/assets/images/home/Cancellation.webp"
                        ? "sm:left-1/3 sm:bottom-16"
                        : ""
                    }`}
                  >
                    <Image
                      src={item.extraImg}
                      alt="Growth-Driven Tools extraImg"
                      width={500}
                      height={300}
                      className="sm:w-[222px] w-[150px] h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* dashboard manage the admin */}
        <section className="sm:pt-100px pt-50px container mx-auto px-4 xl:px-0">
          <div className="max-w-[704px] mx-auto text-center">
            <h2 className="sm:text-4.5xl_48 text-xl/7 font-semibold text-primary capitalize">
              Focus on patients. Let our dashboard manage the admin
            </h2>
            <p className="text-gray-400 sm:text-base/6 text-sm/5 max-w-[500px] mx-auto sm:pt-30px pt-5">
              Enhance your therapeutic practice, streamline operations, and
              focus on your clients' well-being
            </p>
            <Button variant="default" className={`mt-7 `}>
              Schedule a demo
            </Button>
          </div>
          <div className="sm:mt-50px mt-7 mx-auto cursor-pointer sm:max-w-[822px] max-w-[283px] sm:h-[423px] h-36 rounded-lg overflow-hidden">
            <Image
              src="/assets/images/home/videoimage.png"
              alt="video"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Our clients experiences  speak volumes. */}
        <section className="sm:pt-100px pt-50px">
          <div className="container mx-auto px-4 xl:px-0 flex justify-center">
            <div className="text-center">
              <h2 className="sm:text-4.5xl_48 text-xl/7 font-semibold text-primary capitalize max-w-[652px]">
                Our clients experiences  speak volumes.
              </h2>
              <p className="text-gray-400 sm:text-base/6 text-sm/5 max-w-[697px] pt-5">
                Real and Insightful Feedback from Professionals Like You,
                Offering Guidance to Enhance Your Experience and Decision-Making
              </p>
              <div className="mx-auto inline-block bg-[#FFFAEA] p-3 rounded-md mt-5">
                <p className="text-primary sm:text-base/6 text-sm/5 font-medium">
                  Thought Pudding
                </p>
                <div className="flex items-center gap-1 pt-1">
                  <p className="flex items-center text-[#F7BF09] text-base/5">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarHalfFill />
                  </p>
                  <p className="text-base/5">4.8</p>
                  <Image
                    src="/assets/images/home/smile.gif"
                    alt="video"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-x-hidden client_marquee_anim_wrap cursor-pointer">
            <div className="flex client_marquee_anim sm:pt-50px pt-5">
              {clinetReview.map((item, index) => (
                <div
                  key={index}
                  className={`sm:min-w-[581px] sm:w-[581px] min-w-[343px] w-[342px] sm:h-[211px] h-[152px] grid grid-cols-3 sm:mx-6 mx-2.5  overflow-hidden rounded-base review_card ${
                    index % 2 === 0
                      ? "bg-[#FFFDF1]"
                      : "bg-[#FFF5ED] sm:-translate-y-5"
                  }`}
                >
                  <div className="h-full rounded-base overflow-hidden">
                    <Image
                      src={item.image}
                      alt="video"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover review_image"
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="sm:pt-5 sm:pl-3 sm:pr-3.5 sm:pb-4 p-2.5 flex flex-col justify-between h-full">
                      <p className="sm:text-sm_22 text-[10px] leading-4 text-blue-700 font-medium">
                        {item.paragraph}
                      </p>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="flex items-center text-[#F7BF09] sm:text-base/6 text-[10px] leading-4">
                            <RiStarFill />
                            <RiStarFill />
                            <RiStarFill />
                            <RiStarFill />
                            <RiStarFill />
                          </p>
                          <p className="sm:text-base/6 text-[10px] leading-4 text-gray-400">
                            {item.rating}
                          </p>
                        </div>
                        <p className="sm:text-base/6 text-[10px] leading-4 font-medium text-primary pt-[2px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex client_marquee_anim sm:pt-50px pt-5">
              {clinetReview.map((item, index) => (
                <div
                  key={index}
                  className={`sm:min-w-[581px] sm:w-[581px] min-w-[343px] w-[342px] sm:h-[211px] h-[152px] grid grid-cols-3 sm:mx-6 mx-2.5  overflow-hidden rounded-base review_card ${
                    index % 2 === 0
                      ? "bg-[#FFF5ED] sm:-translate-y-5"
                      : "bg-[#FFFDF1]"
                  }`}
                >
                  <div className="h-full rounded-base overflow-hidden">
                    <Image
                      src={item.image}
                      alt="video"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover review_image"
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="sm:pt-5 sm:pl-3 sm:pr-3.5 sm:pb-4 p-2.5 flex flex-col justify-between h-full">
                      <p className="sm:text-sm_22 text-[10px] leading-4 text-blue-700 font-medium">
                        {item.paragraph}
                      </p>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="flex items-center text-[#F7BF09] sm:text-base/6 text-[10px] leading-4">
                            <RiStarFill />
                            <RiStarFill />
                            <RiStarFill />
                            <RiStarFill />
                            <RiStarFill />
                          </p>
                          <p className="sm:text-base/6 text-[10px] leading-4 text-gray-400">
                            {item.rating}
                          </p>
                        </div>
                        <p className="sm:text-base/6 text-[10px] leading-4 font-medium text-primary pt-[2px]">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
      </WebsiteLayout>
    </div>
  );
}
