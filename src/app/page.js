import BannerStats from "./components/BannerStats";
import FriendSection from "./components/FriendSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Hero />
      <BannerStats />
      <FriendSection />
    </div>
  );
}
