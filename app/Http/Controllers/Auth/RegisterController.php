<?php

namespace projetoautomacao\Http\Controllers\Auth;

use projetoautomacao\Http\Controllers\Controller;
use projetoautomacao\Providers\RouteServiceProvider;
use projetoautomacao\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use projetoautomacao\SolicitarCadastro;

class RegisterController extends Controller
{
	private $solicitacao;

	/*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

	use RegistersUsers;

	/**
	 * Where to redirect users after registration.
	 *
	 * @var string
	 */
	protected $redirectTo = RouteServiceProvider::USUARIOS;

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct(SolicitarCadastro $solicitacao)
	{
		$this->middleware('auth');
		$this->solicitacao = $solicitacao;
	}

	/**
	 * Get a validator for an incoming registration request.
	 *
	 * @param  array  $data
	 * @return \Illuminate\Contracts\Validation\Validator
	 */
	protected function validator(array $data)
	{
		return Validator::make($data, [
			'nome' => ['required', 'string', 'max:255'],
			'cpf' => ['required', 'cpf', 'unique:users'],
			'email' => ['required', 'string', 'email', 'max:255', 'regex:/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i', 'unique:users'],
			'laboratorio' => ['required', 'string'],
			'categoria' => ['required', 'string'],
			'usuario' => ['required', 'string', 'min:6', 'max:15', 'regex:/^[a-z0-9_-]{6,15}$/', 'unique:users'],
			'password' => ['required', 'string', 'min:8', 'max:20'],
		]);
	}

	/**
	 * Create a new user instance after a valid registration.
	 *
	 * @param  array  $data
	 * @return \projetoautomacao\User
	 */
	protected function create(array $data)
	{
		flash('Cadastro realizado com sucesso!')->success();
		return User::create([
			'nome' => $data['nome'],
			'cpf' => $data['cpf'],
			'email' => $data['email'],
			'laboratorio' => $data['laboratorio'],
			'categoria' => $data['categoria'],
			'usuario' => $data['usuario'],
			'password' => Hash::make($data['password']),
		]);
	}

	/**
	 * Handle a registration request for the application.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function register(Request $request)
	{
		$data = $request->all();
		$solicitacoes = $this->solicitacao::all();
		foreach($solicitacoes as $solicitacao) {
			if($data['usuario'] == $solicitacao->usuario){
				$solicitacao->delete();
			}
		}
		$this->validator($data)->validate();
		event(new Registered($user = $this->create($data)));
		return $this->registered($request, $user) ?: redirect($this->redirectPath());
	}
}
