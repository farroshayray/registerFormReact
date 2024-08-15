import React, {useState} from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, useFormikContext } from 'formik';
import RegisterStep2 from './RegisterStep2';

interface FormValues {
  fullName: string;
  email: string;
  birth: string;
}
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Invalid email format'),
  birth: Yup.string().required('Date of Birth is required'),
});
const RegisterStep1 = () => {
    const [showStep1, setShowStep1] = useState(true);
    const [showStep2, setShowStep2] = useState(false);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      birth: '',
    });
    // const handleInputChange = (event: any) => {
    //   const { name, value } = event.target;
    //   setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    // }
    const handleNextClick = () => {
      // setFormData(values);
      // event.preventDefault();
        setShowStep1(false);
        setShowStep2(true);
      };
  return (
    <div>
    {showStep2 && <RegisterStep2 />}
    {showStep1 && (
    <div className="flex items-center justify-center py-7 bg-gray-100 flex-col">
        <div className="flex mb-8">
            <div>
                <p className="text-center opacity-100">Step 1</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-100"
                />
            </div>
            <hr className="bg-slate-600 w-16 h-1 mx-3 opacity-100 my-auto"/>
            <div>
                <p className="text-center opacity-40">Step 2</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-40"
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
        <p>Please fill your personal information</p>
        <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
        // Handle form submission here
        setFormData(values);
        handleNextClick();
        console.log(values);
        actions.setSubmitting(false); 
    }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Field id="fullName" name="fullName" type="text"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={formData.fullName}
              // onChange={handleInputChange}
            />
            {errors.fullName && touched.fullName && (
                <ErrorMessage name="fullName" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={formData.email}
              // onChange={handleInputChange}
            />
            {errors.email && touched.email && (
                <ErrorMessage name="email" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="birth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <Field
              id="birth"
              name="birth"
              type="date"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={formData.birth}
              // onChange={handleInputChange}
            />
            {errors.birth && touched.birth && (
                <ErrorMessage name="birth" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div className="flex">
            <button onClick={() => window.location.href = 'index.html'}
              type="button"
              className="flex justify-center w-full px-4 py-2 mx-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
            <button
              // onClick={handleNextClick}
              type="submit"
              className={`flex justify-center w-full px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                formData.fullName && formData.email && formData.birth ? "" : "next-button:disabled"
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

export default RegisterStep1