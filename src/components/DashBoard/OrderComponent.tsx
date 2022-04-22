import React, { useRef, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { IDeliveryDto } from "../../interfaces";
import PickupComponent from "./PickupComponent";
import DropoffComponent from "./DropoffComponent";
import { usePlaceDelivery } from "../../hooks/usePlaceDelivery";

function OrderComponent() {
  const methods = useForm<IDeliveryDto>();

  const dropOffCount = useRef(1);
  const [dropOffComponents, setDropOffComponents] = useState([<DropoffComponent key={dropOffCount.current} title={`DropOff ${dropOffCount.current}`} count={dropOffCount.current} />]);
  const { submitting, placeDelivery } = usePlaceDelivery()

  const {handleSubmit} = methods;
  const onSubmit: SubmitHandler<IDeliveryDto> = (data) => placeDelivery(data);

  const addDropOff = () => {
    dropOffCount.current += 1
    setDropOffComponents((prev) => [
      ...prev,
      <DropoffComponent key={dropOffCount.current} title={`DropOff ${dropOffCount.current}`} count={dropOffCount.current} />,
    ]);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="flex flex-col w-full max-w-lg p-3 px-0 mx-auto bg-white rounded-2xl h-full shadow-2xl">
          <div className="mb-auto flex flex-col gap-3 px-3 pb-3 overflow-y-auto">
            <PickupComponent title="Pickup" />
            {dropOffComponents}
          </div>

          {/* Vertical Spacing */}
          <div className="w-full mx-auto pt-3"></div>

          <div className="flex gap-2 mx-auto">
            <button type="button" onClick={() => addDropOff()} className="w-fit rounded-md px-4 py-2 border border-gray-700 text-gray-700 bg-white hover:bg-gray-700 hover:text-white">
              New Dropoff
            </button>
            <button
              type="submit"
              className="bg-gray-800 w-fit rounded-md px-4 py-2 text-white hover:bg-gray-900"
            >
              Request Delivery
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default OrderComponent;
