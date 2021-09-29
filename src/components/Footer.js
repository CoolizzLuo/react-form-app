import styled from "styled-components"

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 26px 0 21px;
  background: #000;
  border-top:2px solid #fad312;
  & > .copyright {
    color: #999;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p class="copyright">&copy; 2020 &copy; Copyright. All rights Reserved.</p>
    </FooterWrapper>
  )
}

export default Footer