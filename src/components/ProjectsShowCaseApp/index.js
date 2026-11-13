import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  Container,
  ResponsiveContainer,
  Select,
  Option,
  ProjectsList,
  ViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  LoadingContainer,
} from './styledComponents'

import Navbar from '../Navbar'
import ProjectItem from '../ProjectItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProjectsShowCaseApp extends Component {
  constructor(props) {
    super(props)
    const {categoriesList} = this.props
    this.state = {
      categoryId: categoriesList[0].id,
      projectsList: [],
      apiStatus: apiStatusConstants.initial,
    }
  }

  componentDidMount() {
    this.getProjectDetails()
  }

  getProjectDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {categoryId} = this.state

    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${categoryId}`
    const options = {
      'Content-Type': 'application/json',
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const formattedData = fetchedData.projects.map(eachProject => ({
        id: eachProject.id,
        imageUrl: eachProject.image_url,
        name: eachProject.name,
      }))

      this.setState({
        projectsList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeCategoryId = event =>
    this.setState({categoryId: event.target.value}, this.getProjectDetails)

  renderDropDownList = () => {
    const {categoriesList} = this.props
    const {categoryId} = this.state

    return (
      <Select onChange={this.onChangeCategoryId} value={categoryId}>
        {categoriesList.map(eachOption => (
          <Option key={eachOption.id} value={eachOption.id}>
            {eachOption.displayText}
          </Option>
        ))}
      </Select>
    )
  }

  renderSuccessView = () => {
    const {projectsList} = this.state

    return (
      <>
        <Navbar />
        <Container>
          <ResponsiveContainer>
            {this.renderDropDownList()}
            <ProjectsList>
              {projectsList.map(eachProject => (
                <ProjectItem
                  key={eachProject.id}
                  projectDetails={eachProject}
                />
              ))}
            </ProjectsList>
          </ResponsiveContainer>
        </Container>
      </>
    )
  }

  onFailureRetry = () => this.getProjectDetails()

  renderFailureView = () => (
    <>
      <Navbar />
      <ViewContainer>
        <FailureViewImage
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailureDescription>
          We cannot seem to find the page you are looking for
        </FailureDescription>
        <RetryButton type="button" onClick={this.onFailureRetry}>
          Retry
        </RetryButton>
      </ViewContainer>
    </>
  )

  renderLoadingView = () => (
    <>
      <Navbar />
      <Container>
        <ResponsiveContainer>
          {this.renderDropDownList()}
          <LoadingContainer data-testid="loader">
            <Loader type="ThreeDots" color="#328af2" width={60} height={60} />
          </LoadingContainer>
        </ResponsiveContainer>
      </Container>
    </>
  )

  renderViewBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderViewBasedOnAPIStatus()}</>
  }
}

export default ProjectsShowCaseApp
