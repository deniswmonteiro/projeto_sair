<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::resource('cadastro', 'SolicitarCadastroController');

Route::group(['middleware' => ['auth']], function () {
	Route::namespace('Andares')->group(function () {
		Route::resource('terreo', 'TerreoController');
		Route::resource('primeiroandar', 'PrimeiroAndarController');
		Route::resource('segundoandar', 'SegundoAndarController');
	});

	Route::prefix('usuarios')->namespace('Auth')->name('usuarios.')->group(function () {
		Route::get('cadastrar', 'RegisterController@showRegistrationForm')->name('form');
		Route::post('cadastro', 'RegisterController@register')->name('cadastro');
	});

	Route::namespace('Admin')->group(function () {
		Route::group(['middleware' => ['checar.categoria']], function () {
			Route::resource('solicitar', 'SolicitacoesController');
			Route::get('solicitar/editar/{slug?}', 'SolicitacoesController@edit')->name('solicitar.editar');

			Route::resource('usuario', 'UsuarioController');
			Route::get('usuario/editar/{slug?}', 'UsuarioController@edit')->name('usuario.editar');
			Route::post('usuario', 'UsuarioController@pesquisar')->name('usuario.pesquisar');
		});
	});
});

Route::resource('email', 'Admin\EmailController');