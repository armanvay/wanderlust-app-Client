import { Calendar, CheckCircle2, Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AddBooing = ({ user }) => {
  return (
    <div>
      <div
        key={user.id}
        className="border rounded-xl shadow-sm p-4 flex gap-4 items-center bg-white"
      >
        {/* User Image */}
        <div className="relative w-20 h-20">
          <Image
            src={user?.destinationImageUrl}
            alt={user?.destinationName}
            width={200}
            height={300}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{user?.username}</h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Mail size={14} />
            <span>{user?.email}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
            <Calendar size={14} />
            <span>
              Joined: {new Date(user?.createdAt).toLocaleDateString()}
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-1">User ID: {user?.id}</p>
        </div>
      </div>
    </div>
  );
};

export default AddBooing;