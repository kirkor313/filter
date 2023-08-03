import { useState } from 'react'
import { Toolbar } from '../Toolbar/Toolbar';
import { ProjectList } from '../ProjectList/ProjectList';

export const Portfolio = ({ projectList}) => {
  const filterButtonList = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [filteredListProjects, setFilteredListProjects] = useState(projectList);
  const [selected, setSelected] = useState('All');

  const filter = (e) => {
    const selectedBtn = e.target.textContent;

    document.querySelectorAll('button').forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');

    if (selectedBtn === 'All') {
      setFilteredListProjects(projectList);
    } else {
      setFilteredListProjects(
        projectList.filter(el => el.category === selectedBtn)
      );
    }

    setSelected(selectedBtn);
  }

  return (
    <div>
      <Toolbar
        filters = { filterButtonList }
        selected = { selected }
        onSelectFilter = { filter }
      />

      <div>
        <ProjectList projects = { filteredListProjects } />
      </div>
    </div>
    );
}
