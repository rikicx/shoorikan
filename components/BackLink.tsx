import Link from "next/link";

export default function BackLink({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`page-back${light ? " page-back--light" : ""}`}>
      ← Shoorikan
    </Link>
  );
}
