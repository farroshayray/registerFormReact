//RegisterStep3.tsx
import React from "react";
import { FormikProps, Field, ErrorMessage, FormikHelpers } from "formik";
import { FormValues } from "../App";

interface Step3Props {
  formik: FormikProps<FormValues>;
  onBack: () => void;
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
}

const RegisterStep3: React.FC<Step3Props> = ({ formik, onBack, onSubmit }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  const handleSubmit = () => {
    if (formik.isValid && Object.values(formik.touched).some((touched) => touched)) {
      onSubmit(formik.values, formik);
    }
  };
  console.log(values);
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md my-20 mx-auto">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <p>Please fill your account information</p>

      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <Field
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.username && touched.username && (
        <div style={{ color: "red" }}>{errors.username}</div>
      )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Field
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.password && touched.password && (
        <div style={{ color: "red" }}>{errors.password}</div>
      )}
        </div>
        <div>
          <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">
            Re-Enter Password
          </label>
          <Field
            id="rePassword"
            name="rePassword"
            type="password"
            value={values.rePassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.rePassword && touched.rePassword && (
        <div style={{ color: "red" }}>{errors.rePassword}</div>
        )}
        </div>
        <div className="flex justify-between">
          <button type="button" className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep3;
