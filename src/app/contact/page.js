import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
import styles from "./contact.module.css"
const page = () => {
  return (
    <>
    <div className={styles.container}>
    <h1>Contact us</h1>
    <ContactCard/>

    <section className={styles.contact_section}>
      <h2>We&apos;d Love to hear <span>from you</span></h2>
      <ContactForm/>

    </section>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.231574645424!2d67.05034793902557!3d24.859894696441444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e831e509dc3%3A0xf11bd7426d366a61!2sSindhi%20Muslim%20Cooperative%20Housing%20Society%20Sindhi%20Muslim%20CHS%20(SMCHS)%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721160773745!5m2!1sen!2s" width={100} height={500} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping}referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default page

export function generateMetadata(){
  return{
    title:"MovieFlix/contact"
  }
}