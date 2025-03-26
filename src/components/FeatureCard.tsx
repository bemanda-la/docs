import React from 'react';
import clsx from 'clsx';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps): JSX.Element {
  return (
    <div className={clsx('card', styles.featureCard, className)}>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
} 