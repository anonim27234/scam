import { Link } from "react-router-dom";
function Otchet() {

    const projects = [
        {
            img: 'producti_otchet3.PNG',
            title: 'Войска рф получили продуктовые наборы от «Поможем нашим»',
            text: 'Фонд «Поможем нашим» передал более 120 продуктовых наборов российским военным. Общая стоимость этой поставки оценивается в более чем 100 тысяч рублей.',
            date: '10.01.24',
            link: 'pomojem-nashim-peredali-productovie-nabori'
        }
    ]

    return (
        <main className="main">
            <div className="main__container projects">
                <section className="projects__title">
                    <h2>Отчетность</h2>
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
                </section>
                <section className="projects__section">
                    {projects.map((el) =>
                        <Link to={el.link}>
                            <div className="projects__img">
                                <img src={el.img} alt="" />
                            </div>
                            <div className="projects__flex">
                                <h3 className="projects__title">{el.title}</h3>
                                <div className="projects__text">{el.text}</div>
                                <div className="projects__date">{el.date}</div>
                            </div>
                        </Link>
                    )}
                </section>
            </div>
        </main>
    );
}

export default Otchet;