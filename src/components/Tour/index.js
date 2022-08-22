import './Tour.css'

function Tour() {
  return (
    <div id="band-tour">
      <div className="section-content">
        <h2 className="section-heading text-white">Tour Datas</h2>
        <p className="section-sub text-white">Remember to book your tickets!</p>
        <ul className="list-ticket">
          <li className="ticket-iteam">
            September
            <span className="status">Sold out</span>
          </li>
          <li className="ticket-iteam">
            October
            <span className="status">Sold out</span>
          </li>
          <li className="ticket-iteam">
            November
            <span className="quantity">3</span>
          </li>
        </ul>
        <div className="places-list">
          <div className="place-item">
            <img src="./assets/image/places/newyork.jpg" alt="tour1" />
            <div className="place-body">
              <h3 className="place-heading">New York</h3>
              <p className="place-date">Fri 12 Nov 2022</p>
              <p className="place-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="place-buy-btn js-buy-btn">Buy Tickets</button>
            </div>
          </div>
          <div className="place-item">
            <img src="./assets/image/places/newyork.jpg" alt="tour1" />
            <div className="place-body">
              <h3 className="place-heading">New York</h3>
              <p className="place-date">Fri 12 Nov 2022</p>
              <p className="place-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="place-buy-btn js-buy-btn">Buy Tickets</button>
            </div>
          </div>
          <div className="place-item">
            <img src="./assets/image/places/newyork.jpg" alt="tour1" />
            <div className="place-body">
              <h3 className="place-heading">New York</h3>
              <p className="place-date">Fri 12 Nov 2022</p>
              <p className="place-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="place-buy-btn js-buy-btn">Buy Tickets</button>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  )
}

export default Tour