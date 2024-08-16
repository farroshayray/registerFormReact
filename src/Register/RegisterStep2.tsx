//RegisterStep2.tsx
import React from "react";
import { FormikProps, Field, ErrorMessage } from "formik";
import { FormValues } from "../App";

interface Step2Props {
  formik: FormikProps<FormValues>;
  onNext: () => void;
  onBack: () => void;
}

const RegisterStep2: React.FC<Step2Props> = ({ formik, onNext, onBack }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  const handleNext = () => {
    if (formik.isValid && Object.values(formik.touched).some((touched) => touched)) {
      onNext();
    }
  };
  console.log(values);
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md my-20 mx-auto">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <p>Please fill your address information</p>

      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <Field
            id="address"
            name="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.address && touched.address && (
          <div style={{ color: "red" }}>{errors.address}</div>
          )} 
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <Field
            id="city"
            name="city"
            type="text"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.city && touched.city && (
          <div style={{ color: "red" }}>{errors.city}</div>
          )} 
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <Field
            id="state"
            name="state"
            type="text"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
           {errors.state && touched.state && (
          <div style={{ color: "red" }}>{errors.state}</div>
          )} 
        </div>
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <Field
            id="zipCode"
            name="zipCode"
            type="text"
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.zipCode && touched.zipCode && (
          <div style={{ color: "red" }}>{errors.zipCode}</div>
          )} 
        </div>
        <div className="flex justify-between">
          <button type="button" className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep2;
