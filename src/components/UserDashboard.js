import Header from "./Header"
import "./layout/dashboard.css";
import "./layout/notifications.css";

function UserDashboard() {

    return (
        <div>
            <Header />
            <br />
            <div className="box container main">
                <h1 className="main__title title container">דשבורד</h1>
            </div>
            <div className="container row">
                <div className="container box box--sub">
                    <section className="packages container">
                        <h2 className="section__title">משלוחים</h2>
                        <div className="section__row spaced">
                            <div className="packages__categories col">
                                <p>משלוחים לטיפול:</p>
                                <p>משלוחים בטיפול:</p>
                                <p>משלוחים שטופלו:</p>
                            </div>
                            <div className="packages__percentage percentage">
                                50%
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container box box--sub">
                    <section className="calls container">
                        <h2 className="section__title">קריאות</h2>
                        <div className="section__row spaced">
                            <div className="calls__categories col">
                                <p>קריאות לטיפול: 10</p>
                                <p>קריאות בטיפול: 5</p>
                                <p>קריאות שטופלו: 5</p>
                            </div>
                            <div className="calls__percentage percentage">
                                50%
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className="status-tables">
                <div className="container box box--sub">
                    <h2 className="section__title container">מערכת</h2>


                    <div className="status-tables--group status-table__notifications">
                        <h3 className="container">עדכונים</h3>
                        <div className="notifications-menu__item">
                            <div className="container flexed">
                                <a href="#" className="notifications-menu__item__avatar">ע</a>
                                <div className="notifications-menu__item__details">
                                    <div className="notifications-menu__item__details__upper flexed">
                                        <h4>עמי - <span className="role">מנהל</span></h4>
                                        <small className="date small">08/05/2022</small>
                                    </div>
                                    <div className="notifications-menu__item__details__lower flexed">
                                        <p className="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                            מזון
                                            בתאריך 11/03/2023</p>
                                        <a href="#" className="notification-linker">לפרטים</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="notifications-menu__item">
                            <div className="container flexed">
                                <a href="#" className="notifications-menu__item__avatar">ע</a>
                                <div className="notifications-menu__item__details">
                                    <div className="notifications-menu__item__details__upper flexed">
                                        <h4>עמי - <span className="role">מנהל</span></h4>
                                        <small className="date small">08/05/2022</small>
                                    </div>
                                    <div className="notifications-menu__item__details__lower flexed">
                                        <p className="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                            מזון
                                            בתאריך 11/03/2023</p>
                                        <a href="#" className="notification-linker">לפרטים</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="status-tables__linker">
                            <a href="#"><small>הראה הכל</small></a>
                        </div>
                    </div>

                    <div className="seperator"></div>

                    <div className="status-tables--group status-table__packages">
                        <h3 className="container">משלוחים</h3>
                        <div className="notifications-menu__item">
                            <div className="container flexed">
                                <a href="#" className="notifications-menu__item__avatar">ע</a>
                                <div className="notifications-menu__item__details">
                                    <div className="notifications-menu__item__details__upper flexed">
                                        <h4>עמי - <span className="role">מנהל</span></h4>
                                        <small className="date small">08/05/2022</small>
                                    </div>
                                    <div className="notifications-menu__item__details__lower flexed">
                                        <p className="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                            מזון
                                            בתאריך 11/03/2023</p>
                                        <a href="#" className="notification-linker">לפרטים</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notifications-menu__item">
                            <div className="container flexed">
                                <a href="#" className="notifications-menu__item__avatar">ע</a>
                                <div className="notifications-menu__item__details">
                                    <div className="notifications-menu__item__details__upper flexed">
                                        <h4>עמי - <span className="role">מנהל</span></h4>
                                        <small className="date small">08/05/2022</small>
                                    </div>
                                    <div className="notifications-menu__item__details__lower flexed">
                                        <p className="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                            מזון
                                            בתאריך 11/03/2023</p>
                                        <a href="#" className="notification-linker">לפרטים</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="status-tables__linker">
                            <a href="#"><small>הראה הכל</small></a>
                        </div>
                    </div>

                    <div className="seperator"></div>

                    <div className="status-tables--group status-table__packages">
                        <h3 className="container">קריאות</h3>
                        <div className="notifications-menu__item">
                            <div className="container flexed">
                                <a href="#" className="notifications-menu__item__avatar">ע</a>
                                <div className="notifications-menu__item__details">
                                    <div className="notifications-menu__item__details__upper flexed">
                                        <h4>עמי - <span className="role">מנהל</span></h4>
                                        <small className="date small">08/05/2022</small>
                                    </div>
                                    <div className="notifications-menu__item__details__lower flexed">
                                        <p className="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                            מזון
                                            בתאריך 11/03/2023</p>
                                        <a href="#" className="notification-linker">לפרטים</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notifications-menu__item">
                            <div className="container flexed">
                                <a href="#" className="notifications-menu__item__avatar">ע</a>
                                <div className="notifications-menu__item__details">
                                    <div className="notifications-menu__item__details__upper flexed">
                                        <h4>עמי - <span className="role">מנהל</span></h4>
                                        <small className="date small">08/05/2022</small>
                                    </div>
                                    <div className="notifications-menu__item__details__lower flexed">
                                        <p className="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                            מזון
                                            בתאריך 11/03/2023</p>
                                        <a href="#" className="notification-linker">לפרטים</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="status-tables__linker">
                            <a href="#"><small>הראה הכל</small></a>
                        </div>
                    </div>

                    <div className="seperator"></div>

                </div>

            </section>
        </div>
    )
};

export default UserDashboard;