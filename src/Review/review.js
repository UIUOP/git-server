import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';
import '../Review/review.css';

function App2() {
    const [reviewContent, setreviewContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/get').then((response) => {
            setViewContent(response.data);
        })
    }, [viewContent])

    const submitReview = () => {
        Axios.post('http://localhost:8000/api/insert', {
            title: reviewContent.title,
            content: reviewContent.content
        }).then(() => {
            alert('등록 완료!');
        })
    };

    const getValue = e => {
        const { name, value } = e.target;
        setreviewContent({
            ...reviewContent,
            [name]: value
        })
    };


    return (
        <div className="App2">
            <h1>Review</h1>
            <div className='review-container'>
                {viewContent.map(element =>
                    <div style={{ border: '1px solid #333' }}>
                        <h2>{element.title}</h2>
                        <div>
                            {(element.content)}
                        </div>
                    </div>
                )}
            </div>
            <div className='form-wrapper'>
                <input className="title-input"
                    type='text'
                    placeholder='제목'
                    onChange={getValue}
                    name='title'
                />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setreviewContent({
                            ...reviewContent,
                            content: data
                        })
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
            <button
                className="submit-button"
                onClick={submitReview}
            >입력</button>
        </div>
    );
}

export default App2;