import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  isForm,
  setEmployData,
  updateEmployData,
} from "../reduxtoolkit/fetcher/employReduser";

const Form = ({ buttonName = "create employ", update = false, editUserId }) => {
  const satate = useSelector((state) => state.employ);
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    empName: "",
    empId: "",
    empBio: "",
    empimgPath: "",
  });

  function sumbitHeandler(e) {
    e.preventDefault();
    setdata({
      empName: "",
      empId: "",
      empBio: "",
      empimgPath: "",
    });
    // console.log(satate);
    if (satate.mode === "create") {
      dispatch(setEmployData(data));
    } else if (satate.mode === "edit") {
      if (editUserId.userId) {
        const update = {
          userId: editUserId?.userId,
        };

        // for (const key in data) {
        //   if (data[key] == "") continue;
        //   update.updatedata[key] = data[key];
        // } frist way

        // const ojd = Object.keys(data).reduce((acc, key) => {
        //   if (data[key] !== "") {
        //     acc[key] = data[key];
        //   }
        //   return acc;
        // }, {});
        const updatedFild = Object.fromEntries(
          Object.entries(data).filter((ddd) => {
            const [key, value] = ddd;
            return value?.toString().trim() != "" && value != null;
          })
        );

        update.updateDate = updatedFild;

        console.log(update);
        
        // dispatch(updateEmployData(update));
        editUserId?.setUserId("");
      }

      // console.log("create employ");
    }
    dispatch(getData());
    dispatch(isForm({ mode: "", isForm: false }));
  }

  function changeHeandler(e) {
    const { name, value } = e.target;

    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex items-center justify-center w-full h-full fixed z-50 shadow-black shadow-md top-0">
      <form
        onSubmit={sumbitHeandler}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <div className="w-full flex justify-between items-center">
          <legend className="fieldset-legend">Page details</legend>
          <button
            onClick={(e) => dispatch(isForm({ mode: "", isForm: false }))}
            type="button"
            className="btn btn-square btn-ghost "
          >
            X
          </button>
        </div>

        <label className="label">IMG path</label>
        <input
          onChange={changeHeandler}
          required={!satate.mode === "create"}
          type="text"
          className="input"
          placeholder="Image Path"
          value={data.empimgPath}
          name="empimgPath"
        />
        <label className="label">employ Id </label>
        <input
          onChange={changeHeandler}
          required={!satate.mode === "create"}
          type="text"
          className="input"
          placeholder="Image Path"
          value={data.empId}
          name="empId"
        />

        <label className="label">empName</label>
        <input
          onChange={changeHeandler}
          required={!satate.mode === "create"}
          type="empName"
          className="input"
          placeholder="your empName "
          value={data.empName}
          name="empName"
        />

        <label className="label">Bio</label>
        <input
          onChange={changeHeandler}
          required={!satate.mode === "create"}
          type="text"
          className="input"
          placeholder="empBio"
          value={data.empBio}
          name="empBio"
        />

        <button className="btn btn-neutral mt-4">{buttonName}</button>
      </form>
    </div>
  );
};

export default Form;
/* 

echo "# Employ_managemet_with_Backend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dheeraj087/Employ_managemet_with_Backend.git
git push -u origin main
*/