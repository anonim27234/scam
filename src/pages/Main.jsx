import { Link } from "react-router-dom";
import SwiperComponent from "../components/SwiperComponent";
function Main() {
    const projects = [
        {
            img: 'producti_otchet3.PNG',
            title: 'Войска рф получили продуктовые наборы от «Поможем нашим»',
            text: 'Фонд «Поможем нашим» передал более 120 продуктовых наборов российским военным. Общая стоимость этой поставки оценивается в более чем 100 тысяч рублей.',
            date: '10.01.24',
            link: '/otchet/pomojem-nashim-peredali-productovie-nabori'
        }
    ]

    return (
        <main className="main">
            <div className="main__container">
                <section>
                    <SwiperComponent />
                </section>
                <section>
                    <h1>Пожертвовать нашим</h1>
                    <div className="main__flex">
                        <div>
                            <div className="main__text">
                                <img className="main__img" src="droni_sbor1.png" alt="" />
                                <p>Фонд «Поможем нашим» приобрел первые 15 боевых дронов с инновационными возможностями и передал их армии РФ. В настоящее время ведется сбор средств для закупки еще 35 дронов, с общей целью достичь 50 единиц.</p>
                                <p>Дроны стали неотъемлемой частью современной войны, и армия всегда в них нуждается. Поэтому мы объявили сбор в размере 1 миллион и 500 тысяч рублей на закупку FPV-дронов 7inch.</p>
                            </div>
                            <div className="main__donate">
                                <Link className="btn" to="https://www.donationalerts.com/r/pomojemnashim">Пожертвовать</Link>
                                <Link className="btn-2" to="/projects">Подробнее</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Как сделать пожертвование</h2>
                    <ul>
                        <li>Нажмите кнопку «Пожертовать»</li>
                        <li>В открышемся сайте можете указать кто вы (не обезательно), 
                            указать сумму которую хотите пожертвовать, написать свои пожелания (не обезательно) 
                            и нажать кнопку пожертвовать</li>
                        <li>Дальше вам предложат различные способы оплаты, выберите подходящий для вас и следуйте иструкциям на сайте</li>
                        <li>Если у вас возникли вопросы, вы всегда можете связаться с нами. Наш email: pomojemnashim@mail.ru, 
                            телефон: +7 (495) 678-03-51, 679-55-14
                        </li>
                    </ul>
                </section>
                <h2>Отчетность</h2>
                <section style={{border: '1px solid rgba(0,0,0,.125)'}} className="projects__section">
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

export default Main;