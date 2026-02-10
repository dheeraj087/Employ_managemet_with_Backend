import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import { isForm } from "../reduxtoolkit/fetcher/employReduser";
const EmployList = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const satate = useSelector((state) => state.employ);
  const mapData = satate.employData.data;
  return (
    <>
      <div className="w-[80%] m-auto my-5">
        {mapData &&
          mapData.map((data, index) => {
            return (
              <div
                key={index}
                className="navbar flex-col my-4 rounded-2xl bg-[#131313] shadow-sm"
              >
                <div className=" flex justify-around w-full items-center  shadow-sm">
                  <div className="text-xs">
                    <img
                      src={data.empimgPath}
                      alt=""
                      className="w-10 rounded-xl h-10"
                    />
                  </div>
                  <p className="text-[#c1c1c1] w-10  flex-1 ml-7 ">
                    {data.empName}
                  </p>
                  <div className="flex-none">
                    <button
                      onClick={(e) => {
                        setUserId(data._id);
                        return dispatch(isForm({ mode: "edit", isForm: true }));
                      }}
                      className="btn text-xl btn-square btn-ghost"
                    >
                      <CiEdit />
                    </button>
                    <button className="btn text-xl text-[#c1c1c1] mb-1 btn-square btn-ghost">
                      <AiOutlineDelete />
                    </button>
                    <button className="btn text-xl mb-1 btn-square btn-ghost">
                      <CiHeart />
                      {/* <FaHeart /> */}
                    </button>
                  </div>
                </div>
                <p className="text-left text-xs text-[#c1c1c1] w-[40%] m-auto line-clamp-1 ml-17">
                  {data.empBio}
                </p>
              </div>
            );
          })}
      </div>
      {satate.mode === "edit" && satate.isForm ? (
        <Form
          buttonName={"edit employ"}
          update={true}
          editUserId={{ userId, setUserId }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EmployList;
