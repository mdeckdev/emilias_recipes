import { Suspense } from "react";
import EmiliaRecipeBook from "@/components/EmiliaRecipeBook";

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <EmiliaRecipeBook />
    </Suspense>
  );
}
