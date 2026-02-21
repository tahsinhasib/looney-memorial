import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  className?: string;
};

const baseClasses =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1e1c18] focus:border-[#2f4c3a] focus:outline-none";

export function InputField({
  className,
  ...props
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${baseClasses} ${className ?? ""}`} {...props} />;
}

export function TextareaField({
  className,
  ...props
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={`${baseClasses} ${className ?? ""}`} {...props} />
  );
}
