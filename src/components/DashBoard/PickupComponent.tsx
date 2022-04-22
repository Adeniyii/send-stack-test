import React, { FC } from "react";

import { useFormContext } from "react-hook-form";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, LocationMarkerIcon } from "@heroicons/react/outline";

import NestedInput from "./NestedInput";
import {IDeliveryDto} from '../../interfaces'
import { NestedSelect } from "./NestedSelect";

type Props = {
  title: string;
};

const PickupComponent: FC<Props> = ({ title }) => {
  const { register, formState: { errors } } = useFormContext<IDeliveryDto>();

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="capitalize">{title}</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="border-2 border-dashed border-gray-300 flex flex-col gap-3 px-4 pt-4 pb-2 text-sm font-medium text-gray-700">
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={errors.pickup?.address}
              placeholder="2, Kyrie street, Lagos."
              rest={register("pickup.address", { required: true })}
            />
            <NestedSelect
              rest={register("pickup.locationCode", { required: true })}
              Icon={LocationMarkerIcon}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={errors.pickup?.pickupName}
              placeholder="Frank Vogel"
              rest={register("pickup.pickupName", { required: true })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={errors.pickup?.pickupName}
              placeholder="Frank Vogel"
              rest={register("pickup.pickupName", { required: true })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={errors.pickup?.pickupNumber}
              placeholder="08066699990"
              rest={register("pickup.pickupNumber", { required: true })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="date"
              error={errors.pickup?.pickupDate}
              placeholder="08066699990"
              rest={register("pickup.pickupDate", { required: false })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={errors.pickup?.note}
              placeholder="Please come on time"
              rest={register("pickup.note", { required: false })}
              textArea
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PickupComponent;
