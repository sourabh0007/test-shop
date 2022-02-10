import Image from 'next/image'
import Link from 'next/link'
import styles from './HeaderBanner.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import Button from '../components_anatomy/Button'
import { initial } from 'lodash';
import { useState } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
function HeaderBanner()
{
const [emailPH,setEmailPH]=useState('');
const [namePH,setNamePH]=useState('');
const [pwPH,setPwPH]=useState('');
const NamePH=()=>{
    setNamePH('ex. John or Jane Doe')
}
const EmailPH=()=>{
    setEmailPH('ex. yourname@email.com')
}
const PwPH=()=>{
    setPwPH('(123) 456-7890')
}

return(<>
<header className={styles.animated,styles.fadeInDown}>
<ul>
<li className={styles.social}><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"  className="icon icons8-Facebook-Filled" ><path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" style={{fill:'#fff'}}></path></svg>
 <span className="sr-only">Facebook</span></a></li>
<li className={styles.social}><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 22"> <path fill="inherit" d="M.5 18.7c10 6.2 22.7-.7 22.5-13 1-.7 1.9-1.6 2.6-2.7-1 .5-2 .8-3.1.9 1.14-.7 2-1.7 2.4-2.9-1 .6-2 1-3.3 1.3-4.3-4.13-10 .3-8.8 4.7-4.3-.2-8-2.3-10.6-5.4C1 4 1.5 7.1 3.9 8.5 3 8.4 2 8.2 1.5 7.8c0 2.6 1.8 4.6 4.1 5.1-.8.2-1.5.3-2.3.1.6 2 2.6 3.6 4.8 3.6-2 1.6-4.7 2.4-7.6 2.1z" style={{fill:'#fff'}}/>
</svg><span className="sr-only">Twitter</span></a></li>
<li><Button><Link href='#store'><a>Shop Merch</a></Link></Button></li>
</ul>
</header>
<section className={styles.banner}>
<video autoPlay muted loop >         
    <source src="/bg-small.MP4" type="video/mp4"/>       
</video>
<div className={styles.bannercontent}>

    <div className={styles.row}>

        <div className="col text-center animated fadeInDown delay-1">

            <Link href='/' ><a className={styles.logo}><Image src='/logo.svg' alt="Logo" width="100%" height="auto" className={styles.bannerImage}/></a></Link>

            <h1>Empower Locally.<br></br>Gig Cooperatively.</h1>

            <p>Get ready to delete your delivery app!<br></br>
                <b>Runners Keep 100% & Local Businesses Keep 100%</b></p>

        </div>

    </div>

</div>
<div className={styles.signup}>
<div className={styles.container}>
<div className={styles.row}>
<div className='col-12 text-center'>
<h2><a href="#signup">Coming Soon. Be the first to know!</a></h2>
<p>Sign Up for Updates</p>
</div>
</div>
<form acceptCharset="utf-8" action="https://usebasin.com/f/318b425ae143" method="post" className={styles.aositem,styles.aosinitial,styles.aosanimate} data-aos="fade-in">
<input type="hidden" name="utm_source"/>
<input type="hidden" name="utm_medium"/>
<input type="hidden" name="utm_campaign"/>
<div className={"col col-12 col-md-3 "+ styles.labelToggle}>
<label htmlFor="full_name">Your Name*</label>
<input type="text" id="full_name" className="formField" name="full_name" placeholder={namePH} onClick={NamePH}  required=""/>
</div>
<div className={"col col-12 col-md-4 "+ styles.labelToggle}>
<label htmlFor="email_signup">Email Address*</label>
<input type="email" id="email_signup" name="email" placeholder={emailPH} onClick={EmailPH}  required="" className="formField labelToggle"/>
</div>
<div className={"col col-12 col-md-3 "+ styles.labelToggle}>
<label htmlFor="phone">Phone Number*</label>
<input type="tel" id="phone" name="phone" className="phone" placeholder={pwPH} onClick={PwPH} required=""/>
</div>
<div className="col-12 col-md-2">
<Button>Notify Me!</Button>
</div>
</form>
</div>
</div>
</section>

</>)
}
export default HeaderBanner;