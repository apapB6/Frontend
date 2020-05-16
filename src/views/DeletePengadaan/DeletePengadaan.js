import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PengadaanToolbar, PengadaanDelete } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const DeletePengadaan = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PengadaanToolbar />
			<div className={classes.content}>
				<PengadaanDelete />
			</div>
		</div>
	);
};

export default DeletePengadaan;
