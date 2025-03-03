import React, { FC } from "react";
import { Users } from "../../pages/home/interface/interface";

const Post: FC<Users> = ({ name, email, username, address }) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 border">
      <h2 className="text-2xl font-bold text-gray-900">{name} (@{username})</h2>
      <p className="text-gray-600 text-sm">Email: {email}</p>
      {address && (
        <div className="bg-gray-100 p-3 rounded-md">
          <p className="text-gray-700 font-medium">Address:</p>
          <p className="text-gray-600 text-sm">
            {address.suite}, {address.street}, {address.city} - {address.zipcode}
          </p>
        </div>
      )}
    </div>
  );
};

export default Post;
