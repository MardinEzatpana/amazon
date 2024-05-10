import Banner from "../../components/Banner/Banner"
import BannerBottom from "../../components/Banner/BannerBottom"
import BestSellers from "../../components/BestSellers/BestSellers"
import NewArrivals from "../../components/NewArrivals/NewArrivals"
import Sale from "../../components/Sale/Sale"
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers"
import YearProducts from "../../components/YearProducts/YearProducts"

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProducts />
        <SpecialOffers />
      </div>
    </div>
  )
}

export default Home
