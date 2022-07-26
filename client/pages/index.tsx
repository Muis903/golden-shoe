import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, Fragment } from "react";
import { IProduct } from "../types/types";
import { getMenProducts, getWomenProducts } from "../helpers/api";

import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

// This function came with Tailwind CSS template so we place it here.
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

// Using this template we can avoid an error that has relation to undefined.
// This error is partly specific to TypeScript to prevent future errors in production.
let defaultProduct: IProduct[] = [
    {
        id: 0,
        product: {
            pid: 0,
            name: "",
            href: "",
            price: "",
            rating: 0,
            reviewCount: 0,
            colors: [
                {
                    name: "",
                    imageSrc: "",
                    imageAlt: "",
                    class: "",
                    selectedClass: "",
                },
            ],
            sizes: [{ name: "", inStock: false }],
        },
    },
];

/**
 * Home page for Golden Show.
 *
 * Here user can interact with assortiment, choose a desired shoe and add it to cart to purchase it later.
 */
const Home: NextPage = () => {
    // Initialize men products as an array of IProduct type and assign default product.
    // This default product will be erased once we have fetched all women products from backend.
    const [menProducts, setMenProducts] = useState<IProduct[]>(defaultProduct);

    // Initialize women products as an array of IProduct type and assign default product.
    // This default product will be erased once we have fetched all women products from backend.
    const [womenProducts, setWomenProducts] = useState<IProduct[] | undefined>(
        defaultProduct
    );

    // Initialize show modal variable that is boolean. This variable has a mission
    // to show modal with the product description as well as with add to cart button.
    const [showModal, setShowModal] = useState<boolean>(false);

    // Initialize variable for selected color that is used by Tailwind CSS.
    // This variable is required and came with Tailwind CSS template.
    const [selectedColor, setSelectedColor] = useState();

    // Initialize variable for selected size that is used by Tailwind CSS.
    // This variable is required and came with Tailwind CSS template.
    const [selectedSize, setSelectedSize] = useState();

    // Initialize variable that saves a product (man's or woman's) by clicking a product card.
    // This variable we use to push a chozen product as IProduct object into the defined cart array.
    const [chozenProduct, setChozenProduct] = useState<IProduct>(
        defaultProduct[0]
    );

    // Initialize variable wherein all chozen products are saved to show all of them in cart section.
    // This variable is used to show all products that user has chozen to buy. So then it all will be
    // shown in Cart.
    let cart: IProduct[] = defaultProduct;

    // Initialize variable in order to control API workflow when we fetching (GET) all products from backend.
    // If do not initialize this variable then we will received infinite API (GET) calls which is not good.
    // When we have finished to fetch products the `fetchedProducts` variable will be set as true so we
    // prevent the above scenario.
    const [fetchedProducts, setFetchedProducts] = useState<boolean>(false);

    /**
     * Fetch all products in the form of JSON from backend as GET request.
     * Then save the products separately to each variable.
     */
    async function getProducts() {
        // Fetch. Making API call to backend.
        const menProducts = await getMenProducts();
        const womenProducts = await getWomenProducts();

        // Save it.
        setMenProducts(menProducts);
        setWomenProducts(womenProducts);
    }

    /**
     * Add a chozen product to the cart.
     * This function is beeing called when user clicks add to cart button in the modal.
     */
    function addProductToCart(product: IProduct) {
        // If product is not undefined then push it into the cart array.
        if (product !== undefined) {
            cart.push(product);
        }

        // For testing console log. Not required to run this log.
        console.log(cart);
    }

    // If page is refreshed we calling API to fetch products from backend.
    useEffect(() => {
        // Value of fetchedProducts variable must be false (as by default).
        if (fetchedProducts === false) {
            // Make API call to backend to get products only once.
            getProducts();
            // Set variable to true so we prevent infinite (unstoppable) calls.
            setFetchedProducts(true);
        }
    }, [fetchedProducts]); // Effect will only activate if the fetchedProducts value in the list change.

    // Return UI.
    return (
        <div>
            <Head>
                <title>Golden Shoe: Home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className="bg-black h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                Get free delivery on orders over £100
            </p>

            <div className="relative bg-[#f6f6f6] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                        Your online store of{" "}
                                    </span>
                                    <span className="block text-[#d77973] xl:inline">
                                        high-quality{" "}
                                    </span>
                                    <span className="block xl:inline">
                                        and{" "}
                                    </span>
                                    <span className="block text-[#d77973] xl:inline">
                                        affordable{" "}
                                    </span>
                                    <span className="block xl:inline">
                                        shoes
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Find your perfect pair of shoes here in all
                                    shapes & sizes | Free shipping* & returns at
                                    Golden Shoe Summer sale: save up to 70% on
                                    even more looks from your favorite brands
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#men"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#d5785a] hover:bg-[#fd6432] md:py-4 md:text-lg md:px-10"
                                        >
                                            {" "}
                                            Men shoes{" "}
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#women"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#d5785a] hover:bg-[#fd6432] md:py-4 md:text-lg md:px-10"
                                        >
                                            {" "}
                                            Women shoes{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/72f16fba-27bf-4c6b-9bd6-f0f23e785137/custom-nike-metcon-8-by-you.png"
                        alt="Golden Nike"
                    />
                </div>
            </div>

            {/* PRODUCTS */}
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    {/* MEN SHOES*/}
                    <br />
                    <h2
                        id="men"
                        className="text-2xl font-extrabold tracking-tight text-gray-900"
                    >
                        Men
                    </h2>
                    <br />
                    {menProducts ? (
                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {menProducts.map((product) => (
                                <a
                                    key={product.id}
                                    href={product.product.href}
                                    className="group"
                                    type="button"
                                    onClick={() => {
                                        setShowModal(true);
                                        setChozenProduct(product);
                                    }}
                                >
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={
                                                product.product.colors[0]
                                                    .imageSrc
                                            }
                                            alt={
                                                product.product.colors[0]
                                                    .imageAlt
                                            }
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        {product.product.name}
                                    </h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">
                                        {product.product.price}
                                    </p>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}

                    {/* WOMEN SHOES*/}
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2
                        id="women"
                        className="text-2xl font-extrabold tracking-tight text-gray-900"
                    >
                        Women
                    </h2>
                    <br />
                    {womenProducts ? (
                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {womenProducts.map((product) => (
                                <a
                                    key={product.id}
                                    href={product.product.href}
                                    className="group"
                                    onClick={() => {
                                        setShowModal(true);
                                        setChozenProduct(product);
                                    }}
                                >
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={
                                                product.product.colors[0]
                                                    .imageSrc
                                            }
                                            alt={
                                                product.product.colors[0]
                                                    .imageAlt
                                            }
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        {product.product.name}
                                    </h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">
                                        {product.product.price}
                                    </p>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>

            {/* SHOW MODAL */}
            {showModal ? (
                <Transition.Root show={showModal} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={setShowModal}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                        </Transition.Child>

                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                    enterTo="opacity-100 translate-y-0 md:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                    leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                >
                                    <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                                        <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                            <button
                                                type="button"
                                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>

                                            <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                                                <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                                    <img
                                                        src={
                                                            chozenProduct
                                                                .product
                                                                .colors[0]
                                                                .imageSrc
                                                        }
                                                        alt={
                                                            chozenProduct
                                                                .product
                                                                .colors[0]
                                                                .imageAlt
                                                        }
                                                        className="object-center object-cover"
                                                    />
                                                </div>
                                                <div className="sm:col-span-8 lg:col-span-7">
                                                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                                                        {
                                                            chozenProduct
                                                                .product.name
                                                        }
                                                    </h2>

                                                    <section
                                                        aria-labelledby="information-heading"
                                                        className="mt-2"
                                                    >
                                                        <h3
                                                            id="information-heading"
                                                            className="sr-only"
                                                        >
                                                            Product information
                                                        </h3>

                                                        <p className="text-2xl text-gray-900">
                                                            {
                                                                chozenProduct
                                                                    .product
                                                                    .price
                                                            }
                                                        </p>

                                                        {/* Reviews */}
                                                        <div className="mt-6">
                                                            <h4 className="sr-only">
                                                                Reviews
                                                            </h4>
                                                            <div className="flex items-center">
                                                                <div className="flex items-center">
                                                                    {[
                                                                        0, 1, 2,
                                                                        3, 4,
                                                                    ].map(
                                                                        (
                                                                            rating
                                                                        ) => (
                                                                            <StarIcon
                                                                                key={
                                                                                    rating
                                                                                }
                                                                                className={classNames(
                                                                                    chozenProduct
                                                                                        .product
                                                                                        .rating >
                                                                                        rating
                                                                                        ? "text-gray-900"
                                                                                        : "text-gray-200",
                                                                                    "h-5 w-5 flex-shrink-0"
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        )
                                                                    )}
                                                                </div>
                                                                <p className="sr-only">
                                                                    {
                                                                        chozenProduct
                                                                            .product
                                                                            .rating
                                                                    }{" "}
                                                                    out of 5
                                                                    stars
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="ml-3 text-sm font-medium text-[#d5785a] hover:text-[#fd6432]"
                                                                >
                                                                    {
                                                                        chozenProduct
                                                                            .product
                                                                            .reviewCount
                                                                    }{" "}
                                                                    reviews
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </section>

                                                    <section
                                                        aria-labelledby="options-heading"
                                                        className="mt-10"
                                                    >
                                                        <h3
                                                            id="options-heading"
                                                            className="sr-only"
                                                        >
                                                            Product options
                                                        </h3>

                                                        <form>
                                                            {/* Colors */}
                                                            <div>
                                                                <h4 className="text-sm text-gray-900 font-medium">
                                                                    Color
                                                                </h4>

                                                                <RadioGroup
                                                                    value={
                                                                        selectedColor
                                                                    }
                                                                    onChange={
                                                                        setSelectedColor
                                                                    }
                                                                    className="mt-4"
                                                                >
                                                                    <RadioGroup.Label className="sr-only">
                                                                        Choose a
                                                                        color
                                                                    </RadioGroup.Label>
                                                                    <span className="flex items-center space-x-3">
                                                                        {chozenProduct.product.colors.map(
                                                                            (
                                                                                color
                                                                            ) => (
                                                                                <RadioGroup.Option
                                                                                    key={
                                                                                        color.name
                                                                                    }
                                                                                    value={
                                                                                        color
                                                                                    }
                                                                                    className={({
                                                                                        active,
                                                                                        checked,
                                                                                    }) =>
                                                                                        classNames(
                                                                                            color.selectedClass,
                                                                                            active &&
                                                                                                checked
                                                                                                ? "ring ring-offset-1"
                                                                                                : "",
                                                                                            !active &&
                                                                                                checked
                                                                                                ? "ring-2"
                                                                                                : "",
                                                                                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <RadioGroup.Label
                                                                                        as="span"
                                                                                        className="sr-only"
                                                                                    >
                                                                                        {
                                                                                            color.name
                                                                                        }
                                                                                    </RadioGroup.Label>
                                                                                    <span
                                                                                        aria-hidden="true"
                                                                                        className={classNames(
                                                                                            color.class,
                                                                                            "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                                                                        )}
                                                                                    />
                                                                                </RadioGroup.Option>
                                                                            )
                                                                        )}
                                                                    </span>
                                                                </RadioGroup>
                                                            </div>

                                                            {/* Sizes */}
                                                            <div className="mt-10">
                                                                <div className="flex items-center justify-between">
                                                                    <h4 className="text-sm text-gray-900 font-medium">
                                                                        Size
                                                                    </h4>
                                                                    <a
                                                                        href="#"
                                                                        className="text-sm font-medium text-[#d5785a] hover:text-[#fd6432]"
                                                                    >
                                                                        Size
                                                                        guide
                                                                    </a>
                                                                </div>

                                                                <RadioGroup
                                                                    value={
                                                                        selectedSize
                                                                    }
                                                                    onChange={
                                                                        setSelectedSize
                                                                    }
                                                                    className="mt-4"
                                                                >
                                                                    <RadioGroup.Label className="sr-only">
                                                                        Choose a
                                                                        size
                                                                    </RadioGroup.Label>
                                                                    <div className="grid grid-cols-4 gap-4">
                                                                        {chozenProduct.product.sizes.map(
                                                                            (
                                                                                size
                                                                            ) => (
                                                                                <RadioGroup.Option
                                                                                    key={
                                                                                        size.name
                                                                                    }
                                                                                    value={
                                                                                        size
                                                                                    }
                                                                                    disabled={
                                                                                        !size.inStock
                                                                                    }
                                                                                    className={({
                                                                                        active,
                                                                                    }) =>
                                                                                        classNames(
                                                                                            size.inStock
                                                                                                ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                                                                                : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                                                                            active
                                                                                                ? "ring-2 ring-indigo-500"
                                                                                                : "",
                                                                                            "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {({
                                                                                        active,
                                                                                        checked,
                                                                                    }) => (
                                                                                        <>
                                                                                            <RadioGroup.Label as="span">
                                                                                                {
                                                                                                    size.name
                                                                                                }
                                                                                            </RadioGroup.Label>
                                                                                            {size.inStock ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active
                                                                                                            ? "border"
                                                                                                            : "border-2",
                                                                                                        checked
                                                                                                            ? "border-indigo-500"
                                                                                                            : "border-transparent",
                                                                                                        "absolute -inset-px rounded-md pointer-events-none"
                                                                                                    )}
                                                                                                    aria-hidden="true"
                                                                                                />
                                                                                            ) : (
                                                                                                <span
                                                                                                    aria-hidden="true"
                                                                                                    className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                                                                        viewBox="0 0 100 100"
                                                                                                        preserveAspectRatio="none"
                                                                                                        stroke="currentColor"
                                                                                                    >
                                                                                                        <line
                                                                                                            x1={
                                                                                                                0
                                                                                                            }
                                                                                                            y1={
                                                                                                                100
                                                                                                            }
                                                                                                            x2={
                                                                                                                100
                                                                                                            }
                                                                                                            y2={
                                                                                                                0
                                                                                                            }
                                                                                                            vectorEffect="non-scaling-stroke"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </RadioGroup.Option>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </RadioGroup>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                className="mt-6 w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white bg-[#d5785a] hover:bg-[#fd6432] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                onClick={() =>
                                                                    addProductToCart(
                                                                        chozenProduct
                                                                    )
                                                                }
                                                            >
                                                                Add to bag
                                                            </button>
                                                        </form>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            ) : null}
        </div>
    );
};

export default Home;
