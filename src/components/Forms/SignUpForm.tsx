import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import NavBarNoSignBtn from "../ui/Navbar/NavbarNoSignBtn";

function SignUpForm(props) {
  const { isLoading, data, error } = state;
  const [showPassword, SetPasswordVisibility] = useState(false);
  const notify = () => toast('Account created successfully');

  //useEffect Toast Acc created succesfully
  useEffect(() => {
    if (data?.user) {
      notify()}
    } 
   

      //State if user is logged in .Need to reform it in a central file
   /*    props.setIsLogged(true);
      localStorage.setItem("authToken", state.data.user.token);
      props.history.push("/");
    }
  }, [data, addToast, props, state]); */


  //errors with TOAST
 /*  useEffect(() => {
    if (data?.errors) {
      const err = [];
      for (const property in data.errors) {
        err.push(`${property} ${data.errors[property]}`);
      }
      let errMsg = err.join(" ");
      addToast(errMsg, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [data, addToast]); */
/* 
  if (error) {
    console.log(error);
  }
 */

  //Formik Yup 
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Can't be blank")
        .min(6, "Too Short!")
        .max(20, "Too Long!"),
      email: Yup.string().email("Not a valid email").required("Can't be blank"),
      password: Yup.string()
        .required("Can't be blank")
        .min(6, "Password should be at-least 6 characters")
        .matches(
          "^.*(?=.*[a-zA-Z]).*$",
          "Password must contain a letter and a number"
        ),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setState({
        url: "api/users",
        headers: {
          "Content-Type": "application/json",
        },
        value: { user: values },
      });
    },
  });

  return (
<>
    <NavBarNoSignBtn/>
    
      <form className="container py-40" onSubmit={formik.handleSubmit}>
        <div
          className="bg-white flex justify-between mx-auto rounded-lg"
          style={{
            width: "1080px",
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
          }}
        >
          <div className="w-1/2 flex justify-center flex-col p-24">
            <h1 className="text-center text-indigo-700 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-cente">
              Signup Page
            </h1>
            <NavLink
              className="text-center  sm:text-1xl text-1xl title-font font-bold text-indigo-600 mt-4 mb-4"
              to="/login"
            >
              Have an account?
            </NavLink>
            <div className="py-2 flex flex-col" width="100%">
              <input
                className="border-2 px-4 py-2 rounded-full active:border-4-red"
                type="text"
                name="username"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                width="100%"
              />
              {formik.touched.username && formik.errors.username ? (
                <span className="text-red-500 text-sm pl-1 font-medium">
                  {formik.errors.username}
                </span>
              ) : (
                false
              )}
            </div>
            <div className="py-2 flex flex-col" width="100%">
              <input
                className="border-2 px-4 py-2 rounded-full active:border-4-red"
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                width="100%"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-red-500 text-sm pl-1 font-medium">
                  {formik.errors.email}
                </span>
              ) : (
                false
              )}
            </div>
            <div className="py-2 flex flex-col relative">
              <input
                className="border-2 px-4 py-2 rounded-full "
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {!showPassword ? (
                <svg
                  onClick={() => SetPasswordVisibility(!showPassword)}
                  className="w-6 h-6 text-gray-500 absolute cursor-pointer hover:text-gray-400 select-none"
                  style={{ top: "16px", right: "12px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg>
              ) : (
                <svg
                  onClick={() => SetPasswordVisibility(!showPassword)}
                  className="w-6 h-6 text-gray-500 absolute cursor-pointer hover:text-gray-400"
                  style={{ top: "16px", right: "12px" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              )}
              {formik.touched.password && formik.errors.password ? (
                <span className="text-red-500 text-sm font-medium pl-1">
                  {formik.errors.password}
                </span>
              ) : (
                false
              )}
            </div>
            <div className="py-2 flex flex-col">
              {data?.errors ? (
                <h1 className="text-center text-red-700 pb-2">
                  Something went wrong
                </h1>
              ) : (
                false
              )}
              {isLoading ? (
                <button
                  type="submit"
                  className="px-16 py-2 rounded-full text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 mx-12 select-none"
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="select-none transition duration-500 ease-in-out px-16 py-2 rounded-full text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 mx-12 select-none"
                >
                  Signup
                </button>
              )}
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center flex-col py-24 select-none select-none">
            <img src="/images/signup.svg" alt="login-img" width="90%" />
          </div>
        </div>
      </form>
    
    </>
  );
}
export default SignUpForm;