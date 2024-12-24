import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';

const AlertDialog = ({ text_origin, open }) => {
  const [dialogOpen, setDialogOpen] = useState(open);

  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            top: '-6vh',
            margin: 'auto',
            right: '0vw',
            width: '50vw',
            padding: '8vw 10vw',
            backgroundColor: 'rgb(255 201 164)',
            borderRadius: '3vw',
            border: '2px solid rgb(0 37 83)',
          },
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
            {text_origin}
        </div>
      </Dialog>
    </>
  );
};

export default AlertDialog;
