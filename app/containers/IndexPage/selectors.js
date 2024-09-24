import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the indexPage state domain
 */

const selectIndexPageDomain = state => state.indexPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IndexPage
 */

const makeSelectIndexPage = () =>
  createSelector(
    selectIndexPageDomain,
    substate => substate,
  );

export default makeSelectIndexPage;
export { selectIndexPageDomain };
