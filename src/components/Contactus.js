import Layout from "./Layout";

function Contactus() {
    return (
        <Layout>
            <section
                className="features5 cid-t9FkMMmfH8"
                id="afeatures5-4"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="display-5">Contact us</h5>
                            <p className="display-7">
                                Get in touch with us! We welcome your questions, feedback, and collaboration opportunities. Reach out using the provided contact information or connect with us on social media.
                                We value your input and look forward to hearing from you soon.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <iframe
                    width={540}
                    height={305}
                    src="https://4341cdcb.sibforms.com/serve/MUIEABMtfvhMFEWHOyYZU3KWoac7L5AWS4N7jKJHQZAjEGhBS6tLicc3XG4FE-FkWIatm_H5wgpFlvJj5SIexyzQq-vJCPOCv-6XS7epExBUC0ORgjfKxk_2K4UBTIQPbk4A0oPI79l2WTGFH6f_HJENzj_MrmV5eaSKHwgs82AVQ1iN6Kzn5Mq0ewb0WN3Nx2J5hQSB0QIEVgIB"
                    frameBorder={0}
                    scrolling="auto"
                    allowFullScreen=""
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "100%"
                    }}
                />
            </section>
        </Layout>
    );
}

export default Contactus;