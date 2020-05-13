import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PengadaanToolbar, PengadaanEdit } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const EditPengadaan = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PengadaanToolbar />
			<div className={classes.content}>
				<PengadaanEdit />
			</div>
		</div>
	);
};

export default EditPengadaan;
