/**
 *
 * Loading
 *
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import LoadingStyle from './LoadingStyle';

function Loading({ loading, ...props }) {
  return (
    <>
      {loading && (
        <LoadingStyle>
          <div className={classNames(props.className, 'loadingWrapper')}>
            <div className="loadingIcon" />
          </div>
        </LoadingStyle>
      )}
    </>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default Loading;
