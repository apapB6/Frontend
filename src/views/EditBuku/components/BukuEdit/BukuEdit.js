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
	root: {
		minHeight: '100%'
	},
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

const BukuEdit = props => {
	const history = useHistory();
	const { className, ...rest } = props;

	const [values, setValues] = useState({});
	const [openModal, setOpenModal] = useState(false)
	const [modalStyle] = useState(getModalStyle);

	const [buku, setBuku] = useState({});

	const { id } = useParams();

	useEffect(() => {
		refreshBuku(id)
	}, [id])

	const refreshBuku = id => {
		ComponentService.editBuku(id).then(response => setBuku(response.data))
	}

	const classes = useStyles();

	const handleChange = event => {
		setBuku({
			...buku,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		ComponentService.editBukuPost(id, buku).then(response => setOpenModal(true))

	}

	const handleClose = () => {
		setOpenModal(false)
	}

	const getJenisBuku = () => {
		if (buku.id_jenis_buku === 1) {
			return 'Karya Tulis'
		} else if (buku.id_jenis_buku === 2) {
			return 'Majalah/Koran'
		} else if (buku.id_jenis_buku === 3) {
			return 'Cerita/Novel'
		} else if (buku.id_jenis_buku === 4) {
			return 'Buku Ajar'
		} else if (buku.id_jenis_buku === 5) {
			return 'Lainnya'
		}
	}


	const body = (
		<div style={modalStyle} className={classes.paper}>
			<CheckCircleOutlineIcon style={{ color: '#6C987B' }} id="modal-logo" className={classes.success} />
			<p id="modal-description">
				Data buku berhasil diubah
			</p>
			<RouterLink to='/buku'>
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
					title="Ubah Jumlah Buku"
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
								label="Jumlah Buku"
								InputLabelProps={{ shrink: true }}
								margin="dense"
								name="jumlah"
								onChange={handleChange}
								type="number"
								variant="outlined"
								value={buku.jumlah}
							/>
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

BukuEdit.propTypes = {
	className: PropTypes.string
};

export default BukuEdit;
