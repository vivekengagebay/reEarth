import Layout from "./Layout";

import "../styles/collection.scss"
import Recycle from "../assets/Recycle";
function Collection() {
    return (
        // <div>
        <Layout>
            <div className="collection-page-container ">
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-12 px-1">
                            <div className="card border-0 mb-3 text-start text-green">
                                <div className="card-body">
                                    <p className="display-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 px-1">
                            <div className="card tabs-card border-0 h-100">
                                <div className="card-body">
                                    <div class="d-flex align-items-start">
                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <button class="nav-link active" id="recycle-tab" data-bs-toggle="pill" data-bs-target="#recycle" type="button" role="tab" aria-controls="recycle" aria-selected="true">Recycle</button>
                                            <button class="nav-link" id="recycle-history-tab" data-bs-toggle="pill" data-bs-target="#recycle-history" type="button" role="tab" aria-controls="recycle-history" aria-selected="false">Recycle histroy</button>
                                            {/* <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button> */}
                                            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Track Recycle</button>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-9 px-1">
                            <div className="card h-100 border-0">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="recycle" role="tabpanel" aria-labelledby="recycle-tab">
                                        <Recycle />
                                    </div>
                                    <div class="tab-pane fade" id="recycle-history" role="tabpanel" aria-labelledby="recycle-history-tab">Recycle history</div>
                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                        track
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </Layout>
        // </div>
    );
}

export default Collection;