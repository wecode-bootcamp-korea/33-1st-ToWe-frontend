import React from 'react';
import Nav from '../../components/nav/Nav';
import './ItemDetail.scss';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
const ItemDetail = () => {
  return (
    <div className="container">
      <Nav />
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
          <h1>토이스토리 장난감</h1>
          <span className="price">36,000원</span>
          <p className="savedMoney">
            <span className="savedMoney_">적립금</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7%
          </p>
          <p className="shipMoney">
            <span className="shipMoney_">배송비</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3000원 (50,000원
            이상 구매시 무료)
          </p>
          <div className="ageSelect">
            <span className="age">연령</span>
            <br />
            <select>
              {/* 아래 화살표랑 오른쪽 테두리 공간 만들기 */}
              <option value="null">선택하세요.</option>
              <option value="1.5">1.5+</option>
              <option value="4">4+</option>
              <option value="6">6+</option>
              <option value="13">13+</option>
            </select>
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
            <div className="수량X가격">
              <div className="numButton">
                <div className="minus">
                  <AiOutlineMinus />
                </div>
                <div className="number">1</div>
                <div className="plus">
                  <AiOutlinePlus />
                </div>
              </div>
              <div className="totalPrice">42,000원</div>
            </div>
          </div>

          <div className="주문마무리">
            <div className="주문수량담당부분">
              <div className="주문수량문구">주문 수량</div>
              <div className="주문수량">1개</div>
            </div>
            <div className="총상품담당부분">
              <div className="총상품금액문구">총 상품 금액</div>
              <div className="총상품금액">42,000원</div>
            </div>
          </div>

          <div className="버튼들">
            <button className="구매하기">구매하기</button>
            <button className="장바구니에담기">장바구니에 담기</button>
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

      <div className="상품설명">이 상품은 노트북 파우치입니다</div>
      <div className="후기">이 상품은 좋습니다</div>
      <div className="질문">이 상품 좋나요?</div>
    </div>
  );
};

export default ItemDetail;
