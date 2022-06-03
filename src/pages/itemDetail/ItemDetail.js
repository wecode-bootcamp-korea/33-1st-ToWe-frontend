import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import API from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetail.scss';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineDown,
  AiFillCamera,
} from 'react-icons/ai';

const ItemDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [commentsData, setCommentsData] = useState([]);
  const [prodCount, setProdCount] = useState([]);
  const [prodBuy, setProdBuy] = useState([]);
  const [select, setSelect] = useState(false);
  const [color, setColor] = useState('선택하세요.');
  const [mainImgURL, setMainImgURL] = useState('');
  const [comment, setComment] = useState('');
  const productID = data.results && data.results.product_id;
  const navigate = useNavigate();
  const cartBag = [];
  for (let i = 0; i < prodBuy.length; i++) {
    cartBag.push({
      product_id: data.results.product_id,
      color_id: prodBuy[i],
      quantity: prodCount[i],
    });
  }

  useEffect(() => {
    fetch(`${API.products}/${params.id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    fetch(`${API.products}/${params.id}/reviews`)
      .then(res => res.json())
      .then(data => setCommentsData(data.result));
  }, []);

  const postHandler = () => {
    fetch(`${API.carts}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(cartBag),
    })
      .then(res => res.json())
      .then(() => {
        alert('장바구니 담기 완료!');
      });
  };

  const buyHandler = () => {
    cartBag.length !== 0 &&
      fetch(`${API.carts}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(cartBag),
      })
        .then(res => res.json())
        .then(() => {
          navigate('/order');
        });
  };

  const reviewPost = () => {
    fetch(`${API.products}/${params.id}/reviews`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: productID,
        content: comment,
      }),
    })
      .then(res => res.json())
      .then(result => {});
  };

  useEffect(() => {
    setMainImgURL(
      Object.keys(data).length !== 0 ? data.results.image_url[0] : ''
    );
  }, [data]);

  const downProdCount = a => {
    if (prodCount[a] >= 2) {
      let copy = [...prodCount];
      copy[a]--;
      setProdCount(copy);
    }
  };

  const showSwitchClick = () => {
    setSelect(!select);
  };

  const totalProdNum = prodCount.reduce((acc, cur, i) => {
    if (i < prodBuy.length) return acc + cur;
    else return acc;
  }, 0);

  const comeFirst = () => {
    const copy = [...commentsData];
    copy.unshift({ product_id: data.results.product_id, content: comment });
    setCommentsData(copy);
  };

  const [closeReviewWritingAreaSwitch, setCloseReviewWritingAreaSwitch] =
    useState(false);

  return (
    <>
      <Nav />
      {mainImgURL && (
        <div className="itemDetail">
          <div className="topInfo">
            <div className="prodPic">
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
            <div className="description">
              {data.results && <h1>{data.results.name}</h1>}
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
                              setColor(a.color);
                              setProdBuy(
                                prodBuy.includes(a.color_id)
                                  ? prodBuy
                                  : prodBuy.concat([a.color_id])
                              );
                              setProdCount(prodCount.concat([1]));
                            }}
                          >
                            {a.color}
                          </div>
                        ) : (
                          <div
                            key={i}
                            onClick={() => {
                              showSwitchClick();
                              setColor('기본');
                              setProdBuy(
                                prodBuy.includes(a.color_id)
                                  ? prodBuy
                                  : prodBuy.concat([a.color_id])
                              );
                              setProdCount(prodCount.concat([1]));
                            }}
                          >
                            기본
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>

              <div className="totalBuyNum">
                {prodBuy.map((a, index) => {
                  return (
                    <div key={index} className="prodBuyNum">
                      <div className="prodNameX">
                        <span>
                          {data.results.colors[a - 2] !== undefined
                            ? data.results.name +
                              ' (' +
                              data.results.colors[a - 2].color +
                              ')'
                            : data.results.name + ' (기본)'}
                        </span>
                        <span
                          className="xIcon"
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
                      <div className="calculator">
                        <div className="numButton">
                          <div
                            className="minus"
                            onClick={() => {
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
                  <div>Quantity</div>
                  <div>{totalProdNum + '개'}</div>
                </div>
                <div className="totalAmountPart">
                  <div>Total price</div>
                  <div>{totalProdNum * data.results.price + '원'}</div>
                </div>
              </div>
              <div className="buyCartButtons">
                <button
                  className="buyButton"
                  onClick={() => {
                    prodBuy.length !== 0 ? buyHandler() : alert('cant');
                  }}
                >
                  BUY NOW
                </button>
                <button className="cartButton" onClick={postHandler}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="midNavBar">
            <a href="#prodDesc">상품설명</a>
            <a href="#reviews">후기 ({commentsData.length})</a>
            <a href="#question">질문</a>
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
                      <label htmlFor="fileInput">
                        <AiFillCamera />
                      </label>
                      <input id="fileInput" type="file" />
                    </div>
                    <div className="rateAndButton">
                      <select>
                        <option> 평점주기</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                      </select>
                      <button
                        className="reviewButton"
                        onClick={event => {
                          comment !== ''
                            ? comeFirst()
                            : alert('댓글을 입력해주세요');
                          comment !== '' ? reviewPost() : setComment('');
                          setCloseReviewWritingAreaSwitch(
                            !closeReviewWritingAreaSwitch
                          );
                          setComment('');
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
                      ({commentsData.length + '개 후기'})
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
            </div>

            <div id="question">
              <div className="questionText">질문</div>

              <div className="questionInfo">
                <div className="questionNumber">번호</div>
                <div className="questionTitle">제목</div>
                <div className="questionWriter">글쓴이</div>
                <div className="questionDate">등록일</div>
              </div>

              <div className="questionsList">
                {}
                <div className="questionInfo">
                  <div className="questionNumber">1</div>
                  <div className="questionTitle">문의드려요</div>
                  <div className="questionWriter">**</div>
                  <div className="questionDate">2022.05.03</div>
                </div>
                <div className="questionInfo">
                  <div className="questionNumber">2</div>
                  <div className="questionTitle">문의드려요</div>
                  <div className="questionWriter">**</div>
                  <div className="questionDate">2022.05.03</div>
                </div>
              </div>
              <div className="addQuestion">
                <button>질문 쓰기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
