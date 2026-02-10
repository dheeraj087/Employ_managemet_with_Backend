import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./reduxtoolkit/fetcher/employReduser";

const Form = () => {
  const send = useSelector((state) => state.employ);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
  });
  function SumbitHendler(e) {
    e.preventDefault();
    dispatch(data(state));
    setState((perv) => ({
      ...perv,
      username: "",
      email: "",
      password: "",
      fullName: "",
    }));
    console.log(send);
  }

  function hendleChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={(e) => SumbitHendler(e)}>
        <input
          className="border m-5"
          onChange={hendleChange}
          type="text"
          placeholder="username"
          name="username"
          value={state.username}
          // required
        />
        <input
          className="border m-5"
          onChange={hendleChange}
          type="text"
          placeholder="fullName"
          name="fullName"
          value={state.fullName}
          // required
        />
        <input
          className="border m-5"
          onChange={hendleChange}
          type="text"
          placeholder="email"
          name="email"
          value={state.email}
          // required
        />
        <input
          className="border m-5"
          onChange={hendleChange}
          type="text"
          placeholder="password"
          value={state.password}
          name="password"
          // required
        />
        <button>sumbit</button>
      </form>
    </div>
  );
};

export default Form;
