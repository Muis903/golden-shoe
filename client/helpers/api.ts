import axios from "axios";
import { SERVER_LOCAL_URL } from "../server-config";
import { IContactForm, IManProduct, IWomanProduct } from "../types/types";
import toast from "react-hot-toast";

/**
 * Send POST request to the server to handle contact form information.
 *
 * Once the request successfully received by the server it processes the
 * information and sends it as an e-mail through SMTP to receipient.
 *
 * @param _data Object that is passed into in the type of `IContactForm`.
 */
async function PostContactForm(_data: IContactForm) {
    await axios({
        method: "post",
        url: `${SERVER_LOCAL_URL}/send-contact-form/`,
        data: _data,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            // Handle success by pushing a notification to the screen.
            if (response.data === 0) {
                console.log(response);
                // Show notification.
                // For more toast API: https://react-hot-toast.com/docs/toast
                toast.success(
                    "Thank you for contacting us! We will reply as soon as possible!",
                    {
                        duration: 4500, // 4.5 seconds
                        position: "top-right",
                    }
                );
            } else if (response.data === 1) {
                console.log(response);
                // Handle failed API call by pushing a notification to the screen.
                // TODO: It would a good practice to make an API call to AND and tell
                // about the error so it can be resolved ASAP.
                toast.error(
                    "We are experiencing some technical issues now. You may call us instead."
                );
            }
        })
        .catch((error) => {
            console.log(error);
            // Handle error by pushing a notification to the screen.
            // TODO: It would a good practice to make an API call to AND and tell
            // about the error so it can be resolved ASAP.
            toast.error(
                "There is a technical error occured. You may call us instead."
            );
        });
}

async function getMenProducts(): Promise<IManProduct[]> {
    const response: IManProduct[] = await axios
        .get(`${SERVER_LOCAL_URL}/product/get-men-products/`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(response);

    return response;
}

async function getWomenProducts(): Promise<IWomanProduct[]> {
    const response: IWomanProduct[] = await axios
        .get(`${SERVER_LOCAL_URL}/product/get-women-products/`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(response);

    return response;
}

export { getMenProducts, getWomenProducts, PostContactForm };
