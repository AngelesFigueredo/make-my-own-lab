import { useState } from "react";
function Problem(

    { id, name, status, prizeMoney,
     fieldOfMathematics, introducedBy, 
     handleDelete, handleEdit }

    ) {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState(
        { name, status, prizeMoney, fieldOfMathematics, introducedBy}
        );

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleEdit(id, data);
        setIsEditing(false);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="card">
            {
                isEditing ?
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="name" value={data.name} onChange={handleChange} />
                        <input type="text" name="status" value={data.status} onChange={handleChange} />
                        <input type="text" name="prizeMoney" value={data.prizeMoney} onChange={handleChange} />
                        <input type="text" name="fieldOfMathematics" value={data.fieldOfMathematics} onChange={handleChange} />
                        <input type="text" name="introducedBy" value={data.introducedBy} onChange={handleChange} />
                        <button type="submit">Edit</button>
                    </form> :
                    <>
                        <p>ID: {id}</p>
                        <p>Name: {name}</p>
                        <p>Status: {status}</p>
                        <p>Prize: {prizeMoney}</p>
                        <p>Field of Mathematics: {fieldOfMathematics}</p>
                        <p>Introduced by: {introducedBy}</p>
                    </>
            }
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing? "Cancel" : "Edit"}</button>
        </div>
    )
}

export default Problem;