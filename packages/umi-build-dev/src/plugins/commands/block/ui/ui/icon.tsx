import React from 'react';
import Icon from '@ant-design/icons';

export default props => {
  const SVGIcon = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024" {...props}>
      <path
        d="M949.546 650.8c11.194 0 20.29 8.981 20.48 20.13v80.129a20.48 20.48 0 01-11.06 18.185l-.352.178-432.828 206.25a32 32 0 01-27.531 0L65.427 769.422a20.48 20.48 0 01-11.413-18.363V671.28c0-11.31 9.17-20.48 20.48-20.48 3.06 0 6.082.686 8.842 2.007l414.87 198.558a32 32 0 0027.629 0l414.87-198.558a20.48 20.48 0 018.841-2.007zm0-234c11.194 0 20.29 8.981 20.48 20.13v80.129a20.48 20.48 0 01-11.06 18.185l-.352.178-432.828 206.25a32 32 0 01-27.531 0L65.427 535.422a20.48 20.48 0 01-11.413-18.363V437.28c0-11.31 9.17-20.48 20.48-20.48 3.06 0 6.082.686 8.842 2.007l414.87 198.558a32 32 0 0027.629 0l414.87-198.558a20.48 20.48 0 018.841-2.007zm-426-367.089l.47.22 445.996 212.278c9.973 4.747 14.21 16.68 9.463 26.654a20 20 0 01-9.48 9.471l-445.98 211.763a32 32 0 01-27.619-.004L54.082 298.407c-6.968-3.612-10.989-10.67-11.068-18.006v-.386c-.06-7.346 3.84-14.468 10.704-18.2l.364-.193L496.396 49.935a32 32 0 0127.15-.224z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
  return <Icon component={SVGIcon} {...props} />;
};
