import React, { useState } from 'react';
import './step1.css';
import logo from '../../image/logo.svg';
import Calendar from "./calendar";
import crownIcon from '../../image/crown.png';
import MapComponent from '../Map/Map';

function PostStep() {
    const location = '새 게시글 작성하기 (Step1)';
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [selectedImageRect, setSelectedImageRect] = useState(null); // 선택된 이미지의 위치 정보
    const [crownPosition, setCrownPosition] = useState({ top: 0, left: 0 }); // 왕관 위치
    const imagesPerPage = 9;

    const handleImageUpload = (event) => {
        const { files } = event.target;
        if (images.length + files.length > 18) {
            alert('최대 18장의 사진만 업로드가 가능합니다.');
            return;
        }
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(oldImages => [...oldImages, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const locationsGps = [
        { lat: 37.5642135, lng: 127.0016985 },
        { lat: 37.5658859, lng: 126.9754788 },
        { lat: 37.5507096, lng: 126.9408428 }
    ];

    const handleImageSelect = (index) => {
        setSelectedImageIndex(index);
        setSelectedImageRect(null); // 이미지를 새로 선택할 때 위치 정보 초기화
        setCrownPosition({ top: 0, left: 0 }); // 왕관 위치 초기화
    };

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const handleImageRemove = (index) => {
        setImages(oldImages => oldImages.filter((image, i) => i !== index));
        if (selectedImageIndex === index) {
            setSelectedImageIndex(null); // 선택된 이미지를 삭제할 때 선택 해제
        }
    };


    const handleDrop = (event) => {
        event.preventDefault();
        const { files } = event.dataTransfer;
        if (files && files.length) {
            handleImageUpload({ target: { files } });
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault(); // 기본 동작 막기
    };

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSelectPhoto = () => {
        setSelectedImageIndex(null); // 선택된 이미지 초기화
        setSelectedImageRect(null); // 선택된 이미지 위치 정보 초기화
        setCrownPosition({ top: 0, left: 0 }); // 왕관 위치 초기화
        alert("대표 사진을 선택해주세요."); // 알림 추가
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="PostStep" onDragOver={handleDragOver}>
            <div className="header-pane">
                <img src={logo} className="logo" alt="logo" />
                <div className="map-location">{location}</div>
            </div>

            <div className="content-pane">
                <div className="left-section">
                    <div className="left-top" >
                        <div className="travel-period">
                            <h3>&nbsp;&nbsp;Travel Period</h3>
                            <div className="calendar"><Calendar/></div>
                        </div>
                    </div>
                    <div className="left-bottom">
                        <MapComponent locationsGps={locationsGps} />
                    </div>
                </div>
                <div className="right-section">
                    <div className="upload-image" onClick={handleClick}>
                        <h2>&nbsp;&nbsp;Upload Image</h2>
                        <div className="drag-drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
                            드래그 앤 드롭 또는 클릭하여 이미지 추가
                        </div>
                        <input id="fileInput" type="file" accept="image/*" multiple onChange={handleImageUpload}
                               style={{display: 'none'}}/>
                    </div>
                    <div className="image-gallery">
                        {currentImages.map((image, i) => (
                            <div
                                className={`image-item ${selectedImageIndex === i ? 'selected' : ''}`}
                                key={i}
                                onClick={(event) => {
                                    handleImageSelect(i);
                                    const rect = event.target.getBoundingClientRect(); // 선택한 이미지의 위치 정보 가져오기
                                    setSelectedImageRect(rect); // 선택한 이미지의 위치 정보 설정
                                }}
                            >
                                <img src={image} alt={`uploaded ${i}`} />
                                <button className="remove-btn" onClick={() => handleImageRemove(i)}>Remove</button>
                            </div>
                        ))}
                        {selectedImageIndex !== null && (
                            <div
                                className="crown-icon-wrapper"
                                style={{ top: crownPosition.top, left: crownPosition.left }}
                            >
                                <img className="crown-icon" src={crownIcon} alt="crown" />
                            </div>
                        )}
                    </div>
                    <div className="pagination">
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={currentPage === number ? "selected" : ""}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                    <div>
                        <button className="select-photo" onClick={handleSelectPhoto}>대표사진 선택</button>
                    </div>
                    <div className="pagination-controls">
                        <button> NEXT(▶)</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostStep;
