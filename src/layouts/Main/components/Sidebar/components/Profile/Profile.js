import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { withCookies } from 'react-cookie';
import { getRole } from '../../../../../../utils'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'fit-content'
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		marginTop: theme.spacing(1)
	}
}));

const Profile = props => {
	const { className, allCookies, ...rest } = props;

	const classes = useStyles();

	const user = {
		name: 'Ira',
		avatar: '/images/avatars/avatar_11.png',
		bio: 'Pustakawan'
	};

	return (
		<div
			{...rest}
			className={clsx(classes.root, className)}
		>
			<Avatar
				alt="Person"
				className={classes.avatar}
				component={RouterLink}
				src={user.avatar}
				to="/account"
			/>
			<Typography
				className={classes.name}
				variant="h4"
			>
				{allCookies.user.name}
			</Typography>
			{/* <Typography variant="body2">{getRole.find(dt => dt.id === allCookies.user.id).nama}</Typography> */}
		</div>
	);
};

Profile.propTypes = {
	className: PropTypes.string
};

export default withCookies(Profile);
