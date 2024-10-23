"use client";
import Accordion from "@/components/dashboard/setting/help-and-support/Accordion";
import ListWrapper from "@/components/dashboard/setting/help-and-support/ListWrapper";
import {
  ClientOrganizer,
  PaymentRelated,
  PaymentSettings,
  SessionRelated,
  TrackingV2,
} from "@/components/dashboard/setting/help-and-support/Sections";

import SettingLayout from "@/layout/dashboard/SettingLayout";
import Link from "next/link";
import React from "react";

const GettingStarted = [
  {
    title: "What is Thought Pudding for Therapists?",
    content: (
      <>
        Thought Pudding for Therapists is a one-stop shop for all your needs as
        a psychotherapist in private practice. Our features help you streamline
        the administrative and business side of running a private practice. Our
        job is to help you because we know you help a thousand clients. <br />
        <br /> Key features include practice management with one-click
        scheduling, reminders, collecting payments, client information portal
        and automated payment processing. This website is available over both
        mobile and desktop.{" "}
      </>
    ),
  },
  {
    title: "Who is Thought Pudding for Therapists made for?",
    content: (
      <>
        Our new community largely consists of clinical psychologists, counseling
        psychologists and psychotherapists in different stages of their private
        practice. Our platform also aims to enable small group practices and
        collectives as well, if interested, you can contact us{" "}
        <Link href="#" className="text-green-600 underline">
          here{" "}
        </Link>{" "}
        .
      </>
    ),
  },
  {
    title: "Can I get a demo?",
    content: (
      <>
        Yes, we offer a personalized product demo. All you have to do is
        register{" "}
        <Link href="#" className="text-green-600 underline">
          here{" "}
        </Link>{" "}
        . We respond within 24 hours.
      </>
    ),
  },
  {
    title: "Is it easy to switch or migrate to Thought Pudding for Therapists?",
    content:
      "Yes, our product is made to save you as much time and effort as possible. In the beginning, our team will help you switch, all you need is a Google email address. We also have video tours to help make daily use of Thought Pudding for Therapists easier for you.",
  },
  {
    title: "How do I sign-up for Thought Pudding for Therapists?",
    content: (
      <>
        We provide support to you through email, Whatsapp chat, one-on-one video
        tours, and phone support. You can reach out to us at{" "}
        <Link href="#" className="text-green-600 underline">
          hello@thoughtpudding.com{" "}
        </Link>{" "}
        or use our contact support form{" "}
        <Link href="#" className="text-green-600 underline">
          here{" "}
        </Link>{" "}
        .
      </>
    ),
  },
];

const Subscription = [
  {
    title: "How much does Thought Pudding for Therapists cost?",
    content: (
      <>
        `Thought Pudding for Therapists offers a free three-month trial after
        which we charge a monthly subscription fee that starts at 500 INR/month
        + 18% GST. For those looking to use our platform for their group
        practices and/or collective can contact us
        <Link href="#" className="text-green-600 underline">
          header
        </Link>
        .`
      </>
    ),
  },
  {
    title: "What payment methods do you accept for monthly subscription costs?",
    content: "We accept UPI, Bank transfer and debit card payments.",
  },
  {
    title:
      "Will the work I do during my trial be saved for me when I sign up for a paid subscription?",
    content:
      "Yes, all your work will be saved in your account when you sign up for a paid subscription.",
  },
  {
    title:
      "What happens if I don’t sign up for a paid subscription after my free trial?",
    content:
      "To meet strict security and data compliance requirements, the trial account is deleted from our system along with any data that was entered.",
  },
];

const CustomerSupport = [
  "As your account becomes activated, we also provide you with customer support via Whatsapp group as well as email. There is also the option of requesting 1:1 video tours of the platform. To do so, you can write to us at hello@thoughtpudding.com.",
];

const PracticeVerification = [
  "When you first log-in to Thought Pudding for Therapists, our platform verifies your private practice details. We are an invite-only platform to ensure that we can help customize the experience for all who can benefit from this platform.",
  "To get started, click on the Set up your practice button on the top right corner and enter your details.",
  "Here, you will be asked some basic questions about the nature of your practice. We recommend keeping a soft copy of your qualifications handy as you will be required to upload it here. Once your details have been shared, you will have access to your Dashboard where you can start setting up your Calendar and Payments .",
];

const CalendarScheduling = [
  "When you first get access to your Thought Pudding for Therapists account, you’ll see your google calendar entries. Here, you’ll have the option of selecting all calendar entries and syncing it all with just one click.",
  "In case, any calendar entries are missed you can go to the top right corner of your Dashboard, Settings-> Calendar Setting-> Sync Calendar . Here you can re-select all missed calendar entries and re-sync them.",
  "These calendar entries will show up on your dashboard as well as your sessions tab. If you are looking to Schedule a session for a New Client, it is advisable to do so by clicking on Schedule a session button on the top right corner of the Dashboard. Here, you begin by entering the following details:-",
];

const Dashboard = [
  "The dashboard is made to give you a 360-degree view of your private practice. All in real time. It is made up of 4 sections- Sessions, Total Clients, Pending Payments, and Received Payments .",
  "You can use the drop-down menu in each of these sections to review your practice for every month. Additionally, it allows you to review your case load and monthly earnings.",
];

const MyProfile = [
  "Your profile section is an important part of your practice. It asks for your basic details like Name, Email, Phone Number, and Address. These details help us stay connected with you to provide you the customer experience you deserve.",
  "It is important to keep in mind that the Name you enter in this section is the name displayed to your clients as well in Google Meet calls. You can choose to keep this name as the name of your practice or your own name. It is customizable at any time.",
];

const PasswordSecurity = [
  "Instead of signing in from Google Calendar every time, you can set your own login email and password by clicking on Settings > Password & Security.",
];

// const linkText = (linkText) => {
//   return parts.map((part, index) =>
//     linkText.some((link) => part.toLowerCase() === link.toLowerCase()) ? (
//       <span key={index} className="font-semibold">
//         {part}
//       </span>
//     ) : (
//       part
//     )
//   );
// };

const HelpSupportSetting = () => {
  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">
          Frequently Asked Questions- Help Center
        </h1>
        <div className="pt-5 space-y-7.5">
          {/* Getting Started */}
          <Accordion FAQData={GettingStarted} title={`Getting Started`} />
          {/* Subscription Related Questions */}
          <Accordion
            FAQData={Subscription}
            title={`Subscription Related Questions`}
          />
          {/* Customer Support Related Questions */}
          <ListWrapper
            title={`Customer Support Related Questions`}
            subTitle={`How does our customer support work?`}
            listData={CustomerSupport}
          />
          {/* Practice Verification */}
          <ListWrapper
            title={`Practice Verification`}
            listData={PracticeVerification}
          />
          {/* Calendar and Scheduling */}
          <ListWrapper
            title={`Calendar and Scheduling`}
            listData={CalendarScheduling}
            table
            paragraph={`After entering these details, you'll have one last step: deciding if you'd like us to collect payments on your behalf`}
          />
          {/*  Payment Related */}
          <PaymentRelated title={`Payment Related`} />
          {/* Payment Collection & Tracking v1 */}
          <PaymentRelated title={`Payment Collection & Tracking v1`} />
          {/* Payment Settings */}
          <PaymentSettings />
          {/* Payment Tracking v2 */}
          <TrackingV2 />
          {/* Session Related */}
          <SessionRelated />
          {/* Client Organizer */}
          <ClientOrganizer />
          {/* Dashboard */}
          <ListWrapper title={`Dashboard`} listData={Dashboard} />
          {/* My Profile/Account Info */}
          <ListWrapper title={`My Profile/Account Info`} listData={MyProfile} />
          {/* Password & Security */}
          <ListWrapper
            title={`Password & Security`}
            listData={PasswordSecurity}
          />
        </div>
      </div>
    </SettingLayout>
  );
};

export default HelpSupportSetting;
