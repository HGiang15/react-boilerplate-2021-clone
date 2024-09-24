import { useRef, useEffect } from 'react';
import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import history from 'utils/history';
import { useLocation } from 'react-router-dom';

export const handleLogout = router => {
  localStorage.clear();
  history.push(router);
};

export const openExternalLink = link => {
  if (link.includes('http')) {
    window.open(link, '_blank');
  } else {
    window.open(`https://${link}`, '_blank');
  }
};

export const useSearchQuery = () => queryString.parse(useLocation().search);

export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const isAuthenticated = () => localStorage.getItem('token');

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        (event.target.closest('button') &&
          event.target.closest('button').classList.contains('btnToggleMenu'))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export const isIOS = () =>
  [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ].includes(navigator.platform) ||
  (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

export const logout = () => {
  localStorage.clear();
  history.push('/login');
};

export const detechCurrentUserRole = conditionRoles => {
  let result = false;
  const userInfo = JSON.parse(localStorage.getItem('user_info'));
  const { role = '' } = userInfo;
  conditionRoles.map(conditionRole => {
    if (role.toString() === conditionRole.toString()) {
      result = true;
    }
  });
  return result;
};

export const toLocaleString = number => {
  if (number) {
    const cloneNumber = +number;
    return cloneNumber.toLocaleString();
  }
  return '';
};

export const stringGen = len => {
  let text = '';

  const charset =
    'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
};

export const uniqueAlerts = data => {
  if (data.length > 0) {
    return _.uniqBy(data, 'alert_type');
  }
  return [];
};

export const convertDateTime = (dateTime, format) => {
  if (dateTime) {
    return moment
      .parseZone(dateTime)
      .utc(true)
      .format(format);
  }
  return '';
};
