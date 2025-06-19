import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Link href="/login" className="text-blue-600 underline">
        Go to Login
      </Link>
    </main>
  );
}
