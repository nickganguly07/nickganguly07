import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <p>Yo Bart This is coming from Next.jS!!!</p>
      <div>
        Go to{" "}
        <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
          <a>About Page</a>
        </Link>
      </div>
    </div>
  );
}
