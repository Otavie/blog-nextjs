"use client"

import Link from 'next/link' 
import styles from './singleLink.module.css'
import { usePathname } from 'next/navigation'

const SingleLink = ({ item }) => {

  const pathName = usePathname()
  
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {item.title}
    </Link>
  )
}

export default SingleLink