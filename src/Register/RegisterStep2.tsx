import React, {useState} from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import RegisterStep1 from './RegisterStep1';
import RegisterStep3 from './RegisterStep3';

interface FormValues {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip Code is required').matches(/^\d{5}$/, 'Zip Code must be 5 digits'),
});

const RegisterStep2 = () => {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [showStep1, setShowStep1] = useState(false);
    const [showStep2, setShowStep2] = useState(true);
    const [showStep3, setShowStep3] = useState(false);
    const handleNextClick = () => {
        setShowStep2(false);
        setShowStep3(true);
    };
    const handleBackClick = () => {
      setShowStep2(false);
      setShowStep1(true);
    }
  return (
    <div>
      {showStep1 && <RegisterStep1 />}
      {showStep3 && <RegisterStep3 />}
    {showStep2 && (
    <div className="flex items-center justify-center py-7 bg-gray-100 flex-col">
        <div className="flex mb-8">
            <div>
                <p className="text-center opacity-40">Step 1</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-40"
                />
            </div>
            <hr className="bg-slate-600 w-16 h-1 mx-3 opacity-40 my-auto"/>
            <div>
                <p className="text-center opacity-100">Step 2</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-100"
                />
            </div>
            <hr className="bg-slate-600 w-16 h-1 mx-3 opacity-40 my-auto"/>
            <div>
                <p className="text-center opacity-40">Step 3</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-40"
                />
            </div>
        </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <p>Please fill your address information</p>
        <Formik
      initialValues={{ 
        address: '', 
        city: '', 
        state: '', 
        zipCode: '' 
      }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
        // Handle form submission here
        handleNextClick();
        console.log(values);
        actions.setSubmitting(false); 
    }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <Field id="address" name="address" type="text"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={address}
              // onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && touched.address && (
                <ErrorMessage name="address" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <Field
              id="city"
              name="city"
              type="text"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={city}
              // onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && touched.city && (
                <ErrorMessage name="city" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <Field
              id="state"
              name="state"
              type="text"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={state}
              // onChange={(e) => setState(e.target.value)}
            />
            {errors.state && touched.state && (
                <ErrorMessage name="state" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <Field
              id="zipCode"
              name="zipCode"
              type="number"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={zipCode}
              // onChange={(e) => setZipCode(e.target.value)}
            />
            {errors.zipCode && touched.zipCode && (
                <ErrorMessage name="zipCode" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div className="flex">
            <button onClick={handleBackClick}
              type="button"
              className="flex justify-center w-full px-4 py-2 mx-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
            <button
              type="submit"
              className={`flex justify-center w-full px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                address && city && state && zipCode ? "" : "next-button:disabled"
              }`}
            >
              Next
            </button>
          </div>
        </form>
      )}
    </Formik>
      </div>
    </div>)}
    </div>
  );
};

export default RegisterStep2