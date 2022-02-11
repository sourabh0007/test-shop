import styles from './Footer.module.css';
function Footer()
{
return(<footer className={styles.footer}>
    <div className={styles.container}>
    <div className={styles.row}>
    <div className={styles.col, styles.textcenter}">
    <ul className={styles.socialshare}>
    <li className={styles.facebook}><a className={styles.button} href="https://www.facebook.com/sharer/sharer.php?u=https://runnercity.com/?utm_source=website&amp;utm_campaign=organic" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"  className="icon icons8-Facebook-Filled" ><path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" style={{fill:'#fff'}}></path></svg>&nbsp; Share This</a></li>
    <li className={styles.twitter}><a className={styles.button} href="https://twitter.com/intent/tweet?text=Check this out! https://runnercity.com/?utm_source=website" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 22"> <path fill="inherit" d="M.5 18.7c10 6.2 22.7-.7 22.5-13 1-.7 1.9-1.6 2.6-2.7-1 .5-2 .8-3.1.9 1.14-.7 2-1.7 2.4-2.9-1 .6-2 1-3.3 1.3-4.3-4.13-10 .3-8.8 4.7-4.3-.2-8-2.3-10.6-5.4C1 4 1.5 7.1 3.9 8.5 3 8.4 2 8.2 1.5 7.8c0 2.6 1.8 4.6 4.1 5.1-.8.2-1.5.3-2.3.1.6 2 2.6 3.6 4.8 3.6-2 1.6-4.7 2.4-7.6 2.1z" style={{fill:'#fff'}}/>
</svg>&nbsp; Tweet This</a></li>
    </ul>
    </div>
    </div>
    <div className={styles.row}>
    <div className={styles.col,styles.textcenter}>
    <ul className={styles.footerSocial}>
    <li className={styles.social}><a href="https://www.facebook.com/groups/2562263050658372" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"  className="icon icons8-Facebook-Filled" ><path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" style={{fill:'#fff'}}></path></svg><span className={styles.sronly}>Facebook</span></a></li>
    <li className={styles.social}><a href="https://mobile.twitter.com/runnercityapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 22"> <path fill="inherit" d="M.5 18.7c10 6.2 22.7-.7 22.5-13 1-.7 1.9-1.6 2.6-2.7-1 .5-2 .8-3.1.9 1.14-.7 2-1.7 2.4-2.9-1 .6-2 1-3.3 1.3-4.3-4.13-10 .3-8.8 4.7-4.3-.2-8-2.3-10.6-5.4C1 4 1.5 7.1 3.9 8.5 3 8.4 2 8.2 1.5 7.8c0 2.6 1.8 4.6 4.1 5.1-.8.2-1.5.3-2.3.1.6 2 2.6 3.6 4.8 3.6-2 1.6-4.7 2.4-7.6 2.1z" style={{fill:'#fff'}}/>
</svg><span className={styles.sronly}>Twitter</span></a></li>
    </ul>
    </div>
    </div>
    <div className={styles.row}>
    <div className={styles.col,styles.textcenter}>
    <p id="copyright" className={styles.small}>© Copyright 2022&nbsp;RunnerCity - All Rights Reserved</p>
    <p><a href="/pages/privacy">Privacy Policy</a> | <a href="/pages/terms">Terms</a> | <a href="#inquire" className="open-popup-link">Get in Touch</a></p>
    </div>
    </div>
    </div>
    </footer>)
}
export default Footer;
