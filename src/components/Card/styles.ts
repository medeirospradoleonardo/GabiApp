import styled from 'styled-components/native';

export const Container = styled.View`
  /* width: 240px; */
  /* width: 180px; */
  /* height: 100px; */
  background: #e1e1e1;
  /* background-color: tomato; */
  /* width: 600px; */
  margin-bottom: 10px;
  border-radius: 5px;
  border-bottom: 1px solid rgb(178, 185, 197);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  margin-right: 20px;
`;

export const Cover = styled.View`
  width: 100%;
  /* height: 130px; */
  height: 110px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  width: 170px;
  margin-top: 20px;
  /* margin-left: 20px; */
`;

export const Content = styled.View`
  /* padding-left: 20px; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

export const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
  margin-left: 10px;
`;
