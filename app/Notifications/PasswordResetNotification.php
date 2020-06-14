<?php

namespace projetoautomacao\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PasswordResetNotification extends Notification
{
	use Queueable;

	public $token;

	public function __construct($token) {
		$this->token = $token;
	}
	
	/**
	 * Get the notification's delivery channels.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function via($notifiable)
	{
		return ['mail'];
	}

	/**
	 * Get the mail representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	public function toMail($notifiable)
	{
		$url = url(route('senha.reset.token', ['token' => $this->token, 'email' => $notifiable->getEmailForPasswordReset()], false));

		return (new MailMessage)
			->subject("SAIR - Redefinição de Senha")
			->markdown("emails.redefinirsenha", ['url' => $url]);
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function toArray($notifiable)
	{
		return [
			//
		];
	}
}
