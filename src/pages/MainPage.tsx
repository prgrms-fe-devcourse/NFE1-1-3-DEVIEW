import { MainSection } from "@components/MainPage/MainSection";
import { PopularPostSection } from "@components/MainPage/PopularPostSection";
import { RecentPostSection } from "@components/MainPage/RecentPostSection";
import { SubSection } from "@components/MainPage/SubSection";

export default function MainPage() {
  return (
    <div>
      <MainSection />
      <PopularPostSection />
      <SubSection />
      <RecentPostSection />
    </div>
  );
}
