import React, { useEffect, useState } from "react";
import { Users } from "../../../pages/home/interface/interface";
import { AxiosError } from "axios";
import GetAPi from "../api/apiService";
import { DotLoader } from "react-spinners";
import Post from "../../../component/userComponent/User";

const Posts = () => {
  const [users, setUsers] = useState<Users[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetAPi.getUser();
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        }
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gray-100">
      {error ? (
        <div className="p-4 mb-6 text-red-700 bg-red-100 border border-red-400 rounded-lg shadow-md">
          ⚠️ {error.message}
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center h-40">
          <DotLoader color="#2563eb" size={60} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {users?.map((user) => (
            <Post
              key={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
              address={user.address}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Posts;
