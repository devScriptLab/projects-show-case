import {Container, ResponsiveContainer, WebsiteLogo} from './styledComponents'

const Navbar = () => (
  <Container>
    <ResponsiveContainer>
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png "
        alt="website logo"
      />
    </ResponsiveContainer>
  </Container>
)

export default Navbar
