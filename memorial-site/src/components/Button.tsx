import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#2f4c3a] text-white hover:bg-[#243a2d]",
  secondary:
    "border border-[#2f4c3a]/30 text-[#2f4c3a] hover:border-[#2f4c3a] hover:bg-white/70",
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;

  return <button className={classes} {...props} />;
}
