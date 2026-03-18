import { notFound } from "next/navigation";
import SettingsForm from "@/components/SettingsForm";


export default async function UserProfile({ params }) {
  const { userId } = params;



  const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const user = await res.json();

  return (
    <div>
      <h1>User Profile 👤</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  )
}



export default function SettingsPage() {
  return (
    <div>
      <SettingsForm />
    </div>
  );
}
