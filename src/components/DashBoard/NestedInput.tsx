import React, { FC, SVGProps } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type: string;
  title: string;
  error?: FieldError | undefined;
  placeholder: string;
  textArea?: boolean;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  rest: UseFormRegisterReturn;
};

const NestedInput: FC<Props> = ({ placeholder, Icon, type, textArea, error, rest, title }) => {
  return (
    <div className="">
      <label className="flex gap-4 items-center">
        <span className="w-5 items-baseline">
          <Icon />
        </span>
        <div className="flex flex-col w-full">
          <p className="text-sm font-medium text-gray-400 mb-2">{title}</p>
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
          {error && <span className="text-fuchsia-800 text-sm mt-2">This field is required</span>}
        </div>
      </label>
    </div>
  );
};

export default NestedInput;
