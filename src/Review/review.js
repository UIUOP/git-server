import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';
import '../Review/review.css';
import ReactHtmlParser from 'html-react-parser';



function App2() {
    const [reviewContent, setreviewContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);



    const getValue = e => {
        const { name, value } = e.target;
        setreviewContent({
            ...reviewContent,
            [name]: value
        })
    };
    // const onSubmit = async () => {
    //     try {
    //         // 서버에 대한 요청을 비동기로 처리 함
    //         const res = await khApi.App2(element.title, element.content);
    //         setResData(res.data);
    //         console.log("작성완료 버튼 클릭");
    //         if (res.data.result === "OK") {
    //             window.location.replace("/");
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    return (
        <div className="App2">
            <h1>Review</h1>
            <div className='review-container'>
                {viewContent.map(element =>
                    <div style={{ border: '1px solid #333' }}>
                        <h2>{element.title}</h2>
                        <div>
                            {ReactHtmlParser(element.content)}
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
                    data="<p>후기를 입력하세요</p>"
                    onReady={editor => {

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
                onClick={() => {
                    setViewContent(viewContent.concat({ ...reviewContent }));
                }}
            >입력</button>
        </div>
    );
}

export default App2;
