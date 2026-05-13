"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ data }) => {
  const [deperdate, setDeperdate] = useState(null);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async () => {
   
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      username: user?.name,
      destinationId: data?._id,
      destinationName: data?.destinationName,
      destinationPrice: data?.price,
      destinationImageUrl: data?.imageUrl,
      destinationcountry: data?.country,
      parsedDate : new Date(deperdate)
    };
    console.log(bookingData);

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const responseData = await res.json();
      toast.success("Booking success");
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting booking:", error);
       toast.error("Booking Fall");
    }
  };

  return (
    <div>
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-6">
          <p className="text-gray-500 text-sm">Starting from</p>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-cyan-500">
              ${data?.price}
            </span>
            <span className="text-gray-400 text-sm">per person</span>
          </div>

          <div className="my-6">
            <DateField
              onChange={setDeperdate}
              className="w-[256px]"
              name="date"
            >
              <Label>Date</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
              </DateField.Group>
            </DateField>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all mb-6"
          >
            Book Now <ArrowRight size={20} />
          </button>

          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-green-500" /> Free
              cancellation up to 7 days
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-green-500" /> Travel
              insurance included
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-green-500" /> 24/7
              customer support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
