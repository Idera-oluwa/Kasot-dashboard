import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsTelephone,
} from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

const faqs = [
  {
    faq: "What is your refund policy?",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    faq: "What is your refund policy?",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    faq: "What is your refund policy?",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
];

const Support = ({menuOpen}) => {
  return (
    <div className="w-full bg-gray-100 min-h-screen relative">
      <section className="w-full ">
        <div className={`absolute top-[80px] right-0 w-[80%] px-[4%] pt-[48px] min-h-screen bg-gray-100 transition-all ease-in-out duration-500  ${menuOpen ? `w-full  md:w-[75%] lg:w-[80%]` : `w-full`}`}>
       <section className='bg-white px-[2rem]  py-[3rem]'>
            <h3 className="text-4xl font-bold">Support</h3>
            <div className="mt-10 w-full">
              <h4 className="text-center font-bold text-2xl">
                Frequently asked questions
              </h4>
              <div className="rounded-lg mt-8">
                {faqs.map((faq, index) => (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex border-b border-b-white-2 w-full faq-question  justify-between items-center   bg-gray-300 h-[50px] pl-[33.37px] px-4 py-2 text-left text-[16px] font-medium transition duration-300 text-black dark:text-white-1 hover:bg-gray-200 focus:outline-none  focus-visible:ring-0   ${
                            index === faqs.length - 1 &&
                            !open &&
                            "rounded-b-[10px]"
                          }  ${index === 0 && "rounded-t-[10px]"}`}
                        >
                          <span>{faq.faq}</span>
                          {open ? <BiMinus /> : <BiPlus />}
                        </Disclosure.Button>
                        <Disclosure.Panel
                          className={`px-4 pl-[33.7px] text-[14px] h-[54px]  py-[11px] dark:text-black  bg-gray-50 ${
                            index === faqs.length - 1 &&
                            open &&
                            "rounded-b-[10px]"
                          } `}
                        >
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </div>
            <article className="mt-10 w-full rounded-lg bg-gray-300 p-5">
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex flex-col gap-2">
                  {" "}
                  <h5 className="text-xl font-bold">Still have questions?</h5>
                  <p>
                    Cant find the questions you are looking for? Please get in
                    touch with our friendly team.
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <BsTwitter className="w-6 h-6 cursor-pointer" />
                  <BsFacebook className="w-6 h-6 cursor-pointer" />
                  <BsInstagram className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-5">
                <div className="flex gap-8 items-center">
                  <div className="flex justify-center items-center rounded-[50%] bg-gray-100 w-12 h-12 p-2">
                    <FiMail />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold">Email Address</h4>
                    <p className="">Kasot@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="flex justify-center items-center rounded-[50%] bg-gray-100 w-12 h-12 p-2">
                    <BsTelephone />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold">Phone number</h4>
                    <p className="">+234 814 9660 220</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Support;