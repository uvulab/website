import React, { Component } from 'react'
import { RainbowLogo } from 'static/logo'
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  ABOUT_PATH,
  HOME_PATH,
  PEOPLE_PATH,
  PROJECTS_PATH,
  PUBLICATIONS_PATH
} from 'constants/paths'
import { Background } from 'static/background'

const svgString = encodeURIComponent(renderToStaticMarkup(<Background />))

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const {
      children,
      location: { pathname: path }
    } = this.props
    const { fixed } = this.state

    return (
      <Responsive
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url('data:image/svg+xml;utf8, ${svgString}')`
        }}
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment inverted textAlign='center' vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item
                  as={Link}
                  to={HOME_PATH}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <RainbowLogo device='desktop' />
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to={ABOUT_PATH}
                  active={path === ABOUT_PATH}
                >
                  About
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to={PEOPLE_PATH}
                  active={path === PEOPLE_PATH}
                >
                  People
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to={PROJECTS_PATH}
                  active={path === PROJECTS_PATH}
                >
                  Projects
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to={PUBLICATIONS_PATH}
                  active={path === PUBLICATIONS_PATH}
                >
                  Publications
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const {
      children,
      location: { pathname: path }
    } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url('data:image/svg+xml;utf8, ${svgString}')`
        }}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          width='thin'
        >
          <Menu.Item as={Link} to={HOME_PATH} onClick={this.handleSidebarHide}>
            <RainbowLogo device='mobile' />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={ABOUT_PATH}
            active={path === ABOUT_PATH}
            onClick={this.handleSidebarHide}
          >
            About
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={PEOPLE_PATH}
            active={path === PEOPLE_PATH}
            onClick={this.handleSidebarHide}
          >
            People
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={PROJECTS_PATH}
            active={path === PROJECTS_PATH}
            onClick={this.handleSidebarHide}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={PUBLICATIONS_PATH}
            active={path === PUBLICATIONS_PATH}
            onClick={this.handleSidebarHide}
          >
            Publications
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign='center' vertical>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

const CoreLayout = ({ children, ...props }) => (
  <div style={{ height: '100%' }}>
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
  </div>
)

export default CoreLayout
