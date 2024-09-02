import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <p>Landing Page</p>
      <Link
        href="/dashboard"
        className="text-orange-600 underline pt-20 inline-block"
      >
        Go to Dashboard ...
      </Link>
    </div>
  );
}
