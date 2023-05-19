import { Backdrop, Box, Fade, IconButton, Modal } from '@mui/material';
import { ReactNode } from 'react';
import { Close } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { closeModal } from '../../store/reducers/modalSlice';
import { RootState } from '../../app/store';

interface ModalProps {
  id: string;
  title: string;
  children: ReactNode;
  size?: string;
}

const CustomModal = (props: ModalProps) => {
  const { id, title, children, size } = props;
  const dispatch = useAppDispatch();
  const modalConfig = useAppSelector(({ modal }: RootState) => modal ?? {});

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="modal"
      open={id === modalConfig.index}
      onClose={() => dispatch(closeModal())}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={id === modalConfig.index}>
        <Box className={`modal-content modal-${size}`}>
          <Box className="modal-header">
            <h2 id="modal-title" className="text-primary m-0">
              {title}
            </h2>
            <IconButton
              color="primary"
              aria-label="Left"
              size="small"
              onClick={() => dispatch(closeModal())}
              className="modal-close"
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>
          <Box className="modal-body scrollbar-hover">{children}</Box>
        </Box>
      </Fade>
    </Modal>
  );
};

CustomModal.defaultProps = {
  size: 'small',
};

export default CustomModal;
