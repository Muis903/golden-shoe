import { NextPage } from "next";
import { useState } from "react";
import { IContactForm } from "../types/types";
import PostContactForm from "../helpers/api";
import { useRouter } from "next/router";

/**
 * Contact page.
 *
 * This page is used to perform communication between user and admin through
 * e-mail.
 *
 * User fills in the necessary data (such as name, e-mail address and message)
 * and by clicking SEND button sends the data into the admin e-mail inbox. After
 * that the admin is able to look into the form and get in touch with the user
 * by implementing mentioned user e-mail.
 */
const Contact: NextPage = () => {
    // Define router to handle routings.
    const router = useRouter();

    // Define form and corresponding function.
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
    });

    /**
     * Send contact form to the server to process sending e-mail.
     */
    async function sendForm() {
        // Get form object keys with values.
        const { name, email, phone, business, message } = form;

        // Check for certain values that are required.
        if (!name && !email && !message) return;

        // Define data object in type of `IContactForm`.
        const data: IContactForm = {
            name: name,
            email: email,
            phone: phone,
            business: business,
            message: message,
        };

        // Send data as post request.
        await PostContactForm(data);

        // Handle success by navigating to pages/index.tsx.
        //router.push("/");
    }

    // Return UI.
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Contact Us
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify.
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: e.target.value,
                                        })
                                    }
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            phone: e.target.value,
                                        })
                                    }
                                    id="phone"
                                    name="phone"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">
                                    Business
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            business: e.target.value,
                                        })
                                    }
                                    id="business"
                                    name="business"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            message: e.target.value,
                                        })
                                    }
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                onClick={sendForm}
                                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
