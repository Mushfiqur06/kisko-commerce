import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAction } from "../../../request/Auth";

export default function Login() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPhoneNumberRequired, setPhoneNumberValidation] = React.useState(
    false
  );
  const [isPasswordRequired, setPasswordValidation] = React.useState(false);

  const login = (e: any) => {
    e.preventDefault();
    if (_loginFormIsValidate(name, password)) {
      loginAction(name, password)
        .then(() => {
          history.push("/");
          toast.success("Login successfully");
        })
        .catch((err: any) => {
          console.log(err);
          toast.error("Failed Login");
        });
    }
  };
  const _loginFormIsValidate = (name: any, password: any) => {
    let isValid = true;
    if (name.length < 1) {
      setPhoneNumberValidation(true);
      isValid = isValid === true ? false : isValid;
    }
    if (password.length < 1) {
      setPasswordValidation(true);
      isValid = isValid === true ? false : isValid;
    }
    return isValid;
  };

  return (
    <>
      <div className='flex items-center justify-center w-full h-screen bg-gray-50'>
        <form>
          <div className='p-10 rounded-3xl shadow'>
            <div className='mb-6'>
              <h2 className='text-4xl'>
                Login to <br /> <b>Kisko E-commerce</b>
              </h2>
            </div>
            <label>
              <span className='text-gray-400 mb-1'>Username</span>
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Username'
                  className='w-full px-2 py-2 rounded mb-2'
                />
                {isPhoneNumberRequired ? (
                  <small>User name required</small>
                ) : null}
              </div>
            </label>
            <label>
              <span className='text-gray-400 mb-1'>Password</span>
              <div>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  className='w-full px-2 py-2 rounded'
                />
                {isPasswordRequired ? <small>Password required</small> : null}
              </div>
            </label>
            <div>
              <button
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1",
                  backgroundColor: "black",
                  fontSize: "18px",
                  color: "white",
                  padding: "10px 8px",
                  marginTop: "10px",
                  borderRadius: "10px",
                }}
                onClick={login}
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
