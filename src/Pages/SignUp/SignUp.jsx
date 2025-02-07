import bg from '../../assets/Slider/rendering-anime-doctors-work.jpg'
import GoogleSignIn from '../JoinUs/GoogleSignIn/GoogleSignIn';
import logo from '../../assets/logo/Bigger+Logo+2.png';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from '../../Components/Hooks/useAuth/useAuth';
import UseAuth from '../../Components/Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../Components/Hooks/UseAxiosPublic/UseAxiosPublic';

const SignUp = () => {
    const axiosPublic = UseAxiosPublic();
    const { CreateUser } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        CreateUser(email, password)
            .then(result => {
               
                const userInfo={
                    name:data.fullName,
                    email: email
                }
                // create user entry in the database
                axiosPublic.post('users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        reset();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registered Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(form, { replace: true })
                    }
                })

            })
            .catch((error => {
                const errorMessage = error.message;
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
            }))

    }


    return (
        <div className="bg-white pt-20">

            <Helmet>
                <title>Join US</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 mx-auto " >

                <div className='flex justify-center mx-auto'>
                    <img
                        className='w-auto h-10 sm:h-10'
                        src={logo}
                        alt=''
                    />
                </div>

                <p className='mt-3 text-xl text-center text-gray-600 '>
                    Join with Us!
                </p>

                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>

                    <input type="text" name='fullName' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name"
                        {...register("fullName")} />
                </div>

                {/* <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>

                    <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                    <input id="dropzone-file" name='image' type="file" className="hidden" />
                </label> */}

                <div className="relative flex items-center mt-6">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>

                    <input type="email" name='email' required className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"
                        {...register("email")} />
                </div>

                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>

                    <input type="password" name='password' required className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"
                        {...register("password")} />
                </div>

                <div>
                    {/* recaptcha */}
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>
            </form>

            <div className="mt-6 text-center ">
                <div className='text-white bg-orange-200 rounded-lg w-1/3 mx-auto mb-10'>

                    <GoogleSignIn />
                </div>

                <a href="/joinUs" className="text-sm text-blue-500 hover:underline dark:text-blue-400 p-3 rounded-md bg-gray-300">
                    Already have an account?
                </a>
            </div>
        </div>
    );
};

export default SignUp;