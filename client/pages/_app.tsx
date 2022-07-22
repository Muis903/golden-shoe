import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <NextUIProvider>
                <Navbar />
                <Component {...pageProps} />
                <Toaster />
                <Footer />
            </NextUIProvider>
        </div>
    );
}

export default MyApp;
