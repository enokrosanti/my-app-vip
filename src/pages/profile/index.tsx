import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data }: any = useSession();
  return (
    <>
      <h1>Profile</h1>
      <h2>{data && data.user.fullname}</h2>
    </>
  );
};

export default ProfilePage;
