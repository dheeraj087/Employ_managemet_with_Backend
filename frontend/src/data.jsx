import { useEffect } from "react";

const Data = () => {
  const data = {
    a: "lkshl",
    b: "kjslf",
  };
  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/user/login`, {
  //     // ✅ Public API URL
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json", // fetch me jaruri hai header
  //     },

  //     // body: JSON.stringify({
  //     //   empName: "dheeraj",
  //     //   empId: "dheeraj",
  //     //   empBio: "dheeraj",
  //     //   empimgPath: "dheeraj",
  //     //   favorite: "true",
  //     //   like: "true",
  //     // }),

  //     body: JSON.stringify({
  //       username: "dhjshfdksjdhskldfj",
  //       fullName: "dhjshfdksjdhskldfj",
  //       email: "dhjshfdksjdhskldfj",
  //       password: "dhjshfdksjdhskldfj",
  //     }),
  //   })
  //     .then((res) => {
  //       res
  //         .json()
  //         .then((data) => {
  //           if (!res.ok) {
  //             throw data;
  //           }
  //           return data;
  //         })
  //         .then((data) => {
  //           console.log(data);
  //         })
  //         .catch((error) => console.log(error));
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return <div></div>;
};

export { Data };
