import React from 'react';

const Book_table = () => {
    return (
        <div>
            <section id="book-a-table" className="book-a-table">
      <div className="container">

        <div className="section-header">
          <h2>Book A Table</h2>
          <p>Book <span>Your Stay</span> With Us</p>
        </div>

        <div className="row g-0">

          <div className="col-lg-4 reservation-img" style={{backgroundImage: "url(/images/reservation.jpg)", backgroundRepeat:"no-repeat"}}></div>

          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" name="date" className="form-control" id="date" placeholder="Date" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="time" id="time" placeholder="Time" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="number" className="form-control" name="people" id="people" placeholder="# of people" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3"></div>
              <div className="text-center"><button type="submit">Book a Table</button></div>
            </form>
          </div>
          </div>

      </div>
    </section>
        </div>
    );
};

export default Book_table;