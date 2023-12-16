import React from 'react';
import './Projectlist.css';
import PropTypes from 'prop-types';

export default function ProjectList( {projects} ) {
  
  const projectsColumns = [[], [], []];
  let column = 0;

  for (let i = 0; i < projects.length; i += 1) {
    projectsColumns[column].push(projects[i]);
    if (column === 2) column = 0;
    else column += 1;
  }

  return (
    <div className={'portfolio__project-list project-list-portfolio'}>
      <div className={'project-list-portfolio__column'}>
        {projectsColumns[0].map((project) =>
          <div className={'project-list-portfolio__project'} key={Math.random()}>
            <a href={'#task1'}><img className={'project-list-portfolio__img'} src={require(`/src/img/portfolio/${project}`)} alt={project} /></a>
          </div>
        )}
      </div>

      <div className={'project-list-portfolio__column'}>
        {projectsColumns[1].map((project) =>
          <div className={'project-list-portfolio__project'} key={Math.random()}>
            <a href={'#task1'}><img className={'project-list-portfolio__img'} src={require(`/src/img/portfolio/${project}`)} alt={project} /></a>
          </div>
        )}
      </div>

      <div className={'project-list-portfolio__column'}>
        {projectsColumns[2].map((project) =>
          <div className={'project-list-portfolio__project'} key={Math.random()}>
            <a href={'#task1'}><img className={'project-list-portfolio__img'} src={require(`/src/img/portfolio/${project}`)} alt={project} /></a>
          </div>
        )}
      </div>
    </div>
  )
  
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}