import React from 'react';
import { HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useAuth } from '../Hook/useAuth';

const Register = () => {
    const { user, signWithEmail, name, email, password, setName, setEmail, setPassword, isLoading } = useAuth();
    // const handleName = (e) => {
    //     const tmpName = e.target.value;
    //     setName(tmpName);
    // }
    // const handleEmail = (e) => {
    //     const tmpEmail = e.target.value;
    //     setEmail(tmpEmail);
    // }
    // const handlePassword = (e) => {
    //     const tmpPassword = e.target.value;
    //     setPassword(tmpPassword);
    // }
    console.log(user);

    return (
        <>
            <div className="login-page flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/assets/img/singleLogo.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please! Sign up</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Your name
                                </label>
                                <input
                                    onBlur={(e) => { setName(e.target.value) }}
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onBlur={(e) => { setEmail(e.target.value) }}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onBlur={(e) => { setPassword(e.target.value) }}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Already have an account?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={signWithEmail}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;