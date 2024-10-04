"use client";
import Accordian from "@/components/dashboard/setting/help-and-support/Accordian";
import ListWrapper from "@/components/dashboard/setting/help-and-support/ListWrapper";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import React from "react";

const GettingStarted = [
  {
    title: "What is Thought Pudding for Therapists?",
    content:
      "We verify every therapist individually and go through their degree, qualification  and license if required before approving access to the platform. In case you have a collective or clinic, the same process applies.",
  },
  {
    title: "Who is Thought Pudding for Therapists made for?",
    content:
      "We verify every therapist individually and go through their degree, qualification  and license if required before approving access to the platform. In case you have a collective or clinic, the same process applies.",
  },
  {
    title: "Can I get a demo?",
    content:
      "We verify every therapist individually and go through their degree, qualification  and license if required before approving access to the platform. In case you have a collective or clinic, the same process applies.",
  },
  {
    title: "Is it easy to switch or migrate to Thought Pudding for Therapists?",
    content:
      "We verify every therapist individually and go through their degree, qualification  and license if required before approving access to the platform. In case you have a collective or clinic, the same process applies.",
  },
  {
    title: "How do I sign-up for Thought Pudding for Therapists?",
    content:
      "We verify every therapist individually and go through their degree, qualification  and license if required before approving access to the platform. In case you have a collective or clinic, the same process applies.",
  },
];

const Subscription = [
  {
    title: "How much does Thought Pudding for Therapists cost?",
    content:
      "To meet strict security and data compliance requirements, the trial account is deleted from our system along with any data that was entered.",
  },
  {
    title: "What payment methods do you accept for monthly subscription costs?",
    content:
      "To meet strict security and data compliance requirements, the trial account is deleted from our system along with any data that was entered.",
  },
  {
    title:
      "Will the work I do during my trial be saved for me when I sign up for a paid subscription?",
    content:
      "To meet strict security and data compliance requirements, the trial account is deleted from our system along with any data that was entered.",
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

const HelpSupportSetting = () => {
  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">
          Frequently Asked Questions- Help Center
        </h1>
        <div className="pt-5 space-y-7.5">
          {/* Getting Started */}
          <Accordian FAQData={GettingStarted} title={`Getting Started`} />
          {/* Subscription Related Questions */}
          <Accordian
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
          />
        </div>
      </div>
    </SettingLayout>
  );
};

export default HelpSupportSetting;
