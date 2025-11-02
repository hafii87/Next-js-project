import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My Next.js App</h1>
      <Link href="/users">Go to Users Page</Link>
     
    </main>
  );
}