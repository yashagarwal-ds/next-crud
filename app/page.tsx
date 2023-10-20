'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Contact from '@/src/components/Contact/Contact'
import Users from '@/src/components/Users/Users';
import {useSelector} from "react-redux";

export default function Home() {

  const state = useSelector((state : any) => state);

  console.log("state", state);

  return (
    <div>
      {/* <h2>Hello World</h2> */}
      {/* <Link href="/about">About</Link> */}
      {/* <Contact /> */}
      <Users />
    </div>
  )
}
