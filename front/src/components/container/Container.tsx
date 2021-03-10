import React from 'react';
import clsx from 'clsx';

import './Container.scss';

export interface ContainerProps {
  /**
   * Add the style required to be a Router child.
   * @default false
   */
  viewContainer?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  const { children, className, viewContainer = false } = props;

  return <div className={clsx(['Container', { viewContainer: viewContainer }, className])}>{children}</div>;
};

export default Container;
