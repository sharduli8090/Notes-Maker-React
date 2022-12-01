import React, {useState} from 'react';

const AddNote = ({addnote}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or desc cannot be empty")
        } else {
            addnote(title, desc)
            setTitle(" ")
            setDesc(" ")
        }
    }
    return (
        <>
            <form className="container my-5"
                onSubmit={submit}>
                <div className="display-3">
                    Add a Note
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} id="title" aria-describedby="emailHelp" autoComplete='off'
                        onChange={
                            (e) => setTitle(e.target.value)
                        }/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} id="desc" autoComplete='off'
                        onChange={
                            (e) => setDesc(e.target.value)
                        }/>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    );
}

export default AddNote;
