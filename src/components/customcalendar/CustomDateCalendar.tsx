import "./CustomDateCalendar.scss";

const CustomDateCalendar = ({
  id,
  label,
  required,
  value,
  onChange,
  errors,
}: any) => {
  return (
    <div>
      <form>
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
            type="date"
            style={{ fontSize: "14px", lineHeight: "28px" }}
            className="form-control date-placeholder"
            id={id}
            onChange={(e) => onChange(e.target.value)}
          />
          {errors && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default CustomDateCalendar;
