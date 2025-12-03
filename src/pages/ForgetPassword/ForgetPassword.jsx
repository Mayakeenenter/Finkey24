import { Link } from 'react-router-dom'
import NavBarLogIn from '../../component/NavBarLogIn/NavBarLogIn'
import SwiperSlider from '../../component/Swiper/Swiper'
import './ForgetPassword.css'

function ForgetPassword() {
  return (
    <>
       <NavBarLogIn />
      <section className="All-section">
        <SwiperSlider/>
        <div className='form-three'>
            <h3>Forgot Password</h3>
            <form className='form-forget-password'>
                <input type="text" placeholder='Email ID' />
                <button className='one-btn'>Submit</button>
            </form>
           <div className='div-forget-password'>
             <p>You will receive an email shortly with further instructions</p>
            <Link to='/'>« Back to Sign in</Link>
           </div>
        </div>
      </section>
    </>
  )
}

export default ForgetPassword
