import {ListItem, ProjectImage, ProjectName} from './styledComponents'

const ProjectItem = props => {
  const {projectDetails} = props
  const {imageUrl, name} = projectDetails

  return (
    <ListItem>
      <ProjectImage src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ListItem>
  )
}

export default ProjectItem
