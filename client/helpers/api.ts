import axios from "axios";
import { SERVER_LOCAL_URL } from "../server-config";
import { IContactForm } from "../types/types";

/**
 * Send POST request to the server to handle contact form information.
 *
 * Once the request successfully received by the server it processes the
 * information and sends it as an e-mail through SMTP to receipient.
 *
 * @param _data Object that is passed into in the type of `IContactForm`.
 */
export default async function PostContactForm(_data: IContactForm) {
    await axios({
        method: "post",
        url: `${SERVER_LOCAL_URL}/send-contact-form/`,
        data: _data,
        headers: {
            //    "X-CSRFToken": `${Cookies.get("csrftoken")}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    // Uncomment below and comment above if you would like to use `fetch`
    // instead of `axios`.

    //const response = await fetch(`${SERVER_LOCAL_URL}/send-email`, {
    //    method: "POST", // *GET, POST, PUT, DELETE, etc.
    //    mode: "cors", // no-cors, *cors, same-origin
    //    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //    credentials: "same-origin", // include, *same-origin, omit
    //    headers: {
    //        "Content-Type": "application json",
    //        // 'Content-Type': 'application/x-www-form-urlencoded',
    //    },
    //    redirect: "follow", // manual, *follow, error
    //    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //    body: JSON.stringify(_data), //JSON.stringify(data), // body data type must match "Content-Type" header
    //});
    //console.log(response.json());
}
