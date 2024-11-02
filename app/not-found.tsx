import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl mb-8 font-semibold">
          This page doesn&apos;t exist. <br />
          Please try a different route.
        </h1>

        <Link href="/">
          <Button className="flex rounded-full items-center gap-2" size="sm">
            Go to home <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
