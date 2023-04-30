import "../styles/Rewards.scss"
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getReq } from "../Request";

function Rewards() {
    const [rewardsDetails, setRewardsDetails] = useState({})
    async function fetchData() {


        // You can await here
        try {
            const response = await getReq(
                `http://localhost:8082/reearth/v1/getWalletData?username=${localStorage.getItem(
                    "username"
                )}`
            );
            console.log(response, "response");
            // const addCountry = response.data.result;

            setRewardsDetails({ ...response.data.result });
        } catch (err) {
            console.log(err, "err");
        }

        // ...
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            <div className="collection-page-container ">
                <div className="container p-3">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h6 className="display-5 text-green">Earnings</h6>
                        </div>
                        <div className="col-6 text-end">
                            <button className="btn-green btn"><a href="/shop"></a>Shop</button>
                        </div>
                        <div className="col-12 px-1">
                            <div className="card border-0 mb-3 text-start text-green p-3 total-earning-points">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="earning-icon-container btn-success">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24" fill="none">

                                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                                                </svg>
                                            </span>
                                        </div>
                                        <div className="earning-wallet-container ms-4">
                                            <h4 className="my-wallet mb-0">Total planet coins earned</h4>
                                            <h2 className="display-2 fw-bold mb-0">{rewardsDetails.totalcoins}<span className="display-7"></span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 px-1">
                            <div className="card tabs-card border-0 h-100 my-planet-coins  p-3">
                                <div className="shape-rounded-circle"></div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="earning-icon-container btn-success">
                                            <span>
                                                <svg height="80px" width="80px" version="1.1" id="Layer_1" viewBox="0 0 512 512" >
                                                    <path style={{ fill: "#FFDB2D" }} d="M512,153.6v204.8l0,0c0,47.128-114.615,85.333-256,85.333S0,405.528,0,358.4V153.6" />
                                                    <path style={{ fill: "#FFAF33" }} d="M256,153.6v290.133c141.385,0,256-38.205,256-85.333V153.6H256z" />
                                                    <ellipse style={{ fill: "#FFEA8A" }} cx="256" cy="153.6" rx="256" ry="85.333" />
                                                    <path style={{ fill: "#FFDB2D" }} d="M256,68.267v170.667c141.385,0,256-38.205,256-85.333S397.385,68.267,256,68.267z" />
                                                    <path style={{ fill: "#FFAF33" }} d="M256,315.733c-141.385,0-256-38.205-256-85.333v81.671c15.087,9.827,34.336,19.089,58.79,27.242  c53.436,17.811,123.472,27.621,197.21,27.621s143.775-9.81,197.21-27.621c24.455-8.151,43.704-17.415,58.79-27.242V230.4  C512,277.528,397.385,315.733,256,315.733z" />
                                                    <path style={{ fill: "#FF9408" }} d="M256,315.733v51.2c73.738,0,143.775-9.81,197.21-27.621c24.455-8.151,43.704-17.415,58.79-27.242  V230.4C512,277.528,397.385,315.733,256,315.733z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="earning-wallet-container ms-4">
                                            <h4 className="my-wallet mb-0 text-green">My planet coins</h4>
                                            <h2 className="display-2 fw-bold mb-0 text-green">5000<span className="display-7"></span></h2>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-6 px-1">
                            <div className="card h-100 border-0 my-wallet-cash p-3">
                                <div className="shape-rounded-circle"></div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="earning-icon-container btn-success">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24" fill="none">

                                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                                                </svg>
                                            </span>
                                        </div>
                                        <div className="earning-wallet-container ms-4">
                                            <h4 className="my-wallet mb-0">My wallet</h4>
                                            <h2 className="display-2 fw-bold mb-0">50<span className="display-7"></span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <table class="table mb-0 text-start collection-table">
                                        <thead className="text-green">
                                            <tr className="text-uppercase">
                                                <th scope="col">Product category</th>
                                                <th scope="col">Product type</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Weight</th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {collectionData.map((collectionDetails, index) => {
                                            return (
                                                <>
                                                    <tr style={{ verticalAlign: "middle" }}>
                                                        <td>{collectionDetails.productCategory}</td>
                                                        <td>{collectionDetails.productType}</td>
                                                        <td>{collectionDetails.quantity}</td>
                                                        <td>{collectionDetails.weight}</td>
                                                        <td>
                                                            {collectionDetails.addToRecylce ? (
                                                                <button className="badge rounded-pill btn-success display-7">
                                                                    Recycled
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={() =>
                                                                        editCollectionData(true, index, "addToRecylce")
                                                                    }
                                                                    className="badge rounded-pill btn-success-outline display-7"
                                                                >
                                                                    Add to recycle
                                                                </button>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <div className="d-flex justify-content-end">
                                                                    <span
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target={`#exampleModal-${index}`}
                                                                        className="px-3"
                                                                    >
                                                                        <svg
                                                                            width={20}
                                                                            height={20}
                                                                            version="1.1"
                                                                            id="Layer_1"
                                                                            x="0px"
                                                                            y="0px"
                                                                            viewBox="0 0 50 50"
                                                                        >
                                                                            <g>
                                                                                <path
                                                                                    class="st0"
                                                                                    d="M6,40.5c0.1,0,0.2,0,0.3,0l9.3-2.9c0.1,0,0.3-0.1,0.4-0.2l21.8-21.8c2.1-2.1,2.1-5.6,0-7.7 c-2.1-2.1-5.6-2.1-7.7,0L8.2,29.6C8.1,29.7,8,29.8,8,30L5,39.3c-0.1,0.3,0,0.7,0.2,1C5.5,40.4,5.7,40.5,6,40.5z M31.4,9.1 c1.4-1.4,3.6-1.4,5,0c1.4,1.4,1.4,3.6,0,5l-2.6,2.6l-5-5L31.4,9.1z M9.7,30.8l17.7-17.7l5,5L14.8,35.8l-7.4,2.3L9.7,30.8z"
                                                                                ></path>
                                                                                <path
                                                                                    class="st0"
                                                                                    d="M44,41.9H6c-0.5,0-1,0.4-1,1s0.4,1,1,1H44c0.5,0,1-0.4,1-1S44.6,41.9,44,41.9z"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                    <span
                                                                        className="pe-3"
                                                                        onClick={() => handleDelete(index)}
                                                                    >
                                                                        <svg
                                                                            version="1.1"
                                                                            width={20}
                                                                            height={20}
                                                                            id="Layer_1"
                                                                            x="0px"
                                                                            y="0px"
                                                                            viewBox="0 0 50 50"
                                                                        >
                                                                            {" "}
                                                                            <g>
                                                                                {" "}
                                                                                <path
                                                                                    class="st0"
                                                                                    d="M15,45c-0.8-0.2-1.5-0.5-2-1c-0.8-0.8-1-1.7-1.1-2.7c-0.3-4-0.7-8.1-1-12.1c-0.3-3.3-0.5-6.6-0.8-9.9 c-0.1-0.8-0.1-1.6-0.2-2.4c0-0.1-0.1-0.3-0.3-0.4c-1.4-0.6-2.3-2-2.1-3.4c0.1-1.6,1.2-2.9,2.7-3.2c0.3-0.1,0.7-0.1,1-0.1 c1.7,0,3.4,0,5.2,0c0.1,0,0.3,0,0.5,0c0-0.4,0-0.7,0-1c0-2.1,1.5-3.6,3.7-3.6c3,0,6.1,0,9.1,0c2.1,0,3.6,1.5,3.7,3.6 c0,0.3,0,0.7,0,1c0.2,0,0.3,0,0.5,0c1.8,0,3.5,0,5.3,0c1.7,0,3,1,3.5,2.6s-0.3,3.4-1.9,4.1c-0.3,0.1-0.4,0.2-0.4,0.5 c-0.2,2.7-0.4,5.4-0.7,8.2c-0.2,2.7-0.4,5.4-0.7,8.1c-0.2,2.7-0.5,5.3-0.6,8c-0.1,1.3-0.4,2.5-1.6,3.2c-0.5,0.3-1,0.4-1.5,0.6 C28.3,45,21.7,45,15,45z M12.2,16.7c0.2,2.3,0.4,4.5,0.5,6.7c0.2,3,0.5,6,0.7,8.9c0.2,3,0.5,5.9,0.7,8.9c0.1,1,0.5,1.3,1.5,1.3 c6.2,0,12.4,0,18.5,0c0.1,0,0.2,0,0.4,0c0.6,0,1-0.4,1.1-1c0-0.2,0.1-0.4,0.1-0.7c0.1-1.7,0.3-3.4,0.4-5.1c0.2-2.7,0.5-5.4,0.7-8.1 c0.2-2.4,0.4-4.7,0.6-7.1c0.1-1.3,0.2-2.6,0.3-3.9C29.3,16.7,20.7,16.7,12.2,16.7z M25,14.4c4.6,0,9.1,0,13.7,0c0.2,0,0.3,0,0.5,0 c0.8-0.1,1.3-0.9,0.9-1.7c-0.3-0.5-0.7-0.7-1.3-0.7c-9.2,0-18.4,0-27.7,0c-0.1,0-0.2,0-0.4,0c-0.6,0.1-1.1,0.6-1.1,1.2 c0,0.6,0.5,1.1,1.1,1.2c0.2,0,0.3,0,0.5,0C15.9,14.4,20.4,14.4,25,14.4z M30.9,9.7c0-0.4,0-0.7,0-1c0-0.9-0.5-1.3-1.3-1.3 c-1.1,0-2.2,0-3.3,0c-1.9,0-3.8,0-5.8,0c-0.7,0-1.2,0.4-1.3,1c-0.1,0.4,0,0.9,0,1.4C23.1,9.7,26.9,9.7,30.9,9.7z"
                                                                                ></path>{" "}
                                                                            </g>{" "}
                                                                        </svg>
                                                                    </span>
                                                                </div>

                                                                <div
                                                                    class="modal fade"
                                                                    id={`exampleModal-${index}`}
                                                                    tabindex="-1"
                                                                    aria-labelledby="exampleModalLabel"
                                                                    aria-hidden="true"
                                                                >
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header">
                                                                                <h5 class="modal-title" id="exampleModalLabel">
                                                                                    Edit Collection data
                                                                                </h5>
                                                                                <button
                                                                                    type="button"
                                                                                    class="btn-close"
                                                                                    data-bs-dismiss="modal"
                                                                                    aria-label="Close"
                                                                                ></button>
                                                                            </div>
                                                                            <div class="modal-body">
                                                                                <form>
                                                                                    <div className="text-center"></div>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">
                                                                                            Product category
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="text"
                                                                                            placeholder="Username"
                                                                                            required="required"
                                                                                            value={collectionDetails.productCategory}
                                                                                            onChange={(e) =>
                                                                                                editCollectionData(
                                                                                                    e.target.value,
                                                                                                    index,
                                                                                                    "productCategory"
                                                                                                )
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">
                                                                                            Product type
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="text"
                                                                                            placeholder="Username"
                                                                                            required="required"
                                                                                            value={collectionDetails.productType}
                                                                                            onChange={(e) =>
                                                                                                editCollectionData(
                                                                                                    e.target.value,
                                                                                                    index,
                                                                                                    "productType"
                                                                                                )
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">
                                                                                            Quantity
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="text"
                                                                                            placeholder="Username"
                                                                                            required="required"
                                                                                            value={collectionDetails.quantity}
                                                                                            onChange={(e) =>
                                                                                                editCollectionData(
                                                                                                    e.target.value,
                                                                                                    index,
                                                                                                    "quantity"
                                                                                                )
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">Weight</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            name="text"
                                                                                            placeholder="Username"
                                                                                            required="required"
                                                                                            value={collectionDetails.weight}
                                                                                            onChange={(e) =>
                                                                                                editCollectionData(
                                                                                                    e.target.value,
                                                                                                    index,
                                                                                                    "weight"
                                                                                                )
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })} */}

                                            <tr style={{ verticalAlign: "middle" }}>
                                                {/* <td>{collectionDetails.productCategory}</td>
                                            <td>{collectionDetails.productType}</td>
                                            <td>{collectionDetails.quantity}</td>
                                            <td>{collectionDetails.weight}</td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Rewards;