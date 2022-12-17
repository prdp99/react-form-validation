import { useState } from "react";

const NestedSelectInput = ({ options, sectors, setSectors }) => {
  const [showChild, setShowChild] = useState({
    value: "",
    status: false,
  });
  const [showNestedChild, setShowNestedChild] = useState({
    value: "",
    status: false,
  });
  const handleShow = (value) => {
    setShowChild((prev) => {
      return {
        ...prev,
        value: value,
        status: !prev.status,
      };
    });
  };
  const handleNested = (value) => {
    options.map((option) =>
      option.enum.map((data) => {
        if (data.value === value) {
          if (!data.enum && !sectors.find((data) => data === value)) {
            setSectors((prev) => {
              return [...prev, value];
            });
          }
          setShowNestedChild((prev) => {
            return {
              ...prev,
              value: value,
              status: !prev.status,
            };
          });
        }
      })
    );
  };
  const handleAdd = (value) => {
    !sectors.find((data) => data === value) &&
      setSectors((prev) => {
        return [...prev, value];
      });
  };
  const handleRemove = (value) => {
    const newArray = sectors.filter((sector) => sector !== value);
    setSectors((prev) => {
      return [...newArray];
    });
  };
  return (
    <>
      <div className="select-container">
        {options.map((option) => (
          <div className="select" key={option.value}>
            <h4 className="parent" onClick={() => handleShow(option.value)}>
              {option.label}
            </h4>
            {showChild.status &&
              showChild.value === option.value &&
              option.enum &&
              option.enum.map((opt) => (
                <div className="first-nested" key={opt.value}>
                  <h4 className="child" onClick={() => handleNested(opt.value)}>
                    {opt.label}
                  </h4>
                  {showNestedChild.status &&
                    showNestedChild.value === opt.value &&
                    opt.enum &&
                    opt.enum.map((data) => (
                      <div className="option" key={data.value}>
                        <h4
                          className="nested-child"
                          onClick={() => handleAdd(data.value)}
                        >
                          {data.label}
                        </h4>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="sectors">
        <div>Selected:</div>
        {sectors.map((sector) => (
          <div className="tags" key={sector}>
            <div>{sector}</div>{" "}
            <div className="remove-btn">
              <button onClick={() => handleRemove(sector)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NestedSelectInput;
