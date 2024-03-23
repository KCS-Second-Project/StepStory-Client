import React, { useState } from 'react';
import './socialsign.css';
import logo from '../../image/Blogo.svg';
import uploadImg from '../../image/uploadImg.png'; // 이미지 파일 임포트

const LeftPane = () => {
    return (
        <div className="left-pane">
            <img src={logo} alt="Logo" className="logo" />
            <div className="buttons">
                <button className="btn1">LOGIN</button>
                <button className="btn1">SIGN</button>
            </div>
        </div>
    );
};

const RightPane = () => {
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageUpload = event => {
        const file = event.target.files[0];
        if (!file || !(file instanceof File) || !(file instanceof Blob)) {
            console.error('Invalid file or no file selected');
            return;
        }
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
    };

    const handleImageDelete = () => {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl('');
    };

    return (
        <div className="right-pane">
            <div className="add-info-box">
                <h1 className="centerAlign">추가 사용자 정보를 입력해주세요✏️</h1>
                <input
                    type="file"
                    id="upload-button"
                    style={{display: 'none'}}
                    onChange={handleImageUpload}
                />
                <label htmlFor="upload-button" className="uploadImg">
                    {previewUrl ? (
                        <div className="preview-image-area">
                            <img src={previewUrl} alt="Preview"/>
                            <button onClick={handleImageDelete}>Remove</button>
                        </div>
                    ) : (
                        <div>
                            <img src={uploadImg} alt="Upload"/>
                            <br/>
                            Click to upload image
                        </div>
                    )}
                </label>
                <input type="text" placeholder="닉네임 입력" className="nickname-input"/>
                <div className="nickname-val">* 닉네임은 최대 10자까지 입력이 가능하다.</div>
                <button className="btn2">중복확인</button>
                <br/>
                <textarea placeholder="소개글을 입력하세요" className="introduction-input"></textarea>
                <br/><br/>
                <button className="btn3">완료</button>
            </div>
        </div>
    );
};

const Socialsign = () => {
    return (
        <div className="sign">
            <LeftPane />
            <RightPane />
        </div>
    );
};

export default Socialsign;
