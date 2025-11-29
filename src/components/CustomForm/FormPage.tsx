import "./FormPage.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import FormInput from "./FormInput";
import { schemaLogin, type FormValuesLogin } from "./login.schema";
import { schemaRegister, type FormValuesRegister } from "./register.schema";
import { useForm, type SubmitHandler } from "react-hook-form";

// React and React Hook Form imports
type FormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const FormPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const schema = isLogin ? schemaLogin : schemaRegister;
  const defaultValues: FormValues = isLogin
    ? { email: "", password: "" }
    : { name: "", email: "", password: "", confirmPassword: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur", // when the form will be validated
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValuesRegister | FormValuesLogin> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <div className="form-container animate-fade-in">
      <h2 className="form-title">{isLogin ? "Log In" : "Create an Account"}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <FormInput
            name="name"
            label="Full Name"
            control={control}
            type="text"
            error={errors?.name}
          />
        )}

        <FormInput
          name="email"
          label="Email"
          control={control}
          type="email"
          error={errors.email}
        />

        <FormInput
          name="password"
          label="Password"
          control={control}
          type="password"
          error={errors.password}
        />

        {!isLogin && (
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            control={control}
            type="password"
            error={errors?.confirmPassword}
          />
        )}

        <div className="form-button-container">
          <button type="submit" className="btn-submit">
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </div>
      </form>

      <div className="form-toggle-section">
        <p className="form-toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>
        <button
          type="button"
          className="toggle"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create Account" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default FormPage;
