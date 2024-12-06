import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal({ image, openPopup }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="work-item">
        <div className="work-item__photo">
          <img
            className="work__image"
            src={image}
            onClick={handleOpen}
            alt=""
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <img
                className="popup__picture-photo"
                src={image}
                alt="Интерьер"
              />
              <span onClick={handleClose} className="popup__close">
                &times;
              </span>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
