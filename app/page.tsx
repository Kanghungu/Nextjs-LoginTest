import Image from "next/image";
import getAuth from "@/auth";
import LoginButton from "@/app/components/LoginButton";
import LogoutButton from "@/app/components/LogoutButton";
import UpdateNameForm from "@/app/components/UpdateUser/UpdateNameForm";
import UpdatePhotoForm from "@/app/components/UpdateUser/UpdatePhotoForm";

export default async function Home() {
    const auth = getAuth();
    const user = await auth.user();


    return (
      <div className="relative flex w-full max-w-xl flex-col items-center border bg-white px-4 py-16 text-left">
          {user ? (
              <>
                  <h2 className="mb-4 font-bold">
                      Hello, {user.name || user.email}!
                  </h2>

                  <Image
                      src={user.photo}
                      alt="User Profile"
                      width={96}
                      height={96}
                      className="mb-10 h-24 w-24 rounded-full object-cover"
                  />

                  <UpdateNameForm name={user.name} />
                  <UpdatePhotoForm photo={user.photo} />

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
