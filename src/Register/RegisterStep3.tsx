import React, {useState} from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import RegisterStep2 from './RegisterStep2';

interface FormValues {
  username: string;
  password: string;
  rePassword: string;
}
const validationSchema = Yup.object().shape({
  username: Yup.string().required('username is required').matches(/^[a-z0-9]{6,}$/, 'Username must be at least 6 characters, lowercase, and contain only letters and numbers without spacing'),
  password: Yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{6,}$/, 'Password must be at least 6 characters, contain at least one lowercase letter, one uppercase letter, one digit, and one special character'),
  rePassword: Yup.string().required('Re-Enter Password is required').test('passwords-match', 'Passwords must match', function(value) {
    return value === this.parent.password;
  }),
});

const RegisterStep3 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [showStep2, setShowStep2] = useState(false);
    const [showStep3, setShowStep3] = useState(true);
    const handleShowRePassword = () => {
        setShowRePassword(!showRePassword);
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleSubmitButton = () => {

    }
    const handleBackClick = () => {
      setShowStep3(false);
      setShowStep2(true);
    }
  return (
    <div>
      {showStep2 && <RegisterStep2 />}
    {showStep3 && (
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
                <p className="text-center opacity-40">Step 2</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-40"
                />
            </div>
            <hr className="bg-slate-600 w-16 h-1 mx-3 opacity-100 my-auto"/>
            <div>
                <p className="text-center opacity-100">Step 3</p>
                <span
                className="flex inline-block rounded-full w-4 h-4 bg-slate-600 mx-auto mt-1 opacity-100"
                />
            </div>
        </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <p>Please fill your account information</p>
        <Formik
      initialValues={{ 
        username: '', 
        password: '', 
        rePassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
        // Handle form submission here
        handleSubmitButton();
        console.log(values);
        actions.setSubmitting(false); 
    }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <Field id="username" name="username" type="text"
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && touched.username && (
                <ErrorMessage name="username" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className='flex'>
                <Field
                id="password"
                name="password"
                type={showPassword ? "text": "password"}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                />
                <button type='button' className='text-sm font-medium text-gray-700 ml-1'
                onClick={handleShowPassword}
                >
                    {showPassword ? "hide" : "Show"}
                </button>
            </div>
            {errors.password && touched.password && (
                <ErrorMessage name="password" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
              )}
          </div>
          <div>
            <label
              htmlFor="rePassword"
              className="block text-sm font-medium text-gray-700"
            >
              Re-Enter Password
            </label>
            <div className='flex'>
                <Field
                id="rePassword"
                name="rePassword"
                type={showRePassword ? "text": "password"}
                required
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                // value={rePassword}
                // onChange={(e) => setRePassword(e.target.value)}
                />
                <button type='button' className='text-sm font-medium text-gray-700 ml-1'
                onClick={handleShowRePassword}
                >
                    {showRePassword ? "hide" : "Show"}
                </button>
            </div>
            {errors.rePassword && touched.rePassword && (
                <ErrorMessage name="rePassword" render={(errorMessage) => <div className="text-red-500">{errorMessage}</div>} />
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
            // onClick={handleSubmitButton}
              type="submit"
              className="flex justify-center w-full px-4 py-2 mx-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
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

export default RegisterStep3