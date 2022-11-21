import { useState } from "react";

const labelStyle = {
  fontSize: "1.2rem",
  display: "flex",
  justifyContent: "space-evenly",
  width: "60%",
  marginBottom: "1rem",
  padding: "0 15px",
};

export default function SearchOptions(props) {
  const [options, setOptions] = useState([
    {
      id: 1,
      name: "By Destination",
      active: true,
    },
    {
      id: 2,
      name: "By Guide",
      active: false,
    },
    {
      id: 3,
      name: "By Keyword",
      active: false,
    },
  ]);

  const onChangeOption = (id) => {
    let newOptions = options.map((op) => {
      if (op.id === id) {
        op.active = true;
      } else {
        op.active = false;
      }
      return op;
    });

    setOptions(newOptions);
    props.selectOption(id)
  };

  return (
    <>
      <div style={labelStyle}>
        {options.map((option) => (
          <button
            className={
              "button is-small is-rounded " + (option.active && "is-mint")
            }
            key={option.id}
            onClick={() => onChangeOption(option.id)}
          >
            <strong>{option.name}</strong>
          </button>
        ))}
      </div>
    </>
  );
}
