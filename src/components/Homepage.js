import React from "react"
import styles from './Homepage.module.css';
import bgimage from '../image/image1.jpg';
import bgimage2 from '../image/image2.jpg';
import bgimage3 from '../image/image3.jpg';

const Homepage =() =>{
    return(
        <div className={styles.main}>
            <div className={styles.background1}>
                <img src={bgimage} alt="background image" />
                <div className={styles.text1}>
                 <span className={styles.txt1}>PARALLAX WEBSITE</span>   
                </div>
            </div>

            <div className={styles.section1}>
                <h2>Section One</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae.
                Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem 
                modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!
                </p>
            </div>
        
            <div className={styles.background2}>
                <img src={bgimage2} alt="background image 2" />
                <div className={styles.text2}>IMAGE TWO TEXT</div>
            </div>

            <div className="section2">
                <h2>Section Two</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae.
                Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem 
                modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!
                </p>
            </div>

            <div className={styles.background3}>
                <img src={bgimage3} alt="background image 3" />
                <div className={styles.text3}>IMAGE THREE TEXT</div>
            </div>

            <div className="section3">
                <h2>Section Three</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae.
                Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem 
                modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!
                </p>
            </div>


        </div>
    )
}

export default Homepage;