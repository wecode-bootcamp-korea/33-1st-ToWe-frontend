import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import './ItemDetail.scss';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDown,
  AiFillCamera,
} from 'react-icons/ai';

const ItemDetail = () => {
  // 목데이터 담을 data
  const [data, setData] = useState({});
  // 백엔드에서 받아올 후기들 담을 state
  const [commentsData, setCommentsData] = useState([]);

  // 제품개수 .... 색상 선택시 1이 들어가서 [1] 이런 형태됨
  // [1,1,1,1] => prodCount[i]가 각 색깔별 제품개수
  const [prodCount, setProdCount] = useState([]);

  // 색상 선택하면 prodBuy 배열에 색상 넣기
  // red 선택하면 ['red'] blue도 선택하면 ['red','blue']
  const [prodBuy, setProdBuy] = useState([]);
  const [select, setSelect] = useState(false);
  const [color, setColor] = useState('선택하세요.'); // 색상 선택

  const [mainImgURL, setMainImgURL] = useState('');

  // 얘는 textarea에 입력되는 comment
  const [comment, setComment] = useState('');

  // 댓글모음state... 얘 map 돌려서 댓글 보이게 할 거
  const [commentsList, setCommentsList] = useState([]);

  // 제품사진, 색상 정보 목데이터 가져오기
  useEffect(() => {
    // 'http://10.58.3.254:8000/products/1'
    // '/data/commentData.json'
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  //console.log(data);

  // 댓글 정보 가져오기
  useEffect(() => {
    // 10.58.0.209
    // /data/reviewData.json
    // http://10.58.0.209:8000/products/1/review
    fetch('/data/reviewData.json')
      .then(res => res.json())
      .then(data => setCommentsData(data.result));
  }, []);

  console.log(commentsData);
  console.log(commentsData.length);

  // console.log(typeof commentsData);
  // console.log(commentsData.result);
  // console.log(commentsData.result && commentsData.result.length);

  // 메인사진 초기값 설정
  useEffect(() => {
    setMainImgURL(
      Object.keys(data).length !== 0 ? data.results.image_url[0] : ''
    );
  }, [data]);

  // 받아온 리뷰 정보 commentsList 에 담기
  // const insertReviews = () => {
  //   for (let i = 0; i < commentsData.result.length; i++) {
  //     let copy = [...commentsList];
  //     copy.unshift(commentsData.result[i].content);
  //     setCommentsList(copy);
  //   }
  // };

  // useEffect(() => {
  //   return commentsData.result ? insertReviews() : '';
  // });

  // + 기호 클릭시 제품 개수 올라감
  const upProdCount = () => {
    setProdCount(prodCount + 1);
  };

  // - 기호 클릭시 제품 개수 내려감
  const downProdCount = a => {
    if (prodCount[a] >= 2) {
      let copy = [...prodCount];
      copy[a]--;
      setProdCount(copy);
    }
  };

  // 색상 선택할 때 '선택하세요'누르면 밑에 display : none 이었던 창 띄우기
  const showSwitchClick = () => {
    setSelect(!select);
  };

  // 변수를 state 조합으로 만들수도 있네
  // 새질문) const로 변수 선언 -> 근데 값이 왜 바뀔 수가 있지??????????????
  // 내생각) 바뀌는 게 아니고 재렌더링 되는거임
  const totalProdNum = prodCount.reduce((acc, cur, i) => {
    if (i < prodBuy.length) return acc + cur;
    else return acc;
  }, 0);

  // 최신 댓글이 위에 올라오게끔 하는 함수
  const comeFirst = () => {
    //let copy = [...commentsList];
    const copy = [...commentsData];
    //copy.unshift(comment);
    copy.unshift({ product_id: data.results.product_id, content: comment });
    //setCommentsList(copy);
    setCommentsData(copy);
  };

  // 후기 작성란 보이게 하는 스위치
  const [closeReviewWritingAreaSwitch, setCloseReviewWritingAreaSwitch] =
    useState(false);

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
                {data.results.image_url.map((a, i) => {
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
              {data.results && <h1>{data.results.name}</h1>}
              {/* 받아올 상품가격 */}
              {data.results && (
                <span className="price">{data.results.price}원</span>
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
                    {data.results &&
                      data.results.colors.map((a, i) =>
                        a.color !== 'null' ? (
                          <div
                            key={a.color_id}
                            onClick={() => {
                              showSwitchClick();
                              // 색상 선택창에 보일 {color}를 a로 설정
                              setColor(a.color);
                              setProdBuy(
                                prodBuy.includes(a.color)
                                  ? prodBuy
                                  : prodBuy.concat([a.color])
                              );
                              setProdCount(prodCount.concat([1]));
                              // 질문)slice 쓰니까 왜 안됨? 답) 한번 return문 밖에 따로 빼서 해봐
                              //setProdCount(prodCount.slice(0, prodBuy.length));

                              // 질문) 아래 왜 안됨? 3항 연산자는 실행문 한개씩만
                              // prodBuy.includes(a) ?(
                              // setProdBuy(prodBuy)
                              // setProdCount(prodCount) ):
                              // setProdBuy(prodBuy.concat([a]))
                              // setProdCount(prodCount.concat([1]))

                              // 질문) 왜 처음에 빈배열? 한 박자씩 느리네

                              // console.log(prodCount);
                              // console.log(prodCount.slice(0, prodBuy.length));
                            }}
                          >
                            {a.color}
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
              <div className="totalBuyNum">
                {/* prodBuy는 <색상>란에서 선택한 색들이 들어 있는 배열 */}
                {prodBuy.map((prodColor, index) => {
                  return (
                    <div key={index} className="prodBuyNum">
                      <div className="prodNameX">
                        <span>
                          {data.results.name + ' (' + prodColor + ')'}
                        </span>

                        <span
                          className="xIcon"
                          // X아이콘 누르면 prodBuy 배열 바꿔서 삭제하는 기능 구현
                          onClick={() => {
                            let copy = [...prodBuy];
                            copy.splice(index, 1);
                            setProdBuy(copy);
                            let copy1 = [...prodCount];
                            copy1.splice(index, 1);
                            setProdCount(copy1);
                          }}
                        >
                          <AiOutlineClose />
                        </span>
                      </div>

                      {/* onClick 이벤트랑 이모티콘으로 해야할듯 */}
                      <div className="calculator">
                        <div className="numButton">
                          <div
                            className="minus"
                            onClick={() => {
                              // 질문) onClick{()} 안에 (i) 로 인자 전달하면 왜 안됨?
                              // 질문) 여기 3항 연산자 못씀? 조건에 따른 실행문이 하나씩일때만 삼항연산자 쓸수있다
                              // prodCount[i] >= 2 ? (let ~ setProdCount(copy);) : setProdCount(prodCount) 쓰고 싶은데

                              downProdCount(index);
                            }}
                          >
                            <AiOutlineMinus />
                          </div>
                          <div className="number">{prodCount[index]}</div>
                          <div
                            className="plus"
                            onClick={() => {
                              let copy = [...prodCount];
                              copy[index]++;
                              setProdCount(copy);
                            }}
                          >
                            <AiOutlinePlus />
                          </div>
                        </div>
                        <div className="totalPrice">
                          {parseInt(data.results.price) * prodCount[index] +
                            '원'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="endOrder">
                <div className="orderNumberPart">
                  <div>주문 수량</div>
                  <div>
                    {totalProdNum + '개'}

                    {/* 
                      이것도 되네... 질문) 이거 함수화 못 시키냐?
                      {prodBuy.length == 3
                      ? prodCount[0] + prodCount[1] + prodCount[2]
                      : prodBuy.length == 2
                      ? prodCount[0] + prodCount[1]
                      : prodCount[0]} */}
                    {/* totalProdNum 넣기 */}
                  </div>
                </div>
                <div className="totalAmountPart">
                  <div>총 상품 금액</div>
                  <div>{totalProdNum * data.results.price + '원'}</div>
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
            <a href="#prodDesc">상품설명</a>
            <a href="#reviews">후기 (242)</a>
            <a href="#question">질문</a>
            {/* <a href="#" >
              관련 상품
            </a> */}
          </div>

          <div className="prodDescReviewQuestion">
            <div id="prodDesc">{data.results.description}</div>
            <div id="reviews">
              <div className="reviewTitle">
                <div className="reviewText">후기</div>

                <div
                  className={
                    closeReviewWritingAreaSwitch
                      ? 'reviewWritingArea'
                      : 'reviewWritingArea closed'
                  }
                >
                  <div className="closeReviewWriting">
                    <AiOutlineClose
                      className="xButton"
                      onClick={() => {
                        setComment('');
                        setCloseReviewWritingAreaSwitch(
                          !closeReviewWritingAreaSwitch
                        );
                      }}
                    />
                  </div>
                  <textarea
                    value={comment}
                    onChange={event => {
                      setComment(event.target.value);
                    }}
                  />
                  <div className="reviewWritingAreaBottom">
                    <div className="reviewPicUpdate">
                      <label for="fileInput">
                        <AiFillCamera />
                      </label>
                      <input id="fileInput" type="file" />
                    </div>
                    <div className="rateAndButton">
                      <select>
                        <option> 평점주기</option>
                        {/* option 태그 안에 왜 리액트아이콘 안 나옴? */}
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                      </select>
                      <button
                        className="reviewButton"
                        onClick={event => {
                          // 댓글모음집 배열에 쓴 댓글 넣어주고
                          comment !== ''
                            ? comeFirst() // 이거 밖에서 선언한 거...
                            : alert('댓글을 입력해주세요');
                          // 댓글입력창 비우기
                          setComment('');
                          setCloseReviewWritingAreaSwitch(
                            !closeReviewWritingAreaSwitch
                          );
                        }}
                      >
                        저장하기
                      </button>
                    </div>
                  </div>
                </div>

                <div className="reviewBottom">
                  <div className="reviewRateNumber">
                    <div className="reviewRate">4.9 / 5</div>
                    <div className="reviewNumber">
                      {/* ({commentsList.length + '개 후기'}) */}(
                      {commentsData.length + '개 후기'})
                    </div>
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

              <div className="reviewCommentsList">
                {commentsData.map((a, i) => {
                  return (
                    <div key={i} className="review">
                      {a.content}
                    </div>
                  );
                })}
              </div>

              <div className="reviewButtonDiv">
                <button
                  className="reviewButton"
                  onClick={() => {
                    setCloseReviewWritingAreaSwitch(
                      !closeReviewWritingAreaSwitch
                    );
                  }}
                >
                  후기 쓰기
                </button>
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

            <div id="question">
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
