import React from "react";
import styled from "styled-components";
// import { } from 'react-router-dom';
const Details = (props) => {
  const movie = props.location.state.movie;
  console.log("props", props.location.state);
  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} />
      </Background>
      <ImageTitle>
        <img src={movie.titleImg} />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movie.subTitle}</SubTitle>
      <Description>{movie.description}</Description>
    </Container>
  );
};

const SubTitle = styled.div`
  font-size: 20px;
  margin: 20px 0;
  font-weight: 400;
  letter-spacing: 1.5px;
`;

const Description = styled.div`
  font-size: 22px;
  margin: 20px 0;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  top: 120px;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  top: 0;

  img {
    opacity: 0.8;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-bottom: 170px;
  padding-bottom: 2px;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: 56px;
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  background: rgb (249, 249, 249);
  letter-spacing: 1.8px;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  color: rgb(0, 0, 0);
  transition: 200ms all ease-out;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 200ms all ease-out;
  cursor: pointer;
  margin-right: 22px;
  span {
    font-size: 30px;
    color: white;
  }
  &:hover {
    border: 2px solid transparent;
    background-color: white;
    span {
      color: black;
    }
  }
`;
const GroupWatchButton = styled(AddButton)`
  &:hover {
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default Details;
