import "../styles/Rewards.scss"
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getReq } from "../Request";

function Rewards() {
    const initialRewardDetails = {
        username: "mannevivek123456",
        wallet: 100,
        coins: 5000,
        totalcoins: 5000
    }
    const [rewardsDetails, setRewardsDetails] = useState(initialRewardDetails)
    const [redeemCoins, setRedeemCoins] = useState(0)
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

            setRewardsDetails({ ...response.data });
        } catch (err) {
            console.log(err, "err");
        }

        // ...
    }

    useEffect(() => {
        fetchData()
    }, []);

    function redeemCoinsToCash() {
        const updateRewardDetails = rewardsDetails
        updateRewardDetails.coins = updateRewardDetails.coins - redeemCoins
        updateRewardDetails.wallet = (redeemCoins / 100) + updateRewardDetails.wallet
        setRewardsDetails({ ...updateRewardDetails })
    }

    return (
        <Layout>
            <div className="collection-page-container ">
                <div className="container p-lg-5 p-3">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h6 className="display-5 text-green mb-0 py-3">Earnings</h6>
                        </div>
                        <div className="col-6 text-end">
                            <a href="/shop"> <button className="btn-success btn">Shop with wallet</button></a>
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
                                            <h2 className="display-2 fw-bold mb-0 text-green">{rewardsDetails.coins}<span className="display-7"></span></h2>
                                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#redeemModal">Redeem coins</button>




                                            <div class="modal fade" id="redeemModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-lg modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Redeem coins</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div className="display-7 text-start">
                                                                <p>1000 planet coins are equivalent to 10 rupees.</p>
                                                                <p>You need a minimum of 1000 coins to redeem them for cash.</p>
                                                            </div>
                                                            <div className="row p-3">
                                                                <div className="col-6 display-7 fw-bold text-start">
                                                                    My planet coins : {rewardsDetails.coins}
                                                                </div>
                                                                <div className="col-6 display-7 fw-bold text-end">
                                                                    My wallet : {rewardsDetails.wallet}
                                                                </div>
                                                                <div className="form-group mt-3">
                                                                    {/* <label className="form-label"></label> */}
                                                                    <input type="number" className="form-control" name="planet coins" placeholder="Redeem planet coins" required="required" value={redeemCoins} onChange={(e) => setRedeemCoins(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" disabled={rewardsDetails.coins < 1000} onClick={() => redeemCoinsToCash()} class="btn btn-primary">Redeem coins</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24" fill="none">

                                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                                                </svg> */}
                                                <svg xmlns="http://www.w3.org/2000/svg"  width="80px" height="80px" viewBox="0 0 30 30"><path d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z" /></svg>
                                            </span>
                                        </div>
                                        <div className="earning-wallet-container ms-4">
                                            <h4 className="my-wallet mb-0">My wallet</h4>
                                            <h2 className="display-2 fw-bold mb-0">{rewardsDetails.wallet}<span className="display-7"></span></h2>
                                        </div>
                                    </div>
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