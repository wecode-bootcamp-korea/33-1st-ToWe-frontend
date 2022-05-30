import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import './ItemDetail.scss';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDown,
} from 'react-icons/ai';

const ItemDetail = () => {
  // //목데이터 가져오기
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const [prodCount, setProdCount] = useState(1);
  const [select, setSelect] = useState(false);
  const [color, setColor] = useState('선택하세요.'); // 색상 선택

  const [mainImgURL, setMainImgURL] = useState('');

  useEffect(() => {
    setMainImgURL(
      Object.keys(data).length !== 0 ? data.result.image_url[0] : ''
    );
  }, [data]);
  // + 기호 클릭시 제품 개수 올라감
  const upProdCount = () => {
    setProdCount(prodCount + 1);
  };

  // - 기호 클릭시 제품 개수 내려감
  const downProdCount = () => {
    if (prodCount >= 2) setProdCount(prodCount - 1);
  };

  // 색상 선택할 때 '선택하세요'누르면 밑에 display : none 이었던 창 띄우기
  const showSwitchClick = () => {
    setSelect(!select);
  };

  return (
    <>
      <Nav />
      {mainImgURL && (
        <div className="itemDetail">
          <div className="topInfo">
            {/* 사진 부분 */}
            <div className="prodPic">
              {/* 조건부 렌더링 */}
              {/* 질문 )
              1. 사진뜨는 순서, 액박 뜨는 이유 
              2. {} 언제 어디서 쓰는 거, 이유
              */}
              <div className="mainPic">
                <img src={mainImgURL} alt="제품사진" />
              </div>
              <div className="smallPics">
                {data.result.image_url.map((a, i) => {
                  return (
                    <div
                      key={i}
                      className="smallPic"
                      onClick={() => {
                        setMainImgURL(a);
                      }}
                    >
                      <img src={a} alt="제품사진" />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 제품정보 부분 */}
            <div className="description">
              {/* 받아올 상품명 */}
              {data.result && <h1>{data.result.name}</h1>}
              {/* 받아올 상품가격 */}
              {data.result && (
                <span className="price">{data.result.price}원</span>
              )}

              <div className="extraInfo">
                <span className="extraInfoTitle">적립금</span>
                <span>7%</span>
              </div>
              <div className="extraInfo">
                <span className="extraInfoTitle">대상 연령</span>
                <span>4세 이상</span>
              </div>
              <div className="colorSelect">
                <div className="colorText">색상</div>
                <div className="colorOptions">
                  <div className="optionShown" onClick={showSwitchClick}>
                    <span>{color}</span> <AiOutlineDown />
                  </div>
                  <div className={select ? 'options' : 'options disappear'}>
                    {data.result &&
                      data.result.color.map((a, i) =>
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?
                        // a에 {} 언제 붙임?

                        a != 'null' ? (
                          <div
                            key={i}
                            onClick={() => {
                              showSwitchClick();
                              setColor(a);
                            }}
                          >
                            {a}
                          </div>
                        ) : (
                          <div
                            key={i}
                            onClick={() => {
                              showSwitchClick();
                              setColor('선택하세요.');
                            }}
                          >
                            선택하세요.
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>
              {/* 구매할 상품 개수 */}

              <div className="prodBuyNum">
                <div className="prodNameX">
                  {color !== '선택하세요.' ? (
                    <span>{data.result.name + ' (' + color + ')'}</span>
                  ) : (
                    ''
                  )}
                  <span className="xIcon">
                    <AiOutlineClose />
                  </span>
                </div>

                {/* onClick 이벤트랑 이모티콘으로 해야할듯 */}
                <div className="calculator">
                  <div className="numButton">
                    <div className="minus" onClick={downProdCount}>
                      <AiOutlineMinus />
                    </div>
                    <div className="number">{prodCount}</div>
                    <div className="plus" onClick={upProdCount}>
                      <AiOutlinePlus />
                    </div>
                  </div>
                  <div className="totalPrice">
                    {parseInt(data.result.price) * prodCount + '원'}
                  </div>
                </div>
              </div>

              <div className="endOrder">
                <div className="orderNumberPart">
                  <div>주문 수량</div>
                  <div>1개</div>
                </div>
                <div className="totalAmountPart">
                  <div>총 상품 금액</div>
                  <div>42,000원</div>
                </div>
              </div>

              <div className="buyCartButtons">
                <button className="buyButton">구매하기</button>
                <button className="cartButton">장바구니에 담기</button>
              </div>
            </div>
          </div>
          {/* 여기까지가 첫페이지 */}
          {/* 중간 네브바 */}
          <div className="midNavBar">
            <a href="/" className="상품설명">
              상품설명
            </a>
            <a href="/" className="후기">
              후기 (242)
            </a>
            <a href="/" className="질문">
              질문
            </a>
            <a href="/" className="관련상품">
              관련 상품
            </a>
          </div>

          <div className="prodDescReviewQuestion">
            <div className="prodDesc">{data.result.description}</div>
            <div className="reviews">
              <div className="reviewTitle">
                <div className="reviewText">후기</div>

                <div className="reviewBottom">
                  <div className="reviewRateNumber">
                    <div className="reviewRate">4.9 / 5</div>
                    <div className="reviewNumber"> (242개 후기)</div>
                  </div>

                  <label className="selectPictureReviewOnly">
                    <input
                      className="selectPictureReviewOnlyInput"
                      type="checkbox"
                      name="사진후기만선택"
                      value="true"
                    />
                    사진 후기만 보기
                  </label>
                </div>
              </div>
              <div className="review">
                품절이여서 오래 기다렸는데 기다린 보람이 있었습니다!! 아이애프
                맥북 둘 다 들어가서 너무 좋았어요!!
              </div>
              <div className="review">
                품절이여서 오래 기다렸는데 기다린 보람이 있었습니다!! 아이애프
                맥북 둘 다 들어가서 너무 좋았어요!!
              </div>
              <div className="review">
                품절이여서 오래 기다렸는데 기다린 보람이 있었습니다!! 아이애프
                맥북 둘 다 들어가서 너무 좋았어요!!
              </div>
              <div className="review">
                품절이여서 오래 기다렸는데 기다린 보람이 있었습니다!! 아이애프
                맥북 둘 다 들어가서 너무 좋았어요!!
              </div>
              <div className="review">
                품절이여서 오래 기다렸는데 기다린 보람이 있었습니다!! 아이애프
                맥북 둘 다 들어가서 너무 좋았어요!!
              </div>
              <div className="review">
                품절이여서 오래 기다렸는데 기다린 보람이 있었습니다!! 아이애프
                맥북 둘 다 들어가서 너무 좋았어요!!
              </div>
              <div className="reviewButtonDiv">
                <button className="reviewButton">후기 쓰기</button>
              </div>
              <div className="pageNumber">
                <div className="pagenationNo">1</div>
                <div className="pagenationNo">2</div>
                <div className="pagenationNo">3</div>
                <div className="pagenationNo">4</div>
                <div className="pagenationNo">5</div>
                <div className="pagenationNo">></div>
              </div>
            </div>

            <div className="question">
              <div className="questionText">질문</div>

              <div className="questionInfo">
                <div className="questionNumber">번호</div>
                <div className="questionTitle">제목</div>
                <div className="questionWriter">글쓴이</div>
                <div className="questionDate">등록일</div>
              </div>

              <div className="questionList">
                <div className="questionNumber">1</div>
                <div className="questionTitle">문의드려요</div>
                <div className="questionWriter">**</div>
                <div className="questionDate">2022.05.03</div>
              </div>
              <div className="questionList">
                <div className="questionNumber">2</div>
                <div className="questionTitle">문의드려요</div>
                <div className="questionWriter">**</div>
                <div className="questionDate">2022.05.03</div>
              </div>
              <div className="questionList">
                <div className="questionNumber">3</div>
                <div className="questionTitle">문의드려요</div>
                <div className="questionWriter">**</div>
                <div className="questionDate">2022.05.03</div>
              </div>

              <div className="addQuestion">
                <button>질문 쓰기</button>
              </div>

              <div className="pageNumber">
                <div className="pagenationNo">1</div>
                <div className="pagenationNo">2</div>
                <div className="pagenationNo">3</div>
                <div className="pagenationNo">4</div>
                <div className="pagenationNo">5</div>
                <div className="pagenationNo">></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
