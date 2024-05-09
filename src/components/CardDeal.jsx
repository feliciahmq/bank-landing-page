import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in a few simple steps.
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Discover the perfect credit card offer tailored to your needs through our 
            streamlined process. Start saving money and maximizing rewards.
          </p>
        </h2>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
)

export default CardDeal