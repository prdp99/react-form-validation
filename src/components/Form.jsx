import { useEffect, useState } from "react";
import NestedSelectInput from "./NestedSelectInputt";
import options from "../options";
import validate from "./validate";

function Form() {
  const [user, setUser] = useState({
    name: "",
    terms: false,
  });
  const [sectors, setSectors] = useState([]);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsSubmit(false);
    setIsSuccess(false);
    const { name } = e.target;
    if (user.terms == false) {
      setUser((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });
    }
    if (user.terms == true) {
      setUser((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    }
  };

  const handleChange = (e) => {
    setIsSubmit(false);
    setIsSuccess(false);
    const { value, name } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setFormError(validate(user, sectors));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(user, sectors));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      //submit from
      localStorage.setItem("user", user);
      localStorage.setItem("sectors", sectors);
      setSuccessMessage("Submitted!!");
      setIsSuccess(true);
    }
  }, [formError]);

  const TextFile = () => {
    const element = document.createElement("a");
    const data = { ...user, sectors: sectors };
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <div className="container">
      <h3 className="header">Registration Form</h3>
      <div className="success">{isSubmit && successMessage}</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
          />
          <div className="err">{formError["name"]}</div>
          <label htmlFor="sectors">Sectors:</label>
          <NestedSelectInput
            options={options}
            sectors={sectors}
            setSectors={setSectors}
          />
          <div className="err">{formError["sectors"]}</div>
          <input
            type="checkbox"
            name="terms"
            checked={user.terms}
            value={user.terms}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terms">I agree to terms</label>
          <div className="err">{formError["terms"]}</div>
          <button type="submit" className="submit-btn">
            {isSuccess ? "Submitted" : "Save"}
          </button>
        </div>
      </form>
      {isSuccess && (
        <button className="submit-btn" onClick={() => TextFile()}>
          Download Data
        </button>
      )}
    </div>
  );
}

export default Form;
