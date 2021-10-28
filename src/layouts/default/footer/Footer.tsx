import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  & div:nth-child(1) {
    margin-bottom: 3rem;
  }
`;
const CopyrightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  font-weight: 800;
  & div {
    text-transform: uppercase;
  }
`;
const SocialMediaList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  gap: 8px;
  padding: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <SocialMediaList>
          <li>
            <a>Linkedin</a>
          </li>
          <li>
            <a>Instagram</a>
          </li>
          <li>
            <a>Dribble</a>
          </li>
        </SocialMediaList>
      </div>
      <CopyrightSection>
        <div>Code by Ranjith</div>
        <div>&copy; 2021</div>
      </CopyrightSection>
    </StyledFooter>
  );
}
