import Banner from "../../components/Banner/Banner"
import BannerBottom from "../../components/Banner/BannerBottom"
import NewArrivals from "../../components/NewArrivals/NewArrivals"
import Sale from "../../components/Sale/Sale"

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
      </div>
    </div>
  )
}

export default Home
