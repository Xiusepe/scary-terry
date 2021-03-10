// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// Reusability based on link below.
// - https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Grid/Grid.js

import React from 'react';
import clsx from 'clsx';

import './Grid.scss';

const Grid = (props: GridProps) => {
  // Default CSS values
  // flex: '0 1 auto',
  // flex-direction: 'row',
  // align-items: 'flex-start',
  // flex-wrap: 'wrap',
  // justify-content: 'flex-start',
  const {
    alignContent = 'stretch',
    alignItems = 'flex-start',
    container = false,
    className: classNameProp,
    direction = 'row',
    justifyContent = 'flex-start',
    item = false,
    wrap = 'wrap',
    zeroMinWidth = false,
    maxHeight = false,
    s = false,
    m = false,
    l = false,
    xl = false,
    spacing = 0,
    ...other
  } = props;

  const className = clsx([
    'Grid',
    {
      container: container,
      item: item,
      [`size-s-${String(s)}`]: item && s !== false,
      [`size-m-${String(m)}`]: item && m !== false,
      [`size-l-${String(l)}`]: item && l !== false,
      [`size-xl-${String(xl)}`]: item && xl !== false,
      [`spacing-${String(spacing)}`]: container && spacing !== 0,
      [`direction-${String(direction)}`]: direction !== 'row',
      [`wrap-${String(wrap)}`]: wrap !== 'wrap',
      [`align-items-${String(alignItems)}`]: alignItems !== 'flex-start',
      [`align-content-${String(alignContent)}`]: alignContent !== 'stretch',
      [`justify-content-${String(justifyContent)}`]:
        justifyContent !== 'flex-start',
      zeroMinWidth: zeroMinWidth,
      maxHeight: maxHeight,
    },
    classNameProp,
  ]);

  return <div className={className} {...other} />;
};

export default Grid;

export interface GridProps {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   * @default 'stretch'
   */
  alignContent?: AlignContentType;
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   * @default 'stretch'
   */
  alignItems?: AlignItemsType;
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container?: Boolean;
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction?: DirectionType;
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item?: boolean;
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   * @default 'flex-start'
   */
  justifyContent?: JustifyContentType;
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap?: WrapType;
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * @default false
   */
  zeroMinWidth?: boolean;
  /**
   * If `true`, it sets `height: 100%` on the item.
   * @default false
   */
  maxHeight?: boolean;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied to the medias smaller than `phone` breakpoint.
   * @default false
   */
  s?: GridValuesType;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied to the medias between `phone` and `tablet` breakpoints.
   * @default false
   */
  m?: GridValuesType;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied to medias between `tablet` and `desktop` breakpoints.
   * @default false
   */
  l?: GridValuesType;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied to medias wider than `desktop` breakpoint.
   * @default false
   */
  xl?: GridValuesType;
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing?: SpacingValuesType;
}

export type AlignContentType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'stretch';

export type AlignItemsType =
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch';

export type DirectionType = 'column-reverse' | 'column' | 'row-reverse' | 'row';

export type WrapType = 'nowrap' | 'wrap-reverse' | 'wrap';

export type JustifyContentType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type GridValuesType =
  | 'auto'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | false;

export type SpacingValuesType = 0 | 1 | 2 | 3 | 4 | 5;
