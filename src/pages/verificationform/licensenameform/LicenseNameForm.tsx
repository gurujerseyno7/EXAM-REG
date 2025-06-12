import React, { useState } from "react";
import CustomTextField from "../../../components/customtextfield/CustomTextField";
import CustomSelect from "../../../components/customselect/CustomSelect";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { professionList } from "../data";
import { addRatingForm } from "../../../services/verificationForm";

const LicenseNameForm = () => {
  const [formData, setFormData] = useState<any>({});

  const professionOptions: any = [
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
    profession: yup.string().required("Select profession"),
    firstName: yup.string().required("Enter first name"),
    lastName: yup.string().required("Enter last name"),
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
      category: "BY NAME",
      professionId: selectedProfession?.professionId,
      firstName: e?.firstName,
      lastName: e?.lastName,
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
              {...register("profession")}
              errors={errors["profession"]}
              onChange={(e: any) => handleChange("profession", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12">
            <CustomTextField
              label={"First Name"}
              id={"firstName"}
              placeholder={"Enter the first name"}
              required={true}
              {...register("firstName")}
              errors={errors["firstName"]}
              onChange={(e: any) => handleChange("firstName", e.target.value)}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-12">
            <CustomTextField
              label={"Last Name"}
              id={"lastName"}
              placeholder={"Enter the last name"}
              required={true}
              {...register("lastName")}
              errors={errors["lastName"]}
              value={formData.lastName}
              onChange={(e: any) => handleChange("lastName", e.target.value)}
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
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default LicenseNameForm;
