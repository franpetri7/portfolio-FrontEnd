import style from '../About/About.module.css'
import gifImage from '../../assets/rickportal.png'

const About = () => {
    return(
        <div className={style.about}>
            <img src={gifImage} alt="" />
            <h1>soy un maldito about bro</h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias veritatis architecto odio, rem nemo illum ea vel cum totam consequuntur neque pariatur dicta non excepturi minima quod. Necessitatibus, exercitationem a.</p>
        </div>
    )
};
export default About