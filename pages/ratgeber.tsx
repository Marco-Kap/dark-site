import BSNav from "components/BSNav";
import Footer from "components/Footer";
import Banner from "components/Banner";

export default function Ratgeber() {
  const src = "/../public/images/motherchild.jpg";

  return (
    <>
      <BSNav />
      <Banner text="" alt="banner" source={src} />
      <div className="spacer" aria-disabled="true"/>

      <Footer />
    </>
  );
}
