import SignupBgVideo from '../videos/stake.mp4'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='h-screen relative'>
            <video
                muted
                autoPlay
                loop
                className='absolute h-screen w-screen object-cover z-[-1]' src={SignupBgVideo}>
            </video>
            <div className='h-screen grid place-items-center text-white bg-black bg-opacity-50 w-full'>
              <div className='bg-white rounded-md p-8 max-w-md w-full bg-opacity-60'>
              <h1 className='text-3xl text-black text-center mb-4'>Login</h1>
                <form className='flex flex-col gap-3'>
                    <label className='form-label' >
                        <span>Email:</span>
                        <input type="email" placeholder='Enter your email adress' />
                    </label>
                    <label className='form-label' >
                        <span>Password:</span>
                        <input type="password" placeholder='your password' />
                    </label>
                    <button className='btn bg-cyan-400'>Submit</button>
                    <Link to="/signup" className="btn bg-lime-400 text-center">
                      If you don`t have any account click here
                    </Link>
                </form>
              </div>
            </div>
        </div>
    )
}

export default Login