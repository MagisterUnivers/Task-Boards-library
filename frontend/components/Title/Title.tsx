import classNames from 'classnames'
import styles from './Title.module.scss'

import { TitleProps } from './types';

export function Title ({
  as,
  children,
  white,
}: TitleProps) {
  const titleClassName = classNames(styles.title, {
    [styles['subtitle--white']]: white
  });
  const subtitleClassName = classNames(styles.subtitle, {
    [styles['subtitle--white']]: white
  });
  const Tag = as === 'h1'
    ? <h1 className={titleClassName}>{children.toUpperCase()}</h1>
    : <h2 className={subtitleClassName}>{children.toUpperCase()}</h2>;
  return (
    Tag
  )
}
