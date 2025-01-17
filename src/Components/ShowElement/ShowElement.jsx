import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowElement = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chief, supplier, test, categori, detailed, photo } = coffee;

    const handleUpdate =(id)=>{
        console.log(id);

    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2>{name}</h2>
                    <p>{chief}</p>
                    <p>{supplier}</p>
                    <p>{test}</p>
                    <p>{categori}</p>
                    <p>{detailed}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn">View</button>                     
                          <Link to={`/showelement/updateelement/${_id}`}>
                          <button className="btn"> Edit </button>
                          </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShowElement;