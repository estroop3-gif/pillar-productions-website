import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ adminKey: string }>;
}

export default async function AdminRedirect({ params }: Props) {
  const { adminKey } = await params;

  // Only redirect if it matches the admin key env var
  const ADMIN_KEY = process.env.ADMIN_API_KEY || "";
  if (ADMIN_KEY && adminKey === ADMIN_KEY) {
    redirect(`/api/leads?key=${ADMIN_KEY}`);
  }

  // Otherwise 404
  const { notFound } = await import("next/navigation");
  notFound();
}
