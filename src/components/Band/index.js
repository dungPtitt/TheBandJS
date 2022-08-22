import './Band.css'

function Band() {
    return (
        <div id="band" className="section-content">
            <h2 className="section-heading">The Band</h2>
            <p className="section-sub">We love music</p>
            <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae quidem error repellendus autem ipsa. Excepturi, provident, ipsa ducimus ex deserunt ut eligendi doloribus amet ipsum repellat, magni mollitia sunt!</p>
            <div className="numbers-list">
                <div className="number-iteam">
                    <p className="number-name">Name</p>
                    <img src="./assets/image/avatar1.jpg" alt="Name" className="avatar"/>
                </div>
                <div className="number-iteam">
                    <p className="number-name">Name</p>
                    <img src="./assets/image/avatar1.jpg" alt="Name" className="avatar"/>
                </div>
                <div className="number-iteam">
                    <p className="number-name">Name</p>
                    <img src="./assets/image/avatar1.jpg" alt="Name" className="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default Band