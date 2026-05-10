import React from "react";
import {
  MapPin,
  Calendar,
  Star,
  CheckCircle2,
  ArrowLeft,
  Edit,
  Trash2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EditModal from "@/component/EditModal";
import Deleted from "@/component/DeletedAlet";

const DestinationsDeteals = async ({ params }) => {
  const { id } = await params;
  // console.log(id)
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const destinations = await res.json();
  const data =destinations
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen font-sans">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-6">
          <Link href={"/destinations"}>
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-all">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Destinations</span>
            </button>
          </Link>
          <div className="flex gap-3">
            <EditModal destinations={destinations}></EditModal>
            <Deleted destinations={destinations}></Deleted>
          </div>
        </div>

        {/* Main Image Banner */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={data.imageUrl.trimStart()}
            alt={"image"}
            className="w-full h-full object-cover"
            width={600}
            height={400}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-1 text-gray-500 mb-2">
                <MapPin size={18} />
                <span className="text-sm uppercase tracking-wide">
                  {data.country}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {data.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span className="font-medium">{data.duration}</span>
                </div>
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Highlights</h3>
            </section>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-6">
              <p className="text-gray-500 text-sm">Starting from</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-cyan-500">
                  ${data.price}
                </span>
                <span className="text-gray-400 text-sm">per person</span>
              </div>

              <div className="my-6">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-gray-700">
                  {data.departureDate}
                </div>
              </div>

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all mb-6">
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
      </div>
    </div>
  );
};

export default DestinationsDeteals;
