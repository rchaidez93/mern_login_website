import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDropzone} from 'react-dropzone';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    dropZone: {
        borderStyle: 'groove',
        height: '50%',
        textAlign: 'center',
    },
    dropZoneText: {
        paddingTop: '30px'
    },
    button: {
        textAlign: 'center',
        paddingTop: '5px'
    },
    imageList: {
        height: '150px',
        overflow: 'auto',
    },
    listtext: {
        wordBreak: 'break-word'
    }
  });
  

export default function DropZone({onUpload, onDelete, removeFiles}) {
    
    const classes = useStyles();
    const [images, setImages] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setImages([...images, ...acceptedFiles]);
    }, []);

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop,
      });
    
    const handleUpload = () => {
        onUpload(images);
    };

    const handleDelete = () => {
        onDelete();
    }

    const removeFile = (file) => {
        const newFiles = [...images]
        newFiles.splice(newFiles.indexOf(file), 1)
        setImages(newFiles)
    };

    function removeAllFiles(){
        const emptyimages = [];
        const newFiles = {...images, emptyimages};
        setImages(newFiles);
    }

    const files = images.map((file, index) => (
        <ListItem
            className={classes.listtext}
            key={index}
            role={undefined}
            dense
        >
            <ListItemText id={file.path} primary={file.path} />
            <ListItemSecondaryAction onClick={() => removeFile(file)}>
                <IconButton edge="end" aria-label="delete">
                <HighlightOffIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    ));

    return (
        <>
        {removeFiles && removeAllFiles}
            <div {...getRootProps({className: classes.dropZone})}>
                <input {...getInputProps()} />
                <Typography
                className={classes.dropZoneText}
                >
                    Drag 'n' Drop some files here, or click to select files
                </Typography>
            </div>
            <div>
                <aside>
                    <h4>Files</h4>
                    <List className={classes.imageList}>
                        {files}
                    </List>
                </aside>
            </div>
            <Divider />
            <div className={classes.button}>
                <Button onClick={handleUpload} color="primary" variant="outlined">Upload</Button>
            </div>
            <div className={classes.button}>
                <Button onClick={handleDelete} color="primary" variant="outlined">Delete Selected Images</Button>
            </div>
        </>
    );  
}