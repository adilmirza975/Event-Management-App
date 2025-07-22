
import { useState } from "react";
import eventDetails from "../../api/eventData.json";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const BookingForm = ({ event, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    
    setTimeout(() => {
      const id =
        "BK-" + Math.random().toString(36).substring(2, 10).toUpperCase();
      setBookingId(id);
      setIsSubmitted(true);
      setIsLoading(false);
      onSubmit({ ...formData, bookingId: id, event });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="booking-confirmation">
        <div className="confirmation-animation">
          <div className="checkmark-circle">
            <FaCheckCircle className="success-icon" />
          </div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>
        <h3>Booking Confirmed!</h3>
        <p className="confirmation-text">
          Your booking for <strong>{event.EventName}</strong> is confirmed.
        </p>
        <div className="booking-id-badge">
          <span>Booking ID:</span> {bookingId}
        </div>
        <p className="confirmation-instruction">
          Please show this ID at the entrance for payment and entry.
        </p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form text-2xl">
      <div className="form-header">
        <h3>Book Tickets for {event.EventName}</h3>
        <button type="button" onClick={onClose} className="close-form-btn">
          <IoClose />
        </button>
      </div>

      <div className="form-group floating">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label className="text-2xl" htmlFor="name">
          Full Name
        </label>
        <div className="underline"></div>
      </div>

      <div className="form-group floating">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="email">Email</label>
        <div className="underline"></div>
      </div>

      <div className="form-group floating">
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder=" "
        />
        <label htmlFor="phone">Phone Number</label>
        <div className="underline"></div>
      </div>

      <div className="form-group">
        <label htmlFor="tickets">Number of Tickets</label>
        <div className="ticket-counter">
          <button
            type="button"
            className="counter-btn"
            onClick={() =>
              setFormData({
                ...formData,
                tickets: Math.max(1, formData.tickets - 1),
              })
            }
            disabled={formData.tickets <= 1}
          >
            -
          </button>
          <span className="ticket-count">{formData.tickets}</span>
          <button
            type="button"
            className="counter-btn"
            onClick={() =>
              setFormData({
                ...formData,
                tickets: Math.min(10, formData.tickets + 1),
              })
            }
            disabled={formData.tickets >= 10}
          >
            +
          </button>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? <span className="spinner"></span> : "Confirm Booking"}
        </button>
      </div>
    </form>
  );
};

export const EventCard = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setShowBookingForm(true);
  };

  const handleCloseForm = () => {
    setShowBookingForm(false);
    setSelectedEvent(null);
  };

  const handleBookingSubmit = (bookingData) => {
    console.log("Booking submitted:", bookingData);
  };

  return (
    <section>
      <h1 className="container-title">
       Dive Into The World Of Events
      </h1>

      <div className="gradient-cards">
        {eventDetails.map((country) => {
          const { image, id, EventName, City, AboutEvent, date, TicketPrice } =
            country;

          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <div className="card-image-container">
                  <img className="card-image" src={image} alt={EventName} />
                  <div className="card-price-badge">Rs-{TicketPrice}</div>
                </div>
                <div className="card-content">
                  <p className="card-title">{EventName}</p>
                  <div className="card-meta">
                    <span className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {City}
                    </span>
                    <span className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                      </svg>
                      {date}
                    </span>
                  </div>
                  <p className="card-description">{AboutEvent}</p>
                </div>

                <button
                  className="book-now-btn"
                  onClick={() => handleBookNow(country)}
                >
                  <span>Book Now</span>
                  <FaArrowRightLong className="arrow-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <BookingForm
              event={selectedEvent}
              onClose={handleCloseForm}
              onSubmit={handleBookingSubmit}
            />
          </div>
        </div>
      )}
    </section>
  );
};

// CSS styles
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes checkmark {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes confetti {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
  }

 
 
  
 
 

  

  .card-image-container {
    position: relative;
    height: 300px;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .card:hover .card-image {
    transform: scale(1.05);
  }

  .card-price-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px 15px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 20px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-content {
    padding: 20px;
    flex-grow: 1;
  }

 

  .card-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }

  .meta-icon {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

 

  .book-now-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 0 20px 20px;
    padding: 12px;
    border-radius: 10px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  .book-now-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
  }

  .book-now-btn .arrow-icon {
    transition: transform 0.3s ease;
  }

  .book-now-btn:hover .arrow-icon {
    transform: translateX(3px);
  }

  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    padding: 2rem;
    border-radius: 20px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: fadeIn 0.4s ease;
  }

  /* Booking form styles */

  .booking-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: white;
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .booking-form h3 {
    font-size: 1.5rem;
    margin: 0;
    background: linear-gradient(90deg, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .close-form-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.9rem;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .close-form-btn:hover {
    color: white;
  }

  .form-group {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .form-group.floating input {
    width: 100%;
    padding: 1rem 0.5rem 0.5rem;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    color: white;
    font-size: 2.5rem;
    transition: all 0.3s ease;
  }

  .form-group.floating input:focus {
    outline: none;
    border-bottom-color: #6366f1;
  }

  .form-group.floating label {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .form-group.floating input:focus + label,
  .form-group.floating input:not(:placeholder-shown) + label {
    top: 0;
    left: 0.5rem;
    font-size: 1.2rem;
    color: #a5b4fc;
  }

  .form-group.floating .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #6366f1;
    transition: width 0.3s ease;
  }

  .form-group.floating input:focus ~ .underline {
    width: 100%;
  }

  .ticket-counter {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  .counter-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .counter-btn:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .counter-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .ticket-count {
    font-size: 1.2rem;
    min-width: 30px;
    text-align: center;
  }

  .form-actions {
    margin-top: 2rem;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    position: relative;
    overflow: hidden;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
  }

  .submit-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .submit-btn:hover::after {
    transform: translateX(100%);
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Confirmation message styles */
  .booking-confirmation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    color: white;
    padding: 1rem;
  }

  .confirmation-animation {
    position: relative;
    width: 120px;
    height: 120px;
  }

  .checkmark-circle {
    width: 100%;
    height: 100%;
    background: rgba(76, 175, 80, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: checkmark 0.5s cubic-bezier(0.42, 0, 0.27, 1.55) forwards;
  }

  .success-icon {
    color: #4CAF50;
    font-size: 4rem;
  }

  .confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #f0f;
    border-radius: 50%;
    animation: confetti 2s ease-out forwards;
  }

  .confetti:nth-child(2) {
    background-color: #0ff;
    left: 20%;
    animation-delay: 0.2s;
  }

  .confetti:nth-child(3) {
    background-color: #ff0;
    left: 40%;
    animation-delay: 0.4s;
  }

  .confetti:nth-child(4) {
    background-color: #f00;
    left: 60%;
    animation-delay: 0.6s;
  }

  .confetti:nth-child(5) {
    background-color: #0f0;
    left: 80%;
    animation-delay: 0.8s;
  }

  .confetti:nth-child(6) {
    background-color: #00f;
    top: 20%;
    animation-delay: 0.1s;
  }

  .confetti:nth-child(7) {
    background-color: #f0f;
    top: 40%;
    animation-delay: 0.3s;
  }

  .confetti:nth-child(8) {
    background-color: #ff0;
    top: 60%;
    animation-delay: 0.5s;
  }

  .booking-confirmation h3 {
    font-size: 1.8rem;
    margin: 0;
    background: linear-gradient(90deg, #4CAF50, #8BC34A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .confirmation-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  .booking-id-badge {
    background: rgba(76, 175, 80, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(76, 175, 80, 0.5);
  }

  .booking-id-badge span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }

  .confirmation-instruction {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 80%;
  }

  .close-btn {
    margin-top: 1.5rem;
    padding: 0.8rem 2rem;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  }

  .close-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
  }
`;

// Inject styles
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
