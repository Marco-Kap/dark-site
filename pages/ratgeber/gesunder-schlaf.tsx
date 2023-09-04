import Banner from "/components/Banner";
import BSNav from "/components/BSNav";
import Footer from "/components/Footer";
import Image from "next/image"

export default function GesunderSchlaf() {
  const src = "";
  const alt = ""

  return (
    <>
      <BSNav />
      <Banner source={src} alt="" text="" />
      <main>
        <div>

        </div>
        <Image width={400}  height={320} alt={alt} src={src}/>
      </main>
      <Footer />
    </>
  );
}
