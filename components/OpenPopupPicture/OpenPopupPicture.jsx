export default function OpenPopupPicture({
  setPopupOpen,
  popupOpen,
  children,
}) {
  return popupOpen ? (
    <div className="popup popup__picture" onClick={() => setPopupOpen(false)}>
      <span className="popup__close" onClick={() => setPopupOpen(false)}>
        &times;
      </span>
      <img
        onClick={(e) => e.stopPropagation()}
        className="popup__picture-photo"
        src="https://i.ibb.co/FmMnNRc/maiik10.jpg"
        alt=""
      />
      {children}
    </div>
  ) : (
    ''
  );
}
