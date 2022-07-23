import styles from './Badge.module.css'

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <span className={styles.container}>
      {text}
    </span>
  )
}

export { Badge }
