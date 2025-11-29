import { Controller, type Control, type FieldError } from "react-hook-form";
import type { FormValuesRegister } from "./register.schema";
import "./FormInput.css";
import type { FormValuesLogin } from "./login.schema";

interface Props {
  name: keyof (FormValuesRegister & FormValuesLogin);
  label: string;
  control: Control<FormValuesRegister | FormValuesLogin>;
  type?: string;
  error?: FieldError;
}

const FormInput = ({ name, label, control, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "invalid" : ""}`}
          />
        )}
      />
      {error && <p className="form-error">{error.message}</p>}
    </div>
  );
};

export default FormInput;
