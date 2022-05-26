import React, { useState } from 'react';
import Nav from '../../components/nav/Nav';
import './ItemDetail.scss';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDown,
} from 'react-icons/ai';

const ItemDetail = () => {
  const [prodCount, setProdCount] = useState(1);

  const upProdCount = () => {
    setProdCount(prodCount + 1);
  };

  const downProdCount = () => {
    if (prodCount >= 2) setProdCount(prodCount - 1);
  };
  return (
    <>
      <Nav />
      <div className="itemDetail">
        <div className="topInfo">
          {/* 사진 부분 */}
          <div className="prodPic">
            <div className="mainPic">
              <img
                src="/images/toy1.png"
                alt="제품사진"
                width="450"
                height="450"
              />
            </div>
            <div className="smallPics">
              <div className="smallPic">
                <img
                  src="/images/toy1.png"
                  alt="제품사진"
                  width="100"
                  height="100"
                />
              </div>
              <div className="smallPic">
                <img
                  src="/images/toy1.png"
                  alt="제품사진"
                  width="100"
                  height="100"
                />
              </div>
              <div className="smallPic">
                <img
                  src="/images/toy1.png"
                  alt="제품사진"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
          {/* 제품정보 부분 */}
          <div className="description">
            {/* 받아올 상품명 */}
            <h1>토이스토리 장난감</h1>
            {/* 받아올 상품가격 */}
            <span className="price">36,000원</span>

            <div className="extraInfo">
              <span className="extraInfoTitle">적립금</span>
              <span>7%</span>
            </div>
            <div className="extraInfo">
              <span className="extraInfoTitle">대상 연령</span>
              <span>4세 이상</span>
            </div>

            {/* 백엔드에서 색상 정보 받아옴 */}
            {/* <div className="colorSelect">
              <span className="colorText">색상</span>
              <br />
              <select>
                <option value="null">선택하세요.</option>
                <option value="red">빨강</option>
                <option value="blue">파랑</option>
                <option value="green">초록</option>
              </select>
            </div> */}
            {/* 이거로 바꿀거 */}
            <div className="colorSelect">
              <div className="colorText">색상</div>
              <div className="colorOptions">
                <div className="optionShown">
                  선택하세요. <AiOutlineDown />
                </div>
                <div className="options">
                  <div className="null">선택하세요.</div>
                  <div className="red">빨강</div>
                  <div className="blue">파랑</div>
                  <div className="green">초록</div>
                </div>
              </div>
            </div>
            {/* 구매할 상품 개수 */}

            <div className="prodBuyNum">
              <div className="prodNameX">
                <span>토이스토리 장난감</span>
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
                <div className="totalPrice">42,000원</div>
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
          <a href="#" className="상품설명">
            상품설명
          </a>
          <a href="#" className="후기">
            후기 (242)
          </a>
          <a href="#" className="질문">
            질문
          </a>
          <a href="#" className="관련상품">
            관련 상품
          </a>
        </div>

        <div className="prodDescReviewQuestion">
          <div className="prodDesc">이 상품은 노트북 파우치입니다</div>
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
    </>
  );
};

export default ItemDetail;
