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
	Modal,
	InputLabel
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import ComponentService from '../ComponentService'

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
	},
	failed: {
		fontSize: '80px',
		margin: '0 0 20px'
	}
}));

const PenggunaForm = props => {
	const history = useHistory();
	const { className, ...rest } = props;

	const [values, setValues] = useState({});
	const [openModalSuccess, setOpenModalSuccess] = useState(false)
	const [openModalFailed, setOpenModalFailed] = useState(false)
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

		const pengguna = values

		ComponentService.insertPengguna(pengguna).then(response => {
			if (response.data === true) {
				setOpenModalSuccess(true)
			} else {
				setOpenModalFailed(true)
			}
		}
		)

	}

	const handleCloseSuccess = () => {
		setOpenModalSuccess(false)
	}
	const handleCloseFailed = () => {
		setOpenModalFailed(false)
	}

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<CheckCircleOutlineIcon style={{ color: '#6C987B' }} id="modal-logo" className={classes.success} />
			<p id="modal-description">
				Data pengguna berhasil ditambahkan
			</p>
			<RouterLink to='/users'>
				<Button
					className={classes.btn}
					variant="contained"
				>
					Oke
					</Button>
			</RouterLink>
		</div>
	)

	const bodyFailed = (
		<div style={modalStyle} className={classes.paper}>
			<CancelIcon style={{ color: '#FF0000' }} id="modal-logo" className={classes.failed} />
			<p id="modal-description">
				Username sudah terpakai
			</p>
				<Button
					className={classes.btn}
					variant="contained"
				>
					Oke
			</Button>
		</div>
	)

	return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<Modal
				open={openModalSuccess}
				onClose={handleCloseSuccess}
				aria-labelledby="modal-logo"
				aria-describedby="modal-description"
			>
				{body}
			</Modal>
			<Modal
				open={openModalFailed}
				onClose={handleCloseFailed}
				aria-labelledby="modal-logo"
				aria-describedby="modal-description"
			>
				{bodyFailed}
			</Modal>
			<form
				autoComplete="off"
				noValidate
				onSubmit={handleSubmit}
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
								label="Tempat Lahir"
								margin="dense"
								name="tempat_lahir"
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
								InputLabelProps={{ shrink: true }}
								fullWidth
								label="Tanggal Lahir"
								margin="dense"
								name="tanggal_lahir"
								onChange={handleChange}
								required
								type="date"
								placeholder=""
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
								label="Alamat"
								margin="dense"
								name="alamat"
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
								label="Telepon"
								margin="dense"
								name="telepon"
								onChange={handleChange}
								required
								type="number"
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


					</Grid>
				</CardContent>
				<Divider />
				<CardActions>
					<Button
						className={classes.btn}
						variant="contained"
						// onClick={handleSubmit}
						type="submit"
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