/**
 *
 * IndexPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectIndexPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import IndexPageStyle from './IndexPageStyle';

export function IndexPage() {
  useInjectReducer({ key: 'indexPage', reducer });
  useInjectSaga({ key: 'indexPage', saga });

  return (
    <IndexPageStyle>
      <h1 className="pageTitle">
        <span>index page</span>
      </h1>
    </IndexPageStyle>
  );
}

const mapStateToProps = createStructuredSelector({
  indexPage: makeSelectIndexPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(IndexPage);
