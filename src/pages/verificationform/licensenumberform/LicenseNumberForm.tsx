import React, { useState } from "react";
import CustomTextField from "../../../components/customtextfield/CustomTextField";
import CustomSelect from "../../../components/customselect/CustomSelect";
import CustomDateCalendar from "../../../components/customcalendar/CustomDateCalendar";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { professionList } from "../data";
import { dateFormat } from "../../../utils/commonFunctions";
import { addRatingForm } from "../../../services/verificationForm";

const LicenseNumberForm = () => {
  const [formData, setFormData] = useState<any>({});

  const schema = yup.object().shape({
    profession: yup.string().required("Select profession"),
    licenseNo: yup.string().required("Enter License No."),
    dob: yup.string().required("Select birth date"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (key: any, value: any) => {
    setValue(key, value);
    setFormData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (e: any) => {
    const selectedProfession = professionList.find(
      (item) => item.name === e.profession
    );
    const addPayload = {
      category: "BY LICENSE NO",
      professionId: selectedProfession?.professionId,
      licenseNo: e?.licenseNo,
      birthDate: dateFormat(e.dob),
    };
    addRatingForm(addPayload);
  };
  return (
    <div className="ratingform-container">
      <p className="ratingform-rules">
        Use the form below to search our records and confirm the identities of
        registered professionals.
      </p>
      <p className="ratingform-rules">
        <span style={{ color: "red" }}> DISCLAIMER:</span> This verification
        service is intended solely for the facilitation of online queries and to
        provide immediate access for the convenience of interested individual
        and/or group. While the Professional Regulation Commission (PRC)
        believes the information to be reliable, human or mechanical error
        remains a possibility, as does delay in the posting or updating of the
        information.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <CustomSelect
              label={"Profession"}
              id={"profession"}
              options={professionList?.map((item) => item.name)}
              placeholder={"Select the profession"}
              required={true}
              errors={errors["profession"]}
              {...register("profession")}
              onChange={(e: any) => handleChange("profession", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12">
            <CustomTextField
              label={"License No."}
              id={"licenseNo"}
              placeholder={"Enter the license no."}
              required={true}
              errors={errors["licenseNo"]}
              {...register("licenseNo")}
              onChange={(e: any) => handleChange("licenseNo", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12">
            <CustomDateCalendar
              id={"dob"}
              label={"Birth Date"}
              required={true}
              errors={errors["dob"]}
              {...register("dob")}
              onChange={(date: string) => handleChange("dob", date)}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: "#3f51b5",
              width: "55%",
              borderRadius: "5px 5px 5px 5px",
              color: "#fff",
              height: "40px",
              padding: "5px",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-patch-check-fill" color="#ffffff"></i>
            <span> Verify</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LicenseNumberForm;
