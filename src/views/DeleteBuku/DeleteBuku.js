import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { BukuToolbar, BukuDelete } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const DeleteBuku = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BukuToolbar />
			<div className={classes.content}>
				<BukuDelete />
			</div>
		</div>
	);
};

export default DeleteBuku;
