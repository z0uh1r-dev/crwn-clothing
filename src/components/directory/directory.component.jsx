import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component.jsx';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {(sections && sections.length > 0) ? sections.map(({ id, title, imageUrl, linkUrl, size }) => (
      <MenuItem 
        key={id}
        size={size}
        imageUrl={imageUrl}
        linkUrl={`shop/${linkUrl}`}
        title={title}/>
    )) : <h1>Loading ...</h1> }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);