import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isForm } from "../reduxtoolkit/fetcher/employReduser";
import Form from "./form";

const Navbare = () => {
  const dispatch = useDispatch();
  const satate = useSelector((state) => state.employ);

  return (
    <>
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Employ Dashbord</a>
          </div>
          <div className="flex-none">
            <button
              onClick={(e) =>
                dispatch(isForm({ mode: "create", isForm: true }))
              }
              className="btn text-3xl mb-1 btn-square btn-ghost"
            >
              +
            </button>
            <button className="btn btn-square btn-ghost">❤</button>
          </div>
        </div>
      </div>

      {satate.mode === "create" && satate.isForm ? (
        <Form buttonName="create employ" />
      ) : (
        ""
      )}
    </>
  );
};

export default Navbare;
