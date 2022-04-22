import React, { FC, SVGProps } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type: string;
  error?: FieldError | undefined;
  placeholder: string;
  textArea?: boolean;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  rest: UseFormRegisterReturn;
};

const NestedInput: FC<Props> = ({ placeholder, Icon, type, textArea, error, rest }) => {
  return (
    <div>
      <label className="flex gap-4 items-center">
        <span className="w-5">
          <Icon />
        </span>
        {!textArea ? (
          <input
            type={type}
            className="mt-1 bg-gray-100 block w-full rounded-md border-transparent focus:bg-white focus:ring-0 focus:border-gray-500 placeholder:text-gray-400 placeholder:text-xs"
            placeholder={placeholder}
            {...rest}
          />
        ) : (
          <textarea
            className="mt-1 bg-gray-100 block w-full rounded-md border-transparent focus:bg-white focus:ring-0 focus:border-gray-500 placeholder:text-gray-400 placeholder:text-xs"
            placeholder={placeholder}
            {...rest}
          />
        )}
      </label>
      {error && <span>This field is required</span>}
    </div>
  );
};

export default NestedInput;
