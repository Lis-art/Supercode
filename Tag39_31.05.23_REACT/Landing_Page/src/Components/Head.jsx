import './Head.css'

const Head = () => {
    return (  
        <section className='header'>
            <div className='intro'>
                <h3 className='firstHeadline'>Hello there</h3>
                <h1 className='secondHeadline'>We are Glint</h1>
                <p className='introP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique doloremque delectus maxime repudiandae ab quibusdam consequuntur? Quaerat quod voluptates unde dolor illum quo, nesciunt dolores at cumque sapiente laboriosam iusto consectetur, ullam quis vero inventore consequuntur ipsa! Voluptatum, nulla rerum. Vero pariatur quidem porro possimus iste numquam tenetur error.</p>
            </div>
            <div className='bigNum'>
                <article className='numPBlock border'>
                    <h4>127</h4>
                    <p>Award received</p>
                </article>
                <article className='numPBlock border'>
                    <h4>1505</h4>
                    <p>Cups of Coffee</p>
                </article>
                <article className='numPBlock border'>
                    <h4>109</h4>
                    <p>Projects completed</p>
                </article>
                <article className='numPBlock'>
                    <h4>102</h4>
                    <p>Happy Clients</p>
                </article>
            </div>
        </section>
    );
}
 
export default Head;