import "./CustomSelect.scss";

const CustomSelect = ({
  id,
  label,
  placeholder,
  required,
  name,
  options,
  errors,
  onChange,
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
        <select
          className="form-control select-placeholder"
          id={id}
          defaultValue=""
          name={name}
          onChange={onChange}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options?.map((item: any, index: number) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
