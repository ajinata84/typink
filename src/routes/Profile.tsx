import LiteratureCard from "@/components/LiteratureCard/LiteratureCard";
import ProfileLayout from "@/components/layouts/ProfileLayout";

const Profile = () => {
  const avatarUrl =
    "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Example avatar URL
  const username = "Mellow Ajinata";
  const bio = "Author of Shadow Slave";
  const joinDate = "5 years ago";

  return (
    <ProfileLayout>
      <div className="flex-auto h-screen w-full">
        <h1 className="text-3xl font-bold text-left mb-4">Profile</h1>
        <hr className="w-full mb-4" />
        <div className="flex center gap-10 flex-row">
          <div className="w-40 h-40 relative">
            <div className=" rounded-full overflow-hidden border-40 border-white">
              <img
                className="w-full h-full object-cover"
                src={avatarUrl}
                alt={username}
              />
            </div>
            <button className="absolute -bottom-1 right-0 rounded-full ">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                <path
                  d="M31.6587 29.9849C31.8762 29.7682 32.168 29.6424 32.4748 29.633C32.7817 29.6236 33.0806 29.7314 33.3109 29.9345C33.5411 30.1375 33.6855 30.4206 33.7146 30.7262C33.7437 31.0318 33.6554 31.337 33.4676 31.5799L33.3673 31.6935L31.5548 33.506C31.2046 33.8562 30.7889 34.134 30.3313 34.3236C29.8737 34.5131 29.3833 34.6107 28.888 34.6107C28.3927 34.6107 27.9023 34.5131 27.4447 34.3236C26.9872 34.134 26.5714 33.8562 26.2212 33.506C25.9864 33.2714 25.6736 33.1311 25.3422 33.1117C25.0108 33.0923 24.6838 33.1952 24.4232 33.4009L24.3048 33.506L23.7006 34.1102C23.4832 34.3269 23.1914 34.4527 22.8846 34.4621C22.5777 34.4714 22.2788 34.3636 22.0485 34.1606C21.8183 33.9576 21.6739 33.6745 21.6448 33.3689C21.6157 33.0633 21.704 32.758 21.8918 32.5152L21.9921 32.4016L22.5962 31.7974C22.9464 31.4472 23.3622 31.1693 23.8197 30.9798C24.2773 30.7903 24.7677 30.6927 25.263 30.6927C25.7583 30.6927 26.2487 30.7903 26.7063 30.9798C27.1639 31.1693 27.5796 31.4472 27.9298 31.7974C28.1647 32.032 28.4774 32.1723 28.8088 32.1917C29.1402 32.2111 29.4672 32.1082 29.7278 31.9025L29.8462 31.7974L31.6587 29.9849ZM29.4716 13.902C30.0236 13.3411 30.7725 13.0178 31.5592 13.0007C32.3459 12.9836 33.1082 13.2742 33.6839 13.8106C34.2597 14.3469 34.6034 15.0868 34.642 15.8727C34.6805 16.6586 34.4109 17.4286 33.8905 18.0188L33.7431 18.1759L19.7554 32.1623C19.5815 32.3365 19.3738 32.4734 19.1452 32.5647L18.97 32.6239L15.542 33.599C15.3454 33.6552 15.1378 33.6607 14.9386 33.6149C14.7394 33.5691 14.555 33.4735 14.4027 33.3372C14.2504 33.2008 14.1351 33.0281 14.0677 32.8351C14.0003 32.6421 13.9828 32.4352 14.0171 32.2336L14.0473 32.1043L15.0224 28.6751C15.09 28.4384 15.2052 28.2181 15.3607 28.0274L15.484 27.8897L29.4716 13.902Z"
                  fill="#8E8E8E"
                />
              </svg>
            </button>
          </div>
          <div className="text-left mt-8">
            <h3 className="text-4xl font-semibold">{username}</h3>
            <p className="text-gray-700">{bio}</p>
            <p className="text-gray-500">Joined {joinDate}</p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full transition duration-200">
              Edit
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div>
            <h1 className="font-bold text-2xl">Creation</h1>
            <hr />
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-6 mt-6">
            {/* <LiteratureCard />
            <LiteratureCard />
            <LiteratureCard />
            <LiteratureCard />
            <LiteratureCard /> */}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
