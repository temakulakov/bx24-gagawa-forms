import React, {useState} from 'react';
import styles from 'styles/Modal.module.scss';
import {Modal as ModalUI}  from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {SetterOrUpdater} from "recoil";
import Button from "@mui/material/Button";

interface IModalProps {
    theme: string;
    level: string;
    list: string[];
    active: boolean;
    setSelectedItems: SetterOrUpdater<number[]>;
    id: number[];
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // color: 'white',
    backgroundColor: '#4C5350',
    transform: 'translate(-50%, -50%)',
    width: 600,
    borderRadius: '13px',
    bgcolor: 'background.paper',
    border: '2px solid #FFF',
    boxShadow: 24,
    p: 4,
};


const Modal: React.FC<IModalProps> = ({ theme, level, list, active, setSelectedItems, id }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);

        const timeout: NodeJS.Timeout = setTimeout(() => {
            handleOpen();
        }, 500);

        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
    };

    const handleSuccess = () => {
        setSelectedItems(prev => {
            return prev?.length ? prev.map((el, index) => index === id[0] ? id[1] + 1 : el) : prev;
        });
    }



    return (
        <>
        {
            !active ? <svg className={styles.progress} width="50" height="50" viewBox="0 0 100 100"
                          onClick={handleOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <circle cx="50" cy="50" r="30" pathLength="1" className={styles.rollerBg}></circle>
                    <circle cx="50" cy="50" r="30" pathLength="1" className={`${styles.rollerIndicator}`}></circle>
                </svg>
                    :
                <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                     onClick={handleOpen}
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <circle className={styles.checkmarkCircle} cx="25" cy="25" r="25" fill="none"/>
                    <path className={styles.checkmarkCeck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    <circle cx="25" cy="25" r="22" pathLength="1" className={`${styles.rollerIndicator}`}></circle>
                </svg>
        }


            <ModalUI
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {`${theme} - ${level}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <ol style={{marginLeft: '20px'}}>
                            {list.map((item, index) => <li key={index}>{item}</li>)}
                        </ol>
                    </Typography>
                    <div style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                        <Button variant="contained" sx={{margin: 'auto'}} onClick={handleSuccess}>Выбрать</Button>
                    </div>
                </Box>
            </ModalUI>
        </>
    );
};

export default Modal;
