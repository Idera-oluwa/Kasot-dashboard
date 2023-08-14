import React from "react";
import App from "../App";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import {
  Tooltip,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const orderArr = [
  {
    id: "#3065",
    product: "shoe print",
    status: "Answered",
    Date: "7/1/19",
  },
  {
    id: "#3066",
    product: "shoe print",
    status: "Answered",
    Date: "7/1/19",
  },
  {
    id: "#3067",
    product: "shoe print",
    status: "Pending",
    Date: "7/1/19",
  },
  {
    id: "#3068",
    product: "shoe print",
    status: "Pending",
    Date: "7/1/19",
  },
];

const Order = ({menuOpen}) => {
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === orderArr.length - 1) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  // status
  function orderStatus(status) {
    if (status === "Answered") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-green-100 text-green-800  text-ellipsis text-[14px] font-medium rounded-md leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Answered</span>
          <span className="w-1 h-1 rounded-[50%] bg-greentext-green-800"></span>
        </div>
      );
    } else if (status === "Pending") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-orange-100 text-orange-800  text-ellipsis text-[14px] font-medium  rounded-md leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Pending</span>
          <span className="w-1 h-1 rounded-[50%] bg-Accent/Warning/Warning-800"></span>
        </div>
      );
    } else if (status === "Inactive") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center rounded-md bg-red-100 text-red-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Live</span>
          <span className="w-1 h-1 rounded-[50%] bg-Accent/Danger/Danger-800"></span>
        </div>
      );
    }
  }

  return (
    <div className="w-full bg-gray-100 min-h-screen relative">
      <section className="w-full ">
        <div className={`absolute top-[80px] right-0 px-[4%] pt-[48px] transition-all ease-in-out duration-500 ${menuOpen ? `w-full  md:w-[75%] lg:w-[80%]` : `w-full`}`}>
          <section className="">
            <h3 className="text-4xl font-bold">Orders</h3>
          </section>

          <section className="mt-10 w-full">
            <h3 className="font-bold text-xl">All Orders</h3>
            <div className="mt-10 w-full bg-white rounded-lg overflow-x-auto custom-overflow">
              <table className="w-full bg-white whitespace-no-wrap rounded-t-lg overflow-hidden">
                <>
                  {" "}
                  <thead className="bg-Gray/50 text-gray-500">
                    <tr className="text-left border-b border-gray-200 bg-gray-50 ">
                      <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                        <span>Ticket ID</span>
                      </th>
                      <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                        product
                      </th>
                      <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                        Status
                      </th>
                      <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque ">
                        Date
                      </th>
                      <th className="py-3 px-6 capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque ">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {orderArr.map((elem, index) => {
                      console.log(elem.product);
                      const { id, product, status, Date } = elem;
                      return (
                        <tr
                          key={index}
                          className="tableRow text-gray-500 border-b border-gray-200"
                        >
                          <td className="py-4 px-6 text-[16px] font-semibold text-Gray/900   leading-normal font-DarkerGrotesque">
                            {id}
                          </td>
                          <td className="py-4 px-6 text-[16px] font-medium   leading-normal font-DarkerGrotesque">
                            {product}
                          </td>
                          <td className="py-4 px-6">{orderStatus(status)}</td>
                          <td className="py-4 px-6 text-[16px] font-medium   leading-normal font-DarkerGrotesque">
                            {Date}
                          </td>
                          <td className="py-4 px-6 w-[224px]">
                            <div className="flex items-center gap-5 ">
                              <Tooltip
                                content="View Details"
                                className="text-gray-500 mt-[5px]"
                              >
                                <Button className="cursor-pointer w-5 h-5 p-0">
                                  <AiOutlineEye className="text-gray-500 w-5 h-5" />
                                </Button>
                              </Tooltip>
                              <Tooltip
                                content="Delete"
                                className="text-gray-500 mt-[5px]"
                              >
                                <Button className="cursor-pointer w-5 h-5 p-0">
                                  <AiOutlineDelete className="text-gray-500 w-5 h-5" />
                                </Button>
                              </Tooltip>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </>
              </table>
              <div className="flex items-center gap-8 h-[72px] justify-center">
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={prev}
                  disabled={active === 1}
                  className="flex justify-center items-center"
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                  Page <strong className="text-gray-900">{active}</strong> of{" "}
                  <strong className="text-gray-900">
                    {orderArr.length - 1}
                  </strong>
                </Typography>
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={next}
                  disabled={active === 10}
                  className="flex justify-center items-center"
                >
                  <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
              </div>

            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Order;