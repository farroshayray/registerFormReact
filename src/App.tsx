//App.tsx
import "./App.css";
import { useState } from "react";
import { Formik, FormikHelpers } from "formik";
import Login from "./Login";
import NavBar from "./NavBar";
import GreetingRevou from "./GreetingRevou";
import FooterContainer from "./FooterContainer";
import RegisterBtn from "./RegisterBtn";
import RegisterStep1 from "./Register/RegisterStep1";
import RegisterStep2 from "./Register/RegisterStep2";
import RegisterStep3 from "./Register/RegisterStep3";
import { FinishRegister } from "./Register/FinishRegister";

// Import validation schemas
import { validationSchemaStep1 } from "./Register/validationSchemaStep1";
import { validationSchemaStep2 } from "./Register/validationSchemaStep2";
import { validationSchemaStep3 } from "./Register/validationSchemaStep3";

// Interface FormValues
export interface FormValues {
    fullName: string;
    email: string;
    birth: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    username: string;
    password: string;
    rePassword: string;
  }

  //the App Component
function App() {
  const name = "SpaceBin";
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(true);
  const [showGreetings, setShowGreetings] = useState(true);
  const [step, setStep] = useState(0);

  // state initial values for Data
  const initialValues: FormValues = {
    fullName: "",
    email: "",
    birth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
    rePassword: "",
  };

  //button handler
  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowGreetings(false);
    setStep(1);
  };

  const handleNext = () => {
    console.log()
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    if (step === 3) {
      // Final step, submit form
      setStep(step + 1);
      console.log("Form submitted:", values);
      actions.setSubmitting(false);
    } else {
      // Move to next step
      handleNext();
    }
  };

  // Determine which validation schema to use based on the current step
  const validationSchema = step === 1 ? validationSchemaStep1 : step === 2 ? validationSchemaStep2 : validationSchemaStep3;

  return (
    <div className="App">
      <NavBar />
      {showGreetings && <GreetingRevou name={name}/>}
      
      {showLogin && <Login />}
      {showRegister && <RegisterBtn onRegisterClick={handleRegisterClick} />}
      {!showLogin && !showRegister && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema} // Use the correct validation schema
          onSubmit={handleSubmit}
        >
          {formik => (
            <>
              {step === 1 && <RegisterStep1 formik={formik} onNext={handleNext} />}
              {step === 2 && <RegisterStep2 formik={formik} onNext={handleNext} onBack={handleBack} />}
              {step === 3 && <RegisterStep3 formik={formik} onBack={handleBack} onSubmit={handleSubmit}/>}
              {step === 4 && <FinishRegister />}
            </>
          )}
        </Formik>
      )}
      <FooterContainer />
    </div>
  );
}


export default App;
