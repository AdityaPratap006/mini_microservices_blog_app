import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/posts', {
                title: title,
            });

            setTitle('');

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary"> SUBMIT </button>
            </form>
        </div>
    );
};