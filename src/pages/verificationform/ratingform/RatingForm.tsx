import React, { useEffect, useState } from "react";
import "./RatingForm.scss";
import CustomTextField from "../../../components/customtextfield/CustomTextField";
import CustomSelect from "../../../components/customselect/CustomSelect";
import CustomDateCalendar from "../../../components/customcalendar/CustomDateCalendar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { dateFormat } from "../../../utils/commonFunctions";
import { professionList } from "../data";
import { addRatingForm } from "../../../services/verificationForm";

const RatingForm = () => {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const months: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const examOptions: any = [
    "AERONAUTICAL ENGINEER",
    "AGRICULTURAL AND BIOSYSTEMS ENGINEER",
    "AGRICULTURIST",
    "ARCHITECT",
    "CERTIFIED MINE FOREMAN",
    "CERTIFIED PLANT MECHANIC",
    "CERTIFIED PUBLIC ACCOUNTANT",
    "CERTIFIED QUARRY FOREMAN",
    "CHEMICAL ENGINEER",
    "CHEMICAL TECHNICIAN",
    "CHEMIST",
    "CHINESE DRUGGIST",
    "CIVIL ENGINEER",
    "CRIMINOLOGIST",
    "CUSTOMS BROKER",
    "DENTAL HYGIENIST",
    "DENTAL TECHNOLOGIST",
    "DENTIST",
    "ELECTRONICS ENGINEER",
    "ELECTRONICS TECHNICIAN",
    "ENVIRONMENTAL PLANNER",
    "FISHERIES PROFESSIONAL",
    "FORESTER",
    "GEODETIC ENGINEER",
    "GEOLOGIC AIDE",
    "GEOLOGIST",
    "GUIDANCE COUNSELLOR",
    "INTERIOR DESIGNER",
    "LANDSCAPE ARCHITECT",
    "LIBRARIAN",
    "MASTER PLUMBER",
    "MECHANICAL ENGINEER",
    "MEDICAL LABORATORY TECHNICIAN",
    "MEDICAL TECHNOLOGIST",
    "METALLURGICAL ENGINEER",
    "METALLURGICAL PLANT FOREMAN",
    "MIDWIFE",
    "MIDWIFE (RA 2382)",
    "MINING ENGINEER",
    "NAVAL ARCHITECT",
    "NURSE",
    "NUTRITIONIST DIETITIAN",
    "OCCUPATIONAL THERAPIST",
    "OCULAR PHARMACOLOGIST",
    "OPTOMETRIST",
    "PHARMACIST",
    "PHYSICAL THERAPIST",
    "PHYSICIAN",
    "PROFESSIONAL ELECTRICAL ENGINEER",
    "PROFESSIONAL ELECTRONICS ENGINEER",
    "PROFESSIONAL FOOD TECHNOLOGIST",
    "PROFESSIONAL MECHANICAL ENGINEER",
    "PROFESSIONAL TEACHER",
    "PSYCHOLOGIST",
    "PSYCHOMETRICIAN",
    "RADIOLOGIC TECHNOLOGIST",
    "REAL ESTATE APPRAISER",
    "REAL ESTATE BROKER",
    "REAL ESTATE CONSULTANT",
    "REGISTERED ELECTRICAL ENGINEER",
    "REGISTERED MASTER ELECTRICIAN",
    "RESPIRATORY THERAPIST",
    "SANITARY ENGINEER",
    "SOCIAL WORKER",
    "SPEECH-LANGUAGE PATHOLOGIST",
    "VETERINARIAN",
    "X-RAY TECHNOLOGIST",
  ];

  const schema = yup.object().shape({
    examname: yup.string().required("Select examination name"),
    month: yup.string().required("Select month"),
    year: yup.string().required("Enter year"),
    firstname: yup.string().required("Enter firstname"),
    lastname: yup.string().required("Enter lastname"),
    applicationNo: yup.string().required("Enter application number"),
    dob: yup.string().required("Select birth date"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (key: any, value: any) => {
    setValue(key, value);
    setFormData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (e: any) => {
    console.log("e", e);
    const selectedProfession = professionList.find(
      (item) => item.name === e.examname
    );
    const addPayload = {
      professionId: selectedProfession?.professionId,
      category: "BY RATING",
      month: e?.month,
      year: e?.year,
      firstName: e?.firstname,
      lastName: e?.lastname,
      applicationNo: e?.applicationNo,
      birthDate: dateFormat(e.dob),
    };
    addRatingForm(addPayload);
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);
  return (
    <div className="ratingform-container">
      <p className="ratingform-rules">
        Use the form below to know your rating/grades for a licensure
        examination that you have taken. Enter the required information in the
        appropriate fields to verify your identity:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <CustomSelect
              label={"Examination Name"}
              id={"examname"}
              options={professionList?.map((item) => item.name)}
              placeholder={"Select the examination name"}
              required={true}
              {...register("examname")}
              errors={errors["examname"]}
              onChange={(e: any) => handleChange("examname", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-6">
            <CustomSelect
              label={"Month"}
              id={"month"}
              options={months}
              placeholder={"Select the month"}
              required={true}
              {...register("month")}
              errors={errors["month"]}
              onChange={(e: any) => handleChange("month", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <CustomTextField
              label={"Year"}
              id={"year"}
              placeholder={"Enter the year"}
              required={true}
              {...register("year")}
              errors={errors["year"]}
              onChange={(e: any) => handleChange("year", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-6">
            <CustomTextField
              label={"First Name"}
              id={"firstname"}
              placeholder={"Enter the first name"}
              required={true}
              errors={errors["firstname"]}
              {...register("firstname")}
              onChange={(e: any) => handleChange("firstname", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <CustomTextField
              label={"Last Name"}
              id={"lastName"}
              placeholder={"Enter the last name"}
              required={true}
              errors={errors["lastname"]}
              {...register("lastname")}
              onChange={(e: any) => handleChange("lastname", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-6">
            <CustomTextField
              label={"Application No."}
              id={"applicationNo"}
              {...register("applicationNo")}
              placeholder={"Enter the application no."}
              required={true}
              errors={errors["applicationNo"]}
              onChange={(e: any) =>
                handleChange("applicationNo", e.target.value)
              }
            />
          </div>
          <div className="col-md-6">
            <CustomDateCalendar
              id={"birthDate"}
              label={"Birth Date"}
              {...register("dob")}
              errors={errors["dob"]}
              required={true}
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
            disabled={loading}
            style={{
              backgroundColor: "#3f51b5",
              width: "55%",
              borderRadius: "5px 5px 5px 5px",
              color: "#fff",
              height: "40px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
                style={{ color: "#fff" }}
              ></span>
            ) : (
              <>
                <i className="bi bi-patch-check-fill" color="#ffffff"></i>
                Verify
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RatingForm;
