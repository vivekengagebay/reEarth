import { useEffect, useState } from "react";
import { getReq } from "../Request";

function Track() {
    const initialcollectiondata = [
        {
            id: 1234567,
            productCategory: "plastic",
            productType: "petbottle",
            quantity: "10",
            weight: "5",
            addToRecylce: true,
        },
        {
            id: 123457,
            productCategory: "plastic",
            productType: "tupperware",
            quantity: "300",
            weight: "15",
            addToRecylce: false,
        },
        {
            id: 123467,
            productCategory: "plastic",
            productType: "chair",
            quantity: "120",
            weight: "20",
            addToRecylce: true,
        },
        {
            id: 123456709,
            productCategory: "plastic",
            productType: "table",
            quantity: "12",
            weight: "200",
            addToRecylce: false,
        },
        {
            id: 98760987,
            productCategory: "plastic",
            productType: "buckets",
            quantity: "40",
            weight: "40",
            addToRecylce: true,
        },
    ];
    const [collectionData, setCollectionData] = useState();
    async function fetchData() {
        // You can await here
        try {
            const response = await getReq(
                `http://localhost:8081/reearth/v1/getRecycleData?status=recycled`
            );
            console.log(response, "response");
            const addCountry = response.data.result;
            if(!response.data){
                return;
            }
            // addCountry["country"] = "india";
            setCollectionData([...addCountry]);
        } catch (err) {
            console.log(err, "err");
        }

        // ...
    }

    useEffect(() => {
        fetchData();
    }, []);


    return ( 
        <div>
            <h5 className="display-7 text-start p-3 pb-2 ">Recycle history</h5>
            <div className="table-responsive table-scroll p-3 pt-0">
                <table class="table mb-0 text-start collection-table">
                    <thead className="text-green">
                        <tr className="text-uppercase">
                            <th scope="col">Product category</th>
                            <th scope="col">Product type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Weight</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {collectionData && collectionData.map((collectionDetails, index) => {
                            return (
                                <>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <td>{collectionDetails.productCategory}</td>
                                        <td>{collectionDetails.productType}</td>
                                        <td>{collectionDetails.quantity}</td>
                                        <td>{collectionDetails.weight}</td>
                                        <td>
                                            <button className="badge rounded-pill btn-success display-7">
                                                Recycled
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Track;