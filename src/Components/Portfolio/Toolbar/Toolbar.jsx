import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

export default class Toolbar extends React.Component {
  render() {
    const { filters, selected } = this.props;

    return (
      <nav className={'portfolio__toolbar toolbar-portfolio'}>
        <ul className={'toolbar-portfolio__list'}>
          {filters.map((filter) =>
            <li key={filter}>
              <button
                className={
                  'toolbar-portfolio__btn' +
                  `${filter === selected ? ' toolbar-portfolio__btn_selected' : ''}`
                }
                onClick={() => this.props.onSelectFilter(filter)}
              >{filter}</button>
            </li>)}
        </ul>
      </nav>
    )
  }
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}

Toolbar.defaultProps = {
  filters: ['All'],
  selected: 'All',
  onSelectFilter: () => { },
};