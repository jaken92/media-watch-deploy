import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";
import { redirect } from "next/navigation";
import Account from "./account/page";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    redirect("/start");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="">
      <nav className="">
        <div className="">
          <div />
          <div>{user ? <Account /> : redirect("/login")}</div>
        </div>
      </nav>
    </div>
  );
}
