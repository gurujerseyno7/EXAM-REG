import "./CustomTextField.scss";

const CustomTextField = ({
  id,
  label,
  placeholder,
  required,
  onChange,
  errors,
}: any) => {
  return (
    <div>
      <div className="form-group">
        <label
          style={{
            fontSize: "14px",
            color: "#555555",
          }}
          className="d-flex fw-bold mb-1"
          htmlFor={id}
        >
          {label}
          {required && (
            <span
              style={{
                color: "#ff0000",
                marginLeft: "5px",
                fontSize: "14px",
              }}
            >
              *
            </span>
          )}
        </label>
        <input
          type="text"
          style={{ fontSize: "14px", lineHeight: "28px" }}
          className="form-control input-placeholder"
          id={id}
          aria-describedby="emailHelp"
          placeholder={placeholder}
          onChange={onChange}
        />
        {errors && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomTextField;
