import React, { useContext, useState } from 'react';
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import './Registration.css'
import { AuthContext } from '../../Providers/AuthProvider';

const Registration = () => {

    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handelSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        if (password.length < 6) {
            setError('Please enter at least 6 character');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                userInfo(name, photo)
                    .then(() => {

                    }).catch((error) => {

                    });

                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }

    return (
        <section className='my-6 md:my-8 lg:my-32'>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover bg-center lg:block lg:w-1/2" style={{ backgroundImage: 'url(https://i.ibb.co/VVx9Gwq/demo.jpg)' }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome to GoZayanCourses!
                    </p>
                    {/* sign in with google */}
                    <form onSubmit={handelSignUp}>
                        <div className="mt-4">
                            <label className="label-field">Name</label>
                            <input
                                className="input-field"
                                type="text"
                                name='name'
                            />
                        </div>

                        <div className="mt-4">
                            <label className="label-field">Email Address</label>
                            <input
                                className="input-field"
                                type="email"
                                name='email'
                            />
                        </div>

                        <div className="mt-4">
                            <label className="label-field" >Photo URL</label>
                            <input type="text" name='photoUrl' className="input-field" required />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="label-field" >Password</label>
                            </div>
                            <input
                                className="input-field"
                                type="password"
                                name='password' />
                        </div>

                        <div className="mt-6">
                            <button type='submit'
                                className="sign-up-button">
                                Create an account
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <Link to="/login" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Login Now</Link>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;