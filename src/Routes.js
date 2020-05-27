import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
	Dashboard as DashboardView,
	UserList as UserListView,
	PengadaanList as PengadaanListView,
	BukuList as BukuListView,
	PeminjamanList as PeminjamanListView,
	Icons as IconsView,
	Account as AccountView,
	Settings as SettingsView,
	SignUp as SignUpView,
	SignIn as SignInView,
	NotFound as NotFoundView,
	InsertBuku as BukuInsertView,
	InsertPengadaan as PengadaanInsertView,
	InsertPengguna as PenggunaInsertView,
	DetailBuku as DetailBukuView,
	DetailPengadaan as DetailPengadaanView,
	DetailPengguna as DetailPenggunaView,
	DetailPeminjaman as DetailPeminjamanView,
	EditPeminjaman as EditPeminjamanView,
	EditBuku as EditBukuView,
	DeleteBuku as DeleteBukuView,
	DeletePengadaan as DeletePengadaanView
} from './views';

const Routes = () => {
	return (
		<Switch>
			<Redirect
				exact
				from="/"
				to="/dashboard"
			/>
			<RouteWithLayout
				component={DashboardView}
				exact
				layout={MainLayout}
				path="/dashboard"
			/>
			<RouteWithLayout
				component={UserListView}
				exact
				layout={MainLayout}
				path="/users"
			/>
			<RouteWithLayout
				component={DetailPenggunaView}
				exact
				layout={MainLayout}
				path="/pengguna/detail/:id"
			/>
			<RouteWithLayout
				component={PenggunaInsertView}
				exact
				layout={MainLayout}
				path="/pengguna/add"
			/>
			<RouteWithLayout
				component={PengadaanListView}
				exact
				layout={MainLayout}
				path="/pengadaan"
			/>
			<RouteWithLayout
				component={DetailPengadaanView}
				exact
				layout={MainLayout}
				path="/pengadaan/detail/:id"
			/>
			<RouteWithLayout
				component={PengadaanInsertView}
				exact
				layout={MainLayout}
				path="/pengadaan/add"
			/>
			<RouteWithLayout
				component={DeletePengadaanView}
				exact
				layout={MainLayout}
				path="/pengadaan/delete/:id"
			/>
			<RouteWithLayout
				component={BukuInsertView}
				exact
				layout={MainLayout}
				path="/buku/add"
			/>
			<RouteWithLayout
				component={BukuListView}
				exact
				layout={MainLayout}
				path="/buku"
			/>
			<RouteWithLayout
				component={DetailBukuView}
				exact
				layout={MainLayout}
				path="/buku/:id"
			/>
			<RouteWithLayout
				component={EditBukuView}
				exact
				layout={MainLayout}
				path="/buku/edit/:id"
			/>
			<RouteWithLayout
				component={DeleteBukuView}
				exact
				layout={MainLayout}
				path="/buku/delete/:id"
			/>
			<RouteWithLayout
				component={PeminjamanListView}
				exact
				layout={MainLayout}
				path="/peminjaman"
			/>
			<RouteWithLayout
				component={DetailPeminjamanView}
				exact
				layout={MainLayout}
				path="/peminjaman/:id"
			/>
			<RouteWithLayout
				component={EditPeminjamanView}
				exact
				layout={MainLayout}
				path="/peminjaman/edit/:id"
			/>
			<RouteWithLayout
				component={AccountView}
				exact
				layout={MainLayout}
				path="/account"
			/>
			<RouteWithLayout
				component={SignUpView}
				exact
				layout={MinimalLayout}
				path="/sign-up"
			/>
			<Redirect to="/dashboard" />
		</Switch>
	);
};

export default Routes;