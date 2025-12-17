import { Link } from "react-router-dom"


function LandingPage() {
    return (
        <>
            <section style={{ width: "100%", overflow: "hidden", height: "500px", backgroundImage: "url('https://img.freepik.com/free-photo/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume_482257-125564.jpg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <div className="row mt-5">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 shadow border py-5 rounded my-5 text-center bg-white">
                        <h4>Desingned to get hired</h4>
                        <p>Your Skills, your story, your next job- all in one</p>
                        <Link to={"/resume"}><button className="btn btn-primary mt-2">Make Your Resume</button></Link>
                    </div>
                    <div className="col-12 col-md-4"></div>

                </div>
            </section>
            <section className="p-5">
                <h1 className="text-center">Tools</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>Resume</h4>
                        <p>Create unlimited  new resume and easil edit them afterwords</p>

                        <h4>Cover Latters</h4>
                        <p>Easily wrte proffessional cover Letter</p>

                        <h4>Jobs</h4>
                        <p>Automaticalliy receive new and relevant jo postings</p>

                        <h4>Application</h4>
                        <p>Effortlessly manage track your job applicatin in an organized manner</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="text text-center" style={{ width: "380px" }} src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" alt="" />
                    </div>
                </div>

            </section>
            <section style={{ width: "100%", overflow: "hidden", height: "500px", backgroundImage: "url('https://img.freepik.com/free-photo/resume-application-employment-form-concept_53876-125147.jpg?semt=ais_hybrid&w=740&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>

            </section>
            <section className="p-5">
                <h1 className="text-center">Testimony</h1>
                <div className="row">
                    <div className="col-12 col-md-6 mt-5">
                        <h2>Trusted by professinals worldwide.</h2>




                        <p className="mt-5">At LiveCareer, we don’t just help you create résumés — we help you land the job.
                            Whether you’re a seasoned professional or just starting out, our tools are designed to get results.</p>

                        <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

                        <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>

                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <div className="row " style={{ justifyContent: "center" }}>
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "50%" }} src="https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://media.istockphoto.com/id/1398800679/photo/closeup-portrait-of-mixed-race-womans-face-and-eyes-looking-forward-and-into-the-camera-zoom.jpg?s=612x612&w=0&k=20&c=XyrQ0JveewRUgoE-KpPR9yiKW8x2QPTdFS3PYfE4Cj8=" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://www.shutterstock.com/image-photo/happy-handsome-young-hispanic-model-260nw-2510267657.jpghttps://www.shutterstock.com/image-photo/close-headshot-portrait-happy-middle-260nw-2423464835.jpg" alt="" />
                        </div>
                        <div className="row p-2" style={{ justifyContent: "center" }}>
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://thumbs.dreamstime.com/b/horizontal-close-up-portrait-young-bearded-stylish-business-man-blue-shirt-looking-camera-horizontal-close-up-portrait-105161754.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://www.shutterstock.com/image-photo/closeup-portrait-beautiful-young-businesswoman-260nw-2140876097.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://www.shutterstock.com/image-photo/head-shot-happy-30s-beautiful-260nw-2392582823.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "50%" }} src="https://www.shutterstock.com/image-photo/happy-middle-aged-50-years-260nw-2454682685.jpg" alt="" />
                        </div>
                        <div className="row p-2" style={{ justifyContent: "center" }}>
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "50%" }} src="https://www.shutterstock.com/image-photo/head-shot-portrait-serious-beautiful-260nw-2473263277.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://www.shutterstock.com/image-photo/smiling-cheerful-young-adult-african-260nw-1850821510.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://www.shutterstock.com/image-photo/close-photo-portrait-young-man-260nw-2548200399.jpg" alt="" />
                            <img className="text text-center" style={{ width: "150px", height: "150px", borderRadius: "18%" }} src="https://www.shutterstock.com/image-photo/headshot-close-face-portrait-young-600nw-2510015507.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default LandingPage