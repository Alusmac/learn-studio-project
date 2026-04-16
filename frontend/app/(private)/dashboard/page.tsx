import { LogoutButton } from "@/features/auth/components/LogoutButton";
import { getSession } from "@/shared/lib/auth/getSession";

const DashboardPage = async () => {
  const session = await getSession();

  return (
    <main className="p-10">
      <header className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <LogoutButton />
      </header>

      <div className="space-y-2">
        <p>
          {session?.user.first_name} {session?.user.last_name}
        </p>
        <p>Email: {session?.user.email}</p>
        <p>Username: {session?.user.username}</p>
      </div>
    </main>
  );
};

export default DashboardPage;
