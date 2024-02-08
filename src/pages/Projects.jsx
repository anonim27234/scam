import { Link } from "react-router-dom";

function Projects() {
    return (
        <main className="main">
            <div className="main__container projects">
                <div className="project-detail-navigation">
                    <Link to={'/'} className="project-detail-navigation__link" style={{display: 'flex', alignItems: 'end'}}>
                        <ion-icon name="home-outline"></ion-icon>
                    </Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span className="project-detail-navigation__link">этот проект</span>
                </div>
                <div className="projects__title">
                    <h2>Закупка Боевых Дронов для Усиления Военного Потенциала</h2>
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
                </div>
                <section className="project-detail__img">
                    <img src="droni_sbor2.png" alt="" />
                </section>
                <section className="project-detail__text">
                    <p>Фонд «Поможем нашим» продолжает модернизацию военного арсенала, сосредотачивая внимание на инновационных технологиях. Уже закуплено 15 боевых дронов, а сбор средств для приобретения еще 35-ти ведется активно.</p>
                    <p>Этот значимый шаг направлен на усиление военного потенциала страны, а также на обеспечение современным оборудованием наших военных. В ходе первой партии закупки было приобретено 15 передовых FPV дронов 7inch. Эти боевые дроны спроектированы для точных ударов по важным объектам противника.</p>
                    <p>В настоящее время идет активная фаза сбора средств для приобретения еще 35-ти боевых дронов, суммарная стоимость которых оценивается в 1 млн 500 тысяч рублей. Этот проект является частью стратегии обновления военной техники и экипировки, направленной на обеспечение высокой готовности к современным вызовам и угрозам.  Ожидается, что приобретение новых боевых дронов значительно расширит возможности армии, обеспечивая ей преимущество в решении широкого спектра задач на поле боя.</p>
                </section>
                <section className="projects__donate">
                    <Link className="btn" to="https://www.donationalerts.com/r/pomojemnashim">Пожертвовать</Link>
                </section>
            </div>
        </main>
    );
}

export default Projects;