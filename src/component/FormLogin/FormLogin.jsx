import { useState } from "react";
import "./FormLogin.css";
import { Link, useNavigate } from "react-router-dom";

function FormLogin() {
  const [selectedRole, setSelectedRole] = useState("");
  const [open, setopen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const send = email.trim() === "" || password.trim() === "";
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const openLogin = () => {
    setopen(true);
  };
  const GoToDashboard = () => {
    navigate("dashboard");
  };
  const isButtonDisabled = !selectedRole;
  return (
    <>
      <div className="form">
        <h2>{open ? "Bank" : " Perfios Switch"}</h2>
        <p>
          {open
            ? "Enter your login credentials"
            : "Select your profile and proceed to login"}
        </p>
        {open == false && (
          <>
            <form>
              <div className="checkbox">
                <input
                  type="radio"
                  name="profile-role"
                  value="bank"
                  checked={selectedRole === "bank"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="profile-role"
                  value="partner"
                  checked={selectedRole === "partner"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="partner">Partner</label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="profile-role"
                  value="broker"
                  checked={selectedRole === "broker"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="broker">Mortgage Broker</label>
              </div>
              <div className="checkbox">
                <input
                  type="radio"
                  name="profile-role"
                  value="applicant"
                  checked={selectedRole === "applicant"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="applicant">Applicant</label>
              </div>
              <button
                className="one-btn"
                onClick={openLogin}
                disabled={isButtonDisabled}
                style={
                  selectedRole == "" ? { backgroundColor: "#0054b491" } : {}
                }
              >
                Precode To Login
              </button>
            </form>
            <p className="login-pargraph">
              By using Perfios Switch, you agree to our Terms of Service and
              that you have read and understood our Privacy Policy.
            </p>
          </>
        )}
        {open == true && (
          <>
            <form className="form-two">
              <input
                type="text"
                placeholder="Email ID"
                className="checkbox-two"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="checkbox-two"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-down">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor=""> Remember me</label>
                </div>
                <Link to="/forgetpassword">Forgot Password?</Link>
              </div>
              <button
                className="one-btn"
                disabled={send}
                style={send == true ? { backgroundColor: "#0054b491" } : {}}
                onClick={GoToDashboard}
              >
                Login
              </button>
              <div className="div-mt">
                <p>Trouble logging in?</p>
                <p>
                  Email us at
                  <a href="mailto:support@perfios.com" target="_blank">
                    support@perfios.com
                  </a>
                </p>
              </div>
            </form>
          </>
        )}

        <div className="footer-login">
          <p className="login-pargraph">
            We are serious about security and are tested and verified by trusted
            agencies
          </p>
          <div className="img-frame">
            <img src="/public/image/frame.png" alt="frame" />
          </div>
          <p className="login-pargraph">
            2024 Perfios Software Solutions Private Limited
          </p>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
