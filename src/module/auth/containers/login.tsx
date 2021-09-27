import React from "react";
import { useHistory } from "react-router-dom";
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
        })
        .catch((err: any) => {
          console.log(err);
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
      <div className=''>
        <div>
          <form>
            <div>
              <div>
                <h2>
                  Login to <br /> <b>Kisko E-commerce</b>
                </h2>
              </div>
              <label>
                <span>Username</span>
                <div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Username'
                  />
                  {isPhoneNumberRequired ? (
                    <small>User name required</small>
                  ) : null}
                </div>
              </label>
              <label>
                <span>Password</span>
                <div>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
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
                  }}
                  onClick={login}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
