export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4 shadow">
          <h2 className="font-semibold text-lg mb-2">Health &amp; Safety Management</h2>
          <p className="text-sm text-gray-600">Overview of compliance status.</p>
        </div>
        <div className="rounded-lg border p-4 shadow">
          <h2 className="font-semibold text-lg mb-2">Compliance Management</h2>
          <p className="text-sm text-gray-600">Track your compliance tasks.</p>
        </div>
        <div className="rounded-lg border p-4 shadow">
          <h2 className="font-semibold text-lg mb-2">My Account</h2>
          <p className="text-sm text-gray-600">Manage your user details.</p>
        </div>
      </div>
    </div>
  );
}
