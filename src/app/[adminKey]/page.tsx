import { redirect, notFound } from "next/navigation";

// Force dynamic rendering — this route checks an env var at runtime
export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ adminKey: string }>;
}

export default async function AdminRedirect({ params }: Props) {
  const { adminKey } = await params;

  const ADMIN_KEY = process.env.ADMIN_API_KEY || "";
  if (ADMIN_KEY && adminKey === ADMIN_KEY) {
    redirect(`/api/leads?key=${ADMIN_KEY}`);
  }

  notFound();
}
