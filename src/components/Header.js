import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="disnep+" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="home" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="home" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="home" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="home" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="home" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImage
        src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-1/p240x240/194531794_3960664640721014_1231736119840168866_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=a5tlk50MFmAAX8JOvWJ&_nc_ht=scontent.fcmb1-2.fna&oh=2730ecbb6a023aeed97a90e26ad8addc&oe=612B6112"
        alt="username"
      />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  flex: 1 1 auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
    /* position: relative; */
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      position: relative;
      &::after {
        content: "";
        height: 1.5px;
        opacity: 0;
        background-color: white;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left center;
        top: 20px;
        left: 0;
        right: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span {
        transform: scaleY(1.2);
        font-weight: bold;
        /* color: royalblue; */
      }
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
