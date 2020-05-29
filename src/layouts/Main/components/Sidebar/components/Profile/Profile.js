import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import Cookies from 'js-cookie'

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
		avatar: '/images/avatars/social.png',
		bio: 'Pustakawan'
	};

	const getRole = (id) => {
		if (id === 1) {
			return 'Kepala Sekolah'
		} else if (id === 2) {
			return 'Admin TU'
		} else if (id === 3) {
			return 'Guru'
		} else if (id === 4) {
			return 'Siswa'
		} else if (id === 5) {
			return 'Pustakawan'
		} else if (id === 6) {
			return 'Pengurus Koperasi'
		} else if (id === 7) {
			return 'Anggota Koperasi'
		}
	}

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
				{JSON.parse(Cookies.get('user')).name}
			</Typography>
			<Typography variant="body2">{getRole(JSON.parse(Cookies.get('user')).role)}</Typography>
		</div>
	);
};

Profile.propTypes = {
	className: PropTypes.string
};

export default Profile;
