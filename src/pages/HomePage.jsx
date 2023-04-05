import React, { lazy, Suspense } from "react";
import { Header } from "../components";
import { HomeLandingSection, HomeShopFeatures } from "../components/home";
import FeaturedSection from "../components/home/FeaturedSection";
import Loading from "../components/ui/Loading";

const CategoryPreview = lazy(() =>
  import("../components/home/SingleCategoryCollection")
);
console.log("admin kintu homepage aise");
export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeLandingSection />
      <FeaturedSection />
      <Suspense fallback={<Loading />}>
        <CategoryPreview />
      </Suspense>
      <HomeShopFeatures />
    </div>
  );
}
