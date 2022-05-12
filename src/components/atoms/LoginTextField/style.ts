import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { TextField } from '@material-ui/core';

export const LoginDiv = styled.div`
  margin-top: 10px;
`;
export const LoginSpan = styled.span`
  margin-right: 8px;
`;
export const LoginInput = styled(TextField)`
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-image: initial;
  outline: 0px;
  margin: 0px;
  padding: 0px;
  caret-color: #b0b6be;
  height: 44px;
  width: 100%;
  border-radius: 0px;
  font-family: SpoqaHanSansNeo;
  font-size: 16px;
  font-weight: normal;
  line-height: 28px;
  text-align: left;
  color: #b0b6be;
`;
export default {};