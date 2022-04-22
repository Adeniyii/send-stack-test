import React, { FC } from "react";

import { useFormContext } from "react-hook-form";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, LocationMarkerIcon } from "@heroicons/react/outline";

import NestedInput from "./NestedInput";
import { IDeliveryDto } from "../../interfaces";
import { NestedSelect } from "./NestedSelect";

type Props = {
  title: string;
  count: number;
};

const DropoffComponent:FC<Props> = ({ title, count }) => {
	const { register, formState: { errors } } = useFormContext<IDeliveryDto>();
  const dropErrors = errors?.drops;

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
              error={dropErrors && dropErrors[count].address}
              placeholder="2, Kyrie street, Lagos."
              rest={register(`drops.${count}.address`, { required: true })}
            />
            <NestedSelect
              rest={register(`drops.${count}.locationCode`, { required: true })}
              Icon={LocationMarkerIcon}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={dropErrors && dropErrors[count].recipientName}
              placeholder="Monty Williams"
              rest={register(`drops.${count}.recipientName`, {
                required: true,
              })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={dropErrors && dropErrors[count].recipientNumber}
              placeholder="08066699990"
              rest={register(`drops.${count}.recipientNumber`, {
                required: true,
              })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              error={dropErrors && dropErrors[count].altRecipientNumber}
              placeholder="08066699990"
              rest={register(`drops.${count}.altRecipientNumber`, {
                required: true,
              })}
            />
            <NestedInput
              Icon={LocationMarkerIcon}
              type="text"
              placeholder="Please come on time"
              rest={register(`drops.${count}.note`, { required: false })}
              textArea
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default DropoffComponent
