import { Backdrop, Box, Fade, IconButton, Modal } from "@mui/material";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { closeModal } from "../../store/reducers/modalSlice";
import { Close } from "@mui/icons-material";

interface ModalProps {
  id: string;
  title: string;
  size?: string;
  children: ReactNode;
}

const CustomModal = (props: ModalProps) => {
  const { id, title, size = "small", children } = props;
  const dispatch = useAppDispatch();
  const modal: Record<string, any> = useAppSelector(
    ({ modal }: Record<string, any>) => modal ?? {}
  );

  console.log({ modal });
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="modal"
      open={id === modal.index}
      onClose={() => dispatch(closeModal())}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={id === modal.index}>
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

export default CustomModal;
