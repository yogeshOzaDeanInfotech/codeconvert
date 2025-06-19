import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center gap-4 min-h-screen">
      <Link href="/login" className="text-blue-600 underline">
        Go to Login
      </Link>
      <Link href="/dashboard" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </main>
  );
}
