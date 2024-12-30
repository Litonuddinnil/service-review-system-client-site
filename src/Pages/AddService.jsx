 
import Swal from "sweetalert2";
import useAuth from "../CustomHook/useAuth";
import { Helmet } from "react-helmet-async"; 
 
const AddService = () => {
    const { user } = useAuth() 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log([...formData.entries()]);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
        // Here you can add code to save the service to your database
        fetch('https://service-review-system-server-site.vercel.app/services', {
            method: "POST",
            headers: {
              "content-type":"application/json",
            },
            body: JSON.stringify(formObject),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Good Job", 
                  text:"Your work has been saved",
                }); 
              }
            });
    };
    
    return (
        <div className="container mx-auto py-10 px-5 md:px-10">
            <Helmet><title>Home | AddService</title></Helmet>
            <h1 className="text-3xl font-bold text-center mb-10">Add a New Service</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
                
                {/* Service Image */}
                <div className="form-control">
                    <label className="label" htmlFor="image">
                        <span className="label-text">Service Image</span>
                    </label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Service Title */}
                <div className="form-control">
                    <label className="label" htmlFor="title">
                        <span className="label-text">Service Title</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="input input-bordered w-full"
                        placeholder="Enter service title"
                        required
                    />
                </div>

                {/* Company Name */}
                <div className="form-control">
                    <label className="label" htmlFor="companyName">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="input input-bordered w-full"
                        placeholder="Enter company name"
                        required
                    />
                </div>

                {/* Website */}
                <div className="form-control">
                    <label className="label" htmlFor="website">
                        <span className="label-text">Website</span>
                    </label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        className="input input-bordered w-full"
                        placeholder="Enter company website"
                        required
                    />
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label" htmlFor="description">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter service description"
                        required
                    />
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="label" htmlFor="category">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="input input-bordered w-full"
                        placeholder="Enter service category"
                        required
                    />
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="label" htmlFor="price">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="input input-bordered w-full"
                        placeholder="Enter service price"
                        required
                    />
                </div> 
                <div className="form-control">
                    <label className="label" htmlFor="addedDate">
                        <span className="label-text">Added Date</span>
                    </label>
                    <input
                        type="text"
                        id="addedDate"
                        name="addedDate"
                        value={new Date().toLocaleDateString()}
                        className="input input-bordered w-full"
                        readOnly
                        required
                    />
                </div>

                {/* User Email (From Auth) */}
                <div className="form-control">
                    <label className="label" htmlFor="userEmail">
                        <span className="label-text">User Email</span>
                    </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="email"
                        value={user?.email || ""}
                        className="input input-bordered w-full"
                        readOnly
                        required
                    />
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-success text-balance text-lg w-full">
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;

 