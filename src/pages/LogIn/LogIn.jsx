
import NavBarLogIn from "../../component/NavBarLogIn/NavBarLogIn";
import "./LogIn.css";
import FormLogin from "../../component/FormLogin/FormLogin";
import SwiperSlider from "../../component/Swiper/Swiper";

function LogIn() {
  return (
    <>
      <NavBarLogIn />
      <section className="All-section">
        <SwiperSlider/>
        <FormLogin />
      </section>
    </>
  );
}

export default LogIn;
