import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter, useHistory, useParams } from 'react-router-dom';
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
	}
}));

const PeminjamanEdit = props => {
	const history = useHistory();
	const { className, ...rest } = props;

	const [values, setValues] = useState({});
	const [openModal, setOpenModal] = useState(false)
	const [modalStyle] = useState(getModalStyle);

	const [peminjaman, setPeminjaman] = useState({});

	const { id } = useParams();

	useEffect(() => {
		refreshPeminjaman(id)
	}, [id])

	const refreshPeminjaman = id => {
		ComponentService.editPeminjaman(id).then(response => setPeminjaman(response.data))
	}

	const classes = useStyles();

	const handleChange = event => {
		setPeminjaman({
			...peminjaman,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		ComponentService.editPeminjamanPost(id, peminjaman).then(response => setOpenModal(true))

	}

	const handleClose = () => {
		setOpenModal(false)
	}

	const jenisStatus = [
		{
			value: 0,
			label: 'Menunggu Persetujuan'
		},
		{
			value: 1,
			label: 'Ditolak'
		},
		{
			value: 2,
			label: 'Disetujui'
		},
		{
			value: 3,
			label: 'Sudah Diambil'
		},
		{
			value: 4,
			label: 'Sudah Dikembalikan'
		},
		{
			value: 5,
			label: 'Overdue'
		}
	];

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<CheckCircleOutlineIcon style={{ color: '#6C987B' }} id="modal-logo" className={classes.success} />
			<p id="modal-description">
				Data peminjaman berhasil diubah
			</p>
			<RouterLink to='/peminjaman'>
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
					title="Ubah Status Peminjaman"
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
								label="Status"
								InputLabelProps={{ shrink: true }}
								margin="dense"
								name="status"
								onChange={handleChange}
								required
								select
								// eslint-disable-next-line react/jsx-sort-props
								SelectProps={{ native: true }}
								variant="outlined"
								value={peminjaman.status}
							>
								{jenisStatus.map(option => (
									<option
										key={option.value}
										value={option.value}
									>
										{option.label}
									</option>
								))}
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
						UBAH
          			</Button>
				</CardActions>
			</form>
		</Card>
	);
};

PeminjamanEdit.propTypes = {
	className: PropTypes.string
};

export default PeminjamanEdit;
