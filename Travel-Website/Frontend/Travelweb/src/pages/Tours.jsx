import { useEffect, useState } from "react";

function Tours() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/tours") // Replace with your backend URL
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Tours:", data);
                setTours(data);
            })
            .catch(error => console.error("Error fetching tours:", error));
    }, []);

    return (
        <div>
            <h1>Tours List</h1>
            {tours.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {tours.map(tour => (
                        <li key={tour._id}>
                            {tour.title} - ${tour.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Tours;
