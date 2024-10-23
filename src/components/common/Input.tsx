import { CurrencyInr, EnvelopeOpen, Phone, X } from "@phosphor-icons/react";

type InputProps = {
  placeholder?: string;
  type?: string;
  className?: string;
  mainClass?: string;
  icon?: React.ReactNode | string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  disabled?: boolean; // Add disabled prop
};

const Input = ({
  placeholder,
  type = "text",
  className = "",
  mainClass = "",
  icon,
  value,
  onChange,
  onBlur,
  disabled = false, // Default to not disabled
  ...props
}: InputProps) => {
  return (
    <div
      className={`relative mt-2 py-3 pl-2.5 pr-[30px] border border-green-600/20 rounded-lg flex items-center gap-2.5 ${mainClass} ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "focus-within:border-green-600"
      }`}
    >
      {icon === "number" && <Phone size={20} />}
      {icon === "email" && <EnvelopeOpen size={20} />}
      {icon === "rup" && <CurrencyInr size={20} />}

      <input
        type={type}
        className={`outline-none text-sm text-primary bg-transparent w-full ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled} // Apply the disabled prop here
        {...props}
      />
      {value &&
        !disabled && ( // Hide clear button when disabled
          <button
            onClick={() =>
              onChange({
                target: { name: props.name, value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2.5 top-1/2 -translate-y-1/2 focus:outline-none"
            aria-label="Clear input"
            type="button"
          >
            <X size={20} />
          </button>
        )}
    </div>
  );
};

export default Input;
