"use client";
import Button from "@/components/common/Button";
import WebsiteLayout from "@/layout/website/WebsiteLayout";
import {
  ArrowUpRight,
  CalendarDots,
  CheckFat,
  PlayCircle,
} from "@phosphor-icons/react";
import Image from "next/image";
import {
  AnalyticsIcon,
  CalendarIcon,
  ClockIcon,
  RegularNotificationIcon,
} from "../../public/assets/Svgs";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import FAQ from "@/components/common/FAQ";
import { useRef, useState } from "react";

const GrowthDriven = [
  {
    icon: <ClockIcon className="sm:w-10 sm:h-10 w-6 h-6" />,
    title: "Easy session booking",
    paragraph:
      "Manage all your sessions, whether theyʼre youʼre just starting or already have an established practice.",
    list: [
      "Schedule intake calls and therapy sessions",
      "Sync google calendar with just one click",
      "Reschedule, cancel, block slots with",
    ],
    img: "/assets/images/home/growth1.webp",
    extraImg: "/assets/images/home/Session.webp",
  },
  {
    icon: <CalendarIcon className="sm:w-10 sm:h-10 w-6 h-6" />,
    title: "Integrated Calendar",
    paragraph:
      "Sync with your existing calendar to avoid double bookings and conflicts.",
    list: [
      "Real-time availability",
      "Secure scheduling",
      "Time zone management",
    ],
    img: "/assets/images/home/growth2.webp",
    extraImg: "/assets/images/home/DatePicker.webp",
  },
  {
    icon: (
      <RegularNotificationIcon
        pathFillColor="#C58843"
        className="sm:w-10 sm:h-10 w-6 h-6"
      />
    ),
    title: "Automated reminder",
    paragraph:
      "Send client reminders and quickly find open slots—no more wasting hours juggling your calendar and client follow-ups.",
    list: [
      "Timely notifications",
      "Save time and effort",
      "Build a professional practice grounded in healthy boundaries",
    ],
    img: "/assets/images/home/growth3.webp",
    extraImg: "/assets/images/home/Reminder.webp",
  },

  {
    icon: <AnalyticsIcon className="sm:w-10 sm:h-10 w-6 h-6" />,
    title: "Hassle-free payments and session accounts",
    paragraph:
      "Say goodbye to painful excel sheets, track monthly income with least effort and no more missing out on cancellation fees.",
    list: [
      "Collect session payments in one place",
      "Track cancellations charges",
      "Automated monthly accounts",
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
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div className="">
      <WebsiteLayout>
        {/* Hero section  */}
        <section className="">
          <div className="bg-[url('/assets/images/home/bg-image.webp')] bg-cover bg-center bg-no-repeat">
            <div className="sm:py-120px pt-[60px] pb-50px px-4 sm:px-0 text-center">
              <h1 className="sm:text-[48px] sm:leading-[62px] text-2xl/8 font-semibold text-green-600 max-w-[900px] mx-auto">
                Your all-in-one support system for private practice
              </h1>
              <p className="pt-4 sm:max-w-[640px] mx-auto sm:text-lg/8 text-sm_18 text-primary/50">
                Manage your private practice from intake to income, whether
                youʼre a solo practitioner or part of a collective. All in one
                place.
              </p>
              <div className="mt-6 flex sm:flex-row flex-col items-center sm:gap-30px gap-3 justify-center">
                <Button variant="filled" className={`flex items-center gap-2 `}>
                  Schedule a Demo
                  <ArrowUpRight className="text-xl" />
                </Button>
                <Button variant="default" className={``}>
                  Free Trial For 3 Months
                </Button>
              </div>
              <div className="max-w-[1000px] mx-auto h-auto overflow-hidden rounded-base sm:mt-50px mt-10">
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
          <div className="bg-yellow-100 sm:px-[50.5px] px-4 sm:pb-20 sm:pt-100px py-50px  rounded-xl">
            <div className="max-w-[704px] mx-auto text-center">
              <h2 className="sm:text-38px_45 text-xl/7 font-semibold text-primary">
                The best part? built by a therapist who has been in your shoes.
              </h2>
              <div className="flex items-center justify-center pt-6">
                <Button variant="filled" className="flex items-center gap-1.5">
                  Free trial request a demo <ArrowUpRight className="text-xl" />
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
                    className={`bg-white sm:p-10 sm:h-[462px] flex order-2 ${
                      index % 2 !== 0
                        ? "sm:order-2 sm:justify-end"
                        : "sm:order-1"
                    }`}
                  >
                    <div className="max-w-[392px] flex flex-col justify-center">
                      {item.icon}
                      <h2 className="sm:text-2xl/7 text-base/5  text-primary font-semibold pt-3">
                        {item.title}
                      </h2>
                      <p className="sm:text-sm/5 text-xs/4 sm:pt-3.5 pt-3 text-primary/50">
                        {item.paragraph}
                      </p>
                      <ul className="sm:pt-5 pt-15px space-y-4">
                        {item.list?.map((items, index) => (
                          <li
                            key={index}
                            className="flex items-baseline gap-[18px] sm:text-lg/6 text-sm_18 text-primary font-medium"
                          >
                            <CheckFat
                              weight="fill"
                              className="text-yellow-600 sm:text-base text-xs sm:min-w-6 min-w-3.5"
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
                    className={`absolute shadow-[0px_1.58px_8.89px_0px_#2424241A] rounded-lg animate-move left-3.5  ${
                      item.extraImg === "/assets/images/home/DatePicker.webp"
                        ? "sm:left-[430px] sm:bottom-7  bottom-64"
                        : item.extraImg === "/assets/images/home/Reminder.webp"
                        ? "sm:left-[430px] sm:bottom-16  bottom-72"
                        : item.extraImg === "/assets/images/home/Session.webp"
                        ? "sm:left-[470px] sm:bottom-16  bottom-72"
                        : item.extraImg ===
                          "/assets/images/home/Cancellation.webp"
                        ? "sm:left-[410px] sm:bottom-16  bottom-72"
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
        <section className="sm:pt-120px pt-50px container mx-auto px-4 xl:px-0">
          <div className="max-w-[870px] mx-auto text-center">
            <h2 className="sm:text-38px_45 text-xl/7 font-semibold text-primary">
              We manage all the admin work so you can focus on what really
              matters - your clients
            </h2>
            <p className="text-primary/50 sm:text-lg/8 text-sm/5 max-w-[574px] mx-auto sm:pt-4 pt-5">
              Enhance your therapeutic practice, streamline operations, and
              focus on your clients' well-being
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center sm:gap-30px gap-3">
              <Button variant="filled">Schedule a Demo</Button>
              <Button variant="default">Free Trial For 3 Months</Button>
            </div>
          </div>
          <div className="sm:mt-[50px] mt-7 mx-auto cursor-pointer sm:max-w-[822px] max-w-[283px] sm:h-[423px] h-36 rounded-lg overflow-hidden relative group">
            <video
              loop
              muted
              className="w-full h-full object-cover"
              ref={videoRef}
              onClick={handlePlay}
            >
              <source
                src="/assets/images/home/clients-video.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay with play button */}
            {!isPlaying && (
              <div className="absolute top-0 left-0 w-full h-full bg-black/35 flex items-center justify-center">
                <button onClick={handlePlay} className="rounded-full">
                  <PlayCircle weight="fill" className="text-white w-12 h-12" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Hear from the therapists who trust us */}
        <section className="sm:pt-120px pt-50px">
          <div className="container mx-auto px-4 xl:px-0 flex justify-center">
            <div className="text-center">
              <h2 className="sm:text-38px_45 text-xl/7 font-semibold text-primary">
                Hear from the therapists who trust us
              </h2>
              <div className="mx-auto inline-block bg-[#FFFAEA] p-3 rounded-md mt-6">
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
          <div className="flex overflow-x-hidden client_marquee_anim_wrap cursor-pointer sm:pt-[70px] pt-5">
            <div className="flex client_marquee_anim">
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
                      <p className="sm:text-sm_22 text-[10px] leading-4 text-primary font-medium">
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
                          <p className="sm:text-base/6 text-[10px] leading-4 text-primary/50">
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
            <div className="flex client_marquee_anim">
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

        {/* Accordian  */}
        <FAQ />
      </WebsiteLayout>
    </div>
  );
}
