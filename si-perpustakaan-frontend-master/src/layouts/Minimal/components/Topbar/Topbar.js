import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import palette from 'theme/palette';

const useStyles = makeStyles(() => ({
	root: {
		boxShadow: 'none'
	},
	logo: {
		color: '#FFFFFF'
	},
	toolbar: {
		backgroundColor: palette.background.toolbar
	}
}));

const Topbar = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<AppBar
			{...rest}
			className={clsx(classes.root, className)}
			color="primary"
			position="fixed"
		>
			<Toolbar className={classes.toolbar}>
				<RouterLink to="/">
					<Typography variant="h3" className={classes.logo}>
						SI-Perpustakaan
				</Typography>
				</RouterLink>
			</Toolbar>
		</AppBar>
	);
};

Topbar.propTypes = {
	className: PropTypes.string
};

export default Topbar;
