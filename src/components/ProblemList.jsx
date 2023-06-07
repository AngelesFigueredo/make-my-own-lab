import axios from "axios";
import { useEffect, useState } from "react";
import Problem from "./Problem";


const API_URL = "http://localhost:3000/problems"
function ProblemList() {
    const emptyInputs = {
        name: "",
        status: "",
        prizeMoney: "",
        fieldOfMathematics: "",
        introducedBy: "",
    }
    const [problems, setProblems] = useState([]);
    const [data, setData] = useState(emptyInputs);

    const getData = async () => {
        const problems = await axios.get(API_URL);
        setProblems(problems.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const cleanInputs = () => {setData(emptyInputs)}

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(API_URL, { name, status, prizeMoney, fieldOfMathematics, introducedBy });
        getData();
        cleanInputs();
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleDelete = async (id) => {
        await axios.delete(API_URL+ "/" +id);
        getData();
    }

    const handleEdit = async (id, data) => {
        await axios.put(API_URL + "/" + id, data);
        getData();
    }

    const { name, status, prizeMoney, 
        fieldOfMathematics, introducedBy } = data;

    return (
        <>
            <h1>The Milennia problems</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <input type="text" name="status" value={status} onChange={handleChange} />
                <input type="text" name="prizeMoney" value={prizeMoney} onChange={handleChange} />
                <input type="text" name="fieldOfMathematics" value={fieldOfMathematics} onChange={handleChange} />
                <input type="text" name="introducedBy" value={introducedBy} onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
            {
                problems.map(problem => (
                    <Problem key={problem.id} 
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit} 
                    {...problem} />
                ))
            }
        </>
    )
}

export default ProblemList;