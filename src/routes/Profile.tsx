// src/Routes/Profile.tsx
import ProfileLayout from "@/components/layouts/ProfileLayout";
const Profile = () => {
  const avatarUrl = "path_to_avatar.jpg"; // Example avatar URL
  const username = "Mellow Ajinata";
  const bio = "Author of Shadow Slave";
  const joinDate = "5";

  return (
    <>      
    <ProfileLayout>
        <div className="p-6 flex flex-col items-start">
        <h1 className="font-bold text-4xl">Profile</h1>
        <hr className="w-full"/>
          <img
            src={"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h1 className="text-xl font-semibold mt-4">{username}</h1>
          <p className="text-sm text-gray-600">{bio}</p>
          <p className="text-sm text-gray-500">Joined {joinDate} years ago</p>
          <button className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
            Edit
          </button>
        </div>
      </ProfileLayout>
    </>
  );
};

export default Profile;
