import React from 'react';
import PropTypes from 'prop-types';

function AuthorIcon(props) {
  return (
    <svg height="1em" width="0.875em" className={props.className} {...props}>
      <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M500,950.8C251,950.8,49.2,748.9,49.2,500C49.2,251,251,49.2,500,49.2C749,49.2,950.8,251,950.8,500C950.8,749,749,950.8,500,950.8z M607.2,688.3c-0.3-30.3-13.3-50.6,0-66c15.8-18.4,35.6-67.8,42.9-110.1c1.3-7.4,9.7-12.7,18.7-20c23.7-9.6,40.8-36.4,40.8-68.4c0-18.1-5.6-34.4-14.6-47.1c-1.2-6.5-2.1-12.8-2-18.6c0.3-67.4,7.3-131.7-21.4-176.1c-85-131.2-255.1-130-343,0c-26.9,39.8-21.6,108.4-21.4,176.1c0,6.1-1.1,12.7-2.6,19.4c-8.6,12.6-14,28.6-14,46.2c0,34.3,19.7,62.9,46,70.4c6.4,4.9,11.7,10,13.5,18c9.6,42.9,21.4,88.1,42.9,110.1c21,21.5,0.3,35.8,0,66c-1,102.2-103,125.5-158.2,130.6c74.5,55.9,166,89.4,265.4,89.4c99.4,0,190.9-33.5,265.4-89.4C710.2,813.7,608.2,790.5,607.2,688.3z" />
    </svg>
  );
}

AuthorIcon.propTypes = {
  className: PropTypes.string,
};

export default AuthorIcon;