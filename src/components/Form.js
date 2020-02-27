import React, { useState } from "react"
import validator from "validator"
import "../styles/Form.css"

export default props => {
  const [fName, setfName] = useState("")
  const [fNameError, setfNameError] = useState("")

  const [lName, setlName] = useState("")
  const [lNameError, setlNameError] = useState("")

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const [website, setWebsite] = useState("")
  const [websiteError, setWebsiteError] = useState("")

  //if the user does not type in something to the field thet cant submit the form
  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (fName === "") {
      valid = false
      setfNameError("This Field Cannot Be Blank")
    } else {
      setfNameError("")
    }

    if (lName === "") {
      valid = false
      setlNameError("This Field Cannot Be Blank")
    } else {
      setlNameError("")
    }

    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("Invalid Email")
    } else {
      setEmailError("")
    }

    if (username === "") {
      valid = false
      setUsernameError("Invalid Username")
    } else {
      setUsernameError("")
    }
    if (password === "") {
      valid = false
      setPasswordError("Invalid Password")
    } else {
      setPasswordError("")
    }
    if (confirmPassword === "") {
      valid = false
      setConfirmPasswordError("Invalid Password")
    } else {
      setConfirmPasswordError("")
    }
    if (website === "") {
      valid = false
      setWebsiteError("Invalid Web Url")
    } else {
      setWebsiteError("")
    }

    if (valid) {
      props.history.push("/Thankyou")
    } else {
      alert("Please Fill Out The Entire Form")
    }
  }

  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <h1>Profile Form - All Fields Required</h1>
        <label className={fNameError ? "error" : ""} htmlFor="fName">
          First Name {fNameError && fNameError}
        </label>
        <input
          type="text"
          id="fName"
          placeholder="please enter first name"
          className={fNameError ? "error" : ""}
          value={fName}
          onChange={e => setfName(e.target.value)}
        />

        <label className={lNameError ? "error" : ""} htmlFor="lName">
          Last Name {lNameError && lNameError}
        </label>
        <input
          type="text"
          id="lName"
          placeholder="please enter last name"
          className={lNameError ? "error" : ""}
          value={lName}
          onChange={e => setlName(e.target.value)}
        />

        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          type="email"
          id="text"
          placeholder="Email"
          className={emailError ? "error" : ""}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className={usernameError ? "error" : ""}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={passwordError ? "error" : ""}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label
          className={confirmPasswordError ? "error" : ""}
          htmlFor="confirmPassword"
        >
          Confirm Password {confirmPasswordError && confirmPasswordError}
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          className={confirmPasswordError ? "error" : ""}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.valsue)}
        />

        <label className={websiteError ? "error" : ""} htmlFor="website">
          Website {websiteError && websiteError}
        </label>
        <input
          type="text"
          id="website"
          placeholder="Please enter valid url"
          className={websiteError ? "error" : ""}
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
