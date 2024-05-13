import { useEffect, useState } from "react";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useLocation } from "react-router-dom";

const Offer = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="محصولات پیشنهادی" prevLocation={prevLocation} />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Offer;
