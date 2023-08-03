import './ProjectList.css';

export const ProjectList = ({ projects }) => {
    return (
      <div className = "cards">{
        projects.map((el) => {
          return (
            <div className='card'>
              <img src={ el.img } alt = { el.category }></img>
            </div>
          )})
      }
      </div>
    )
}
