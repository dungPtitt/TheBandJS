import "./modal.css"

function Modal() {
    // const buyBtns = document.querySelectorAll('.js-buy-btn')
    // const modal = document.querySelector('.js-modal')
    // const modalClose = document.querySelector('.js-modal-close')
    // const modalContainer = document.querySelector('.js-modal-container')

    // function showModal() {
    //     modal.classNameList.add('open')
    // }

    // function hideModal() {
    //     modal.classNameList.remove('open')
    // }
    // // show modal
    // buyBtns.forEach(buyBtn => {
    //     buyBtn.addEventListener('click', showModal)
    // })
    // // ẩn modal
    // modalClose.addEventListener('click', hideModal)
    // modal.addEventListener('click', hideModal)
    // // ngăn chặn sự kiện nổi bọt
    // modalContainer.addEventListener('click', function (event) {
    //     event.stopPropagation()
    // })
    return (
        <div className="modal js-modal">
            <div className="modal-container js-modal-container">
                <div className="modal-close js-modal-close">
                    <i className="ti-close"></i>
                </div>
                <header className="modal-header">
                    <i className="ti-bag heading-bag"></i>
                    Tickets
                </header>
                <div className="modal-body">
                    <label for="" className="modal-label">
                        <i className="ti-shopping-cart"></i>
                        Tickets, 15$ per person
                    </label>
                    <input type="text" className="modal-input" placeholder="How many?" />

                    <label for="" className="modal-label">
                        <i className="ti-user"></i>
                        Send to
                    </label>
                    <input type="email" className="modal-input" placeholder="Enter your email" />
                    <button id="modal-buy">
                        Pay
                        <i className="ti-check"></i>
                    </button>
                </div>
                <footer className="modal-footer">
                    <p>Need <a href="">help?</a></p>
                </footer>
            </div>
        </div>
    )
}

export default Modal