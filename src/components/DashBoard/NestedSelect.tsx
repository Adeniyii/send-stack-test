import React, { FC, SVGProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { useFetchDeliveryLocations } from '../../hooks/useFetchDeliveryLocations'

type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  rest: UseFormRegisterReturn;
};

export const NestedSelect: FC<Props> = ({ Icon, rest, ...delegated }) => {
	const { provinces, deliveryLocations, handleSelectLocation } = useFetchDeliveryLocations()

  return (
    <div {...delegated} className="flex flex-col gap-3">
      <label className="flex gap-4 items-center">
        <span className="w-5">
          <Icon />
        </span>
        <select
					defaultValue=""
					onChange={handleSelectLocation}
          className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        >
					<option value="">Choose State</option>
          {deliveryLocations && deliveryLocations.map((value, index) => (
            <option key={index} value={value.state}>
              {value.state}
            </option>
          ))}
        </select>
      </label>
      <label className="flex gap-4 items-center">
        <span className="w-5">
          <Icon />
        </span>
        <select
					defaultValue=""
          {...rest}
          className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        >
					<option value="">Choose LGA</option>
          {provinces && provinces.map((value) => (
            <option key={value.locationCode} value={value.locationCode}>
              {value.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
