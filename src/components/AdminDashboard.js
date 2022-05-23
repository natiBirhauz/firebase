import AdminPer from "./AdminPer"
import Header from "./Header"
import "./components/layout/dashboard.css";

function AdminDashboard() {

    return (
        <div>
            <Header />
            <AdminPer />
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
                            <div className="packages__percentage percentage col">
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
                            <div className="calls__percentage percentage col">
                                50%
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default AdminDashboard;