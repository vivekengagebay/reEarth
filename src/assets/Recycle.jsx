import { useContext, useEffect, useState } from "react";
import { GoEarth } from "../utilis";
import { getReq } from "../Request";

function Recycle() {
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
  const parentContext = useContext(GoEarth);
  const [collectionData, setCollectionData] = useState(initialcollectiondata);
  const [newWaste, setNewWaste] = useState({
    id: 98760987,
    productCategory: "",
    productType: "",
    quantity: "",
    weight: "",
    addToRecylce: false,
  });
  const [formErrors, setFormErrors] = useState(true);


  async function fetchData() {
    // You can await here
    try {
      const response = await getReq(
        `http://localhost:8081/reearth/v1/getRecycleData?status=requested`
      );
      console.log(response, "response");
      if(!response.data) {
        return;
      }
      const addCountry = response.data.result;
      // addCountry["country"] = "india";
      setCollectionData( [...addCountry ]);
    } catch (err) {
      console.log(err, "err");
    }

    // ...
  }

  useEffect(() => {
fetchData()
  },[])

  function editCollectionData(value, index, key) {
    const updateCollectionData = collectionData;
    updateCollectionData[index][key] = value;
    setCollectionData([...updateCollectionData]);
  }

  function handleDelete(index) {
    const updateCollectionData = collectionData;
    updateCollectionData.splice(index, 1);
    setCollectionData([...updateCollectionData]);
  }

  const emptyWaste = {
    id: 98760987,
    productCategory: "",
    productType: "",
    quantity: "",
    weight: "",
    addToRecylce: false,
  };

  function addWaste(value, key) {
    console.log(value, "value", key);
    const updateCollectionData = newWaste;
    updateCollectionData[key] = value;
    setNewWaste({ ...updateCollectionData });
    if (
      newWaste.productCategory == emptyWaste.productCategory &&
      newWaste.productType == emptyWaste.productType &&
      newWaste.quantity == emptyWaste.quantity &&
      newWaste.weight == emptyWaste.weight
    ) {
      setFormErrors(true);
    }
    if (
      newWaste.productCategory !== emptyWaste.productCategory &&
      newWaste.productType !== emptyWaste.productType &&
      newWaste.quantity !== emptyWaste.quantity &&
      newWaste.weight !== emptyWaste.weight
    ) {
      setFormErrors(false);
    }
    console.log(formErrors, "formErrors");
  }

  function addWasteButton(e) {
    e.preventDefault();
    const updateCollectionData = collectionData;
    updateCollectionData.push(newWaste);
    setCollectionData([...updateCollectionData]);
  }

  return (
    <div>
      <div
        class="modal fade"
        id={`addWaste`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Collection
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="text-start">
                <div className="text-center"></div>
                <div className="form-group">
                  <label className="form-label">Product category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="text"
                    placeholder="Product category"
                    required="required"
                    value={newWaste.productCategory}
                    onChange={(e) =>
                      addWaste(e.target.value, "productCategory")
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Product type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="text"
                    placeholder="Product type"
                    required="required"
                    value={newWaste.productType}
                    onChange={(e) => addWaste(e.target.value, "productType")}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    name="text"
                    placeholder="Quantity"
                    required="required"
                    value={newWaste.quantity}
                    onChange={(e) => addWaste(e.target.value, "quantity")}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Weight (in kgs)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="text"
                    placeholder="Weight (in kgs)"
                    required="required"
                    value={newWaste.weight}
                    onChange={(e) => addWaste(e.target.value, "weight")}
                  />
                </div>
                <button
                  className="btn btn-success w-100"
                  onClick={(e) => addWasteButton(e)}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  disabled={formErrors ? "disabled" : ""}
                >
                  Add Waste
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="display-7 text-start p-3 pb-2 ">Recycle</h5>
        <button
          className="rounded btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={`#addWaste`}
        >
          Add plastic
        </button>
      </div>

      <div
        class="table-responsive table-scroll p-3 pt-0"
        data-mdb-perfect-scrollbar="true"
        style={{ position: "relative" }}
      >
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
            {collectionData.map((collectionDetails, index) => {
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Recycle;
