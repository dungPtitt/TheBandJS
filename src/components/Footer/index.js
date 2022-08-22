import './Footer.css'

function Footer() {
  return (
    <div id="footer">
      <div class="map">
        <img src="./assets/image/map.jpg" alt="Map" />
      </div>
      <div className="social-list">
        <a href=""><i className="ti-facebook"></i></a>
        <a href=""><i className="ti-instagram"></i></a>
        <a href=""><i className="ti-youtube"></i></a>
        <a href=""><i className="ti-pinterest"></i></a>
        <a href=""><i className="ti-twitter"></i></a>
        <a href=""><i className="ti-linkedin"></i></a>
      </div>
      <div className="author mt-16">
        <p>First Project Web</p>
      </div>
    </div>
  )
}

export default Footer