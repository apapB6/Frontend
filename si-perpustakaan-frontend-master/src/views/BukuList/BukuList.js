import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { BukuToolbar, BukuTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const BukuList = () => {
	const classes = useStyles();

	const [users] = useState(mockData);

	return (
		<div className={classes.root}>
			<BukuToolbar />
			<div className={classes.content}>
				<BukuTable users={users} />
			</div>
		</div>
	);
};

export default BukuList;
