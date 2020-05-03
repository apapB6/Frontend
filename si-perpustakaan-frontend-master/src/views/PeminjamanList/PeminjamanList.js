import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PeminjamanToolbar, PeminjamanTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const PeminjamanList = () => {
	const classes = useStyles();

	const [users] = useState(mockData);

	return (
		<div className={classes.root}>
			<PeminjamanToolbar />
			<div className={classes.content}>
				<PeminjamanTable users={users} />
			</div>
		</div>
	);
};

export default PeminjamanList;
