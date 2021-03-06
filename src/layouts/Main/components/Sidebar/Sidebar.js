import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Cookies from 'js-cookie'

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up('lg')]: {
			marginTop: 64,
			height: 'calc(100% - 64px)'
		}
	},
	root: {
		backgroundColor: theme.palette.white,
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		padding: theme.spacing(2)
	},
	divider: {
		margin: theme.spacing(2, 0)
	},
	nav: {
		marginBottom: theme.spacing(2)
	}
}));

const Sidebar = props => {
	const { open, variant, onClose, className, ...rest } = props;

	const classes = useStyles();

	const otherPages = [
		{
			title: 'Beranda',
			href: '/dashboard',
			icon: <HomeIcon />
		},
		{
			title: 'Buku',
			href: '/buku',
			icon: <MenuBookIcon />
		},
		{
			title: 'Peminjaman',
			href: '/peminjaman',
			icon: <PostAddIcon />
		},
		{
			title: 'Pengadaan',
			href: '/pengadaan',
			icon: <ShoppingCartIcon />
		}
	]

	const pustakawanPages = [
		...otherPages,
		{
			title: 'Pengguna',
			href: '/users',
			icon: <PeopleIcon />
		}
	];

	const getPages = () => {
		if (JSON.parse(Cookies.get('user')).role === 5) {
			return pustakawanPages
		} else {
			return otherPages
		}
	}

	return (
		<Drawer
			anchor="left"
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div
				{...rest}
				className={clsx(classes.root, className)}
			>
				<Profile />
				<Divider className={classes.divider} />
				<SidebarNav
					className={classes.nav}
					pages={getPages()}
				/>
			</div>
		</Drawer>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	variant: PropTypes.string.isRequired
};

export default Sidebar;
