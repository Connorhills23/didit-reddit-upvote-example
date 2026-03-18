import { signIn } from "@/auth";
import Link from "next/link";

export function LoginButton() {
  async function handleLogin() {
    "use server";
    await signIn();
  }
  <Link href={`/user/${user.id}`}>My Profile</Link>;
  return (
    <form action={handleLogin} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
