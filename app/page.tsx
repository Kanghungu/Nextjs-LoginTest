import Image from "next/image";
import getAuth from "@/auth";
import LoginButton from "@/app/components/LoginButton";
import LogoutButton from "@/app/components/LogoutButton";

export default async function Home() {
  const auth = getAuth();
  const user = await auth.user();


  return (
      <div className="flex w-full max-w-xl flex-col items-center border bg-white p-10 text-left">
        {user ? (
            <>
                <h2 className="mb-8 font-bold">Hello, {user.name || user.email}!</h2>
                <Image
                    src={user.photo}
                    alt="User Profile"
                    width={96}
                    height={96}
                    className="mb-10 h-24 w-24 rounded-full object-cover"
                />
                <LogoutButton />
            </>
        ) : (
            <>
              <p className="mb-4">Sign in to get started</p>
              <LoginButton />
            </>
        )}
      </div>
  );
}
