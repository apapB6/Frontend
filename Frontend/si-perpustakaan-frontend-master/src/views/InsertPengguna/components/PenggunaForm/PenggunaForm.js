import React, { useState } from 'react';
import { Link as RouterLink, withRouter, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	Grid,
	Button,
	TextField,
	Modal
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {},
	btn: {
		background: '#5E9A78',
		color: '#FFFFFF',
		marginTop: '10px'
	},
	paper: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: 'none',
		padding: theme.spacing(2, 4, 3),
	},
	success: {
		fontSize: '80px',
		margin: '0 0 20px'
	}
}));

const PenggunaForm = props => {
	const history = useHistory();
	const { className, ...rest } = props;

	const [values, setValues] = useState({});
	const [openModal, setOpenModal] = useState(false)
	const [modalStyle] = useState(getModalStyle);

	const classes = useStyles();

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

	}

	const handleClose = () => {
		setOpenModal(false)
	}

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<CheckCircleOutlineIcon style={{ color: '#6C987B' }} id="modal-logo" className={classes.success} />
			<p id="modal-description">
				Data pengguna berhasil ditambahkan
			</p>
			<RouterLink to='/pengguna'>
				<Button
					className={classes.btn}
					variant="contained"
				>
					Oke
					</Button>
			</RouterLink>
		</div>
	)

	return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby="modal-logo"
				aria-describedby="modal-description"
			>
				{body}
			</Modal>
			<form
				autoComplete="off"
				noValidate
			>
				<CardHeader
					title="Tambah Data Pengguna"
				/>
				<Divider />
				<CardContent>
					<Grid
						container
						spacing={3}
					>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Nama"
								margin="dense"
								name="nama"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Username"
								margin="dense"
								name="username"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Password"
								margin="dense"
								name="password"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="No HP"
								margin="dense"
								name="nohp"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Jenis Kelamin"
								margin="dense"
								name="jenis_kelamin"
								onChange={handleChange}
								required
								select
								// eslint-disable-next-line react/jsx-sort-props
								SelectProps={{ native: true }}
								variant="outlined"
							>
									<option>Laki-Laki</option>
									<option>Perempuan</option>
							</TextField>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions>
					<Button
						className={classes.btn}
						variant="contained"
						onClick={handleSubmit}
					>
						SIMPAN
          </Button>
				</CardActions>
			</form>
		</Card>
	);
};

PenggunaForm.propTypes = {
	className: PropTypes.string
};

export default PenggunaForm;
