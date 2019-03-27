import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Lib.jsx';
import './Icon.less';

export const IconWrapped = ({ name, brand }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={brand ? name : ['fab', name]} />
  </div>
);

export const Icon = ({ name, brand }) => (
  <FontAwesomeIcon icon={brand ? name : ['fab', name]} />
);
