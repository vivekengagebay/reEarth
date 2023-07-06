import { useState } from "react";
import Layout from "../components/Layout";

function Shop() {
    const initialProducts = [
        {
            productname: "DENIM LAPTOP SLEEVE",
            image: "https://sphotoss.s3.us-east-2.amazonaws.com/Laptop_sleeve_1.webp",
            description: "Stylish and eco-friendly, this laptop sleeve can be both formal and casual. A foam padding and a waterproof lining is provided on the inside and it comes with an adjustable denim fabric handle that is detachable. It can easily hold a 15-inch laptop and is sure to be your ideal companion to office or college.",
            cost: "1400",
            placeorder : false
        },
        {
            productname: "PHOTO FRAME",
            image: "https://sphotoss.s3.us-east-2.amazonaws.com/Photo_frame_side.webp",
            description: "Best photo ",
            cost: "500",
         placeorder: false

        },
        {
            productname: "DIARY",
            image: "https://sphotoss.s3.us-east-2.amazonaws.com/hardbound-diary-a5.webp",
            description: "hardbound-diary",
            cost: "200",
            placeorder: false
        },
        {
            productname: "PHOTO FRAME",
            image: "https://sphotoss.s3.us-east-2.amazonaws.com/ND-ReLiveKnitLoafer-JetBlack-_WebOptimized_a_1024x.webp",
            description: "Best photo ",
            cost: true,
            placeorder: false

        },
    ]
    const [products, setProducts] = useState(initialProducts)

    function orderNow(index) {
        const updateProduct = products 
        updateProduct[index].placeorder = true
        setProducts([...updateProduct]) 
    }
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">

                    <section style={{ backgroundColor: "#eee" }}>
                        <div className="container py-5">

                            {products.map((product, index) => {
                                return(
                                    <div className="row justify-content-center mb-3">
                                        <div className="col-md-12 col-xl-10">
                                            <div className="card shadow-0 border rounded-3">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="w-100"
                                                                />
                                                                <a href="#!">
                                                                    <div className="hover-overlay">
                                                                        <div
                                                                            className="mask"
                                                                            style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                                                                        />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6 col-xl-6 text-start">
                                                            <h5>{product.productname}</h5>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div className="text-danger mb-1 me-2">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                </div>
                                                                <span>310</span>
                                                            </div>
                                                            <div className="mt-1 mb-0 text-muted small">
                                                                <span>100% cotton</span>
                                                                <span className="text-primary"> • </span>
                                                                <span>Light weight</span>
                                                                <span className="text-primary"> • </span>
                                                                <span>
                                                                    Best finish
                                                                    <br />
                                                                </span>
                                                            </div>
                                                            <div className="mb-2 text-muted small">
                                                                <span>Unique design</span>
                                                                <span className="text-primary"> • </span>
                                                                <span>For men</span>
                                                                <span className="text-primary"> • </span>
                                                                <span>
                                                                    Casual
                                                                    <br />
                                                                </span>
                                                            </div>
                                                            <p className="text-truncate mb-4 mb-md-0">
                                                              {product.description}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                                            <div className="d-flex flex-row align-items-center mb-1">
                                                                <h4 className="mb-1 me-1 fw-bold">{product.cost} <small>rs</small></h4>
                                                                {/* <span className="text-danger">
                                                                    <s>$20.99</s>
                                                                </span> */}
                                                            </div>
                                                            <h6 className="text-success text-start">Free shipping</h6>
                                                            <div className="d-flex flex-column mt-4">
                                                                {product.placeorder ? (
                                                                    <div className="text-green display-7">
                                                                        Order placed successfully
                                                                        </div>
                                                                ) : (<button className="btn btn-primary btn-sm" type="button" onClick={() => orderNow(index)}>
                                                                    Order now
                                                                </button>)}
                                                                
                                                                {/* <button
                                                                    className="btn btn-outline-primary btn-sm mt-2"
                                                                    type="button"
                                                                >
                                                                    Add to wishlist
                                                                </button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            
                          
                           

                        </div>
                    </section>


                </div>
            </div>
        </Layout>
    );
}

export default Shop;