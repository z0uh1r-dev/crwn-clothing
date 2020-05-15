import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overvieww">
    {(collections && collections.length > 0) ? collections.map(({ id, ...otherCollectionProps }) => (
    <CollectionPreview key={id} {...otherCollectionProps} />
  )) : <h1>Loading ...</h1>}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);