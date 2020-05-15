import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
  [selectShop],
  shop => shop.sections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopSections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => {
  return createSelector(
    [selectShopSections],
    collections => collections[collectionUrlParam]
  )
}
  