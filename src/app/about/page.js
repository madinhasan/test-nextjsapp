import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import FeatureSection from '../component/Feature'


const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutHeading}>About Us</h1>

      <div className={styles.aboutContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at euismod quam, vel finibus justo.
        </p>
        <p>
          Vivamus in ligula a elit eleifend egestas. Sed nec urna nec erat tincidunt consequat vel a augue.
        </p>
        <p>
          Integer bibendum purus at urna gravida, in tincidunt velit eleifend. Quisque ut lectus vel justo volutpat rhoncus.
        </p>
      </div>

      <div className={styles.aboutTeam}>
        <h2>Our Leaders</h2>
        <div className={styles.teamMemberflex} >
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
        </div>
       
      </div>
      <div className={styles.aboutTeam}>
        <h2>Our Team</h2>
        <div className={styles.teamMemberflex} >
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
          <div className={styles.teamMember}>
          <Image src="./images/Female Avatar.png" alt='logo' width={100} height={100} className='size-logo'></Image>
            <p>Rose Dawson</p>
          </div>
        </div>
       
      </div>
      <FeatureSection/>
    </div>
  )
}

export default About