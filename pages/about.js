import Link from "next/link";
export default function About() {
  return (
    <div>
      <div>About Page</div>
      <p>It's NICK btw how's it going? lolz</p>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
