import { Link, useParams } from "react-router-dom";
import { otchets } from "../store/otchetStore";

function OtchetDetail() {

    const otchet = useParams()
    const otchetTitle = otchet.projectTitle.split('-').join('')
    const {title, img, text, dopHTML} = otchets[otchetTitle]

    return (
        <main className="main">
            <div className="main__container project-detail">
                <div className="project-detail-navigation">
                    <Link to={'/'} className="project-detail-navigation__link" style={{display: 'flex', alignItems: 'end'}}>
                        <ion-icon name="home-outline"></ion-icon>
                    </Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <Link to={'/otchet'} className="project-detail-navigation__link">отчетность</Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span className="project-detail-navigation__link">этот отчет</span>
                </div>
                <div className="projects__title">
                    <h2>{title}</h2>
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
                </div>
                <section className="project-detail__img">
                    <img src={img} alt="" />
                </section>
                <section className="project-detail__text">
                    {text.map((el) => 
                        <p key={el}>{el}</p>
                    )}
                </section>
                {dopHTML && <section className="project-detail__dopHTML">
                    <div dangerouslySetInnerHTML={{__html: dopHTML}} />
                </section>}
            </div>
        </main>
    );
}

export default OtchetDetail;