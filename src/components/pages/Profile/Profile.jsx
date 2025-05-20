import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     const URL = "http://localhost:5104/api/Profile";
  //     const token = localStorage.getItem("token");

  //     try {
  //       const response = await axios.get(URL, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       setProfile(response.data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchUserInfo();
  // }, []);

  // if (!profile) return <p>Loading...</p>;
  const firstName = "John";
  const lastName = "Doe";
  const username = "johndoe99";
  const address = "123 Main St, Springfield";
  const phoneNumber = "+1 (555) 123-4567";
  const email = "john.doe@example.com";
  const dateJoined = "2022-06-15";

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="max-w-xs">
        <div className="bg-white p-4 rounded shadow-lg">
          {/* image */}
          <div className="photo-wrapper p-2">
            <img
              className="w-52 aspect-square object-cover mx-auto rounded-full shadow-lg shadow-black"
              src={`https://picsum.photos/200/300?random=${Math.floor(
                Math.random() * 100
              )}`}
              alt={`${firstName} ${lastName}`}
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {firstName} {lastName}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{username}</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Address
                  </td>
                  <td className="px-2 py-2">{address || "Unknown"}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">{phoneNumber || "N/A"}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{email}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Joined
                  </td>
                  <td className="px-2 py-2">
                    {new Date(dateJoined).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
