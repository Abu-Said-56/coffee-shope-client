import Swal from 'sweetalert2'


const AddElement = () => {
    const handleAddElement = event =>{
        event.preventDefault();
        const form =  event.target;
        const name = form.name.value;
        const chief = form.chief.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const categori = form.categori.value;
        const detailed = form.detailed.value;
        const photo = form.photo.value;
        const newCoffee = {name,chief,supplier,test,categori,detailed,photo}
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5001/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="mx-auto text-center  bg-[#F4F3F0]">
            <h3 className="text-3xl font-bold text-center">Add a Coffee</h3>
            <form onSubmit={handleAddElement} className="card-body">
                <div className=" mx-auto text-center shadow-sm rounded-md bg-slate-50 mb-4">
                    {/* first two field */}
                    <div className="flex lg:flex-row flex-col items-center gap-4 px-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cheif</span>
                            </label>
                            <input type="text" placeholder="Cheif Name" name="chief" className="input input-bordered" />
                        </div>
                    </div>

                    {/* second two field */}
                    <div className="flex lg:flex-row flex-col gap-4 px-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <input type="text" placeholder="Supplier Name" name="supplier" className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input type="text" placeholder="Coffee Test" name="test" className=" input input-bordered" />
                        </div>
                    </div>

                    {/* Third two field */}
                    <div className="flex lg:flex-row flex-col gap-4 px-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Categori</span>
                            </label>
                            <input type="text" placeholder="Coffee Categories" name="categori" className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detailed</span>
                            </label>
                            <input type="text" placeholder="Detailed" name="detailed" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                {/* Photo url */}
                <div className="form-control mx-auto lg:w-[40%] w-[60%]">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="Photo Detailed" name="photo" className=" input input-bordered" />
                </div>
                <div className="form-control mt-6">
               <input type="submit" value="Add Coffee" className="btn bg-[#D2B48C]" />
            </div>

            </form>
            {/* btn */}
           
        </div>
    );
};

export default AddElement;