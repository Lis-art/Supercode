import './FirstSection.css'

const FirstSection = () => {
    return ( 
        <section>
            <div className='headerBlock'>
                <h3>What we do</h3>
                <h2>We've got everything you need to launch and grow your business</h2>
            </div>
            <div className='infoBlock'>
                <div className='oben'>
                    <article className='infoBlockEl'>
                        <div className='imgTitle'>
                            <img src="./src/assets/img/brush.svg" alt="" />
                            <h4>Brand Identity</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium totam, repudiandae error provident numquam neque veritatis ipsum officia velit sed iusto eaque, nobis doloremque.</p>
                    </article>
                    <article className='infoBlockEl'>
                        <div className='imgTitle'>
                            <img src="./src/assets/img/object-select.svg" alt="" />
                            <h4>Illustration</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium totam, repudiandae error provident numquam neque veritatis ipsum officia velit sed iusto eaque, nobis doloremque.</p>
                    </article>
                </div>
                <div className='unten'>
                    <article className='infoBlockEl'>
                        <div className='imgTitle'>
                            <img src="./src/assets/img/megaphone.svg" alt="" />
                            <h4>Marketing</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium totam, repudiandae error provident numquam neque veritatis ipsum officia velit sed iusto eaque, nobis doloremque.</p>
                    </article>
                    <article className='infoBlockEl'>
                        <div className='imgTitle'>
                            <img src="./src/assets/img/globe-line.svg" alt="" />
                            <h4>Web Design</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, praesentium totam, repudiandae error provident numquam neque veritatis ipsum officia velit sed iusto eaque, nobis doloremque.</p>
                    </article>
                </div>
            </div>    
        </section>
     );
}
 
export default FirstSection;