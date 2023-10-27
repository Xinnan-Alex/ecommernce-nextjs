"use client";

import { ComponentProps } from "react";
import ReactDom from "react-dom";

const useFormStatus = (
	ReactDom as any as {
		experimental_useFormStatus: () => {
			pending: boolean;
			data: FormData | null;
			method: 'get' | 'post' | null;
			action: ((formData: FormData) => Promise<void>) | null;
		};
	}
).experimental_useFormStatus;

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-ring loading-sm" />}
      {children}
    </button>
  );
}
