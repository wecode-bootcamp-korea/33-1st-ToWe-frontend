import React from 'react';
import './Footer.scss';
import { FaBold, FaRegEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcons">
        <FaRegEnvelope className="footerIcon" size={24} />
        <FaInstagram className="footerIcon" size={24} />
        <FaBold className="footerIcon" size={24} />
      </div>
      <span>이용약관</span>
      <span>개인정보처리방침</span>
      <span>사업자정보확인</span>
      <div className="pageDetails">
        상호: 주식회사 스튜디오무직 | 대표: 송의섭 | 개인정보관리책임자: 송의섭
        | 전화: 070-7788-9849 | 이메일: muziktiger@muziktiger.com <br />
        주소: 경기 성남시 분당구 황새울로 132번길 34 | 사업자등록번호:
        192-81-02515 | 통신판매: 2022-성남분당A-0057 호 | 호스팅제공자:
        (주)식스샵
      </div>
      <div className="reseved">©MUZIKTIGER. All rights reserved.</div>
    </div>
  );
};

export default Footer;
