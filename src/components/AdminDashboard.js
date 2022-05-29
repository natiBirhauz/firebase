import AdminPer from "./AdminPer"
import Header from "./Header"
import "./layout/dashboard.css";
import "./layout/notifications.css";

function AdminDashboard() {

    return (
        <div>
            <Header />
            <AdminPer url="/dashboard" />
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
            
        <section class="status-tables">
            <div class="container box box--sub">
                <h2 class="section__title container">מערכת</h2>


                <div class="status-tables--group status-table__notifications">
                    <h3 class="container">עדכונים</h3>
                    <div class="notifications-menu__item">
                        <div class="container flexed">
                            <a href="#" class="notifications-menu__item__avatar">ע</a>
                            <div class="notifications-menu__item__details">
                                <div class="notifications-menu__item__details__upper flexed">
                                    <h4>עמי - <span class="role">מנהל</span></h4>
                                    <small class="date small">08/05/2022</small>
                                </div>
                                <div class="notifications-menu__item__details__lower flexed">
                                    <p class="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                        מזון
                                        בתאריך 11/03/2023</p>
                                    <a href="#" class="notification-linker">לפרטים</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="notifications-menu__item">
                        <div class="container flexed">
                            <a href="#" class="notifications-menu__item__avatar">ע</a>
                            <div class="notifications-menu__item__details">
                                <div class="notifications-menu__item__details__upper flexed">
                                    <h4>עמי - <span class="role">מנהל</span></h4>
                                    <small class="date small">08/05/2022</small>
                                </div>
                                <div class="notifications-menu__item__details__lower flexed">
                                    <p class="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                        מזון
                                        בתאריך 11/03/2023</p>
                                    <a href="#" class="notification-linker">לפרטים</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="status-tables__linker">
                        <a href="#"><small>הראה הכל</small></a>
                    </div>
                </div>

                <div class="seperator"></div>

                <div class="status-tables--group status-table__packages">
                    <h3 class="container">משלוחים</h3>
                    <div class="notifications-menu__item">
                        <div class="container flexed">
                            <a href="#" class="notifications-menu__item__avatar">ע</a>
                            <div class="notifications-menu__item__details">
                                <div class="notifications-menu__item__details__upper flexed">
                                    <h4>עמי - <span class="role">מנהל</span></h4>
                                    <small class="date small">08/05/2022</small>
                                </div>
                                <div class="notifications-menu__item__details__lower flexed">
                                    <p class="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                        מזון
                                        בתאריך 11/03/2023</p>
                                    <a href="#" class="notification-linker">לפרטים</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="notifications-menu__item">
                        <div class="container flexed">
                            <a href="#" class="notifications-menu__item__avatar">ע</a>
                            <div class="notifications-menu__item__details">
                                <div class="notifications-menu__item__details__upper flexed">
                                    <h4>עמי - <span class="role">מנהל</span></h4>
                                    <small class="date small">08/05/2022</small>
                                </div>
                                <div class="notifications-menu__item__details__lower flexed">
                                    <p class="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                        מזון
                                        בתאריך 11/03/2023</p>
                                    <a href="#" class="notification-linker">לפרטים</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="status-tables__linker">
                        <a href="#"><small>הראה הכל</small></a>
                    </div>
                </div>

                <div class="seperator"></div>

                <div class="status-tables--group status-table__packages">
                    <h3 class="container">קריאות</h3>
                    <div class="notifications-menu__item">
                        <div class="container flexed">
                            <a href="#" class="notifications-menu__item__avatar">ע</a>
                            <div class="notifications-menu__item__details">
                                <div class="notifications-menu__item__details__upper flexed">
                                    <h4>עמי - <span class="role">מנהל</span></h4>
                                    <small class="date small">08/05/2022</small>
                                </div>
                                <div class="notifications-menu__item__details__lower flexed">
                                    <p class="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                        מזון
                                        בתאריך 11/03/2023</p>
                                    <a href="#" class="notification-linker">לפרטים</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="notifications-menu__item">
                        <div class="container flexed">
                            <a href="#" class="notifications-menu__item__avatar">ע</a>
                            <div class="notifications-menu__item__details">
                                <div class="notifications-menu__item__details__upper flexed">
                                    <h4>עמי - <span class="role">מנהל</span></h4>
                                    <small class="date small">08/05/2022</small>
                                </div>
                                <div class="notifications-menu__item__details__lower flexed">
                                    <p class="notifications-menu__item__details__description">ל-הפנינג חנוכה דרוש ספק
                                        מזון
                                        בתאריך 11/03/2023</p>
                                    <a href="#" class="notification-linker">לפרטים</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="status-tables__linker">
                        <a href="#"><small>הראה הכל</small></a>
                    </div>
                </div>

                <div class="seperator"></div>

            </div>

        </section>
        </div>
    )
};

export default AdminDashboard;